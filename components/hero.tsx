export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary to-primary/90 text-white py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Votre partenaire juridique de confiance
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Beaumont & Associés offre des services juridiques complets et innovants pour les particuliers et les entreprises. Avec plus de 20 ans d'expérience, nous défendons vos droits avec excellence.
            </p>
            <div className="flex gap-4">
              <a
                href="#contact"
                className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
              >
                Prenez contact
              </a>
              <a
                href="#domaines"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
              >
                Nos domaines
              </a>
            </div>
          </div>

          <div className="hidden md:block relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="space-y-4">
                <div className="h-4 bg-white/30 rounded w-3/4"></div>
                <div className="h-4 bg-white/30 rounded w-full"></div>
                <div className="h-4 bg-white/30 rounded w-5/6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
