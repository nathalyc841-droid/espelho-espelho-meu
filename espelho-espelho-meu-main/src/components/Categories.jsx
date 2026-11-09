
import {
  FiEye,
  FiFilm,
  FiVideo,
  FiSearch,
  FiStar,
  FiAward
} from 'react-icons/fi'

const categorias = [
  { id: 1, nome: 'Mistérios', icone: FiEye },
  { id: 2, nome: 'Animações', icone: FiFilm },
  { id: 3, nome: 'Bastidores', icone: FiVideo },
  { id: 4, nome: 'Teorias', icone: FiSearch },
  { id: 5, nome: 'Curiosidades', icone: FiStar },
  { id: 6, nome: 'Clássicos', icone: FiAward }
]

function Categories() {
  return (
    <section className="categories" aria-label="Categorias de filmes">
      <div className="categories__list">
        {categorias.map((categoria) => {
          const Icone = categoria.icone

          return (
            <button
              className="category"
              type="button"
              key={categoria.id}
            >
              <span className="category__circle">
                <Icone />
              </span>

              <span className="category__name">
                {categoria.nome}
              </span>
            </button>
          )
        })}
      </div>
    </section>
  )
}

export default Categories
