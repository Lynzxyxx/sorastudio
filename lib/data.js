// ====== Edit data di sini. Semua section membaca dari file ini. ======
export const site = {
  name: 'Gilang Ramadhan',
  role: 'Web & SMM Panel Developer',
  location: 'Pekanbaru, Riau',
  year: 2026,
  whatsapp: '6283169147017',
  whatsappLabel: '+62 831-6914-7017',
  websiteUrl: 'https://sora-pedia.my.id',
  websiteLabel: 'sora-pedia.my.id',
  socials: {
    instagram: { handle: 'lang.87788', url: 'https://instagram.com/lang.87788' },
    tiktok: { handle: 'lang.8787', url: 'https://www.tiktok.com/@lang.8787' },
  },
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Pekanbaru%2C+Riau',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://sorastudi-delta.vercel.app',
  photo: null, // isi '/foto-gilang.jpg' (taruh di folder public) untuk memakai foto asli
};

export const nav = [
  { label: 'Beranda', href: '#home' },
  { label: 'Layanan', href: '#services' },
  { label: 'Portofolio', href: '#projects' },
  { label: 'Harga', href: '#pricing' },
  { label: 'Keahlian', href: '#skills' },
  { label: 'Kontak', href: '#contact' },
];

export const heroPoints = [
  'Konsultasi awal gratis',
  'Dikerjakan langsung, tanpa perantara',
  'Website dan panel siap pakai',
  'Dukungan setelah rilis',
];

export const services = [
  { icon: 'panel', title: 'Pembuatan SMM Panel', desc: 'Panel layanan sosial media dengan dasbor pengguna, saldo, dan riwayat order otomatis.' },
  { icon: 'key', title: 'Integrasi API OTP', desc: 'Hubungkan layanan nomor virtual dan verifikasi OTP ke sistem Anda dengan aman.' },
  { icon: 'plug', title: 'API Nomor Kosong', desc: 'Endpoint untuk cek ketersediaan nomor, lengkap dengan dokumentasi dan kunci akses.' },
  { icon: 'globe', title: 'Website Company Profile', desc: 'Website bisnis yang rapi, cepat, ramah ponsel, dan siap ditemukan di Google.' },
  { icon: 'cart', title: 'Toko Online & Kasir', desc: 'Toko online dan aplikasi kasir sederhana untuk membantu penjualan harian.' },
  { icon: 'shield', title: 'Perawatan & Optimasi', desc: 'Perbaikan bug, pembaruan fitur, dan peningkatan kecepatan setelah website rilis.' },
];

export const projects = [
  { kind: 'smm', label: 'SMM Panel · Website', title: 'Sora Pedia SMM Panel',
    desc: 'Panel layanan sosial media dengan dasbor pengguna, saldo, dan riwayat order yang berjalan otomatis.',
    href: 'https://sora-pedia.my.id', cta: 'Open' },
  { kind: 'otp', label: 'Layanan OTP', title: 'Sora OTP Service',
    desc: 'Layanan nomor virtual untuk verifikasi OTP. Pesan masuk tampil langsung di dasbor.',
    href: '#contact', cta: 'Tanya project ini' },
  { kind: 'api', label: 'REST API', title: 'API Nomor Kosong',
    desc: 'API untuk memeriksa nomor yang tersedia, lengkap dengan dokumentasi dan kunci akses per pengguna.',
    href: '#contact', cta: 'Tanya project ini' },
];

export const reasons = [
  { icon: 'user', title: 'Komunikasi langsung', desc: 'Anda berbicara langsung dengan developer yang mengerjakan, tanpa perantara.' },
  { icon: 'clock', title: 'Jadwal jelas', desc: 'Lingkup dan target waktu disepakati sejak awal agar tidak ada kejutan.' },
  { icon: 'lock', title: 'Kode rapi & aman', desc: 'Struktur bersih dan mudah dirawat, dengan perhatian pada keamanan data pengguna.' },
  { icon: 'wallet', title: 'Biaya transparan', desc: 'Rincian biaya dijelaskan sebelum pengerjaan dimulai.' },
];

export const plans = [
  { name: 'Konsultasi', price: 'Gratis', note: 'Diskusi awal', cta: 'Mulai konsultasi',
    features: ['Bahas kebutuhan dan target', 'Saran teknologi yang pas', 'Perkiraan waktu dan biaya'] },
  { name: 'Proyek', price: 'Sesuai lingkup', note: 'Per proyek', cta: 'Minta penawaran', featured: true,
    features: ['Desain dan pengembangan penuh', 'Revisi sesuai kesepakatan', 'Deploy ke Vercel atau hosting', 'Dokumentasi singkat'] },
  { name: 'Perawatan', price: 'Bulanan', note: 'Setelah rilis', cta: 'Tanya paket',
    features: ['Perbaikan bug', 'Pembaruan dan optimasi', 'Dukungan lewat WhatsApp'] },
];

export const skills = [
  { icon: 'code', title: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind'] },
  { icon: 'layers', title: 'Backend & Database', items: ['PHP', 'Laravel', 'MySQL'] },
  { icon: 'plug', title: 'API', items: ['REST API', 'OTP API', 'Nomor kosong'] },
  { icon: 'shield', title: 'Tools', items: ['Git', 'GitHub', 'Vercel', 'VS Code'] },
  { icon: 'spark', title: 'AI Tools', items: ['ChatGPT', 'Claude', 'Gemini'] },
];

export const needs = ['Pembuatan SMM Panel', 'Integrasi API OTP', 'API Nomor Kosong', 'Website / company profile', 'Toko online / kasir', 'Lainnya'];

export const waLink = (text = '') =>
  `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`;
