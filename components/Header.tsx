'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const navItems = [
  { href: '#cities', label: 'Города' },
  { href: '#services', label: 'Услуги' },
  { href: '#contact', label: 'Контакты' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-5 py-3 transition duration-300 ${
          isScrolled
            ? 'bg-[rgba(255,252,247,0.92)] shadow-[0_18px_40px_rgba(68,42,14,0.12)] backdrop-blur'
            : 'bg-[rgba(255,252,247,0.7)] backdrop-blur'
        }`}
        style={{ borderColor: 'rgba(62, 43, 21, 0.12)' }}
      >
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,#115e59_0%,#d97706_100%)] text-sm font-bold text-white">
            CE
          </div>
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[rgba(17,94,89,0.84)]">
              Crypto Exchange
            </div>
            <div className="text-xs text-[rgba(106,90,73,0.84)]">Офлайн обмен и сопровождение</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Основная навигация">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[rgba(31,26,20,0.78)] transition hover:text-[rgba(17,94,89,1)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="https://t.me/Crypto_u_u"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Написать в Telegram
          </a>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border md:hidden"
          style={{ borderColor: 'rgba(62, 43, 21, 0.14)' }}
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
        >
          <span className="relative h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-[rgba(31,26,20,0.88)] transition ${
                isMobileMenuOpen ? 'translate-y-[7px] rotate-45' : ''
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-[rgba(31,26,20,0.88)] transition ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] h-0.5 w-5 rounded-full bg-[rgba(31,26,20,0.88)] transition ${
                isMobileMenuOpen ? '-translate-y-[7px] -rotate-45' : ''
              }`}
            />
          </span>
        </button>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-[rgba(31,26,20,0.18)] backdrop-blur-sm transition md:hidden ${
          isMobileMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <nav
          className={`absolute right-4 top-20 w-[min(22rem,calc(100%-2rem))] rounded-[28px] border bg-[rgba(255,252,247,0.98)] p-6 shadow-[0_24px_48px_rgba(68,42,14,0.16)] transition ${
            isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
          }`}
          style={{ borderColor: 'rgba(62, 43, 21, 0.12)' }}
          onClick={(event) => event.stopPropagation()}
        >
          <div className="mb-6 text-sm font-semibold uppercase tracking-[0.18em] text-[rgba(17,94,89,0.84)]">
            Навигация
          </div>
          <div className="space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-2xl px-4 py-3 text-base font-medium text-[rgba(31,26,20,0.88)] transition hover:bg-[rgba(15,118,110,0.08)]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <a
            href="https://t.me/Crypto_u_u"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-6 w-full"
          >
            Написать в Telegram
          </a>
        </nav>
      </div>
    </header>
  );
}
