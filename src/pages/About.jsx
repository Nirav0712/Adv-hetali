import SectionTitle from '../components/common/SectionTitle';
import CTASection from '../components/common/CTASection';
import { Shield, Target, Award, Users, CheckCircle } from 'lucide-react';

export default function About() {
    return (
        <div>
            {/* Hero */}
            <section style={{
                padding: '10rem 0 6rem',
                backgroundColor: 'var(--color-black)',
                color: 'var(--color-white)',
                textAlign: 'center'
            }}>
                <div className="container slide-up" style={{ maxWidth: '800px' }}>
                    <span style={{
                        color: 'var(--color-gold)',
                        textTransform: 'uppercase',
                        letterSpacing: '3px',
                        fontWeight: '600',
                        marginBottom: '1.5rem',
                        display: 'block'
                    }}>
                        About Advocate Hetali H. Prajapati
                    </span>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontFamily: 'var(--font-secondary)', color: 'var(--color-white)', marginBottom: '1.5rem', fontWeight: '400' }}>
                        Professional Legal Solutions with Integrity & Excellence
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--color-gray)', margin: '0 auto', textTransform: 'uppercase', letterSpacing: '1px' }}>
                        B.Com., LL.B. (Gold Medalist) <br /> Advocate | Legal Advisor | Documentation Expert
                    </p>
                </div>
            </section>

            {/* Introduction */}
            <section className="section-padding">
                <div className="container">
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }}>
                        <div style={{ flex: '1 1 500px' }}>
                            <SectionTitle title="Your Rights. Our Responsibility." subtitle="Professional Profile" />
                            <p style={{ fontSize: '1.125rem', color: 'var(--color-gray)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                                We provide professional legal solutions with a focus on integrity, excellence, and dedication. Our practice is built on ensuring that your personal and property matters receive the legal support they require. We don't just understand the law, we uphold justice.
                            </p>
                            <p style={{ fontSize: '1.125rem', color: 'var(--color-gray)', lineHeight: '1.8' }}>
                                Specializing in property-related documentation, marriage registration, divorce & family matters, Will & Power of attorney, rent & lease agreements, and comprehensive legal and government documentation services.
                            </p>
                        </div>
                        <div style={{ flex: '1 1 400px', backgroundColor: 'var(--color-off-white)', padding: '3rem', borderLeft: '4px solid var(--color-gold)' }}>
                            <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-secondary)', marginBottom: '1.5rem', color: 'var(--color-black)' }}>Focus Areas</h3>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {['Legal Assistance', 'Property-Related Legal Services', 'Personal / Legal Matters', 'Government Documentation', 'Legal Consultancy', 'Documentation Expert'].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.125rem', color: 'var(--color-dark-black)' }}>
                                        <CheckCircle size={20} color="var(--color-gold)" style={{ flexShrink: 0 }} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Philosophy */}
            <section className="section-padding bg-off-white">
                <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
                    <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-secondary)', marginBottom: '2rem', color: 'var(--color-black)', fontStyle: 'italic' }}>
                        "We draft today for a secure tomorrow. Your Trust, Our Commitment."
                    </h2>
                    <p style={{ fontSize: '1.125rem', color: 'var(--color-gray)', lineHeight: '1.8' }}>
                        Your property, our responsibility. Your personal matters, our legal support. Together for a stronger tomorrow. Committed to excellence. Trusted for results.
                    </p>
                </div>
            </section>

            <CTASection
                title="Ready to discuss your case?"
                buttonText="Schedule a Consultation"
                buttonLink="/contact"
            />
        </div>
    );
}
