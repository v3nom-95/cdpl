export const products = {
    'raven': {
        name: "RAVEN",
        tagline: "UAV SIMULATOR · TRAINER SERIES",
        brand: "MAS",
        category: "SIMULATOR",
        description: "Plug-and-play UAV simulation system for structured multi-platform drone training.",
        longDescription: "RAVEN is a plug-and-play UAV simulation system designed for structured multi-platform drone training. The system supports FPV, rotary, and fixed-wing mission environments with realistic terrain rendering and physics-based simulation, enabling risk-free mastery of complex aerial maneuvers.",
        heroSpecs: [
            { label: "Display", value: "27\" Curved" },
            { label: "Computing", value: "14th Gen i5" },
            { label: "Graphics", value: "RTX 3050" },
            { label: "System", value: "Plug-and-Play" }
        ],
        performanceMetrics: [
            { label: "PHYSICS_ACCURACY", value: 98, unit: "%" },
            { label: "LATENCY", value: 2, unit: "ms" },
            { label: "RENDER_QUALITY", value: 95, unit: "%" },
            { label: "TRAINING_ROI", value: 100, unit: "%" }
        ],
        featureCards: [
            {
                title: "Immersive Visuals",
                description: "27-inch Curved High-Refresh Display for tactical environmental awareness and depth perception."
            },
            {
                title: "High-Core Performance",
                description: "Powered by 14th Gen Intel i5 and NVIDIA RTX 3050 for lag-free, high-fidelity physics."
            },
            {
                title: "Complete Training Kit",
                description: "Integrated FPV goggles, radio transmitter, and built-in UPS backup for uninterrupted sessions."
            }
        ],
        variants: [
            { 
                id: "raven-trainer",
                variant: "RAVEN Simulator System", 
                type: "Professional UAV Trainer", 
                description: "The complete simulation solution for modern UAV operators.",
                keyHighlights: [
                    "27-inch Curved High-Refresh Display",
                    "Intel i5 (14th Gen) Performance Core",
                    "NVIDIA RTX 3050 (8GB Graphics)",
                    "16GB RAM | 1TB SSD",
                    "Integrated FPV Goggles & Radio Transmitter",
                    "Built-in UPS Backup",
                    "Pre-Loaded Licensed Simulation Software"
                ],
                capabilities: ["Multi-Platform Sim", "FPV Mastery", "Mission Planning"],
                applications: ["New Pilot Training", "Mission Profile Testing", "Advanced Acro Drills"],
                performance: { },
                gallery: ["/partners/r1.png", "/partners/r2.jpeg", "/partners/r3.jpeg"]
            }
        ],
        specs: [
            { label: "Display", value: "27\" Curved Refresh" },
            { label: "Controller", value: "Integrated Radio" },
            { label: "Backup", value: "Built-in UPS" },
            { label: "Software", value: "Multi-UAV Licensed" }
        ],
        features: [
            "Realistic Physics Engine",
            "Support for FPV/Fixed/Rotary",
            "High-Fidelity Terrain Rendering",
            "Plug-and-Play Setup",
            "Comprehensive Mission Log"
        ],
        imageClass: "product-image-sim",
        nickname: "MAESTRO",
        galleryImages: [
            "/partners/r1.png",
            "/partners/r2.jpeg",
            "/partners/r3.jpeg"
        ],
        whatsappNumber: "919494949698"
    },
    'bard': {
        name: "B.A.R.D.",
        tagline: "GROUP 2 UAS · TACTICAL AUTONOMY",
        brand: "MAS",
        category: "ISR",
        description: "Autonomous quadcopter for day/night surveillance, ISR, and precision reconnaissance with multi-payload support.",
        longDescription: "BARD V2.0 is a mission-critical Autonomous Aerial System engineered for persistent battlefield intelligence. The platform supports multiple variants ranging from standard day surveillance to advanced thermal imaging with Laser Range Finding (LRF) and specialized payload release capabilities.",
        heroSpecs: [
            { label: "Endurance", value: "60m" },
            { label: "Range", value: "5km" },
            { label: "Altitude", value: "800m" },
            { label: "Frame", value: "690mm" }
        ],
        performanceMetrics: [
            { label: "AUTONOMY_LOGIC", value: 95, unit: "%" },
            { label: "RELIABILITY_INDEX", value: 98, unit: "%" },
            { label: "THERMAL_ACCURACY", value: 92, unit: "%" },
            { label: "PAYLOAD_EFFICIENCY", value: 90, unit: "%" }
        ],
        featureCards: [
            {
                title: "Multi-Mission Payload",
                description: "Interchangeable payloads supporting EO/IR sensors, Laser Range Finders, and 2kg tactical release systems."
            },
            {
                title: "Rugged Design",
                description: "Optimized 690mm frame built for high-altitude deployment and mission-ready durability in contested environments."
            },
            {
                title: "Tactical ISR",
                description: "Integrated AI processing for target acquisition, tracking, and post-strike assessment in real-time."
            }
        ],
        variants: [
            { 
                id: "day-moonlight",
                variant: "Day & Moonlight", 
                type: "ISR Drone", 
                description: "A compact, autonomous quadcopter ISR platform designed for day & moonlight night surveillance, DOOAF, perimeter security, and anti-infiltration operations. Integrates EO imaging, long-range real-time video transmission, autonomous navigation, and military-grade failsafe architecture for sustained operation in high-wind, high-altitude, and extreme temperature environments.",
                keyHighlights: [
                    "Endurance: ~60 Minutes",
                    "Range: ~3–4 km",
                    "Cruise Speed: 12–14 m/s | Top Speed: 15–18 m/s",
                    "Wind Resistance: 33–40 km/h",
                    "Launch Altitude: ~3000 ft AMSL | Max Flight Altitude: ≥500 ft AGL",
                    "EO Payload: 2K QHD, 30x Hybrid Zoom",
                    "3-Axis Stabilized Gimbal",
                    "Dual GPS Setup",
                    "Manual & Autonomous Flight Modes, Waypoint Navigation, Guided Mode",
                    "Auto Take-off / Auto Landing / RTH",
                    "GCS: 7-inch Android, integrated RC, Video & Telemetry",
                    "Operating Temperature: –10°C to +55°C",
                    "Signatures: Visible – Low | Acoustic – Low"
                ],
                capabilities: ["Day & Moonlight EO Imaging", "30x Hybrid Zoom", "Autonomous Navigation", "Dual GPS Redundancy"],
                applications: ["Day & Night Surveillance", "Perimeter Security", "Anti-Infiltration Operations", "DOOAF"],
                performance: { endurance: "~60m", range: "3–4km", cruiseSpeed: "12–14 m/s", topSpeed: "15–18 m/s", windResistance: "33–40 km/h" },
                gallery: ["/partners/bard1.png", "/partners/bard2.jpeg", "/partners/bard3.png"]
            },
            { 
                id: "day-night-thermal-basic",
                variant: "Day & Night (Thermal Basic)", 
                type: "ISR Drone", 
                description: "A compact, autonomous quadcopter ISR platform designed for day & night surveillance, perimeter security, and anti-infiltration operations. Integrates EO and Thermal imaging, long-range real-time video transmission, autonomous navigation, and military-grade failsafe architecture for sustained operation in high-wind, high-altitude, and extreme temperature environments.",
                keyHighlights: [
                    "Endurance: ~60 Minutes",
                    "Range: ~3–4 km",
                    "Cruise Speed: 12–14 m/s | Top Speed: 15–18 m/s",
                    "Wind Resistance: 33–40 km/h",
                    "Launch Altitude: ~3000 ft AMSL | Max Flight Altitude: ≥500 ft AGL",
                    "EO Payload (Day): 2K FHD Recording, 1280×720 Transmission, ≥4x Digital Zoom",
                    "Thermal Payload (Night): ≥384×288 px, Multi-Palette, Detection up to ~0.50 km",
                    "Human-sized target detection at ≥100 m",
                    "3-Axis Stabilized Gimbal",
                    "Dual GPS Setup",
                    "Manual & Autonomous Flight Modes, Waypoint Navigation, Guided Mode",
                    "Auto Take-off / Auto Landing / RTH",
                    "GCS: 7-inch Android, integrated RC, Video & Telemetry",
                    "Operating Temperature: –10°C to +55°C",
                    "Signatures: Visible – Low | Acoustic – Low"
                ],
                capabilities: ["Day EO + Night Thermal", "Multi-Palette Thermal Display", "Autonomous Navigation", "Dual GPS Redundancy"],
                applications: ["Day & Night Surveillance", "Perimeter Security", "Anti-Infiltration Operations", "Search & Rescue"],
                performance: { endurance: "~60m", range: "3–4km", cruiseSpeed: "12–14 m/s", topSpeed: "15–18 m/s", windResistance: "33–40 km/h" },
                gallery: ["/partners/bard2.jpeg", "/partners/bard1.png", "/partners/bard3.png"]
            },
            { 
                id: "thermal-advanced-lrf",
                variant: "Day & Night (Thermal Advanced) + LRF", 
                type: "ISR Drone", 
                description: "A compact, autonomous quadcopter ISR platform designed for day & night surveillance with laser rangefinding, perimeter security, and anti-infiltration operations. Integrates EO and Thermal imaging, long-range real-time video transmission, autonomous navigation, and military-grade failsafe architecture for sustained operation in high-wind, high-altitude, and extreme temperature environments.",
                keyHighlights: [
                    "Endurance: ~60 Minutes",
                    "Range: ~3–4 km",
                    "Cruise Speed: 12–14 m/s | Top Speed: 15–18 m/s",
                    "Wind Resistance: 33–40 km/h",
                    "Launch Altitude: ~3000 ft AMSL | Max Flight Altitude: ≥500 ft AGL",
                    "EO Payload (Day): 2K Recording, 30x Digital Zoom",
                    "Thermal Payload: 640×512 sensor, Multi-Palette, Detection ~1 km",
                    "Laser Rangefinder: Range ~5 m to 1 km, Accuracy ±1 m",
                    "Dual GPS Setup",
                    "Manual & Autonomous Flight Modes, Waypoint Navigation, Guided Mode",
                    "Auto Take-off / Auto Landing / RTH",
                    "GCS: 7-inch Android, integrated RC, Video & Telemetry",
                    "Operating Temperature: –10°C to +55°C",
                    "Signatures: Visible – Low | Acoustic – Low"
                ],
                capabilities: ["Advanced Thermal 640×512", "Laser Rangefinder (5m–1km)", "30x Digital Zoom", "Autonomous Navigation"],
                applications: ["Precision Targeting", "Tactical Observation", "Distance Measurement", "Anti-Infiltration"],
                performance: { endurance: "~60m", range: "3–4km", cruiseSpeed: "12–14 m/s", topSpeed: "15–18 m/s", windResistance: "33–40 km/h" },
                gallery: ["/partners/bard3.png", "/partners/bard1.png", "/partners/bard2.jpeg"]
            },
            { 
                id: "thermal-advanced-ai",
                variant: "Day & Night (Thermal Advanced) + AI Tracking", 
                type: "ISR Drone", 
                description: "A compact, autonomous quadcopter DOOAF/ISR platform designed for day & night surveillance with AI tracking capabilities, perimeter security, and anti-infiltration operations. Integrates EO and Thermal imaging, long-range real-time video transmission, autonomous navigation, and military-grade failsafe architecture for sustained operation in high-wind, high-altitude, and extreme temperature environments.",
                keyHighlights: [
                    "Endurance: ~60 Minutes",
                    "Range: ~3–4 km",
                    "Cruise Speed: 12–14 m/s | Top Speed: 15–18 m/s",
                    "Wind Resistance: 33–40 km/h",
                    "Launch Altitude: ~3000 ft AMSL | Max Flight Altitude: ≥500 ft AGL",
                    "EO Payload: 2K FHD, 12x Digital Zoom",
                    "Thermal Payload: 640×512, 8x Digital Zoom, Multi-Palette",
                    "AI Tracking – Detect (person): ~700–900 m (Thermal) / ~400–500 m (EO)",
                    "Recognize (human/vehicle): ~250–400 m (Thermal) / ~100–200 m (EO)",
                    "Dual GPS Setup",
                    "Manual & Autonomous Flight Modes, Waypoint Navigation, Guided Mode",
                    "Auto Take-off / Auto Landing / RTH",
                    "GCS: 7-inch Android, integrated RC, Video & Telemetry",
                    "Operating Temperature: –10°C to +55°C",
                    "Signatures: Visible – Low | Acoustic – Low"
                ],
                capabilities: ["AI Target Tracking", "Thermal 640×512 + EO 2K", "DRI Range Analysis", "Autonomous Navigation"],
                applications: ["Asset Tracking", "Persistent Monitoring", "Automated Patrol", "Anti-Infiltration"],
                performance: { endurance: "~60m", range: "3–4km", cruiseSpeed: "12–14 m/s", topSpeed: "15–18 m/s", windResistance: "33–40 km/h" },
                gallery: ["/partners/bard1.png", "/partners/bard3.png", "/partners/bard2.jpeg"]
            },
            { 
                id: "day-mission-configured",
                variant: "Day – Grenade Dropper", 
                type: "Multi-Rotor Operational Platform", 
                description: "A compact, autonomous quadcopter ISR platform designed for day surveillance and grenade dropping, perimeter security, and anti-infiltration operations. Integrates EO imaging, long-range real-time video transmission, autonomous navigation, and military-grade failsafe architecture for sustained operation in high-wind, high-altitude, and extreme temperature environments.",
                keyHighlights: [
                    "Endurance: ~30 Minutes",
                    "Range: ~2–3 km",
                    "Cruise Speed: 8–12 m/s | Top Speed: 12–14 m/s",
                    "Wind Resistance: 35–45 km/h",
                    "Launch Altitude: ~2500 ft AMSL | Max Flight Altitude: ≥400 ft AGL",
                    "Payload: Grenade – Up to 2 kg",
                    "EO Payload (Day): 4K Ultra HD, 6x Zoom",
                    "Dual GPS Setup",
                    "Manual & Autonomous Flight Modes, Waypoint Navigation, Guided Mode",
                    "Auto Take-off / Auto Landing / RTH",
                    "GCS: 7-inch Android, integrated RC, Video & Telemetry",
                    "Operating Temperature: –10°C to +55°C",
                    "Signatures: Visible – Low | Acoustic – Low"
                ],
                capabilities: ["2 kg Grenade Payload", "4K EO Imaging", "Autonomous Navigation", "Dual GPS Redundancy"],
                applications: ["Precision Strike", "Perimeter Security", "Anti-Infiltration Operations", "Daytime ISR"],
                performance: { endurance: "~30m", range: "2–3km", cruiseSpeed: "8–12 m/s", topSpeed: "12–14 m/s", windResistance: "35–45 km/h" },
                gallery: ["/partners/bard2.jpeg", "/partners/bard3.png", "/partners/bard1.png"]
            },
            { 
                id: "day-night-mission-configured-thermal",
                variant: "Day & Night (Thermal Basic) – Grenade Dropper", 
                type: "Multi-Rotor Operational Platform", 
                description: "A compact, autonomous quadcopter ISR platform designed for day & night surveillance and grenade dropping, perimeter security, and anti-infiltration operations. Integrates EO and Thermal imaging, long-range real-time video transmission, autonomous navigation, and military-grade failsafe architecture for sustained operation in high-wind, high-altitude, and extreme temperature environments.",
                keyHighlights: [
                    "Endurance: ~30 Minutes",
                    "Range: ~2–3 km",
                    "Cruise Speed: 8–12 m/s | Top Speed: 12–14 m/s",
                    "Wind Resistance: 35–45 km/h",
                    "Launch Altitude: ~2500 ft AMSL | Max Flight Altitude: ≥400 ft AGL",
                    "Payload: Grenade – Up to 2 kg",
                    "EO Payload (Day): 2K FHD, ≥4x Digital Zoom, 3-Axis Gimbal",
                    "Thermal Payload (Night): ≥384×288 px, Multi-Palette, Detection up to ~0.50 km",
                    "Human-sized target detection at ≥100 m",
                    "Dual GPS Setup",
                    "Manual & Autonomous Flight Modes, Waypoint Navigation, Guided Mode",
                    "Auto Take-off / Auto Landing / RTH",
                    "GCS: 7-inch Android, integrated RC, Video & Telemetry",
                    "Operating Temperature: –10°C to +55°C",
                    "Signatures: Visible – Low | Acoustic – Low"
                ],
                capabilities: ["2 kg Grenade Payload", "Day EO + Night Thermal", "Multi-Palette Thermal", "Autonomous Navigation"],
                applications: ["Day & Night Strike", "Perimeter Security", "Anti-Infiltration Operations", "ISR"],
                performance: { endurance: "~30m", range: "2–3km", cruiseSpeed: "8–12 m/s", topSpeed: "12–14 m/s", windResistance: "35–45 km/h" },
                gallery: ["/partners/bard3.png", "/partners/bard2.jpeg", "/partners/bard1.png"]
            }
        ],
        specs: [
            { label: "Frame Size", value: "690mm" },
            { label: "Max AUW", value: "6.0kg" },
            { label: "Datalink", value: "Encrypted Secure" },
            { label: "Propulsion", value: "Electric Brushless" }
        ],
        features: [
            "Autonomous Waypoint Mission",
            "Object Tracking & Locking",
            "Target Geo-location Extraction",
            "Grenade Drop System Ready",
            "Anti-Jamming GNSS"
        ],
        imageClass: "product-image-bard",
        nickname: "SENTINEL",
        galleryImages: [
            "/partners/bard1.png",
            "/partners/bard2.jpeg",
            "/partners/bard3.png"
        ],
        whatsappNumber: "919494949698"
    },
    'horizon-vtol': {
        name: "HORIZON – VTOL",
        tagline: "FIXED WING VTOL · TRAINER & ISR",
        brand: "MAS",
        category: "ISR",
        description: "VTOL fixed-wing platform combining vertical takeoff with efficient cruise for extended reconnaissance.",
        longDescription: "HORIZON 120 VTOL combines vertical takeoff capability with efficient fixed-wing cruise performance. Designed for training and ISR applications, the platform supports autonomous waypoint navigation and stabilized observation. It is the premier choice for long-endurance missions without the need for runways.",
        heroSpecs: [
            { label: "Endurance", value: "30–40m" },
            { label: "Range", value: "3–4km" },
            { label: "Wingspan", value: "1200mm" },
            { label: "AUW", value: "4,000g" }
        ],
        performanceMetrics: [
            { label: "CRUISE_STABILITY", value: 92, unit: "%" },
            { label: "VTOL_PRECISION", value: 95, unit: "%" },
            { label: "ENDURANCE_RATING", value: 88, unit: "%" },
            { label: "IMAGE_STABILITY", value: 94, unit: "%" }
        ],
        featureCards: [
            {
                title: "VTOL Hybrid Configuration",
                description: "Seamless vertical takeoff and landing with the efficiency of fixed-wing horizontal cruise."
            },
            {
                title: "Stabilized Observations",
                description: "3-axis stabilized gimbal system ensures vibration-free imagery for precision reconnaissance."
            },
            {
                title: "Rapid Deployment",
                description: "Lightweight composite airframe designed for quick assembly and hand-launched/VTOL operations."
            }
        ],
        variants: [
            { 
                id: "day",
                variant: "Day – 3-Axis Nose Mount Gimbal", 
                type: "VTOL Fixed Wing ISR", 
                description: "Modular, quick-assembly VTOL Fixed Wing Aircraft designed for training missions. Equipped with a flight controller capable of autonomous waypoint navigation and stabilised manual flight, and a 3-Axis Stabilised EO Gimbal for day operations. The handheld GCS allows effortless mission planning with live video streaming.",
                keyHighlights: [
                    "Wingspan: 1,200 mm",
                    "Endurance: ~30–40 Minutes",
                    "Range: 3–4 km",
                    "Cruise Speed: 14–16 m/s | Top Speed: 20–22 m/s",
                    "AUW: 4,000 g",
                    "Launch Altitude: ~3500 ft AMSL | Max Flight Altitude: ≥600 ft AGL",
                    "Payload: 3-Axis Stabilised EO Gimbal (Day)",
                    "Resolution: 2560 x 1440 | 6x Digital Zoom",
                    "Manual & Autonomous Flight Modes, Waypoint Navigation, Guided Mode",
                    "Auto Take-off / Auto Landing / RTH",
                    "GCS: 7-inch Android, integrated RC, Video & Telemetry",
                    "Signatures: Visible – Low | Acoustic – Low"
                ],
                capabilities: ["VTOL + Fixed-Wing Cruise", "3-Axis EO Gimbal", "Autonomous Navigation", "Live Video Streaming"],
                applications: ["Daytime ISR", "UAV Pilot Training", "Perimeter Surveillance"],
                performance: { endurance: "30–40m", range: "3–4km", cruiseSpeed: "14–16 m/s", topSpeed: "20–22 m/s", auw: "4,000 g" },
                gallery: ["/partners/horizonvtol.png"]
            },
            { 
                id: "day-night",
                variant: "Day/Night – 3-Axis Nose Mount Gimbal", 
                type: "VTOL Fixed Wing ISR", 
                description: "Modular, quick-assembly VTOL Fixed Wing Aircraft designed for training missions. Equipped with a flight controller capable of autonomous waypoint navigation and stabilised manual flight, and a 3-Axis Stabilised EO/IR Gimbal for day and night operations. The handheld GCS allows effortless mission planning with live video streaming.",
                keyHighlights: [
                    "Wingspan: 1,200 mm",
                    "Endurance: ~30–40 Minutes",
                    "Range: 3–4 km",
                    "Cruise Speed: 14–16 m/s | Top Speed: 20–22 m/s",
                    "AUW: 4,000 g",
                    "Launch Altitude: ~3500 ft AMSL | Max Flight Altitude: ≥600 ft AGL",
                    "Payload: 3-Axis Stabilised EO/IR Gimbal (Day & Night)",
                    "EO Resolution: 2560 x 1440 | 4x Digital Zoom",
                    "Thermal Resolution: 384 x 288",
                    "Manual & Autonomous Flight Modes, Waypoint Navigation, Guided Mode",
                    "Auto Take-off / Auto Landing / RTH",
                    "GCS: 7-inch Android, integrated RC, Video & Telemetry",
                    "Signatures: Visible – Low | Acoustic – Low"
                ],
                capabilities: ["VTOL + Fixed-Wing Cruise", "3-Axis EO/IR Gimbal", "Thermal Imaging", "Autonomous Navigation"],
                applications: ["Day & Night ISR", "UAV Pilot Training", "Perimeter Surveillance", "BVLOS Operations"],
                performance: { endurance: "30–40m", range: "3–4km", cruiseSpeed: "14–16 m/s", topSpeed: "20–22 m/s", auw: "4,000 g" },
                gallery: ["/partners/horizonvtol.png"]
            }
        ],
        specs: [
            { label: "Wingspan", value: "1200mm" },
            { label: "Cruise Speed", value: "14–16 m/s" },
            { label: "Top Speed", value: "20–22 m/s" },
            { label: "Max Speed", value: "20–22 m/s" }
        ],
        features: [
            "Autonomous Waypoint Navigation",
            "3-Axis Stabilized Gimbal",
            "NAVIC/GPS Integration",
            "Low Acoustic Signature",
            "Portable GCS System"
        ],
        imageClass: "product-image-aot",
        nickname: "OBSERVER",
        galleryImages: [
            "/partners/horizonvtol.png"
        ],
        whatsappNumber: "919494949698"
    },
    'horizon-fpv': {
        name: "HORIZON FPV",
        tagline: "FIXED WING TRAINER · FPV SERIES",
        brand: "MAS",
        category: "TRAINER",
        description: "Hand-launched delta-wing fixed-wing trainer for FPV pilot skill development and mission familiarization.",
        longDescription: "Horizon 160 FPV is a lightweight delta-wing fixed-wing trainer designed for realistic UAV flight training and FPV mission familiarization. The hand-launch configuration enables rapid deployment without runway dependency, supporting operator skill development in navigation, recovery, and mission execution.",
        heroSpecs: [
            { label: "Endurance", value: "45m" },
            { label: "Range", value: "4km" },
            { label: "Wingspan", value: "1600mm" },
            { label: "Speed", value: "16m/s" }
        ],
        performanceMetrics: [
            { label: "AGILITY_INDEX", value: 95, unit: "%" },
            { label: "DEPLOYMENT_SPEED", value: 98, unit: "%" },
            { label: "FPV_CLARITY", value: 90, unit: "%" },
            { label: "TRAINER_RATING", value: 96, unit: "%" }
        ],
        featureCards: [
            {
                title: "Hand-Launched Efficiency",
                description: "Rapid deployment delta configuration, eliminating the need for runways or launch gear."
            },
            {
                title: "FPV Mission Skills",
                description: "2K FPV camera system designed for high-fidelity pilot training and navigation drills."
            },
            {
                title: "Safety First",
                description: "Integrated Geo-Fencing and Return-to-Home (RTH) features for safe training environments."
            }
        ],
        variants: [
            { 
                id: "160-fpv",
                variant: "Horizon 160 FPV", 
                type: "Fixed Wing Trainer", 
                description: "Hand-launched delta wing for advanced pilot mastery.",
                keyHighlights: [
                    "Hand-Launched Delta Configuration",
                    "Wingspan: 1600 mm",
                    "Endurance: Up to 35–45 Minutes",
                    "Operational Range: Up to 3–4 KM",
                    "Cruise Speed: 14–16 m/s",
                    "2K FPV Camera System",
                    "Manual Flight + Return-to-Home (RTH)",
                    "Geo-Fencing Enabled",
                    "Low Visual & Acoustic Signature"
                ],
                capabilities: ["Manual/Acro Flight", "Long Range Telemetry", "Delta-Wing Aerodynamics"],
                applications: ["FPV Pilot Training", "Area Familiarization", "Skill Development"],
                performance: { endurance: "35-45m", range: "3-4km", payload: "2K FPV" },
                gallery: ["/partners/horizonfpv.jpeg"]
            }
        ],
        specs: [
            { label: "Wingspan", value: "1600mm" },
            { label: "Cruise Speed", value: "14-16 m/s" },
            { label: "Launch", value: "Hand Launch" },
            { label: "Safety", value: "Geo-Fencing/RTH" }
        ],
        features: [
            "2K Low-Latency FPV",
            "Automatic RTH on Lost Link",
            "Eco-friendly Materials",
            "Field Repairable Delta Wing",
            "Low Operational Signature"
        ],
        imageClass: "product-image-sim",
        nickname: "MASTER",
        galleryImages: [
            "/partners/horizonfpv.jpeg"
        ],
        whatsappNumber: "919494949698"
    },
    'stinger': {
        name: "STINGER",
        tagline: "TACTICAL TRAINER · FPV PLATFORM",
        brand: "MAS",
        category: "TACTICAL",
        description: "High-agility FPV tactical platforms engineered for speed, precision intercept, and mission rehearsal.",
        longDescription: "The STINGER family represents the peak of FPV tactical training systems. Engineered for high-speed maneuvering and precision control, these platforms allow pilots to rehearse complex mission profiles in a cost-effective, high-performance architecture ranging from 7 to 15 inches.",
        heroSpecs: [
            { label: "Max Endurance", value: "35m" },
            { label: "Max Range", value: "5km" },
            { label: "Top Speed", value: "26m/s" },
            { label: "Frame Sizes", value: "5 / 7 / 10 / 15 inch" }
        ],
        performanceMetrics: [
            { label: "REACTION_SPEED", value: 99, unit: "%" },
            { label: "WIND_RESISTANCE", value: 94, unit: "%" },
            { label: "SIGNAL_STABILITY", value: 92, unit: "%" },
            { label: "MANEUVERABILITY", value: 98, unit: "%" }
        ],
        featureCards: [
            {
                title: "Exceptional Agility",
                description: "High-KV power systems enabling extreme acrobatic maneuvers and tactical intercepts."
            },
            {
                title: "Modular Payload",
                description: "Support for diverse imaging systems from 2K FPV to advanced Dual EO/Thermal gimbals."
            },
            {
                title: "Safety & Recovery",
                description: "Standard integrated Return-to-Home and Geo-Fencing protocols to protect training assets."
            }
        ],
        variants: [
            {
                id: "stinger-5",
                variant: "STINGER 5-inch – Day (Kamikaze)",
                type: "Compact FPV Kamikaze Trainer",
                description: "A compact, high-agility FPV trainer platform designed for high-speed tactical skill development and precision maneuver training. Provides realistic first-person flying experience for obstacle navigation, close-quarter maneuvering, and rapid response scenarios. Optimized for intensive training cycles with a rugged frame and modular architecture.",
                keyHighlights: [
                    "Frame Size: 5 Inch",
                    "Endurance (Mission): ~15–18 min | With Payload: ~10–12 min",
                    "AUW: 1,200 g",
                    "Cruise Speed: 10–12 m/s | Top Speed: 20–22 m/s",
                    "Range: 1–2 km",
                    "Launch Altitude: ~3000 ft AMSL | Max Flight Altitude: ≥500 ft AGL",
                    "Resolution: Analog – 2K (Static)",
                    "Radio Transmitter + FPV Goggles",
                    "Flight Modes: Stabilized / Acro / Manual",
                    "Payload Allowance: Up to ~0.5 kg (mission dependent)",
                    "RTH & Geo-Fencing",
                    "Signatures: Visible – Low | Acoustic – Low"
                ],
                capabilities: ["High-Speed Maneuvering", "Acro / Manual / Stabilized Modes", "FPV Goggles", "RTH & Geo-Fencing"],
                applications: ["Reflex Training", "Obstacle Navigation", "Close-Quarter Maneuvering", "Rapid Response Drills"],
                performance: { endurance: "15–18m", range: "1–2km", cruiseSpeed: "10–12 m/s", topSpeed: "20–22 m/s", auw: "1,200 g" },
                gallery: ["/partners/stinger.jpeg"]
            },
            { 
                id: "stinger-7",
                variant: "STINGER 7-inch – Day (Kamikaze)",
                type: "Compact FPV Kamikaze Trainer",
                description: "A compact, high-agility FPV trainer platform designed for high-speed tactical skill development and precision maneuver training. Provides realistic first-person flying experience for obstacle navigation, close-quarter maneuvering, and rapid response scenarios. Optimized for intensive training cycles with a rugged frame and modular architecture.",
                keyHighlights: [
                    "Frame Size: 7 Inch",
                    "Endurance (Mission): ~20–22 min | With Payload: ~12–15 min",
                    "AUW: 1,500 g",
                    "Cruise Speed: 14–16 m/s | Top Speed: 22–24 m/s",
                    "Range: 1–2 km",
                    "Launch Altitude: ~3000 ft AMSL | Max Flight Altitude: ≥500 ft AGL",
                    "Resolution: 2K (Static)",
                    "Radio Transmitter + FPV Goggles",
                    "Flight Modes: Stabilized / Acro / Manual",
                    "Payload Allowance: Up to ~1 kg (mission dependent)",
                    "RTH & Geo-Fencing",
                    "Signatures: Visible – Low | Acoustic – Low"
                ],
                capabilities: ["High-Speed Maneuvering", "Acro / Manual / Stabilized Modes", "FPV Goggles", "RTH & Geo-Fencing"],
                applications: ["Pilot Skill Drills", "Obstacle Navigation", "Reflex Training", "Close-Quarter Maneuvering"],
                performance: { endurance: "20–22m", range: "1–2km", cruiseSpeed: "14–16 m/s", topSpeed: "22–24 m/s", auw: "1,500 g" },
                gallery: ["/partners/stinger.jpeg"]
            },
            { 
                id: "stinger-10",
                variant: "STINGER 10-inch – Day/Night (Kamikaze)",
                type: "Extended-Endurance FPV Tactical Trainer",
                description: "A long-endurance FPV tactical trainer designed for advanced pilot training, extended-range operations, and multi-sensor payload practice. Integrates a dual-camera configuration with HD day camera and thermal imaging for realistic day/night and low-visibility training scenarios. Supports endurance-focused missions while retaining high maneuverability.",
                keyHighlights: [
                    "Frame Size: 10 Inch",
                    "Endurance (Mission): ~25–30 min | With Payload: ~15–18 min",
                    "AUW: 2,500 g",
                    "Cruise Speed: 14–16 m/s | Top Speed: 24–26 m/s",
                    "Range: 3–4 km",
                    "Launch Altitude: ~3000 ft AMSL | Max Flight Altitude: ≥500 ft AGL",
                    "Resolution: 2K (Static)",
                    "Radio Transmitter + FPV Goggles",
                    "Flight Modes: Stabilized / Acro / Manual",
                    "Payload Allowance: Up to ~2 kg (mission dependent)",
                    "RTH & Geo-Fencing",
                    "Signatures: Visible – Low | Acoustic – Low"
                ],
                capabilities: ["Day/Night Dual Camera", "Extended Range", "Multi-Mode Flight", "Heavy Payload Support"],
                applications: ["Night Familiarization", "Tactical Simulations", "Extended-Range Drills", "Multi-Sensor Training"],
                performance: { endurance: "25–30m", range: "3–4km", cruiseSpeed: "14–16 m/s", topSpeed: "24–26 m/s", auw: "2,500 g" },
                gallery: ["/partners/stinger.jpeg"]
            },
            { 
                id: "stinger-15",
                variant: "STINGER 15-inch – Day/Night Gimbal (Kamikaze)",
                type: "Heavy-Lift FPV Tactical Platform",
                description: "A high-endurance heavy-lift FPV tactical platform designed for advanced operational training, extended-range missions, and enhanced payload integration. Delivers superior stability, higher lift capacity, and longer mission endurance. Integrates dual-camera configuration with HD day imaging and thermal capability for day/night ISR-style training and low-visibility operational simulations.",
                keyHighlights: [
                    "Frame Size: 15 Inch",
                    "Endurance (Mission): ~30–35 min | With Payload: ~22–25 min",
                    "AUW: 3,500–4,000 g",
                    "Cruise Speed: 14–16 m/s | Top Speed: 24–26 m/s",
                    "Range: 4–5 km",
                    "Launch Altitude: ~3000 ft AMSL | Max Flight Altitude: ≥500 ft AGL",
                    "Resolution: 2K (Static)",
                    "Radio Transmitter + FPV Goggles",
                    "Flight Modes: Stabilized / Acro / Manual",
                    "Payload Allowance: Up to ~3 kg (mission dependent)",
                    "RTH & Geo-Fencing",
                    "Signatures: Visible – Low | Acoustic – Low"
                ],
                capabilities: ["Heavy Lift ~3 kg", "Day/Night Dual Camera", "Gimbal Stabilization", "Extended Range 4–5 km"],
                applications: ["Heavy Payload Training", "Mission Rehearsal", "ISR-Style Simulations", "Low-Visibility Operations"],
                performance: { endurance: "30–35m", range: "4–5km", cruiseSpeed: "14–16 m/s", topSpeed: "24–26 m/s", auw: "3,500–4,000 g" },
                gallery: ["/partners/stinger.jpeg"]
            }
        ],
        specs: [
            { label: "Frame Sizes", value: "5 / 7 / 10 / 15 Inch" },
            { label: "Top Speed", value: "Up to 26 m/s" },
            { label: "Max Payload", value: "Up to 3 kg" },
            { label: "Max Range", value: "Up to 5 km" }
        ],
        features: [
            "Reinforced Carbon Fiber Frame",
            "High-Output ESC Architecture",
            "Stabilized/Acro/Manual Modes",
            "Return-to-Home Protocols",
            "Rugged Field Design"
        ],
        imageClass: "product-image-hydra",
        nickname: "STRIKE",
        galleryImages: [
            "/partners/stinger.jpeg"
        ],
        whatsappNumber: "919494949698"
    },
    'aot': {
        name: "A.O.T. (Air Observer Trainer)",
        tagline: "MULTI-ROTOR · PROP GUARD SERIES",
        brand: "MAS",
        category: "TRAINER",
        description: "Compact quadcopter with integrated propeller guards for safe indoor and confined-area pilot training.",
        longDescription: "AOT (Air Observer Trainer) is a compact 7-inch quadcopter designed for structured FPV pilot training and close-proximity maneuver drills. The integrated propeller guard system enhances safety during indoor and confined-area operations, making it ideal for foundational and intermediate-level operator development.",
        heroSpecs: [
            { label: "Endurance", value: "30m" },
            { label: "Range", value: "2km" },
            { label: "Frame", value: "7\" Rugged" },
            { label: "Safety", value: "Prop Guards" }
        ],
        performanceMetrics: [
            { label: "SAFETY_RATING", value: 99, unit: "%" },
            { label: "INDOOR_AGILITY", value: 95, unit: "%" },
            { label: "DURABILITY", value: 98, unit: "%" },
            { label: "STABILITY", value: 92, unit: "%" }
        ],
        featureCards: [
            {
                title: "Safety-First Architecture",
                description: "Rugged wrap-around propeller guards designed to protect both the platform and the environment."
            },
            {
                title: "Confined Space Mastery",
                description: "Small footprint and high stability for mastering flight in GPS-denied and indoor environments."
            },
            {
                title: "Progressive Learning",
                description: "Multiple flight modes from full stabilization to manual acro for comprehensive skill building."
            }
        ],
        variants: [
            { 
                id: "aot-7",
                variant: "A.O.T. 7-inch Variant", 
                type: "Prop-Guarded Trainer", 
                description: "7-inch quadcopter designed for close-proximity maneuver training.",
                keyHighlights: [
                    "7-inch Rugged Frame with Prop Guard",
                    "Endurance: Up to 30 Minutes",
                    "Operational Range: Up to 1–2 KM",
                    "Cruise Speed: 10–12 m/s",
                    "2K FPV Camera",
                    "Stabilized / Acro / Manual Modes",
                    "Return-to-Home & Geo-Fencing",
                    "Low Visual & Acoustic Signature"
                ],
                capabilities: ["Indoor Stability", "Crash Resilience", "Obstacle Proximity"],
                applications: ["Foundational Training", "CQB Maneuvering", "Safety Familiarization"],
                performance: { endurance: "30m", range: "1-2km", payload: "2K FPV" },
                gallery: ["/partners/aot.png"]
            }
        ],
        specs: [
            { label: "Frame", value: "7 Inch Rugged Carbon" },
            { label: "Safety", value: "360 Prop Guard" },
            { label: "Propulsion", value: "Brushless Electric" },
            { label: "Video", value: "Zero-Latency 2K" }
        ],
        features: [
            "Rugged Propeller Guards",
            "Multiple Flight Skill Modes",
            "High-Intensity Visibility LED",
            "Compact Modular Build",
            "Safe Indoor Deployment"
        ],
        imageClass: "product-image-aot",
        nickname: "CADET",
        galleryImages: [
            "/partners/aot.png"
        ],
        whatsappNumber: "919494949698"
    }
};
