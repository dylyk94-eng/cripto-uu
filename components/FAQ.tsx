'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'Сколько обычно занимает обмен?',
    answer:
      'Если направление типовое и все данные согласованы заранее, обмен обычно занимает от 15 минут. На нестандартные задачи и международные расчеты может понадобиться больше времени.',
  },
  {
    question: 'С какими валютами вы работаете?',
    answer:
      'Основные направления: USDT, BTC, ETH и другие популярные активы. Если нужен редкий токен или сложный маршрут, лучше сразу написать в Telegram и уточнить детали.',
  },
  {
    question: 'Как формируется курс?',
    answer:
      'Курс обсуждается до начала сделки. Мы стараемся зафиксировать понятные условия заранее, чтобы на финальном этапе не возникало неожиданностей.',
  },
  {
    question: 'Можно ли провести крупную сделку?',
    answer:
      'Да, но для крупных сумм лучше заранее написать менеджеру. Это нужно, чтобы согласовать время, формат встречи и маршрут расчета без спешки.',
  },
  {
    question: 'Вы помогаете с международными платежами?',
    answer:
      'Да. Если задача выходит за рамки обычного обмена, мы сначала разбираем кейс, а уже потом предлагаем рабочий сценарий. Не обещаем невозможное и не ведем клиента по шаблону.',
  },
  {
    question: 'Что делать, если у меня остались вопросы до сделки?',
    answer:
      'Проще всего написать в Telegram. Так можно быстро обсудить сумму, валюту, город, желаемый формат и понять, подходит ли вам наш сценарий работы.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-shell">
      <div className="section-inner max-w-4xl">
        <div className="section-head fade-in text-center md:mx-auto">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            FAQ
          </div>
          <h2 className="text-4xl font-semibold leading-tight text-[rgba(31,26,20,0.95)] md:text-5xl">
            Частые вопросы
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted">
            Ответы на базовые вопросы о формате работы, сроках и согласовании сделки.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="surface fade-in overflow-hidden"
                style={{ transitionDelay: `${index * 0.08}s` }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-semibold text-[rgba(31,26,20,0.95)]">
                    {faq.question}
                  </span>
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-[rgba(15,118,110,0.08)] text-[rgba(17,94,89,0.94)]">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                <div
                  className={`grid transition-[grid-template-rows,opacity,margin] duration-300 ${
                    isOpen ? 'mt-4 opacity-100 [grid-template-rows:1fr]' : 'mt-0 opacity-0 [grid-template-rows:0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-base leading-7 text-muted">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center fade-in">
          <a href="#contact" className="btn-primary">
            Задать свой вопрос
          </a>
        </div>
      </div>
    </section>
  );
}
