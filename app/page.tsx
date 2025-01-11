import { Suspense } from 'react'
import Header from '@/components/Header'
import CryptoNav from '@/components/CryptoNav'
import CryptoOverview from '@/components/CryptoOverview'
import Performance from '@/components/Performance'
import Sentiment from '@/components/Sentiment'
import AboutBitcoin from '@/components/AboutBitcoin'
import Tokenomics from '@/components/Tokenomics'
import Team from '@/components/Team'
import TrendingCoins from '@/components/TrendingCoins'
import YouMayLike from '@/components/YouMayLike'
import GetStarted from '@/components/GetStarted'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#EFF2F5]">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-2/3">
            <Suspense fallback={<div>Loading...</div>}>
              <CryptoOverview />
              <CryptoNav />
              <Performance />
              <Sentiment />
              <AboutBitcoin />
              <Tokenomics />
              <Team />
            </Suspense>
          </div>
          <div className="w-full lg:w-1/3">
            <GetStarted />
            <TrendingCoins />
          </div>
        </div>
        <YouMayLike />
      </div>
    </main>
  )
}

