import Link from 'next/link'
import { useState } from 'react'
import { Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Header({ choirName = '九州合唱団' }: { choirName?: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-primary text-primary-foreground py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">{choirName}</h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <li><Link href="/" className="hover:underline">ホーム</Link></li>
              <li><Link href="/about" className="hover:underline">About</Link></li>
              <li><Link href="/events" className="hover:underline">イベント</Link></li>
              <li><Link href="/conductors" className="hover:underline">指揮者</Link></li>
              <li><Link href="/join" className="hover:underline">入団案内</Link></li>
              <li><Link href="/contact" className="hover:underline">お問い合わせ</Link></li>
            </ul>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-6 w-6" />
            <span className="sr-only">メニューを開く</span>
          </Button>
        </div>
        {isMenuOpen && (
          <nav className="mt-4 md:hidden">
            <ul className="flex flex-col space-y-2">
              <li><Link href="/" className="hover:underline">ホーム</Link></li>
              <li><Link href="/about" className="hover:underline">About</Link></li>
              <li><Link href="/events" className="hover:underline">イベント</Link></li>
              <li><Link href="/conductors" className="hover:underline">指揮者</Link></li>
              <li><Link href="/join" className="hover:underline">入団案内</Link></li>
              <li><Link href="/contact" className="hover:underline">お問い合わせ</Link></li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}