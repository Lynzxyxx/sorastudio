// Thumbnail project berupa ilustrasi SVG. Ganti dengan screenshot asli kapan saja.
export default function Thumb({ kind }) {
  return (
    <svg viewBox="0 0 400 240" className="block h-full w-full" role="img" aria-label={`Pratinjau ${kind}`}>
      <rect width="400" height="240" fill="#0F1424" />
      <rect width="400" height="26" fill="#0A0E1A" />
      <circle cx="14" cy="13" r="4" fill="#E11D2E" /><circle cx="28" cy="13" r="4" fill="#3B4468" /><circle cx="42" cy="13" r="4" fill="#3B4468" />
      {kind === 'smm' && (
        <g>
          <rect x="0" y="26" width="70" height="214" fill="#0D1328" />
          {[48, 74, 100, 126].map((y) => <rect key={y} x="12" y={y} width="46" height="8" rx="4" fill={y === 48 ? '#E11D2E' : '#2B3556'} />)}
          {[86, 176, 266].map((x, i) => <g key={x}><rect x={x} y="42" width="78" height="48" rx="8" fill={i === 0 ? '#E11D2E' : '#19213F'} /><rect x={x + 10} y="52" width="30" height="6" rx="3" fill="#fff" fillOpacity=".6" /><rect x={x + 10} y="68" width="48" height="10" rx="3" fill="#fff" fillOpacity=".9" /></g>)}
          <rect x="86" y="104" width="258" height="120" rx="10" fill="#19213F" />
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => <rect key={i} x={102 + i * 30} y={206 - (30 + ((i * 37) % 70))} width="18" height={30 + ((i * 37) % 70)} rx="4" fill={i % 3 === 1 ? '#E11D2E' : '#3B4468'} />)}
        </g>
      )}
      {kind === 'otp' && (
        <g>
          <rect x="130" y="40" width="140" height="190" rx="20" fill="#0A0E1A" stroke="#E11D2E" strokeWidth="2" />
          <rect x="176" y="48" width="48" height="6" rx="3" fill="#3B4468" />
          {[78, 110, 142].map((y, i) => <g key={y}><rect x="142" y={y} width="116" height="24" rx="8" fill="#19213F" /><circle cx="156" cy={y + 12} r="6" fill="#E11D2E" /><rect x="168" y={y + 8} width={50 - i * 8} height="8" rx="4" fill="#fff" fillOpacity=".7" /></g>)}
          <rect x="142" y="178" width="116" height="38" rx="10" fill="#E11D2E" />
          <text x="200" y="203" textAnchor="middle" fontFamily="monospace" fontSize="18" fontWeight="700" fill="#fff" letterSpacing="4">482 913</text>
        </g>
      )}
      {kind === 'api' && (
        <g fontFamily="monospace" fontSize="13">
          <rect x="24" y="44" width="352" height="176" rx="10" fill="#0A0E1A" stroke="#E11D2E" strokeOpacity=".5" />
          <text x="40" y="70" fill="#F87171">GET /v1/nomor-kosong</text>
          <text x="40" y="94" fill="#64748b">{'{'}</text>
          <text x="56" y="114" fill="#CBD5E1">"status": <tspan fill="#34d399">"ok"</tspan>,</text>
          <text x="56" y="134" fill="#CBD5E1">"tersedia": <tspan fill="#fff">128</tspan>,</text>
          <text x="56" y="154" fill="#CBD5E1">"nomor": [<tspan fill="#fbbf24">"62812…"</tspan>, …]</text>
          <text x="40" y="174" fill="#64748b">{'}'}</text>
          <rect x="40" y="188" width="8" height="14" fill="#E11D2E" />
        </g>
      )}
    </svg>
  );
}
