import Character from './Character';
import { site, waLink } from '@/lib/data';

function Info({ label, children }) {
  return (
    <div>
      <p className="text-xs font-bold tracking-widest text-slate-500">{label}</p>
      <p className="mt-1 text-sm font-medium text-white">{children}</p>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" data-snap className="relative flex items-center overflow-hidden bg-ink py-24 lg:min-h-[100svh]">
      <div className="bg-seigaiha pattern-fade pointer-events-none absolute inset-0 opacity-[.06]" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-6xl px-6 md:px-12">
        <h2 data-reveal="words" className="font-heading text-4xl font-bold text-white md:text-6xl">About Me</h2>
        <p data-reveal="fade" className="mt-2 text-slate-400">Sedikit tentang saya</p>

        <div className="mt-12 grid items-center gap-12 lg:grid-cols-[minmax(0,420px)_1fr]">
          <div className="relative mx-auto w-full max-w-[360px] lg:max-w-none">
            <div className="relative aspect-square overflow-hidden rounded-full bg-[radial-gradient(circle_at_35%_30%,#A78BFA,#8B5CF6_50%,#4C1D95)] shadow-[0_0_90px_rgba(139,92,246,.45)] ring-1 ring-violet/60">
              <div className="absolute inset-x-0 bottom-0 mx-auto w-[96%] translate-y-[8%]"><Character className="block h-auto w-full" /></div>
            </div>
            <span className="absolute -bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-violet/60 bg-ink px-4 py-2 text-xs font-bold text-white shadow-neon">
              <span className="h-2 w-2 rounded-full bg-emerald-400" /> Open to work &amp; freelance
            </span>
          </div>

          <div>
            <div className="max-w-xl space-y-4 text-base leading-relaxed text-slate-300">
              <p data-reveal="fade">Halo, saya <strong className="text-white">{site.name}</strong>, web developer asal <strong className="text-white">{site.location}</strong> dan bagian dari <strong className="text-white">{site.team}</strong>. Saya membangun website dari tampilan sampai sistem di balik layarnya, dengan fokus pada layanan digital yang cepat dan rapi.</p>
              <p data-reveal="fade">Di frontend saya memakai <strong className="text-violet-soft">HTML, CSS, JavaScript</strong>, dan <strong className="text-violet-soft">Tailwind</strong>. Di backend saya bekerja dengan <strong className="text-violet-soft">PHP, Laravel</strong>, dan <strong className="text-violet-soft">MySQL</strong>, termasuk membuat dan menghubungkan API untuk layanan <strong className="text-white">OTP</strong> dan <strong className="text-white">nomor kosong</strong>.</p>
              <p data-reveal="fade">Saat ini saya <strong className="text-white">terbuka untuk pekerjaan tetap maupun freelance</strong>, mulai dari SMM panel, layanan OTP, sampai company profile.</p>
            </div>

            <div className="card mt-8 grid max-w-xl grid-cols-2 gap-5 p-5 hover:!translate-y-0">
              <Info label="Lokasi">{site.location}</Info>
              <Info label="Status"><span className="text-emerald-400">Cari kerja &amp; freelance</span></Info>
              <Info label="Fokus">SMM Panel &amp; OTP API</Info>
              <Info label="Email"><a href={`mailto:${site.email}`} className="hover:text-violet-soft">{site.email}</a></Info>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={site.cv} download className="btn btn-primary">Download CV</a>
              <a href={waLink('Halo Gilang, saya ingin berdiskusi.')} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Ajak Diskusi</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
