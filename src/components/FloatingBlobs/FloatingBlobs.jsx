import './FloatingBlobs.css';

// Ambient pastel blobs fixed behind all page content.
export default function FloatingBlobs() {
  return (
    <div className="floating-blobs" aria-hidden="true">
      <span className="blob blob-pink" />
      <span className="blob blob-lavender" />
      <span className="blob blob-blue" />
      <span className="blob blob-mint" />
      <span className="blob blob-peach" />
    </div>
  );
}
