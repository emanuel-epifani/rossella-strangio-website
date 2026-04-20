'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { homeContent } from '@/content/text'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: '/', label: 'HOME' },
    { href: '/chi-sono', label: 'CHI SONO' },
    { href: '/servizi', label: 'SERVIZI' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contattami', label: 'CONTATTI' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-md border-2 border-primary py-2">
      <div className="container">
        <nav className="flex items-center justify-between">
          {/* Mobile: Logo + Name */}
          <div className="flex md:hidden items-center gap-2">
            <Image 
              src="/images/logo-website.png"
              alt="Logo"
              width={40}
              height={40}
              className="object-contain w-8 h-8"
            />
            <span className="font-semibold text-sm leading-tight">Dott.ssa Rossella Strangio</span>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex space-x-10 flex-1 justify-center">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-base font-bold transition-all pb-1 ${
                  pathname === item.href
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} className="text-foreground" /> : <Menu size={24} className="text-foreground" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t py-6">
            <div className="flex flex-col space-y-5">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition-colors font-medium pb-1 ${
                    pathname === item.href
                      ? 'text-primary font-semibold border-b-2 border-primary'
                      : 'text-foreground hover:text-primary'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
