import React from 'react'
import Link from 'next/link'
import { useConfig } from '@/utils/config'

const Header: React.FC = () => {
  const { choirName } = useConfig()

  return (
    <header className="bg-blue-600 text-white">
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          {choirName}
        </Link>
        <ul className="flex space-x-4">
          <li><Link href="/" className="hover:underline">ホーム</Link></li>
          <li><Link href="/about" className="hover:underline">概要</Link></li>
          <li><Link href="/events" className="hover:underline">イベント</Link></li>
          <li><Link href="/conductor" className="hover:underline">指揮者紹介</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header