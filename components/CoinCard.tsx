import { Card } from "@/components/ui/card"
import Image from "next/image"

interface CoinCardProps {
  symbol: string
  logo: string
  price: number
  priceChange: number
  sparkline: string
}

export default function CoinCard({ symbol, logo, price, priceChange, sparkline }: CoinCardProps) {
  // Format price to show appropriate decimal places and handle large numbers
  const formatPrice = (price: number) => {
    if (price < 1) {
      return `$${price.toFixed(6)}`
    } else if (price < 10) {
      return `$${price.toFixed(4)}`
    } else {
      return `$${price.toFixed(2)}`
    }
  }

  return (
    <Card className="min-w-[200px] p-4 bg-white">
      <div className="flex items-center gap-2 mb-2">
        <Image
          src={logo}
          alt={symbol}
          width={24}
          height={24}
          className="rounded-full"
        />
        <span className="font-medium uppercase">{symbol}</span>
        <span className={`ml-auto text-sm ${priceChange >= 0 ? 'text-green-500' : 'text-red-500'}`}>
          {priceChange >= 0 ? '+' : ''}{priceChange.toFixed(1)}%
        </span>
      </div>
      <div className="font-bold mb-2">{formatPrice(price)}</div>
      <Image
        src={sparkline}
        alt={`${symbol} price graph`}
        width={160}
        height={60}
        className="w-full"
      />
    </Card>
  )
}

