'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Leaves from './Leaves';
import Character from './Character';
import Pagoda from './Pagoda';
import Socials from './Socials';
import { site, waLink } from '@/lib/data';

function Butterfly({ className = '' }) {
  return (
    <svg viewBox="0 0 48 40" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M24 12v22M24 12c-2-4-4-6-7-7M24 12c2-4 4-6 7-7" />
      <path d="M24 14C16 2 3 4 4 14c1 8 10 10 20 6zM24 14c8-12 21-10 20 0-1 8-10 10-20 6z" />
      <path d="M24 22c-6 2-12 8-8 14 3 4 8 0 8-8zM24 22c6 2 12 8 8 14-3 4-8 0-8-8z" />
    </svg>
  );
}

export default function Hero() {
  const root = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const node = root.current;
    let off = () => {};
    const q = (s) => node.querySelector(s);

    const ctx = gsap.context(() => {
      // Satu momen pembuka: lingkaran muncul, karakter naik
      gsap.from('[data-h="circle"]', { scale: 0.55, opacity: 0, duration: 1.6, ease: 'expo.out' });
      gsap.from('[data-h="char"]', { y: 90, opacity: 0, duration: 1.4, delay: 0.25, ease: 'power4.out' });
      gsap.from('[data-h="side"]', { opacity: 0, duration: 1, delay: 0.9, stagger: 0.12 });

      // Parallax scroll: tiap layer beda kecepatan
      const st = { trigger: root.current, start: 'top top', end: 'bottom top', scrub: 0.6 };
      gsap.to('[data-p="char"]', { yPercent: -14, ease: 'none', scrollTrigger: st });
      gsap.to('[data-p="circle"]', { yPercent: -5, scale: 1.06, ease: 'none', scrollTrigger: st });
      gsap.to('[data-p="pagoda"]', { yPercent: -35, ease: 'none', scrollTrigger: st });
      gsap.to('[data-p="copy"]', { yPercent: -8, ease: 'none', scrollTrigger: st });

      // Parallax mouse (desktop saja)
      if (window.matchMedia('(hover: hover) and (min-width: 1024px)').matches) {
        const cx = gsap.quickTo(q('[data-m="char"]'), 'x', { duration: 0.9, ease: 'power3' });
        const cy = gsap.quickTo(q('[data-m="char"]'), 'y', { duration: 0.9, ease: 'power3' });
        const ox = gsap.quickTo(q('[data-m="circle"]'), 'x', { duration: 1.2, ease: 'power3' });
        const oy = gsap.quickTo(q('[data-m="circle"]'), 'y', { duration: 1.2, ease: 'power3' });
        const onMove = (e) => {
          const nx = e.clientX / window.innerWidth - 0.5;
          const ny = e.clientY / window.innerHeight - 0.5;
          cx(nx * 26); cy(ny * 14); ox(nx * -34); oy(ny * -20);
        };
        node.addEventListener('mousemove', onMove);
        off = () => node.removeEventListener('mousemove', onMove);
      }
    }, root);

    return () => { off(); ctx.revert(); };
  }, []);

  return (
    <section id="home" ref={root} data-snap className="relative min-h-[100svh] overflow-hidden bg-ink">
      <div className="bg-seigaiha pattern-fade pointer-events-none absolute inset-0 opacity-[.09]" aria-hidden="true" />
      <div className="bg-cybergrid pointer-events-none absolute inset-0 opacity-60 [mask-image:linear-gradient(180deg,#000,transparent_85%)]" aria-hidden="true" />

      {/* Logo kiri atas */}
      <a href="#home" data-h="side" className="absolute left-5 top-5 z-40 flex flex-col border border-violet bg-ink/70 px-3 py-2 font-heading text-[11px] font-bold leading-tight tracking-widest text-white shadow-neon backdrop-blur md:left-12 md:top-8" aria-label="Portfolio, kembali ke atas">
        <span>PORTFOLIO</span><span className="text-violet-soft">/ {site.year}</span>
      </a>

      {/* Kanan atas */}
      <div data-h="side" className="absolute right-5 top-5 z-40 text-right md:right-12 md:top-8">
        <p className="flex items-center justify-end gap-2 font-heading text-[11px] font-bold tracking-widest text-violet-soft">
          OPEN TO WORK <Butterfly className="h-5 w-5 text-violet" />
        </p>
        <p className="font-heading text-3xl font-bold leading-none text-white md:text-5xl">{site.year}</p>
        <p className="font-heading text-xs font-bold tracking-[.25em] text-slate-400 md:text-sm">PEKANBARU</p>
      </div>

      {/* Panggung visual: lingkaran + karakter */}
      <div className="relative z-10 mx-auto mt-24 flex h-[46svh] w-full items-end justify-center lg:absolute lg:inset-0 lg:mt-0 lg:h-full">
        <div className="relative aspect-[5/6] h-full lg:h-[90%]">
          <div data-p="circle" className="absolute inset-x-0 top-[4%]">
            <div data-m="circle"><div data-h="circle" className="mx-auto aspect-square w-[92%] rounded-full bg-[radial-gradient(circle_at_35%_30%,#A78BFA,#8B5CF6_45%,#4C1D95)] shadow-[0_0_120px_rgba(139,92,246,.55)]" /></div>
          </div>
          <div data-p="char" className="absolute inset-x-0 bottom-0">
            <div data-m="char"><div data-h="char"><Character className="mx-auto block h-auto w-[92%]" /></div></div>
          </div>
        </div>
      </div>

      {/* Teks kiri */}
      <div data-p="copy" className="relative z-20 mx-auto max-w-7xl px-6 pb-24 pt-6 md:px-12 lg:flex lg:min-h-[100svh] lg:items-center lg:pb-0 lg:pt-0">
        <div className="max-w-md">
          <p data-reveal="words" data-load className="font-heading text-xs font-bold tracking-[.4em] text-violet-soft">ICHI-GO ICHI-E</p>
          <h1 className="mt-2 font-heading font-bold uppercase leading-[.92] text-white [text-shadow:0_0_40px_rgba(139,92,246,.35)] text-[clamp(2.7rem,5.6vw,5.5rem)]">
            <span data-reveal="words" data-load className="block">{site.first}</span>
            <span data-reveal="words" data-load className="block">{site.last}</span>
          </h1>
          <p className="mt-4 font-heading text-[11px] font-bold tracking-[.22em] text-slate-300 md:text-xs">
            <span className="text-violet-soft">{site.role.toUpperCase()}</span> · OPEN TO WORK
          </p>
          <p data-reveal="fade" className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400 md:text-base">
            Saya membangun SMM panel, layanan OTP, dan website yang cepat, rapi, dan siap dipakai untuk bisnis Anda.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={waLink('Halo Gilang, saya ingin berdiskusi.')} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Hubungi Saya</a>
            <a href="#projects" className="btn btn-ghost">Lihat Project</a>
          </div>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <a href={site.panelUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm">Buka website SMM Panel</a>
            <Socials />
          </div>
        </div>
      </div>

      {/* Pagoda kanan bawah */}
      <div data-p="pagoda" className="pointer-events-none absolute bottom-0 right-3 z-[5] hidden w-[min(24vw,250px)] text-violet/70 md:block lg:right-10">
        <div data-h="side"><Pagoda className="h-auto w-full" /></div>
      </div>

      <Leaves />
    </section>
  );
}
