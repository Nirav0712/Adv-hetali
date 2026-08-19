import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import SectionTitle from '../components/common/SectionTitle';
import { ArrowRight } from 'lucide-react';
import { blogData } from '../data/blogData';

export default function Blog() {
    return (
        <div className="fade-in">
            <SEO
                title="Legal Information & Guidance | Ahmedabad | Blog | Advocate Hetali H. Prajapati"
                description="Read legal insights, guidelines, and information on property laws, marriage registration, family law, agreements, and government documentation in Ahmedabad."
                url="/blog"
            />
            <section style={{
                padding: '10rem 0 6rem',
                backgroundColor: 'var(--color-black)',
                color: 'var(--color-white)',
                textAlign: 'center'
            }}>
                <div className="container slide-up">
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontFamily: 'var(--font-secondary)', color: 'var(--color-white)', marginBottom: '1.5rem', fontWeight: '400' }}>
                        Legal Insights
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--color-gray)', maxWidth: '700px', margin: '0 auto' }}>
                        Information and guidelines on common legal queries and documentation.
                    </p>
                </div>
            </section>

            <section className="section-padding bg-off-white">
                <div className="container">

                    <SectionTitle title="Latest Articles & Insights" />

                    {/* Blog Grid */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                        gap: '3rem'
                    }}>
                        {blogData.map((post) => (
                            <div key={post.id} style={{
                                backgroundColor: 'var(--color-white)',
                                border: '1px solid var(--color-light-gray)',
                                transition: 'all var(--transition-normal)',
                                display: 'flex',
                                flexDirection: 'column'
                            }} className="blog-card">

                                {post.image && (
                                    <div style={{ width: '100%', height: '220px', overflow: 'hidden' }}>
                                        <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} className="blog-img" />
                                    </div>
                                )}

                                <div style={{ padding: '2.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                                        <span style={{ color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.75rem', fontWeight: '600' }}>{post.tag}</span>
                                        <span style={{ fontSize: '0.875rem', color: 'var(--color-gray)' }}>{post.date}</span>
                                    </div>
                                    <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-secondary)', marginBottom: '1rem', lineHeight: '1.4', color: 'var(--color-black)' }}>{post.title}</h3>
                                    <p style={{ color: 'var(--color-gray)', marginBottom: '2rem', fontSize: '1rem', lineHeight: '1.7', flexGrow: 1 }}>{post.excerpt}</p>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                                        <Link to={`/blog/${post.slug}`} style={{ color: 'var(--color-black)', borderBottom: '1px solid var(--color-black)', paddingBottom: '2px', fontWeight: '500', fontSize: '0.875rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }} className="read-more-link">
                                            Read More <ArrowRight size={14} />
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>

                </div>
            </section>

            <style>{`
        .fade-in {
          animation: simpleFadeIn ease-in-out forwards;
          animation-duration: 0.6s;
        }
        @keyframes simpleFadeIn {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .blog-card {
           cursor: default;
        }
        .blog-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.05);
          border-color: var(--color-gold) !important;
        }
        .blog-card:hover .blog-img {
          transform: scale(1.05);
        }
        .read-more-link {
          transition: color var(--transition-fast), border-color var(--transition-fast);
        }
        .read-more-link:hover {
          color: var(--color-gold) !important;
          border-color: var(--color-gold) !important;
        }
      `}</style>
        </div>
    );
}
