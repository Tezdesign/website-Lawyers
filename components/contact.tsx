'use client'

import React from "react"

import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { useState } from 'react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Prenez contact avec nous
          </h2>
          <p className="text-lg text-muted-foreground">
            Nous répondons à vos questions dans les 24 heures
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl border border-border">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-primary mb-2">Adresse</h3>
            <p className="text-muted-foreground">
              123, Boulevard de la République<br />
              75002 Paris<br />
              France
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-border">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
              <Phone className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-primary mb-2">Téléphone</h3>
            <p className="text-muted-foreground">
              <a href="tel:+33145234567" className="hover:text-accent transition-colors">
                +33 (0)1 45 23 45 67
              </a><br />
              <a href="tel:+33623456789" className="hover:text-accent transition-colors">
                +33 (0)6 23 45 67 89
              </a>
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-border">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-primary mb-2">Horaires</h3>
            <p className="text-muted-foreground text-sm">
              Lundi - Vendredi<br />
              09:00 - 19:00<br />
              <br />
              Samedi sur rendez-vous<br />
              10:00 - 13:00
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-border p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                  placeholder="votre@email.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                  placeholder="+33 (0)..."
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Domaine juridique
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                >
                  <option value="">Sélectionnez un domaine</option>
                  <option value="business">Droit des affaires</option>
                  <option value="real-estate">Droit immobilier</option>
                  <option value="labor">Droit du travail</option>
                  <option value="criminal">Droit pénal</option>
                  <option value="family">Droit de la famille</option>
                  <option value="ip">Propriété intellectuelle</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none"
                placeholder="Décrivez votre situation juridique..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-accent text-accent-foreground py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
            >
              Envoyer le message
            </button>

            {submitted && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                Merci! Nous vous contacterons dans les 24 heures.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
