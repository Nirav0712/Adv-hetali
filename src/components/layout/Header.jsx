import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Scale } from 'lucide-react';
import Button from '../common/Button';
import logo from '../../../assets/logo/logo.png';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 1000,
            backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'transparent',
            boxShadow: isScrolled ? '0 4px 30px rgba(0,0,0,0.05)' : 'none',
            transition: 'all var(--transition-normal)',
            borderBottom: isScrolled ? '1px solid var(--color-light-gray)' : '1px solid rgba(255,255,255,0.1)'
        }}>
            <div className="container" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                height: '80px'
            }}>
                {/* Logo */}
                <Link
                    to="/"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        color: isScrolled || location.pathname !== '/'
                            ? 'var(--color-black)'
                            : 'var(--color-white)',
                        fontWeight: '500',
                        fontSize: '1.25rem',
                        fontFamily: 'var(--font-secondary)',
                        textDecoration: 'none',
                        transition: 'color var(--transition-normal)'
                    }}
                >
                    <img
                        src={logo}
                        alt="Advocate Hetali H. Prajapati Logo"
                        style={{
                            height: '47px',
                            width: '47px',
                            objectFit: 'contain',
                            display: 'block'
                        }}
                    />

                    <span>Advocate <br /> Hetali H. Prajapati</span>
                </Link>

                {/* Desktop Nav */}
                <nav style={{ display: 'none' }} className="desktop-nav">
                    <ul style={{ display: 'flex', gap: '2rem', alignItems: 'center', margin: 0, padding: 0 }}>
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <NavLink
                                    to={link.path}
                                    style={({ isActive }) => ({
                                        color: isActive ? 'var(--color-gold)' : (isScrolled || location.pathname !== '/' ? 'var(--color-black)' : 'var(--color-off-white)'),
                                        textDecoration: 'none',
                                        fontWeight: isActive ? '500' : '400',
                                        fontSize: '0.95rem',
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px',
                                        transition: 'color var(--transition-fast)'
                                    })}
                                    className="nav-link"
                                >
                                    {link.name}
                                </NavLink>
                            </li>
                        ))}
                        <li>
                            <Button to="/contact" variant={isScrolled || location.pathname !== '/' ? 'primary' : 'outline'} style={{
                                padding: '0.6rem 1.5rem',
                                fontSize: '0.85rem',
                                textTransform: 'uppercase',
                                letterSpacing: '1px',
                                borderColor: isScrolled || location.pathname !== '/' ? 'transparent' : 'var(--color-white)',
                                color: isScrolled || location.pathname !== '/' ? 'var(--color-white)' : 'var(--color-white)'
                            }}
                                className="header-btn"
                            >
                                Book Consultation
                            </Button>
                        </li>
                    </ul>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="mobile-toggle"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    style={{
                        display: 'block',
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        color: isScrolled || location.pathname !== '/' ? 'var(--color-black)' : 'var(--color-white)',
                        padding: 0
                    }}
                    aria-label="Toggle Menu"
                >
                    {mobileMenuOpen ? <X size={30} color="var(--color-black)" /> : <Menu size={30} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                width: '100%',
                backgroundColor: 'var(--color-white)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                display: mobileMenuOpen ? 'flex' : 'none',
                flexDirection: 'column',
                padding: '2rem',
                borderTop: '1px solid var(--color-light-gray)'
            }}>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem' }}>
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <NavLink
                                to={link.path}
                                style={({ isActive }) => ({
                                    color: isActive ? 'var(--color-gold)' : 'var(--color-black)',
                                    textDecoration: 'none',
                                    fontWeight: isActive ? '500' : '400',
                                    fontSize: '1.25rem',
                                    fontFamily: 'var(--font-secondary)',
                                    display: 'block'
                                })}
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <Button to="/contact" variant="primary" style={{ width: '100%', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    Book Consultation
                </Button>
            </div>

            <style>{`
        @media (min-width: 1024px) {
          .desktop-nav {
            display: block !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
        .nav-link:hover {
          color: var(--color-gold) !important;
        }
        .header-btn {
          transition: all 0.3s ease;
        }
      `}</style>
        </header>
    );
}
