import Link from 'next/link'

export default function NotFound() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '60vh',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <svg 
        viewBox="0 0 32 32" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        width="64" 
        height="64"
        style={{ marginBottom: '1.5rem', opacity: 0.5 }}
      >
        <rect width="32" height="32" rx="6" fill="#e3b94d"/>
        <path d="M16 7L8 11v10l8 4 8-4V11l-8-4z" stroke="#1a1a1a" strokeWidth="1.5" fill="none"/>
        <path d="M16 15v6" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 17l4 2 4-2" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
      
      <h1 style={{ 
        fontSize: '4rem', 
        fontWeight: '700', 
        color: 'var(--text)',
        marginBottom: '0.5rem',
        letterSpacing: '-0.02em'
      }}>
        404
      </h1>
      
      <h2 style={{ 
        fontSize: '1.5rem', 
        fontWeight: '600', 
        color: 'var(--text)',
        marginBottom: '1rem'
      }}>
        Page not found
      </h2>
      
      <p style={{ 
        fontSize: '1rem', 
        color: 'var(--text-secondary)',
        maxWidth: '400px',
        marginBottom: '2rem'
      }}>
        The page you're looking for doesn't exist or has been moved.
        Try searching for what you need.
      </p>
      
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Link 
          href="/"
          style={{
            padding: '0.75rem 1.5rem',
            background: 'var(--accent)',
            color: 'var(--bg)',
            borderRadius: '10px',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '0.9375rem'
          }}
        >
          Back to Home
        </Link>
        <Link 
          href="/saving"
          style={{
            padding: '0.75rem 1.5rem',
            background: 'var(--bg-secondary)',
            color: 'var(--text)',
            borderRadius: '10px',
            textDecoration: 'none',
            fontWeight: '500',
            fontSize: '0.9375rem'
          }}
        >
          Browse Articles
        </Link>
      </div>
    </div>
  )
}