"use client"

import { Users, Heart, GraduationCap, Calendar, Coffee } from "lucide-react"
import { motion } from "framer-motion"

const features = [
    {
        icon: Users,
        title: "친구 매칭",
        description: "새로운 찐친을 만나보세요",
        color: "bg-blue-100 text-blue-600",
    },
    {
        icon: Heart,
        title: "이성 매칭",
        description: "설레는 인연을 찾아보세요",
        color: "bg-pink-100 text-pink-600",
    },
    {
        icon: GraduationCap,
        title: "같은 학과 매칭",
        description: "우리 과 친구를 만나보세요",
        color: "bg-green-100 text-green-600",
    },
    {
        icon: Calendar,
        title: "같은 나이 매칭",
        description: "동갑내기 친구를 찾아보세요",
        color: "bg-purple-100 text-purple-600",
    },
]

export function Features() {
    return (
        <section id="features" className="py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        다양한 매칭 카테고리
                    </h2>
                    <p className="mt-4 text-muted-foreground md:text-xl">
                        원하는 인연을 쉽고 빠르게 찾아보세요
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group flex flex-col items-center p-8 rounded-2xl bg-muted/50 hover:bg-card hover:shadow-xl transition-all border border-transparent hover:border-border"
                        >
                            <div className={`p-4 rounded-full mb-6 ${feature.color} group-hover:scale-110 transition-transform`}>
                                <feature.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                            <p className="text-muted-foreground text-center">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
