'use client';

import React, { useState } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Clock,
  MapPin,
  Phone,
  Mail,
  CheckCircle,
  ChevronRight,
  ChevronLeft,
  Users,
  Calendar,
  Edit2,
} from 'lucide-react';
import Link from 'next/link';

const services = [
  { id: 'business', label: 'Droit des affaires', duration: '1h', icon: '📋' },
  { id: 'realestate', label: 'Droit immobilier', duration: '45 min', icon: '🏠' },
  { id: 'labor', label: 'Droit du travail', duration: '45 min', icon: '👥' },
  { id: 'criminal', label: 'Droit pénal', duration: '1h', icon: '⚖️' },
  { id: 'tax', label: 'Droit fiscal', duration: '1h', icon: '💰' },
  { id: 'family', label: 'Droit de la famille', duration: '1h', icon: '👨‍👩‍👧' },
];

const attorneys = [
  {
    id: 1,
    name: 'Laurent Beaumont',
    specialties: ['Droit des affaires', 'M&A'],
    nextAvailable: '24 janvier 2024',
  },
  {
    id: 2,
    name: 'Sophie Durand',
    specialties: ['Droit immobilier', 'Copropriété'],
    nextAvailable: '22 janvier 2024',
  },
  {
    id: 3,
    name: 'Marc Lefevre',
    specialties: ['Droit du travail', 'Contentieux'],
    nextAvailable: '23 janvier 2024',
  },
];

const timeSlots = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00',
];

export default function RendezVousPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    service: '',
    serviceLabel: '',
    attorney: '',
    attorneyName: '',
    noPreference: false,
    date: '',
    time: '',
    timeFilter: 'all',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    reason: '',
    isFirstConsultation: true,
    additionalNotes: '',
    privacyAccepted: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleServiceSelect = (serviceId: string, serviceLabel: string) => {
    setFormData((prev) => ({
      ...prev,
      service: serviceId,
      serviceLabel: serviceLabel,
    }));
  };

  const handleAttorneySelect = (attorneyId: number, attorneyName: string) => {
    setFormData((prev) => ({
      ...prev,
      attorney: attorneyId.toString(),
      attorneyName: attorneyName,
    }));
  };

  const handleNoPreference = () => {
    setFormData((prev) => ({
      ...prev,
      noPreference: !prev.noPreference,
      attorney: '',
      attorneyName: '',
    }));
  };

  const handleDateSelect = (date: string) => {
    setFormData((prev) => ({ ...prev, date }));
  };

  const handleTimeSelect = (time: string) => {
    setFormData((prev) => ({ ...prev, time }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('[v0] RDV submitted:', formData);
    setSubmitted(true);
  };

  const getFilteredTimes = () => {
    if (formData.timeFilter === 'morning') {
      return timeSlots.filter((t) => parseInt(t) < 12);
    } else if (formData.timeFilter === 'afternoon') {
      return timeSlots.filter((t) => parseInt(t) >= 14);
    }
    return timeSlots;
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return !!formData.service;
      case 2:
        return formData.noPreference || !!formData.attorney;
      case 3:
        return !!formData.date && !!formData.time;
      case 4:
        return (
          !!formData.firstName &&
          !!formData.lastName &&
          !!formData.email &&
          !!formData.phone &&
          !!formData.reason &&
          formData.privacyAccepted
        );
      default:
        return false;
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center max-w-2xl mx-auto">
            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-success" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4 font-serif">
              Rendez-vous confirmé !
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Merci pour votre demande. Nous avons bien reçu votre rendez-vous pour le {formData.date} à {formData.time}.
            </p>

            <Card className="p-8 mb-8 bg-success/5 border-success/20">
              <div className="space-y-4 text-left">
                <div className="flex items-start gap-3">
                  <div className="text-foreground font-semibold min-w-32">Service :</div>
                  <div className="text-muted-foreground">{formData.serviceLabel}</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-foreground font-semibold min-w-32">Avocat :</div>
                  <div className="text-muted-foreground">
                    {formData.noPreference ? 'Assignation automatique' : formData.attorneyName}
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-foreground font-semibold min-w-32">Date et heure :</div>
                  <div className="text-muted-foreground">
                    {formData.date} à {formData.time}
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-foreground font-semibold min-w-32">Lieu :</div>
                  <div className="text-muted-foreground">
                    Cabinet Beaumont & Associés
                    <br />
                    123 Avenue des Champs, 75008 Paris
                  </div>
                </div>
              </div>
            </Card>

            <p className="text-muted-foreground mb-8">
              Un email de confirmation a été envoyé à {formData.email}. Vous pouvez l'ajouter à votre calendrier.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button variant="default">Retour à l'accueil</Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline">Nous contacter</Button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance font-serif">
              Prendre un rendez-vous
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Trouvez le créeau parfait avec l'avocat de votre choix. Processus simple et rapide.
            </p>
          </div>
        </section>

        {/* Booking Form */}
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Progress Bar */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-6">
                {[1, 2, 3, 4, 5].map((s) => (
                  <React.Fragment key={s}>
                    <div
                      className={`flex items-center justify-center w-10 h-10 rounded-full font-semibold ${
                        s <= step
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-secondary/20 text-muted-foreground'
                      }`}
                    >
                      {s <= step && s < step ? <CheckCircle className="w-5 h-5" /> : s}
                    </div>
                    {s < 5 && (
                      <div
                        className={`flex-1 h-1 mx-2 ${
                          s < step ? 'bg-primary' : 'bg-secondary/20'
                        }`}
                      />
                    )}
                  </React.Fragment>
                ))}
              </div>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Service</span>
                <span>Avocat</span>
                <span>Date & Heure</span>
                <span>Vos données</span>
                <span>Confirmation</span>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Step 1: Service Selection */}
              {step === 1 && (
                <Card className="p-8 mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6 font-serif">
                    Étape 1 : Quel service vous intéresse ?
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {services.map((service) => (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() =>
                          handleServiceSelect(service.id, service.label)
                        }
                        className={`p-6 rounded-lg border-2 transition-all text-left ${
                          formData.service === service.id
                            ? 'border-accent bg-accent/10'
                            : 'border-border hover:border-accent/50'
                        }`}
                      >
                        <div className="text-2xl mb-2">{service.icon}</div>
                        <h3 className="font-semibold text-foreground mb-1">
                          {service.label}
                        </h3>
                        <p className="text-xs text-muted-foreground">
                          Durée typique: {service.duration}
                        </p>
                      </button>
                    ))}
                  </div>
                </Card>
              )}

              {/* Step 2: Attorney Selection */}
              {step === 2 && (
                <Card className="p-8 mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6 font-serif">
                    Étape 2 : Choisir votre avocat (optionnel)
                  </h2>

                  <div className="mb-6">
                    <label className="flex items-center gap-3 p-4 border-2 border-border rounded-lg cursor-pointer hover:border-accent/50 transition-all">
                      <input
                        type="checkbox"
                        name="noPreference"
                        checked={formData.noPreference}
                        onChange={handleNoPreference}
                        className="w-5 h-5"
                      />
                      <div>
                        <p className="font-semibold text-foreground">
                          Pas de préférence
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Attribution automatique au meilleur disponible
                        </p>
                      </div>
                    </label>
                  </div>

                  {!formData.noPreference && (
                    <div className="space-y-4">
                      {attorneys.map((attorney) => (
                        <button
                          key={attorney.id}
                          type="button"
                          onClick={() =>
                            handleAttorneySelect(attorney.id, attorney.name)
                          }
                          className={`p-6 rounded-lg border-2 transition-all text-left w-full ${
                            formData.attorney === attorney.id.toString()
                              ? 'border-accent bg-accent/10'
                              : 'border-border hover:border-accent/50'
                          }`}
                        >
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                              <Users className="w-6 h-6 text-accent" />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-foreground mb-1">
                                {attorney.name}
                              </h3>
                              <p className="text-sm text-muted-foreground mb-2">
                                {attorney.specialties.join(', ')}
                              </p>
                              <p className="text-xs text-accent">
                                Prochain créneau: {attorney.nextAvailable}
                              </p>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </Card>
              )}

              {/* Step 3: Date & Time */}
              {step === 3 && (
                <Card className="p-8 mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6 font-serif">
                    Étape 3 : Choisir date et heure
                  </h2>

                  <div className="mb-8">
                    <label className="block text-sm font-semibold text-foreground mb-3">
                      Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-lg text-foreground bg-card focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>

                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <label className="text-sm font-semibold text-foreground">
                        Préférence d'horaire
                      </label>
                    </div>
                    <div className="flex gap-3 mb-6">
                      {[
                        { id: 'all', label: 'Tous les créneaux' },
                        { id: 'morning', label: 'Matin' },
                        { id: 'afternoon', label: 'Après-midi' },
                      ].map((filter) => (
                        <button
                          key={filter.id}
                          type="button"
                          onClick={() =>
                            setFormData((prev) => ({
                              ...prev,
                              timeFilter: filter.id,
                            }))
                          }
                          className={`px-4 py-2 rounded-lg font-medium transition-all ${
                            formData.timeFilter === filter.id
                              ? 'bg-accent text-accent-foreground'
                              : 'bg-secondary/20 text-foreground hover:bg-secondary/40'
                          }`}
                        >
                          {filter.label}
                        </button>
                      ))}
                    </div>

                    <div className="grid grid-cols-4 gap-2">
                      {getFilteredTimes().map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => handleTimeSelect(time)}
                          className={`p-3 rounded-lg font-medium transition-all ${
                            formData.time === time
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-card border border-border hover:border-accent'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </Card>
              )}

              {/* Step 4: Personal Info */}
              {step === 4 && (
                <Card className="p-8 mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6 font-serif">
                    Étape 4 : Vos coordonnées
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Prénom *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="Votre prénom"
                        className="w-full px-4 py-3 border border-border rounded-lg text-foreground bg-card focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Nom *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Votre nom"
                        className="w-full px-4 py-3 border border-border rounded-lg text-foreground bg-card focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="votre@email.com"
                      className="w-full px-4 py-3 border border-border rounded-lg text-foreground bg-card focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+33 6 XX XX XX XX"
                      className="w-full px-4 py-3 border border-border rounded-lg text-foreground bg-card focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Motif de consultation *
                    </label>
                    <textarea
                      name="reason"
                      value={formData.reason}
                      onChange={handleInputChange}
                      placeholder="Décrivez brièvement le motif de votre consultation..."
                      rows={4}
                      maxLength={200}
                      className="w-full px-4 py-3 border border-border rounded-lg text-foreground bg-card focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                    <p className="text-xs text-muted-foreground mt-2">
                      {formData.reason.length}/200 caractères
                    </p>
                  </div>

                  <div className="mb-6">
                    <label className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        name="isFirstConsultation"
                        checked={formData.isFirstConsultation}
                        onChange={handleInputChange}
                        className="w-5 h-5"
                      />
                      <span className="text-sm text-muted-foreground">
                        Ceci est ma première consultation avec votre cabinet
                      </span>
                    </label>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Notes additionnelles (optionnel)
                    </label>
                    <textarea
                      name="additionalNotes"
                      value={formData.additionalNotes}
                      onChange={handleInputChange}
                      placeholder="Informations supplémentaires..."
                      rows={3}
                      className="w-full px-4 py-3 border border-border rounded-lg text-foreground bg-card focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        name="privacyAccepted"
                        checked={formData.privacyAccepted}
                        onChange={handleInputChange}
                        className="w-5 h-5 mt-1"
                      />
                      <span className="text-sm text-muted-foreground">
                        J'accepte que mes données soient utilisées pour me recontacter et traiter ma demande. *
                      </span>
                    </label>
                  </div>
                </Card>
              )}

              {/* Step 5: Confirmation */}
              {step === 5 && (
                <Card className="p-8 mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6 font-serif">
                    Confirmer votre rendez-vous
                  </h2>

                  <div className="space-y-6 mb-8">
                    <div className="flex justify-between items-start pb-4 border-b border-border">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Service</p>
                        <p className="font-semibold text-foreground">
                          {formData.serviceLabel}
                        </p>
                      </div>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => setStep(1)}
                      >
                        <Edit2 className="w-4 h-4" />
                      </Button>
                    </div>

                    <div className="flex justify-between items-start pb-4 border-b border-border">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Avocat</p>
                        <p className="font-semibold text-foreground">
                          {formData.noPreference
                            ? 'Assignation automatique'
                            : formData.attorneyName}
                        </p>
                      </div>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => setStep(2)}
                      >
                        <Edit2 className="w-4 h-4" />
                      </Button>
                    </div>

                    <div className="flex justify-between items-start pb-4 border-b border-border">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">
                          Date et heure
                        </p>
                        <p className="font-semibold text-foreground">
                          {formData.date} à {formData.time}
                        </p>
                      </div>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => setStep(3)}
                      >
                        <Edit2 className="w-4 h-4" />
                      </Button>
                    </div>

                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">
                          Vos coordonnées
                        </p>
                        <p className="font-semibold text-foreground">
                          {formData.firstName} {formData.lastName}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {formData.email}
                        </p>
                      </div>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => setStep(4)}
                      >
                        <Edit2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mb-8">
                    <p className="text-sm text-muted-foreground">
                      En confirmant, vous acceptez nos conditions d'utilisation et politique de confidentialité.
                    </p>
                  </div>
                </Card>
              )}

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setStep(Math.max(1, step - 1))}
                  disabled={step === 1}
                >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Précédent
                </Button>

                <div className="text-sm text-muted-foreground">
                  Étape {step} sur 5
                </div>

                {step < 5 ? (
                  <Button
                    type="button"
                    variant="default"
                    onClick={() => setStep(step + 1)}
                    disabled={!canProceed()}
                  >
                    Suivant
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    variant="default"
                    disabled={!canProceed()}
                  >
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Confirmer le rendez-vous
                  </Button>
                )}
              </div>
            </form>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-16 md:py-24 bg-secondary/5 border-y border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center font-serif">
              Informations pratiques
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <Clock className="w-8 h-8 text-accent mx-auto mb-4" />
                <h3 className="font-bold text-foreground mb-2">Réponse rapide</h3>
                <p className="text-muted-foreground text-sm">
                  Confirmation de votre rendez-vous sous 2 heures les jours ouvrables.
                </p>
              </Card>
              <Card className="p-6 text-center">
                <MapPin className="w-8 h-8 text-accent mx-auto mb-4" />
                <h3 className="font-bold text-foreground mb-2">Localisation</h3>
                <p className="text-muted-foreground text-sm">
                  123 Avenue des Champs, 75008 Paris. Accès RER et transports en commun.
                </p>
              </Card>
              <Card className="p-6 text-center">
                <Phone className="w-8 h-8 text-accent mx-auto mb-4" />
                <h3 className="font-bold text-foreground mb-2">Questions ?</h3>
                <p className="text-muted-foreground text-sm">
                  Appelez-nous au <span className="font-semibold">01 23 45 67 89</span>
                </p>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
