'use client'

import { useState, useEffect } from 'react'

interface TrendingCoin {
  item: {
    id: string
    coin_id: number
    name: string
    symbol: string
    market_cap_rank: number
    thumb: string
    small: string
    large: string
    slug: string
    price_btc: number
    score: number
  }
}

export default function TrendingCoins() {
  const [trendingCoins, setTrendingCoins] = useState<TrendingCoin[]>([])

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/search/trending')
      .then(response => response.json())
      .then(data => setTrendingCoins(data.coins.slice(0, 3)))
  }, [])

  return (
    <div className="bg-white rounded-lg shadow p-6 mt-8">
      <h2 className="text-2xl font-bold mb-4">Trending Coins (24h)</h2>
      {trendingCoins.map((coin) => (
        <div key={coin.item.id} className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <img src={coin.item.small} alt={coin.item.name} className="w-6 h-6 mr-2" />
            <span>{coin.item.name} ({coin.item.symbol})</span>
          </div>
          <span className="text-green-500">
            {(coin.item.price_btc * 100).toFixed(2)}%
          </span>
        </div>
      ))}
    </div>
  )
}

