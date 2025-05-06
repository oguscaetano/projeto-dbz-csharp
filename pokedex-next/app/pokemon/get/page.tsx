'use client';

import { useEffect, useState } from 'react';

type Pokemon = {
  id: number;
  nome: string;
  tipo: string;
};

export default function TodosPokemons() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [erro, setErro] = useState<string>('');

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const resposta = await fetch('http://localhost:5124/api/personagem');
        if (!resposta.ok) throw new Error('Erro ao buscar pokémons');

        const dados = await resposta.json();
        setPokemons(dados);
      } catch (err: any) {
        setErro(err.message);
      }
    };

    fetchPokemons();
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Lista de Pokémons</h1>
      {erro && <p style={{ color: 'red' }}>{erro}</p>}
      <ul>
        {pokemons.map(p => (
          <li key={p.id}>
            #{p.id} - {p.nome} ({p.tipo})
          </li>
        ))}
      </ul>
    </div>
  );
}
