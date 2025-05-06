'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{
      backgroundColor: '#eee',
      padding: '1rem',
      display: 'flex',
      justifyContent: 'center',
      gap: '2rem',
      fontFamily: 'Arial',
      fontSize: '1rem',
      color: 'black'
    }}>
      <Link href="/">HOME</Link>
      <Link href="/pokemon/get">Listar</Link>
      <Link href="/pokemon/post">Cadastrar</Link>
      <Link href="/pokemon/put">Editar</Link>
      <Link href="/pokemon/delete">Deletar</Link>
    </nav>
  );
}
