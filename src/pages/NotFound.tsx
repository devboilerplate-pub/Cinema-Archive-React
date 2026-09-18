import { MoveLeft } from 'lucide-react';
import { useLocation } from 'wouter';

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen flex flex-col justify-between" style={{ background: 'var(--paper)', color: 'var(--ink)' }}>
      <header className="site-header" style={{ position: 'relative', color: 'var(--ink)' }}>
        <a className="brand" href="/" onClick={(e) => { e.preventDefault(); setLocation('/'); }}>
          <span className="brand-mark" style={{ borderColor: 'var(--ink)' }}>CA</span>
          <span className="brand-name">Cinema<br />Archive</span>
        </a>
      </header>

      <main className="section-pad flex flex-col items-center justify-center text-center py-20">
        <div className="section-kicker mb-4" style={{ color: 'var(--red)' }}>
          00 <span style={{ width: 28, height: 1, background: 'currentColor', display: 'inline-block' }} /> Missing reel
        </div>

        <h1 style={{ font: '400 clamp(52px, 8vw, 96px)/0.92 var(--serif)', letterSpacing: '-0.06em', margin: '16px 0 12px' }}>
          Frame not<br /><em>found.</em>
        </h1>

        <p style={{ font: 'italic 16px/1.6 var(--serif)', color: 'var(--muted)', maxWidth: 460, margin: '0 auto 32px' }}>
          The projectionist couldn't locate this sequence in the collection. It may have been archived under another title or unfiled.
        </p>

        <div style={{ font: '10px var(--mono)', color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 28 }}>
          [ REEL STATUS: 404_NOT_IN_INDEX ]
        </div>

        <button
          type="button"
          onClick={() => setLocation('/')}
          className="button button-red"
        >
          <MoveLeft size={15} /> Return to archive
        </button>
      </main>

      <footer className="py-6 text-center" style={{ font: '10px var(--mono)', color: 'var(--muted)', borderTop: '1px solid var(--line)' }}>
        Cinema Archive · A living index of cinema
      </footer>
    </div>
  );
}
