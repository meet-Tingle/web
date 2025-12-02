"use client"

import { useState, forwardRef, useImperativeHandle } from "react"
import Image from "next/image"
import { motion, useMotionValue, useTransform, useAnimation, PanInfo } from "framer-motion"

export interface ProfileProps {
    id: number
    username: string
    age: number
    gender: "M" | "F"
    mbti: string
    entrance_year: number
    is_graduation: boolean
    self_introduction: string
    image_url: string
}

interface Props {
    profile: ProfileProps
    onSwipe?: (direction: "left" | "right") => void
    isFront?: boolean
}

export interface SwipeCardRef {
    swipe: (direction: "left" | "right") => Promise<void>
}

interface Props {
    profile: ProfileProps
    onSwipe?: (direction: "left" | "right") => void
    isFront?: boolean
    dragConstraints?: { left: number; right: number }
}

export const SwipeCard = forwardRef<SwipeCardRef, Props>(({ profile, onSwipe, isFront = false, dragConstraints }, ref) => {
    const x = useMotionValue(0)
    const controls = useAnimation()

    // Rotation based on x position (max ±15 degrees)
    const rotate = useTransform(x, [-200, 200], [-15, 15])

    const handleSwipe = async (direction: "left" | "right") => {
        const targetX = direction === "right" ? 500 : -500
        await controls.start({ x: targetX, opacity: 0, transition: { duration: 0.2 } })
        onSwipe?.(direction)
    }

    useImperativeHandle(ref, () => ({
        swipe: handleSwipe
    }))

    const handleDragEnd = async (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        const offset = info.offset.x
        const velocity = info.velocity.x

        if (offset > 100 || velocity > 500) {
            await handleSwipe("right")
        } else if (offset < -100 || velocity < -500) {
            await handleSwipe("left")
        } else {
            controls.start({ x: 0, transition: { type: "spring", stiffness: 300, damping: 20 } })
        }
    }

    return (
        <motion.div
            style={{
                x,
                rotate,
                zIndex: isFront ? 10 : 0,
            }}
            animate={controls}
            drag={isFront ? "x" : false}
            dragConstraints={dragConstraints || { left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            className="absolute w-full h-full bg-card rounded-[32px] shadow-2xl overflow-hidden cursor-grab active:cursor-grabbing border border-border"
            whileTap={{ scale: 1.02 }}
        >
            {/* Swipe Indicators */}
            {isFront && (
                <>
                    {/* Hand Gesture Hint */}
                    <HandGesture />
                </>
            )}

            {/* Image */}
            <div className="relative h-[72%] w-full bg-muted">
                <Image
                    src={profile.image_url}
                    alt={profile.username}
                    fill
                    className="object-cover pointer-events-none"
                    priority={isFront}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60" />
            </div>

            {/* Content */}
            <div className="absolute bottom-0 w-full h-[28%] bg-card p-6 flex flex-col justify-center">
                <div className="flex items-end gap-2 mb-1.5">
                    <h2 className="text-2xl font-bold text-card-foreground">{profile.username}</h2>
                    <span className="text-xl font-medium text-muted-foreground mb-0.5">{profile.age}</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground mb-3">
                    <span className="bg-muted px-2 py-0.5 rounded-md text-muted-foreground">{profile.entrance_year}학번</span>
                    <span>·</span>
                    <span>{profile.is_graduation ? "졸업" : "재학"}</span>
                    <span>·</span>
                    <span className="text-primary">{profile.mbti}</span>
                </div>
                <p className="text-card-foreground/80 text-sm leading-relaxed line-clamp-2">{profile.self_introduction}</p>
            </div>
        </motion.div>
    )
})
SwipeCard.displayName = "SwipeCard"

function HandGesture() {
    return (
        <motion.div
            initial={{ opacity: 0, x: 0, y: 0, rotate: 0 }}
            animate={{
                opacity: [0, 1, 1, 0],
                x: [0, -30, 30, 0],
                y: [0, -10, -10, 0],
                rotate: [0, -15, 15, 0]
            }}
            transition={{
                duration: 2.5,
                times: [0, 0.1, 0.8, 1],
                repeat: 0,
                delay: 1
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none"
        >
            <div className="bg-white/90 p-3 rounded-full shadow-lg backdrop-blur-sm">
                <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                >
                    <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
                    <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" />
                    <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" />
                    <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
                </svg>
            </div>
        </motion.div>
    )
}
