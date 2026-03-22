import Link from 'next/link';

const trustPoints = [
  'Встреча в офисе или по договоренности',
  'Курс и условия обсуждаем заранее',
  'На связи в Telegram на каждом этапе',
];

const supportedCurrencies = ['USDT', 'BTC', 'ETH', 'SOL', 'USD', 'CNY'];

export default function Hero() {
  return (
    <section className="section-shell pt-32 md:pt-36">
      <div className="section-inner grid items-start gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(22rem,0.8fr)]">
        <div className="reveal">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            Обмен криптовалюты и международные переводы
          </div>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight text-[rgba(31,26,20,0.96)] md:text-7xl">
            Обмен криптовалюты в{' '}
            <span className="gradient-text">Улан-Удэ и Чите</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[rgba(106,90,73,0.92)] md:text-xl">
            Помогаем с обменом USDT, BTC, ETH и переводами за рубеж. Сразу объясняем,
            как проходит сделка, где встречаемся и что нужно с вашей стороны.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="#contact" className="btn-primary">
              Оставить заявку
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <a
              href="https://t.me/Crypto_u_u"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Написать в Telegram
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="surface-soft">
              <div className="text-sm font-medium uppercase tracking-[0.18em] text-[rgba(17,94,89,0.76)]">
                Формат
              </div>
              <div className="mt-3 text-2xl font-semibold text-[rgba(31,26,20,0.95)]">
                Офлайн или по заявке
              </div>
              <p className="mt-2 text-sm leading-6 text-muted">
                Подберем формат под город, сумму и задачу.
              </p>
            </div>
            <div className="surface-soft">
              <div className="text-sm font-medium uppercase tracking-[0.18em] text-[rgba(17,94,89,0.76)]">
                Скорость
              </div>
              <div className="mt-3 text-2xl font-semibold text-[rgba(31,26,20,0.95)]">
                От 15 минут
              </div>
              <p className="mt-2 text-sm leading-6 text-muted">
                По обычным направлениям всё проходит быстро.
              </p>
            </div>
            <div className="surface-soft">
              <div className="text-sm font-medium uppercase tracking-[0.18em] text-[rgba(17,94,89,0.76)]">
                Связь
              </div>
              <div className="mt-3 text-2xl font-semibold text-[rgba(31,26,20,0.95)]">
                Telegram
              </div>
              <p className="mt-2 text-sm leading-6 text-muted">
                Можно быстро задать вопрос и согласовать детали.
              </p>
            </div>
          </div>
        </div>

        <div className="reveal space-y-5" style={{ transitionDelay: '0.1s' }}>
          <div className="surface-strong">
            <div className="text-sm font-medium uppercase tracking-[0.18em] text-[rgba(17,94,89,0.76)]">
              Что важно
            </div>
            <ul className="mt-6 space-y-4">
              {trustPoints.map((point) => (
                <li key={point} className="flex gap-3">
                  <div className="mt-1 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[rgba(15,118,110,0.12)] text-[rgba(17,94,89,1)]">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-base leading-7 text-[rgba(31,26,20,0.88)]">{point}</p>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-[24px] border border-[rgba(62,43,21,0.1)] bg-[rgba(255,255,255,0.7)] p-5">
              <div className="text-sm font-medium uppercase tracking-[0.18em] text-[rgba(106,90,73,0.8)]">
                Как проходит сделка
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                {[
                  ['1', 'Заявка', 'Пишете в Telegram или оставляете форму'],
                  ['2', 'Согласование', 'Уточняем сумму, валюту и формат'],
                  ['3', 'Обмен', 'Проводим сделку и подтверждаем результат'],
                ].map(([step, title, text]) => (
                  <div key={step} className="rounded-[20px] bg-[rgba(244,239,230,0.72)] p-4">
                    <div className="text-sm font-semibold text-[rgba(17,94,89,0.84)]">Шаг {step}</div>
                    <div className="mt-2 text-lg font-semibold text-[rgba(31,26,20,0.95)]">{title}</div>
                    <p className="mt-2 text-sm leading-6 text-muted">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="surface">
            <div className="text-sm font-medium uppercase tracking-[0.18em] text-[rgba(106,90,73,0.8)]">
              Основные направления
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              {supportedCurrencies.map((currency) => (
                <span
                  key={currency}
                  className="rounded-full border border-[rgba(62,43,21,0.12)] bg-[rgba(255,255,255,0.84)] px-4 py-2 text-sm font-semibold text-[rgba(31,26,20,0.82)]"
                >
                  {currency}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
