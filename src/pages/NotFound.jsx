import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function NotFound() {
    return (
        <div style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '2rem' }}>
            <SEO
                title="Page Not Found | Advocate Hetali H. Prajapati"
                description="The page you are looking for does not exist."
                url="/404"
            />
            <h1 style={{ fontSize: '6rem', fontFamily: 'var(--font-secondary)', color: 'var(--color-gold)', marginBottom: '1rem', lineHeight: '1' }}>404</h1>
            <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-secondary)', color: 'var(--color-black)', marginBottom: '1.5rem' }}>Page Not Found</h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--color-gray)', marginBottom: '3rem', maxWidth: '600px' }}>
                The legal page or document you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <Link to="/" style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1rem 2.5rem',
                backgroundColor: 'var(--color-black)',
                color: 'var(--color-white)',
                textDecoration: 'none',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                fontWeight: '500',
                transition: 'background var(--transition-fast)'
            }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-gold)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-black)'}
            >
                Return to Homepage
            </Link>
        </div>
    );
}
