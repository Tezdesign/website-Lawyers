'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState } from 'react';
import { Calendar, User, Clock, ArrowRight, Search } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: 'Les nouveaux enjeux de la fiscalité internationale en 2024',
    excerpt: 'Découvrez comment les récentes directives OCDE impactent votre stratégie fiscale et quels ajustements prévoir.',
    category: 'Changements Législatifs',
    author: 'Jean-Pierre Rousseau',
    authorRole: 'Avocat spécialisé en fiscalité',
    date: '2024-01-20',
    readTime: 8,
    featured: true,
    content: 'Contenu complet de l\'article...',
  },
  {
    id: 2,
    title: 'Guide complet: restructurer votre entreprise avec succès',
    excerpt: 'Restructuration d\'entreprise? Nous vous guidons étape par étape à travers enjeux juridiques, sociaux et fiscaux.',
    category: 'Conseils Pratiques',
    author: 'Laurent Beaumont',
    authorRole: 'Fondateur & Associé',
    date: '2024-01-15',
    readTime: 12,
    featured: false,
  },
  {
    id: 3,
    title: 'Les droits du travail et la mise en place du télétravail',
    excerpt: 'Télétravail bien encadré? Analysez contrats, assurances, sécurité et respect des obligations légales.',
    category: 'Analyses Juridiques',
    author: 'Marc Lefevre',
    authorRole: 'Associé',
    date: '2024-01-10',
    readTime: 10,
    featured: false,
  },
  {
    id: 4,
    title: 'Actualités du cabinet: nouveau partenariat international',
    excerpt: 'Beaumont & Associés forme un partenariat avec cabinet d\'avocats d\'affaires réputé en Suisse et Allemagne.',
    category: 'Actualités du Cabinet',
    author: 'Sophie Durand',
    authorRole: 'Associée',
    date: '2024-01-05',
    readTime: 5,
    featured: false,
  },
  {
    id: 5,
    title: 'Succession: protéger votre patrimoine pour les générations futures',
    excerpt: 'Planifier sa succession requiert stratégie globale. Nous vous expliquons les mécanismes et optimisations possibles.',
    category: 'Conseils Pratiques',
    author: 'Valérie Petit',
    authorRole: 'Avocate',
    date: '2023-12-28',
    readTime: 9,
    featured: false,
  },
  {
    id: 6,
    title: 'Loi Agec et économie circulaire: obligations pour votre entreprise',
    excerpt: 'Loi Agec crée nouvelles obligations en termes de responsabilité étendue du producteur et économie circulaire.',
    category: 'Changements Législatifs',
    author: 'Catherine Moreau',
    authorRole: 'Avocate',
    date: '2023-12-20',
    readTime: 11,
    featured: false,
  },
  {
    id: 7,
    title: 'Protection des données et RGPD: mise en conformité pour PME',
    excerpt: 'RGPD n\'est pas compliqué si bien organisé. Guide pratique pour PME et ETI souhaitant se conformer.',
    category: 'Analyses Juridiques',
    author: 'Jean-Pierre Rousseau',
    authorRole: 'Avocat spécialisé en fiscalité',
    date: '2023-12-15',
    readTime: 7,
    featured: false,
  },
  {
    id: 8,
    title: 'Acquisition d\'entreprise: les pièges à éviter',
    excerpt: 'Acquisition complexe? Découvrez erreurs courantes et due diligence critique pour sécuriser votre opération.',
    category: 'Conseils Pratiques',
    author: 'Laurent Beaumont',
    authorRole: 'Fondateur & Associé',
    date: '2023-12-10',
    readTime: 13,
    featured: false,
  },
];

const categories = [
  'Tous les articles',
  'Analyses Juridiques',
  'Actualités du Cabinet',
  'Changements Législatifs',
  'Conseils Pratiques',
];

export default function ActualitesPage() {
  const [selectedCategory, setSelectedCategory] = useState('Tous les articles');
  const [searchTerm, setSearchTerm] = useState('');

  const featuredArticle = articles.find(a => a.featured);
  const otherArticles = articles.filter(a => !a.featured);

  let filteredArticles = otherArticles;

  if (selectedCategory !== 'Tous les articles') {
    filteredArticles = filteredArticles.filter(a => a.category === selectedCategory);
  }

  if (searchTerm) {
    filteredArticles = filteredArticles.filter(a =>
      a.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance font-serif">
              Actualités & Analyses
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Insights juridiques, évolutions législatives et conseils d'experts pour rester informé.
            </p>
          </div>
        </section>

        {/* Featured Article */}
        {featuredArticle && (
          <section className="py-16 md:py-24">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <Card className="overflow-hidden bg-gradient-to-br from-accent/10 to-primary/5 border-accent/20">
                <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs font-semibold px-3 py-1 bg-accent text-accent-foreground rounded-full">
                        À la une
                      </span>
                      <span className="text-xs text-accent font-semibold">{featuredArticle.category}</span>
                    </div>
                    <h2 className="text-3xl font-bold text-foreground mb-6 font-serif leading-tight">
                      {featuredArticle.title}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                      {featuredArticle.excerpt}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
                          <User className="w-4 h-4" />
                          <div>
                            <span className="font-semibold text-foreground">{featuredArticle.author}</span>
                            <span className="text-xs ml-2">{featuredArticle.authorRole}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{formatDate(featuredArticle.date)}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{featuredArticle.readTime} min de lecture</span>
                          </div>
                        </div>
                      </div>
                      <Link href={`/actualites/${featuredArticle.id}`}>
                        <Button variant="default">
                          Lire l'article
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center justify-center bg-gradient-to-br from-accent/20 to-accent/5 rounded-lg p-12">
                    <div className="text-center">
                      <div className="text-6xl font-bold text-accent/20 font-serif mb-4">
                        {featuredArticle.readTime}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        min de lecture
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </section>
        )}

        {/* Articles Grid Section */}
        <section className="py-16 md:py-24 bg-secondary/5 border-y border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Search & Filter */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-8 font-serif">
                Tous les articles
              </h2>

              <div className="flex flex-col gap-6 mb-8">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Rechercher un article..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        selectedCategory === category
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-card border border-border text-foreground hover:bg-card/80'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Articles Grid */}
            {filteredArticles.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {filteredArticles.map((article) => (
                  <Card
                    key={article.id}
                    className="overflow-hidden flex flex-col hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="bg-gradient-to-br from-accent/10 to-primary/10 h-40 flex items-center justify-center">
                      <div className="text-center">
                        <Calendar className="w-8 h-8 text-accent/50 mx-auto mb-2" />
                        <span className="text-xs text-muted-foreground">{article.category}</span>
                      </div>
                    </div>

                    <div className="p-6 flex-grow flex flex-col">
                      <span className="text-xs font-semibold text-accent mb-2 self-start px-2 py-1 bg-accent/10 rounded">
                        {article.category}
                      </span>

                      <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-accent transition-colors font-serif line-clamp-2">
                        {article.title}
                      </h3>

                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-grow">
                        {article.excerpt}
                      </p>

                      <div className="space-y-3 pt-4 border-t border-border">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <User className="w-3 h-3" />
                          <span className="font-medium">{article.author}</span>
                        </div>

                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-3 text-xs text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              <span>{formatDate(article.date)}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              <span>{article.readTime} min</span>
                            </div>
                          </div>
                          <Link href={`/actualites/${article.id}`}>
                            <button className="text-accent hover:text-accent/80 transition-colors">
                              <ArrowRight className="w-4 h-4" />
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-4">
                  Aucun article ne correspond à votre recherche.
                </p>
                <Button variant="outline" onClick={() => { setSearchTerm(''); setSelectedCategory('Tous les articles'); }}>
                  Réinitialiser les filtres
                </Button>
              </div>
            )}

            {/* Results Info */}
            <div className="text-sm text-muted-foreground text-center">
              {filteredArticles.length} article{filteredArticles.length > 1 ? 's' : ''} trouvé{filteredArticles.length > 1 ? 's' : ''}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-primary/10 border border-primary/20 rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-foreground mb-4 font-serif">
              Questions sur ces sujets ?
            </h2>
            <p className="text-muted-foreground mb-8">
              Nos experts sont à votre disposition pour répondre à vos questions et vous accompagner.
            </p>
            <Link href="/contact">
              <Button variant="default">
                Nous contacter
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
