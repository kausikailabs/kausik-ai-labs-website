export default function Footer({ setActivePage }) {
  return (
    <footer className="site-footer">
      <div className="ft-grid">
        <div className="ft-brand">
          <div className="ft-logo-wrap">
            <canvas id="footerLogoCanvas" width="220" height="100" style={{display:"block"}}
              ref={el => { if(el && !el._init) { el._init=true; drawFooterLogo(el); }}}
            />
          </div>
          <div style={{fontSize:"0.78rem",color:"#2A5A7A",fontFamily:"'Courier New',monospace",letterSpacing:"0.1em",margin:"0.4rem 0 0.8rem"}}>
            AI THAT WORKS. OUTCOMES THAT MATTER.
          </div>
          <div className="ft-socials">
            {[
              {label: "LinkedIn", href: "https://www.linkedin.com/company/kausik-ai", text: "in"},
              {label: "X",        href: "https://twitter.com/Kausikailabs",        text: "X"},
              {label: "GitHub",   href: "https://github.com/kausikailabs",        text: "gh"},
              {label: "Instagram",href: "https://www.instagram.com/kausikailabs/",   text: "ig"},
            ].map(s=>(
              <a key={s.label}
                 className="ft-social-btn"
                 href={s.href}
                 title={s.label}
                 target="_blank"
                 rel="noreferrer"
                 style={{fontSize:"0.8rem",fontWeight:700}}
              >
                {s.text}
              </a>
            ))}
          </div>
        </div>
        <div className="ft-col">
          <h5>Quick Links</h5>
          <ul>
            {[["about","About"],["services","Services"],["products","Products"],["contact","Contact"]].map(([id,label])=>(
              <li key={id}><a onClick={()=>setActivePage(id)}>{label}</a></li>
            ))}
          </ul>
        </div>
        <div className="ft-col">
          <h5>Services</h5>
          <ul>
            {["AI Transformation","ML Engineering","Conversational AI","Data Engineering"].map(s=>(
              <li key={s}><a onClick={()=>setActivePage("services")}>{s}</a></li>
            ))}
          </ul>
        </div>
        <div className="ft-contact">
          <h5>Contact Us</h5>
          <div className="ft-contact-item"><span className="fci-icon">📍</span><span>Kolkata, Bangaluru, India</span></div>
          <div className="ft-contact-item"><span className="fci-icon">✉️</span><span>hello@kausikailabs.com</span></div>
        </div>
      </div>
      <div className="ft-bottom">© 2026 Kausik AI Labs. All rights reserved.</div>
    </footer>
  );
}

function drawFooterLogo(canvas) {
  const ctx = canvas.getContext("2d");
  const W=220, H=100, cx=38, cy=48, R=32;
  let angle=0, blinkT=0;

  function hexPts(r, rot) {
    return Array.from({length:6},(_,i)=>{
      const a=(Math.PI/180)*(60*i+rot);
      return {x:cx+r*Math.cos(a), y:cy+r*Math.sin(a)};
    });
  }
  function drawHex(pts,color,lw,alpha){
    ctx.save(); ctx.globalAlpha=alpha; ctx.strokeStyle=color; ctx.lineWidth=lw;
    ctx.beginPath(); pts.forEach((p,i)=>i===0?ctx.moveTo(p.x,p.y):ctx.lineTo(p.x,p.y));
    ctx.closePath(); ctx.stroke(); ctx.restore();
  }
  function frame(){
    ctx.clearRect(0,0,W,H);
    const outer=hexPts(R,angle);
    drawHex(outer,"#FF6B00",1.8,0.9);
    outer.forEach((p,i)=>{
      const blink=0.4+0.6*Math.abs(Math.sin(blinkT+i*0.5));
      ctx.save(); ctx.globalAlpha=blink; ctx.fillStyle=i%2===0?"#FF8C00":"#00CFFF";
      ctx.shadowBlur=4; ctx.shadowColor=i%2===0?"#FF6B00":"#00CFFF";
      ctx.beginPath(); ctx.arc(p.x,p.y,2,0,Math.PI*2); ctx.fill(); ctx.restore();
    });
    drawHex(hexPts(R*0.7,-angle*0.6),"#00CFFF",0.8,0.3);
    const inner=hexPts(R*0.48,angle*0.4);
    inner.forEach((p,i)=>{
      ctx.save(); ctx.globalAlpha=0.6; ctx.strokeStyle=i%2===0?"#00CFFF":"#FF6B00"; ctx.lineWidth=0.8;
      ctx.beginPath(); ctx.moveTo(cx,cy); ctx.lineTo(p.x,p.y); ctx.stroke();
      ctx.fillStyle=i%2===0?"#00CFFF":"#FF6B00"; ctx.globalAlpha=0.9;
      ctx.beginPath(); ctx.arc(p.x,p.y,1.6,0,Math.PI*2); ctx.fill(); ctx.restore();
    });
    const pulse=0.85+0.15*Math.sin(blinkT*1.2);
    ctx.save(); ctx.globalAlpha=pulse; ctx.fillStyle="#FF6B00"; ctx.shadowBlur=6; ctx.shadowColor="#FF8C00";
    ctx.font="bold 10px Rajdhani,Arial,sans-serif"; ctx.textAlign="center"; ctx.textBaseline="middle";
    ctx.fillText("K",cx,cy-1); ctx.restore();
    // Brand text
    ctx.save();
    ctx.fillStyle="#FF6B00"; ctx.font="bold 18px Rajdhani,Arial,sans-serif"; ctx.textBaseline="middle";
    ctx.fillText("KAUSIK",82,35);
    ctx.fillStyle="#00CFFF"; ctx.font="300 14px Rajdhani,Arial,sans-serif";
    ctx.fillText("AI",82,58);
    ctx.fillStyle="#ffffff"; ctx.font="bold 14px Rajdhani,Arial,sans-serif";
    ctx.fillText("LABS",105,58);
    ctx.fillStyle="#1A4A6A"; ctx.font="7px 'Courier New',monospace";
    ctx.fillText("INTELLIGENCE · REDEFINED",82,75);
    // Status dot
    const da=0.3+0.7*Math.abs(Math.sin(blinkT*2));
    ctx.globalAlpha=da; ctx.fillStyle="#00E676"; ctx.shadowBlur=4; ctx.shadowColor="#00E676";
    ctx.beginPath(); ctx.arc(82,88,3,0,Math.PI*2); ctx.fill();
    ctx.globalAlpha=1; ctx.fillStyle="#0A3A2A"; ctx.font="7px 'Courier New',monospace";
    ctx.fillText("SYSTEMS ACTIVE",90,91);
    ctx.restore();
    angle+=0.5; blinkT+=0.04;
    requestAnimationFrame(frame);
  }
  frame();
}
