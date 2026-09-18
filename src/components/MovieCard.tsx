import { Bookmark, Plus, Star } from 'lucide-react';
import type { Movie } from '../data/movies';

type MovieCardProps = {
  movie: Movie;
  index: number;
  isFavorite: boolean;
  onOpen: (movie: Movie) => void;
  onToggleFavorite: (id: number) => void;
  variant?: 'archive' | 'new';
};

export function MovieCard({ movie, index, isFavorite, onOpen, onToggleFavorite, variant = 'archive' }: MovieCardProps) {
  return (
    <article className={`movie-card ${variant === 'new' ? 'movie-card-new' : ''}`} onClick={() => onOpen(movie)}>
      <div className="poster-wrap">
        <img src={movie.poster} alt={`${movie.title} poster`} loading="lazy" />
        <div className="poster-shade" />
        <span className="card-index">{String(index + 1).padStart(2, '0')}</span>
        <button className={isFavorite ? 'save-card is-saved' : 'save-card'} aria-label={isFavorite ? `Remove ${movie.title} from list` : `Save ${movie.title}`} type="button" onClick={(event) => { event.stopPropagation(); onToggleFavorite(movie.id); }}>{isFavorite ? <Bookmark size={15} fill="currentColor" /> : <Plus size={16} />}</button>
        <div className="card-hover-meta"><span>{movie.genre[0]}</span><span>{movie.runtime} min</span></div>
      </div>
      <div className="card-info">
        <div><h3>{movie.title}</h3><p>{movie.director} <span>/</span> {movie.year}</p></div>
        <div className="rating"><Star size={11} fill="currentColor" /> {movie.rating.toFixed(1)}</div>
      </div>
    </article>
  );
}
