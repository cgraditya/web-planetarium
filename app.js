/**
 * Cosmos 3D - Interactive Solar System Simulation
 * Author: Antigravity AI
 * Technology: Three.js, Web Audio Synthesizer, Procedural Canvas Textures
 */

// --- PLANET DATA & ENCYCLOPEDIA ---
const planetsData = {
    sun: {
        name: "Matahari",
        type: "Bintang (Kelas G2V)",
        diameter: "1.392.700 km",
        mass: "333.000 Bumi",
        distance: "Pusat Tata Surya",
        temp: "~5.500 °C (Permukaan)",
        rotation: "25 Hari Bumi",
        orbit: "-",
        moons: "0",
        color: "#ffaa00",
        fact: "Matahari mencakup sekitar 99,86% dari total massa seluruh Sistem Tata Surya. Cahaya Matahari membutuhkan waktu sekitar 8 menit dan 20 detik untuk mencapai Bumi.",
        desc: "Matahari adalah bintang di pusat Tata Surya. Ia berupa bola plasma panas membara yang menghasilkan energinya melalui fusi nuklir hidrogen menjadi helium di intinya. Medan magnetnya yang dinamis memicu flare, bintik matahari, dan angin surya yang mempengaruhi seluruh sistem.",
        
        // Simulation parameters
        radiusVisual: 8.0,
        radiusReal: 20.0,
        distVisual: 0,
        distReal: 0,
        orbitSpeed: 0,
        rotateSpeed: 0.002
    },
    mercury: {
        name: "Merkurius",
        type: "Planet Terestrial",
        diameter: "4.879 km",
        mass: "0.055 Bumi",
        distance: "57,9 Juta km (0,39 AU)",
        temp: "-173 °C hingga 427 °C",
        rotation: "59 Hari Bumi",
        orbit: "88 Hari Bumi",
        moons: "0",
        color: "#9e9e9e",
        fact: "Merkurius adalah planet tercepat di tata surya, mengorbit Matahari dengan kecepatan hampir 47 km/detik. Planet ini tidak memiliki atmosfer signifikan.",
        desc: "Merkurius adalah planet terkecil di Tata Surya dan yang terdekat dengan Matahari. Karena tidak memiliki atmosfer tebal untuk menahan panas, planet ini mengalami fluktuasi suhu terekstrem di antara semua planet, dari dingin membeku di malam hari hingga sangat panas di siang hari.",
        
        // Simulation parameters
        radiusVisual: 0.8,
        radiusReal: 0.15,
        distVisual: 16,
        distReal: 32,
        orbitSpeed: 4.15,
        rotateSpeed: 0.001
    },
    venus: {
        name: "Venus",
        type: "Planet Terestrial",
        diameter: "12.104 km",
        mass: "0.815 Bumi",
        distance: "108,2 Juta km (0,72 AU)",
        temp: "~462 °C",
        rotation: "243 Hari Bumi (Retrogard)",
        orbit: "224,7 Hari Bumi",
        moons: "0",
        color: "#e5a93b",
        fact: "Venus berputar berlawanan arah dengan kebanyakan planet (retrograde) dan berotasi sangat lambat, sehingga satu hari di Venus lebih lama dibanding satu tahunnya.",
        desc: "Venus sering disebut kembaran Bumi karena ukuran dan massanya yang mirip, namun atmosfernya yang super tebal dari karbon dioksida memerangkap panas dalam efek rumah kaca ekstrem, menjadikannya planet terpanas di Tata Surya. Tekanan permukaannya mencapai 92 kali tekanan Bumi.",
        
        // Simulation parameters
        radiusVisual: 1.3,
        radiusReal: 0.36,
        distVisual: 22,
        distReal: 48,
        orbitSpeed: 1.62,
        rotateSpeed: -0.0005
    },
    earth: {
        name: "Bumi",
        type: "Planet Terestrial",
        diameter: "12.742 km",
        mass: "5.97 x 10^24 kg",
        distance: "149,6 Juta km (1,0 AU)",
        temp: "-89 °C hingga 58 °C",
        rotation: "24 Jam",
        orbit: "365,25 Hari",
        moons: "1 (Bulan)",
        color: "#2b82c9",
        fact: "Bumi adalah satu-satunya benda langit yang diketahui menampung kehidupan. Sekitar 70,8% permukaannya ditutupi air, menjadikannya 'Planet Biru'.",
        desc: "Bumi adalah planet ketiga dari Matahari, terpadat, dan terbesar di antara planet terestrial. Bumi memiliki atmosfer kaya nitrogen-oksigen yang melindungi permukaan dari radiasi berbahaya, menstabilkan suhu, dan memungkinkan air cair bertahan secara permanen.",
        
        // Simulation parameters
        radiusVisual: 1.4,
        radiusReal: 0.38,
        distVisual: 29,
        distReal: 66,
        orbitSpeed: 1.0,
        rotateSpeed: 0.015
    },
    mars: {
        name: "Mars",
        type: "Planet Terestrial",
        diameter: "6.779 km",
        mass: "0.107 Bumi",
        distance: "227,9 Juta km (1,52 AU)",
        temp: "-143 °C hingga 35 °C",
        rotation: "24,6 Jam",
        orbit: "687 Hari Bumi",
        moons: "2 (Phobos, Deimos)",
        color: "#c1440e",
        fact: "Mars memiliki gunung berapi tertinggi di tata surya, Olympus Mons, yang tingginya mencapai 22 km (tiga kali lebih tinggi dari Gunung Everest).",
        desc: "Mars, yang dijuluki 'Planet Merah' karena besi oksida di permukaannya, adalah planet gurun yang dingin dengan atmosfer tipis. Terdapat bukti kuat adanya air mengalir di masa lalu, menjadikannya target utama bagi pencarian jejak kehidupan mikrobial purba.",
        
        // Simulation parameters
        radiusVisual: 1.0,
        radiusReal: 0.20,
        distVisual: 36,
        distReal: 85,
        orbitSpeed: 0.53,
        rotateSpeed: 0.014
    },
    jupiter: {
        name: "Yupiter",
        type: "Raksasa Gas",
        diameter: "139.820 km",
        mass: "317.8 Bumi",
        distance: "778,5 Juta km (5,2 AU)",
        temp: "~ -108 °C",
        rotation: "9,9 Jam",
        orbit: "11,86 Tahun Bumi",
        moons: "95 Moons (Ganymede, Europa, dll)",
        color: "#b07f35",
        fact: "Yupiter memiliki badai raksasa bernama 'Bintik Merah Raksasa' yang telah berkecamuk selama setidaknya 350 tahun dan berukuran lebih besar dari Bumi.",
        desc: "Yupiter adalah planet terbesar di Tata Surya, dengan massa 2,5 kali massa seluruh planet lain digabungkan. Sebagian besar terdiri atas hidrogen dan helium. Gravitasi Yupiter yang kuat bertindak sebagai 'pelindung kosmik' dengan menarik atau membelokkan komet berbahaya.",
        
        // Simulation parameters
        radiusVisual: 3.5,
        radiusReal: 4.18,
        distVisual: 48,
        distReal: 130,
        orbitSpeed: 0.084,
        rotateSpeed: 0.035
    },
    saturn: {
        name: "Saturnus",
        type: "Raksasa Gas",
        diameter: "116.460 km",
        mass: "95.2 Bumi",
        distance: "1,43 Miliar km (9,58 AU)",
        temp: "~ -139 °C",
        rotation: "10,7 Jam",
        orbit: "29,45 Tahun Bumi",
        moons: "146 Moons (Titan, Enceladus, dll)",
        color: "#e2bf7d",
        fact: "Saturnus adalah planet dengan massa jenis terendah. Jika ada samudra yang cukup besar untuk menampungnya, Saturnus akan mengapung di air.",
        desc: "Saturnus adalah raksasa gas yang paling terkenal karena sistem cincinnya yang megah dan spektakuler. Cincin ini sebagian besar terdiri dari partikel es murni dan debu berbatu, terbentang ribuan kilometer namun tebalnya hanya sekitar 10 meter.",
        
        // Simulation parameters
        radiusVisual: 2.9,
        radiusReal: 3.48,
        distVisual: 60,
        distReal: 175,
        orbitSpeed: 0.034,
        rotateSpeed: 0.032
    },
    uranus: {
        name: "Uranus",
        type: "Raksasa Es",
        diameter: "50.724 km",
        mass: "14.5 Bumi",
        distance: "2,87 Miliar km (19,22 AU)",
        temp: "~ -197 °C",
        rotation: "17,2 Jam (Miring ekstrem)",
        orbit: "84 Tahun Bumi",
        moons: "28 Moons (Titania, Oberon, dll)",
        color: "#4b70dd",
        fact: "Uranus berputar dengan kemiringan sumbu hampir 98 derajat, sehingga seolah-olah menggelinding di lintasannya saat mengitari Matahari.",
        desc: "Uranus adalah raksasa es dingin yang atmosfernya didominasi oleh hidrogen, helium, metana, dan amonia. Gas metana inilah yang menyerap cahaya merah dan memantulkan warna biru-hijau pucat yang khas pada permukaan Uranus.",
        
        // Simulation parameters
        radiusVisual: 2.1,
        radiusReal: 1.52,
        distVisual: 72,
        distReal: 220,
        orbitSpeed: 0.012,
        rotateSpeed: -0.02
    },
    neptune: {
        name: "Neptunus",
        type: "Raksasa Es",
        diameter: "49.244 km",
        mass: "17.1 Bumi",
        distance: "4,5 Miliar km (30,05 AU)",
        temp: "~ -201 °C",
        rotation: "16 Jam",
        orbit: "164,8 Tahun Bumi",
        moons: "16 Moons (Triton, dll)",
        color: "#274687",
        fact: "Neptunus memiliki angin terkencang di tata surya, mencapai kecepatan hingga 2.100 km/jam—lebih cepat dari kecepatan suara di Bumi.",
        desc: "Neptunus adalah planet terjauh yang diketahui dari Matahari. Ia adalah planet raksasa es biru gelap yang sangat berangin dan aktif secara meteorologis. Di sana terdapat badai gelap besar yang mirip dengan bintik merah Yupiter.",
        
        // Simulation parameters
        radiusVisual: 2.0,
        radiusReal: 1.47,
        distVisual: 84,
        distReal: 270,
        orbitSpeed: 0.006,
        rotateSpeed: 0.022
    },
    pluto: {
        name: "Pluto",
        type: "Planet Kerdil (Dwarf Planet)",
        diameter: "2.376 km",
        mass: "0.002 Bumi",
        distance: "5,9 Miliar km (39,48 AU)",
        temp: "-230 °C hingga -220 °C",
        rotation: "6,4 Hari Bumi",
        orbit: "248 Tahun Bumi",
        moons: "5 (Charon, Styx, Nix, dll)",
        color: "#967e67",
        fact: "Pluto memiliki dataran es berbentuk hati besar bernama Tombaugh Regio yang terbuat dari es nitrogen, karbon monoksida, dan metana.",
        desc: "Dulu diklasifikasikan sebagai planet kesembilan, Pluto didegradasi menjadi planet kerdil pada tahun 2006 oleh IAU. Ia merupakan anggota terbesar Sabuk Kuiper, wilayah dingin di luar orbit Neptunus, dan memiliki orbit lonjong yang sangat miring.",
        
        // Simulation parameters
        radiusVisual: 0.5,
        radiusReal: 0.07,
        distVisual: 93,
        distReal: 310,
        orbitSpeed: 0.004,
        rotateSpeed: 0.003
    }
};

// --- WEB AUDIO SYNTHESIZER ---
let audioCtx = null;
let droneOsc1 = null, droneOsc2 = null;
let droneGain = null;
let delayNode = null, feedbackGain = null;
let audioEnabled = false;

function initAmbientSynth() {
    if (audioCtx) return;
    
    try {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        audioCtx = new AudioContextClass();
        
        // Main volume gain
        droneGain = audioCtx.createGain();
        droneGain.gain.setValueAtTime(0, audioCtx.currentTime); // Start quiet, fade in
        
        // Filter to make sound warm and cosmic
        const filter = audioCtx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(140, audioCtx.currentTime);
        
        // Low drones
        droneOsc1 = audioCtx.createOscillator();
        droneOsc1.type = 'sawtooth';
        droneOsc1.frequency.setValueAtTime(55, audioCtx.currentTime); // Note A1
        
        droneOsc2 = audioCtx.createOscillator();
        droneOsc2.type = 'triangle';
        droneOsc2.frequency.setValueAtTime(55.3, audioCtx.currentTime); // Slightly detuned
        
        // Slow LFO to sweep filter frequency
        const filterLFO = audioCtx.createOscillator();
        const lfoGain = audioCtx.createGain();
        filterLFO.frequency.setValueAtTime(0.08, audioCtx.currentTime); // Ultra slow 0.08Hz
        lfoGain.gain.setValueAtTime(45, audioCtx.currentTime);
        
        filterLFO.connect(lfoGain);
        lfoGain.connect(filter.frequency);
        filterLFO.start();
        
        // Connection chain
        droneOsc1.connect(filter);
        droneOsc2.connect(filter);
        filter.connect(droneGain);
        droneGain.connect(audioCtx.destination);
        
        droneOsc1.start();
        droneOsc2.start();
        
        // Setup Bell Echo nodes
        setupBellsSynth();
        
        // Fade in drone
        droneGain.gain.linearRampToValueAtTime(0.06, audioCtx.currentTime + 3.0);
        audioEnabled = true;
        
    } catch (e) {
        console.error("Web Audio API not supported or blocked", e);
    }
}

function setupBellsSynth() {
    // Delay effect for bells
    delayNode = audioCtx.createDelay(5.0);
    delayNode.delayTime.setValueAtTime(0.8, audioCtx.currentTime);
    
    feedbackGain = audioCtx.createGain();
    feedbackGain.gain.setValueAtTime(0.55, audioCtx.currentTime);
    
    const feedbackFilter = audioCtx.createBiquadFilter();
    feedbackFilter.type = 'lowpass';
    feedbackFilter.frequency.setValueAtTime(900, audioCtx.currentTime); // Soft delay reflections
    
    // Connect feedback loop
    delayNode.connect(feedbackFilter);
    feedbackFilter.connect(feedbackGain);
    feedbackGain.connect(delayNode);
    
    const delayVolume = audioCtx.createGain();
    delayVolume.gain.setValueAtTime(0.02, audioCtx.currentTime);
    
    delayNode.connect(delayVolume);
    delayVolume.connect(audioCtx.destination);
    
    // Periodically play random ambient bells
    function triggerAmbientBell() {
        if (!audioEnabled || !audioCtx || audioCtx.state === 'suspended') {
            setTimeout(triggerAmbientBell, 3000);
            return;
        }
        
        // Pentatonic Scale (A minor: A4, C5, D5, E5, G5, A5)
        const scale = [440.00, 523.25, 587.33, 659.25, 783.99, 880.00];
        const freq = scale[Math.floor(Math.random() * scale.length)];
        
        const bellOsc = audioCtx.createOscillator();
        const bellGainNode = audioCtx.createGain();
        
        bellOsc.type = 'sine';
        bellOsc.frequency.setValueAtTime(freq, audioCtx.currentTime);
        
        bellGainNode.gain.setValueAtTime(0, audioCtx.currentTime);
        bellGainNode.gain.linearRampToValueAtTime(0.015, audioCtx.currentTime + 0.05); // quick attack
        bellGainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 1.2); // long ring
        
        bellOsc.connect(bellGainNode);
        
        // Send to delay node and directly to destination (dry/wet split)
        bellGainNode.connect(delayNode);
        
        const dryGain = audioCtx.createGain();
        dryGain.gain.setValueAtTime(0.01, audioCtx.currentTime);
        bellGainNode.connect(dryGain);
        dryGain.connect(audioCtx.destination);
        
        bellOsc.start();
        bellOsc.stop(audioCtx.currentTime + 1.5);
        
        // Trigger next note in 5 to 10 seconds
        const nextDelay = 5000 + Math.random() * 5000;
        setTimeout(triggerAmbientBell, nextDelay);
    }
    
    triggerAmbientBell();
}

function toggleAudio() {
    if (!audioCtx) {
        initAmbientSynth();
        return true;
    }
    
    if (audioCtx.state === 'running') {
        audioCtx.suspend();
        audioEnabled = false;
        return false;
    } else if (audioCtx.state === 'suspended') {
        audioCtx.resume();
        audioEnabled = true;
        return true;
    }
}


// --- PROCEDURAL TEXTURE GENERATORS (No External Images Needed) ---
function createTextureFromCanvas(canvas) {
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    return texture;
}

// Helper to add simple noise
function addCanvasNoise(ctx, width, height, density, opacity) {
    const imgData = ctx.getImageData(0, 0, width, height);
    const data = imgData.data;
    for (let i = 0; i < data.length; i += 4) {
        if (Math.random() < density) {
            const noise = (Math.random() - 0.5) * opacity * 255;
            data[i] = Math.max(0, Math.min(255, data[i] + noise));     // R
            data[i+1] = Math.max(0, Math.min(255, data[i+1] + noise)); // G
            data[i+2] = Math.max(0, Math.min(255, data[i+2] + noise)); // B
        }
    }
    ctx.putImageData(imgData, 0, 0);
}

// 1. Sun: Plasma, Orange, Yellow flares
function generateSunCanvas() {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    
    // Fill deep orange base
    ctx.fillStyle = '#ff3c00';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Glowing noise/flares
    for (let i = 0; i < 50; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const r = 50 + Math.random() * 120;
        const grad = ctx.createRadialGradient(x, y, 0, x, y, r);
        grad.addColorStop(0, 'rgba(255, 235, 120, 0.9)');
        grad.addColorStop(0.3, 'rgba(255, 170, 0, 0.6)');
        grad.addColorStop(1, 'rgba(255, 60, 0, 0)');
        
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
    }
    
    addCanvasNoise(ctx, canvas.width, canvas.height, 0.3, 0.05);
    return canvas;
}

// 2. Mercury: Gray cratered surface
function generateMercuryCanvas() {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');
    
    ctx.fillStyle = '#7a7a7a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Darker/lighter splotches
    for (let i = 0; i < 40; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const r = 10 + Math.random() * 40;
        const grad = ctx.createRadialGradient(x, y, 0, x, y, r);
        const colVal = Math.random() > 0.5 ? '255,255,255' : '40,40,40';
        grad.addColorStop(0, `rgba(${colVal}, 0.25)`);
        grad.addColorStop(1, 'rgba(122, 122, 122, 0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
    }
    
    // Draw craters
    ctx.strokeStyle = 'rgba(255,255,255,0.15)';
    ctx.lineWidth = 1;
    for (let i = 0; i < 150; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const r = 2 + Math.random() * 8;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.stroke();
    }
    
    addCanvasNoise(ctx, canvas.width, canvas.height, 0.4, 0.1);
    return canvas;
}

// 3. Venus: Dense sulfuric clouds
function generateVenusCanvas() {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');
    
    ctx.fillStyle = '#bfa16f';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Cloud bands
    ctx.filter = 'blur(10px)';
    for (let y = 0; y < canvas.height; y += 15) {
        ctx.fillStyle = `rgba(235, 201, 143, ${0.2 + Math.random() * 0.5})`;
        ctx.beginPath();
        ctx.moveTo(0, y);
        for (let x = 0; x <= canvas.width; x += 40) {
            const dy = Math.sin(x * 0.05 + y) * 8 + (Math.random() - 0.5) * 5;
            ctx.lineTo(x, y + dy);
        }
        ctx.lineTo(canvas.width, y + 30);
        ctx.lineTo(0, y + 30);
        ctx.closePath();
        ctx.fill();
    }
    ctx.filter = 'none';
    
    addCanvasNoise(ctx, canvas.width, canvas.height, 0.25, 0.04);
    return canvas;
}

// 4. Earth: Blue oceans and green/brown continents
function generateEarthCanvas() {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    
    // Deep Ocean
    ctx.fillStyle = '#0f2b5c';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Shallow water borders
    ctx.fillStyle = '#1b5a96';
    
    // Generative Continents (recursive random walks or blobs)
    function drawContinent(cx, cy, size, pointsCount) {
        ctx.beginPath();
        let angle = 0;
        let rx = cx + Math.cos(angle) * size;
        let ry = cy + Math.sin(angle) * size;
        ctx.moveTo(rx, ry);
        
        for (let i = 1; i < pointsCount; i++) {
            angle = (i / pointsCount) * Math.PI * 2;
            const radius = size * (0.6 + Math.random() * 0.8);
            rx = cx + Math.cos(angle) * radius;
            ry = cy + Math.sin(angle) * radius;
            // wrap-around y borders safely
            ry = Math.max(10, Math.min(canvas.height - 10, ry));
            ctx.lineTo(rx, ry);
        }
        ctx.closePath();
        
        // Fill base green-brown
        const grad = ctx.createLinearGradient(cx - size, cy, cx + size, cy);
        grad.addColorStop(0, '#2e6b22'); // Forest Green
        grad.addColorStop(0.5, '#738a3c'); // Grass
        grad.addColorStop(1, '#8c7d54'); // Desert brown
        ctx.fillStyle = grad;
        ctx.fill();
        
        // Add inland details
        ctx.fillStyle = 'rgba(20, 50, 10, 0.3)';
        ctx.beginPath();
        ctx.arc(cx + size * 0.1, cy - size * 0.2, size * 0.3, 0, Math.PI * 2);
        ctx.fill();
    }
    
    // Draw Eurasia/Africa
    drawContinent(400, 220, 140, 24);
    drawContinent(600, 300, 100, 18);
    // Americas
    drawContinent(180, 260, 120, 20);
    drawContinent(240, 420, 80, 15);
    // Australia
    drawContinent(850, 380, 70, 12);
    // Polar ice caps
    ctx.fillStyle = '#f7f9fa';
    // North pole
    ctx.fillRect(0, 0, canvas.width, 35);
    // South pole
    ctx.fillRect(0, canvas.height - 30, canvas.width, 30);
    
    addCanvasNoise(ctx, canvas.width, canvas.height, 0.2, 0.05);
    return canvas;
}

// Earth Clouds Texture (Transparent layer)
function generateEarthCloudCanvas() {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    
    // Clear transparent background
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Paint wispy clouds using radial gradients
    ctx.fillStyle = 'rgba(255,255,255,0.85)';
    ctx.filter = 'blur(15px)';
    
    for (let i = 0; i < 40; i++) {
        const x = Math.random() * canvas.width;
        const y = 80 + Math.random() * (canvas.height - 160);
        const w = 80 + Math.random() * 220;
        const h = 20 + Math.random() * 50;
        
        ctx.beginPath();
        ctx.ellipse(x, y, w, h, (Math.random() - 0.5) * 0.2, 0, Math.PI * 2);
        ctx.fill();
    }
    ctx.filter = 'none';
    return canvas;
}

// 5. Mars: Iron-rich rusty red
function generateMarsCanvas() {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');
    
    ctx.fillStyle = '#b7410e'; // Rust red
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Dark volcanic dust areas (Syrtis Major)
    ctx.fillStyle = 'rgba(84, 38, 20, 0.6)';
    ctx.filter = 'blur(8px)';
    for (let i = 0; i < 8; i++) {
        ctx.beginPath();
        const x = Math.random() * canvas.width;
        const y = 80 + Math.random() * 100;
        ctx.arc(x, y, 30 + Math.random() * 40, 0, Math.PI * 2);
        ctx.fill();
    }
    ctx.filter = 'none';
    
    // Polar Ice caps
    ctx.fillStyle = '#ffffff';
    // North pole small cap
    ctx.beginPath();
    ctx.arc(canvas.width / 2, 0, 15, 0, Math.PI, false);
    ctx.fill();
    // South pole
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height, 22, Math.PI, 0, false);
    ctx.fill();
    
    addCanvasNoise(ctx, canvas.width, canvas.height, 0.3, 0.08);
    return canvas;
}

// 6. Jupiter: Banded stripes with Great Red Spot
function generateJupiterCanvas() {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    
    // Base beige
    ctx.fillStyle = '#d8ca9d';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw gas bands
    ctx.filter = 'blur(4px)';
    const bandHeights = [15, 30, 20, 45, 10, 35, 15, 25, 40, 15, 30];
    let currentY = 0;
    
    const bandColors = [
        '#8c6a46', // Brown
        '#b88a5c', // Dark orange-beige
        '#e0ceb1', // Light beige
        '#cf9d70', // Orange-brown
        '#efe6d0', // Off white
        '#9e7e59', // Muted brown
        '#d4b28a'  // Light orange
    ];
    
    for (let i = 0; i < bandHeights.length; i++) {
        const h = bandHeights[i];
        ctx.fillStyle = bandColors[i % bandColors.length];
        
        // Draw wavy band
        ctx.beginPath();
        ctx.moveTo(0, currentY);
        for (let x = 0; x <= canvas.width; x += 50) {
            // Sine waves to simulate turbulent streams
            const dy = Math.sin(x * 0.02 + i) * 6 + Math.cos(x * 0.05) * 3;
            ctx.lineTo(x, currentY + dy);
        }
        ctx.lineTo(canvas.width, currentY + h);
        ctx.lineTo(0, currentY + h);
        ctx.closePath();
        ctx.fill();
        
        currentY += h;
    }
    
    ctx.filter = 'none';
    
    // The Great Red Spot (Southern Hemisphere)
    const spotX = canvas.width * 0.6;
    const spotY = canvas.height * 0.7;
    const rx = 40;
    const ry = 22;
    
    // Outer shadow
    const spotGrad = ctx.createRadialGradient(spotX, spotY, 0, spotX, spotY, rx);
    spotGrad.addColorStop(0, '#a62b11'); // Dark crimson center
    spotGrad.addColorStop(0.6, '#cc3b1b');
    spotGrad.addColorStop(0.8, '#b84d38'); // Muted border
    spotGrad.addColorStop(1, 'rgba(216, 202, 157, 0)');
    
    ctx.fillStyle = spotGrad;
    ctx.beginPath();
    ctx.ellipse(spotX, spotY, rx, ry, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Swirling white clouds around the spot
    ctx.strokeStyle = 'rgba(255,255,255,0.4)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(spotX, spotY, rx + 10, ry + 6, 0.1, 0, Math.PI, false);
    ctx.stroke();
    
    addCanvasNoise(ctx, canvas.width, canvas.height, 0.2, 0.03);
    return canvas;
}

// 7. Saturn: Golden-beige stripes
function generateSaturnCanvas() {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    
    ctx.fillStyle = '#e2cfa7';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.filter = 'blur(6px)';
    let currentY = 0;
    const colors = ['#d1bd8e', '#ebdcb9', '#b5a172', '#e6dac1', '#c7b081'];
    
    for (let i = 0; i < 20; i++) {
        const h = 20 + Math.random() * 15;
        ctx.fillStyle = colors[i % colors.length];
        
        ctx.beginPath();
        ctx.moveTo(0, currentY);
        for (let x = 0; x <= canvas.width; x += 80) {
            const dy = Math.sin(x * 0.01) * 2;
            ctx.lineTo(x, currentY + dy);
        }
        ctx.lineTo(canvas.width, currentY + h);
        ctx.lineTo(0, currentY + h);
        ctx.closePath();
        ctx.fill();
        currentY += h;
    }
    ctx.filter = 'none';
    
    addCanvasNoise(ctx, canvas.width, canvas.height, 0.15, 0.02);
    return canvas;
}

// Saturn Rings: Radial stripes on 1D texture mapping
function generateSaturnRingsCanvas() {
    // 512px radial resolution, 2px height.
    // Three.js RingGeometry maps U along angle and V from inner (0) to outer (1) radius.
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 4;
    const ctx = canvas.getContext('2d');
    
    ctx.fillStyle = 'rgba(0,0,0,0)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Custom ring gradient representation
    // Rings contain dust, rocky ice with various transparencies.
    const grad = ctx.createLinearGradient(0, 0, canvas.width, 0);
    grad.addColorStop(0, 'rgba(120, 105, 80, 0)');        // Inner transparency
    grad.addColorStop(0.15, 'rgba(178, 160, 130, 0.4)');  // Ring D (very faint)
    grad.addColorStop(0.25, 'rgba(196, 180, 150, 0.85)'); // Ring C
    grad.addColorStop(0.48, 'rgba(163, 146, 114, 0.9)');  // Ring B (Brightest)
    grad.addColorStop(0.55, 'rgba(10, 10, 10, 0.05)');    // Cassini Division (dark gap)
    grad.addColorStop(0.58, 'rgba(189, 172, 140, 0.8)');  // Ring A
    grad.addColorStop(0.85, 'rgba(150, 135, 110, 0.65)'); // Encke Gap & outer Ring A
    grad.addColorStop(0.95, 'rgba(110, 95, 75, 0.2)');     // Outer ring edge F
    grad.addColorStop(1, 'rgba(0,0,0,0)');                 // Outer space boundary
    
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    return canvas;
}

// 8. Uranus: Muted cyan/pale blue smooth gas
function generateUranusCanvas() {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');
    
    // Ice-blue radial gradient base
    const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
    grad.addColorStop(0, '#70a5d9');
    grad.addColorStop(0.5, '#8cc4f2');
    grad.addColorStop(1, '#6ba2d4');
    
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Very faint, almost invisible bands
    ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.fillRect(0, 80, canvas.width, 25);
    ctx.fillRect(0, 160, canvas.width, 15);
    
    addCanvasNoise(ctx, canvas.width, canvas.height, 0.1, 0.01);
    return canvas;
}

// 9. Neptune: Deep royal blue with darker blue bands
function generateNeptuneCanvas() {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');
    
    ctx.fillStyle = '#213f9a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Dark storm bands
    ctx.fillStyle = '#162e78';
    ctx.filter = 'blur(8px)';
    ctx.fillRect(0, 60, canvas.width, 20);
    ctx.fillRect(0, 180, canvas.width, 30);
    
    // Great Dark Spot (oval)
    ctx.fillStyle = '#0f2054';
    ctx.beginPath();
    ctx.ellipse(320, 140, 35, 20, -0.1, 0, Math.PI * 2);
    ctx.fill();
    ctx.filter = 'none';
    
    // Wispy white methane clouds (Scooter)
    ctx.strokeStyle = 'rgba(255,255,255,0.18)';
    ctx.lineWidth = 1.5;
    ctx.filter = 'blur(1px)';
    ctx.beginPath();
    ctx.moveTo(100, 150);
    ctx.quadraticCurveTo(200, 160, 300, 145);
    ctx.stroke();
    ctx.filter = 'none';
    
    addCanvasNoise(ctx, canvas.width, canvas.height, 0.15, 0.02);
    return canvas;
}

// 10. Pluto: Grayish-brown heart shaped plains
function generatePlutoCanvas() {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');
    
    ctx.fillStyle = '#a68a70'; // Muted brown
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Dark brown/gray regions
    ctx.fillStyle = 'rgba(54, 43, 33, 0.7)';
    ctx.filter = 'blur(12px)';
    for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.arc(Math.random() * canvas.width, 140 + Math.random() * 80, 40 + Math.random() * 50, 0, Math.PI * 2);
        ctx.fill();
    }
    
    // The famous light "Heart" (Tombaugh Regio)
    ctx.fillStyle = 'rgba(240, 226, 211, 0.85)'; // Light cream-white
    ctx.beginPath();
    // Approximate a heart shape using two arcs and a polygon
    const hx = 240, hy = 130;
    ctx.arc(hx - 15, hy, 16, 0, Math.PI * 2);
    ctx.arc(hx + 15, hy, 16, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.beginPath();
    ctx.moveTo(hx - 31, hy + 4);
    ctx.lineTo(hx, hy + 35);
    ctx.lineTo(hx + 31, hy + 4);
    ctx.closePath();
    ctx.fill();
    
    ctx.filter = 'none';
    addCanvasNoise(ctx, canvas.width, canvas.height, 0.3, 0.08);
    return canvas;
}

// 11. Moon: Small dusty gray cratered rock
function generateMoonCanvas() {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');
    
    ctx.fillStyle = '#8f8f8f';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Dark maria (lava plains)
    ctx.fillStyle = 'rgba(80,80,80,0.5)';
    ctx.filter = 'blur(6px)';
    for (let i = 0; i < 6; i++) {
        ctx.beginPath();
        ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height, 12 + Math.random() * 20, 0, Math.PI * 2);
        ctx.fill();
    }
    ctx.filter = 'none';
    
    // Small craters outline
    ctx.strokeStyle = 'rgba(255,255,255,0.2)';
    ctx.fillStyle = 'rgba(255,255,255,0.1)';
    for (let i = 0; i < 40; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const r = 1.5 + Math.random() * 4;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.stroke();
        ctx.fill();
    }
    
    addCanvasNoise(ctx, canvas.width, canvas.height, 0.35, 0.08);
    return canvas;
}


// --- THREE.JS ENGINE SETUP ---

let scene, camera, renderer, controls;
let container = document.getElementById('canvas-container');

// State flags
let isSimulationRunning = true;
let showOrbits = true;
let isRealScale = false;
let orbitalSpeedMultiplier = 1.0;

// Collections
const planetMeshes = {};
const orbitLines = {};
let starfieldPoints;

// Tracking / Follow camera mode variables
let focusedPlanetKey = 'sun'; // start focused on Sun or Free view
let isFollowingPlanet = false;
let isTransitioningCamera = false;
let transitionProgress = 0;
const transitionSpeed = 0.015; // Speed of camera move

let startCamPos = new THREE.Vector3();
let targetCamPos = new THREE.Vector3();
let startControlsTarget = new THREE.Vector3();
let targetControlsTarget = new THREE.Vector3();
let followOffset = new THREE.Vector3(0, 15, 25); // camera distance offset in follow mode
let lastPlanetPosition = new THREE.Vector3();

// Moon details
let moonMesh;
const moonOrbitRadius = 3.0;
let moonOrbitAngle = 0;
const moonOrbitSpeed = 0.04;
const moonRadius = 0.25;

// Earth Clouds details
let earthCloudsMesh;

function initThreeEngine() {
    // 1. Create Scene & Renderer
    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x020205, 0.0008);
    
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: "high-performance" });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);
    
    // 2. Camera Setup
    camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 5000);
    camera.position.set(0, 80, 160); // Cinematic initial zoom out
    
    // 3. OrbitControls for Cursor Drag/Zoom
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxDistance = 1200; // Cap zoom out
    controls.minDistance = 3.5;  // Cap zoom in close to planets
    
    // 4. Lighting System
    // Ambient Light (faint, representing galaxy background light so shaded sides aren't pitch black)
    const ambientLight = new THREE.AmbientLight(0x1a1a26);
    scene.add(ambientLight);
    
    // Point Light inside the Sun (irradiates solar system radially)
    const sunLight = new THREE.PointLight(0xffffff, 2.5, 1000, 0.5);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 2048;
    sunLight.shadow.mapSize.height = 2048;
    sunLight.shadow.bias = -0.002;
    scene.add(sunLight);
    
    // Additional soft lighting from above to make materials show depth
    const dirLight = new THREE.DirectionalLight(0x404050, 0.4);
    dirLight.position.set(0, 1, 0);
    scene.add(dirLight);

    // 5. Generate Galactic Starfield
    generateStarfield();
    
    // 6. Build the Solar System
    buildSolarSystem();
    
    // 7. Adjust camera focus to initial Sun state (unlocked orbit controls target)
    controls.target.set(0, 0, 0);
    controls.update();

    // 8. Event listeners
    window.addEventListener('resize', onWindowResize);
    setupRaycaster();
}

// Generate circular stars in background instead of square pixels
function generateStarfield() {
    const starCount = 3500;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);
    
    // Create circular soft star sprite via Canvas
    const starCanvas = document.createElement('canvas');
    starCanvas.width = 16;
    starCanvas.height = 16;
    const sCtx = starCanvas.getContext('2d');
    const grad = sCtx.createRadialGradient(8, 8, 0, 8, 8, 8);
    grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
    grad.addColorStop(0.3, 'rgba(230, 245, 255, 0.8)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    sCtx.fillStyle = grad;
    sCtx.fillRect(0, 0, 16, 16);
    const starTexture = new THREE.CanvasTexture(starCanvas);
    
    for (let i = 0; i < starCount * 3; i += 3) {
        // Place stars in a large sphere shell far away
        const r = 800 + Math.random() * 400;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos((Math.random() * 2) - 1);
        
        positions[i] = r * Math.sin(phi) * Math.cos(theta);
        positions[i+1] = r * Math.sin(phi) * Math.sin(theta);
        positions[i+2] = r * Math.cos(phi);
        
        // Slight color differences (yellow, blue, white stars)
        const rand = Math.random();
        if (rand < 0.25) {
            colors[i] = 0.85; colors[i+1] = 0.9; colors[i+2] = 1.0; // Cool Blueish
        } else if (rand < 0.4) {
            colors[i] = 1.0; colors[i+1] = 0.95; colors[i+2] = 0.8; // Warm Golden
        } else {
            colors[i] = 1.0; colors[i+1] = 1.0; colors[i+2] = 1.0; // Clean White
        }
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    const material = new THREE.PointsMaterial({
        size: 2.2,
        map: starTexture,
        vertexColors: true,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false
    });
    
    starfieldPoints = new THREE.Points(geometry, material);
    scene.add(starfieldPoints);
}

// Build Sun, Planets, Rings, Moon, and Orbits
function buildSolarSystem() {
    // Generate Canvas textures programmatically
    const sunTex = createTextureFromCanvas(generateSunCanvas());
    const mercuryTex = createTextureFromCanvas(generateMercuryCanvas());
    const venusTex = createTextureFromCanvas(generateVenusCanvas());
    const earthTex = createTextureFromCanvas(generateEarthCanvas());
    const earthCloudsTex = createTextureFromCanvas(generateEarthCloudCanvas());
    const marsTex = createTextureFromCanvas(generateMarsCanvas());
    const jupiterTex = createTextureFromCanvas(generateJupiterCanvas());
    const saturnTex = createTextureFromCanvas(generateSaturnCanvas());
    const saturnRingsTex = createTextureFromCanvas(generateSaturnRingsCanvas());
    const uranusTex = createTextureFromCanvas(generateUranusCanvas());
    const neptuneTex = createTextureFromCanvas(generateNeptuneCanvas());
    const plutoTex = createTextureFromCanvas(generatePlutoCanvas());
    const moonTex = createTextureFromCanvas(generateMoonCanvas());

    // Materials mapping
    const materials = {
        sun: new THREE.MeshBasicMaterial({ map: sunTex }), // Sun glows, does not require light shading
        mercury: new THREE.MeshStandardMaterial({ map: mercuryTex, roughness: 0.8 }),
        venus: new THREE.MeshStandardMaterial({ map: venusTex, roughness: 0.9 }),
        earth: new THREE.MeshStandardMaterial({ map: earthTex, roughness: 0.6, metalness: 0.1 }),
        mars: new THREE.MeshStandardMaterial({ map: marsTex, roughness: 0.8 }),
        jupiter: new THREE.MeshStandardMaterial({ map: jupiterTex, roughness: 0.7 }),
        saturn: new THREE.MeshStandardMaterial({ map: saturnTex, roughness: 0.7 }),
        uranus: new THREE.MeshStandardMaterial({ map: uranusTex, roughness: 0.8 }),
        neptune: new THREE.MeshStandardMaterial({ map: neptuneTex, roughness: 0.8 }),
        pluto: new THREE.MeshStandardMaterial({ map: plutoTex, roughness: 0.9 })
    };

    // Construct meshes
    for (const key in planetsData) {
        const p = planetsData[key];
        const isSun = (key === 'sun');
        
        // Radii depending on current scale mode
        const rad = isRealScale ? p.radiusReal : p.radiusVisual;
        
        // Sphere Geometry (detailed enough for realism)
        const geometry = new THREE.SphereGeometry(rad, 48, 48);
        const mesh = new THREE.Mesh(geometry, materials[key]);
        
        mesh.castShadow = !isSun;
        mesh.receiveShadow = !isSun;
        mesh.userData = { key: key }; // reference key for raycasting click
        
        // Add to scene and save reference
        scene.add(mesh);
        planetMeshes[key] = mesh;
        
        // Save initial orbit angle randomly so planets don't line up in a straight line at start
        p.currentAngle = Math.random() * Math.PI * 2;
        p.currentDistance = isRealScale ? p.distReal : p.distVisual;
        
        // Position mesh in orbits
        if (isSun) {
            mesh.position.set(0, 0, 0);
            
            // Add custom solar glow corona sprite
            const coronaCanvas = document.createElement('canvas');
            coronaCanvas.width = 128;
            coronaCanvas.height = 128;
            const cCtx = coronaCanvas.getContext('2d');
            const cGrad = cCtx.createRadialGradient(64, 64, 0, 64, 64, 64);
            cGrad.addColorStop(0, 'rgba(255, 200, 100, 0.7)');
            cGrad.addColorStop(0.3, 'rgba(255, 120, 0, 0.3)');
            cGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
            cCtx.fillStyle = cGrad;
            cCtx.fillRect(0, 0, 128, 128);
            const coronaTexture = new THREE.CanvasTexture(coronaCanvas);
            
            const coronaMat = new THREE.SpriteMaterial({
                map: coronaTexture,
                color: 0xffaa44,
                blending: THREE.AdditiveBlending,
                transparent: true
            });
            const coronaSprite = new THREE.Sprite(coronaMat);
            coronaSprite.scale.set(rad * 3, rad * 3, 1);
            mesh.add(coronaSprite);
        } else {
            const x = Math.cos(p.currentAngle) * p.currentDistance;
            const z = Math.sin(p.currentAngle) * p.currentDistance;
            mesh.position.set(x, 0, z);
            
            // Draw Orbit lines
            drawOrbitLine(key, p.currentDistance);
        }
    }
    
    // --- SPECIAL ASSETS ---
    
    // 1. Earth Clouds Mesh (adds depth atmosphere)
    const earth = planetMeshes['earth'];
    const cloudRad = (isRealScale ? planetsData.earth.radiusReal : planetsData.earth.radiusVisual) + 0.05;
    const cloudGeom = new THREE.SphereGeometry(cloudRad, 32, 32);
    const cloudMat = new THREE.MeshStandardMaterial({
        map: earthCloudsTex,
        transparent: true,
        opacity: 0.38,
        blending: THREE.NormalBlending,
        depthWrite: false
    });
    earthCloudsMesh = new THREE.Mesh(cloudGeom, cloudMat);
    earth.add(earthCloudsMesh);
    
    // 2. Earth Moon (orbits around Earth)
    const moonGeom = new THREE.SphereGeometry(moonRadius, 24, 24);
    const moonMat = new THREE.MeshStandardMaterial({ map: moonTex, roughness: 0.9 });
    moonMesh = new THREE.Mesh(moonGeom, moonMat);
    moonMesh.castShadow = true;
    moonMesh.receiveShadow = true;
    scene.add(moonMesh); // placed directly in scene for orbital calculations
    
    // 3. Saturn Rings System
    const saturn = planetMeshes['saturn'];
    const saturnRad = isRealScale ? planetsData.saturn.radiusReal : planetsData.saturn.radiusVisual;
    const ringInner = saturnRad * 1.4;
    const ringOuter = saturnRad * 2.5;
    const ringGeom = new THREE.RingGeometry(ringInner, ringOuter, 64);
    
    // In Three.js RingGeometry, texture mapping maps the outer radius as V=1, inner radius as V=0.
    // To map concentric rings, UV coordinates are adjusted.
    // A customized shader/material or basic double-sided material using our 1D Canvas works perfectly.
    const ringMat = new THREE.MeshStandardMaterial({
        map: saturnRingsTex,
        transparent: true,
        side: THREE.DoubleSide,
        roughness: 0.6,
        metalness: 0.1
    });
    
    // Ring geometry vertices lie on XY plane, we must rotate it flat (XZ plane)
    const saturnRings = new THREE.Mesh(ringGeom, ringMat);
    saturnRings.rotation.x = Math.PI / 2;
    saturn.add(saturnRings);
    
    // Give Saturn a slight axial tilt (26.7 degrees) to look highly realistic
    saturn.rotation.z = 0.26 * Math.PI;
    
    // Add similar axial tilts to other planets for detail
    planetMeshes['earth'].rotation.z = 0.13 * Math.PI; // 23.5 degrees
    planetMeshes['mars'].rotation.z = 0.14 * Math.PI;  // 25.2 degrees
    planetMeshes['uranus'].rotation.x = 0.5 * Math.PI;  // 97 degrees (lying down!)
}

// Draw orbital trail circles in 3D Space
function drawOrbitLine(key, radius) {
    // If orbit line already exists, remove it
    if (orbitLines[key]) {
        scene.remove(orbitLines[key]);
    }
    
    const segments = 128;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array((segments + 1) * 3);
    
    for (let i = 0; i <= segments; i++) {
        const theta = (i / segments) * Math.PI * 2;
        positions[i * 3] = Math.cos(theta) * radius;
        positions[i * 3 + 1] = 0;
        positions[i * 3 + 2] = Math.sin(theta) * radius;
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    const p = planetsData[key];
    const material = new THREE.LineBasicMaterial({
        color: new THREE.Color(p.color),
        transparent: true,
        opacity: 0.22,
        blending: THREE.AdditiveBlending
    });
    
    const line = new THREE.Line(geometry, material);
    scene.add(line);
    orbitLines[key] = line;
    
    // Hide orbit lines if toggle is disabled
    line.visible = showOrbits;
}

// Adjust camera and orbits when toggling realistic/visual scale
function rebuildSolarSystemScaling() {
    isTransitioningCamera = false;
    isFollowingPlanet = false;
    
    // Recompute sizes and distances
    for (const key in planetsData) {
        const p = planetsData[key];
        const isSun = (key === 'sun');
        const rad = isRealScale ? p.radiusReal : p.radiusVisual;
        
        // Scale Mesh Sphere
        const mesh = planetMeshes[key];
        mesh.scale.setScalar(rad / p.radiusVisual); // scale ratio based on initial geometry size
        
        p.currentDistance = isRealScale ? p.distReal : p.distVisual;
        
        // Sun has no orbit line
        if (!isSun) {
            drawOrbitLine(key, p.currentDistance);
        }
    }
    
    // Relocate Earth clouds Atmospheric scale
    const earthRad = isRealScale ? planetsData.earth.radiusReal : planetsData.earth.radiusVisual;
    earthCloudsMesh.scale.setScalar((earthRad + 0.05) / earthRad);
    
    // Relocate Saturn Rings scale
    const saturnMesh = planetMeshes['saturn'];
    const saturnRings = saturnMesh.children[0]; // Ring geometry is child 0
    saturnRings.scale.setScalar(1); // will adapt automatically to saturn mesh scale
    
    // Reset Moon size scaling relative to Earth scaling
    const scaleRatio = isRealScale ? 0.35 : 1.0;
    moonMesh.scale.setScalar(scaleRatio);
    
    // Push camera back in realistic scale as scene is much larger
    if (isRealScale) {
        camera.position.set(0, 300, 500);
        controls.target.set(0, 0, 0);
    } else {
        camera.position.set(0, 80, 160);
        controls.target.set(0, 0, 0);
    }
    controls.update();
    
    // Re-focus current panel if active
    if (focusedPlanetKey !== 'sun') {
        focusOnPlanet(focusedPlanetKey);
    }
}

// Update sizes and positions on Resize
function onWindowResize() {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
}


// --- RAYCASTING CLICK DETECTION ---
function setupRaycaster() {
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    
    container.addEventListener('pointerdown', (event) => {
        // Prevent click trigger if interacting with UI side panels
        if (event.target !== renderer.domElement) return;
        
        // Track pointer position to verify it was a click and not a drag
        const startX = event.clientX;
        const startY = event.clientY;
        
        const onPointerUp = (upEvent) => {
            container.removeEventListener('pointerup', onPointerUp);
            
            // Calculate distance dragged
            const dragDistance = Math.hypot(upEvent.clientX - startX, upEvent.clientY - startY);
            if (dragDistance > 5) return; // it was a drag, ignore raycast
            
            // Normalize mouse vector: [-1, +1]
            const rect = renderer.domElement.getBoundingClientRect();
            mouse.x = ((upEvent.clientX - rect.left) / rect.width) * 2 - 1;
            mouse.y = -((upEvent.clientY - rect.top) / rect.height) * 2 + 1;
            
            raycaster.setFromCamera(mouse, camera);
            
            // Collect list of planet meshes for intersection check
            const intersectTargets = Object.values(planetMeshes);
            const intersects = raycaster.intersectObjects(intersectTargets);
            
            if (intersects.length > 0) {
                const clickedMesh = intersects[0].object;
                const planetKey = clickedMesh.userData.key;
                if (planetKey) {
                    selectPlanet(planetKey);
                }
            }
        };
        
        container.addEventListener('pointerup', onPointerUp);
    });
}


// --- CAMERA TRANSITION & FOLLOW ANIMATION ---
function selectPlanet(key) {
    focusedPlanetKey = key;
    isFollowingPlanet = false; // suspend following during fly transition
    
    // Highlight list active element in left sidebar
    document.querySelectorAll('.nav-item').forEach(btn => {
        if (btn.dataset.planet === key) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Update top HUD label
    const hudTarget = document.getElementById('hud-target');
    hudTarget.textContent = `${planetsData[key].name.toUpperCase()} ${key === 'sun' ? '(PUSAT)' : '[LOCKED]'}`;
    
    // Open info card panel
    updateInfoPanel(key);
    
    // Begin camera fly transition
    focusOnPlanet(key);
}

function focusOnPlanet(key) {
    const targetMesh = planetMeshes[key];
    const targetPos = new THREE.Vector3();
    targetMesh.getWorldPosition(targetPos);
    
    isTransitioningCamera = true;
    transitionProgress = 0;
    
    startCamPos.copy(camera.position);
    startControlsTarget.copy(controls.target);
    
    targetControlsTarget.copy(targetPos);
    
    // Calculate custom zoom offsets depending on size of the planet/star
    const pData = planetsData[key];
    const rad = isRealScale ? pData.radiusReal : pData.radiusVisual;
    const distanceOffset = rad * (key === 'sun' ? 2.5 : 4.0);
    
    // Anchor camera offset diagonally above the planet
    followOffset.set(0, distanceOffset * 0.6, distanceOffset * 1.2);
    targetCamPos.copy(targetPos).add(followOffset);
    
    lastPlanetPosition.copy(targetPos);
}

function updateInfoPanel(key) {
    const p = planetsData[key];
    
    // Slide open sidepanel
    const panel = document.getElementById('info-panel');
    panel.classList.remove('closed');
    
    // Populate text
    document.getElementById('planet-name').textContent = p.name;
    document.getElementById('planet-type').textContent = p.type;
    document.getElementById('planet-description').textContent = p.desc;
    document.getElementById('planet-diameter').textContent = p.diameter;
    document.getElementById('stat-mass').textContent = p.mass;
    document.getElementById('stat-distance').textContent = p.distance;
    document.getElementById('stat-temp').textContent = p.temp;
    document.getElementById('stat-rotation').textContent = p.rotation;
    document.getElementById('stat-orbit').textContent = p.orbit;
    document.getElementById('stat-moons').textContent = p.moons + " Satelit";
    document.getElementById('planet-fact').textContent = p.fact;
    
    // Stat progress bar comparison (diameter relative to Sun, capped at 100%)
    const pBar = document.getElementById('progress-diameter');
    if (key === 'sun') {
        pBar.style.width = '100%';
    } else {
        // Earth diameter is 12,742km. Normalize visual scale: Sun is huge, show bar relative to Jupiter (largest planet)
        const diameterVal = parseInt(p.diameter.replace(/\./g, ''));
        const jupDiameterVal = 139820;
        const percent = Math.min(100, (diameterVal / jupDiameterVal) * 100);
        pBar.style.width = `${percent}%`;
    }
    
    // Initialize spinning 2D canvas preview inside sidebar panel
    initPlanetPreviewCanvas(key);
}

// 2D Canvas Spinning Preview Generator in Info Panel
let previewTimer = null;
function initPlanetPreviewCanvas(key) {
    const canvas = document.getElementById('planet-preview-canvas');
    const ctx = canvas.getContext('2d');
    const color = planetsData[key].color;
    
    if (previewTimer) {
        cancelAnimationFrame(previewTimer);
    }
    
    let angle = 0;
    
    function drawPreview() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        const cx = canvas.width / 2;
        const cy = canvas.height / 2;
        const radius = 55;
        
        // Base planet circle clipping path
        ctx.save();
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.clip();
        
        // Paint flat color base
        ctx.fillStyle = color;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Draw rotating textures/bands
        angle += 0.02;
        ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
        if (key === 'jupiter' || key === 'saturn') {
            // Draw bands moving horizontally
            for (let y = cy - radius; y < cy + radius; y += 12) {
                const shift = Math.sin(y * 0.1 + angle) * 5;
                ctx.fillStyle = (y % 24 === 0) ? 'rgba(0,0,0,0.12)' : 'rgba(255,255,255,0.08)';
                ctx.fillRect(cx - radius, y, radius * 2, 8);
            }
        } else if (key === 'earth') {
            // Earth continents simulation
            ctx.fillStyle = '#227b38'; // Land
            ctx.beginPath();
            ctx.ellipse(cx - 20 + Math.sin(angle)*30, cy - 10, 25, 20, 0.2, 0, Math.PI*2);
            ctx.ellipse(cx + 40 + Math.sin(angle)*30, cy + 10, 30, 18, -0.1, 0, Math.PI*2);
            ctx.fill();
            
            // Draw clouds
            ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
            ctx.beginPath();
            ctx.arc(cx + Math.sin(angle * 1.3)*40, cy - 15, 20, 0, Math.PI*2);
            ctx.arc(cx - 20 + Math.sin(angle * 1.3 + 2)*45, cy + 15, 25, 0, Math.PI*2);
            ctx.fill();
        } else if (key === 'sun') {
            // Sun plasma swirls
            ctx.fillStyle = '#ff3c00';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#ffd200';
            for(let i=0; i<3; i++) {
                ctx.beginPath();
                ctx.arc(cx + Math.cos(angle + i*2)*20, cy + Math.sin(angle*1.5 + i*2)*20, 25 - i*5, 0, Math.PI*2);
                ctx.fill();
            }
        } else {
            // Standard craters pattern for rocky planets
            ctx.fillStyle = 'rgba(0,0,0,0.1)';
            for (let i = 0; i < 4; i++) {
                const cxOffset = Math.sin(angle + i * Math.PI/2) * 30;
                ctx.beginPath();
                ctx.arc(cx + cxOffset, cy - 15 + i*10, 8, 0, Math.PI * 2);
                ctx.fill();
            }
        }
        
        ctx.restore(); // restore clipping
        
        // Inner lighting shadow (adds realistic spherical 3D volume)
        const shadowGrad = ctx.createRadialGradient(cx - radius*0.3, cy - radius*0.3, 0, cx, cy, radius);
        shadowGrad.addColorStop(0, 'rgba(255, 255, 255, 0.15)'); // white sheen
        shadowGrad.addColorStop(0.5, 'rgba(0,0,0,0)');
        shadowGrad.addColorStop(1, 'rgba(0, 0, 10, 0.75)'); // spherical shadow
        ctx.fillStyle = shadowGrad;
        
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI*2);
        ctx.fill();
        
        previewTimer = requestAnimationFrame(drawPreview);
    }
    
    drawPreview();
}

function closeInfoPanel() {
    document.getElementById('info-panel').classList.add('closed');
    focusedPlanetKey = 'sun';
    isFollowingPlanet = false;
    
    // Clear left menu highlight except Matahari (default central focus)
    document.querySelectorAll('.nav-item').forEach(btn => {
        if (btn.dataset.planet === 'sun') btn.classList.add('active');
        else btn.classList.remove('active');
    });
    
    document.getElementById('hud-target').textContent = 'MATAHARI (BEBAS)';
    
    // Smooth fly back to sun or general overview
    isTransitioningCamera = true;
    transitionProgress = 0;
    startCamPos.copy(camera.position);
    startControlsTarget.copy(controls.target);
    targetControlsTarget.set(0, 0, 0);
    
    const targetDist = isRealScale ? 400 : 160;
    targetCamPos.set(0, targetDist * 0.5, targetDist);
    
    if (previewTimer) cancelAnimationFrame(previewTimer);
}


// --- MAIN ANIMATION LOOP ---
let clock = new THREE.Clock();

function animate() {
    requestAnimationFrame(animate);
    
    const delta = clock.getDelta();
    
    // Orbit Controls Damping Update
    controls.update();
    
    // 1. Rotate Starfield slowly
    if (starfieldPoints) {
        starfieldPoints.rotation.y += 0.00008;
    }
    
    // 2. Animate Planet Spheres & Orbit position calculations
    for (const key in planetMeshes) {
        const p = planetsData[key];
        const mesh = planetMeshes[key];
        
        // A. Spin planet on axis (always active regardless of orbit pauses)
        mesh.rotation.y += p.rotateSpeed * 0.5;
        
        // B. Revolve planet in orbit (controlled by pause state & speed slider)
        if (isSimulationRunning && key !== 'sun') {
            // Speed of orbit based on physical period, adjusted by user slider
            const orbitDelta = (0.2 / p.orbitSpeed) * orbitalSpeedMultiplier * delta;
            p.currentAngle += orbitDelta;
            
            // Keep angle within [0, 2*PI] bounds to prevent overflow
            p.currentAngle %= Math.PI * 2;
            
            // Calculate new X, Z coordinates on flat plane
            const x = Math.cos(p.currentAngle) * p.currentDistance;
            const z = Math.sin(p.currentAngle) * p.currentDistance;
            mesh.position.set(x, 0, z);
        }
    }
    
    // 3. Earth atmospheric clouds offset rotation
    if (earthCloudsMesh) {
        earthCloudsMesh.rotation.y += 0.001; // spins slightly faster than Earth
    }
    
    // 4. Moon orbiting Earth
    if (moonMesh && planetMeshes['earth']) {
        const earthMesh = planetMeshes['earth'];
        
        if (isSimulationRunning) {
            moonOrbitAngle += moonOrbitSpeed * orbitalSpeedMultiplier * 1.5 * delta;
        }
        
        // Relative calculations to position moon around earth mesh coords
        const mX = earthMesh.position.x + Math.cos(moonOrbitAngle) * (isRealScale ? moonOrbitRadius * 0.35 : moonOrbitRadius);
        const mZ = earthMesh.position.z + Math.sin(moonOrbitAngle) * (isRealScale ? moonOrbitRadius * 0.35 : moonOrbitRadius);
        
        moonMesh.position.set(mX, 0, mZ);
        moonMesh.rotation.y += 0.01;
    }
    
    // 5. Handle camera transitioning/following
    if (isTransitioningCamera) {
        transitionProgress += transitionSpeed;
        
        // Smoothstep easing
        const t = Math.min(1.0, transitionProgress);
        const smoothT = t * t * (3 - 2 * t);
        
        // Target coordinates might be moving if planet is orbiting
        const currentTargetMesh = planetMeshes[focusedPlanetKey];
        const currentTargetPos = new THREE.Vector3();
        currentTargetMesh.getWorldPosition(currentTargetPos);
        
        targetControlsTarget.copy(currentTargetPos);
        targetCamPos.copy(currentTargetPos).add(followOffset);
        
        camera.position.lerpVectors(startCamPos, targetCamPos, smoothT);
        controls.target.lerpVectors(startControlsTarget, targetControlsTarget, smoothT);
        
        if (t >= 1.0) {
            isTransitioningCamera = false;
            isFollowingPlanet = (focusedPlanetKey !== 'sun'); // follow actively if not looking at Sun
            lastPlanetPosition.copy(currentTargetPos);
        }
    } else if (isFollowingPlanet) {
        // Active follow tracking mode: translate camera offset as planet revolves in orbit
        const targetMesh = planetMeshes[focusedPlanetKey];
        const currentTargetPos = new THREE.Vector3();
        targetMesh.getWorldPosition(currentTargetPos);
        
        // Shift camera by the exact delta coordinate of the planet's movement in this frame
        // This keeps user OrbitControls rotates intact! (doesn't force lock camera orientation)
        const posDelta = currentTargetPos.clone().sub(lastPlanetPosition);
        camera.position.add(posDelta);
        
        // Keep looking at moving target
        controls.target.copy(currentTargetPos);
        
        lastPlanetPosition.copy(currentTargetPos);
    }
    
    renderer.render(scene, camera);
}


// --- APPLICATION BOOT & UI CONTROLLERS ---

window.addEventListener('DOMContentLoaded', () => {
    // 1. Button Start Journey
    const btnStart = document.getElementById('btn-start');
    btnStart.addEventListener('click', () => {
        // Initialize synthesized audio
        initAmbientSynth();
        
        // Initalize Three Engine
        initThreeEngine();
        
        // Hide intro curtain
        const intro = document.getElementById('intro-overlay');
        intro.classList.add('fade-out');
        
        // Run Main loop
        animate();
    });
    
    // 2. Left Navigator Planets list
    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.addEventListener('click', () => {
            const key = btn.dataset.planet;
            selectPlanet(key);
        });
    });
    
    // 3. Right panel controls
    document.getElementById('btn-close-info').addEventListener('click', closeInfoPanel);
    document.getElementById('btn-focus-planet').addEventListener('click', () => {
        if (focusedPlanetKey) selectPlanet(focusedPlanetKey);
    });
    
    // 4. Bottom Controls Deck bindings
    
    // Play/Pause orbit simulation
    const btnPlay = document.getElementById('btn-play');
    btnPlay.addEventListener('click', () => {
        isSimulationRunning = !isSimulationRunning;
        if (isSimulationRunning) {
            btnPlay.innerHTML = '<i class="fa-solid fa-pause"></i>';
            document.getElementById('sim-status').textContent = 'AKTIF';
            document.getElementById('sim-status').className = 'value text-success';
        } else {
            btnPlay.innerHTML = '<i class="fa-solid fa-play"></i>';
            document.getElementById('sim-status').textContent = 'DIJEDA';
            document.getElementById('sim-status').className = 'value text-warning';
        }
    });
    
    // Speed orbit slider
    const sliderSpeed = document.getElementById('slider-speed');
    const speedVal = document.getElementById('speed-val');
    sliderSpeed.addEventListener('input', (e) => {
        orbitalSpeedMultiplier = parseFloat(e.target.value);
        speedVal.textContent = `${orbitalSpeedMultiplier.toFixed(1)}x`;
    });
    
    // Toggle orbits paths rendering
    const btnOrbits = document.getElementById('btn-toggle-orbits');
    btnOrbits.addEventListener('click', () => {
        showOrbits = !showOrbits;
        btnOrbits.classList.toggle('active', showOrbits);
        for (const key in orbitLines) {
            orbitLines[key].visible = showOrbits;
        }
    });
    
    // Toggle Scale: Visual vs Real
    const btnScale = document.getElementById('btn-toggle-scale');
    const scaleText = document.getElementById('toggle-scale-text');
    btnScale.addEventListener('click', () => {
        isRealScale = !isRealScale;
        btnScale.classList.toggle('active', isRealScale);
        scaleText.textContent = isRealScale ? "Skala Visual" : "Skala Real";
        
        // Update HUD label
        document.getElementById('hud-scale').textContent = isRealScale ? "REALISTIS" : "VISUAL";
        
        // Re-scale engine geometries
        rebuildSolarSystemScaling();
    });
    
    // Reset Camera
    document.getElementById('btn-reset-cam').addEventListener('click', () => {
        closeInfoPanel();
        camera.position.set(0, 80, 160);
        controls.target.set(0, 0, 0);
        controls.update();
    });
    
    // Music mute button
    const btnMusic = document.getElementById('btn-music');
    btnMusic.addEventListener('click', () => {
        const playing = toggleAudio();
        if (playing) {
            btnMusic.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
            document.querySelector('.volume-status').textContent = 'AMBIENT AUDIO';
        } else {
            btnMusic.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
            document.querySelector('.volume-status').textContent = 'AUDIO MUTED';
        }
    });
});
