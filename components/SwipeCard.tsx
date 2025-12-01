"use client"

import { useState } from "react"
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

export function SwipeCard({ profile, onSwipe, isFront = false }: Props) {
    const x = useMotionValue(0)
    const controls = useAnimation()

    // Rotation based on x position (max ±15 degrees)
    const rotate = useTransform(x, [-200, 200], [-15, 15])

    // Opacity for like/dislike indicators
    const likeOpacity = useTransform(x, [20, 100], [0, 1])
    const dislikeOpacity = useTransform(x, [-20, -100], [0, 1])

    const handleDragEnd = async (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        const offset = info.offset.x
        const velocity = info.velocity.x

        if (offset > 100 || velocity > 500) {
            await controls.start({ x: 500, opacity: 0, transition: { duration: 0.2 } })
            onSwipe?.("right")
        } else if (offset < -100 || velocity < -500) {
            await controls.start({ x: -500, opacity: 0, transition: { duration: 0.2 } })
            onSwipe?.("left")
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
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            className="absolute w-full h-full bg-card rounded-[32px] shadow-2xl overflow-hidden cursor-grab active:cursor-grabbing border border-border"
            whileTap={{ scale: 1.02 }}
        >
            {/* Swipe Indicators */}
            {isFront && (
                <>
                    <motion.div
                        style={{ opacity: likeOpacity }}
                        className="absolute top-8 left-8 z-20 transform -rotate-12 border-4 border-green-500 rounded-xl px-4 py-2 bg-white/20 backdrop-blur-sm"
                    >
                        <span className="text-4xl font-black text-green-500 uppercase tracking-widest drop-shadow-sm">LIKE</span>
                    </motion.div>
                    <motion.div
                        style={{ opacity: dislikeOpacity }}
                        className="absolute top-8 right-8 z-20 transform rotate-12 border-4 border-red-500 rounded-xl px-4 py-2 bg-white/20 backdrop-blur-sm"
                    >
                        <span className="text-4xl font-black text-red-500 uppercase tracking-widest drop-shadow-sm">NOPE</span>
                    </motion.div>
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
}
