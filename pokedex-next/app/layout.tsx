import './globals.css';
import Navbar from './pokemon/navbar';

export const metadata = {
  title: 'Pokémon App',
  description: 'Aplicação de exemplo com API e Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}