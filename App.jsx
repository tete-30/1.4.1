import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const filmes = [
  {
    nome: 'O Senhor do Aneis: A Sociedade do Anel',
    lancamento: 2002,
    oscar: true,
    diretores: ['Peter Jackson'],
    generos: ['Fantasia', 'Aventura'],
  },
  {
    nome: 'Harry Potter e a Pedra Filosofal',
    lancamento: 2001,
    oscar: true,
    diretores: ['Chris Columbus'],
    generos: ['Fantasia'],
  },
  {
    nome: 'Matrix',
    oscar: true,
    lancamento: 1999,
    diretores: ['Lana Wachowski', 'Lilly Wachowski'],
    generos: ['Ação', 'Ficção Cientifica'],
  },
  {
    nome: 'Meninas Malvadas',
    oscar: false,
    lancamento: 2004,
    diretores: ['Mark Waters'],
    generos: ['Comédia'],
  }
];

function Filme({ nome, diretores }) {
  return (
    <div>
      <h4>{nome}</h4>
      <ul>{diretores.map((diretor) => (
        <li>{diretor}</li>
      ))}
      </ul>
    </div>
  )
}




  function FilmeOscar({ nome }) {
    return (
      <div>
        <h2>{nome}</h2>
      </div>
    )
  }

  function App() {
    return (
      <div>
  
        {filmes.filter(filme => filme.oscar).map(filme => (
          <FilmeOscar nome={filme.nome} />
        ))}
  
      </div>
    );

}

export default App
