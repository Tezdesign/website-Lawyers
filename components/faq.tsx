'use client'

import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  {
    question: 'Quels sont vos tarifs et comment se déroule la consultation initiale?',
    answer: 'La consultation initiale est gratuite et sans engagement. Nous établissons ensemble vos besoins et proposons un devis transparent. Nos tarifs sont modulables selon la complexité de votre dossier et peuvent être forfaitaires ou horaires.'
  },
  {
    question: 'Combien de temps faut-il pour résoudre une affaire judiciaire?',
    answer: 'La durée dépend de la nature du dossier et de la court saisie. Les contentieux simples peuvent être résolus en quelques mois, tandis que les cas complexes peuvent prendre plusieurs années. Nous vous tiendrons informé à chaque étape.'
  },
  {
    question: 'Pouvez-vous me représenter devant tous les tribunaux?',
    answer: 'Oui, nos avocats sont inscrits au barreau et autorisés à exercer devant tous les tribunaux français, ainsi que devant certaines cours européennes. Nous travaillons également avec un réseau d\'avocats internationaux pour les affaires transfrontalières.'
  },
  {
    question: 'Comment s\'organise le suivi de mon dossier?',
    answer: 'Chaque dossier est assigné à un avocat responsable qui vous contactera régulièrement. Vous recevrez des mises à jour écrites et pouvez demander un point de situation à tout moment. Nous privilégions la communication transparente.'
  },
  {
    question: 'Offrez-vous des services de conseil préventif?',
    answer: 'Absolument. Nous proposons du conseil juridique préventif pour les entreprises afin d\'anticiper les risques légaux et d\'éviter les contentieux. C\'est une approche rentable à long terme.'
  },
  {
    question: 'Quelle est votre politique de confidentialité?',
    answer: 'Le secret professionnel est fondamental dans notre exercice. Toutes les informations que vous nous confierez sont strictement confidentielles et protégées par le secret de l\'avocat, conformément au code de déontologie.'
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 md:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Questions fréquentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Trouvez les réponses aux questions les plus courants
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border rounded-lg overflow-hidden hover:border-accent/50 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-secondary transition-colors"
              >
                <span className="font-semibold text-left text-foreground">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`flex-shrink-0 w-5 h-5 text-accent transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 bg-secondary border-t border-border">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
