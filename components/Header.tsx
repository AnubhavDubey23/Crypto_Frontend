import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="h-6 relative">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pyxlZ6aP4bUeH5wteQAgYna8TkEVhz.png"
            alt="KoinX"
            width={96}
            height={24}
            priority
          />
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link href="/crypto-taxes" className="text-gray-600 hover:text-gray-900">
            Crypto Taxes
          </Link>
          <Link href="/free-tools" className="text-gray-600 hover:text-gray-900">
            Free Tools
          </Link>
          <Link href="/resource-center" className="text-gray-600 hover:text-gray-900">
            Resource Center
          </Link>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Get Started
        </button>
      </nav>
    </header>
  )
}

