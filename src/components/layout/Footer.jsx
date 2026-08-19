import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ChevronRight, ArrowRight } from 'lucide-react';
import logo from '../../../assets/logo/logo.png';
import Button from '../common/Button';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer style={{ backgroundColor: 'var(--color-black)', color: 'var(--color-white)', position: 'relative' }}>

            {/* Top Footer CTA Strip */}
            <div style={{ borderBottom: '1px solid rgba(198, 161, 91, 0.3)', backgroundColor: 'var(--color-dark-black)' }}>
                <div className="container" style={{
                    padding: '4rem 0',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '2rem'
                }}>
                    <div style={{ flex: '1 1 500px' }}>
                        <h2 style={{
                            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                            fontFamily: 'var(--font-secondary)',
                            color: 'var(--color-white)',
                            fontWeight: '500',
                            marginBottom: '0.5rem'
                        }}>
                            Your Rights. Our Responsibility.
                        </h2>
                        <p style={{ color: 'var(--color-gray)', fontSize: '1.125rem', margin: 0 }}>
                            Professional legal guidance for your important matters.
                        </p>
                    </div>
                    <div style={{ flexShrink: 0 }}>
                        <Button to="/contact" style={{
                            padding: '1rem 2rem',
                            backgroundColor: 'var(--color-gold)',
                            color: 'var(--color-black)',
                            fontWeight: '600',
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            transition: 'all var(--transition-normal)'
                        }}
                            className="footer-cta-btn"
                        >
                            Book a Consultation <ArrowRight size={18} />
                        </Button>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="container footer-grid" style={{ paddingTop: '5rem', paddingBottom: '4rem' }}>

                {/* Column 1 - Brand */}
                <div className="footer-col">
                    <Link
                        to="/"
                        style={{
                            display: 'inline-block',
                            // marginBottom: '1.5rem',
                            textDecoration: 'none'
                        }}
                    >
                        <img
                            src={logo}
                            alt="Advocate Hetali H. Prajapati"
                            style={{
                                height: 'auto',
                                width: '120px',
                                objectFit: 'contain',
                                display: 'block'
                            }}
                        />
                    </Link>

                    <h3 style={{
                        fontFamily: 'var(--font-secondary)',
                        fontSize: '1.5rem',
                        fontWeight: '500',
                        color: 'var(--color-white)',
                        marginBottom: '0.25rem'
                    }}>
                        Advocate <br /> Hetali H. Prajapati
                    </h3>
                    <div style={{
                        color: 'var(--color-gold)',
                        fontSize: '0.85rem',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        marginBottom: '1.5rem',
                        fontWeight: '600'
                    }}>
                        B.Com., LL.B. (Gold Medalist)
                    </div>

                    <p style={{ color: 'var(--color-gray)', marginBottom: '1rem', lineHeight: '1.6', fontSize: '0.95rem' }}>
                        Professional Legal Solutions with Integrity &amp; Excellence
                    </p>
                    <p style={{ color: 'var(--color-off-white)', fontSize: '0.95rem', fontWeight: '500' }}>
                        Advocate | Legal Advisor | Documentation Expert
                    </p>
                </div>

                {/* Column 2 - Quick Links */}
                <div className="footer-col">
                    <h4 style={{
                        fontSize: '1rem',
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        color: 'var(--color-white)',
                        marginBottom: '2rem',
                        fontWeight: '600',
                        display: 'inline-block',
                        position: 'relative'
                    }}>
                        QUICK LINKS
                        <span style={{ position: 'absolute', bottom: '-8px', left: 0, width: '30px', height: '1px', backgroundColor: 'var(--color-gold)' }}></span>
                    </h4>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: 0, margin: 0, listStyle: 'none' }}>
                        {['Home', 'About Us', 'Services', 'Blog', 'Contact'].map((item) => (
                            <li key={item}>
                                <Link
                                    to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                                    className="footer-link"
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 3 - Legal Services */}
                <div className="footer-col">
                    <h4 style={{
                        fontSize: '1rem',
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        color: 'var(--color-white)',
                        marginBottom: '2rem',
                        fontWeight: '600',
                        display: 'inline-block',
                        position: 'relative'
                    }}>
                        LEGAL SERVICES
                        <span style={{ position: 'absolute', bottom: '-8px', left: 0, width: '30px', height: '1px', backgroundColor: 'var(--color-gold)' }}></span>
                    </h4>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: 0, margin: 0, listStyle: 'none' }}>
                        {[
                            'Property Documentation',
                            'Marriage & Family Matters',
                            'Will & Power of Attorney',
                            'Rent & Lease Agreements',
                            'Legal Documentation',
                            'Government Services',
                            'Legal Consultancy'
                        ].map((srv) => (
                            <li key={srv}>
                                <Link to="/services" className="footer-service-link">
                                    <ChevronRight size={14} className="service-icon" />
                                    <span>{srv}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 4 - Contact */}
                <div className="footer-col">
                    <h4 style={{
                        fontSize: '1rem',
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        color: 'var(--color-white)',
                        marginBottom: '2rem',
                        fontWeight: '600',
                        display: 'inline-block',
                        position: 'relative'
                    }}>
                        CONTACT US
                        <span style={{ position: 'absolute', bottom: '-8px', left: 0, width: '30px', height: '1px', backgroundColor: 'var(--color-gold)' }}></span>
                    </h4>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'var(--color-gray)', fontSize: '0.95rem' }}>

                        <a href="tel:+916351447212" className="footer-contact-link">
                            <div className="icon-wrap">
                                <Phone size={18} />
                            </div>
                            <span>+91 63514 47212</span>
                        </a>

                        <a href="mailto:hhprajapati15@gmail.com" className="footer-contact-link">
                            <div className="icon-wrap">
                                <Mail size={18} />
                            </div>
                            <span>hhprajapati15@gmail.com</span>
                        </a>

                        <div className="footer-contact-text">
                            <div className="icon-wrap" style={{ marginTop: '4px' }}>
                                <MapPin size={18} />
                            </div>
                            <span style={{ lineHeight: '1.6' }}>
                                <strong style={{ color: 'var(--color-white)', fontWeight: '500' }}>Bodakdev Office:</strong><br />
                                01C, Sarthik 2, Near Kiran Motors, Bodakdev, Ahmedabad – 380015
                            </span>
                        </div>

                        <div className="footer-contact-text">
                            <div className="icon-wrap" style={{ marginTop: '4px' }}>
                                <MapPin size={18} />
                            </div>
                            <span style={{ lineHeight: '1.6' }}>
                                <strong style={{ color: 'var(--color-white)', fontWeight: '500' }}>Satellite Office:</strong><br />
                                5, Shivam Appartment, near Vastrapur Railway Station Road, Satellite, Prahalad Nagar, Ahmedabad 380015
                            </span>
                        </div>

                    </div>
                </div>

            </div>

            {/* Bottom Copyright Bar */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', backgroundColor: 'var(--color-dark-black)' }}>
                <div className="container" style={{
                    padding: '1.5rem 0',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    color: 'var(--color-gray)',
                    fontSize: '0.875rem',
                    gap: '1rem'
                }}>
                    <p style={{ margin: 0 }}>&copy; {currentYear} Advocate Hetali H. Prajapati. All Rights Reserved.</p>
                    <div style={{ display: 'flex', gap: '2rem' }}>
                        <Link to="#" className="footer-bottom-link">Privacy Policy</Link>
                        <Link to="#" className="footer-bottom-link">Terms &amp; Conditions</Link>
                    </div>
                </div>
            </div>

            <style>{`
                .footer-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 3rem;
                }

                @media (max-width: 1024px) {
                    .footer-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                @media (max-width: 640px) {
                    .footer-grid {
                        grid-template-columns: 1fr;
                        gap: 3rem;
                    }
                }

                .footer-cta-btn:hover {
                    background-color: var(--color-white) !important;
                    color: var(--color-black) !important;
                    transform: translateY(-2px);
                    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
                }

                .footer-link {
                    color: var(--color-gray);
                    text-decoration: none;
                    transition: all var(--transition-fast);
                    position: relative;
                    display: inline-block;
                }
                
                .footer-link::after {
                    content: '';
                    position: absolute;
                    width: 0;
                    height: 1px;
                    bottom: -2px;
                    left: 0;
                    background-color: var(--color-gold);
                    transition: width var(--transition-fast);
                }

                .footer-link:hover {
                    color: var(--color-gold) !important;
                }

                .footer-link:hover::after {
                    width: 100%;
                }

                .footer-service-link {
                    color: var(--color-gray);
                    text-decoration: none;
                    transition: all var(--transition-fast);
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                .service-icon {
                    color: var(--color-gold);
                    opacity: 0;
                    transform: translateX(-10px);
                    transition: all var(--transition-fast);
                }

                .footer-service-link:hover {
                    color: var(--color-gold);
                    transform: translateX(5px);
                }

                .footer-service-link:hover .service-icon {
                    opacity: 1;
                    transform: translateX(0);
                }

                .footer-contact-link {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    color: var(--color-gray);
                    text-decoration: none;
                    transition: color var(--transition-fast);
                }

                .footer-contact-text {
                    display: flex;
                    align-items: flex-start;
                    gap: 1rem;
                }

                .icon-wrap {
                    color: var(--color-gray);
                    transition: color var(--transition-fast);
                    flex-shrink: 0;
                }

                .footer-contact-link:hover {
                    color: var(--color-white);
                }

                .footer-contact-link:hover .icon-wrap,
                .footer-contact-text:hover .icon-wrap {
                    color: var(--color-gold);
                }

                .footer-bottom-link {
                    color: var(--color-gray);
                    text-decoration: none;
                    transition: color var(--transition-fast);
                }

                .footer-bottom-link:hover {
                    color: var(--color-gold);
                }
            `}</style>
        </footer>
    );
}
