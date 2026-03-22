import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Crypto Exchange | Офлайн криптообмен в Улан-Удэ и Чите',
  description:
    'Офлайн обмен USDT, BTC и ETH, международные платежи и сопровождение сделки в Улан-Удэ и Чите.',
  keywords: [
    'криптообмен',
    'USDT',
    'BTC',
    'ETH',
    'Улан-Удэ',
    'Чита',
    'международные платежи',
  ],
  authors: [{ name: 'Crypto Exchange' }],
  openGraph: {
    title: 'Crypto Exchange | Офлайн криптообмен',
    description:
      'Офлайн обмен криптовалюты и международные расчеты с личным сопровождением.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <a href="#main" className="skip-link">
          Перейти к содержимому
        </a>
        {children}
      </body>
    </html>
  );
}
