import { ArrowDownRight, Bookmark, Play, Plus } from 'lucide-react';
import type { Movie } from '../data/movies';

type HeroProps = {
  movie: Movie;
  isFavorite: boolean;
  onOpen: (movie: Movie) => void;
  onToggleFavorite: (id: number) => void;
};

export function Hero({ movie, isFavorite, onOpen, onToggleFavorite }: HeroProps) {
  return (
    <section className="hero" id="top" style={{ backgroundImage: `url(${movie.backdrop})` }}>
      <div className="hero-grain" />
      <div className="hero-content">
        <div className="hero-kicker"><span className="eyebrow-line" /> Featured film <span className="hero-index">01 / 15</span></div>
        <h1>{movie.title}</h1>
        <p className="hero-deck">{movie.synopsis}</p>
        <div className="film-meta hero-meta">
          <span>{movie.year}</span><i /> <span>{movie.runtime} min</span><i /> <span>{movie.director}</span>
        </div>
        <div className="hero-actions">
          <button className="button button-light" type="button" onClick={() => onOpen(movie)}><Play size={15} fill="currentColor" /> View film</button>
          <button className={isFavorite ? 'button button-ghost is-saved' : 'button button-ghost'} type="button" onClick={() => onToggleFavorite(movie.id)}>{isFavorite ? <Bookmark size={15} fill="currentColor" /> : <Plus size={16} />} {isFavorite ? 'In my list' : 'Save film'}</button>
        </div>
      </div>
      <div className="hero-side-note"><span>CA / 2024</span><ArrowDownRight size={17} /></div>
      <div className="hero-scroll">Scroll to explore <span /></div>
    </section>
  );
}
