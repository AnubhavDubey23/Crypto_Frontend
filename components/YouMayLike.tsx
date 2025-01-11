"use client"

import { useState, useEffect } from 'react'
import CoinCarousel from './CoinCarousel'

interface TrendingCoin {
  item: {
    symbol: string
    small: string // logo
    data: {
      price: string
      price_change_percentage_24h: {
        usd: number
      }
      sparkline: string
    }
  }
}

export default function YouMayLike() {
  const [trendingCoins, setTrendingCoins] = useState<TrendingCoin[]>([])

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/search/trending')
      .then(response => response.json())
      .then(data => {
        setTrendingCoins(data.coins)
      })
  }, [])

  const formatCoins = (coins: TrendingCoin[]) => {
    return coins.map(coin => ({
      symbol: coin.item.symbol,
      logo: coin.item.small,
      price: parseFloat(coin.item.data.price),
      priceChange: coin.item.data.price_change_percentage_24h.usd,
      sparkline: coin.item.data.sparkline
    }))
  }

  if (!trendingCoins.length) return null

  const formattedCoins = formatCoins(trendingCoins)

  return (
    <div className="space-y-8">
      <CoinCarousel title="You May Also Like" coins={formattedCoins} />
      <CoinCarousel title="Trending Coins" coins={formattedCoins} />
    </div>
  )
}

