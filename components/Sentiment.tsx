import { Card, CardContent } from "@/components/ui/card"
import { InfoIcon } from 'lucide-react'
import Image from 'next/image'

export default function Sentiment() {
  return (
    <Card className="mt-6">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-6">Sentiment</h2>
        
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-xl font-semibold">Key Events</h3>
            <InfoIcon className="w-5 h-5 text-gray-400" />
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4">
            <div className="min-w-[320px] p-4 bg-blue-50 rounded-lg flex gap-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-C1llkmNvd0LcvXBrrhCwd1owWkoXkk.png"
                alt="News Icon"
                width={44}
                height={44}
                className="rounded-full w-[44px] h-[44px]"
              />
              <div>
                <p className="font-medium mb-2">Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</p>
                <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum.</p>
              </div>
            </div>
            
            <div className="min-w-[320px] p-4 bg-green-50 rounded-lg flex gap-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo2-knmvkyrCK0KUQkw4qvPKz78MFGfcEk.png"
                alt="Trending Icon"
                width={44}
                height={44}
                className="rounded-full w-[44px] h-[44px]"
              />
              <div>
                <p className="font-medium mb-2">Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</p>
                <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-xl font-semibold">Analyst Estimates</h3>
            <InfoIcon className="w-5 h-5 text-gray-400" />
          </div>
          <div className="flex items-center gap-8">
            <div className="w-32 h-32 rounded-full bg-[#EBF9F4] flex items-center justify-center">
              <div className="text-3xl font-bold text-[#00B386]">76%</div>
            </div>
            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-4">
                <span className="w-10 text-sm">Buy</span>
                <div className="flex-1 h-2 bg-[#00B386] rounded" style={{ width: '76%' }}></div>
                <span className="w-12 text-sm">76%</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-10 text-sm">Hold</span>
                <div className="w-[8%] h-2 bg-gray-300 rounded"></div>
                <span className="w-12 text-sm">8%</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-10 text-sm">Sell</span>
                <div className="w-[16%] h-2 bg-red-500 rounded"></div>
                <span className="w-12 text-sm">16%</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

