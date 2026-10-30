import { Icon } from './Icons';
import { site, waLink } from '@/lib/data';

export default function CtaBanner() {
  return (
    <section className="on-dark relative overflow-hidden bg-night py-20 lg:py-28">
      <span className="pointer-events-none absolute -right-24 top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full border-[3px] border-brand/70" aria-hidden="true" />
      <span className="pointer-events-none absolute -right-8 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-brand/15" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div data-rv="0" className="max-w-2xl">
          <h2 className="font-heading text-4xl font-bold leading-tight text-white md:text-5xl">Website beres,<br /><span className="font-semibold">bisnis tumbuh lebih tenang</span></h2>
          <p className="mt-5 max-w-lg text-slate-400">Konsultasi awal gratis untuk UMKM sampai pemilik panel layanan. Ceritakan kebutuhan Anda, saya bantu cari jalan yang paling masuk akal.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={waLink('Halo Gilang, saya ingin konsultasi gratis.')} target="_blank" rel="noopener noreferrer" className="btn btn-red">Konsultasi Gratis <Icon name="arrow" className="h-4 w-4" /></a>
            <a href={site.websiteUrl} target="_blank" rel="noopener noreferrer" className="btn btn-line-light"><Icon name="globe" className="h-4 w-4" /> Lihat website saya</a>
          </div>
        </div>
      </div>
    </section>
  );
}
