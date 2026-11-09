
import { FiHeart, FiHome, FiPlusSquare, FiSearch } from 'react-icons/fi'

function Header({
  pesquisa,
  onPesquisaChange,
  pesquisaAberta,
  onAlternarPesquisa
}) {
  function handleSearch() {
    onAlternarPesquisa()
  }

  return (
    <header className="header">
      <div className="texto-micro-borda">
        <span className="header__logo">Cinegram</span>
      </div>

      <nav className="header__actions" aria-label="Navegação principal">
        <button className="icon-button" type="button" aria-label="Início">
          <FiHome />
        </button>

        <button
          className="icon-button"
          type="button"
          aria-label="Pesquisar"
          aria-expanded={pesquisaAberta}
          onClick={handleSearch}
        >
          <FiSearch />
        </button>

        <button className="icon-button" type="button" aria-label="Criar publicação">
          <FiPlusSquare />
        </button>

        <button className="icon-button" type="button" aria-label="Atividades">
          <FiHeart />
        </button>
      </nav>

      {pesquisaAberta && (
        <input
          className="header__search-input"
          type="search"
          placeholder="Pesquisar filmes, usuários..."
          value={pesquisa}
          onChange={(event) => onPesquisaChange(event.target.value)}
        />
      )}
    </header>
  )
}

export default Header
