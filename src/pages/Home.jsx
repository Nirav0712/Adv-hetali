import Button from '../components/common/Button';
import SEO from '../components/SEO';
import SectionTitle from '../components/common/SectionTitle';
import { Scale, Users, Home as HomeIcon, FileSignature, Landmark, ArrowRight, ShieldCheck, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
    const topServices = [
        { title: 'Property Documentation', icon: <HomeIcon size={24} />, desc: 'Sale Deed, Agreement to Sell, Title Search & Verification, Mutation & Name Transfer.' },
        { title: 'Marriage, Divorce & Family', icon: <Users size={24} />, desc: 'Marriage Registration, Mutual Consent Divorce, Divorce Deed, Live-in Agreements.' },
        { title: 'Will & Power of Attorney', icon: <FileSignature size={24} />, desc: 'Drafting Wills, Power of Attorney for property/personal matters, Gift Deeds.' },
        { title: 'Rent & Lease Agreements', icon: <FileText size={24} />, desc: 'Residential and Commercial Lease agreements, Office Sharing, and Quick Rentals.' },
        { title: 'Documentation & Govt Services', icon: <Landmark size={24} />, desc: 'Affidavits, Notary, AMC/UGVCL Name Change, Pedhinama, and Certified True Copies.' },
    ];

    return (
        <div>
            <SEO
                title="Advocate in Ahmedabad | Legal Consultant | Hetali H. Prajapati"
                description="Advocate Hetali H. Prajapati provides professional legal consultation, property documentation, marriage registration, and specialized legal services in Ahmedabad, Gujarat."
                url="/"
                schema={{
                    "@context": "https://schema.org",
                    "@type": "LegalService",
                    "name": "Advocate Hetali H. Prajapati",
                    "url": "https://advocatehetali.com",
                    "telephone": "+91 63514 47212",
                    "email": "hhprajapati15@gmail.com",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Ahmedabad",
                        "addressRegion": "Gujarat",
                        "addressCountry": "IN"
                    },
                    "founder": {
                        "@type": "Person",
                        "name": "Hetali H. Prajapati",
                        "jobTitle": "Advocate"
                    }
                }}
            />
            {/* Premium Hero Section */}
            <section style={{
                position: 'relative',
                minHeight: '100vh',
                backgroundColor: 'var(--color-black)',
                color: 'var(--color-white)',
                marginTop: '-80px',
                paddingTop: '80px',
                display: 'flex',
                alignItems: 'center',
                overflow: 'hidden'
            }}>
                <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '4rem' }}>
                        <div style={{ flex: '1 1 500px', padding: '4rem 0' }} className="slide-up">
                            <span style={{
                                color: 'var(--color-gold)',
                                textTransform: 'uppercase',
                                letterSpacing: '3px',
                                fontWeight: '500',
                                fontSize: '0.875rem',
                                marginBottom: '1.5rem',
                                display: 'block'
                            }}>
                                ADVOCATE • LEGAL ADVISOR • DOCUMENTATION EXPERT
                            </span>
                            <h1 style={{
                                fontSize: 'clamp(3.5rem, 7vw, 5.5rem)',
                                color: 'var(--color-white)',
                                fontFamily: 'var(--font-secondary)',
                                lineHeight: '1.1',
                                marginBottom: '1.5rem',
                                fontWeight: '400'
                            }}>
                                Your Rights.<br />
                                <span style={{ color: 'var(--color-light-gold)', fontStyle: 'italic' }}>Our Responsibility.</span>
                            </h1>
                            <p style={{
                                fontSize: '1.25rem',
                                color: 'var(--color-gray)',
                                maxWidth: '500px',
                                marginBottom: '2rem',
                                lineHeight: '1.8',
                                fontWeight: '300'
                            }}>
                                Professional Legal Solutions with Integrity & Excellence.
                            </p>

                            <div style={{ paddingBottom: '3rem', borderBottom: '1px solid rgba(255,255,255,0.1)', marginBottom: '3rem' }}>
                                <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-secondary)', fontWeight: '500', marginBottom: '0.5rem' }}>Advocate Hetali H. Prajapati</h3>
                                <p style={{ color: 'var(--color-gold)', letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.875rem' }}>B.Com., LL.B. (Gold Medalist)</p>
                            </div>

                            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                                <Button to="/contact" variant="primary" style={{ padding: '1rem 2.5rem', fontSize: '1rem', letterSpacing: '1px', textTransform: 'uppercase' }}>
                                    Book a Consultation
                                </Button>
                                <Button to="/services" variant="outline" style={{ padding: '1rem 2.5rem', fontSize: '1rem', borderColor: 'var(--color-gray)', color: 'var(--color-white)', letterSpacing: '1px', textTransform: 'uppercase' }}
                                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--color-gold)'; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--color-gray)'; }}
                                >
                                    Explore Legal Services
                                </Button>
                            </div>
                        </div>

                        <div style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center', position: 'relative' }} className="fade-in hero-img-col">
                            <div style={{
                                position: 'absolute',
                                top: '5%', left: '-5%', right: '5%', bottom: '-5%',
                                border: '1px solid var(--color-gold)',
                                opacity: 0.3,
                                borderRadius: '8px',
                                zIndex: 0
                            }}></div>
                            <img
                                src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1000&auto=format&fit=crop"
                                alt="Advocate Professional Setting"
                                style={{
                                    position: 'relative',
                                    zIndex: 1,
                                    borderRadius: '8px',
                                    boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
                                    objectFit: 'cover',
                                    maxHeight: '700px',
                                    width: '100%',
                                    filter: 'grayscale(20%) contrast(1.1)'
                                }}
                            />
                            <div style={{
                                position: 'absolute',
                                bottom: '-2rem',
                                right: '2rem',
                                backgroundColor: 'var(--color-white)',
                                color: 'var(--color-black)',
                                padding: '2rem',
                                borderRadius: '4px',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                                zIndex: 2,
                                maxWidth: '250px'
                            }}>
                                <div style={{ color: 'var(--color-gold)', fontSize: '0.875rem', fontWeight: '600', letterSpacing: '2px', marginBottom: '0.5rem' }}>01</div>
                                <div style={{ fontFamily: 'var(--font-secondary)', fontSize: '1.25rem', fontWeight: '600', lineHeight: '1.4' }}>JUSTICE • INTEGRITY • COMMITMENT</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', textAlign: 'center', color: 'var(--color-gray)', fontSize: '0.75rem', letterSpacing: '3px', zIndex: 2 }}>
                    SCROLL TO EXPLORE <br /><span style={{ display: 'inline-block', marginTop: '0.5rem', animation: 'slideUp 2s infinite' }}>↓</span>
                </div>
            </section>

            {/* Short About Preview */}
            <section className="section-padding bg-off-white">
                <div className="container" style={{ maxWidth: '900px', textAlign: 'center' }}>
                    <span style={{
                        color: 'var(--color-gold)',
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        fontWeight: '600',
                        fontSize: '0.875rem',
                        display: 'block',
                        marginBottom: '1rem'
                    }}>
                        ABOUT THE PRACTICE
                    </span>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--color-black)', fontFamily: 'var(--font-secondary)', marginBottom: '2rem', fontWeight: '500', lineHeight: '1.3' }}>
                        Professional Legal Guidance with Integrity & Excellence
                    </h2>
                    <p style={{ fontSize: '1.125rem', color: 'var(--color-gray)', marginBottom: '3rem', lineHeight: '1.8' }}>
                        Advocate Hetali H. Prajapati, B.Com., LL.B. (Gold Medalist), provides professional legal solutions with a focus on legal consultancy, documentation, and related legal services. We draft today for a secure tomorrow. Your Trust, Our Commitment.
                    </p>
                    <Link to="/about" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        color: 'var(--color-black)',
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        borderBottom: '2px solid var(--color-gold)',
                        paddingBottom: '4px',
                        textDecoration: 'none',
                        transition: 'color var(--transition-fast)'
                    }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-gold)'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-black)'; }}
                    >
                        Discover More About Us <ArrowRight size={18} />
                    </Link>
                </div>
            </section>

            {/* Key Services Section */}
            <section className="section-padding">
                <div className="container">
                    <SectionTitle title="Core Practice Areas" subtitle="Specialized Services" />

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '3rem' }}>
                        {topServices.map((service, i) => (
                            <div key={i} style={{
                                padding: '2.5rem',
                                backgroundColor: 'var(--color-white)',
                                border: '1px solid var(--color-light-gray)',
                                transition: 'all var(--transition-normal)',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '2rem',
                                position: 'relative',
                                overflow: 'hidden'
                            }} className="service-row">
                                <div style={{ color: 'var(--color-gold)', fontSize: '1.25rem', fontFamily: 'var(--font-secondary)', fontStyle: 'italic', opacity: '0.5', width: '30px' }}>0{i + 1}</div>
                                <div style={{ flexGrow: 1 }}>
                                    <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-secondary)', fontWeight: '500', marginBottom: '0.5rem', color: 'var(--color-black)' }}>{service.title}</h3>
                                    <p style={{ color: 'var(--color-gray)', margin: 0 }}>{service.desc}</p>
                                </div>
                                <div style={{ color: 'var(--color-gold)', transition: 'transform var(--transition-normal)' }} className="service-arrow">
                                    <ArrowRight size={24} />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                        <Button to="/services" variant="outline" style={{ color: 'var(--color-black)', borderColor: 'var(--color-black)' }}>
                            View All Legal Services &rarr;
                        </Button>
                    </div>
                </div>
            </section>

            {/* Professional Approach */}
            <section className="section-padding bg-dark" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <span style={{
                            color: 'var(--color-gold)',
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            fontWeight: '600',
                            fontSize: '0.875rem',
                            display: 'block',
                            marginBottom: '0.5rem'
                        }}>
                            Our Approach
                        </span>
                        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'var(--color-white)', margin: 0, fontFamily: 'var(--font-secondary)', fontWeight: '400', lineHeight: '1.4' }}>
                            Committed to <span style={{ color: 'var(--color-gold)' }}>Excellence.</span><br />
                            Trusted for <span style={{ color: 'var(--color-gold)' }}>Results.</span>
                        </h2>
                    </div>

                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <p style={{ fontSize: '1.5rem', fontFamily: 'var(--font-secondary)', color: 'var(--color-gold)', fontStyle: 'italic' }}>
                            "Your Rights. Our Priority. Justice. Our Commitment."
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '3rem',
                        marginTop: '2rem'
                    }}>
                        {[
                            { title: 'Integrity', desc: 'Professional legal solutions with integrity and dedication.' },
                            { title: 'Trust', desc: 'Clear and responsible legal support focused on client needs.' },
                            { title: 'Excellence', desc: 'Careful legal documentation and professional guidance.' }
                        ].map((step, i) => (
                            <div key={i} style={{
                                padding: '3rem 2rem',
                                backgroundColor: 'rgba(255,255,255,0.03)',
                                borderTop: '2px solid var(--color-gold)',
                                transition: 'background var(--transition-fast)'
                            }}>
                                <h3 style={{ fontSize: '1.5rem', color: 'var(--color-white)', fontFamily: 'var(--font-secondary)', marginBottom: '1rem' }}>{step.title}</h3>
                                <p style={{ color: 'var(--color-gray)', lineHeight: '1.6' }}>{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <style>{`
        .service-row:hover {
          border-color: var(--color-gold);
          box-shadow: 0 15px 30px rgba(0,0,0,0.05);
        }
        .service-row:hover .service-arrow {
          transform: translateX(10px);
        }
        @media (max-width: 991px) {
           .hero-img-col {
              margin-bottom: 5rem;
           }
        }
        @media (max-width: 768px) {
           .service-row {
              flex-direction: column;
              align-items: flex-start;
              gap: 1rem;
           }
        }
      `}</style>
        </div>
    );
}
