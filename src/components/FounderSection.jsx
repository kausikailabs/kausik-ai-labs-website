import { useEffect, useRef } from "react";

/* ── Line-art icons ── */
const IconBrain = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="#4DA8FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="38" height="38">
    <path d="M24 8C16 8 10 14 10 22c0 4 2 7 5 9v5h18v-5c3-2 5-5 5-9 0-8-6-14-14-14z"/>
    <line x1="24" y1="8" x2="24" y2="40"/><line x1="10" y1="22" x2="38" y2="22"/>
    <circle cx="14" cy="16" r="2"/><circle cx="34" cy="16" r="2"/>
  </svg>
);
const IconAuto = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="#4DA8FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="38" height="38">
    <polyline points="8,36 18,20 26,28 34,14 40,20"/>
    <circle cx="40" cy="14" r="3" fill="#FF6B00" stroke="#FF6B00"/>
    <rect x="6" y="34" width="8" height="8" rx="1"/>
    <rect x="22" y="26" width="8" height="16" rx="1"/>
    <rect x="38" y="18" width="6" height="24" rx="1"/>
  </svg>
);
const IconCity = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="#4DA8FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="38" height="38">
    <rect x="4" y="20" width="12" height="24" rx="1"/>
    <rect x="18" y="12" width="12" height="32" rx="1"/>
    <rect x="32" y="16" width="12" height="28" rx="1"/>
    <line x1="2" y1="44" x2="46" y2="44"/>
    <path d="M22 44V36h4v8"/>
    <circle cx="24" cy="6" r="3"/>
  </svg>
);
const IconFintech = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="#4DA8FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="38" height="38">
    <path d="M24 4l20 10v8c0 12-8 20-20 24C12 42 4 34 4 22v-8L24 4z"/>
    <path d="M16 24l5 5 11-11"/>
  </svg>
);
const IconTrophy = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="#FF6B00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="36" height="36">
    <path d="M14 6h20v14a10 10 0 0 1-20 0V6z"/>
    <path d="M14 10H6a4 4 0 0 0 0 8h4M34 10h8a4 4 0 0 0 0 8h-4"/>
    <line x1="24" y1="30" x2="24" y2="38"/>
    <rect x="14" y="38" width="20" height="4" rx="2"/>
    <circle cx="24" cy="16" r="3" fill="#FF6B00" stroke="#FF6B00"/>
  </svg>
);
const IconTarget = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="#4DA8FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="36" height="36">
    <circle cx="24" cy="24" r="20"/>
    <circle cx="24" cy="24" r="13"/>
    <circle cx="24" cy="24" r="6"/>
    <line x1="36" y1="12" x2="28" y2="20"/>
    <circle cx="36" cy="12" r="2" fill="#FF6B00" stroke="#FF6B00"/>
  </svg>
);
const IconPeople = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="#4DA8FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="36" height="36">
    <circle cx="16" cy="14" r="6"/>
    <circle cx="32" cy="14" r="6"/>
    <path d="M4 42c0-8 5-13 12-13M44 42c0-8-5-13-12-13"/>
    <path d="M16 29c1-1 5-2 8-2s7 1 8 2c4 3 6 7 6 13H10c0-6 2-10 6-13z"/>
  </svg>
);

/* ── Cursive Signature SVG ── */
const KausikSignature = () => (
  <svg viewBox="0 0 300 70" fill="none" xmlns="http://www.w3.org/2000/svg"
    style={{width:"240px",height:"56px",display:"block",marginBottom:"4px"}}>
    {/* K */}
    <path d="M10 60C11 44 12 30 13 18" stroke="#ddd" strokeWidth="2.2" strokeLinecap="round"/>
    <path d="M13 38C19 32 26 24 33 16" stroke="#ddd" strokeWidth="2.2" strokeLinecap="round"/>
    <path d="M13 40C19 48 27 55 34 62" stroke="#ddd" strokeWidth="2.2" strokeLinecap="round"/>
    {/* a */}
    <path d="M40 36C40 28 44 24 49 26C54 28 54 38 52 44C50 48 45 50 42 46C40 43 41 38 48 37L54 43" stroke="#ddd" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    {/* u */}
    <path d="M58 30C58 42 58 48 61 50C64 53 68 51 70 47C72 43 72 35 72 30" stroke="#ddd" strokeWidth="2.2" strokeLinecap="round"/>
    <path d="M72 30C72 44 72 50 75 52L82 52" stroke="#ddd" strokeWidth="2.2" strokeLinecap="round"/>
    {/* s */}
    <path d="M86 36C90 32 97 33 97 38C97 43 89 45 89 50C89 55 97 56 101 52" stroke="#ddd" strokeWidth="2.2" strokeLinecap="round"/>
    {/* i */}
    <path d="M107 36L107 52" stroke="#ddd" strokeWidth="2.2" strokeLinecap="round"/>
    <circle cx="107" cy="30" r="2.5" fill="#ddd"/>
    {/* k */}
    <path d="M113 24L113 52" stroke="#ddd" strokeWidth="2.2" strokeLinecap="round"/>
    <path d="M113 42C117 38 121 34 126 30" stroke="#ddd" strokeWidth="2.2" strokeLinecap="round"/>
    <path d="M113 43C117 47 122 50 127 54" stroke="#ddd" strokeWidth="2.2" strokeLinecap="round"/>
    {/* gap */}
    {/* L */}
    <path d="M140 20L140 54C143 55 150 56 156 55" stroke="#ddd" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    {/* a */}
    <path d="M162 42C162 34 166 30 171 32C176 34 176 44 174 50C172 54 167 56 163 52C161 49 162 44 169 43L176 49" stroke="#ddd" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    {/* h */}
    <path d="M182 24L182 54" stroke="#ddd" strokeWidth="2.2" strokeLinecap="round"/>
    <path d="M182 40C186 34 192 32 196 34C200 36 200 44 200 54" stroke="#ddd" strokeWidth="2.2" strokeLinecap="round"/>
    {/* i */}
    <path d="M206 36L206 54" stroke="#ddd" strokeWidth="2.2" strokeLinecap="round"/>
    <circle cx="206" cy="30" r="2.5" fill="#ddd"/>
    {/* r */}
    <path d="M212 36L212 54" stroke="#ddd" strokeWidth="2.2" strokeLinecap="round"/>
    <path d="M212 42C214 36 219 34 223 36" stroke="#ddd" strokeWidth="2.2" strokeLinecap="round"/>
    {/* i */}
    <path d="M228 36L228 54" stroke="#ddd" strokeWidth="2.2" strokeLinecap="round"/>
    <circle cx="228" cy="30" r="2.5" fill="#ddd"/>
    {/* Orange underline */}
    <path d="M6 64C60 68 150 70 245 64" stroke="#FF6B00" strokeWidth="1.5" strokeLinecap="round" opacity="0.65"/>
  </svg>
);

export default function FounderSection() {
  const kCanvasRef    = useRef(null);

  /* ── K + Orbital rings canvas ── */
  useEffect(() => {
    const c = kCanvasRef.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    let W, H, t = 0, raf;
    const particles = Array.from({length:80},()=>({
      x:Math.random()*420, y:Math.random()*420,
      r:Math.random()*1.6+0.3,
      vx:(Math.random()-.5)*.22, vy:(Math.random()-.5)*.22,
      a:Math.random()*.5+.2,
      color:Math.random()>.5?"#FF6B00":"#00CFFF",
    }));
    function resize(){ W=c.width=c.offsetWidth||400; H=c.height=c.offsetHeight||400; }
    function draw(){
      ctx.clearRect(0,0,W,H);
      const cx=W/2, cy=H/2, mn=Math.min(W,H);
      // Orbital ellipses
      [{rf:.44,sc:"#00CFFF",lw:1,d:1},{rf:.57,sc:"#FF6B00",lw:2,d:-1},{rf:.70,sc:"#00CFFF",lw:.8,d:1}].forEach(({rf,sc,lw,d},i)=>{
        const r=mn*rf;
        ctx.save(); ctx.strokeStyle=sc; ctx.lineWidth=lw;
        ctx.globalAlpha=.22+.06*Math.sin(t*.02+i);
        ctx.setLineDash([10,6]);
        ctx.beginPath(); ctx.ellipse(cx,cy,r,r*.26,Math.PI/5*i+t*.004*d,0,Math.PI*2);
        ctx.stroke(); ctx.restore();
      });
      // Glow
      const g=ctx.createRadialGradient(cx,cy,0,cx,cy,mn*.32);
      g.addColorStop(0,"rgba(255,107,0,.18)"); g.addColorStop(.5,"rgba(0,207,255,.07)"); g.addColorStop(1,"transparent");
      ctx.fillStyle=g; ctx.beginPath(); ctx.arc(cx,cy,mn*.38,0,Math.PI*2); ctx.fill();
      // Outer ring
      ctx.save(); ctx.strokeStyle="#FF6B00"; ctx.lineWidth=3;
      ctx.globalAlpha=.78+.14*Math.sin(t*.03); ctx.shadowBlur=28; ctx.shadowColor="#FF6B00";
      ctx.beginPath(); ctx.arc(cx,cy,mn*.31,0,Math.PI*2); ctx.stroke(); ctx.restore();
      // Inner ring
      ctx.save(); ctx.strokeStyle="#00CFFF"; ctx.lineWidth=1.5;
      ctx.globalAlpha=.5; ctx.shadowBlur=14; ctx.shadowColor="#00CFFF";
      ctx.beginPath(); ctx.arc(cx,cy,mn*.21,0,Math.PI*2); ctx.stroke(); ctx.restore();
      // 8 rotating dots
      for(let i=0;i<8;i++){
        const a=(Math.PI*2/8)*i+t*.018, r=mn*.31;
        ctx.save(); ctx.globalAlpha=.9;
        ctx.fillStyle=i%2===0?"#FF8C00":"#00CFFF";
        ctx.shadowBlur=12; ctx.shadowColor=i%2===0?"#FF6B00":"#00CFFF";
        ctx.beginPath(); ctx.arc(cx+r*Math.cos(a),cy+r*Math.sin(a),i%2===0?4.5:3,0,Math.PI*2);
        ctx.fill(); ctx.restore();
      }
      // K letter
      const pulse=.88+.12*Math.sin(t*.04);
      ctx.save(); ctx.globalAlpha=pulse; ctx.fillStyle="#FF6B00";
      ctx.shadowBlur=50; ctx.shadowColor="#FF8C00";
      ctx.font=`900 ${mn*.30}px Rajdhani,Arial,sans-serif`;
      ctx.textAlign="center"; ctx.textBaseline="middle";
      ctx.fillText("K",cx,cy);
      ctx.strokeStyle="#00CFFF"; ctx.lineWidth=1.5;
      ctx.globalAlpha=.2; ctx.shadowBlur=24; ctx.shadowColor="#00CFFF";
      ctx.strokeText("K",cx,cy); ctx.restore();
      // Particles + lines
      particles.forEach(p=>{
        ctx.save(); ctx.globalAlpha=p.a*(.55+.45*Math.sin(t*.025));
        ctx.fillStyle=p.color; ctx.shadowBlur=4; ctx.shadowColor=p.color;
        ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fill(); ctx.restore();
        p.x+=p.vx; p.y+=p.vy;
        if(p.x<0||p.x>W)p.vx*=-1; if(p.y<0||p.y>H)p.vy*=-1;
      });
      particles.forEach((a,i)=>particles.slice(i+1,i+5).forEach(b=>{
        const dx=a.x-b.x,dy=a.y-b.y,d=Math.sqrt(dx*dx+dy*dy);
        if(d<70){ ctx.save(); ctx.globalAlpha=(1-d/70)*.12; ctx.strokeStyle="#00CFFF"; ctx.lineWidth=.5;
          ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.stroke(); ctx.restore(); }
      }));
      t++; raf=requestAnimationFrame(draw);
    }
    resize(); draw();
    window.addEventListener("resize",resize);
    return()=>{cancelAnimationFrame(raf);window.removeEventListener("resize",resize);};
  },[]);


  

  return (
    <div className="founder-page">
      <div className="founder-grid">

        {/* ══ LEFT — Bio ══ */}
        <div className="founder-left">
          <div className="founder-badge">ABOUT FOUNDER</div>
          <div className="founder-heading">
            <span className="line1">ABOUT</span>
            <span className="line2">FOUNDER</span>
          </div>
          <div className="founder-divider"/>

          <p className="founder-bio">Kausik Lahiri is the Founder of Kausik AI Labs and a growth-focused business leader with over two decades of experience across BFSI, enterprise sales, marketing, and digital innovation.</p>
          <p className="founder-bio">He specializes in helping businesses harness Artificial Intelligence to transform operations, enhance customer experiences, and build scalable growth engines.</p>
          <p className="founder-bio">As the Founder of Kausik AI Labs, he focuses on building scalable AI systems across FinTech, Smart Cities, and enterprise automation, and emerging digital ecosystems.</p>

          <p className="founder-highlight">
            <span className="org">Helping businesses grow faster with </span>
            <span className="cyan">AI, automation, </span>
            <span className="org">and scalable digital solutions.</span>
          </p>

          <KausikSignature/>
          <div className="founder-title-tag">Founder, Kausik AI Labs</div>

          {/* Social Media Links */}
          <p style={{fontSize:"0.7rem",color:"#445566",letterSpacing:"0.08em",textTransform:"uppercase",marginBottom:"0.6rem"}}>Connect with Kausik Lahiri</p>
          <div style={{display:"flex",gap:"0.6rem",flexWrap:"wrap"}}>
            {[
              { label:"LinkedIn",  href:"https://www.linkedin.com/in/kausik-lahiri-5a356125/", color:"#0A66C2",
                icon:<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg> },
              { label:"Twitter",   href:"https://twitter.com/@lahirikousik6",         color:"#1DA1F2",
                icon:<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
              { label:"GitHub",    href:"https://github.com/Kousikl",           color:"#8B5CF6",
                icon:<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg> },
              { label:"Instagram", href:"https://www.instagram.com/kausiklahiri9516/?hl=en",    color:"#E1306C",
                icon:<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> },
            ].map(s=>(
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                style={{
                  display:"flex", alignItems:"center", gap:"6px",
                  padding:"6px 12px", borderRadius:"8px", height:"36px",
                  border:`1px solid ${s.color}44`,
                  background:`${s.color}18`,
                  color:s.color, fontSize:"0.78rem", fontWeight:600,
                  textDecoration:"none", transition:"all 0.2s",
                }}
                onMouseEnter={e=>{e.currentTarget.style.background=`${s.color}33`;e.currentTarget.style.transform="translateY(-2px)";}}
                onMouseLeave={e=>{e.currentTarget.style.background=`${s.color}18`;e.currentTarget.style.transform="none";}}
              >
                {s.icon}{s.label}
              </a>
            ))}
          </div>
        </div>

        {/* ══ CENTER — K Logo only ══ */}
        <div className="founder-center">
          <canvas ref={kCanvasRef} className="founder-canvas"/>
        </div>

        {/* ══ RIGHT — AI Head + content ══ */}
        <div className="founder-right" style={{position:"relative",overflow:"hidden"}}>

          {/* AI Neural Head removed per design request */}

          <div style={{position:"relative",zIndex:1}}>
            <h2 className="founder-right-title">
              Building Intelligent Systems.<br/>
              Driving <span className="accent">Real Business Results.</span>
            </h2>
            <div className="founder-right-bar"/>
            <p className="founder-right-desc">We help businesses unlock growth and efficiency with AI-powered solutions that automate, optimize, and transform.</p>

            {/* 4 Feature cards */}
            <div className="founder-features-4">
              {[
                {Icon:IconBrain, title:"AI SOLUTIONS",       desc:"Intelligent systems that learn and adapt"},
                {Icon:IconAuto,  title:"SMART AUTOMATION",   desc:"Automate processes and boost efficiency"},
                {Icon:IconCity,  title:"SMART CITIES",       desc:"Data-driven solutions for better tomorrow"},
                {Icon:IconFintech,title:"FINTECH INNOVATION",desc:"Secure, intelligent & future-ready fintech"},
              ].map(({Icon,title,desc},i)=>(
                <div key={i} className="founder-feature-card">
                  <div className="fc-icon"><Icon/></div>
                  <div className="fc-title">{title}</div>
                  <div className="fc-desc">{desc}</div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="founder-stats-row">
              {[
                {Icon:IconTrophy,num:"20+",title:"YEARS EXPERIENCE",desc:"Two decades of delivering impactful solutions"},
                {Icon:IconTarget,num:"",   title:"MORE FOCUSED",    desc:"Focused on outcomes that drive real impact"},
                {Icon:IconPeople,num:"",   title:"CLIENT FOCUS",    desc:"Long-term partnerships that create impact"},
              ].map(({Icon,num,title,desc},i)=>(
                <div key={i} className="founder-stat-item">
                  <div className="fsi-icon"><Icon/></div>
                  {num&&<div className="fsi-num">{num}</div>}
                  <div className="fsi-title">{title}</div>
                  <div className="fsi-desc">{desc}</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a href="#" className="founder-cta-btn" onClick={e=>e.preventDefault()}>
              <div className="fcta-left">
                <div className="fcta-plane">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                </div>
                <span className="fcta-text">LET'S BUILD THE FUTURE TOGETHER</span>
              </div>
              <span className="fcta-arrow">→</span>
            </a>
            <div className="founder-tagline">INNOVATE &nbsp;•&nbsp; AUTOMATE &nbsp;•&nbsp; SCALE &nbsp;•&nbsp; GROW</div>
          </div>
        </div>

      </div>

      {/* ══ VALUES ══ */}
      <div className="founder-values">
        <div className="sec-center">
          <h2>Mission &amp; Values</h2>
          <p>Building AI that creates real, measurable value for businesses and society.</p>
        </div>
        <div className="values-grid">
          {[
            ["🎯","Outcome-First","Every AI system measured by real-world results, not just model accuracy."],
            ["🔬","Research-Backed","Frontier AI research applied to real enterprise problems with rigor."],
            ["⚖️","Ethical AI","Responsible, fair, transparent AI earning the trust of users and regulators."],
            ["🚀","Built to Scale","From pilot to global production — we architect for scale from day one."],
          ].map(([icon,title,desc],i)=>(
            <div key={i} className="val-card">
              <div className="v-icon">{icon}</div>
              <h4>{title}</h4><p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
