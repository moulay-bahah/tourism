"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
]

const whatsappUrl =
  "https://wa.me/22237111107?text=Hello%2C%20I%27d%20like%20to%20plan%20a%20Mauritania%20trip."

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-primary text-primary-foreground shadow-sm">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3 rounded-md"
          aria-label="Afro Service Tourism home"
          onClick={() => setIsOpen(false)}
        >
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white p-1.5 shadow-sm">
            <Image src="/images/logo.png" alt="" width={48} height={44} priority />
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block truncate font-serif text-lg font-bold text-white">
              Afro Service Tourism
            </span>
            <span className="block text-[0.68rem] font-bold uppercase tracking-[0.22em] text-secondary">
              Mauritania
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <nav aria-label="Primary navigation">
            <ul className="flex items-center gap-7 text-sm font-bold">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="rounded-sm text-white/85 transition-colors hover:text-secondary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Button asChild variant="accent" size="lg">
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              Plan Your Trip
            </a>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/20 text-white transition-colors hover:bg-white/10 md:hidden"
          onClick={() => setIsOpen((open) => !open)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </div>

      {isOpen ? (
        <div id="mobile-navigation" className="border-t border-white/10 bg-primary px-4 py-5 md:hidden">
          <nav aria-label="Mobile navigation" className="mx-auto max-w-7xl">
            <ul className="space-y-1">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-md px-3 py-3 font-bold text-white transition-colors hover:bg-white/10"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Button asChild variant="accent" size="lg" className="mt-4 w-full">
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                Plan Your Trip on WhatsApp
              </a>
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
