import Visual from './Visual';
import TriangleArt from './TriangleArt';
import Socials from './Socials';
import { Icon } from './Icons';
import { site, heroPoints } from '@/lib/data';

export default function Hero() {
  return (
    <section id="home" className="bg-diamond relative overflow-hidden bg-white">
      <TriangleArt theme="light" className="pointer-events-none absolute -left-10 top-4 hidden w-44 lg:block xl:w-56" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div data-rv="0" className="relative order-2 mx-auto w-full max-w-xl lg:order-1 lg:ml-12">
          <div className="overflow-hidden rounded-[1.75rem] shadow-[0_40px_70px_-30px_rgba(10,14,26,.6)] ring-1 ring-ink/10">
            <Visual kind="dashboard" className="block h-auto w-full" />
          </div>
          <div className="float-y absolute -bottom-6 left-6 rounded-2xl bg-brand px-6 py-4 text-white shadow-[0_24px_40px_-16px_rgba(225,29,46,.8)]">
            <p className="font-heading text-3xl font-bold leading-none">3</p>
            <p className="mt-1 text-xs font-medium leading-tight">Layanan inti<br />SMM Panel, OTP, API</p>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p data-rv="0" className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand-dark">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" /> Terbuka untuk project baru
          </p>
          <h1 data-rv="80" className="font-heading text-4xl font-bold leading-[1.1] text-ink md:text-5xl">Mitra digital untuk bisnis yang ingin tumbuh</h1>
          <p data-rv="160" className="mt-5 text-base font-medium leading-relaxed text-slate-700">
            Saya <strong className="text-ink">{site.name}</strong>, {site.role.toLowerCase()} di {site.location}. Saya membantu bisnis punya website, panel layanan, dan API yang cepat dan rapi.
          </p>
          <p data-rv="200" className="mt-3 max-w-lg text-sm leading-relaxed text-slate-500">Dari ide sampai rilis, semuanya dikerjakan langsung agar komunikasi singkat dan hasilnya sesuai kebutuhan.</p>

          <ul data-rv="240" className="mt-6 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
            {heroPoints.map((p) => (
              <li key={p} className="flex items-center gap-2.5 text-sm font-medium text-ink">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-white"><Icon name="check" className="h-3 w-3" /></span>{p}
              </li>
            ))}
          </ul>

          <div data-rv="300" className="mt-8 flex flex-wrap gap-3">
            <a href={site.websiteUrl} target="_blank" rel="noopener noreferrer" className="btn btn-red">Kunjungi {site.websiteLabel} <Icon name="external" className="h-4 w-4" /></a>
            <a href="#services" className="btn btn-line">Lihat layanan <Icon name="arrow" className="h-4 w-4" /></a>
          </div>
          <div data-rv="360" className="mt-6 flex items-center gap-4">
            <span className="text-sm text-slate-500">Ikuti saya</span>
            <Socials tone="light" />
          </div>
        </div>
      </div>
    </section>
  );
}
