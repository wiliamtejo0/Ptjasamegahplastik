'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Phone, Mail, MapPin, Shield, Users, Lock, CheckCircle, Menu, X, Loader2 } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitMessage(data.message)
        setFormData({ name: '', phone: '', message: '' })
      } else {
        setSubmitMessage(data.error || 'Terjadi kesalahan. Silakan coba lagi.')
      }
    } catch (error) {
      setSubmitMessage('Terjadi kesalahan. Silakan coba lagi.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const services = [
    {
      icon: Shield,
      title: "Security Personnel",
      description: "Professional security guards for residential and commercial properties",
      features: ["Trained professionals", "24/7 availability", "Licensed personnel"]
    },
    {
      icon: Users,
      title: "Event Security",
      description: "Comprehensive security solutions for events and gatherings",
      features: ["Crowd control", "Access management", "Emergency response"]
    },
    {
      icon: Lock,
      title: "Mobile Patrol",
      description: "Regular patrol services for enhanced security monitoring",
      features: ["Vehicle patrol", "Random inspections", "Detailed reporting"]
    }
  ]

  const benefits = [
    "Professional and trained security personnel",
    "24/7 monitoring and rapid response",
    "Licensed and insured services",
    "Customized security solutions",
    "Advanced security equipment",
    "Regular training and development"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation Header */}
      <header className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="relative w-10 h-10">
                <Image
                  src="/company-logo.png"
                  alt="PT JASA MEGAH PASIFIK"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div>
                <h1 className="text-lg font-bold text-slate-900">PT JASA MEGAH PASIFIK</h1>
                <p className="text-xs text-slate-600">Professional Security Services</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-slate-700 hover:text-blue-600 transition-colors">Beranda</a>
              <a href="#services" className="text-slate-700 hover:text-blue-600 transition-colors">Layanan</a>
              <a href="#about" className="text-slate-700 hover:text-blue-600 transition-colors">Tentang Kami</a>
              <a href="#contact" className="text-slate-700 hover:text-blue-600 transition-colors">Kontak</a>
              <Button variant="outline" size="sm">
                <a href="/privacy">Privacy</a>
              </Button>
              <Button variant="outline" size="sm">
                <a href="/terms">Terms</a>
              </Button>
            </nav>

            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200">
            <div className="container mx-auto px-4 py-4 space-y-3">
              <a href="#home" className="block text-slate-700 hover:text-blue-600 transition-colors">Beranda</a>
              <a href="#services" className="block text-slate-700 hover:text-blue-600 transition-colors">Layanan</a>
              <a href="#about" className="block text-slate-700 hover:text-blue-600 transition-colors">Tentang Kami</a>
              <a href="#contact" className="block text-slate-700 hover:text-blue-600 transition-colors">Kontak</a>
              <div className="flex space-x-3 pt-3 border-t border-slate-200">
                <Button variant="outline" size="sm">
                  <a href="/privacy">Privacy</a>
                </Button>
                <Button variant="outline" size="sm">
                  <a href="/terms">Terms</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
            Trusted Security Provider
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            PT JASA MEGAH PASIFIK
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Professional security personnel services for residential and commercial properties. 
            Your trusted partner in comprehensive security solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <a href="#contact">Hubungi Kami</a>
            </Button>
            <Button size="lg" variant="outline">
              <a href="#services">Lihat Layanan</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Layanan Keamanan Kami
            </h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Kami menyediakan berbagai layanan keamanan profesional yang disesuaikan dengan kebutuhan Anda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-slate-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Mengapa Memilih PT JASA MEGAH PASIFIK?
              </h3>
              <p className="text-lg text-slate-600 mb-8">
                Dengan pengalaman bertahun-tahun dalam industri keamanan, kami berkomitmen untuk memberikan 
                layanan keamanan terbaik yang melindungi aset dan memberikan ketenangan pikiran bagi klien kami.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-slate-100 rounded-2xl p-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
                <p className="text-lg text-slate-700">Layanan Keamanan</p>
                <p className="text-sm text-slate-600">Siap membantu kapan saja Anda butuhkan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Hubungi Kami
            </h3>
            <p className="text-lg text-slate-600">
              Siap memberikan solusi keamanan terbaik untuk Anda
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h4 className="text-2xl font-semibold text-slate-900 mb-6">
                Informasi Kontak
              </h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Alamat</p>
                    <p className="text-slate-600">
                      Jl. Girilaya No.6, Banyu Urip, Kec. Sawahan, Surabaya, Jawa Timur 60255
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Phone className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Telepon</p>
                    <p className="text-slate-600">0823-8246-6239</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Email</p>
                    <p className="text-slate-600">info@jasamegahpasifik.com</p>
                  </div>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Form Konsultasi</CardTitle>
                <CardDescription>
                  Kirimkan pesan kepada kami untuk konsultasi kebutuhan keamanan Anda
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Masukkan nama Anda"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Nomor Telepon
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Masukkan nomor telepon"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Pesan
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Jelaskan kebutuhan keamanan Anda"
                      required
                    ></textarea>
                  </div>
                  
                  {submitMessage && (
                    <div className={`p-3 rounded-lg text-sm ${submitMessage.includes('Terima kasih') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {submitMessage}
                    </div>
                  )}
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Mengirim...
                      </>
                    ) : (
                      'Kirim Pesan'
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative w-8 h-8">
                  <Image
                    src="/company-logo.png"
                    alt="PT JASA MEGAH PASIFIK"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <h4 className="text-lg font-bold">PT JASA MEGAH PASIFIK</h4>
              </div>
              <p className="text-slate-400 text-sm">
                Professional security services you can trust. Protecting what matters most.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Layanan</h5>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>Security Personnel</li>
                <li>Event Security</li>
                <li>Mobile Patrol</li>
                <li>Security Consulting</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Kontak</h5>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>Surabaya, Jawa Timur 60255</li>
                <li>0823-8246-6239</li>
                <li>info@jasamegahpasifik.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-400">
            <p>&copy; 2024 PT JASA MEGAH PASIFIK. All rights reserved.</p>
            <div className="mt-2 space-x-4">
              <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-white transition-colors">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}