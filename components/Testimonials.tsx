'use client';

import { useState } from 'react';

const testimonials = [
  {
    name: 'Александр',
    city: 'Улан-Удэ',
    rating: 5,
    text: 'Обменял USDT на рубли в тот же день. Все детали согласовали заранее, без сюрпризов на месте.',
    note: 'Разовая сделка',
  },
  {
    name: 'Мария',
    city: 'Чита',
    rating: 5,
    text: 'До этого не пользовалась криптообменом. Здесь спокойно объяснили процесс и не торопили с решением.',
    note: 'Первый опыт',
  },
  {
    name: 'Дмитрий',
    city: 'Улан-Удэ',
    rating: 5,
    text: 'Работаю с ребятами регулярно. Нравится, что коммуникация короткая и без лишних обещаний.',
    note: 'Постоянный клиент',
  },
  {
    name: 'Елена',
    city: 'Чита',
    rating: 5,
    text: 'Помогли разобраться с международным платежом и объяснили, какой маршрут реально рабочий для моей задачи.',
    note: 'Нестандартный запрос',
  },
  {
    name: 'Сергей',
    city: 'Улан-Удэ',
    rating: 4,
    text: 'Нормальный сервис для тех, кому важен офлайн-формат. Лучше заранее писать по времени, если сумма крупная.',
    note: 'Обмен крупной суммы',
  },
  {
    name: 'Анна',
    city: 'Улан-Удэ',
    rating: 5,
    text: 'Обращалась по рекомендации. Ощущение спокойного сервиса: всё по делу, без давления и без скрытых условий.',
    note: 'По рекомендации',
  },
];

export default function Testimonials() {
  const [filter, setFilter] = useState<'all' | 'ulan-ude' | 'chita'>('all');

  const filteredTestimonials =
    filter === 'all'
      ? testimonials
      : testimonials.filter((item) =>
          filter === 'ulan-ude' ? item.city === 'Улан-Удэ' : item.city === 'Чита'
        );

  return (
    <section className="section-shell">
      <div className="section-inner">
        <div className="section-head fade-in text-center md:mx-auto">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            Отзывы
          </div>
          <h2 className="text-4xl font-semibold leading-tight text-[rgba(31,26,20,0.95)] md:text-5xl">
            Что говорят клиенты
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted">
            Несколько коротких отзывов о том, как проходит общение, согласование условий
            и сама сделка.
          </p>
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-3 fade-in">
          {[
            ['all', 'Все'],
            ['ulan-ude', 'Улан-Удэ'],
            ['chita', 'Чита'],
          ].map(([value, label]) => (
            <button
              key={value}
              type="button"
              onClick={() => setFilter(value as 'all' | 'ulan-ude' | 'chita')}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                filter === value
                  ? 'bg-[rgba(15,118,110,0.12)] text-[rgba(17,94,89,1)]'
                  : 'bg-[rgba(255,255,255,0.72)] text-[rgba(31,26,20,0.72)]'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredTestimonials.map((testimonial, index) => (
            <article
              key={`${testimonial.name}-${testimonial.city}`}
              className="surface fade-in"
              style={{ transitionDelay: `${index * 0.08}s` }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-xl font-semibold text-[rgba(31,26,20,0.95)]">{testimonial.name}</div>
                  <div className="mt-1 text-sm text-muted">{testimonial.city}</div>
                </div>
                <div className="flex gap-1 text-[rgba(217,119,6,0.95)]">
                  {Array.from({ length: testimonial.rating }).map((_, star) => (
                    <span key={star}>★</span>
                  ))}
                </div>
              </div>

              <p className="mt-6 text-base leading-7 text-[rgba(31,26,20,0.82)]">
                {testimonial.text}
              </p>

              <div className="mt-6 border-t border-[rgba(62,43,21,0.08)] pt-4 text-sm font-medium text-[rgba(17,94,89,0.86)]">
                {testimonial.note}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
