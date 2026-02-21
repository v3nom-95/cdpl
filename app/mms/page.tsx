'use client';

import Navbar from '../../components/Navbar';
import Link from 'next/link';

export default function Mms() {
    return (
        <div style={{ minHeight: '100vh', background: '#fff', color: '#000', display: 'flex', flexDirection: 'column' }}>
            <Navbar />

            <main style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 'clamp(6rem, 15vh, 10rem) 1.5rem 4rem',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Tactical grid overlay */}
                <div style={{
                    position: 'absolute', inset: 0,
                    backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.06) 1px, transparent 0)',
                    backgroundSize: '30px 30px',
                    pointerEvents: 'none'
                }} />

                {/* Corner accent — top left */}
                <div style={{ position: 'absolute', top: '6rem', left: '2rem', width: '60px', height: '60px', borderTop: '2px solid var(--accent-primary)', borderLeft: '2px solid var(--accent-primary)', opacity: 0.5 }} />
                {/* Corner accent — bottom right */}
                <div style={{ position: 'absolute', bottom: '3rem', right: '2rem', width: '60px', height: '60px', borderBottom: '2px solid var(--accent-primary)', borderRight: '2px solid var(--accent-primary)', opacity: 0.5 }} />

                <div style={{ textAlign: 'center', position: 'relative', zIndex: 2, maxWidth: '700px' }}>

                    {/* Division Logo */}
                    <div style={{
                        width: '100px', height: '100px',
                        background: '#fff',
                        borderRadius: '4px',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        margin: '0 auto 3rem',
                        padding: '1rem',
                        boxShadow: '0 0 40px rgba(0, 57, 166, 0.3)'
                    }}>
                        <img src="/partners/mmsicon.png" alt="MMS" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>

                    {/* Status tag */}
                    <div style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.7rem',
                        color: 'var(--accent-primary)',
                        letterSpacing: '4px',
                        textTransform: 'uppercase',
                        marginBottom: '1.5rem'
                    }}>
                        [ MMS // MAJOR MARINE SYSTEMS ]
                    </div>

                    {/* Main heading */}
                    <h1 style={{
                        fontSize: 'clamp(2rem, 7vw, 4rem)',
                        fontWeight: '900',
                        lineHeight: '1.1',
                        letterSpacing: '-1px',
                        marginBottom: '1.5rem',
                        color: '#000'
                    }}>
                        UNDER RESEARCH &<br />
                        <span style={{ color: 'var(--accent-primary)' }}>DEVELOPMENT</span>
                    </h1>

                    {/* Divider line */}
                    <div style={{ width: '60px', height: '2px', background: 'var(--accent-secondary)', margin: '2rem auto' }} />

                    <p style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.9rem',
                        color: 'rgba(0,0,0,0.45)',
                        lineHeight: '1.8',
                        letterSpacing: '0.5px',
                        marginBottom: '3rem'
                    }}>
                        Surface and sub-surface maritime autonomy platforms<br />
                        are currently in active development.<br />
                        Naval deployment timeline classified.
                    </p>

                    {/* Status indicators */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '2rem',
                        flexWrap: 'wrap',
                        marginBottom: '3.5rem',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.65rem',
                        color: 'rgba(0,0,0,0.3)',
                        letterSpacing: '2px'
                    }}>
                        <span>● HULL_DESIGN: ACTIVE</span>
                        <span>● SEA_TRIALS: PENDING</span>
                        <span>● COMMISSION: TBD</span>
                    </div>

                    {/* Back CTA */}
                    <Link href="/" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.8rem',
                        border: '1px solid rgba(0,0,0,0.2)',
                        padding: '0.9rem 2rem',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        letterSpacing: '2px',
                        textTransform: 'uppercase',
                        color: 'rgba(0,0,0,0.7)',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease'
                    }}
                        onMouseEnter={e => {
                            (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent-primary)';
                            (e.currentTarget as HTMLElement).style.color = '#000';
                        }}
                        onMouseLeave={e => {
                            (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,0,0,0.2)';
                            (e.currentTarget as HTMLElement).style.color = 'rgba(0,0,0,0.7)';
                        }}
                    >
                        ← Return to Home
                    </Link>
                </div>
            </main>

            {/* Minimal footer strip */}
            <div style={{
                borderTop: '1px solid rgba(0,0,0,0.06)',
                padding: '1.5rem',
                textAlign: 'center',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6rem',
                color: 'rgba(0,0,0,0.2)',
                letterSpacing: '2px'
            }}>
                CHAKRAVYUHA DYNAMICS PVT LTD // CLASSIFIED DIVISION // CLEARANCE REQUIRED
            </div>
        </div>
    );
}
