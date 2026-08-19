import SectionTitle from '../components/common/SectionTitle';
import { Home, Users, FileSignature, Scale, Briefcase, ChevronRight, FileText } from 'lucide-react';
import { useState } from 'react';

export default function Services() {
    const [activeModal, setActiveModal] = useState(null);

    const categories = [
        {
            id: 'property',
            title: 'Property Documentation',
            icon: <Home size={32} />,
            desc: 'Expert legal support for property transactions, verification, and name transfer.',
            services: [
                { name: 'Sale Deed', detail: 'Preparation of Sale Deed for buying & selling of Residential / Commercial Properties.' },
                { name: 'Agreement to Sell / Purchase', detail: 'Drafting of Agreement to Sell or Purchase with complete legal guidance.' },
                { name: 'Title Search & Verification', detail: 'Comprehensive search and verification of title, ownership & legal status of the property.' },
                { name: 'Mutation & Name Transfer', detail: 'Legal assistance for Mutation, Name Transfer and all related property corrections.' },
                { name: 'Commercial Property Documentation', detail: 'Legal documentation for commercial property buying, selling, lease, agreements and related matters.' },
                { name: 'Stamp Duty & Registration Assistance', detail: 'Complete guidance in stamp duty calculation and property registration process.' },
                { name: 'Other Property Document Work', detail: 'All other property related legal documentation and advisory services.' }
            ]
        },
        {
            id: 'marriage-family',
            title: 'Marriage, Divorce & Relationship Matters',
            icon: <Users size={32} />,
            desc: 'Legal support for marriage registration, divorce proceedings, and live-in agreements.',
            services: [
                { name: 'Marriage Registration & Certificate', detail: 'Hassle-free marriage registration for Hindu, Special Marriage Act, Inter-religion & NRI marriages. Get your legally valid Marriage Certificate.' },
                { name: 'Marriage Certificate Attestation', detail: 'We help you attest your Marriage Certificate for all official purposes in India and abroad.' },
                { name: 'Divorce by Mutual Consent', detail: 'Complete legal assistance for mutual consent divorce with minimum time and hassle.' },
                { name: 'Divorce Deed Drafting', detail: 'Professional drafting of Divorce Deed with proper terms and legal validity.' },
                { name: 'Live-in Relationship Agreement', detail: 'Drafting legally valid Live-in Relationship Agreement to protect rights and avoid future disputes.' }
            ]
        },
        {
            id: 'will-poa',
            title: 'Will & Related Documents',
            icon: <FileSignature size={32} />,
            desc: 'Safeguard your assets with legally sound Wills, Gift Deeds, and POAs.',
            services: [
                { name: 'Power of Attorney', detail: 'Preparation of Power of Attorney for property and personal matters in India.' },
                { name: 'Revocation of POA', detail: 'Drafting and documentation for revocation (cancellation) of Power of Attorney.' },
                { name: 'Will', detail: 'Drafting a legally valid Will to protect your assets and secure your loved ones\' future.' },
                { name: 'Will in Favour of Multiple Beneficiaries', detail: 'Creating Will documents for multiple beneficiaries as per your wishes.' },
                { name: 'Simple Will', detail: 'Simple and effective Will drafting for individual needs.' },
                { name: 'Codicil to Will', detail: 'Drafting Codicil to Will for amendments or additions to an existing Will.' },
                { name: 'Property Will', detail: 'Specialized Will for immovable property as per your requirements.' },
                { name: 'Gift Deed', detail: 'Drafting and registration of Gift Deed for transfer of movable and immovable property.' },
                { name: 'Consumer Complaints Notice', detail: 'Drafting and serving legal notice for consumer complaints and related matters.' }
            ]
        },
        {
            id: 'rent-lease',
            title: 'Rent & Lease Agreements',
            icon: <Briefcase size={32} />,
            desc: 'Comprehensive drafting of residential, commercial, and specific rental agreements.',
            services: [
                { name: 'Rent & Lease Agreement', detail: 'Professional drafting for secure landlord-tenant relations.' },
                { name: 'Flat & House Rental Agreement', detail: 'Drafting residential agreements tailored for flats and houses.' },
                { name: 'Commercial Office & Shop Rental Agreement', detail: 'Specialized lease agreements for corporate environments.' },
                { name: 'Room Rental Agreement', detail: 'Simple agreements for room allocation.' },
                { name: 'Office Sharing Agreement', detail: 'Formulating co-working and office sharing contracts.' },
                { name: 'Car Parking Agreement', detail: 'Clear conditions for assigned parking space leasing.' },
                { name: 'Settlement of Rental Agreement', detail: 'Closure and settlement documentation for rentals.' },
                { name: 'Commercial Lease Agreement', detail: 'Extensive leasing documentation for large commercial properties.' },
                { name: 'Leave and Licence Agreement', detail: 'Standardized Leave and Licence framework.' },
                { name: 'Quick Rental & Residential Lease', detail: 'Streamlined agreements for quick execution.' }
            ]
        },
        {
            id: 'govt-docs',
            title: 'Documentation & Government Services',
            icon: <FileText size={32} />,
            desc: 'Efficient execution of government documentation, affidavits, and notary services.',
            services: [
                { name: 'Affidavit & Stamp Notary', detail: 'Preparation of all types of affidavits and notary services with proper legal formalities.' },
                { name: 'AMC & UGVCL Name Change', detail: 'Assistance in AMC and UGVCL name change with complete documentation support.' },
                { name: 'Banakhat & Dastavej', detail: 'Drafting Banakhat and other important documents with accuracy and legal validity.' },
                { name: 'Pedhinama (Pedigree Certificate)', detail: 'Drafting Pedhinama for family arrangements and Will for secure future planning.' },
                { name: 'Certified True Copy', detail: 'Providing certified true copy of documents for official and legal use.' },
                { name: 'Translation Services', detail: 'Professional translation of legal documents in Gujarati, Hindi and English.' },
                { name: 'Legal Drafting & Documentation', detail: 'Ensure all contracts and agreements hold proper legal weight.' },
                { name: 'Other Legal Consultancy', detail: 'All other legal consultancy and documentation work as per your requirements.' }
            ]
        }
    ];

    return (
        <div>
            <section style={{
                padding: '10rem 0 6rem',
                backgroundColor: 'var(--color-black)',
                color: 'var(--color-white)',
                textAlign: 'center'
            }}>
                <div className="container slide-up">
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontFamily: 'var(--font-secondary)', color: 'var(--color-white)', marginBottom: '1.5rem', fontWeight: '400' }}>
                        Our Legal Practice Areas
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--color-gray)', maxWidth: '700px', margin: '0 auto' }}>
                        Specialized legal services reflecting excellence, accuracy, and clear guidance.
                    </p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                        gap: '2.5rem'
                    }}>
                        {categories.map((cat) => (
                            <div key={cat.id} style={{
                                padding: '3rem 2.5rem',
                                backgroundColor: 'var(--color-white)',
                                border: '1px solid var(--color-light-gray)',
                                transition: 'all var(--transition-normal)',
                                cursor: 'pointer',
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                                className="service-card"
                                onClick={() => setActiveModal(cat)}
                            >
                                <div style={{ color: 'var(--color-gold)', marginBottom: '2rem' }}>
                                    {cat.icon}
                                </div>
                                <h3 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-secondary)', marginBottom: '1rem', color: 'var(--color-black)' }}>{cat.title}</h3>
                                <p style={{ color: 'var(--color-gray)', marginBottom: '2rem', flexGrow: 1, lineHeight: '1.6' }}>{cat.desc}</p>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    color: 'var(--color-gold)',
                                    fontWeight: '600',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px',
                                    fontSize: '0.875rem'
                                }}>
                                    View Services <ChevronRight size={18} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal */}
            {activeModal && (
                <div style={{
                    position: 'fixed',
                    top: 0, left: 0, width: '100vw', height: '100vh',
                    backgroundColor: 'rgba(10,10,10,0.85)',
                    backdropFilter: 'blur(5px)',
                    zIndex: 9999,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '2rem'
                }} onClick={() => setActiveModal(null)}>
                    <div style={{
                        backgroundColor: 'var(--color-white)',
                        padding: '4rem 3rem',
                        maxHeight: '90vh',
                        overflowY: 'auto',
                        maxWidth: '700px',
                        width: '100%',
                        position: 'relative'
                    }} onClick={e => e.stopPropagation()}>
                        <button
                            onClick={() => setActiveModal(null)}
                            style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'none', border: 'none', fontSize: '2rem', cursor: 'pointer', color: 'var(--color-gray)' }}
                        >&times;</button>
                        <div style={{ color: 'var(--color-gold)', marginBottom: '1.5rem' }}>{activeModal.icon}</div>
                        <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-secondary)', marginBottom: '2rem', color: 'var(--color-black)' }}>{activeModal.title}</h2>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {activeModal.services.map((srv, idx) => (
                                <div key={idx} style={{ paddingBottom: '1.5rem', borderBottom: '1px solid var(--color-light-gray)' }}>
                                    <h4 style={{ fontSize: '1.125rem', color: 'var(--color-black)', marginBottom: '0.5rem' }}>{srv.name}</h4>
                                    <p style={{ color: 'var(--color-gray)', margin: 0, lineHeight: '1.6' }}>{srv.detail}</p>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            )}

            <style>{`
        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
          border-color: var(--color-gold);
        }
      `}</style>
        </div>
    );
}
