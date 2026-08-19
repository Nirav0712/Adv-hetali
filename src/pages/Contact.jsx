import { useState, useRef } from 'react';
import SEO from '../components/SEO';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });
    const [formStatus, setFormStatus] = useState('');
    const formRef = useRef(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if form is valid using HTML5 validation
        if (formRef.current && !formRef.current.checkValidity()) {
            formRef.current.reportValidity();
            return;
        }

        // Additional manual check
        if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.service || !formData.message.trim()) {
            return;
        }

        // Get the text of the selected option
        const selectElement = document.getElementById('service');
        const selectedServiceText = selectElement.options[selectElement.selectedIndex].text;

        const whatsappMessage = `Hello Advocate Hetali H. Prajapati,

I would like to schedule a legal consultation.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service: ${selectedServiceText}

Message:
${formData.message}

Thank you.`;

        const encodedMessage = encodeURIComponent(whatsappMessage);
        const whatsappUrl = `https://wa.me/916351447212?text=${encodedMessage}`;

        setFormStatus('success');
        window.open(whatsappUrl, '_blank');

        setTimeout(() => setFormStatus(''), 8000);
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    };

    return (
        <div>
            <SEO
                title="Contact Advocate in Ahmedabad | Legal Consultation | Hetali H. Prajapati"
                description="Get in touch with Advocate Hetali H. Prajapati for professional legal consultation and solutions in Ahmedabad. Schedule your appointment today."
                url="/contact"
            />
            <section style={{
                padding: '10rem 0 6rem',
                backgroundColor: 'var(--color-black)',
                color: 'var(--color-white)',
                textAlign: 'center'
            }}>
                <div className="container slide-up">
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontFamily: 'var(--font-secondary)', color: 'var(--color-white)', marginBottom: '1.5rem', fontWeight: '400' }}>
                        Contact Us
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--color-gray)', maxWidth: '700px', margin: '0 auto' }}>
                        Get in touch for expert legal advice and schedule your consultation.
                    </p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem' }}>

                        {/* Contact Details */}
                        <div style={{ flex: '1 1 350px' }}>
                            <SectionTitle title="Get in Touch" subtitle="We're Here to Help" />
                            <p style={{ color: 'var(--color-gray)', fontSize: '1.125rem', marginBottom: '3rem', lineHeight: '1.8' }}>
                                We understand that legal situations can be pressing. Contact us today, and our dedicated team will respond promptly to assist you with your case.
                            </p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>

                                <div style={{ display: 'flex', gap: '1.5rem' }}>
                                    <div style={{ color: 'var(--color-gold)', marginTop: '4px' }}>
                                        <MapPin size={28} />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontFamily: 'var(--font-secondary)', color: 'var(--color-black)' }}>Satellite Office</h4>
                                        <p style={{ color: 'var(--color-gray)', lineHeight: '1.6' }}>5, Shivam Appartment, near Vastrapur Railway station road, Satellite, Prahalad Nagar, Ahmedabad 380015.</p>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '1.5rem' }}>
                                    <div style={{ color: 'var(--color-gold)', marginTop: '4px' }}>
                                        <MapPin size={28} />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontFamily: 'var(--font-secondary)', color: 'var(--color-black)' }}>Bodakdev Office</h4>
                                        <p style={{ color: 'var(--color-gray)', lineHeight: '1.6' }}>01C, Sarthik 2, Near Kiran Motors, Bodakdev, Ahmedabad – 380015.</p>
                                    </div>
                                </div>

                                <a href="tel:+916351447212" className="contact-link" style={{ display: 'flex', gap: '1.5rem', textDecoration: 'none' }}>
                                    <div className="contact-icon-wrapper" style={{ marginTop: '4px' }}>
                                        <Phone size={28} />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontFamily: 'var(--font-secondary)', color: 'var(--color-black)' }}>Phone</h4>
                                        <p className="contact-text-hover" style={{ color: 'var(--color-gray)' }}>+91 63514 47212</p>
                                    </div>
                                </a>

                                <a href="mailto:hhprajapati15@gmail.com" className="contact-link" style={{ display: 'flex', gap: '1.5rem', textDecoration: 'none' }}>
                                    <div className="contact-icon-wrapper" style={{ marginTop: '4px' }}>
                                        <Mail size={28} />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontFamily: 'var(--font-secondary)', color: 'var(--color-black)' }}>Email</h4>
                                        <p className="contact-text-hover" style={{ color: 'var(--color-gray)' }}>hhprajapati15@gmail.com</p>
                                    </div>
                                </a>

                            </div>
                        </div>

                        {/* Contact Form */}
                        <div style={{ flex: '1 1 500px', backgroundColor: 'var(--color-white)', padding: '3.5rem', border: '1px solid var(--color-light-gray)', boxShadow: '0 20px 40px rgba(0,0,0,0.03)' }}>
                            <h3 style={{ fontSize: '2rem', fontFamily: 'var(--font-secondary)', marginBottom: '2rem', color: 'var(--color-black)' }}>Schedule a Consultation</h3>
                            {formStatus === 'success' && (
                                <div style={{ padding: '1.25rem', backgroundColor: '#F7F5EF', color: '#C6A15B', border: '1px solid #D8BD82', marginBottom: '2rem', fontSize: '0.95rem', fontWeight: '500' }}>
                                    Your consultation request is ready on WhatsApp.
                                </div>
                            )}
                            <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div>
                                    <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '0.95rem' }}>Full Name *</label>
                                    <input type="text" id="name" value={formData.name} onChange={handleChange} required style={{ width: '100%', padding: '1rem', border: '1px solid var(--color-light-gray)', outline: 'none', backgroundColor: 'var(--color-off-white)' }} />
                                </div>
                                <div>
                                    <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                                        <div style={{ flex: '1 1 200px' }}>
                                            <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '0.95rem' }}>Email Address *</label>
                                            <input type="email" id="email" value={formData.email} onChange={handleChange} required style={{ width: '100%', padding: '1rem', border: '1px solid var(--color-light-gray)', outline: 'none', backgroundColor: 'var(--color-off-white)' }} />
                                        </div>
                                        <div style={{ flex: '1 1 200px' }}>
                                            <label htmlFor="phone" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '0.95rem' }}>Phone Number *</label>
                                            <input type="tel" id="phone" value={formData.phone} onChange={handleChange} required pattern="[0-9+\s\-]{10,15}" title="Please enter a valid phone number" style={{ width: '100%', padding: '1rem', border: '1px solid var(--color-light-gray)', outline: 'none', backgroundColor: 'var(--color-off-white)' }} />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="service" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '0.95rem' }}>Select Service *</label>
                                    <select id="service" value={formData.service} onChange={handleChange} required style={{ width: '100%', padding: '1rem', border: '1px solid var(--color-light-gray)', outline: 'none', backgroundColor: 'var(--color-off-white)' }}>
                                        <option value="" disabled>Select a legal service...</option>
                                        <option value="property">Property Documentation</option>
                                        <option value="marriage">Marriage Registration</option>
                                        <option value="divorce">Divorce &amp; Family Matters</option>
                                        <option value="affidavit">Affidavits &amp; Notary</option>
                                        <option value="will">Will &amp; Power of Attorney</option>
                                        <option value="rent">Rent &amp; Lease Agreements</option>
                                        <option value="banakhat">Banakhat &amp; Legal Documentation</option>
                                        <option value="govt">Revenue &amp; Government Services</option>
                                        <option value="consultancy">Legal Consultancy</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '0.95rem' }}>Message *</label>
                                    <textarea id="message" value={formData.message} onChange={handleChange} rows="5" required style={{ width: '100%', padding: '1rem', border: '1px solid var(--color-light-gray)', outline: 'none', resize: 'vertical', backgroundColor: 'var(--color-off-white)' }}></textarea>
                                </div>
                                <Button type="submit" variant="primary" style={{ width: '100%', marginTop: '1rem', padding: '1.25rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                    Submit Request
                                </Button>
                            </form>
                        </div>

                    </div>
                </div>
            </section>

            {/* Map Placeholder */}
            {/* <section style={{ height: '400px', backgroundColor: 'var(--color-off-white)', position: 'relative' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', color: 'var(--color-gray)' }}>
                    <MapPin size={48} style={{ marginBottom: '1.5rem', color: 'var(--color-gold)' }} />
                    <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-secondary)', fontWeight: '500', color: 'var(--color-black)' }}>Interactive Map Integration Available</h3>
                    <p style={{ marginTop: '0.5rem' }}>This section is reserved for the Google Maps iframe placeholder.</p>
                </div>
            </section> */}

            <style>{`
                .contact-icon-wrapper {
                    color: var(--color-gold);
                    transition: transform var(--transition-fast);
                }
                .contact-text-hover {
                    transition: color var(--transition-fast), text-decoration var(--transition-fast);
                }
                .contact-link:hover .contact-icon-wrapper {
                    transform: scale(1.1);
                }
                .contact-link:hover .contact-text-hover {
                    color: var(--color-gold) !important;
                    text-decoration: underline;
                }
            `}</style>
        </div>
    );
}
