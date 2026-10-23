import { site, nav } from '@/lib/data';
import Socials from './Socials';

export default function Footer() {
  return (
    <footer className="border-t border-violet/20 bg-black py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 md:flex-row md:px-12">
        <div className="text-center md:text-left">
          <p className="font-heading text-lg font-bold text-white">{site.name}</p>
          <p className="text-xs text-slate-500">&copy; {site.year} {site.team}. Semua hak dilindungi.</p>
        </div>
        <nav aria-label="Menu footer">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            {nav.map((n) => <li key={n.href}><a href={n.href} className="text-slate-400 transition hover:text-violet-soft">{n.label}</a></li>)}
          </ul>
        </nav>
        <Socials />
      </div>
    </footer>
  );
}
