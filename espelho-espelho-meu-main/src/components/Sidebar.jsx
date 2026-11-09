import {
  FiArrowRight,
  FiTrendingUp,
  FiStar,
  FiFilm
} from 'react-icons/fi'

function Sidebar() {
  return (
    <aside className="sidebar">

      {/* Mistério da Semana */}
      <section className="sidebar__mystery">
        <span className="sidebar__label">
          <FiStar /> MISTÉRIO DA SEMANA
        </span>

        <h2>O segredo por trás de Inception</h2>

        <p>
          Qual é o verdadeiro significado do final
          desse filme?
        </p>

        <a href="#mistério" className="sidebar__link">
          Descobrir <FiArrowRight />
        </a>
      </section>

      {/* Conteúdos populares */}
      <section className="sidebar__trending">
        <h3>
          <FiTrendingUp /> Em alta no Cinegram
        </h3>

        <div className="trending__item">
          <span>01</span>
          <p>A origem do logo da Pixar</p>
        </div>

        <div className="trending__item">
          <span>02</span>
          <p>10 curiosidades sobre O Senhor dos Anéis</p>
        </div>

        <div className="trending__item">
          <span>03</span>
          <p>A magia por trás do Studio Ghibli</p>
        </div>
      </section>

      {/* Explorar categorias */}
      <section className="sidebar__explore">
        <FiFilm />

        <div>
          <h3>Explore o cinema</h3>
          <p>Descubra novas histórias e curiosidades.</p>
        </div>

        <FiArrowRight />
      </section>

    </aside>
  )
}

export default Sidebar
