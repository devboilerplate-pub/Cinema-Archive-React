import { useMemo, useState } from 'react';
import { ArrowUpRight, Bookmark, Film, Mail, MoveRight, Quote } from 'lucide-react';
import { FilterBar } from '../components/FilterBar';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { MovieCard } from '../components/MovieCard';
import { MovieList } from '../components/MovieList';
import { MovieModal } from '../components/MovieModal';
import { classics, featuredMovie, getYearRange, movies, newReleases } from '../data/movies';
import type { Movie } from '../data/movies';

export default function Home() {
  const [query, setQuery] = useState('');
  const [activeGenre, setActiveGenre] = useState('All films');
  const [activeYear, setActiveYear] = useState('All years');
  const [sortBy, setSortBy] = useState('curated');
  const [favorites, setFavorites] = useState<number[]>([3, 11]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const filteredMovies = useMemo(() => {
    const [minYear, maxYear] = getYearRange(activeYear);
    const normalized = query.trim().toLowerCase();
    const result = movies.filter((movie) => {
      const matchesQuery = !normalized || [movie.title, movie.originalTitle, movie.director, ...movie.genre].join(' ').toLowerCase().includes(normalized);
      const matchesGenre = activeGenre === 'All films' || movie.genre.includes(activeGenre);
      const matchesYear = movie.year >= minYear && movie.year <= maxYear;
      return matchesQuery && matchesGenre && matchesYear;
    });
    return [...result].sort((a, b) => {
      if (sortBy === 'newest') return b.year - a.year;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'title') return a.title.localeCompare(b.title);
      return a.id - b.id;
    });
  }, [activeGenre, activeYear, query, sortBy]);

  const favoriteMovies = movies.filter((movie) => favorites.includes(movie.id));
  const toggleFavorite = (id: number) => setFavorites((current) => current.includes(id) ? current.filter((favorite) => favorite !== id) : [...current, id]);
  const goToFavorites = () => document.getElementById('favorites')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="app-shell">
      <Header favoritesCount={favorites.length} onFavoritesClick={goToFavorites} />
      <main>
        <Hero movie={featuredMovie} isFavorite={favorites.includes(featuredMovie.id)} onOpen={setSelectedMovie} onToggleFavorite={toggleFavorite} />

        <section className="intro-section section-pad">
          <div className="section-kicker">01 <span /> The archive</div>
          <div className="intro-grid">
            <h2>Films with<br /><em>a pulse.</em></h2>
            <div className="intro-copy"><p>A living index of cinema that lingers. Discover stories by mood, era, and the people who made them.</p><a href="#archive">Explore the collection <MoveRight size={17} /></a></div>
          </div>
        </section>

        <section className="new-section section-pad" id="featured">
          <div className="section-heading"><div><div className="section-kicker">02 <span /> Freshly filed</div><h2>New releases</h2></div><a className="text-link" href="#archive">View all <ArrowUpRight size={15} /></a></div>
          <div className="new-grid">
            {newReleases.map((movie, index) => <MovieCard key={movie.id} movie={movie} index={index} variant="new" isFavorite={favorites.includes(movie.id)} onOpen={setSelectedMovie} onToggleFavorite={toggleFavorite} />)}
          </div>
        </section>

        <section className="archive-section section-pad" id="archive">
          <div className="section-heading archive-heading"><div><div className="section-kicker">03 <span /> Browse by feeling</div><h2>Movie archive</h2></div><p>{filteredMovies.length.toString().padStart(2, '0')} films indexed</p></div>
          <FilterBar activeGenre={activeGenre} activeYear={activeYear} sortBy={sortBy} query={query} onGenreChange={setActiveGenre} onYearChange={setActiveYear} onSortChange={setSortBy} onQueryChange={setQuery} />
          {filteredMovies.length ? <div className="archive-grid">{filteredMovies.map((movie, index) => <MovieCard key={movie.id} movie={movie} index={index} isFavorite={favorites.includes(movie.id)} onOpen={setSelectedMovie} onToggleFavorite={toggleFavorite} />)}</div> : <div className="empty-state"><Film size={24} /><h3>Nothing in this reel.</h3><p>Try another title, genre, or period to continue exploring.</p><button className="button button-red" type="button" onClick={() => { setQuery(''); setActiveGenre('All films'); setActiveYear('All years'); }}>Reset filters</button></div>}
        </section>

        <section className="genre-section section-pad" id="genres">
          <div className="genre-stamp"><span>CA</span><small>Est.<br />2024</small></div>
          <div className="genre-content"><div className="section-kicker">04 <span /> The index</div><h2>Find your<br /><em>next feeling.</em></h2><p>Not sure what to watch? Begin with a genre and let the archive take it from there.</p><div className="genre-links">{['Drama', 'Noir', 'Romance', 'Documentary', 'Sci-Fi', 'History'].map((genre, index) => <button type="button" key={genre} onClick={() => { setActiveGenre(genre); document.getElementById('archive')?.scrollIntoView({ behavior: 'smooth' }); }}><span>0{index + 1}</span>{genre}<ArrowUpRight size={16} /></button>)}</div></div>
        </section>

        <section className="classics-section section-pad">
          <div className="section-heading"><div><div className="section-kicker">05 <span /> Deep cuts</div><h2>Archive classics</h2></div><span className="section-aside">A selection from the long reel</span></div>
          <MovieList movies={classics} favorites={favorites} onOpen={setSelectedMovie} onToggleFavorite={toggleFavorite} />
        </section>

        <section className="favorites-section section-pad" id="favorites">
          <div className="favorites-header"><div><div className="section-kicker">06 <span /> Personal collection</div><h2>My list <Bookmark size={27} fill="currentColor" /></h2></div><span>{favorites.length.toString().padStart(2, '0')} saved films</span></div>
          {favoriteMovies.length ? <div className="favorite-strip">{favoriteMovies.map((movie) => <button className="favorite-card" key={movie.id} type="button" onClick={() => setSelectedMovie(movie)}><img src={movie.poster} alt="" /><span><strong>{movie.title}</strong><small>{movie.year} · {movie.genre[0]}</small></span></button>)}</div> : <div className="favorite-empty"><p>Your private screening room is waiting.</p><button className="text-link" type="button" onClick={() => document.getElementById('archive')?.scrollIntoView({ behavior: 'smooth' })}>Browse films <ArrowUpRight size={15} /></button></div>}
        </section>

        <section className="quote-section section-pad"><Quote size={30} /><blockquote>“Cinema is a matter of what's in the frame and what's out.”</blockquote><cite>— Martin Scorsese</cite></section>
      </main>
      <footer className="site-footer"><div className="footer-brand"><span className="brand-mark">CA</span><div><strong>Cinema Archive</strong><small>A living index of cinema</small></div></div><div className="footer-newsletter"><span>Monthly dispatches from the archive</span><label><Mail size={15} /><input placeholder="Your email address" /><button aria-label="Subscribe" type="button"><ArrowUpRight size={16} /></button></label></div><div className="footer-meta"><span>© 2024 CA</span><a href="#top">Back to top ↑</a></div></footer>
      {selectedMovie && <MovieModal movie={selectedMovie} isFavorite={favorites.includes(selectedMovie.id)} onClose={() => setSelectedMovie(null)} onToggleFavorite={toggleFavorite} />}
    </div>
  );
}
