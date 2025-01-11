"use client"

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useRef } from "react"
import CoinCard from "./CoinCard"

interface CoinData {
  symbol: string
  logo: string
  price: number
  priceChange: number
  sparkline: string
}

interface CoinCarouselProps {
  title: string
  coins: CoinData[]
}

export default function CoinCarousel({ title, coins }: CoinCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 220 // card width + gap
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="relative">
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div 
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {coins.map((coin, index) => (
            <CoinCard
              key={`${coin.symbol}-${index}`}
              symbol={coin.symbol}
              logo={coin.logo}
              price={coin.price}
              priceChange={coin.priceChange}
              sparkline={coin.sparkline}
            />
          ))}
        </div>
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}

