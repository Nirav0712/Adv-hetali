import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CornerDownRight } from 'lucide-react';
import SEO from '../components/SEO';
import { blogData } from '../data/blogData';

export default function BlogDetail() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Scroll to top automatically handled by ScrollToTop component, but adding a fade-in class triggers on mount
        setLoading(true);

        // Simulate a tiny delay for a smooth routing transition feel
        const timer = setTimeout(() => {
            const foundPost = blogData.find((b) => b.slug === slug);
            setPost(foundPost || null);
            setLoading(false);
        }, 300); // 300ms transition time

        return () => clearTimeout(timer);
    }, [slug]);

    if (loading) {
        return (
            <div style={{ minHeight: '60vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className="spinner" style={{ width: '40px', height: '40px', border: '3px solid rgba(198, 161, 91, 0.3)', borderTop: '3px solid var(--color-gold)', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
                <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
            </div>
        );
    }

    if (!post) {
        return (
            <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '2rem' }} className="fade-in">
                <h1 style={{ fontSize: '3rem', fontFamily: 'var(--font-secondary)', color: 'var(--color-black)', marginBottom: '1rem' }}>Article Not Found</h1>
                <p style={{ color: 'var(--color-gray)', fontSize: '1.25rem', marginBottom: '2rem' }}>We couldn't find the legal article you're looking for.</p>
                <button
                    onClick={() => navigate('/blog')}
                    style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 2rem', backgroundColor: 'var(--color-black)', color: 'var(--color-white)', border: 'none', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '500' }}
                >
                    <ArrowLeft size={18} /> Back to Blogs
                </button>
            </div>
        );
    }

    const relatedBlogs = blogData.filter(b => b.id !== post.id).slice(0, 3);

    const handleScrollToSection = (e, index) => {
        e.preventDefault();
        const element = document.getElementById(`section-${index}`);
        if (element) {
            const top = element.getBoundingClientRect().top + window.scrollY - 100; // Offset for sticky header
            window.scrollTo({ top, behavior: 'smooth' });
        }
    };

    return (
        <div className="fade-in" style={{ animationDuration: '0.6s' }}>
            <SEO
                title={`${post.title} | Advocate Hetali H. Prajapati`}
                description={post.excerpt}
                url={`/blog/${post.slug}`}
                type="article"
                image={post.image || 'https://advocatehetali.com/favicon.svg'}
                schema={{
                    "@context": "https://schema.org",
                    "@type": "Article",
                    "headline": post.title,
                    "description": post.excerpt,
                    "image": post.image || "https://advocatehetali.com/favicon.svg",
                    "author": {
                        "@type": "Person",
                        "name": post.author
                    },
                    "publisher": {
                        "@type": "Organization",
                        "name": "Advocate Hetali H. Prajapati",
                        "logo": {
                            "@type": "ImageObject",
                            "url": "https://advocatehetali.com/favicon.svg"
                        }
                    },
                    "mainEntityOfPage": {
                        "@type": "WebPage",
                        "@id": `https://advocatehetali.com/blog/${post.slug}`
                    }
                }}
            />
            {/* Blog Hero section */}
            <section style={{ backgroundColor: 'var(--color-black)', color: 'var(--color-white)', paddingTop: '6rem', paddingBottom: '0' }}>
                <div className="container" style={{ maxWidth: '900px' }}>

                    <button
                        onClick={() => navigate('/blog')}
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-gray)', background: 'none', border: 'none', cursor: 'pointer', marginBottom: '3rem', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '1px', transition: 'color var(--transition-fast)' }}
                        onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-gold)'}
                        onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-gray)'}
                    >
                        <ArrowLeft size={16} /> Back to Blogs
                    </button>

                    <span style={{ color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '600', fontSize: '0.875rem', border: '1px solid var(--color-gold)', padding: '0.25rem 1rem', display: 'inline-block', marginBottom: '2rem' }}>
                        {post.tag}
                    </span>

                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontFamily: 'var(--font-secondary)', lineHeight: '1.2', marginBottom: '2rem', fontWeight: '400' }}>
                        {post.title}
                    </h1>

                    <p style={{ fontSize: '1.25rem', color: 'var(--color-off-white)', lineHeight: '1.6', marginBottom: '3rem' }}>
                        {post.excerpt}
                    </p>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', paddingBottom: '4rem' }}>
                        <div>
                            <div style={{ fontWeight: '500', color: 'var(--color-white)', marginBottom: '0.25rem' }}>{post.author}</div>
                            <div style={{ fontSize: '0.875rem', color: 'var(--color-gray)' }}>{post.date} &nbsp;•&nbsp; Professional Legal Insights</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Image */}
            <div style={{ width: '100%', maxWidth: '1200px', margin: '-3rem auto 3rem', padding: '0 1rem', position: 'relative', zIndex: 10 }}>
                {post.image ? (
                    <img src={post.image} alt={post.title} style={{ width: '100%', height: 'auto', maxHeight: '600px', objectFit: 'cover', display: 'block', boxShadow: '0 30px 60px rgba(0,0,0,0.1)' }} />
                ) : (
                    <div style={{ width: '100%', height: '400px', backgroundColor: 'var(--color-dark-black)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span style={{ color: 'var(--color-gold)' }}>Legal Insights Illustration</span>
                    </div>
                )}
            </div>

            {/* Article Content Layout */}
            <section className="section-padding" style={{ paddingTop: '2rem' }}>
                <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem' }}>

                    {/* Sidebar TOC - Desktop Only */}
                    <aside className="toc-sidebar" style={{ width: '250px', flexShrink: 0 }}>
                        <div style={{ position: 'sticky', top: '100px' }}>
                            <h4 style={{ fontSize: '1rem', fontFamily: 'var(--font-secondary)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '1.5rem', color: 'var(--color-black)' }}>
                                Contents
                            </h4>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {post.content.sections.map((section, idx) => (
                                    <li key={idx}>
                                        <a
                                            href={`#section-${idx}`}
                                            onClick={(e) => handleScrollToSection(e, idx)}
                                            style={{ color: 'var(--color-gray)', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.4', display: 'flex', alignItems: 'flex-start', gap: '0.5rem', transition: 'color var(--transition-fast)' }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.color = 'var(--color-gold)';
                                                e.currentTarget.querySelector('span').style.color = 'var(--color-gold)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.color = 'var(--color-gray)';
                                                e.currentTarget.querySelector('span').style.color = 'var(--color-light-gray)';
                                            }}
                                        >
                                            <span style={{ color: 'var(--color-light-gray)', fontSize: '0.75rem', marginTop: '3px', transition: 'color var(--transition-fast)' }}>
                                                0{idx + 1}
                                            </span>
                                            {section.heading}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>

                    {/* Main Article */}
                    <article style={{ flex: '1 1 500px', maxWidth: '800px' }} className="blog-article-content">
                        <p style={{ fontSize: '1.25rem', lineHeight: '1.8', color: 'var(--color-dark-black)', marginBottom: '3rem' }}>
                            {post.content.introduction}
                        </p>

                        {post.content.sections.map((section, index) => (
                            <div key={index} id={`section-${index}`} style={{ marginBottom: '3rem', paddingTop: '1rem' }}>
                                <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-secondary)', color: 'var(--color-black)', marginBottom: '1.5rem', fontWeight: '500' }}>
                                    {section.heading}
                                </h2>
                                {section.paragraphs.map((para, i) => (
                                    <div key={i} style={{ marginBottom: '1.25rem', color: 'var(--color-gray)', lineHeight: '1.8', fontSize: '1.125rem' }}>
                                        {para.startsWith('•') ? (
                                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                                <CornerDownRight size={16} color="var(--color-gold)" style={{ flexShrink: 0, marginTop: '6px' }} />
                                                <span>{para.replace('•', '').trim()}</span>
                                            </div>
                                        ) : (
                                            <p style={{ margin: 0 }}>{para}</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </article>
                </div>
            </section>

            {/* Related Blogs */}
            <section className="section-padding bg-off-white">
                <div className="container">
                    <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-secondary)', color: 'var(--color-black)', marginBottom: '3rem', textAlign: 'center' }}>
                        Related Articles
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '3rem' }}>
                        {relatedBlogs.map((related) => (
                            <div key={related.id}
                                style={{ backgroundColor: 'var(--color-white)', padding: '2rem', border: '1px solid var(--color-light-gray)', transition: 'all var(--transition-normal)' }}
                                className="related-card"
                            >
                                <div style={{ color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.75rem', fontWeight: '600', marginBottom: '1rem' }}>
                                    {related.tag}
                                </div>
                                <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-secondary)', marginBottom: '1rem', lineHeight: '1.4', color: 'var(--color-black)' }}>
                                    {related.title}
                                </h3>
                                <p style={{ color: 'var(--color-gray)', marginBottom: '2rem', fontSize: '1rem', lineHeight: '1.6', flexGrow: 1 }}>
                                    {related.excerpt}
                                </p>
                                <Link to={`/blog/${related.slug}`} style={{ color: 'var(--color-black)', borderBottom: '1px solid var(--color-black)', paddingBottom: '2px', fontWeight: '500', fontSize: '0.875rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
                                    Read More <ArrowRight size={14} />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <style>{`
        .fade-in {
          animation: simpleFadeIn ease-in-out forwards;
        }
        @keyframes simpleFadeIn {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .related-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.05);
          border-color: var(--color-gold) !important;
        }
        @media (max-width: 991px) {
          .toc-sidebar {
            display: none !important;
          }
        }
        .blog-article-content p {
          letter-spacing: 0.1px;
        }
      `}</style>
        </div>
    );
}
