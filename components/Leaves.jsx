'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const SHAPES = [
  'M12 1C22 12 22 32 12 47 2 32 2 12 12 1Z',
  'M12 1C26 10 24 34 12 47 0 34 -2 10 12 1Z',
  'M12 1C19 14 19 34 12 47 5 34 5 14 12 1Z',
];

// Daun jatuh: hanya transform (GPU), jumlah dibatasi, berhenti saat hero keluar layar.
export default function Leaves() {
  const box = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = box.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const mobile = window.innerWidth < 768;
    const count = mobile ? 7 : 14;
    const leaves = el.querySelectorAll('[data-leaf]');
    const tweens = [];

    const ctx = gsap.context(() => {
      leaves.forEach((leaf, i) => {
        if (i >= count) { leaf.style.display = 'none'; return; }
        const svg = leaf.firstElementChild;
        const size = gsap.utils.random(mobile ? 14 : 18, mobile ? 30 : 46);
        gsap.set(leaf, { left: `${gsap.utils.random(-2, 100)}%`, top: 0, width: size, opacity: gsap.utils.random(0.75, 1) });
        const fall = gsap.fromTo(leaf,
          { y: () => -80 },
          { y: () => el.clientHeight + 80, duration: gsap.utils.random(9, 18), ease: 'none', repeat: -1 });
        fall.progress(Math.random());
        const sway = gsap.to(svg, { x: gsap.utils.random(40, 110) * (Math.random() > 0.5 ? 1 : -1), duration: gsap.utils.random(2.2, 4.5), ease: 'sine.inOut', yoyo: true, repeat: -1 });
        const spin = gsap.fromTo(svg, { rotation: gsap.utils.random(-60, 60) }, { rotation: `+=${gsap.utils.random(200, 420) * (Math.random() > 0.5 ? 1 : -1)}`, duration: gsap.utils.random(6, 12), ease: 'sine.inOut', yoyo: true, repeat: -1 });
        const flip = gsap.to(svg, { rotationY: 180, duration: gsap.utils.random(2, 4), ease: 'sine.inOut', yoyo: true, repeat: -1 });
        tweens.push(fall, sway, spin, flip);
      });

      ScrollTrigger.create({
        trigger: el.parentElement,
        start: 'top bottom',
        end: 'bottom top',
        onToggle: (self) => tweens.forEach((t) => (self.isActive ? t.resume() : t.pause())),
      });
    }, el);

    const onVis = () => tweens.forEach((t) => (document.hidden ? t.pause() : t.resume()));
    document.addEventListener('visibilitychange', onVis);
    return () => { document.removeEventListener('visibilitychange', onVis); ctx.revert(); };
  }, []);

  return (
    <div ref={box} className="pointer-events-none absolute inset-0 z-30 overflow-hidden" aria-hidden="true">
      {Array.from({ length: 14 }).map((_, i) => (
        <div key={i} data-leaf className="absolute will-change-transform" style={{ left: `${(i * 7.3) % 100}%`, top: '-10%', width: 24 }}>
          <svg viewBox="0 0 24 48" className="block h-auto w-full overflow-visible will-change-transform">
            <path d={SHAPES[i % SHAPES.length]} fill="#07050F" stroke="#8B5CF6" strokeWidth="1.2" />
            <path d="M12 6v38" stroke="#8B5CF6" strokeOpacity=".7" strokeWidth=".8" />
          </svg>
        </div>
      ))}
    </div>
  );
}
