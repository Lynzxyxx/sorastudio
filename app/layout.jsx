import './globals.css';
import { Inter, Poppins } from 'next/font/google';
import { site } from '@/lib/data';

const poppins = Poppins({ subsets: ['latin'], weight: ['500', '600', '700'], variable: '--font-poppins', display: 'swap' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

const title = `${site.name} | ${site.role} di ${site.location}`;
const description = `${site.name}, ${site.role.toLowerCase()} di ${site.location}. Pembuatan SMM panel, integrasi API OTP, API nomor kosong, dan website. Konsultasi awal gratis.`;

export const metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: `%s | ${site.name}` },
  description,
  keywords: ['web developer Pekanbaru', 'jasa SMM panel', 'API OTP', 'API nomor kosong', 'jasa pembuatan website Riau', 'Sora Pedia', 'Gilang Ramadhan'],
  authors: [{ name: site.name }],
  alternates: { canonical: '/' },
  openGraph: { title, description, url: site.url, siteName: site.name, locale: 'id_ID', type: 'website' },
  twitter: { card: 'summary_large_image', title, description },
  robots: { index: true, follow: true },
};

export const viewport = { themeColor: '#0F1424', width: 'device-width', initialScale: 1 };

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: site.name,
  description,
  url: site.url,
  telephone: `+${site.whatsapp}`,
  areaServed: 'ID',
  address: { '@type': 'PostalAddress', addressLocality: 'Pekanbaru', addressRegion: 'Riau', addressCountry: 'ID' },
  sameAs: [site.websiteUrl, site.socials.instagram.url, site.socials.tiktok.url],
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${poppins.variable} ${inter.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
