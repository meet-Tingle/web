"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function Header() {
    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between bg-background/80 px-6 backdrop-blur-md border-b border-border"
        >
            <Link href="/" className="flex items-center gap-2">
                <Image
                    src="/images/logo-mini.png"
                    alt="TINGLE Logo"
                    width={32}
                    height={32}
                    className="h-8 w-8 object-contain"
                />
                <span className="text-xl font-bold text-foreground">TINGLE</span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
                <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                    주요 기능
                </Link>
                <Link href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                    이용 방법
                </Link>
                <Link href="#benefits" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                    특징
                </Link>
            </nav>

            <div className="flex items-center gap-4">
                <Button asChild>
                    <Link href="https://tingle.info">인연 만들러 가기</Link>
                </Button>
            </div>
        </motion.header>
    )
}
