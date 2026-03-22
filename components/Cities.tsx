import Link from 'next/link';

const cities = [
  {
    id: 'ulan-ude',
    title: 'Улан-Удэ',
    subtitle: 'Офис на Балтахинова, 17',
    description: 'Здесь проводим обмен, консультации и часть международных переводов.',
    notes: ['Личная встреча', 'Быстрые сделки', 'Понятный процесс'],
    href: '/city/ulan-ude',
  },
  {
    id: 'chita',
    title: 'Чита',
    subtitle: 'Работаем по предварительной заявке',
    description: 'Подходит, если нужен гибкий формат и согласование деталей заранее.',
    notes: ['По заявке', 'Связь с менеджером', 'Индивидуальный формат'],
    href: '/city/chita',
  },
];

const internationalServices = [
  'Переводы и расчеты для Таиланда',
  'Оплата товаров и услуг в Китае',
  'Помощь с нестандартными платежами',
];

export default function Cities() {
  return (
    <section id="cities" className="section-shell">
      <div className="section-inner">
        <div className="section-head reveal">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            Где работаем
          </div>
          <h2 className="max-w-3xl text-4xl font-semibold leading-tight text-[rgba(31,26,20,0.95)] md:text-5xl">
            Улан-Удэ и Чита
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
            В Улан-Удэ работаем через офис, в Чите — по предварительной заявке.
            Если нужен международный перевод, это тоже можно обсудить.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(19rem,0.72fr)]">
          <div className="grid gap-6 md:grid-cols-2">
            {cities.map((city, index) => (
              <article
                key={city.id}
                className="surface reveal"
                style={{ transitionDelay: `${index * 0.12}s` }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-sm font-medium uppercase tracking-[0.18em] text-[rgba(17,94,89,0.76)]">
                      Город
                    </div>
                    <h3 className="mt-3 text-3xl font-semibold text-[rgba(31,26,20,0.96)]">
                      {city.title}
                    </h3>
                    <p className="mt-2 text-sm font-medium text-[rgba(217,119,6,0.96)]">
                      {city.subtitle}
                    </p>
                  </div>
                  <div className="rounded-full border border-[rgba(15,118,110,0.12)] bg-[rgba(15,118,110,0.08)] px-3 py-1 text-sm font-semibold text-[rgba(17,94,89,0.92)]">
                    В работе
                  </div>
                </div>

                <p className="mt-6 text-base leading-7 text-muted">{city.description}</p>

                <ul className="mt-6 space-y-3">
                  {city.notes.map((note) => (
                    <li key={note} className="flex items-center gap-3 text-sm text-[rgba(31,26,20,0.82)]">
                      <span className="h-2 w-2 rounded-full bg-[rgba(217,119,6,0.92)]" />
                      {note}
                    </li>
                  ))}
                </ul>

                <Link href={city.href} className="btn-secondary mt-8">
                  Подробнее
                </Link>
              </article>
            ))}
          </div>

          <aside className="surface-strong reveal" style={{ transitionDelay: '0.18s' }}>
            <div className="text-sm font-medium uppercase tracking-[0.18em] text-[rgba(17,94,89,0.76)]">
              Международные переводы
            </div>
            <h3 className="mt-3 text-3xl font-semibold text-[rgba(31,26,20,0.95)]">
              Отдельное направление для сложных запросов
            </h3>
            <p className="mt-4 text-base leading-7 text-muted">
              Если нужен не только обмен, но и перевод за рубеж, сначала смотрим задачу,
              потом предлагаем рабочий вариант.
            </p>

            <div className="mt-8 space-y-3">
              {internationalServices.map((item) => (
                <div
                  key={item}
                  className="rounded-[22px] border border-[rgba(62,43,21,0.1)] bg-[rgba(255,255,255,0.72)] px-4 py-4 text-sm leading-6 text-[rgba(31,26,20,0.84)]"
                >
                  {item}
                </div>
              ))}
            </div>

            <a
              href="https://t.me/Crypto_u_u"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-8"
            >
              Обсудить задачу
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
