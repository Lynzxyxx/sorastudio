import Image from 'next/image';
import { site } from '@/lib/data';

// Ilustrasi anime boy (SVG). Ganti dengan artwork sendiri lewat site.heroImage di lib/data.js
export default function Character({ className = '' }) {
  if (site.heroImage) {
    return <Image src={site.heroImage} alt={`Ilustrasi ${site.name}`} width={800} height={960} priority className={className} />;
  }
  return (
    <svg viewBox="0 0 400 480" className={className} role="img" aria-label={`Ilustrasi karakter anime ${site.name}`}>
      <defs>
        <linearGradient id="hoodie" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#241547" /><stop offset="1" stopColor="#0d0820" />
        </linearGradient>
        <linearGradient id="iris" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#C4B5FD" /><stop offset="1" stopColor="#6D28D9" />
        </linearGradient>
        <linearGradient id="skin" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FBE3D3" /><stop offset="1" stopColor="#F1C7AE" />
        </linearGradient>
      </defs>
      {/* hoodie */}
      <path d="M20 480C22 372 96 322 200 316c104 6 178 56 180 164z" fill="url(#hoodie)" />
      <path d="M150 322c10 40 40 62 50 62s40-22 50-62" fill="none" stroke="#8B5CF6" strokeWidth="5" strokeLinecap="round" />
      <path d="M176 372l-8 62M224 372l8 62" stroke="#C4B5FD" strokeWidth="4" strokeLinecap="round" />
      <path d="M60 470c4-60 24-100 60-124" fill="none" stroke="#8B5CF6" strokeOpacity=".5" strokeWidth="3" />
      <path d="M340 470c-4-60-24-100-60-124" fill="none" stroke="#8B5CF6" strokeOpacity=".5" strokeWidth="3" />
      {/* leher */}
      <path d="M170 262h60v70c-14 14-46 14-60 0z" fill="#E9B99F" />
      {/* telinga */}
      <ellipse cx="121" cy="214" rx="9" ry="16" fill="#F1C7AE" />
      <ellipse cx="279" cy="214" rx="9" ry="16" fill="#F1C7AE" />
      {/* wajah */}
      <path d="M124 188c0-52 34-84 76-84s76 32 76 84c0 56-34 94-76 94s-76-38-76-94z" fill="url(#skin)" />
      {/* rambut belakang */}
      <path d="M112 214C96 118 148 62 204 62c62 0 98 58 84 152-6-34-18-58-34-72-22 26-66 30-96 6-12 20-30 42-46 66z" fill="#0A0716" />
      <path d="M170 76c-30 14-48 44-54 94M232 74c28 12 46 40 52 88" fill="none" stroke="#8B5CF6" strokeOpacity=".7" strokeWidth="3" strokeLinecap="round" />
      {/* poni */}
      <path d="M124 176c14-6 30-24 38-44 8 16 22 28 40 30 14-6 24-18 28-34 8 20 24 36 46 44-6-60-38-92-78-92s-72 32-74 96z" fill="#0F0B20" />
      <path d="M196 84c-6 22-4 40 8 58" fill="none" stroke="#A78BFA" strokeOpacity=".55" strokeWidth="2.5" strokeLinecap="round" />
      {/* alis */}
      <path d="M150 196c10-5 22-5 32 0M218 196c10-5 22-5 32 0" stroke="#0A0716" strokeWidth="4" strokeLinecap="round" fill="none" />
      {/* mata */}
      <g>
        <ellipse cx="168" cy="224" rx="17" ry="21" fill="#fff" />
        <ellipse cx="232" cy="224" rx="17" ry="21" fill="#fff" />
        <ellipse cx="168" cy="226" rx="12" ry="17" fill="url(#iris)" />
        <ellipse cx="232" cy="226" rx="12" ry="17" fill="url(#iris)" />
        <ellipse cx="168" cy="228" rx="5.5" ry="9" fill="#0A0716" />
        <ellipse cx="232" cy="228" rx="5.5" ry="9" fill="#0A0716" />
        <circle cx="173" cy="219" r="4" fill="#fff" /><circle cx="237" cy="219" r="4" fill="#fff" />
        <circle cx="163" cy="234" r="2" fill="#fff" fillOpacity=".8" /><circle cx="227" cy="234" r="2" fill="#fff" fillOpacity=".8" />
        <path d="M150 214c8-8 24-9 36-1M214 213c12-8 28-7 36 1" stroke="#0A0716" strokeWidth="5" strokeLinecap="round" fill="none" />
      </g>
      {/* hidung & mulut */}
      <path d="M200 244l-3 10h6" stroke="#D9A98F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M186 268c8 6 20 6 28 0" stroke="#B9776B" strokeWidth="3" strokeLinecap="round" fill="none" />
      <ellipse cx="154" cy="254" rx="12" ry="6" fill="#F4A5A5" fillOpacity=".35" />
      <ellipse cx="246" cy="254" rx="12" ry="6" fill="#F4A5A5" fillOpacity=".35" />
      {/* headphone */}
      <path d="M112 206C104 118 150 62 202 62s96 56 88 144" fill="none" stroke="#8B5CF6" strokeWidth="10" strokeLinecap="round" />
      <path d="M112 206C104 118 150 62 202 62" fill="none" stroke="#fff" strokeOpacity=".35" strokeWidth="2" strokeLinecap="round" />
      <rect x="98" y="190" width="26" height="62" rx="13" fill="#0D0A18" stroke="#8B5CF6" strokeWidth="4" />
      <rect x="276" y="190" width="26" height="62" rx="13" fill="#0D0A18" stroke="#8B5CF6" strokeWidth="4" />
      <rect x="106" y="206" width="10" height="30" rx="5" fill="#A78BFA" />
      <rect x="284" y="206" width="10" height="30" rx="5" fill="#A78BFA" />
    </svg>
  );
}
