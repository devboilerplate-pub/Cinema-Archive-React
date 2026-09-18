import { ArrowUpRight, Bookmark } from 'lucide-react';
import type { Movie } from '../data/movies';

type MovieListProps = {
  movies: Movie[];
  favorites: number[];
  onOpen: (movie: Movie) => void;
  onToggleFavorite?: (id: number) => void;
};

export function MovieList({ movies, favorites, onOpen }: MovieListProps) {
  return (
    <div className="classic-list">
      {movies.map((movie, index) => (
        <button className="classic-row" type="button" key={movie.id} onClick={() => onOpen(movie)}>
          <span className="classic-no">{String(index + 1).padStart(2, '0')}</span>
          <img src={movie.poster} alt="" loading="lazy" />
          <span className="classic-title"><strong>{movie.title}</strong><small>{movie.originalTitle}</small></span>
          <span className="classic-director">{movie.director}</span>
          <span className="classic-year">{movie.year}</span>
          <span className="classic-genre">{movie.genre.join(' · ')}</span>
          <span className="classic-action">{favorites.includes(movie.id) ? <Bookmark size={15} fill="currentColor" /> : <ArrowUpRight size={16} />}</span>
        </button>
      ))}
    </div>
  );
}
