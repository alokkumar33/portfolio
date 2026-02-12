import { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Possibility from "./components/Possibility";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const canvasRef = useRef(null);

  /* 🚀 Scroll Reveal */
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.15 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  /* 🌌 Stars + Comets + Explosion */
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width, height;
    let animationFrameId;

    const stars = [];
    const particles = [];
    const comets = [];

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }

    resize();
    window.addEventListener("resize", resize);

    /* ⭐ Stars */
    for (let i = 0; i < 350; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.4,
        alpha: Math.random(),
        twinkle: Math.random() * 0.02,
      });
    }

    /* ☄️ Create Comet */
    function spawnComet() {
      comets.push({
        x: -100,
        y: Math.random() * height * 0.6,
        length: 150 + Math.random() * 100,
        speed: 6 + Math.random() * 4,
        opacity: 1,
      });
    }

    setInterval(spawnComet, 5000);

    /* 💥 Explosion */
    function createExplosion(x, y) {
      for (let i = 0; i < 60; i++) {
        particles.push({
          x,
          y,
          dx: (Math.random() - 0.5) * 6,
          dy: (Math.random() - 0.5) * 6,
          life: 70,
        });
      }
    }

    const handleClick = (e) => {
      createExplosion(e.clientX, e.clientY);
    };

    window.addEventListener("click", handleClick);

    function animate() {
      ctx.clearRect(0, 0, width, height);

      /* ⭐ Draw Stars */
      stars.forEach((star) => {
        star.alpha += star.twinkle;
        if (star.alpha <= 0.2 || star.alpha >= 1) {
          star.twinkle *= -1;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${star.alpha})`;
        ctx.fill();
      });

      /* ☄️ Draw Comets */
      comets.forEach((comet, index) => {
        comet.x += comet.speed;
        comet.y += comet.speed * 0.4;

        const gradient = ctx.createLinearGradient(
          comet.x,
          comet.y,
          comet.x - comet.length,
          comet.y - comet.length * 0.4
        );

        gradient.addColorStop(0, "rgba(255,255,255,1)");
        gradient.addColorStop(1, "rgba(255,255,255,0)");

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(comet.x, comet.y);
        ctx.lineTo(
          comet.x - comet.length,
          comet.y - comet.length * 0.4
        );
        ctx.stroke();

        if (comet.x > width + 200) {
          comets.splice(index, 1);
        }
      });

      /* 💥 Explosion */
      particles.forEach((p, index) => {
        p.x += p.dx;
        p.y += p.dy;
        p.life--;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(168,85,247,0.9)";
        ctx.fill();

        if (p.life <= 0) {
          particles.splice(index, 1);
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("click", handleClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full text-slate-100 overflow-x-hidden">
      <canvas
        ref={canvasRef}
        className="fixed inset-0 -z-10"
      />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Possibility />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
