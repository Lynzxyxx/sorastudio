// ====== Edit data di sini. Semua section membaca dari file ini. ======
export const site = {
  name: 'Gilang Ramadhan',
  first: 'GILANG',
  last: 'RAMADHAN',
  team: 'Sora Pedia Team',
  role: 'SMM Panel & Web Developer',
  location: 'Pekanbaru, Riau',
  year: 2026,
  whatsapp: '6283169147017',
  whatsappLabel: '+62 831-6914-7017',
  email: 'gilang8301@gmail.com', // TODO
  cv: '/cv-gilang-ramadhan.pdf', // TODO: taruh file CV di folder /public
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://sora-portfolio.vercel.app',
  panelUrl: 'https://sora-pedia.my.id',
  socials: {
    instagram: { handle: 'lang.87788', url: 'https://instagram.com/lang.87788' },
    tiktok: { handle: 'lang.8787', url: 'https://www.tiktok.com/@lang.8787' },
  },
  heroImage: null, // contoh: '/hero-character.png' untuk mengganti ilustrasi SVG bawaan
};

export const nav = [
  { label: 'Beranda', href: '#home' },
  { label: 'Tentang', href: '#about' },
  { label: 'Skill', href: '#skills' },
  { label: 'Project', href: '#projects' },
  { label: 'Kontak', href: '#contact' },
];

export const skillGroups = [
  { id: 'frontend', label: 'Frontend', items: [
    { name: 'HTML', mark: 'H5' }, { name: 'CSS', mark: 'C3' }, { name: 'JavaScript', mark: 'JS' },
    { name: 'React', mark: 'Re' }, { name: 'Tailwind', mark: 'Tw' } ] },
  { id: 'backend', label: 'Backend & Database', items: [
    { name: 'PHP', mark: 'PHP' }, { name: 'Laravel', mark: 'Lv' }, { name: 'MySQL', mark: 'My' },
    { name: 'REST API', mark: 'API' } ] },
  { id: 'tools', label: 'Tools', items: [
    { name: 'Git', mark: 'Git' }, { name: 'GitHub', mark: 'Gh' }, { name: 'Vercel', mark: 'Vc' },
    { name: 'VS Code', mark: 'VS' } ] },
  { id: 'ai', label: 'AI Tools', items: [
    { name: 'ChatGPT', mark: 'GPT' }, { name: 'Claude', mark: 'Cl' }, { name: 'Gemini', mark: 'Gm' } ] },
];

export const techCount = skillGroups.reduce((n, g) => n + g.items.length, 0);

export const projects = [
  { kind: 'smm', title: 'Sora Pedia SMM Panel',
    tags: ['Laravel', 'MySQL', 'Tailwind', 'API'],
    desc: 'Panel layanan sosial media dengan dasbor pengguna, saldo, dan riwayat order yang berjalan otomatis.',
    demo: 'https://sora-pedia.my.id', repo: '#' },
  { kind: 'otp', title: 'Sora OTP Service',
    tags: ['PHP', 'MySQL', 'REST API'],
    desc: 'Layanan nomor virtual untuk verifikasi OTP. Pesan masuk tampil langsung di dasbor.',
    demo: '#', repo: '#' },
  { kind: 'api', title: 'API Nomor Kosong',
    tags: ['REST API', 'PHP', 'JSON'],
    desc: 'API untuk memeriksa nomor yang tersedia, lengkap dengan dokumentasi dan kunci akses per pengguna.',
    demo: '#', repo: '#' },
];

export const needs = [
  'Pembuatan SMM Panel',
  'Integrasi API OTP',
  'API Nomor Kosong',
  'Pembuatan website',
  'Lainnya',
];

export const waLink = (text = '') =>
  `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`;
