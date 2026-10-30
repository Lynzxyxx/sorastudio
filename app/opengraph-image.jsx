import { ImageResponse } from 'next/og';
import { site } from '@/lib/data';

export const alt = `${site.name} - ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Di ImageResponse, <div> dengan lebih dari satu child harus display:flex, jadi tiap elemen berisi satu teks.
export default function Image() {
  const subtitle = `${site.role} - ${site.location}`;
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 80, background: '#0F1424', color: '#fff' }}>
        <div style={{ position: 'absolute', right: 0, top: 0, width: 0, height: 0, borderTop: '300px solid #E11D2E', borderLeft: '300px solid transparent', display: 'flex' }} />
        <div style={{ display: 'flex', fontSize: 30, color: '#E11D2E', fontWeight: 700 }}>{'Mitra digital untuk bisnis Anda'}</div>
        <div style={{ display: 'flex', fontSize: 104, fontWeight: 800, lineHeight: 1.05, marginTop: 20 }}>{site.name}</div>
        <div style={{ display: 'flex', fontSize: 34, marginTop: 28, color: '#cbd5e1' }}>{subtitle}</div>
        <div style={{ display: 'flex', fontSize: 28, marginTop: 14, color: '#94a3b8' }}>{site.websiteLabel}</div>
      </div>
    ),
    size
  );
}
