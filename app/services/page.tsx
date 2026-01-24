'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import {
  Briefcase,
  Building2,
  Users,
  Scale,
  DollarSign,
  FileText,
  ChevronDown,
  CheckCircle2,
} from 'lucide-react';
import Link from 'next/link';

const categories = [
  { id: 'all', label: 'Tous les services' },
  { id: 'business', label: 'Droit des Affaires' },
  { id: 'real-estate', label: 'Droit Immobilier' },
  { id: 'labor', label: 'Droit du Travail' },
  { id: 'criminal', label: 'Droit Pénal' },
  { id: 'tax', label: 'Droit Fiscal' },
  { id: 'family', label: 'Droit de la Famille' },
];

const services = [
  {
    id: 1,
    category: 'business',
    icon: Briefcase,
    title: 'Droit des affaires',
    shortDesc: 'Expertise commerciale complète',
    description: 'Nous vous accompagnons dans tous les aspects juridiques de votre activité commerciale, des opérations courantes aux restructurations complexes.',
    details: [
      'Rédaction et négociation de contrats commerciaux',
      'Fusions, acquisitions et opérations de concentration',
      'Création et gestion de structures sociétales',
      'Restructurations et réorganisations d\'entreprises',
      'Droit de la concurrence et contentieux commercial',
    ],
    examples: 'Plus de 200 mandats en M&A réalisés. Accompagnement de PME à ETI.',
    cta: 'Consultation droit des affaires',
  },
  {
    id: 2,
    category: 'real-estate',
    icon: Building2,
    title: 'Droit immobilier',
    shortDesc: 'Transactions et contentieux immobiliers',
    description: 'Expertise totale pour sécuriser vos investissements et opérations immobilières, qu\'elles soient civiles ou commerciales.',
    details: [
      'Achat/vente et transactions immobilières complexes',
      'Baux commerciaux et baux d\'habitation',
      'Gestion de copropriété et contentieux',
      'Diagnostics et garanties légales',
      'Contentieux immobilier et droit de l\'urbanisme',
    ],
    examples: '150+ transactions immobilières gérées annuellement.',
    cta: 'Consultation droit immobilier',
  },
  {
    id: 3,
    category: 'labor',
    icon: Users,
    title: 'Droit du travail',
    shortDesc: 'Relations employeur-salarié sécurisées',
    description: 'Nous vous conseillons sur la gestion optimale de vos ressources humaines et vous représentons en cas de litige.',
    details: [
      'Rédaction et mise à jour de contrats de travail',
      'Procédures disciplinaires et licenciements',
      'Représentation en contentieux prud\'homal',
      'Audit et conformité droit du travail',
      'Négociation d\'accords collectifs',
    ],
    examples: 'Défense réussie dans 95% des contentieux prud\'homaux.',
    cta: 'Consultation droit du travail',
  },
  {
    id: 4,
    category: 'criminal',
    icon: Scale,
    title: 'Droit pénal',
    shortDesc: 'Défense pénale compétente',
    description: 'Représentation expérimentée pour vous défendre face à des poursuites pénales, en phase enquête ou procès.',
    details: [
      'Défense d\'entreprises et personnes physiques',
      'Droit pénal des affaires et des fraudes',
      'Assistance en enquête et investigation',
      'Représentation en audience et appel',
      'Droit pénal de la circulation et environnemental',
    ],
    examples: 'Acquittement ou réduction de peine dans 87% des cas.',
    cta: 'Consultation droit pénal',
  },
  {
    id: 5,
    category: 'tax',
    icon: DollarSign,
    title: 'Droit fiscal',
    shortDesc: 'Optimisation et contentieux fiscal',
    description: 'Stratégie fiscale optimale pour votre entreprise et assistance en cas de contrôle ou litige avec l\'administration.',
    details: [
      'Audit et planification fiscale',
      'Restructurations avec optimisation fiscale',
      'Fiscalité internationale et transfert pricing',
      'Représentation en contentieux fiscal',
      'Assistance lors de contrôles fiscaux',
    ],
    examples: 'Récupération d\'impositions injustifiées pour nos clients.',
    cta: 'Consultation droit fiscal',
  },
  {
    id: 6,
    category: 'family',
    icon: FileText,
    title: 'Droit de la famille',
    shortDesc: 'Questions familiales et patrimoniales',
    description: 'Assistance bienveillante et efficace pour les questions familiales, successions et gestion patrimoniale.',
    details: [
      'Divorce et séparation de corps',
      'Autorité parentale et droit des enfants',
      'Successions et testaments',
      'Régimes matrimoniaux et contrats de mariage',
      'Protection des majeurs et mineurs',
    ],
    examples: 'Médiation familiale pour 80% de nos mandats.',
    cta: 'Consultation droit de la famille',
  },
];

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const filteredServices = activeCategory === 'all'
    ? services
    : services.filter(s => s.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Page Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance font-serif">
            Nos domaines d'expertise
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Nous offrons une couverture juridique complète adaptée aux besoins spécifiques de vos projets. Sélectionnez un domaine pour en savoir plus.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mb-12 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id);
                setExpandedService(null);
              }}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'bg-secondary/20 text-foreground hover:bg-secondary/40'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Breadcrumb */}
        <div className="text-sm text-muted-foreground mb-8">
          Affichage: <span className="font-semibold text-foreground">
            {activeCategory === 'all' ? 'Tous les services' : categories.find(c => c.id === activeCategory)?.label}
          </span>
        </div>

        {/* Services Grid */}
        <div className="space-y-4">
          {filteredServices.map((service) => {
            const IconComponent = service.icon;
            const isExpanded = expandedService === service.id;

            return (
              <Card
                key={service.id}
                className="overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <button
                  onClick={() => setExpandedService(isExpanded ? null : service.id)}
                  className="w-full p-6 flex items-start gap-4 bg-card hover:bg-muted/50 transition-colors text-left"
                >
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <IconComponent className="text-accent w-6 h-6" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-foreground mb-1 font-serif">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {service.shortDesc}
                    </p>
                  </div>
                  <ChevronDown
                    className={`flex-shrink-0 w-5 h-5 text-accent transition-transform duration-300 ${
                      isExpanded ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="border-t border-border px-6 py-6 bg-muted/30 animate-in fade-in slide-in-from-top-2 duration-300">
                    <p className="text-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-4">
                        Ce que nous faisons pour vous :
                      </h4>
                      <ul className="space-y-3">
                        {service.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                            <span className="text-foreground text-sm">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-card p-4 rounded-lg mb-6 border border-border">
                      <p className="text-sm text-muted-foreground mb-3">
                        <span className="font-semibold text-foreground">Nos résultats :</span> {service.examples}
                      </p>
                    </div>

                    <div className="flex gap-3">
                      <Link href="/rendez-vous" className="flex-1">
                        <Button variant="default" className="w-full">
                          Prendre RDV pour ce service
                        </Button>
                      </Link>
                      <Link href="/contact" className="flex-1">
                        <Button variant="outline" className="w-full bg-transparent">
                          Poser une question
                        </Button>
                      </Link>
                    </div>
                  </div>
                )}
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-primary/10 border border-primary/20 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4 font-serif">
            Besoin d'un service qui n'est pas listé ?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Nous pouvons vous accompagner sur d'autres domaines juridiques. Contactez-nous pour discuter de votre besoin spécifique.
          </p>
          <Link href="/contact">
            <Button variant="default">
              Nous contacter
            </Button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
