import { Bookmark, Menu, X } from 'lucide-react';
import { useState } from 'react';

type HeaderProps = {
  favoritesCount: number;
  onFavoritesClick: () => void;
};

export function Header({ favoritesCount, onFavoritesClick }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Cinema Archive home">
        <span className="brand-mark">CA</span>
        <span className="brand-name">Cinema<br />Archive</span>
      </a>
      <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Primary navigation">
        <a href="#archive" onClick={() => setMenuOpen(false)}>Archive</a>
        <a href="#genres" onClick={() => setMenuOpen(false)}>Genres</a>
        <button type="button" onClick={() => { onFavoritesClick(); setMenuOpen(false); }}>My list <span>{favoritesCount.toString().padStart(2, '0')}</span></button>
      </nav>
      <div className="header-actions">
        <button className="my-list-button" type="button" onClick={onFavoritesClick}><Bookmark size={18} fill="currentColor" /> <span>My list</span> <b>{favoritesCount.toString().padStart(2, '0')}</b></button>
        <button className="icon-button menu-toggle" type="button" aria-label="Toggle menu" onClick={() => setMenuOpen((value) => !value)}>{menuOpen ? <X size={26} /> : <Menu size={26} />}</button>
      </div>
    </header>
  );
}
