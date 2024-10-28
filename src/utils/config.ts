import { useState, useEffect } from 'react'

type Config = {
  choirName: string
  foundationDate: string
}

export const useConfig = (): Config => {
  const [config, setConfig] = useState<Config>({
    choirName: '',
    foundationDate: '',
  })

  useEffect(() => {
    setConfig({
      choirName: process.env.NEXT_PUBLIC_CHOIR_NAME || '合唱団名をここに入力,
      foundationDate: process.env.NEXT_PUBLIC_FOUNDATION_DATE || '2025年4月1日',
    })
  }, [])

  return config
}