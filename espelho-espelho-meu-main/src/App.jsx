
import { useState } from 'react'
import { FiHeart, FiHome, FiPlusSquare, FiSearch, FiUser } from 'react-icons/fi'

import Header from './components/Header'
import Categories from './components/Categories'
import Sidebar from './components/Sidebar'
import Post from './components/Post'

import posts from './data/posts.json'
import './App.css'

function App() {
  const [pesquisa, setPesquisa] = useState('')
  const [pesquisaAberta, setPesquisaAberta] = useState(false)

  function alternarPesquisa() {
    const novoEstado = !pesquisaAberta

    setPesquisaAberta(novoEstado)

    if (!novoEstado) {
      setPesquisa('')
    }
  }

  const postsFiltrados = posts.filter((post) => {
    const conteudo = `${post.user} ${post.caption} ${post.alt}`

    return conteudo.toLowerCase().includes(pesquisa.toLowerCase())
  })

  return (
    <div className="app">
      <Header
        pesquisa={pesquisa}
        onPesquisaChange={setPesquisa}
        pesquisaAberta={pesquisaAberta}
        onAlternarPesquisa={alternarPesquisa}
      />

      <Categories />

      <div className="page-layout">
        <main className="feed" aria-label="Feed de publicações">

          {postsFiltrados.length > 0 ? (
            postsFiltrados.map((post) => (
              <Post key={post.id} post={post} />
            ))
          ) : (
            <p className="search__empty">
              Nenhuma publicação encontrada para "{pesquisa}".
            </p>
          )}

        </main>

        <Sidebar />
      </div>

      <nav className="mobile-nav" aria-label="Navegação móvel">
        <button type="button" aria-label="Início">
          <FiHome />
        </button>

        <button
          type="button"
          aria-label="Pesquisar"
          aria-expanded={pesquisaAberta}
          onClick={alternarPesquisa}
        >
          <FiSearch />
        </button>

        <button type="button" aria-label="Criar publicação">
          <FiPlusSquare />
        </button>

        <button type="button" aria-label="Atividades">
          <FiHeart />
        </button>

        <button type="button" aria-label="Perfil">
          <FiUser />
        </button>
      </nav>
    </div>
  )
}

export default App
