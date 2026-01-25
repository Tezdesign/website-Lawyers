import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Shield, Zap, Users, ArrowRight, Award, TrendingUp, BookOpen, Briefcase } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-b from-primary/5 to-background py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-10 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl" />
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl animation-delay-2000" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance font-serif">
              Votre défense commence ici
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
              Protection juridique d'excellence. Expertise multidisciplinaire au service de vos enjeux.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-12 bg-card/40 backdrop-blur-sm rounded-lg p-6 border border-border">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-accent" />
                <span><strong>20+ ans</strong> d'expérience</span>
              </div>
              <div className="w-px h-4 bg-border" />
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-accent" />
                <span><strong>500+</strong> clients accompagnés</span>
              </div>
              <div className="w-px h-4 bg-border" />
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-accent" />
                <span><strong>95%</strong> taux de réussite</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/rendez-vous">
                <Button variant="default" size="lg" className="font-semibold">
                  Prendre un RDV
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" className="font-semibold bg-transparent">
                  Nos services
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SERVICES OVERVIEW */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">
              Nos domaines de pratique
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Couverture juridique complète adaptée à vos besoins spécifiques
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { icon: Briefcase, title: 'Droit des affaires', desc: 'Contrats, M&A, droit des sociétés' },
              { icon: BookOpen, title: 'Droit immobilier', desc: 'Transactions, baux, gestion patrimoniale' },
              { icon: Users, title: 'Droit du travail', desc: 'Contentieux, restructurations, conformité' },
              { icon: Shield, title: 'Droit pénal', desc: 'Défense pénale, procédures judiciaires' },
              { icon: TrendingUp, title: 'Droit fiscal', desc: 'Optimisation, restructurations' },
              { icon: Award, title: 'Droit de la famille', desc: 'Succession, divorce, médiation' },
            ].map((service, idx) => {
              const Icon = service.icon;
              return (
                <Card key={idx} className="p-6 hover:shadow-lg hover:border-accent/50 transition-all duration-300 group">
                  <Icon className="w-8 h-8 text-accent mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-foreground mb-2 text-lg">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{service.desc}</p>
                  <Link href="/services">
                    <Button variant="ghost" size="sm" className="p-0 text-accent hover:text-accent hover:underline transition-all">
                      En savoir plus
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Button>
                  </Link>
                </Card>
              );
            })}
          </div>

          <div className="text-center">
            <Link href="/services">
              <Button variant="outline">
                Voir tous les services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US - 3 PILLARS */}
      <section className="py-16 md:py-24 bg-secondary/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center font-serif">
            Pourquoi nous choisir
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Expertise</h3>
              <p className="text-muted-foreground">
                Nos avocats possèdent une expertise approfondie dans leurs domaines respectifs. Expérience prouvée et résultats concrets.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Réactivité</h3>
              <p className="text-muted-foreground">
                Nous répondons à vos demandes rapidement. Engagement: réponse sous 2h pendant heures ouvrables.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Proximité</h3>
              <p className="text-muted-foreground">
                Relation étroite avec nos clients. Nous comprenons vos enjeux et nous adaptons à votre contexte spécifique.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center font-serif">
            Nos succès client
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="p-8 border-l-4 border-l-success">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-success/10 rounded">
                  <TrendingUp className="w-6 h-6 text-success" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Transaction M&A sécurisée</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Accompagnement complet d'une acquisition de 15M€. Due diligence, négociation, structuration fiscale.
                  </p>
                  <p className="text-sm font-semibold text-success">
                    Résultat: Transaction réussie, client satisfait, intégration en douceur
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-l-4 border-l-success">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-success/10 rounded">
                  <Award className="w-6 h-6 text-success" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Restructuration RH réussie</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Accompagnement d'une restructuration 200 personnes. Dialogue social, plans de départ, zéro contentieux.
                  </p>
                  <p className="text-sm font-semibold text-success">
                    Résultat: 60 départs en accord, relations sociales préservées
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-l-4 border-l-success md:col-span-2">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-success/10 rounded">
                  <TrendingUp className="w-6 h-6 text-success" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Défense pénale en droit des affaires</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Représentation d'une entreprise dans procédure pénale complexe. Stratégie deux volets, expertise technique.
                  </p>
                  <p className="text-sm font-semibold text-success">
                    Résultat: Relaxe partielle obtenue, sanctions réduites, entreprise peut reprendre activité
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center">
            <Link href="/portfolio">
              <Button variant="default">
                Voir notre portfolio complet
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-accent/10 border-y border-primary/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-serif">
            Besoin d'un conseil juridique ?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Nous sommes à votre écoute. Prenez rendez-vous pour une première consultation gratuite.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/rendez-vous">
              <Button variant="default" size="lg" className="font-semibold">
                Prendre rendez-vous
              </Button>
            </Link>
            <Link href="tel:+33123456789">
              <Button variant="outline" size="lg">
                01 23 45 67 89
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* LATEST NEWS */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-serif">
              Actualités & Articles
            </h2>
            <Link href="/actualites">
              <Button variant="outline">
                Voir tous les articles
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Les enjeux de la fiscalité internationale en 2024',
                category: 'Changements Législatifs',
                date: '20 janv. 2024',
                readTime: '8 min',
              },
              {
                title: 'Guide: restructurer votre entreprise avec succès',
                category: 'Conseils Pratiques',
                date: '15 janv. 2024',
                readTime: '12 min',
              },
              {
                title: 'Télétravail et droit du travail: ce qu\'il faut savoir',
                category: 'Analyses Juridiques',
                date: '10 janv. 2024',
                readTime: '10 min',
              },
            ].map((article, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="h-32 bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-accent/50" />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-accent bg-accent/10 px-2 py-1 rounded">
                    {article.category}
                  </span>
                  <h3 className="font-bold text-foreground mt-3 mb-2 group-hover:text-accent transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
