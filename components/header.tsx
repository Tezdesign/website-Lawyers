'use client';

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-primary">
            Beaumont & Associés
          </Link>

          <nav className="hidden md:flex gap-8">
            <Link href="/" className="text-foreground hover:text-accent transition-colors">
              Accueil
            </Link>
            <Link href="/services" className="text-foreground hover:text-accent transition-colors">
              Services
            </Link>
            <Link href="/cabinet" className="text-foreground hover:text-accent transition-colors">
              Cabinet
            </Link>
            <Link href="/portfolio" className="text-foreground hover:text-accent transition-colors">
              Portfolio
            </Link>
            <Link href="/actualites" className="text-foreground hover:text-accent transition-colors">
              Actualités
            </Link>
            <Link href="/contact" className="text-foreground hover:text-accent transition-colors">
              Contact
            </Link>
            <Link href="/rendez-vous" className="text-accent font-semibold hover:text-primary transition-colors">
              RDV
            </Link>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block py-2 text-foreground hover:text-accent">
              Accueil
            </Link>
            <Link href="/services" className="block py-2 text-foreground hover:text-accent">
              Services
            </Link>
            <Link href="/cabinet" className="block py-2 text-foreground hover:text-accent">
              Cabinet
            </Link>
            <Link href="/portfolio" className="block py-2 text-foreground hover:text-accent">
              Portfolio
            </Link>
            <Link href="/actualites" className="block py-2 text-foreground hover:text-accent">
              Actualités
            </Link>
            <Link href="/contact" className="block py-2 text-foreground hover:text-accent">
              Contact
            </Link>
            <Link href="/rendez-vous" className="block py-2 text-accent font-semibold hover:text-primary">
              RDV
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
