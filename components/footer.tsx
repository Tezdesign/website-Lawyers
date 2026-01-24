import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-primary text-white py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Beaumont & Associés</h3>
            <p className="text-white/70 text-sm">
              Cabinet d'avocats offrant des services juridiques complets depuis plus de 20 ans.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Domaines de pratique</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link href="#domaines" className="hover:text-white transition-colors">Droit des affaires</Link></li>
              <li><Link href="#domaines" className="hover:text-white transition-colors">Droit immobilier</Link></li>
              <li><Link href="#domaines" className="hover:text-white transition-colors">Droit du travail</Link></li>
              <li><Link href="#domaines" className="hover:text-white transition-colors">Droit pénal</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Entreprise</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link href="#equipe" className="hover:text-white transition-colors">Notre équipe</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Nos valeurs</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Carrières</Link></li>
              <li><Link href="#contact" className="hover:text-white transition-colors">Nous contacter</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Légal</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link href="#" className="hover:text-white transition-colors">Mentions légales</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Politique de confidentialité</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Conditions d'utilisation</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">CGV</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/70">
              &copy; {new Date().getFullYear()} Beaumont & Associés. Tous droits réservés.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">
                LinkedIn
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">
                Facebook
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
