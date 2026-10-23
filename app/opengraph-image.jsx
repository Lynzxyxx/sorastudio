import { ImageResponse } from 'next/og';
import { site } from '@/lib/data';

export const alt = `${site.name} Portfolio`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 80, background: '#05040A', color: '#fff' }}>
        <div style={{ position: 'absolute', right: -120, top: -120, width: 560, height: 560, borderRadius: 9999, background: '#8B5CF6', opacity: 0.85 }} />
        <div style={{ fontSize: 28, color: '#A78BFA' }}>ICHI-GO ICHI-E</div>
        <div style={{ fontSize: 120, fontWeight: 800, lineHeight: 1, marginTop: 16 }}>{site.first}</div>
        <div style={{ fontSize: 120, fontWeight: 800, lineHeight: 1 }}>{site.last}</div>
        <div style={{ fontSize: 32, marginTop: 28, color: '#cbd5e1' }}>{site.role} · {site.location}</div>
      </div>
    ),
    size
  );
}
