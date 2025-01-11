import { Card, CardContent } from "@/components/ui/card"
import { InfoIcon } from 'lucide-react'

export default function Performance() {
  return (
    <Card className="mt-6">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-6">Performance</h2>
        <div className="space-y-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="text-sm text-gray-500">Today's Low</div>
              <div>46,930.22</div>
            </div>
            <div className="flex-1 relative">
              <div className="h-1.5 rounded-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"></div>
              <div className="absolute -top-3 left-[60%] transform -translate-x-1/2">
                <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[6px] border-t-gray-400"></div>
                <div className="text-sm mt-2 whitespace-nowrap">$48,637.83</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">Today's High</div>
              <div>49,343.83</div>
            </div>
          </div>
          
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="text-sm text-gray-500">52W Low</div>
              <div>16,930.22</div>
            </div>
            <div className="flex-1">
              <div className="h-1.5 rounded-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"></div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">52W High</div>
              <div>49,743.83</div>
            </div>
          </div>

          {/* Fundamentals Section */}
          <div className="mt-8">
            <div className="flex items-center gap-2 mb-6">
              <h3 className="text-xl font-bold">Fundamentals</h3>
              <InfoIcon className="w-5 h-5 text-gray-400" />
            </div>
            
            <div className="grid md:grid-cols-2 gap-x-8">
              <div className="space-y-4">
                <div className="flex justify-between py-3 border-b">
                  <span className="text-gray-500">Bitcoin Price</span>
                  <span className="font-medium">$16,815.46</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="text-gray-500">24h Low / 24h High</span>
                  <span className="font-medium">$16,382.07 / $16,874.12</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="text-gray-500">7d Low / 7d High</span>
                  <span className="font-medium">$16,382.07 / $16,874.12</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="text-gray-500">Trading Volume</span>
                  <span className="font-medium">$23,249,202,782</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="text-gray-500">Market Cap Rank</span>
                  <span className="font-medium">#1</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between py-3 border-b">
                  <span className="text-gray-500">Market Cap</span>
                  <span className="font-medium">$323,507,290,047</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="text-gray-500">Market Cap Dominance</span>
                  <span className="font-medium">38.343%</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="text-gray-500">Volume / Market Cap</span>
                  <span className="font-medium">0.0718</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="text-gray-500">All-Time High</span>
                  <div className="text-right">
                    <div className="font-medium">$69,044.77 <span className="text-red-500">-75.6%</span></div>
                    <div className="text-sm text-gray-500">Nov 10, 2021 (about 1 year)</div>
                  </div>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="text-gray-500">All-Time Low</span>
                  <div className="text-right">
                    <div className="font-medium">$67.81 <span className="text-green-500">24729.1%</span></div>
                    <div className="text-sm text-gray-500">Jul 06, 2013 (over 9 years)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

