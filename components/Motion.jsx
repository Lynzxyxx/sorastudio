'use client';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

function splitWords(el) {
  const text = el.textContent.trim().replace(/\s+/g, ' ');
  el.textContent = '';
  return text.split(' ').map((w) => {
    const mask = document.createElement('span');
    mask.className = 'rv-mask';
    const word = document.createElement('span');
    word.className = 'rv-word';
    word.textContent = w;
    mask.appendChild(word);
    el.appendChild(mask);
    el.appendChild(document.createTextNode(' '));
    return word;
  });
}

// Mengatur Lenis, text reveal, stagger kartu, snap lembut antar section, dan anchor smooth.
export default function Motion() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const reveals = document.querySelectorAll('[data-reveal]');

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      reveals.forEach((el) => (el.style.visibility = 'visible'));
      return;
    }

    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wheelMultiplier: 0.85,
      touchMultiplier: 1.4,
    });
    lenis.on('scroll', ScrollTrigger.update);
    const tick = (t) => lenis.raf(t * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    const ctx = gsap.context(() => {
      reveals.forEach((el) => {
        const onLoad = el.hasAttribute('data-load');
        el.style.visibility = 'visible';
        if (el.dataset.reveal === 'words') {
          const words = splitWords(el);
          gsap.from(words, {
            yPercent: 115, duration: 1, ease: 'power4.out', stagger: 0.07,
            delay: onLoad ? 0.5 : 0,
            scrollTrigger: onLoad ? undefined : { trigger: el, start: 'top 88%', once: true },
          });
        } else {
          gsap.from(el, { opacity: 0, y: 16, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 92%', once: true } });
        }
      });

      document.querySelectorAll('[data-stagger]').forEach((box) => {
        gsap.from(box.children, {
          y: 50, opacity: 0, duration: 0.9, ease: 'power3.out', stagger: 0.12,
          scrollTrigger: { trigger: box, start: 'top 85%', once: true },
        });
      });
    });

    // Snap lembut (desktop): hanya menarik ke awal section kalau sudah dekat, jadi section tinggi tetap bebas di-scroll
    const desktop = window.matchMedia('(min-width: 1024px)');
    const sections = [...document.querySelectorAll('[data-snap]')];
    let timer;
    const onScroll = () => {
      clearTimeout(timer);
      if (!desktop.matches) return;
      timer = setTimeout(() => {
        if (lenis.isScrolling) return;
        const y = window.scrollY;
        let best = null, dist = Infinity;
        sections.forEach((s) => {
          const top = s.getBoundingClientRect().top + y;
          const d = Math.abs(top - y);
          if (d < dist) { dist = d; best = top; }
        });
        if (best !== null && dist > 4 && dist < window.innerHeight * 0.28) lenis.scrollTo(best, { duration: 0.9 });
      }, 140);
    };
    lenis.on('scroll', onScroll);

    // Link anchor (#about, dst.) ikut smooth scroll Lenis
    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const target = a.getAttribute('href') === '#' ? null : document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target, { duration: 1.5 });
    };
    document.addEventListener('click', onClick);

    document.fonts?.ready.then(() => ScrollTrigger.refresh());

    return () => {
      clearTimeout(timer);
      document.removeEventListener('click', onClick);
      gsap.ticker.remove(tick);
      ctx.revert();
      lenis.destroy();
    };
  }, []);

  return null;
}
