import { site } from '@/lib/data';

const base = { viewBox: '0 0 24 24', className: 'h-5 w-5', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true };

export const IgIcon = () => (
  <svg {...base}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
);
export const TtIcon = () => (
  <svg {...base}><path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5M14 3c.4 2.6 2.2 4.4 5 4.6" /></svg>
);

const items = [
  { key: 'instagram', label: 'Instagram', Icon: IgIcon },
  { key: 'tiktok', label: 'TikTok', Icon: TtIcon },
];

export default function Socials({ className = '' }) {
  return (
    <ul className={`flex items-center gap-2 ${className}`}>
      {items.map(({ key, label, Icon }) => {
        const s = site.socials[key];
        return (
          <li key={key}>
            <a href={s.url} target="_blank" rel="noopener noreferrer" aria-label={`${label} @${s.handle}`} title={`${label} @${s.handle}`}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-violet/40 bg-violet/10 text-violet-soft transition duration-300 hover:-translate-y-1 hover:border-violet hover:bg-violet hover:text-white hover:shadow-neon">
              <Icon />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
