import { site } from '@/lib/data';
import { Icon } from './Icons';

const items = [
  { key: 'instagram', label: 'Instagram' },
  { key: 'tiktok', label: 'TikTok' },
];

export default function Socials({ tone = 'dark', className = '' }) {
  const look = tone === 'dark'
    ? 'border-white/20 text-white hover:bg-brand hover:border-brand'
    : 'border-ink/20 text-ink hover:bg-brand hover:border-brand hover:text-white';
  return (
    <ul className={`flex items-center gap-2 ${className}`}>
      {items.map(({ key, label }) => {
        const s = site.socials[key];
        return (
          <li key={key}>
            <a href={s.url} target="_blank" rel="noopener noreferrer" aria-label={`${label} @${s.handle}`} title={`${label} @${s.handle}`}
              className={`flex h-9 w-9 items-center justify-center rounded-full border transition duration-300 hover:-translate-y-0.5 ${look}`}>
              <Icon name={key} className="h-4 w-4" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
