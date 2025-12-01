"use client"

import { motion } from "framer-motion"

const steps = [
    {
        number: "01",
        title: "회원가입 및 대학 인증",
        description: "학교 이메일로 안전하게 소속을 인증하세요.",
    },
    {
        number: "02",
        title: "프로필 작성",
        description: "나를 표현하는 프로필을 작성하고 AI 이미지를 생성해보세요.",
    },
    {
        number: "03",
        title: "매칭 카테고리 선택",
        description: "친구, 연애, 힐링 등 원하는 만남을 선택하세요.",
    },
    {
        number: "04",
        title: "탐색 및 스와이프",
        description: "마음에 드는 친구에게 좋아요를 보내보세요.",
    },
    {
        number: "05",
        title: "인연 만들기",
        description: "서로 좋아요를 보내면 매칭이 성사됩니다!",
    },
]

export function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24 bg-muted/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        이용 방법
                    </h2>
                    <p className="mt-4 text-muted-foreground md:text-xl">
                        TINGLE과 함께하는 5단계 여정
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="relative flex flex-col items-center text-center"
                        >
                            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-card shadow-lg text-2xl font-bold text-primary mb-6 border border-border z-10">
                                {step.number}
                            </div>

                            {/* Connector Line (except for last item) */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-border -z-0" />
                            )}

                            <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                            <p className="text-sm text-muted-foreground">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
