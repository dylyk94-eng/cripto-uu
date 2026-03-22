import Link from 'next/link';

const navItems = [
  { href: '#cities', label: 'Города' },
  { href: '#services', label: 'Услуги' },
  { href: '#contact', label: 'Контакты' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-shell pb-10 pt-8">
      <div className="section-inner">
        <div className="surface-strong">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(16rem,0.6fr)_minmax(16rem,0.7fr)]">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#115e59_0%,#d97706_100%)] text-sm font-bold text-white">
                  CE
                </div>
                <div>
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[rgba(17,94,89,0.84)]">
                    Crypto Exchange
                  </div>
                  <div className="text-sm text-muted">Офлайн сделки и международные платежи</div>
                </div>
              </div>
              <p className="mt-6 max-w-xl text-base leading-7 text-muted">
                Спокойный сервис для тех, кому важны понятные условия, реальный контакт и
                предсказуемый процесс без лишних обещаний.
              </p>
            </div>

            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[rgba(17,94,89,0.84)]">
                Навигация
              </div>
              <div className="mt-5 space-y-3">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block text-sm text-[rgba(31,26,20,0.82)] transition hover:text-[rgba(17,94,89,1)]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[rgba(17,94,89,0.84)]">
                Связь
              </div>
              <div className="mt-5 space-y-3 text-sm text-[rgba(31,26,20,0.82)]">
                <a
                  href="https://t.me/Crypto_u_u"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition hover:text-[rgba(17,94,89,1)]"
                >
                  Telegram: @Crypto_u_u
                </a>
                <a href="tel:+79999999999" className="block transition hover:text-[rgba(17,94,89,1)]">
                  Телефон: +7 (999) 999-99-99
                </a>
                <a
                  href="mailto:info@cryptoexchange.ru"
                  className="block transition hover:text-[rgba(17,94,89,1)]"
                >
                  Email: info@cryptoexchange.ru
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-[rgba(62,43,21,0.1)] pt-6 text-sm text-muted md:flex-row md:items-center md:justify-between">
            <p>© {year} Crypto Exchange. Все права защищены.</p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="transition hover:text-[rgba(17,94,89,1)]">
                Политика конфиденциальности
              </a>
              <a href="#contact" className="transition hover:text-[rgba(17,94,89,1)]">
                Условия работы
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
