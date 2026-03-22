'use client';

const partners = [
  { name: 'CryptoCompare', description: 'Источник справочных данных по рыночным курсам' },
  { name: 'Telegram', description: 'Основной канал связи с клиентами' },
  { name: 'Яндекс Карты', description: 'Навигация и подтверждение локаций' },
  { name: 'Mastercard', description: 'Поддержка карточных сценариев оплаты' },
  { name: 'Visa', description: 'Дополнительные варианты расчетов' },
];

export default function Partners() {
  return (
    <section className="section-shell pt-12">
      <div className="section-inner">
        <div className="section-head fade-in text-center md:mx-auto">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            Экосистема
          </div>
          <h3 className="text-3xl font-semibold text-[rgba(31,26,20,0.95)]">
            Сервисы и инструменты, на которые мы опираемся в работе
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted">
            Блок без искусственного пафоса: просто перечисление платформ и инструментов,
            которые помогают в коммуникации, навигации и обработке запросов.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {partners.map((partner, index) => (
            <article
              key={partner.name}
              className="surface fade-in text-center"
              style={{ transitionDelay: `${index * 0.08}s` }}
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[rgba(15,118,110,0.08)] text-sm font-semibold text-[rgba(17,94,89,0.94)]">
                {partner.name.slice(0, 2).toUpperCase()}
              </div>
              <h4 className="mt-4 text-lg font-semibold text-[rgba(31,26,20,0.95)]">{partner.name}</h4>
              <p className="mt-2 text-sm leading-6 text-muted">{partner.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
