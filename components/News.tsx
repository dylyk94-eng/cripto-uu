'use client';

const news = [
  {
    date: '20.03.2026',
    title: 'Чита подключена как отдельное направление',
    description: 'Теперь запросы из Читы обрабатываем по заранее согласованному сценарию с понятным временем связи и форматом сделки.',
    badge: 'Обновление',
  },
  {
    date: '15.03.2026',
    title: 'Добавили направление по Solana',
    description: 'Расширили список поддерживаемых активов для клиентов, которым важно быстрое типовое направление без лишних уточнений.',
    badge: 'Новый актив',
  },
  {
    date: '10.03.2026',
    title: 'Упростили первичную коммуникацию',
    description: 'Сократили количество обязательных полей и сделали первый контакт через Telegram или форму короче и понятнее.',
    badge: 'Процесс',
  },
];

export default function News() {
  return (
    <section className="section-shell">
      <div className="section-inner">
        <div className="section-head fade-in text-center md:mx-auto">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            Обновления
          </div>
          <h2 className="text-4xl font-semibold leading-tight text-[rgba(31,26,20,0.95)] md:text-5xl">
            Обновления сервиса
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted">
            Коротко о новых направлениях, изменениях в процессе и расширении услуг.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {news.map((item, index) => (
            <article
              key={item.title}
              className="surface fade-in"
              style={{ transitionDelay: `${index * 0.08}s` }}
            >
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full bg-[rgba(15,118,110,0.08)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[rgba(17,94,89,0.94)]">
                  {item.badge}
                </span>
                <span className="text-sm text-muted">{item.date}</span>
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-[rgba(31,26,20,0.95)]">{item.title}</h3>
              <p className="mt-4 text-base leading-7 text-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
