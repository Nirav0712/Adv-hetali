import Button from './Button';

export default function CTASection({ title, subtitle, buttonText, buttonLink }) {
    return (
        <section className="section-padding bg-dark text-center" style={{ padding: '6rem 1.5rem' }}>
            <div className="container slide-up">
                <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1rem', color: 'var(--color-white)' }}>{title}</h2>
                {subtitle && (
                    <p style={{
                        fontSize: '1.125rem',
                        color: 'var(--color-light-gray)',
                        marginBottom: '2rem',
                        maxWidth: '600px',
                        margin: '0 auto 2.5rem'
                    }}>
                        {subtitle}
                    </p>
                )}
                <Button to={buttonLink} variant="primary" style={{ padding: '1rem 2.5rem', fontSize: '1.05rem' }}>
                    {buttonText}
                </Button>
            </div>
        </section>
    );
}
