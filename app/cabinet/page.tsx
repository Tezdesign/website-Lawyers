import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  Award,
  Users,
  Target,
  Handshake,
  CheckCircle2,
  ArrowRight,
  Heart,
  Scale,
} from 'lucide-react';

export default function CabinetPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance font-serif">
              Notre Cabinet
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Une équipe de juristes passionnés, dédiée à la défense de vos intérêts et à l'excellence juridique depuis plus de 20 ans.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6 font-serif">
                  Notre histoire
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Beaumont & Associés a été fondée en 2003 par maître Laurent Beaumont, avec une conviction simple : les clients méritent des avocats qui combinent expertise juridique et réelle proximité. Ce qui a commencé comme un cabinet boutique spécialisé en droit des affaires s'est naturellement développé en cabinet multidisciplinaire de référence.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Aujourd'hui, nous accompagnons plus de 500 clients : PME, ETI, grands groupes et particuliers. Chaque mandat est une opportunité de démontrer notre engagement envers l'excellence et l'innovation juridique.
                </p>
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-accent font-serif">20+</div>
                    <p className="text-sm text-muted-foreground">Années d'expérience</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent font-serif">500+</div>
                    <p className="text-sm text-muted-foreground">Clients satisfaits</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent font-serif">12</div>
                    <p className="text-sm text-muted-foreground">Avocats</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg transform rotate-1" />
                <div className="relative bg-card rounded-lg p-8 border border-border shadow-lg">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Award className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Accréditation</h3>
                        <p className="text-sm text-muted-foreground">Membres du barreau de Paris depuis 2003</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Scale className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Reconnaissance</h3>
                        <p className="text-sm text-muted-foreground">Classés parmi les meilleurs cabinets de droit des affaires</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Handshake className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Partenariats</h3>
                        <p className="text-sm text-muted-foreground">Réseau international avec cabinets homologues</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 md:py-24 bg-secondary/5 border-y border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center font-serif">
              Nos jalons
            </h2>
            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-accent/20 transform -translate-x-1/2" />
              <div className="space-y-12">
                {[
                  {
                    year: '2003',
                    title: 'Fondation',
                    description: 'Maître Laurent Beaumont fonde le cabinet avec 2 collaborateurs',
                  },
                  {
                    year: '2008',
                    title: 'Expansion',
                    description: 'Ouverture du second bureau et diversification des domaines de pratique',
                  },
                  {
                    year: '2014',
                    title: 'Croissance',
                    description: 'Recrutement de 4 associés supplémentaires et 50+ mandats annuels',
                  },
                  {
                    year: '2020',
                    title: 'Modernisation',
                    description: 'Transformation digitale complète et services en ligne pour nos clients',
                  },
                  {
                    year: '2024',
                    title: 'Excellence',
                    description: '500+ clients actifs, 95% de satisfaction client, 20+ années de succès',
                  },
                ].map((milestone, idx) => (
                  <div key={idx} className={`flex gap-8 ${idx % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                    <div className="flex-1" />
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 bg-accent rounded-full border-4 border-background z-10" />
                    </div>
                    <div className="flex-1">
                      <Card className="p-6">
                        <div className="font-bold text-accent text-sm mb-2">{milestone.year}</div>
                        <h3 className="font-bold text-foreground mb-2 font-serif">{milestone.title}</h3>
                        <p className="text-sm text-muted-foreground">{milestone.description}</p>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 font-serif">
              Notre approche
            </h2>
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-6 font-serif">
                  Votre parcours juridique
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      step: '1',
                      title: 'Diagnostic initial',
                      description: 'Nous écoutons votre situation et identifions les enjeux clés',
                    },
                    {
                      step: '2',
                      title: 'Stratégie personnalisée',
                      description: 'Propositions adaptées à votre contexte, budget et objectifs',
                    },
                    {
                      step: '3',
                      title: 'Action efficace',
                      description: 'Mise en œuvre rigoureuse avec suivi régulier',
                    },
                    {
                      step: '4',
                      title: 'Résultat obtenu',
                      description: 'Objectif atteint. Relation durable pour les besoins futurs',
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="flex items-center justify-center w-10 h-10 bg-accent text-accent-foreground rounded-full font-bold flex-shrink-0 font-serif">
                        {item.step}
                      </div>
                      <div className="pt-1">
                        <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-foreground font-serif">
                  Nos valeurs
                </h3>
                {[
                  {
                    icon: Heart,
                    title: 'Intégrité',
                    description: 'Honnêteté absolue et transparence dans tous nos conseils',
                  },
                  {
                    icon: Target,
                    title: 'Excellence',
                    description: 'Perfectionnement continu et recherche des meilleures solutions',
                  },
                  {
                    icon: Users,
                    title: 'Proximité',
                    description: 'Écoute active et compréhension profonde de vos besoins',
                  },
                  {
                    icon: Handshake,
                    title: 'Partenariat',
                    description: 'Nous travaillons avec vous, pas seulement pour vous',
                  },
                ].map((value, idx) => {
                  const Icon = value.icon;
                  return (
                    <Card key={idx} className="p-6">
                      <div className="flex items-start gap-4">
                        <Icon className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold text-foreground mb-2">{value.title}</h4>
                          <p className="text-sm text-muted-foreground">{value.description}</p>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Team Preview */}
        <section className="py-16 md:py-24 bg-secondary/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4 font-serif">
                Rencontrez notre équipe
              </h2>
              <p className="text-muted-foreground">
                Des avocats passionnés, spécialisés et dédiés à votre succès.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {[
                {
                  name: 'Laurent Beaumont',
                  title: 'Fondateur & Associé',
                  specialties: ['Droit des affaires', 'M&A'],
                },
                {
                  name: 'Sophie Durand',
                  title: 'Associée',
                  specialties: ['Droit immobilier', 'Copropriété'],
                },
                {
                  name: 'Marc Lefevre',
                  title: 'Associé',
                  specialties: ['Droit du travail', 'Contentieux'],
                },
              ].map((member, idx) => (
                <Card key={idx} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-20 h-20 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                    <Users className="w-10 h-10 text-accent" />
                  </div>
                  <h3 className="font-bold text-foreground mb-1 font-serif">{member.name}</h3>
                  <p className="text-sm text-accent font-semibold mb-3">{member.title}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.specialties.map((spec, i) => (
                      <span key={i} className="text-xs bg-secondary/30 text-foreground px-2 py-1 rounded">
                        {spec}
                      </span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <Link href="/portfolio">
                <Button variant="outline">
                  Voir toute l'équipe
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-primary/10 border-t border-primary/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6 font-serif">
              Prêt à travailler avec nous ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Prenez rendez-vous avec un de nos avocats pour une consultation initiale gratuite.
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
