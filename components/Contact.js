'use client';

export default function Contact() {
    return (
        <section id="contact" className="about-section" style={{ paddingTop: '150px' }}>
            <div className="container">
                <h2 className="section-title">Get in Touch</h2>
                {/* <p className="section-subtitle">Connect with our mission specialists to discuss deployment and capabilities.</p> */}

                <div className="about-content" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <div className="about-text" style={{ maxWidth: '400px', width: '100%' }}>
                        {/*
                        <h4>HEADQUARTERS</h4>
                        <p>Hyderabad, Telangana, India</p>
                        <p>Our engineering team and R&D lab are strategically located to drive indigenous innovation in aerospace.</p>

                        <div className="platform-features" style={{ marginTop: '2rem' }}>
                            <div className="feat-item">+91 9494949698</div>
                            <div className="feat-item">info@cdpl.ai</div>
                        </div>

                        <div className="social-links">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                </svg>
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                            </a>
                            <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                        </div> 
                        */}

                        <ul className="contact-info-list" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', border: '1px solid var(--border-color)', borderRadius: '4px', background: 'rgba(0, 57, 166, 0.02)' }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                    </svg>
                                </div>
                                <span style={{ fontSize: '1.1rem', color: 'var(--text-primary)', fontWeight: '500' }}>+91 9494949698</span>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', border: '1px solid var(--border-color)', borderRadius: '4px', background: 'rgba(0, 57, 166, 0.02)' }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                        <polyline points="22,6 12,13 2,6"></polyline>
                                    </svg>
                                </div>
                                <a href="mailto:info@cdpl.ai" style={{ fontSize: '1.1rem', color: 'var(--text-primary)', fontWeight: '500', textDecoration: 'none' }}>info@cdpl.ai</a>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', border: '1px solid var(--border-color)', borderRadius: '4px', background: 'rgba(0, 57, 166, 0.02)' }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </div>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.1rem', color: 'var(--text-primary)', fontWeight: '500', textDecoration: 'none' }}>LinkedIn</a>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', border: '1px solid var(--border-color)', borderRadius: '4px', background: 'rgba(0, 57, 166, 0.02)' }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                    </svg>
                                </div>
                                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.1rem', color: 'var(--text-primary)', fontWeight: '500', textDecoration: 'none' }}>YouTube</a>
                            </li>
                        </ul>
                    </div>

                    <div className="about-stats">
                        {/* <form className="contact-form" style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <input type="text" placeholder="Name" className="hacker-input" style={{ background: 'rgba(0, 57, 166, 0.02)', border: '1px solid var(--border-color)', padding: '1rem', color: 'var(--text-primary)' }} />
                            <input type="email" placeholder="Email" className="hacker-input" style={{ background: 'rgba(0, 57, 166, 0.02)', border: '1px solid var(--border-color)', padding: '1rem', color: 'var(--text-primary)' }} />
                            <textarea placeholder="Message" rows="4" className="hacker-input" style={{ background: 'rgba(0, 57, 166, 0.02)', border: '1px solid var(--border-color)', padding: '1rem', color: 'var(--text-primary)' }}></textarea>
                            <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>Send Message</button>
                        </form> */}
                    </div>
                </div>
            </div>

            <style jsx>{`
                .social-links {
                    display: flex;
                    gap: 1.5rem;
                    margin-top: 2rem;
                }
                .social-links a {
                    color: var(--accent-primary) !important;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 44px;
                    height: 44px;
                    border: 1px solid var(--border-color);
                    border-radius: 4px;
                    background: rgba(0, 57, 166, 0.02);
                    transition: all 0.3s ease;
                }
                .social-links a:hover {
                    background: var(--accent-primary);
                    color: #ffffff !important;
                    transform: translateY(-3px);
                    box-shadow: 0 5px 15px rgba(0, 57, 166, 0.2);
                }
                .social-links svg {
                    transition: transform 0.3s ease;
                }
                .social-links a:hover svg {
                    transform: scale(1.1);
                }
            `}</style>
        </section>
    );
}
