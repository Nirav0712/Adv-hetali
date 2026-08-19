export default function SectionTitle({ title, subtitle, centered = false }) {
    return (
        <div style={{ textAlign: centered ? 'center' : 'left', marginBottom: '3rem' }}>
            {subtitle && (
                <span style={{
                    color: 'var(--color-gold)',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    fontWeight: '600',
                    fontSize: '0.875rem',
                    display: 'block',
                    marginBottom: '0.5rem'
                }}>
                    {subtitle}
                </span>
            )}
            <h2 style={{ fontSize: '2.5rem', color: 'var(--color-black)', margin: 0 }}>{title}</h2>
        </div>
    );
}
