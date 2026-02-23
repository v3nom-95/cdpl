'use client';

export default function Contact() {
    const cards = [
        {
            id: 'phone',
            label: 'Phone',
            value: '+91 9494949698',
            href: 'tel:+919494949698',
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
            ),
        },
        {
            id: 'email',
            label: 'Email',
            value: 'info@cdpl.ai',
            href: 'mailto:info@cdpl.ai',
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                </svg>
            ),
        },
        {
            id: 'linkedin',
            label: 'LinkedIn',
            value: 'Connect with us',
            href: 'https://linkedin.com',
            external: true,
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            ),
        },
        {
            id: 'youtube',
            label: 'YouTube',
            value: 'Watch our channel',
            href: 'https://youtube.com',
            external: true,
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
            ),
        },
    ];

    return (
        <section id="contact" className="about-section" style={{ paddingTop: '150px' }}>
            <div className="container">
                <h2 className="section-title">Get in Touch</h2>

                <div className="contact-cards-grid">
                    {cards.map((card) => (
                        <a
                            key={card.id}
                            href={card.href}
                            className="contact-card"
                            target={card.external ? '_blank' : undefined}
                            rel={card.external ? 'noopener noreferrer' : undefined}
                        >
                            {/* Corner accents */}
                            <span className="corner corner-tl" />
                            <span className="corner corner-tr" />
                            <span className="corner corner-bl" />
                            <span className="corner corner-br" />

                            <div className="contact-card-icon">
                                {card.icon}
                            </div>
                            <span className="contact-card-label">{card.label}</span>
                            <span className="contact-card-value">{card.value}</span>

                            {card.external && (
                                <span className="contact-card-arrow">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M7 17L17 7M17 7H7M17 7v10" />
                                    </svg>
                                </span>
                            )}
                        </a>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .contact-cards-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 1.5rem;
                    margin-top: 3rem;
                    max-width: 960px;
                    margin-left: auto;
                    margin-right: auto;
                }

                .contact-card {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    gap: 0.75rem;
                    padding: 2.5rem 1.5rem 2rem;
                    background: rgba(0, 57, 166, 0.02);
                    border: 1px solid var(--border-color);
                    text-decoration: none;
                    color: var(--text-primary);
                    transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease, border-color 0.3s ease;
                    overflow: hidden;
                }

                .contact-card:hover {
                    transform: translateY(-6px);
                    background: rgba(0, 57, 166, 0.04);
                    border-color: var(--accent-primary);
                    box-shadow: 0 12px 40px rgba(0, 57, 166, 0.12);
                    color: var(--text-primary);
                }

                /* Animated glow bar at the top of card on hover */
                .contact-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 2px;
                    background: linear-gradient(90deg, transparent, var(--accent-primary), transparent);
                    transform: scaleX(0);
                    transition: transform 0.4s ease;
                }

                .contact-card:hover::before {
                    transform: scaleX(1);
                }

                .contact-card-icon {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 60px;
                    height: 60px;
                    border: 1px solid var(--border-color);
                    background: #fff;
                    color: var(--accent-primary);
                    transition: background 0.3s ease, color 0.3s ease, border-color 0.3s ease, transform 0.3s ease;
                    margin-bottom: 0.25rem;
                }

                .contact-card:hover .contact-card-icon {
                    background: var(--accent-primary);
                    color: #ffffff;
                    border-color: var(--accent-primary);
                    transform: scale(1.08);
                }

                .contact-card-label {
                    font-family: var(--font-mono);
                    font-size: 0.7rem;
                    letter-spacing: 0.15em;
                    text-transform: uppercase;
                    color: var(--text-tertiary);
                }

                .contact-card-value {
                    font-size: 0.95rem;
                    font-weight: 600;
                    color: var(--text-primary);
                    word-break: break-all;
                }

                .contact-card-arrow {
                    position: absolute;
                    top: 1rem;
                    right: 1rem;
                    color: var(--text-tertiary);
                    opacity: 0;
                    transform: translate(-4px, 4px);
                    transition: opacity 0.3s ease, transform 0.3s ease;
                }

                .contact-card:hover .contact-card-arrow {
                    opacity: 1;
                    transform: translate(0, 0);
                }

                /* Corner accents inherit from global .corner styles */
                .contact-card .corner {
                    transition: opacity 0.3s ease;
                    opacity: 0;
                }
                .contact-card:hover .corner {
                    opacity: 1;
                }

                @media (max-width: 900px) {
                    .contact-cards-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                @media (max-width: 520px) {
                    .contact-cards-grid {
                        grid-template-columns: 1fr 1fr;
                        gap: 1rem;
                    }
                    .contact-card {
                        padding: 1.75rem 1rem 1.5rem;
                    }
                }
            `}</style>
        </section>
    );
}
