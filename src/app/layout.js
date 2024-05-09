import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Quiz App',
  description:
    'Entertain and educate users with a quick quiz on any topic. Mark the correct answers and the app will automatically assign  correct answers.',
  icons: {
    icon: [
      {
        url: '/icons/logo.png',
        href: '/icons/logo.png',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
