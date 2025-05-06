'use client';

import { useState } from 'react';

export default function EditarPokemon() {
  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [tipo, setTipo] = useState('');
  const [mensagem, setMensagem] = useState('');

  const editar = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const resposta = await fetch(`http://localhost:5124/api/personagem/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: Number(id), nome, tipo })
      });

      if (!resposta.ok) throw new Error('Erro ao editar Pokémon');

      setMensagem('Pokémon editado com sucesso!');
      setId('');
      setNome('');
      setTipo('');
    } catch (err: any) {
      setMensagem(err.message);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Editar Pokémon</h1>
      <form onSubmit={editar}>
        <input
          type="text"
          placeholder="ID do Pokémon"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Novo nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="text"
          placeholder="Novo tipo"
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
        />
        <button type="submit">Salvar Alterações</button>
      </form>
      {mensagem && <p>{mensagem}</p>}
    </div>
  );
}
