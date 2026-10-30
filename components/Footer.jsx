import { site, nav } from '@/lib/data';
import Socials from './Socials';
import { Icon } from './Icons';

export default function Footer() {
  return (
    <footer className="bg-black text-slate-400">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <p className="font-heading text-xl font-bold text-white">{site.name}</p>
          <p className="mt-1 text-sm">{site.role}</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">SMM panel, layanan OTP, API, dan website yang cepat dan rapi untuk bisnis Anda.</p>
        </div>
        <nav aria-label="Menu footer">
          <p className="text-xs font-semibold uppercase tracking-wider text-white">Menu</p>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
            {nav.map((n) => <li key={n.href}><a href={n.href} className="transition hover:text-brand">{n.label}</a></li>)}
          </ul>
        </nav>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-white">Hubungi</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href={site.websiteUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition hover:text-brand"><Icon name="globe" className="h-4 w-4" />{site.websiteLabel}</a></li>
            <li className="flex items-center gap-2"><Icon name="pin" className="h-4 w-4" />{site.location}</li>
          </ul>
          <Socials className="mt-5" />
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs">&copy; {site.year} {site.name}. Semua hak dilindungi.</div>
    </footer>
  );
}
