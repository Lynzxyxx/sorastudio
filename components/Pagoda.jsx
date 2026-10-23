// Ilustrasi garis pagoda Jepang (line art)
export default function Pagoda({ className = '' }) {
  const tiers = [0, 1, 2, 3, 4];
  const cx = 100;
  return (
    <svg viewBox="0 0 200 300" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M100 6v34M92 18h16M94 26h12M96 33h8" />
      {tiers.map((i) => {
        const y = 62 + i * 42;
        const w = 34 + i * 12;
        const bw = w * 0.62;
        return (
          <g key={i}>
            <path d={`M${cx - w} ${y}Q${cx - w * 0.55} ${y - 2} ${cx} ${y - 18}Q${cx + w * 0.55} ${y - 2} ${cx + w} ${y}`} />
            <path d={`M${cx - w} ${y}q-7 -1 -10 -9M${cx + w} ${y}q7 -1 10 -9`} />
            <path d={`M${cx - bw} ${y}v24h${bw * 2}v-24`} />
            <path d={`M${cx - bw * 0.33} ${y}v24M${cx + bw * 0.33} ${y}v24`} />
            <path d={`M${cx - bw} ${y + 24}h${bw * 2}`} />
          </g>
        );
      })}
      <path d="M36 274h128M28 284h144M20 294h160" />
      <path d="M52 262l-8 12M148 262l8 12" />
    </svg>
  );
}
