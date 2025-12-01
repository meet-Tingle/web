"use client"

import { ShieldCheck, Sparkles, Smartphone, Layers } from "lucide-react"
import { motion } from "framer-motion"

const benefits = [
    {
        icon: ShieldCheck,
        title: "대학생 소속 인증으로 안전한 매칭",
        description: "철저한 학교 이메일 인증을 통해 검증된 대학생들만 만날 수 있어요. 신뢰할 수 있는 환경에서 새로운 인연을 시작해보세요.",
    },
    {
        icon: Sparkles,
        title: "AI 기반 개인화된 프로필 이미지",
        description: "나만의 개성을 담은 AI 프로필 이미지를 생성해드려요. 사진 공개 부담 없이 나를 표현할 수 있어요.",
    },
    {
        icon: Smartphone,
        title: "직관적인 스와이프 인터페이스",
        description: "간편한 스와이프 동작으로 마음에 드는 친구를 찾아보세요. 복잡한 절차 없이 직관적으로 사용할 수 있어요.",
    },
    {
        icon: Layers,
        title: "다양한 매칭 카테고리",
        description: "친구, 연애, 같은 학과, 동갑내기 등 다양한 카테고리에서 내가 원하는 목적에 맞는 인연을 찾을 수 있어요.",
    },
]

export function Benefits() {
    return (
        <section id="benefits" className="py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        주요 특징
                    </h2>
                    <p className="mt-4 text-muted-foreground md:text-xl">
                        TINGLE만의 특별함을 경험해보세요
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="flex gap-6 items-start"
                        >
                            <div className="flex-shrink-0 p-4 rounded-2xl bg-primary/10 text-primary">
                                <benefit.icon className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
