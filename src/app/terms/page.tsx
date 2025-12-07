import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowLeft, FileText, Shield, Users, AlertTriangle, CheckCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function TermsAndConditions() {
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
              <FileText className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Syarat dan Ketentuan
            </h1>
            <p className="text-lg text-slate-600">
              Syarat dan ketentuan penggunaan layanan PT JASA MEGAH PASIFIK
            </p>
          </div>

          {/* Terms Content */}
          <div className="space-y-8">
            {/* Acceptance of Terms */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span>Penerimaan Syarat</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-700">
                  Dengan menggunakan layanan PT JASA MEGAH PASIFIK, Anda setuju untuk terikat oleh syarat dan 
                  ketentuan yang diuraikan dalam dokumen ini. Jika Anda tidak setuju dengan syarat ini, 
                  jangan gunakan layanan kami.
                </p>
                <p className="text-slate-700">
                  Syarat dan ketentuan ini berlaku untuk semua klien, baik individu maupun perusahaan, 
                  yang menggunakan layanan keamanan yang kami sediakan.
                </p>
              </CardContent>
            </Card>

            {/* Services Description */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-blue-600" />
                  <span>Deskripsi Layanan</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="font-semibold text-slate-900">Layanan yang Kami Sediakan:</h3>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li><strong>Personel Keamanan:</strong> Penyediaan petugas keamanan berlisensi dan terlatih</li>
                  <li><strong>Keamanan Acara:</strong> Layanan keamanan untuk acara dan pertemuan</li>
                  <li><strong>Patroli Bergerak:</strong> Layanan patroli rutin untuk pemantauan keamanan</li>
                  <li><strong>Konsultasi Keamanan:</strong> Analisis dan rekomendasi keamanan</li>
                  <li><strong>Keamanan Komersial:</strong> Solusi keamanan untuk properti bisnis</li>
                  <li><strong>Keamanan Residensial:</strong> Layanan keamanan untuk rumah dan perumahan</li>
                </ul>
              </CardContent>
            </Card>

            {/* Client Responsibilities */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-blue-600" />
                  <span>Tanggung Jawab Klien</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="font-semibold text-slate-900">Sebagai klien, Anda bertanggung jawab untuk:</h3>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li>Memberikan informasi yang akurat dan lengkap tentang kebutuhan keamanan Anda</li>
                  <li>Memastikan akses yang aman dan memadai untuk personel keamanan kami</li>
                  <li>Memberikan instruksi yang jelas mengenai prosedur keamanan yang diinginkan</li>
                  <li>Melaporkan segera setiap insiden atau masalah keamanan</li>
                  <li>Mematuhi peraturan dan hukum yang berlaku</li>
                  <li>Memberikan lingkungan kerja yang aman bagi personel keamanan</li>
                  <li>Membayar layanan sesuai dengan kesepakatan yang ditetapkan</li>
                </ul>
              </CardContent>
            </Card>

            {/* Payment Terms */}
            <Card>
              <CardHeader>
                <CardTitle>Ketentuan Pembayaran</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="font-semibold text-slate-900">Struktur Pembayaran:</h3>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li>Pembayaran harus dilakukan sesuai dengan faktur yang dikeluarkan</li>
                  <li>Jangka waktu pembayaran adalah 30 hari sejak tanggal faktur</li>
                  <li>Keterlambatan pembayaran akan dikenakan denda sesuai peraturan yang berlaku</li>
                  <li>Biaya tambahan akan dikenakan untuk layanan di luar kesepakatan awal</li>
                  <li>Pembayaran dapat dilakukan melalui transfer bank atau metode yang disetujui</li>
                </ul>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertTriangle className="h-5 w-5 text-blue-600" />
                  <span>Pembatasan Tanggung Jawab</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-700">
                  PT JASA MEGAH PASIFIK berkomitmen untuk menyediakan layanan keamanan profesional, namun:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li>Kami tidak bertanggung jawab atas kehilangan atau kerusakan yang disebabkan oleh force majeure</li>
                  <li>Tanggung jawab kami dibatasi pada biaya layanan yang dibayarkan</li>
                  <li>Kami tidak bertanggung jawab atas kelalaian pihak ketiga</li>
                  <li>Klien setuju untuk mengganti kerugian kami dari klaim pihak ketiga</li>
                  <li>Kami tidak menjamin kebebasan total dari risiko keamanan</li>
                </ul>
              </CardContent>
            </Card>

            {/* Termination */}
            <Card>
              <CardHeader>
                <CardTitle>Penghentian Layanan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="font-semibold text-slate-900">Ketentuan Penghentian:</h3>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li>Periode pemberitahuan penghentian adalah 30 hari</li>
                  <li>Penghentian segera dapat dilakukan untuk pelanggaran serius</li>
                  <li>Biaya layanan yang telah digunakan harus dibayar penuh</li>
                  <li>Kami berhaku menghentikan layanan untuk pembayaran yang tertunda</li>
                  <li>Pengembalian biaya akan diproses sesuai kebijakan perusahaan</li>
                </ul>
              </CardContent>
            </Card>

            {/* Confidentiality */}
            <Card>
              <CardHeader>
                <CardTitle>Kerahasiaan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-700">
                  PT JASA MEGAH PASIFIK berkomitmen untuk menjaga kerahasiaan informasi klien:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li>Semua personel kami terikat oleh perjanjian kerahasiaan</li>
                  <li>Informasi klien tidak akan dibagikan kepada pihak ketiga tanpa persetujuan</li>
                  <li>Kami mengimplementasikan langkah-langkah keamanan data yang ketat</li>
                  <li>Personel keamanan dilatih untuk menjaga kerahasiaan operasional</li>
                </ul>
              </CardContent>
            </Card>

            {/* Insurance */}
            <Card>
              <CardHeader>
                <CardTitle>Asuransi</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-700">
                  PT JASA MEGAH PASIFIK memiliki asuransi komprehensif yang meliputi:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li>Asuransi tanggung gugat umum</li>
                  <li>Asuransi kecelakaan kerja untuk personel</li>
                  <li>Asuransi properti dan peralatan</li>
                  <li>Asuransi kendaraan operasional</li>
                </ul>
                <p className="text-slate-700">
                  Bukti pertanggungan dapat disediakan atas permintaan klien.
                </p>
              </CardContent>
            </Card>

            {/* Dispute Resolution */}
            <Card>
              <CardHeader>
                <CardTitle>Penyelesaian Sengketa</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="font-semibold text-slate-900">Prosedur Penyelesaian:</h3>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li>Sengketa akan diselesaikan melalui negosiasi baik hati terlebih dahulu</li>
                  <li>Jika tidak tercapai kesepakatan, mediasi akan dilakukan</li>
                  <li>Upaya hukum terakhir adalah melalui pengadilan di Surabaya</li>
                  <li>Hukum yang berlaku adalah hukum Republik Indonesia</li>
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
                  Untuk pertanyaan tentang Syarat dan Ketentuan kami, silakan hubungi:
                </p>
                <div className="bg-slate-50 p-4 rounded-lg space-y-2">
                  <p className="font-semibold text-slate-900">PT JASA MEGAH PASIFIK</p>
                  <p className="text-slate-700">📍 Jl. Girilaya No.6, Banyu Urip, Kec. Sawahan, Surabaya, Jawa Timur 60255</p>
                  <p className="text-slate-700">📞 0823-8246-6239</p>
                  <p className="text-slate-700">📧 legal@jasamegahpasifik.com</p>
                </div>
              </CardContent>
            </Card>

            {/* Amendments */}
            <Card>
              <CardHeader>
                <CardTitle>Perubahan Syarat dan Ketentuan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  PT JASA MEGAH PASIFIK berhak mengubah syarat dan ketentuan ini dari waktu ke waktu. 
                  Perubahan akan diberitahukan kepada klien melalui email atau website kami. 
                  Penggunaan layanan yang berkelanjutan setelah perubahan berarti Anda menerima syarat yang diperbarui.
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