import { Card, CardContent } from "@/components/ui/card"
import { PieChart, Pie, Cell } from "recharts"

const data = [
  { name: "Crowdsale investors", value: 80 },
  { name: "Foundation", value: 20 }
]

const COLORS = ["#0088FE", "#FF8042"]

export default function Tokenomics() {
  return (
    <Card className="mt-6">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-6">Tokenomics</h2>
        
        <div>
          <h3 className="text-xl font-semibold mb-4">Initial Distribution</h3>
          <div className="flex items-center gap-8 mb-6">
            <div className="w-48 h-48">
              {/* <PieChart width={200} height={200}>
                <Pie
                  data={data}
                  cx={100}
                  cy={100}
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart> */}
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#0088FE]"></div>
                <span>Crowdsale investors: 80%</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF8042]"></div>
                <span>Foundation: 20%</span>
              </div>
            </div>
          </div>
          
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc dignissim vel 
            consequat. Leo etiam nascetur bibendum amet enim sit eget leo amet. At metus orci augue fusce eleifend 
            lectus eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna felis augue.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

