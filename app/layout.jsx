import './globals.css';
import { Inter, Space_Grotesk } from 'next/font/google';
import { site } from '@/lib/data';

const space = Space_Grotesk({ subsets: ['latin'], weight: ['500', '700'], variable: '--font-space', display: 'swap' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

const title = `${site.name} | SMM Panel Developer, OTP API Provider & Web Developer`;
const description = `${site.name} dari ${site.team}, web developer di ${site.location}. Membuat SMM panel, layanan OTP, API nomor kosong, dan website. Terbuka untuk kerja dan freelance.`;

export const metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: `%s | ${site.name}` },
  description,
  keywords: ['web developer Pekanbaru', 'SMM panel developer', 'OTP API provider', 'API nomor kosong', 'Sora Pedia', 'Laravel developer', 'freelance web developer Riau'],
  authors: [{ name: site.name }],
  alternates: { canonical: '/' },
  openGraph: { title, description, url: site.url, siteName: `${site.name} Portfolio`, locale: 'id_ID', type: 'website' },
  twitter: { card: 'summary_large_image', title, description },
  robots: { index: true, follow: true },
};

export const viewport = { themeColor: '#05040A', width: 'device-width', initialScale: 1 };

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: site.name,
  jobTitle: site.role,
  url: site.url,
  sameAs: [site.panelUrl, site.socials.instagram.url, site.socials.tiktok.url],
  email: site.email,
  worksFor: { '@type': 'Organization', name: site.team },
  address: { '@type': 'PostalAddress', addressLocality: 'Pekanbaru', addressRegion: 'Riau', addressCountry: 'ID' },
  knowsAbout: ['SMM Panel', 'OTP API', 'Laravel', 'PHP', 'MySQL', 'Tailwind CSS'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${space.variable} ${inter.variable}`}>
      <body>
        <noscript><style>{'[data-reveal]{visibility:visible!important}'}</style></noscript>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
