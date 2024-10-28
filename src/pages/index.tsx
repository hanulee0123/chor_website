import React from 'react'
import Layout from '@/components/Layout'
import Image from 'next/image'
import Link from 'next/link'
import { useConfig } from '@/utils/config'

const Home: React.FC = () => {
  const { choirName } = useConfig()

  return (
    <Layout>
      <div className="relative h-[60vh] md:h-[70vh]">
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
          <Link href="/about" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
            詳細を見る
          </Link>
        </div>
      </div>
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">私たちについて</h2>
          <p className="text-lg text-center max-w-2xl mx-auto mb-8">
            {choirName}は、九州、特に大分を中心に活動する合唱団です。
            合唱を通じて地域の文化振興に貢献し、音楽の素晴らしさを広めることを目指しています。
          </p>
          <div className="flex justify-center">
            <Link href="/about" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
              もっと詳しく
            </Link>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">最新のイベント</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* イベントカードをここに追加 */}
            <EventCard
              title="春の定期演奏会"
              date="2024年5月15日"
              location="大分市民会館"
              description="春をテーマにした曲を中心に、心温まるコンサートをお届けします。"
            />
            <EventCard
              title="夏の野外コンサート"
              date="2024年8月10日"
              location="大分城址公園"
              description="野外での爽やかな歌声をお楽しみください。夕暮れ時の特別なステージです。"
            />
            <EventCard
              title="秋の合同演奏会"
              date="2024年10月22日"
              location="別府ビーコンプラザ"
              description="九州の他の合唱団と共演。多彩な歌声の響演をお楽しみください。"
            />
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/events" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
              すべてのイベントを見る
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Home

const EventCard: React.FC<{ title: string; date: string; location: string; description: string }> = ({ title, date, location, description }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{date} - {location}</p>
      <p className="text-gray-700">{description}</p>
    </div>
  </div>
)