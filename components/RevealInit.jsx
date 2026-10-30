'use client';
import { useEffect } from 'react';

// Elemen di bawah layar disembunyikan sebentar lalu muncul saat di-scroll. Tanpa JS semuanya tetap terlihat.
export default function RevealInit() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const vh = window.innerHeight;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target;
        el.classList.remove('rv-hide');
        io.unobserve(el);
        setTimeout(() => { el.style.transitionDelay = ''; }, 1400);
      }),
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    );
    document.querySelectorAll('[data-rv]').forEach((el) => {
      const d = el.getAttribute('data-rv');
      if (d) el.style.transitionDelay = `${d}ms`;
      if (el.getBoundingClientRect().top > vh * 0.92) { el.classList.add('rv-hide'); io.observe(el); }
    });
    return () => io.disconnect();
  }, []);
  return null;
}
