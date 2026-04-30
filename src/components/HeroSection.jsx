import { useEffect, useRef } from "react";

export default function HeroSection({ setActivePage }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    const SYMS = ["AI","ML","λ","Σ","0","1","{}","∇","Δ","α","∞"];
    let items = [], raf;
    let W = c.width  = window.innerWidth;
    let H = c.height = window.innerHeight;

    for (let i = 0; i < 35; i++) {
      items.push({
        sym: SYMS[Math.floor(Math.random() * SYMS.length)],
        x: Math.random() * W, y: Math.random() * H,
        sz: 10 + Math.random() * 6,
        spd: 0.1 + Math.random() * 0.3,
        a: 0.06 + Math.random() * 0.16,
        dr: (Math.random() - 0.5) * 0.3,
      });
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);
      items.forEach(it => {
        ctx.globalAlpha = it.a;
        ctx.fillStyle = "#00BFFF";
        ctx.font = `${it.sz}px Courier New`;
        ctx.fillText(it.sym, it.x, it.y);
        it.y -= it.spd; it.x += it.dr;
        if (it.y < -20) { it.y = H + 10; it.x = Math.random() * W; }
        if (it.x < -40) it.x = W + 10;
        if (it.x > W + 40) it.x = -10;
      });
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    }

    const onResize = () => {
      W = c.width  = window.innerWidth;
      H = c.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", onResize); };
  }, []);

  return (
    <section className="hero">
      <canvas ref={canvasRef} id="bgCanvas" />
      <video className="hero-video-bg" autoPlay muted loop playsInline>
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>
      <div className="hero-video-overlay" />
      <div className="hero-content">
        <div className="hero-title">Kausik AI Labs</div>
        <div className="hero-sub">AI That Works. Outcomes That Matter.</div>
        <p className="hero-desc">
          Transforming businesses with AI-led strategy, intelligent systems,
          and outcome-driven delivery.
        </p>
        <button className="btn-touch" onClick={() => setActivePage("contact")}>
          Get In Touch
        </button>
      </div>
    </section>
  );
}
