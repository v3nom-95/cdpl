'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ResourcesComponent from '../../components/Resources';

export default function ResourcesPage() {
    return (
        <div className="resources-page" style={{ paddingTop: '100px', minHeight: '100vh', background: 'var(--bg-primary)' }}>
            <Navbar />

            {/* <ResourcesComponent /> */}

            <section className="container" style={{ padding: '4rem 2rem', textAlign: 'center' }}>
                <div style={{ marginBottom: '2rem' }}>
                    <span style={{ color: 'var(--accent-primary)', letterSpacing: '3px', fontWeight: '800', fontSize: '0.9rem', display: 'block', marginBottom: '1rem', fontFamily: 'var(--font-mono)' }}>[ FIELD DEPLOYMENT ]</span>
                    <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '900', textTransform: 'uppercase', marginBottom: '1rem', color: 'var(--text-primary)' }}>Exercise Topchi 2026</h1>
                    <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                        Watch MAS BARD in action, actively deployed and showcased during the military Exercise Topchi 2026.
                    </p>
                </div>

                <div style={{ maxWidth: '900px', margin: '0 auto', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', aspectRatio: '16/9', border: '1px solid var(--border-color)' }}>
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/PWX3_uDB7z4"
                        title="MAS BARD at Exercise Topchi 2026"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen>
                    </iframe>
                </div>
            </section>

            <Footer />
        </div>
    );
}
