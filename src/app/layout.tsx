import { Metadata } from 'next';
// import './styles.css';

export const metadata: Metadata = {
  title: {
    default: 'Next.js Practice - Codevolution',
    template: '%s | Next.js Practice',
  },
  description: 'A practice project for Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header
          style={{
            backgroundColor: 'lightblue',
            padding: '1rem',
          }}
        >
          <p>Header</p>
        </header>
        {children}
        <footer
          style={{
            backgroundColor: 'ghostwhite',
            padding: '1rem',
          }}
        >
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
