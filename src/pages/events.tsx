import React from 'react'
import Layout from '@/components/Layout'
import EventCard from '@/components/EventCard'

const Events: React.FC = () => {
  const events = [
    {
      title: "春の定期演奏会",
      date: "2024年5月15日",
      location: "大分市民会館",
      description: "春をテーマにした曲を中心に、心温まるコンサートをお届けします。"
    },
    {
      title: "夏の野外コンサート",
      date: "2024年8月10日",
      location: "大分城址公園",
      description: "野外での爽やかな歌声をお楽しみください。夕暮れ時の特別なステージです。"
    },
    // 他のイベントを追加
  ]

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">イベント情報</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Events