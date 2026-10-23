// Thumbnail project berupa ilustrasi SVG. Ganti dengan screenshot asli kapan saja.
export default function Thumb({ kind }) {
  const bar = <><rect width="400" height="26" fill="#0D0A18" /><circle cx="14" cy="13" r="4" fill="#8B5CF6" /><circle cx="28" cy="13" r="4" fill="#5B21B6" /><circle cx="42" cy="13" r="4" fill="#312e81" /></>;
  return (
    <svg viewBox="0 0 400 240" className="block h-full w-full" role="img" aria-label={`Pratinjau ${kind}`}>
      <defs>
        <linearGradient id={`g-${kind}`} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#1b1238" /><stop offset="1" stopColor="#07050F" /></linearGradient>
      </defs>
      <rect width="400" height="240" fill={`url(#g-${kind})`} />
      {bar}
      {kind === 'smm' && (
        <g>
          <rect x="0" y="26" width="70" height="214" fill="#0D0A18" />
          {[48, 74, 100, 126].map((y) => <rect key={y} x="12" y={y} width="46" height="8" rx="4" fill="#8B5CF6" fillOpacity={y === 48 ? 1 : 0.35} />)}
          {[86, 176, 266].map((x) => <g key={x}><rect x={x} y="42" width="78" height="48" rx="8" fill="#150F2C" stroke="#8B5CF6" strokeOpacity=".4" /><rect x={x + 10} y="52" width="30" height="6" rx="3" fill="#A78BFA" /><rect x={x + 10} y="68" width="48" height="10" rx="3" fill="#fff" fillOpacity=".85" /></g>)}
          <rect x="86" y="104" width="258" height="120" rx="10" fill="#150F2C" stroke="#8B5CF6" strokeOpacity=".3" />
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => <rect key={i} x={102 + i * 30} y={206 - (30 + ((i * 37) % 70))} width="18" height={30 + ((i * 37) % 70)} rx="4" fill="#8B5CF6" fillOpacity={0.45 + (i % 3) * 0.2} />)}
        </g>
      )}
      {kind === 'otp' && (
        <g>
          <rect x="130" y="40" width="140" height="190" rx="20" fill="#0D0A18" stroke="#8B5CF6" strokeWidth="2" />
          <rect x="176" y="48" width="48" height="6" rx="3" fill="#312e81" />
          {[78, 110, 142].map((y, i) => <g key={y}><rect x="142" y={y} width="116" height="24" rx="8" fill="#150F2C" stroke="#8B5CF6" strokeOpacity=".35" /><circle cx="156" cy={y + 12} r="6" fill="#8B5CF6" /><rect x="168" y={y + 8} width={50 - i * 8} height="8" rx="4" fill="#fff" fillOpacity=".7" /></g>)}
          <rect x="142" y="178" width="116" height="38" rx="10" fill="#8B5CF6" />
          <text x="200" y="203" textAnchor="middle" fontFamily="monospace" fontSize="18" fontWeight="700" fill="#fff" letterSpacing="4">482 913</text>
        </g>
      )}
      {kind === 'api' && (
        <g fontFamily="monospace" fontSize="13">
          <rect x="24" y="44" width="352" height="176" rx="10" fill="#0A0716" stroke="#8B5CF6" strokeOpacity=".4" />
          <text x="40" y="70" fill="#A78BFA">GET /v1/nomor-kosong</text>
          <text x="40" y="94" fill="#64748b">{'{'}</text>
          <text x="56" y="114" fill="#C4B5FD">"status": <tspan fill="#34d399">"ok"</tspan>,</text>
          <text x="56" y="134" fill="#C4B5FD">"tersedia": <tspan fill="#fff">128</tspan>,</text>
          <text x="56" y="154" fill="#C4B5FD">"nomor": [<tspan fill="#fbbf24">"62812…"</tspan>, …]</text>
          <text x="40" y="174" fill="#64748b">{'}'}</text>
          <rect x="40" y="188" width="8" height="14" fill="#8B5CF6" />
        </g>
      )}
    </svg>
  );
}
