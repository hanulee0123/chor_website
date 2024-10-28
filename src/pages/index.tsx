import React from 'react'
import Layout from '@/components/Layout'
import Image from 'next/image'
import Link from 'next/link'
import { useConfig } from '@/utils/config'

const Home: React.FC = () => {
  const { choirName } = useConfig()

  return (
    <Layout>
      <div className="relative h-screen">
        <Image
          src="/images/main-image.png"
          alt="合唱団メインイメージ"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{choirName}</h1>
          <p className="text-xl md:text-2xl mb-8">九州の心に響く歌声</p>
          <Link href="/about" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            詳細を見る
          </Link>
        </div>
      </div>
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">私たちについて</h2>
          <p className="text-lg text-center max-w-2xl mx-auto">
            {choirName}は、九州、特に大分を中心に活動する合唱団です。
            合唱を通じて地域の文化振興に貢献し、音楽の素晴らしさを広めることを目指しています。
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default Home