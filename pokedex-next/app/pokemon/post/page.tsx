'use client';

import { useState } from 'react';

export default function NovoPokemon() {
  const [nome, setNome] = useState('');
  const [tipo, setTipo] = useState('');
  const [mensagem, setMensagem] = useState('');

  const cadastrar = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const resposta = await fetch('http://localhost:5124/api/personagem', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nome, tipo })
      });

      if (!resposta.ok) throw new Error('Erro ao cadastrar');

      setMensagem('Pokémon cadastrado com sucesso!');
      setNome('');
      setTipo('');
    } catch (err: any) {
      setMensagem(err.message);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Cadastrar Novo Pokémon</h1>
      <form onSubmit={cadastrar}>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="text"
          placeholder="Tipo"
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </form>
      {mensagem && <p>{mensagem}</p>}
    </div>
  );
}
