import Image from 'next/image';
import { site } from '@/lib/data';
import TriangleArt from './TriangleArt';

// Ilustrasi pengganti foto. Ganti dengan foto asli lewat site.photo di lib/data.js
export default function Visual({ kind = 'dashboard', className = '' }) {
  if (kind === 'profile' && site.photo) {
    return <Image src={site.photo} alt={`Foto ${site.name}`} width={640} height={760} className={className} />;
  }

  if (kind === 'profile') {
    return (
      <svg viewBox="0 0 480 540" className={className} role="img" aria-label={`Ilustrasi profil ${site.name}`}>
        <rect width="480" height="540" fill="#0F1424" />
        <circle cx="240" cy="222" r="150" fill="none" stroke="#2B3556" strokeDasharray="4 8" />
        <circle cx="240" cy="222" r="118" fill="#E11D2E" />
        <text x="240" y="262" textAnchor="middle" fontFamily="var(--font-poppins), sans-serif" fontWeight="700" fontSize="108" fill="#fff">GR</text>
        <path d="M0 0h110L0 110z" fill="#E11D2E" />
        <path d="M480 540V410L350 540z" fill="#1B2340" />
        <path d="M480 540V470L410 540z" fill="#E11D2E" />
        <text x="240" y="456" textAnchor="middle" fontFamily="var(--font-poppins), sans-serif" fontWeight="700" fontSize="28" fill="#fff">{site.name}</text>
        <text x="240" y="486" textAnchor="middle" fontFamily="var(--font-inter), sans-serif" fontSize="15" fill="#94A3B8">{site.role}</text>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 480 380" className={className} role="img" aria-label="Ilustrasi dasbor SMM panel">
      <rect width="480" height="380" fill="#111831" />
      <rect width="480" height="30" fill="#0B1022" />
      <circle cx="16" cy="15" r="4" fill="#E11D2E" /><circle cx="30" cy="15" r="4" fill="#3B4468" /><circle cx="44" cy="15" r="4" fill="#3B4468" />
      <rect x="0" y="30" width="88" height="350" fill="#0D1328" />
      {[0, 1, 2, 3, 4].map((i) => <rect key={i} x="14" y={56 + i * 28} width={i === 0 ? 60 : 48} height="8" rx="4" fill={i === 0 ? '#E11D2E' : '#2B3556'} />)}
      {[108, 232, 356].map((x, i) => (
        <g key={x}>
          <rect x={x} y="48" width="108" height="64" rx="10" fill={i === 0 ? '#E11D2E' : '#19213F'} />
          <rect x={x + 12} y="60" width="36" height="6" rx="3" fill="#fff" fillOpacity={i === 0 ? 0.7 : 0.35} />
          <rect x={x + 12} y="76" width="64" height="14" rx="4" fill="#fff" fillOpacity=".92" />
        </g>
      ))}
      <rect x="108" y="128" width="356" height="160" rx="12" fill="#19213F" />
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => {
        const h = 36 + ((i * 41) % 84);
        return <rect key={i} x={126 + i * 33} y={270 - h} width="20" height={h} rx="4" fill={i % 3 === 1 ? '#E11D2E' : '#3B4468'} />;
      })}
      {[304, 326, 348].map((y, i) => (
        <g key={y}>
          <rect x="108" y={y} width="356" height="14" rx="7" fill="#19213F" />
          <circle cx="120" cy={y + 7} r="3" fill="#E11D2E" />
          <rect x="132" y={y + 4} width={150 - i * 28} height="6" rx="3" fill="#fff" fillOpacity=".4" />
        </g>
      ))}
    </svg>
  );
}

export function HeroTriangles({ className = '' }) {
  return <TriangleArt className={className} />;
}
