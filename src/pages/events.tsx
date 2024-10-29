import Header from '@/components/header'
import Footer from '@/components/footer'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from 'lucide-react'

export default function EventsPage() {
  const events = [
    { id: 1, title: '春のコンサート', date: '2024年5月15日', location: '大分市民ホール', description: '春をテーマにした楽曲を中心に演奏します。' },
    { id: 2, title: '夏の野外ライブ', date: '2024年7月20日', location: '大分市中央公園', description: '野外での爽やかな歌声をお楽しみください。' },
    { id: 3, title: '秋の合同演奏会', date: '2024年10月10日', location: '別府市民文化ホール', description: '他の合唱団との合同演奏会です。' },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">イベント情報</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <Card key={event.id}>
              <CardHeader>
                <CardTitle>{event.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="flex items-center mb-2"><Calendar className="mr-2" /> {event.date}</p>
                <p className="mb-2">{event.location}</p>
                <p className="mb-4">{event.description}</p>
                <Button>詳細を見る</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}