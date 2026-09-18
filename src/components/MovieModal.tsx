import { Bookmark, Clock3, Star, X } from 'lucide-react';
import type { Movie } from '../data/movies';

type MovieModalProps = {
  movie: Movie;
  isFavorite: boolean;
  onClose: () => void;
  onToggleFavorite: (id: number) => void;
};

export function MovieModal({ movie, isFavorite, onClose, onToggleFavorite }: MovieModalProps) {
  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <div className="movie-modal" role="dialog" aria-modal="true" aria-label={`${movie.title} details`} onMouseDown={(event) => event.stopPropagation()}>
        <button className="modal-close" type="button" aria-label="Close details" onClick={onClose}><X size={20} /></button>
        <div className="modal-image"><img src={movie.poster} alt={`${movie.title} poster`} /></div>
        <div className="modal-copy">
          <p className="modal-kicker">Film no. {String(movie.id).padStart(2, '0')} <span>·</span> {movie.genre[0]}</p>
          <h2>{movie.title}</h2>
          <p className="modal-original">{movie.originalTitle}</p>
          <div className="modal-meta"><span>{movie.year}</span><i /><span>{movie.director}</span><i /><span><Clock3 size={14} /> {movie.runtime} min</span><i /><span className="modal-rating"><Star size={13} fill="currentColor" /> {movie.rating.toFixed(1)}</span></div>
          <p className="modal-synopsis">{movie.synopsis}</p>
          <div className="genre-pills">{movie.genre.map((genre) => <span key={genre}>{genre}</span>)}</div>
          <button className={isFavorite ? 'button button-red is-saved' : 'button button-red'} type="button" onClick={() => onToggleFavorite(movie.id)}><Bookmark size={15} fill={isFavorite ? 'currentColor' : 'none'} /> {isFavorite ? 'Saved to my list' : 'Save to my list'}</button>
          <p className="modal-note">Part of the Cinema Archive collection · curated 2024</p>
        </div>
      </div>
    </div>
  );
}
