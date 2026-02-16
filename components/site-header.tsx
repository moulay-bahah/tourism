"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"

export function SiteHeader() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur shadow-sm border-b supports-[backdrop-filter]:bg-background/60"
          : "bg-transparent text-white"
      )}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/images/logo.png" alt="Logo" width={60} height={60} />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <Link
            href="/"
            className="transition-colors hover:text-primary hover:underline underline-offset-4"
          >
            Home
          </Link>
          <Link
            href="/Services"
            className="transition-colors hover:text-primary hover:underline underline-offset-4"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="transition-colors hover:text-primary hover:underline underline-offset-4"
          >
            Contact
          </Link>
        </nav>

        {/* <div className="hidden md:flex items-center space-x-4">
          <Button variant={isScrolled ? "default" : "secondary"} size="sm">
            Book Now
          </Button>
        </div> */}

        {/* Mobile Menu Toggle */}
        <button
          className={`md:hidden p-2 z-50 ${isScrolled ? "bg-background/95 backdrop-blur shadow-sm border-b supports-[backdrop-filter]:bg-background/60" : "bg-transparent text-white"}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6 text-black" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-0 left-0 w-full bg-background border-b shadow-lg md:hidden flex flex-col p-4 space-y-4 animate-in slide-in-from-top-5">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-foreground hover:text-primary font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/Services"
              className="text-foreground hover:text-primary font-medium"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-foreground hover:text-primary font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </nav>
          {/* <div className="pt-4 border-t">
             <Button className="w-full">Book Now</Button>
          </div> */}
        </div>
      )}
    </header>
  )
}
