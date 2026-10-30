import { Icon } from './Icons';
import { plans, waLink } from '@/lib/data';

export default function Pricing() {
  return (
    <section id="pricing" className="on-dark bg-diamond-dark relative overflow-hidden bg-ink py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div data-rv="0" className="max-w-2xl">
          <span className="mb-4 block h-1 w-12 bg-brand" />
          <h2 className="font-heading text-3xl font-bold text-white md:text-5xl">Layanan &amp; Harga</h2>
          <p className="mt-3 text-slate-400">Satu tempat untuk melihat cara kerja sama. Harga final mengikuti lingkup pekerjaan dan disepakati sebelum mulai.</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((p, i) => (
            <div key={p.name} data-rv={i * 90}>
              <article className={`flex h-full flex-col rounded-2xl p-7 ${p.featured ? 'bg-brand text-white shadow-[0_30px_60px_-24px_rgba(225,29,46,.7)]' : 'card-dark'}`}>
                <p className={`text-xs font-semibold uppercase tracking-wider ${p.featured ? 'text-white/80' : 'text-brand'}`}>{p.note}</p>
                <h3 className="mt-2 font-heading text-xl font-semibold text-white">{p.name}</h3>
                <p className="mt-4 font-heading text-3xl font-bold text-white">{p.price}</p>
                <ul className="mt-6 flex-1 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className={`flex items-start gap-2.5 text-sm ${p.featured ? 'text-white' : 'text-slate-300'}`}>
                      <Icon name="check" className={`mt-0.5 h-4 w-4 shrink-0 ${p.featured ? 'text-white' : 'text-brand'}`} />{f}
                    </li>
                  ))}
                </ul>
                <a href={waLink(`Halo Gilang, saya tertarik dengan paket ${p.name}.`)} target="_blank" rel="noopener noreferrer"
                  className={`btn mt-8 ${p.featured ? 'btn-dark' : 'btn-red'}`}>{p.cta}</a>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
