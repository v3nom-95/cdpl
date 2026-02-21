export default function Platform() {
    return (
        <section id="technology" className="about-section">
            <div className="container">
                <h2 className="section-title">Technological Core</h2>
                <p className="section-subtitle">A unified operating system for across Air, Ground, and Marine autonomous operations.</p>

                <div className="about-content">
                    <div className="about-text">
                        <h4>TACTICAL EDGE INTELLIGENCE</h4>
                        <p>
                            MAS redefines battlefield awareness by integrating <strong>Sensor Fusion</strong> with standard-setting open architecture defense software. Our platforms are designed for the modern operational environment—high-stress, GPS-denied, and demanding zero-trust architecture.
                        </p>
                        <p>
                            From <strong>specialized Attritable Trainer Systems</strong> to <strong>real-time Group 2 UAS</strong>, our technology provides a common operational picture—enabling seamless interoperability and decisive algorithmic warfare.
                        </p>
                        <div className="platform-features">
                            <div className="feat-item">Modular Sensors</div>
                            <div className="feat-item">Edge AI Processing</div>
                            <div className="feat-item">BVLOS Ready</div>
                        </div>

                        <a href="#products" className="btn btn-outline" style={{ marginTop: '2rem' }}>Explore Systems</a>
                    </div>

                    <div className="about-stats">
                        <div className="stat-card">
                            <h3>100%</h3>
                            <p>Indigenous Tech</p>
                        </div>
                        <div className="stat-card">
                            <h3>24/7</h3>
                            <p>Mission Ready</p>
                        </div>
                        <div className="stat-card">
                            <h3>IP67</h3>
                            <p>Field Rugged</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
