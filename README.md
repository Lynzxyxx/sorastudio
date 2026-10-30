# Website Gilang Ramadhan

Next.js 14 (App Router) + Tailwind CSS. Tanpa library animasi tambahan, jadi ringan dan minim risiko saat deploy.

## Jalankan lokal
```bash
npm install
npm run dev
```

## Deploy ke Vercel
1. Upload isi folder ini (file `package.json` harus ada di root repo) ke GitHub.
2. Vercel > Add New Project > pilih repo. Framework terdeteksi otomatis (Next.js).
3. Opsional: env `NEXT_PUBLIC_SITE_URL` berisi domain final (untuk SEO dan sitemap).

## Yang bisa diganti di `lib/data.js`
- `websiteUrl`, `socials` (Instagram dan TikTok), nomor WhatsApp, lokasi.
- `photo`: isi `/foto-gilang.jpg` (taruh file di folder `public/`) untuk mengganti ilustrasi profil.
- Teks layanan, project, paket harga, dan keahlian.
