import React from 'react'
import Layout from '@/components/Layout'
import Image from 'next/image'

const Conductor: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">指揮者紹介</h1>
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-6 md:mb-0">
            <Image
              src="/images/conductor.jpg"
              alt="指揮者"
              width={300}
              height={300}
              className="rounded-full"
            />
          </div>
          <div className="md:w-2/3 md:pl-8">
            <h2 className="text-2xl font-bold mb-4">山田 太郎</h2>
            <p className="mb-4">
              山田太郎は、国内外で活躍する指揮者です。東京音楽大学を卒業後、
              ヨーロッパで研鑽を積み、数々の合唱団を指揮してきました。
            </p>
            <p>
              その豊富な経験と情熱的な指導で、団員一人一人の声を大切にしながら、
              ハーモニーの素晴らしさを引き出します。
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Conductor