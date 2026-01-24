'use client'

import { Shield, Building, Users, Scale, Home, Briefcase } from 'lucide-react'

const practices = [
  {
    icon: Building,
    title: 'Droit des affaires',
    description: 'Expertise en droit commercial, M&A, contrats et gouvernance d\'entreprise.'
  },
  {
    icon: Home,
    title: 'Droit immobilier',
    description: 'Transactions immobilières, bail commercial et contentieux immobilier.'
  },
  {
    icon: Users,
    title: 'Droit du travail',
    description: 'Droit de l\'emploi, contentieux et conformité réglementaire.'
  },
  {
    icon: Shield,
    title: 'Droit pénal',
    description: 'Défense en droit pénal et assistance juridique spécialisée.'
  },
  {
    icon: Scale,
    title: 'Droit de la famille',
    description: 'Divorces, successions et droit du patrimoine familial.'
  },
  {
    icon: Briefcase,
    title: 'Propriété intellectuelle',
    description: 'Marques, brevets, droits d\'auteur et litiges IP.'
  }
]

export function PracticeAreas() {
  return (
    <section id="domaines" className="py-20 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Nos domaines de pratique
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nous offrons une expertise complète dans les principaux domaines du droit
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practices.map((practice, index) => {
            const Icon = practice.icon
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl border border-border hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6 text-accent group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {practice.title}
                </h3>
                <p className="text-muted-foreground">
                  {practice.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
