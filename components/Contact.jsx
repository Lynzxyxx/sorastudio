'use client';
import { useState } from 'react';
import { site, needs, waLink } from '@/lib/data';
import { Icon } from './Icons';

function Row({ icon, label, value, href }) {
  const external = href && href.startsWith('http');
  const Tag = href ? 'a' : 'div';
  return (
    <Tag {...(href && { href })} {...(external && { target: '_blank', rel: 'noopener noreferrer' })} className="card-light flex items-center gap-4 p-4 hover:!translate-y-0">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand text-white"><Icon name={icon} /></span>
      <span className="min-w-0"><span className="block text-xs font-semibold text-slate-400">{label}</span><span className="block truncate text-sm font-semibold text-ink">{value}</span></span>
    </Tag>
  );
}

export default function Contact() {
  const [f, setF] = useState({ name: '', phone: '', need: '', date: '', time: '', note: '' });
  const [err, setErr] = useState('');
  const set = (k) => (e) => { setF({ ...f, [k]: e.target.value }); setErr(''); };

  const submit = (e) => {
    e.preventDefault();
    if (!f.name.trim() || !f.note.trim()) { setErr('Isi nama dan catatan kebutuhan dulu sebelum mengirim.'); return; }
    const date = f.date ? f.date.split('-').reverse().join('/') : '-';
    const text = `Halo ${site.name}, saya ${f.name.trim()}.\nWhatsApp/kontak: ${f.phone.trim() || '-'}\nLayanan: ${f.need || '-'}\nJadwal konsultasi: ${date} ${f.time || ''}\n\nKebutuhan:\n${f.note.trim()}`;
    window.open(waLink(text), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="bg-mist py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div data-rv="0" className="max-w-2xl">
          <span className="mb-4 block h-1 w-12 bg-brand" />
          <h2 className="font-heading text-3xl font-bold text-ink md:text-4xl">Siap kerja sama untuk project Anda?</h2>
          <p className="mt-3 text-slate-500">Isi formulir, lalu pesan akan terkirim langsung ke WhatsApp saya.</p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,420px)_1fr]">
          <div data-rv="60" className="space-y-3">
            <Row icon="phone" label="WhatsApp" value={site.whatsappLabel} href={waLink()} />
            <Row icon="globe" label="Website" value={site.websiteLabel} href={site.websiteUrl} />
            <Row icon="pin" label="Lokasi" value={site.location} />
            <Row icon="instagram" label="Instagram" value={`@${site.socials.instagram.handle}`} href={site.socials.instagram.url} />
            <Row icon="tiktok" label="TikTok" value={`@${site.socials.tiktok.handle}`} href={site.socials.tiktok.url} />
            <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-dark w-full justify-between"><span className="flex items-center gap-2"><Icon name="pin" className="h-4 w-4" />Lihat lokasi di peta</span><Icon name="external" className="h-4 w-4" /></a>
          </div>

          <form data-rv="120" onSubmit={submit} noValidate className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_30px_60px_-36px_rgba(10,14,26,.35)] md:p-8">
            <h3 className="font-heading text-xl font-semibold text-ink">Jadwalkan konsultasi gratis</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-xs font-semibold text-slate-500">Nama lengkap</label>
                <input id="name" value={f.name} onChange={set('name')} className="field" placeholder="Nama Anda" autoComplete="name" required />
              </div>
              <div>
                <label htmlFor="phone" className="mb-1.5 block text-xs font-semibold text-slate-500">No. WhatsApp</label>
                <input id="phone" value={f.phone} onChange={set('phone')} className="field" placeholder="08xxxxxxxxxx" inputMode="tel" autoComplete="tel" />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="need" className="mb-1.5 block text-xs font-semibold text-slate-500">Layanan yang dibutuhkan</label>
                <select id="need" value={f.need} onChange={set('need')} className="field">
                  <option value="">Pilih layanan</option>
                  {needs.map((n) => <option key={n} value={n}>{n}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="date" className="mb-1.5 block text-xs font-semibold text-slate-500">Tanggal konsultasi</label>
                <input id="date" type="date" value={f.date} onChange={set('date')} className="field" />
              </div>
              <div>
                <label htmlFor="time" className="mb-1.5 block text-xs font-semibold text-slate-500">Jam konsultasi</label>
                <input id="time" type="time" value={f.time} onChange={set('time')} className="field" />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="note" className="mb-1.5 block text-xs font-semibold text-slate-500">Catatan kebutuhan</label>
                <textarea id="note" rows={4} value={f.note} onChange={set('note')} className="field resize-none" placeholder="Ceritakan singkat kebutuhan Anda..." required />
              </div>
            </div>
            {err && <p role="alert" className="mt-4 text-sm font-medium text-brand-dark">{err}</p>}
            <button type="submit" className="btn btn-red mt-6 w-full">Kirim lewat WhatsApp <Icon name="arrow" className="h-4 w-4" /></button>
            <p className="mt-3 text-center text-xs text-slate-400">Tombol ini membuka WhatsApp dengan pesan yang sudah terisi. Tidak ada data yang disimpan di situs.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
