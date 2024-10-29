import Header from '@/components/header'
import Footer from '@/components/footer'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle } from 'lucide-react'

export default function JoinPage() {
  const requirements = [
    '合唱に興味がある方',
    '週1回の練習に参加できる方',
    '音楽経験は問いません',
    '18歳以上の方',
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">入団案内</h1>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>入団要件</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {requirements.map((req, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="mr-2 text-green-500" />
                  {req}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>入団の流れ</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal list-inside space-y-2">
              <li>お問い合わせフォームから連絡</li>
              <li>練習見学（随時受付中）</li>
              <li>簡単な面談</li>
              <li>入団手続き</li>
            </ol>
            <div className="mt-6">
              <Button size="lg">お問い合わせフォームへ</Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  )
}