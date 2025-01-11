import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function AboutBitcoin() {
  return (
    <Card className="mt-6">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-6">About Bitcoin</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-4">What is Bitcoin?</h3>
            <p className="text-gray-600">
              Bitcoin's price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 
              24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time 
              low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Lorem ipsum dolor sit amet</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus 
                urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque 
                fermentum sapien morbi sodales odio sed rhoncus.
              </p>
              <p>
                Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque auctor amet. 
                Nunc sagittis libero adipiscing cursus felis pellentesque interdum.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Already Holding Bitcoin?</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="bg-gradient-to-br from-[#79F1A4] to-[#0E5CAD]">
                <CardContent className="p-6 flex items-center gap-4">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/about1-1bwbjQ3KYYqjIvtDk0iBvoftwmMPbk.png"
                    alt="Calculate Profits"
                    width={128}
                    height={128}
                    className="rounded-lg"
                  />
                  <div className="text-white">
                    <h4 className="font-bold mb-2">Calculate your Profits</h4>
                    <Button variant="secondary" className="bg-white text-black hover:bg-gray-100">
                      Check Now →
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-[#FF9865] to-[#EF3031]">
                <CardContent className="p-6 flex items-center gap-4">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/about2-fY3U4UdRu7oo5gJr4Oce9zMazdhrwo.png"
                    alt="Calculate Tax Liability"
                    width={128}
                    height={128}
                    className="rounded-lg"
                  />
                  <div className="text-white">
                    <h4 className="font-bold mb-2">Calculate your tax liability</h4>
                    <Button variant="secondary" className="bg-white text-black hover:bg-gray-100">
                      Check Now →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

