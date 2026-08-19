import Button from './Button';

export default function CTASection({ title, subtitle, buttonText, buttonLink }) {
    return (
        <section className="bg-dark text-center cta-dynamic-padding">
            <div className="container slide-up">
                <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1rem', color: 'var(--color-white)' }}>{title}</h2>
                {subtitle && (
                    <p style={{
                        fontSize: '1.125rem',
                        color: 'var(--color-light-gray)',
                        maxWidth: '600px',
                        margin: '0 auto 1.5rem'
                    }}>
                        {subtitle}
                    </p>
                )}
                <Button to={buttonLink} variant="primary" style={{ padding: '0.85rem 2rem', fontSize: '1rem' }}>
                    {buttonText}
                </Button>
            </div>
            <style>{`
                .cta-dynamic-padding {
                    padding: 6rem 1.5rem;
                }
                @media (max-width: 768px) {
                    .cta-dynamic-padding {
                        padding: 3rem 1.5rem;
                    }
                }
            `}</style>
        </section>
    );
}
