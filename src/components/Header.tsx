import React from 'react'
import Link from 'next/link'
import { useConfig } from '@/utils/config'

const Header: React.FC = () => {
  const { choirName } = useConfig()

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          {choirName}
        </Link>
        <ul className="flex space-x-4">
          <li><Link href="/" className="hover:text-blue-600 transition duration-300">ホーム</Link></li>
          <li><Link href="/about" className="hover:text-blue-600 transition duration-300">概要</Link></li>
          <li><Link href="/events" className="hover:text-blue-600 transition duration-300">イベント</Link></li>
          <li><Link href="/conductor" className="hover:text-blue-600 transition duration-300">指揮者紹介</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header