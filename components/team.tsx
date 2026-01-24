'use client'

import { Mail, Linkedin } from 'lucide-react'

const team = [
  {
    name: 'Maître Olivier Beaumont',
    role: 'Fondateur & Avocat senior',
    specialities: 'Droit des affaires, M&A',
    email: 'olivier.beaumont@beaumont-associes.fr'
  },
  {
    name: 'Maître Sophie Leclerc',
    role: 'Avocate',
    specialities: 'Droit immobilier, Droit du travail',
    email: 'sophie.leclerc@beaumont-associes.fr'
  },
  {
    name: 'Maître Marc Fontaine',
    role: 'Avocat',
    specialities: 'Droit pénal, Droit public',
    email: 'marc.fontaine@beaumont-associes.fr'
  },
  {
    name: 'Maître Anne Moreau',
    role: 'Avocate',
    specialities: 'Droit de la famille, Successions',
    email: 'anne.moreau@beaumont-associes.fr'
  },
  {
    name: 'Maître Jean-Pierre Dupont',
    role: 'Avocat',
    specialities: 'Propriété intellectuelle, Contrats',
    email: 'jean-pierre.dupont@beaumont-associes.fr'
  },
  {
    name: 'Maître Célia Rodriguez',
    role: 'Avocate associée',
    specialities: 'Droit commercial, Compliance',
    email: 'celia.rodriguez@beaumont-associes.fr'
  }
]

export function Team() {
  return (
    <section id="equipe" className="py-20 md:py-32 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Notre équipe
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Des professionnels expérimentés et passionnés au service de vos intérêts
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl border border-border hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold text-primary mb-1">
                  {member.name}
                </h3>
                <p className="text-accent font-semibold text-sm">
                  {member.role}
                </p>
              </div>

              <p className="text-sm text-muted-foreground mb-6">
                <span className="font-semibold text-foreground">Spécialités:</span> {member.specialities}
              </p>

              <div className="flex gap-3 pt-4 border-t border-border">
                <a
                  href={`mailto:${member.email}`}
                  className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors text-sm"
                >
                  <Mail size={16} />
                  Contacter
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors text-sm"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
