import Link from "next/link"
import Image from "next/image"

export function Footer() {
    return (
        <footer className="bg-muted/30 border-t border-border py-12">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-2 space-y-4">
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
                        <p className="text-sm text-muted-foreground max-w-xs">
                            대학생 소속 인증 기반 매칭 플랫폼.<br />
                            안전하고 즐거운 만남을 지향합니다.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">서비스</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="#features" className="hover:text-primary transition-colors">주요 기능</Link></li>
                            <li><Link href="#how-it-works" className="hover:text-primary transition-colors">이용 방법</Link></li>
                            <li><Link href="#benefits" className="hover:text-primary transition-colors">특징</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">문의</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><a href="mailto:support@tingle.info" className="hover:text-primary transition-colors">support@tingle.info</a></li>
                            <li><Link href="/terms" className="hover:text-primary transition-colors">이용약관</Link></li>
                            <li><Link href="/privacy" className="hover:text-primary transition-colors">개인정보처리방침</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
                    © {new Date().getFullYear()} TINGLE. All rights reserved.
                </div>
            </div>
        </footer>
    )
}
