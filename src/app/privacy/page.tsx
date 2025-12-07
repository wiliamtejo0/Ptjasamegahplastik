import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Shield, Eye, Lock, Database } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <Link href="/" className="flex items-center space-x-3">
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
              </Link>
            </div>
            
            <nav className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Kembali ke Beranda
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Kebijakan Privasi
            </h1>
            <p className="text-lg text-slate-600">
              PT JASA MEGAH PASIFIK berkomitmen untuk melindungi privasi dan keamanan data pribadi Anda
            </p>
          </div>

          {/* Privacy Policy Content */}
          <div className="space-y-8">
            {/* Introduction */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Eye className="h-5 w-5 text-blue-600" />
                  <span>Pendahuluan</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-700">
                  Selamat datang di Kebijakan Privasi PT JASA MEGAH PASIFIK. Dokumen ini menjelaskan bagaimana kami 
                  mengumpulkan, menggunakan, melindungi, dan membagikan informasi pribadi Anda ketika menggunakan 
                  layanan keamanan kami.
                </p>
                <p className="text-slate-700">
                  Dengan menggunakan layanan kami, Anda menyetujui praktik yang dijelaskan dalam kebijakan privasi ini.
                </p>
              </CardContent>
            </Card>

            {/* Information Collection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Database className="h-5 w-5 text-blue-600" />
                  <span>Pengumpulan Informasi</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="font-semibold text-slate-900">Informasi yang Kami Kumpulkan:</h3>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li><strong>Informasi Identifikasi Pribadi:</strong> Nama, alamat, nomor telepon, email</li>
                  <li><strong>Informasi Kontak:</strong> Detail komunikasi untuk koordinasi layanan</li>
                  <li><strong>Informasi Properti:</strong> Alamat lokasi yang memerlukan layanan keamanan</li>
                  <li><strong>Informasi Bisnis:</strong> Detail perusahaan untuk layanan komersial</li>
                  <li><strong>Informasi Layanan:</strong> Jenis layanan yang dibutuhkan dan jadwal</li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Usage */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Lock className="h-5 w-5 text-blue-600" />
                  <span>Penggunaan Data</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="font-semibold text-slate-900">Kami menggunakan informasi Anda untuk:</h3>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li>Menyediakan layanan keamanan yang diminta</li>
                  <li>Mengkoordinasikan penempatan personel keamanan</li>
                  <li>Mengkomunikasikan detail layanan dan penagihan</li>
                  <li>Meningkatkan kualitas layanan kami</li>
                  <li>Memenuhi persyaratan hukum dan peraturan</li>
                  <li>Mencegah aktivitas ilegal dan menjaga keamanan</li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Protection */}
            <Card>
              <CardHeader>
                <CardTitle>Perlindungan Data</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-700">
                  PT JASA MEGAH PASIFIK mengimplementasikan langkah-langkah keamanan yang komprehensif untuk 
                  melindungi informasi pribadi Anda:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li>Enkripsi data sensitif</li>
                  <li>Akses terbatas untuk personel yang berwenang</li>
                  <li>Penyimpanan data yang aman</li>
                  <li>Protokol keamanan fisik dan digital</li>
                  <li>Pelatihan reguler staf tentang perlindungan data</li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Sharing */}
            <Card>
              <CardHeader>
                <CardTitle>Pembagian Informasi</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-700">
                  Kami tidak menjual, menyewakan, atau membagikan informasi pribadi Anda kepada pihak ketiga 
                  untuk tujuan pemasaran. Informasi Anda hanya akan dibagikan dalam kondisi berikut:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li>Dengan persetujuan Anda yang jelas</li>
                  <li>Untuk memenuhi persyaratan hukum</li>
                  <li>Untuk melindungi hak, properti, atau keselamatan kami atau orang lain</li>
                  <li>Dengan afiliasi perusahaan untuk tujuan operasional</li>
                </ul>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card>
              <CardHeader>
                <CardTitle>Hak Privasi Anda</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-700">
                  Sebagai pemilik data, Anda memiliki hak-hak berikut:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li>Mengakses informasi pribadi yang kami simpan tentang Anda</li>
                  <li>Memperbaiki informasi yang tidak akurat</li>
                  <li>Menghapus informasi pribadi Anda</li>
                  <li>Menolak pemrosesan data tertentu</li>
                  <li>Meminta pembatasan pemrosesan data</li>
                  <li>Memindahkan data Anda ke penyedia layanan lain</li>
                </ul>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Hubungi Kami</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-700">
                  Jika Anda memiliki pertanyaan tentang Kebijakan Privasi kami atau ingin menggunakan hak privasi Anda, 
                  silakan hubungi kami:
                </p>
                <div className="bg-slate-50 p-4 rounded-lg space-y-2">
                  <p className="font-semibold text-slate-900">PT JASA MEGAH PASIFIK</p>
                  <p className="text-slate-700">📍 Jl. Girilaya No.6, Banyu Urip, Kec. Sawahan, Surabaya, Jawa Timur 60255</p>
                  <p className="text-slate-700">📞 0823-8246-6239</p>
                  <p className="text-slate-700">📧 privacy@jasamegahpasifik.com</p>
                </div>
              </CardContent>
            </Card>

            {/* Policy Updates */}
            <Card>
              <CardHeader>
                <CardTitle>Pembaruan Kebijakan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Perubahan akan diberitahukan 
                  melalui website kami atau komunikasi langsung. Penggunaan layanan kami yang berkelanjutan 
                  setelah perubahan berarti Anda menerima kebijakan yang diperbarui.
                </p>
                <p className="text-sm text-slate-600 mt-4">
                  <strong>Terakhir diperbarui:</strong> 1 Januari 2024
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 px-4 mt-12">
        <div className="container mx-auto text-center">
          <p className="text-sm text-slate-400">
            &copy; 2024 PT JASA MEGAH PASIFIK. All rights reserved.
          </p>
          <div className="mt-2 space-x-4">
            <Link href="/privacy" className="text-slate-400 hover:text-white transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-slate-400 hover:text-white transition-colors text-sm">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}