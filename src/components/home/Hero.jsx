import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import * as THREE from "three";
import gsap from "gsap";

// First line of the h1: word-by-word reveal. `accent: true` renders in
// red-500, matching the original inline <span className="text-red-500">.
const HEADLINE_WORDS = [
  { text: "Empowering" },
  { text: "Innovation" },
  { text: "Across" },
];

// Second line of the h1: typewriter that cycles through these, so the
// full sentence reads "Empowering Innovation Across [cycling word]".
const TYPEWRITER_WORDS = [
  "Energy",
  "Technology",
  "AI Platforms",
  "Talent Development",
  "Digital Ecosystems",
];

export const Hero = () => {
  const canvasHostRef = useRef(null);
  const typewriterRef = useRef(null);
  const [inView, setInView] = useState(false);

  // --- Reveal trigger: word-reveal + typewriter start shortly after mount ---
  useEffect(() => {
    const id = setTimeout(() => setInView(true), 120);
    return () => clearTimeout(id);
  }, []);

  // --- Typewriter loop (runs once inView flips true) ---
  useEffect(() => {
    if (!inView) return;
    const el = typewriterRef.current;
    if (!el) return;

    const prefersReducedMotion = matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timeoutId;

    if (prefersReducedMotion) {
      el.textContent = TYPEWRITER_WORDS[0];
      return;
    }

    const tick = () => {
      const current = TYPEWRITER_WORDS[wordIndex % TYPEWRITER_WORDS.length];
      if (!deleting) {
        charIndex++;
        el.textContent = current.slice(0, charIndex);
        if (charIndex === current.length) {
          deleting = true;
          timeoutId = setTimeout(tick, 1400);
          return;
        }
        timeoutId = setTimeout(tick, 55 + Math.random() * 45);
      } else {
        charIndex--;
        el.textContent = current.slice(0, charIndex);
        if (charIndex === 0) {
          deleting = false;
          wordIndex++;
          timeoutId = setTimeout(tick, 300);
          return;
        }
        timeoutId = setTimeout(tick, 28);
      }
    };

    timeoutId = setTimeout(tick, 500);
    return () => clearTimeout(timeoutId);
  }, [inView]);

  // --- Existing 3D cube background (unchanged) ---
  useEffect(() => {
    const container = canvasHostRef.current;
    if (!container) return;

    const isMobile = matchMedia("(max-width:768px)").matches;

    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(
      40,
      container.clientWidth / container.clientHeight,
      0.1,
      100,
    );
    camera.position.set(0, 0, 8.5);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(devicePixelRatio, isMobile ? 1.5 : 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    const DIV = isMobile ? 6 : 9;
    const SIZE = 3.2;
    const pts = [];
    for (let x = 0; x <= DIV; x++) {
      for (let y = 0; y <= DIV; y++) {
        for (let z = 0; z <= DIV; z++) {
          const onShell =
            x === 0 ||
            x === DIV ||
            y === 0 ||
            y === DIV ||
            z === 0 ||
            z === DIV;
          if (!onShell) continue;
          pts.push(
            new THREE.Vector3(
              (x / DIV - 0.5) * SIZE,
              (y / DIV - 0.5) * SIZE,
              (z / DIV - 0.5) * SIZE,
            ),
          );
        }
      }
    }

    const posArr = new Float32Array(pts.length * 3);
    pts.forEach((p, i) => {
      posArr[i * 3] = p.x;
      posArr[i * 3 + 1] = p.y;
      posArr[i * 3 + 2] = p.z;
    });

    const pointGeo = new THREE.BufferGeometry();
    pointGeo.setAttribute("position", new THREE.BufferAttribute(posArr, 3));

    const pointMat = new THREE.PointsMaterial({
      color: 0x8fd0ff,
      size: isMobile ? 0.028 : 0.034,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const points = new THREE.Points(pointGeo, pointMat);

    const maxDist = (SIZE / DIV) * 1.05;
    const lineVerts = [];
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        if (pts[i].distanceTo(pts[j]) <= maxDist) {
          lineVerts.push(
            pts[i].x,
            pts[i].y,
            pts[i].z,
            pts[j].x,
            pts[j].y,
            pts[j].z,
          );
        }
      }
    }
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(new Float32Array(lineVerts), 3),
    );
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x3d6ea8,
      transparent: true,
      opacity: 0.28,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const lines = new THREE.LineSegments(lineGeo, lineMat);

    const group = new THREE.Group();
    group.add(lines, points);
    scene.add(group);
    scene.add(new THREE.AmbientLight(0x223344, 0.4));

    const pointer = { x: 0, y: 0 };
    const handlePointerMove = (e) => {
      pointer.x = (e.clientX / innerWidth) * 2 - 1;
      pointer.y = (e.clientY / innerHeight) * 2 - 1;
    };
    addEventListener("pointermove", handlePointerMove);

    let scrollT = 0;
    const handleScroll = () => {
      scrollT = Math.min(scrollY / 600, 1);
    };
    addEventListener("scroll", handleScroll, { passive: true });

    group.scale.setScalar(0.001);
    gsap.to(group.scale, {
      x: 1,
      y: 1,
      z: 1,
      duration: 1.8,
      ease: "power3.out",
      delay: 0.15,
    });

    const clock = new THREE.Clock();
    let paused = false;
    let rafId;
    const handleVisibility = () => {
      paused = document.hidden;
    };
    document.addEventListener("visibilitychange", handleVisibility);

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      if (paused) return;
      const t = clock.getElapsedTime();

      group.rotation.y = t * 0.18 + pointer.x * 0.3;
      group.rotation.x = Math.sin(t * 0.15) * 0.15 + pointer.y * 0.15;
      group.position.y = -scrollT * 1.2;
      group.position.z = -scrollT * 1.5;

      lineMat.opacity = 0.22 + Math.sin(t * 0.8) * 0.06;
      pointMat.opacity = 0.85 + Math.sin(t * 1.1) * 0.1;

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    addEventListener("resize", handleResize);

    const handleClick = () => {
      gsap.to(group.rotation, {
        y: group.rotation.y + Math.PI,
        duration: 1.4,
        ease: "power3.inOut",
      });
    };
    container.addEventListener("click", handleClick);

    return () => {
      cancelAnimationFrame(rafId);
      removeEventListener("pointermove", handlePointerMove);
      removeEventListener("scroll", handleScroll);
      removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibility);
      container.removeEventListener("click", handleClick);
      pointGeo.dispose();
      pointMat.dispose();
      lineGeo.dispose();
      lineMat.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <style>{`
        .word-outer {
          display: inline-block;
          overflow: hidden;
          vertical-align: top;
          padding-bottom: 0.12em;
          margin-bottom: -0.12em;
          margin-right: 0.28em; /* replaces manual space characters between words */
        }
        .word-inner {
          display: inline-block;
          transform: translateY(115%);
          opacity: 0;
          transition: transform 0.75s cubic-bezier(0.16,1,0.3,1), opacity 0.6s ease;
          transition-delay: var(--d, 0ms);
        }
        .in-view .word-inner { transform: translateY(0); opacity: 1; }

        .typewriter-line { display: block; }
        .typewriter-text { color: red-500 white-space: nowrap; }
        .typewriter-caret {
          display: inline-block;
          width: 0.06em;
          height: 0.85em;
          background: #ef4444; /* red-500 */
          margin-left: 0.06em;
          vertical-align: -0.08em;
          opacity: 0;
        }
        .in-view .typewriter-caret { animation: heroBlink 0.9s steps(1) infinite; }
        @keyframes heroBlink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }

        .hero-fade {
          opacity: 0;
          transform: translateY(8px);
          transition: opacity 0.6s ease var(--fd, 0.5s), transform 0.6s ease var(--fd, 0.5s);
        }
        .in-view .hero-fade { opacity: 1; transform: translateY(0); }

        @media (prefers-reduced-motion: reduce) {
          .word-inner, .hero-fade { transition-duration: 0.01ms !important; }
          .typewriter-caret { animation: none !important; opacity: 1 !important; }
        }
      `}</style>

      {/* 3D animated background */}
      <div ref={canvasHostRef} className="absolute inset-0 bg-[#05070A]">
        <div className="absolute inset-0 bg-[#0d0d0d]/60 pointer-events-none"></div>
      </div>

      {/* Content */}
      <div
        className={`relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto ${inView ? "in-view" : ""}`}
      >
        <h1 className="text-2xl md:text-3xl lg:text-3xl xl:text-5xl font-bold text-white mb-6 sm:mb-8 leading-tight px-2">
          {HEADLINE_WORDS.map((w, i) => (
            <span key={i} className="word-outer">
              <span
                className={`word-inner ${w.accent ? "text-red-500" : ""}`}
                style={{ "--d": `${i * 70}ms` }}
              >
                {w.text}
              </span>
            </span>
          ))}
          <span className="typewriter-line text-red-500">
            <span className="typewriter-text" ref={typewriterRef}></span>
            <span className="typewriter-caret"></span>
          </span>
        </h1>

        <p
          className="hero-fade text-base sm:text-lg md:text-xl lg:text-xl text-gray-300 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4"
          style={{ "--fd": "0.6s" }}
        >
          We are a conglomerate focused on building and scaling innovative
          solutions across key sectors. From smart funding and oil & gas
          solutions to AI platforms, talent development,
          <br className="hidden sm:block" /> and workforce transformation, we
          collaborate with innovators, communities, and enterprises to drive
          meaningful, measurable impact across industries.
        </p>

        {/* Buttons */}
        <div
          className="hero-fade flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center max-w-sm sm:max-w-none mx-auto px-4"
          style={{ "--fd": "0.75s" }}
        >
          <a href="#solutions">
            <button className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white font-semibold py-3 sm:py- px-6 sm:px-8 rounded-lg transition-all duration-300  hover:shadow-2xl hover:shadow-red-600/25 text-sm sm:text-base lg:text-lg cursor-pointer">
              Explore our solutions
            </button>
          </a>
          <Link to="/contact">
            <button className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-semibold py-3 sm:py-3 px-6 sm:px-8 rounded-lg transition-all duration-300  hover:shadow-2xl hover:shadow-white/25 text-sm sm:text-base lg:text-lg cursor-pointer">
              Partner with Vephla
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
