import { ChevronDown, Search, SlidersHorizontal } from 'lucide-react';
import { genres, years } from '../data/movies';

type FilterBarProps = {
  activeGenre: string;
  activeYear: string;
  sortBy: string;
  query: string;
  onGenreChange: (value: string) => void;
  onYearChange: (value: string) => void;
  onSortChange: (value: string) => void;
  onQueryChange: (value: string) => void;
};

export function FilterBar({ activeGenre, activeYear, sortBy, query, onGenreChange, onYearChange, onSortChange, onQueryChange }: FilterBarProps) {
  return (
    <div className="filter-wrap">
      <div className="filter-label"><SlidersHorizontal size={14} /> Curate the archive</div>
      <div className="filter-controls">
        <label className="search-field"><Search size={16} /><input value={query} onChange={(event) => onQueryChange(event.target.value)} placeholder="Title, director, mood..." /></label>
        <label className="select-field"><span>Genre</span><select value={activeGenre} onChange={(event) => onGenreChange(event.target.value)}>{genres.map((genre) => <option key={genre}>{genre}</option>)}</select><ChevronDown size={14} /></label>
        <label className="select-field"><span>Period</span><select value={activeYear} onChange={(event) => onYearChange(event.target.value)}>{years.map((year) => <option key={year}>{year}</option>)}</select><ChevronDown size={14} /></label>
        <label className="select-field sort-field"><span>Sort</span><select value={sortBy} onChange={(event) => onSortChange(event.target.value)}><option value="curated">Curated</option><option value="newest">Newest</option><option value="rating">Rating</option><option value="title">Title</option></select><ChevronDown size={14} /></label>
      </div>
    </div>
  );
}
