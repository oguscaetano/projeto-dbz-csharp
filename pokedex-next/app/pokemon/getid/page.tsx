"use client";

import { useState } from 'react';

type Pokemon = {
  id: number;
  nome: string;
  tipo: string;
};

export default function Home() {
  const [input, setInput] = useState<string>('');
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [erro, setErro] = useState<string>('');

  const buscarPokemon = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro('');
    setPokemon(null);

    try {
      const resposta = await fetch(`http://localhost:5124/api/personagem/${input}`);

      if (!resposta.ok) {
        throw new Error('Pokémon não encontrado.');
      }

      const dados = await resposta.json();

      setPokemon({
        id: dados.id,
        nome: dados.nome,
        tipo: dados.tipo,
      });

    } catch (err: any) {
      setErro(err.message);
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial', textAlign: 'center' }}>
      <h1>Buscar Pokémon</h1>
      <br/>
      <form onSubmit={buscarPokemon}>
        <input
          type="text"
          placeholder="Digite o ID do Pokémon"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ padding: '0.5rem', width: '300px' }}
        />
        <button type="submit" style={{ padding: '0.5rem', marginLeft: '1rem' }}>
          Buscar
        </button>
      </form>

      {erro && <p style={{ color: 'red', marginTop: '30px' }}>{erro}</p>}

      {pokemon && (
        <div style={{ marginTop: '2rem' }}>
          <h2>#{pokemon.id} - {pokemon.nome}</h2>
          <p>{pokemon.tipo}</p>
        </div>
      )}
    </div>
  );
}