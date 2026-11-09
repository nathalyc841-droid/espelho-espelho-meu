
import { useState } from 'react'
import {
  FiBookmark,
  FiHeart,
  FiMessageCircle,
  FiMoreHorizontal,
  FiSend
} from 'react-icons/fi'
import { FaBookmark } from 'react-icons/fa'

function Post({ post }) {
  const [curtido, setCurtido] = useState(false)
  const [likes, setLikes] = useState(Number(post.likes))
  const [salvo, setSalvo] = useState(false)

  const [comentariosAbertos, setComentariosAbertos] = useState(false)
  const [comentarios, setComentarios] = useState([])
  const [novoComentario, setNovoComentario] = useState('')

  function handleLike() {
    if (curtido) {
      setLikes(likes - 1)
      setCurtido(false)
    } else {
      setLikes(likes + 1)
      setCurtido(true)
    }
  }

  function handleSave() {
    setSalvo(!salvo)
  }

  function handleComment() {
    setComentariosAbertos(!comentariosAbertos)
  }

  function handleAddComment(event) {
    event.preventDefault()

    const comentarioFormatado = novoComentario.trim()

    if (comentarioFormatado === '') {
      return
    }

    setComentarios([...comentarios, comentarioFormatado])
    setNovoComentario('')
  }

  return (
    <article className="post">
      <header className="post__header">
        <img
          className="post__avatar"
          src={post.avatar}
          alt={`Foto de ${post.user}`}
        />

        <div className="post__user">
          <strong>{post.user}</strong>
          <span>{post.location}</span>
        </div>

        <button
          className="icon-button post__more"
          type="button"
          aria-label="Mais opções"
        >
          <FiMoreHorizontal />
        </button>
      </header>

      <img
        className="post__image"
        src={post.image}
        alt={post.alt}
      />

      <div className="post__content">
        <div className="post__actions">

          <button
            className={`icon-button ${curtido ? 'post__like-button--active' : ''}`}
            type="button"
            aria-label={curtido ? 'Descurtir' : 'Curtir'}
            aria-pressed={curtido}
            onClick={handleLike}
          >
            <FiHeart />
          </button>

          <button
            className="icon-button"
            type="button"
            aria-label="Comentar"
            aria-expanded={comentariosAbertos}
            onClick={handleComment}
          >
            <FiMessageCircle />
          </button>

          <button
            className="icon-button"
            type="button"
            aria-label="Enviar"
          >
            <FiSend />
          </button>

          <button
            className={`icon-button ${salvo ? 'post__save-button--active' : ''}`}
            type="button"
            aria-label={salvo ? 'Remover dos salvos' : 'Salvar'}
            aria-pressed={salvo}
            onClick={handleSave}
          >
            {salvo ? <FaBookmark /> : <FiBookmark />}
          </button>

        </div>

        <p className="post__likes">
          <strong>{likes.toLocaleString('pt-BR')} curtidas</strong>
        </p>

        <p className="post__caption">
          <strong>{post.user}</strong>{post.caption}
        </p>

        {comentariosAbertos && (
          <div className="post__comments">
            <strong>Comentários</strong>

            {comentarios.length === 0 && (
              <p className="post__empty-comments">
                Seja o primeiro a comentar!
              </p>
            )}

            {comentarios.map((comentario, index) => (
              <p className="post__comment" key={index}>
                <strong>Você:</strong> {comentario}
              </p>
            ))}

            <form
              className="post__comment-form"
              onSubmit={handleAddComment}
            >
              <input
                type="text"
                placeholder="Adicione um comentário..."
                value={novoComentario}
                onChange={(event) => setNovoComentario(event.target.value)}
              />

              <button type="submit" disabled={!novoComentario.trim()}>
                Publicar
              </button>
            </form>
          </div>
        )}
      </div>
    </article>
  )
}

export default Post
