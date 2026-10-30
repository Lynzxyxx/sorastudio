'use client';
import { useEffect, useState } from 'react';
import { site, nav, waLink } from '@/lib/data';
import { Icon } from './Icons';
import Socials from './Socials';

function Brand() {
  return (
    <a href="#home" className="flex items-center gap-3" aria-label={`${site.name}, kembali ke beranda`}>
      <svg viewBox="0 0 40 40" className="h-10 w-10" aria-hidden="true">
        <rect width="40" height="40" rx="8" fill="#E11D2E" />
        <path d="M8 8h16L8 24z" fill="#fff" />
        <path d="M32 32H16l16-16z" fill="#0A0E1A" />
      </svg>
      <span className="leading-tight">
        <span className="block font-heading text-lg font-bold text-white">{site.name}</span>
        <span className="block text-[11px] text-slate-400">{site.role}</span>
      </span>
    </a>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden bg-[#070A14] text-xs text-slate-400 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
          <div className="flex items-center gap-6">
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white"><Icon name="phone" className="h-3.5 w-3.5 text-brand" />{site.whatsappLabel}</a>
            <span className="flex items-center gap-2"><Icon name="pin" className="h-3.5 w-3.5 text-brand" />{site.location}</span>
          </div>
          <div className="flex items-center gap-4">
            <a href={site.websiteUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white"><Icon name="globe" className="h-3.5 w-3.5 text-brand" />{site.websiteLabel}</a>
            <Socials className="scale-90" />
          </div>
        </div>
      </div>

      <div className={`border-b border-white/5 bg-night transition-shadow duration-300 ${scrolled ? 'shadow-[0_12px_30px_-12px_rgba(0,0,0,.7)]' : ''}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3">
          <Brand />
          <nav aria-label="Menu utama" className="hidden lg:block">
            <ul className="flex items-center gap-7 text-sm font-medium text-slate-300">
              {nav.map((n) => (
                <li key={n.href}><a href={n.href} className="relative py-2 transition hover:text-white after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:bg-brand after:transition-all hover:after:w-full">{n.label}</a></li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-3">
            <a href={waLink('Halo Gilang, saya ingin konsultasi gratis.')} target="_blank" rel="noopener noreferrer" className="btn btn-red btn-sm on-dark hidden sm:inline-flex">Konsultasi Gratis</a>
            <button type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Tutup menu' : 'Buka menu'} className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white lg:hidden">
              <Icon name={open ? 'close' : 'menu'} />
            </button>
          </div>
        </div>
        {open && (
          <nav aria-label="Menu seluler" className="border-t border-white/10 bg-night px-6 pb-5 lg:hidden">
            <ul className="space-y-1 pt-3">
              {nav.map((n) => (
                <li key={n.href}><a href={n.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 text-sm font-medium text-slate-200 hover:bg-white/5">{n.label}</a></li>
              ))}
            </ul>
            <div className="mt-4 flex items-center justify-between">
              <a href={waLink('Halo Gilang, saya ingin konsultasi gratis.')} target="_blank" rel="noopener noreferrer" className="btn btn-red btn-sm on-dark">Konsultasi Gratis</a>
              <Socials />
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
