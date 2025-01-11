import Image from 'next/image'

export default function GetStarted() {
  return (
    <div className="bg-blue-600 text-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-4">Get Started with KoinX for FREE</h2>
      <p className="mb-6">
        With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports.
      </p>
      <div className="flex justify-center mb-6">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tLgcRTK0n1UhgkHnJ149HDj2TRZ5Jq.png"
          alt="Get Started with KoinX"
          width={180}
          height={166}
          className="w-auto h-auto"
        />
      </div>
      <button className="w-full bg-white text-blue-600 px-4 py-2 rounded font-bold hover:bg-gray-50 transition-colors">
        Get Started for FREE
      </button>
    </div>
  )
}

