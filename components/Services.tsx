const serviceGroups = [
  {
    title: 'Обмен криптовалюты',
    description:
      'Работаем с популярными активами и заранее согласуем ключевые параметры сделки.',
    points: ['USDT, BTC, ETH, SOL', 'Наличные и безналичные сценарии', 'Фиксация условий перед началом'],
  },
  {
    title: 'Международные расчеты',
    description:
      'Помогаем закрыть платежи за услуги, товары, недвижимость и частные задачи.',
    points: ['Таиланд и Китай', 'Консультация по маршруту оплаты', 'Сопровождение нестандартных кейсов'],
  },
  {
    title: 'Личное сопровождение',
    description:
      'Если клиенту важна ясность процесса, подключаем менеджера и не оставляем его одного.',
    points: ['Подготовка до встречи', 'Проверка деталей сделки', 'Связь в Telegram после обмена'],
  },
];

const process = [
  ['Запрос', 'Вы пишете, какую валюту и задачу нужно решить.'],
  ['Согласование', 'Подтверждаем сумму, курс, город и удобный формат.'],
  ['Проведение', 'Организуем сделку и фиксируем результат без лишней суеты.'],
];

export default function Services() {
  return (
    <section id="services" className="section-shell">
      <div className="section-inner">
        <div className="section-head reveal">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            Услуги и процесс
          </div>
          <h2 className="max-w-3xl text-4xl font-semibold leading-tight text-[rgba(31,26,20,0.95)] md:text-5xl">
            Основные направления работы и понятный порядок сделки
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
            Основные услуги и то, как начинается работа.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {serviceGroups.map((group, index) => (
            <article
              key={group.title}
              className="surface reveal"
              style={{ transitionDelay: `${index * 0.12}s` }}
            >
              <div className="text-sm font-medium uppercase tracking-[0.18em] text-[rgba(17,94,89,0.76)]">
                Направление {index + 1}
              </div>
              <h3 className="mt-3 text-2xl font-semibold text-[rgba(31,26,20,0.95)]">
                {group.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-muted">{group.description}</p>
              <ul className="mt-6 space-y-3">
                {group.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-6 text-[rgba(31,26,20,0.84)]">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[rgba(15,118,110,0.86)]" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="surface-strong mt-8 reveal" style={{ transitionDelay: '0.2s' }}>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1fr)] lg:items-start">
            <div>
              <div className="text-sm font-medium uppercase tracking-[0.18em] text-[rgba(17,94,89,0.76)]">
                Как мы работаем
              </div>
              <h3 className="mt-3 text-3xl font-semibold text-[rgba(31,26,20,0.95)]">
                Как проходит сделка
              </h3>
              <p className="mt-4 text-base leading-7 text-muted">
                Сначала получаем запрос, затем согласуем детали и только после этого
                проводим обмен. Такой порядок помогает клиенту понимать следующий шаг
                и спокойно принимать решение.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {process.map(([title, text], index) => (
                <div
                  key={title}
                  className="rounded-[24px] border border-[rgba(62,43,21,0.1)] bg-[rgba(255,255,255,0.74)] p-5"
                >
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[rgba(217,119,6,0.92)]">
                    Шаг {index + 1}
                  </div>
                  <div className="mt-3 text-xl font-semibold text-[rgba(31,26,20,0.95)]">
                    {title}
                  </div>
                  <p className="mt-3 text-sm leading-6 text-muted">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
