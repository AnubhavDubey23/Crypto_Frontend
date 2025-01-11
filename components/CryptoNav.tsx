"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { name: "Overview", href: "#overview" },
  { name: "Fundamentals", href: "#fundamentals" },
  { name: "News Insights", href: "#news" },
  { name: "Sentiments", href: "#sentiments" },
  { name: "Team", href: "#team" },
  { name: "Technicals", href: "#technicals" },
  { name: "Tokenomics", href: "#tokenomics" },
]

export default function CryptoNav() {
  // const pathname = usePathname() //Removed as it's not used anymore.

  return (
    <div className="border-b mb-6">
      <nav className="flex space-x-6 overflow-x-auto">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "border-b-2 border-transparent py-4 text-sm font-semibold text-gray-500 hover:text-gray-800",
              item.name === "Overview" && "border-blue-500 text-blue-500"
            )}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  )
}

