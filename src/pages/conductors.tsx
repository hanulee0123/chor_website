import Header from '@/components/header'
import Footer from '@/components/footer'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'

export default function ConductorsPage() {
  const conductors = [
    { id: 1, name: '山田太郎', image: '/placeholder.svg', bio: '20年以上の指揮経験を持つ。国内外の多くの合唱団を指揮。' },
    { id: 2, name: '佐藤花子', image: '/placeholder.svg', bio: 'ピアニストとしても活躍。若手指揮者として注目を集めている。' },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">指揮者紹介</h1>
        <div className="grid gap-6 md:grid-cols-2">
          {conductors.map((conductor) => (
            <Card key={conductor.id}>
              <CardHeader>
                <Image
                  src={conductor.image}
                  alt={conductor.name}
                  width={300}
                  height={300}
                  className="rounded-full mx-auto mb-4"
                />
                <CardTitle className="text-center">{conductor.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{conductor.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}