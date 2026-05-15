export default function NotFound() {
  return (
    <main style={{ textAlign: 'center', padding: '4rem 2rem' }}>
      <h1 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>404</h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Page not found</p>
      <a href="/" style={{ color: 'var(--accent)' }}>← Return to Home</a>
    </main>
  )
}