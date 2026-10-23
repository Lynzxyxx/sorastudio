'use client';
import { useState } from 'react';
import { site, needs, waLink } from '@/lib/data';
import { IgIcon, TtIcon } from './Socials';

function InfoCard({ label, value, href, icon }) {
  const Tag = href ? 'a' : 'div';
  return (
    <Tag {...(href && { href, ...(href.startsWith('http') && { target: '_blank', rel: 'noopener noreferrer' }) })} className="card flex items-center gap-4 p-4 hover:!translate-y-0 hover:!shadow-neon">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet/20 text-violet-soft">{icon}</span>
      <span><span className="block text-xs font-bold tracking-widest text-slate-500">{label}</span><span className="block text-sm font-medium text-white">{value}</span></span>
    </Tag>
  );
}

const I = {
  wa: <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.6-5A8.5 8.5 0 1 1 8 19.4z" /><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 .8a3.5 3.5 0 0 1-1.6-1.6l.8-1-1-2z" /></svg>,
  mail: <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>,
  pin: <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s7-6.2 7-11a7 7 0 0 0-14 0c0 4.8 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></svg>,
};

export default function Contact() {
  const [f, setF] = useState({ need: '', name: '', contact: '', msg: '' });
  const [err, setErr] = useState('');
  const set = (k) => (e) => { setF({ ...f, [k]: e.target.value }); setErr(''); };

  const submit = (e) => {
    e.preventDefault();
    if (!f.name.trim() || !f.msg.trim()) { setErr('Isi nama dan pesan dulu sebelum mengirim.'); return; }
    const text = `Halo ${site.name}, saya ${f.name.trim()}.\nKeperluan: ${f.need || '-'}\nKontak: ${f.contact.trim() || '-'}\n\n${f.msg.trim()}`;
    window.open(waLink(text), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" data-snap className="relative flex items-center overflow-hidden py-24 lg:min-h-[100svh]" style={{ background: 'linear-gradient(180deg,#0F172A -40%,#05040A 60%)' }}>
      <div className="bg-cybergrid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,#000,transparent_75%)]" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-6xl px-6 md:px-12">
        <h2 data-reveal="words" className="font-heading text-4xl font-bold text-white md:text-6xl">Mari Ngobrol</h2>
        <p data-reveal="fade" className="mt-2 max-w-xl text-slate-400">Butuh SMM panel, layanan OTP, atau website? Ceritakan kebutuhan Anda dan pesan akan langsung terkirim ke WhatsApp saya.</p>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,380px)_1fr]">
          <div className="space-y-4">
            <InfoCard label="WhatsApp" value={site.whatsappLabel} href={waLink()} icon={I.wa} />
            <InfoCard label="Email" value={site.email} href={`mailto:${site.email}`} icon={I.mail} />
            <InfoCard label="Lokasi" value={site.location} icon={I.pin} />
            <InfoCard label="Instagram" value={`@${site.socials.instagram.handle}`} href={site.socials.instagram.url} icon={<IgIcon />} />
            <InfoCard label="TikTok" value={`@${site.socials.tiktok.handle}`} href={site.socials.tiktok.url} icon={<TtIcon />} />
            <a href={site.panelUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost w-full">Buka website SMM Panel</a>
          </div>

          <form onSubmit={submit} noValidate className="card space-y-4 p-6 hover:!translate-y-0 md:p-8">
            <div>
              <label htmlFor="need" className="mb-1.5 block text-xs font-bold tracking-widest text-slate-400">KEPERLUAN</label>
              <select id="need" value={f.need} onChange={set('need')} className="field">
                <option value="">Pilih keperluan...</option>
                {needs.map((n) => <option key={n} value={n}>{n}</option>)}
              </select>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-xs font-bold tracking-widest text-slate-400">NAMA</label>
                <input id="name" value={f.name} onChange={set('name')} className="field" placeholder="Nama lengkap Anda" autoComplete="name" required />
              </div>
              <div>
                <label htmlFor="contact" className="mb-1.5 block text-xs font-bold tracking-widest text-slate-400">EMAIL / NO. HP</label>
                <input id="contact" value={f.contact} onChange={set('contact')} className="field" placeholder="Supaya saya bisa balas" autoComplete="email" />
              </div>
            </div>
            <div>
              <label htmlFor="msg" className="mb-1.5 block text-xs font-bold tracking-widest text-slate-400">PESAN</label>
              <textarea id="msg" rows={4} value={f.msg} onChange={set('msg')} className="field resize-none" placeholder="Ceritakan kebutuhan Anda..." required />
            </div>
            {err && <p role="alert" className="text-sm text-amber-300">{err}</p>}
            <button type="submit" className="btn btn-wa w-full">Kirim lewat WhatsApp</button>
            <p className="text-center text-xs text-slate-500">Tombol ini membuka WhatsApp dengan pesan yang sudah terisi. Tidak ada data yang disimpan di situs.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
