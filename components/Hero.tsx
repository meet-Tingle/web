"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { SwipeCard, ProfileProps, SwipeCardRef } from "@/components/SwipeCard"
import { ArrowRight, X, Heart } from "lucide-react"

const MOCK_PROFILES: ProfileProps[] = [
    {
        id: 1,
        username: "김팅글",
        age: 22,
        gender: "F",
        mbti: "ENFP",
        entrance_year: 21,
        is_graduation: false,
        self_introduction: "새로운 인연을 찾고 싶어요! 🎵 맛집 탐방 좋아하시는 분?",
        image_url: "/images/profile-image-1.png",
    },
    {
        id: 2,
        username: "이서울",
        age: 24,
        gender: "M",
        mbti: "ISTJ",
        entrance_year: 19,
        is_graduation: false,
        self_introduction: "진지한 만남 추구합니다. 🍜 같이 공부하실 분 구해요.",
        image_url: "/images/profile-image-2.png",
    },
    {
        id: 3,
        username: "박서준",
        age: 21,
        gender: "M",
        mbti: "ESFJ",
        entrance_year: 22,
        is_graduation: false,
        self_introduction: "영화 보는 거 좋아해요! 🎬 주말에 같이 영화 보러 가요~",
        image_url: "/images/profile-image-3.png",
    },
    {
        id: 4,
        username: "김서영",
        age: 21,
        gender: "F",
        mbti: "ISFP",
        entrance_year: 21,
        is_graduation: false,
        self_introduction: "동물 키우는 거 좋아해요! 🐾 ",
        image_url: "/images/profile-image-4.png",
    },
]

export function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [feedbackEffect, setFeedbackEffect] = useState<"left" | "right" | null>(null)
    const swipeCardRef = useRef<SwipeCardRef>(null)

    const handleSwipe = (direction: "left" | "right") => {
        setFeedbackEffect(direction)
        setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % MOCK_PROFILES.length)
            setFeedbackEffect(null)
        }, 200)
    }

    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-secondary/30 to-background pt-20 pb-10">
            <div className="container relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4 md:px-6">

                {/* Left Column: Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center md:items-start text-center md:text-left space-y-6"
                >
                    <div className="space-y-2">
                        <h2 className="text-xl md:text-2xl font-bold text-primary">
                            서울시립대 학생 전용 매칭 플랫폼
                        </h2>
                        <h1 className="text-3xl md:text-6xl font-extrabold tracking-tighter text-foreground leading-tight">
                            학교 친구들과<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
                                새로운 인연을 시작하는 곳
                            </span>
                        </h1>
                    </div>

                    <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl leading-relaxed">
                        TINGLE에서 검증된 서울시립대 친구들을 만나보세요.<br />
                        스와이프로 간편하게 호감을 표시하고 매칭될 수 있어요.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button asChild size="lg" className="h-14 px-8 text-xl rounded-lg shadow-lg hover:shadow-xl transition-all">
                            <Link href="https://tingle.info">지금 시작하기<ArrowRight /></Link>
                        </Button>
                    </div>
                </motion.div>

                {/* Right Column: Swipe Demo */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative flex flex-col items-center h-[600px] w-full"
                >
                    <div className="relative w-full max-w-sm h-[500px]">
                        {/* Background decorative elements */}
                        <div className="absolute top-1/2 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/50 blur-3xl" />

                        {/* Card Stack */}
                        {[...MOCK_PROFILES].reverse().map((profile, index) => {
                            const originalIndex = MOCK_PROFILES.length - 1 - index
                            // Only render current and next card
                            if (originalIndex < currentIndex) return null
                            if (originalIndex > currentIndex + 1) return null

                            const isFront = originalIndex === currentIndex

                            return (
                                <div
                                    key={profile.id}
                                    className="absolute inset-0 flex items-center justify-center"
                                    style={{
                                        zIndex: isFront ? 10 : 0,
                                        transform: isFront ? "none" : "scale(0.95) translateY(10px)",
                                        opacity: isFront ? 1 : 0.5,
                                        transition: "all 0.3s ease"
                                    }}
                                >
                                    <SwipeCard
                                        ref={isFront ? swipeCardRef : null}
                                        profile={profile}
                                        isFront={isFront}
                                        onSwipe={isFront ? handleSwipe : undefined}
                                    />
                                </div>
                            )
                        })}

                        {/* Post-Swipe Feedback Effect */}
                        <AnimatePresence>
                            {feedbackEffect === "right" && (
                                <motion.div
                                    initial={{ scale: 0.5, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.8, opacity: 0 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                                    className="absolute inset-0 z-50 flex items-center justify-center pointer-events-none"
                                >
                                    <div className="p-6 rounded-full shadow-xl bg-white/90 backdrop-blur-sm">
                                        <Heart className="w-16 h-16 text-red-500 fill-red-500" />
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-6 mt-8 z-20">
                        <Button
                            variant="outline"
                            size="icon"
                            className="h-16 w-16 rounded-full border-2 border-red-500 bg-background hover:bg-red-50 hover:border-red-600 transition-all shadow-lg"
                            onClick={() => swipeCardRef.current?.swipe("left")}
                        >
                            <X className="h-8 w-8 text-red-500" />
                            <span className="sr-only">Nope</span>
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            className="h-16 w-16 rounded-full border-2 border-green-500 bg-background hover:bg-green-50 hover:border-green-600 transition-all shadow-lg"
                            onClick={() => swipeCardRef.current?.swipe("right")}
                        >
                            <Heart className="h-8 w-8 text-green-500 fill-green-500" />
                            <span className="sr-only">Like</span>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
