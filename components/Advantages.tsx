'use client';

const advantages = [
  {
    title: 'Прозрачный сценарий',
    description: 'До начала сделки клиент понимает, что произойдет дальше, кто на связи и какие условия уже согласованы.',
  },
  {
    title: 'Спокойная коммуникация',
    description: 'Без перегруженных обещаний и без давления. Главная задача текста здесь — снизить тревогу, а не создать искусственный ажиотаж.',
  },
  {
    title: 'Поддержка по нестандартным кейсам',
    description: 'Если запрос не укладывается в типовой обмен, можно обсудить отдельный маршрут работы.',
  },
  {
    title: 'Офлайн-формат',
    description: 'Для части клиентов важно личное присутствие и человеческий контакт. Это отражено в тексте и в структуре страницы.',
  },
  {
    title: 'Быстрый первый контакт',
    description: 'Telegram и короткая форма дают понятный вход без длинных брифов и лишних барьеров.',
  },
  {
    title: 'Текст, который не подрывает доверие',
    description: 'Понятные формулировки, спокойная подача и акцент на сути услуги.',
  },
];

export default function Advantages() {
  return (
    <section id="services" className="section-shell">
      <div className="section-inner">
        <div className="section-head fade-in text-center md:mx-auto">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            Преимущества
          </div>
          <h2 className="text-4xl font-semibold leading-tight text-[rgba(31,26,20,0.95)] md:text-5xl">
            Почему клиенты возвращаются
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted">
            Несколько причин, по которым сервис удобен для типовых обменов и нестандартных запросов.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {advantages.map((advantage, index) => (
            <article
              key={advantage.title}
              className="surface fade-in"
              style={{ transitionDelay: `${index * 0.08}s` }}
            >
              <h3 className="text-2xl font-semibold text-[rgba(31,26,20,0.95)]">{advantage.title}</h3>
              <p className="mt-4 text-base leading-7 text-muted">{advantage.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center fade-in">
          <a href="#contact" className="btn-primary">
            Оставить заявку
          </a>
        </div>
      </div>
    </section>
  );
}
