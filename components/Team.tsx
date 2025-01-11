import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const teamMembers = [
  {
    name: "John Smith",
    designation: "Designation here",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/team1-xgjdCPvaLREfZUsqgbL6ZOmZh0AbsX.png",
    description: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas."
  },
  {
    name: "Elina Williams",
    designation: "Designation here",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/team2-e4yhV0nJq2A93tYMAGRpTEJAS7547h.png",
    description: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas."
  },
  {
    name: "John Smith",
    designation: "Designation here",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/team3-GdV5iNxXnXi8vsEF3UchJWZury2GGL.png",
    description: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas."
  }
]

export default function Team() {
  return (
    <Card className="mt-6">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-6">Team</h2>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis in mi integer sit 
          egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue.
        </p>
        
        <div className="space-y-4">
          {teamMembers.map((member, index) => (
            <Card key={index} className="bg-blue-50">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="text-center md:w-48">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={120}
                      height={120}
                      className="rounded-lg mx-auto mb-2"
                    />
                    <h3 className="font-bold">{member.name}</h3>
                    <p className="text-gray-600 text-sm">{member.designation}</p>
                  </div>
                  <p className="text-gray-600 flex-1">
                    {member.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

