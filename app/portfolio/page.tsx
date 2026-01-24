'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState } from 'react';
import { Users, ArrowRight, Globe, TrendingUp, CheckCircle2 } from 'lucide-react';

const teamMembers = [
  {
    id: 1,
    name: 'Laurent Beaumont',
    role: 'Fondateur & Associé',
    specialties: ['Droit des affaires', 'Fusions-acquisitions', 'Droit des sociétés'],
    experience: '22 ans',
    languages: ['Français', 'Anglais'],
    bio: 'Expert reconnu en droit des affaires avec spécialité M&A. A accompagné plus de 150 transactions de valeur croissante.',
    highlight: 'Transactions valeur: 2 Md€+',
  },
  {
    id: 2,
    name: 'Sophie Durand',
    role: 'Associée',
    specialties: ['Droit immobilier', 'Transactions complexes', 'Gestion patrimoniale'],
    experience: '18 ans',
    languages: ['Français', 'Anglais', 'Allemand'],
    bio: 'Spécialiste en transactions immobilières commerciales et gestion de portefeuilles immobiliers importants.',
    highlight: '250+ transactions gérées',
  },
  {
    id: 3,
    name: 'Marc Lefevre',
    role: 'Associé',
    specialties: ['Droit du travail', 'Contentieux', 'Restructurations'],
    experience: '19 ans',
    languages: ['Français', 'Anglais'],
    bio: 'Défenseur expérimenté en contentieux prud\'homal et spécialiste des restructurations d\'entreprise.',
    highlight: '95% de victoires en procédure',
  },
  {
    id: 4,
    name: 'Catherine Moreau',
    role: 'Avocate Associée',
    specialties: ['Droit pénal', 'Droit pénal des affaires', 'Contentieux criminel'],
    experience: '16 ans',
    languages: ['Français', 'Anglais'],
    bio: 'Avocate réputée en défense pénale, spécialisée dans les cas complexes et les enquêtes administratives.',
    highlight: '87% taux de succès',
  },
  {
    id: 5,
    name: 'Jean-Pierre Rousseau',
    role: 'Avocat',
    specialties: ['Droit fiscal', 'Optimisation fiscale', 'Contentieux fiscal'],
    experience: '17 ans',
    languages: ['Français', 'Anglais'],
    bio: 'Expert en planification fiscale et restructurations avec focus international et transfert pricing.',
    highlight: 'Récupérations: 150M€+',
  },
  {
    id: 6,
    name: 'Valérie Petit',
    role: 'Avocate',
    specialties: ['Droit de la famille', 'Successions', 'Médiation'],
    experience: '14 ans',
    languages: ['Français', 'Anglais'],
    bio: 'Avocate bienveillante en droit familial avec approche médiation. 80% des dossiers résolus en accord amiable.',
    highlight: 'Médiation: 80% réussite',
  },
];

const caseStudies = [
  {
    id: 1,
    title: 'Acquisition d\'une PME manufacturière par groupe international',
    category: 'Droit des affaires',
    challenge: 'Client PME cherchait partenaire stratégique pour croissance internationale. Enjeux: évaluation juste, garanties, intégration post-acquisition.',
    approach: 'Due diligence juridique complète, négociation structuration, assistance fiscale pour optimiser l\'opération.',
    result: 'Transaction 15M€ réalisée en 6 mois. 100+ emplois créés. Prime performance distribuée à management.',
    testimonial: 'Excellente gestion du dossier, expertise rare en droit fiscal international.',
    year: 2023,
  },
  {
    id: 2,
    title: 'Défense d\'une entreprise accusée de fraude fiscale',
    category: 'Droit pénal',
    challenge: 'Procédure pénale complexe suite à contrôle fiscal. Risques pénaux importants et réputation en jeu.',
    approach: 'Stratégie défense deux volets: technique fiscale + procédures pénales. Expertise in situ et rapports contradictoires.',
    result: 'Relaxe partielle obtenue. Sanctions réduites. Entreprise peut reprendre activité sereinement.',
    testimonial: 'Nous attendions le pire. Grâce au cabinet, situation sauvée.',
    year: 2023,
  },
  {
    id: 3,
    title: 'Restructuration RH dans contexte de crise',
    category: 'Droit du travail',
    challenge: 'Entreprise 200 salariés devait réduire effectifs 30%. Risques: contentieux massif, image RH dégradée.',
    approach: 'Plan départ volontaire + négociation syndicale. Assistance individuelle chaque salarié, suivi prud\'homal.',
    result: '60 départs en accord. Aucun contentieux lourd. Entreprise pérennisée. Relations sociales préservées.',
    testimonial: 'Approche humaine et pragmatique qui a rassuré tout le monde.',
    year: 2023,
  },
  {
    id: 4,
    title: 'Restructuration portefeuille immobilier d\'un groupe coté',
    category: 'Droit immobilier',
    challenge: 'Groupe immobilier: 50+ biens, portefeuille peu optimisé. Objectif réduction coûts 10% sans déstabiliser locataires.',
    approach: 'Audit complet propriétés, renégociation baux, consolidation immobilière, optimisation fiscale.',
    result: 'Réduction coûts 8% en 18 mois. Stabilité locataires. Gain fiscal supplémentaire 2M€/an.',
    testimonial: 'Cabinet a compris enjeux complexes et trouvé solutions créatives.',
    year: 2023,
  },
  {
    id: 5,
    title: 'Optimisation fiscale holding familiale internationale',
    category: 'Droit fiscal',
    challenge: 'Famille fortunée: patrimoine éparpillé 4 pays. Fiscalité sous-optimale, risques de conformité.',
    approach: 'Restructuration juridique holding, analyse transfert pricing, plans de succession optimisés.',
    result: 'Économies fiscales annuelles 2.5M€. Patrimoines protégés. Transmission multigénérationnelle sécurisée.',
    testimonial: 'Vision globale et expertise en fiscalité internationale rare.',
    year: 2022,
  },
  {
    id: 6,
    title: 'Succession complexe avec biens patrimoniaux importants',
    category: 'Droit de la famille',
    challenge: 'Succession 100M€: biens immobiliers, entreprises, collections d\'art. 5 héritiers, intérêts divergents.',
    approach: 'Médiation familiale, expertise évaluations, structuration fiscale succession, accord global.',
    testimonial: 'A su créer du dialogue où il n\'y avait que tensions.',
    result: 'Accord obtenu. Imposition réduite. Famille unie pour continuité entrepreneuriale.',
    year: 2022,
  },
];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredCases = selectedCategory
    ? caseStudies.filter(c => c.category === selectedCategory)
    : caseStudies;

  const categories = Array.from(new Set(caseStudies.map(c => c.category)));

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance font-serif">
              Notre Portfolio
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Des avocats compétents mettant leur expertise au service de vos défis juridiques complexes.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4 font-serif">
                Nos avocats
              </h2>
              <p className="text-muted-foreground">
                Une équipe de professionnels passionnés avec expertise multidisciplinaire et expérience concrète.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member) => (
                <Card key={member.id} className="p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <Users className="w-6 h-6 text-accent" />
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-accent">{member.experience}</div>
                      <div className="text-xs text-muted-foreground">d'expérience</div>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-1 font-serif">{member.name}</h3>
                  <p className="text-sm text-accent font-semibold mb-4">{member.role}</p>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{member.bio}</p>

                  <div className="space-y-3 mb-4">
                    <div>
                      <p className="text-xs font-semibold text-foreground mb-2">Spécialités</p>
                      <div className="flex flex-wrap gap-2">
                        {member.specialties.slice(0, 2).map((spec, idx) => (
                          <span key={idx} className="text-xs bg-secondary/30 text-foreground px-2 py-1 rounded">
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-foreground mb-2">Langues</p>
                      <p className="text-xs text-muted-foreground">{member.languages.join(', ')}</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-sm font-semibold text-accent mb-3">{member.highlight}</p>
                    <Link href="/rendez-vous">
                      <Button variant="outline" size="sm" className="w-full bg-transparent">
                        RDV avec {member.name.split(' ')[0]}
                        <ArrowRight className="ml-2 w-3 h-3" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-16 md:py-24 bg-secondary/5 border-y border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4 font-serif">
                Cas de référence
              </h2>
              <p className="text-muted-foreground mb-8">
                Découvrez comment nous avons accompagné nos clients vers le succès. Noms et détails sensibles anonymisés.
              </p>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedCategory === null
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary/20 text-foreground hover:bg-secondary/40'
                  }`}
                >
                  Tous les domaines
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      selectedCategory === category
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary/20 text-foreground hover:bg-secondary/40'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {filteredCases.map((caseStudy) => (
                <Card key={caseStudy.id} className="p-8 border-l-4 border-l-accent hover:shadow-lg transition-shadow">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-semibold px-3 py-1 bg-accent/10 text-accent rounded-full">
                          {caseStudy.category}
                        </span>
                        <span className="text-xs text-muted-foreground">{caseStudy.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-4 font-serif">
                        {caseStudy.title}
                      </h3>

                      <div className="space-y-4 mb-6">
                        <div>
                          <h4 className="font-semibold text-foreground text-sm mb-2">Enjeu client</h4>
                          <p className="text-muted-foreground text-sm">{caseStudy.challenge}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground text-sm mb-2">Notre approche</h4>
                          <p className="text-muted-foreground text-sm">{caseStudy.approach}</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-success/5 border border-success/20 rounded-lg p-6">
                      <div className="flex items-start gap-3 mb-4">
                        <TrendingUp className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                        <h4 className="font-semibold text-foreground">Résultats obtenus</h4>
                      </div>
                      <p className="text-foreground font-semibold text-sm mb-4">
                        {caseStudy.result}
                      </p>
                      <div className="pt-4 border-t border-success/20">
                        <p className="text-xs text-muted-foreground italic">
                          « {caseStudy.testimonial} »
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center font-serif">
              Nos chiffres
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { number: '500+', label: 'Clients accompagnés', icon: Users },
                { number: '95%', label: 'Taux de satisfaction', icon: CheckCircle2 },
                { number: '2Md€+', label: 'Transactions facilitées', icon: TrendingUp },
                { number: '6', label: 'Domaines de pratique', icon: Globe },
              ].map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <Card key={idx} className="p-6 text-center">
                    <Icon className="w-8 h-8 text-accent mx-auto mb-4" />
                    <div className="text-3xl font-bold text-foreground font-serif mb-2">
                      {stat.number}
                    </div>
                    <p className="text-muted-foreground text-sm">{stat.label}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-primary/10 border-t border-primary/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6 font-serif">
              Prêt à bénéficier de notre expertise ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Rencontrez nos avocats pour discuter de vos défis juridiques.
            </p>
            <Link href="/rendez-vous">
              <Button variant="default" size="lg">
                Prendre un rendez-vous
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
