"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function CTA() {
    return (
        <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto space-y-8"
                >
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        지금 바로 TINGLE에서<br />새로운 인연을 만나보세요
                    </h2>
                    <p className="text-primary-foreground/80 md:text-xl max-w-[600px] mx-auto">
                        대학생 인증으로 더 안전하고, AI 프로필로 더 특별하게.<br></br>
                        당신의 캠퍼스 라이프를 더 설레게 만들어드릴게요.
                    </p>
                    <Button asChild size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full shadow-lg hover:shadow-xl transition-all bg-background text-primary hover:bg-accent border-2 border-background">
                        <Link href="https://tingle.info" className="flex items-center gap-2">
                            인연 만들러 가기
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </Button>
                </motion.div>
            </div>

            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2" />
                <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl -translate-y-1/2" />
            </div>
        </section>
    )
}
