'use client';
import { useEffect, useState } from 'react';
import { waLink } from '@/lib/data';
import { Icon } from './Icons';

export default function Floating() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 600);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col items-center gap-3">
      <a href="#home" aria-label="Kembali ke atas" className={`flex h-11 w-11 items-center justify-center rounded-full bg-brand text-white shadow-lg transition duration-300 hover:-translate-y-1 ${show ? 'opacity-100' : 'pointer-events-none translate-y-3 opacity-0'}`}><Icon name="up" /></a>
      <a href={waLink('Halo Gilang, saya ingin bertanya.')} target="_blank" rel="noopener noreferrer" aria-label="Chat lewat WhatsApp" className="flex h-12 w-12 items-center justify-center rounded-full bg-[#16A34A] text-white shadow-lg transition duration-300 hover:-translate-y-1"><Icon name="whatsapp" className="h-6 w-6" /></a>
    </div>
  );
}
