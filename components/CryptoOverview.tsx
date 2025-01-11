'use client'

import { useState, useEffect } from 'react'
import { TradingViewWidget } from './TradingViewWidget'
import Image from 'next/image'

interface CryptoData {
  bitcoin: {
    inr: number
    inr_24h_change: number
    usd: number
    usd_24h_change: number
  }
}

export default function CryptoOverview() {
  const [cryptoData, setCryptoData] = useState<CryptoData | null>(null)

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr,usd&include_24hr_change=true')
      .then(response => response.json())
      .then(data => setCryptoData(data))
  }, [])

  if (!cryptoData) {
    return <div>Loading...</div>
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center gap-2 mb-4">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-55KE0McrmLPTo4xQ2ha1S6eTdUrgT8.png"
          alt="Bitcoin"
          width={32}
          height={32}
          className="w-8 h-8"
        />
        <h1 className="text-2xl font-bold">Bitcoin</h1>
        <span className="text-gray-500">BTC</span>
        <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded ml-4">Rank #1</span>
      </div>
      <div className="flex items-baseline mb-4">
        <span className="text-3xl font-bold">${cryptoData.bitcoin.usd.toLocaleString()}</span>
        <span className={`ml-2 ${cryptoData.bitcoin.usd_24h_change > 0 ? 'text-green-500' : 'text-red-500'}`}>
          {cryptoData.bitcoin.usd_24h_change.toFixed(2)}%
        </span>
        <span className="text-gray-500 ml-2">(24H)</span>
      </div>
      <div className="mb-4">
        <span className="text-lg">₹ {cryptoData.bitcoin.inr.toLocaleString()}</span>
      </div>
      <TradingViewWidget />
    </div>
  )
}

