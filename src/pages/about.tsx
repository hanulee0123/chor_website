import React from 'react'
import Layout from '@/components/Layout'
import { useConfig } from '@/utils/config'

const About: React.FC = () => {
  const { choirName, foundationDate } = useConfig()

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">{choirName}について</h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">概要</h2>
          <p className="mb-4">
            {choirName}は、{foundationDate}に設立された合唱団です。
            主に九州地方、特に大分県を中心に活動しています。
          </p>
          <p className="mb-4">
            私たちの目標は、合唱を通じて地域の文化振興に貢献し、音楽の素晴らしさを広めることです。
            合唱指導の練習をしたい人から、合唱が大好きな人まで、合唱に対する熱い想いがある方々が集まっています。
          </p>
          <h2 className="text-2xl font-bold mb-4 mt-8">団員募集</h2>
          <p>
            現在、新しい団員を募集しています。合唱経験の有無は問いません。
            音楽を愛し、共に成長していきたい方のご参加をお待ちしています。
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default About