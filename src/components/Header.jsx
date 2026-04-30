import { useEffect, useRef, useState } from "react";

export default function Header({ activePage, setActivePage }) {
  const canvasRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    const W=42,H=42,cx=21,cy=21,R=18;
    let angle=0,blinkT=0,raf;

    function hexPts(r,rot){
      return Array.from({length:6},(_,i)=>{
        const a=(Math.PI/180)*(60*i+rot);
        return {x:cx+r*Math.cos(a),y:cy+r*Math.sin(a)};
      });
    }
    function drawHex(pts,color,lw,alpha){
      ctx.save();ctx.globalAlpha=alpha;ctx.strokeStyle=color;ctx.lineWidth=lw;
      ctx.beginPath();pts.forEach((p,i)=>i===0?ctx.moveTo(p.x,p.y):ctx.lineTo(p.x,p.y));
      ctx.closePath();ctx.stroke();ctx.restore();
    }
    function frame(){
      ctx.clearRect(0,0,W,H);
      const outer=hexPts(R,angle);
      drawHex(outer,"#FF6B00",1.8,0.9);
      outer.forEach((p,i)=>{
        const blink=0.4+0.6*Math.abs(Math.sin(blinkT+i*0.5));
        ctx.save();ctx.globalAlpha=blink;ctx.fillStyle=i%2===0?"#FF8C00":"#00CFFF";
        ctx.shadowBlur=5;ctx.shadowColor=i%2===0?"#FF6B00":"#00CFFF";
        ctx.beginPath();ctx.arc(p.x,p.y,2.2,0,Math.PI*2);ctx.fill();ctx.restore();
      });
      drawHex(hexPts(R*0.72,-angle*0.6),"#00CFFF",0.8,0.35);
      const inner=hexPts(R*0.5,angle*0.4);
      inner.forEach((p,i)=>{
        ctx.save();ctx.globalAlpha=0.6;ctx.strokeStyle=i%2===0?"#00CFFF":"#FF6B00";ctx.lineWidth=0.8;
        ctx.beginPath();ctx.moveTo(cx,cy);ctx.lineTo(p.x,p.y);ctx.stroke();
        ctx.fillStyle=i%2===0?"#00CFFF":"#FF6B00";ctx.globalAlpha=0.9;
        ctx.beginPath();ctx.arc(p.x,p.y,1.8,0,Math.PI*2);ctx.fill();ctx.restore();
      });
      const pulse=0.85+0.15*Math.sin(blinkT*1.2);
      ctx.save();ctx.globalAlpha=pulse;ctx.fillStyle="#FF6B00";ctx.shadowBlur=8;ctx.shadowColor="#FF8C00";
      ctx.font="bold 11px Arial";ctx.textAlign="center";ctx.textBaseline="middle";
      ctx.fillText("K",cx,cy-1);ctx.restore();
      const da=0.3+0.7*Math.abs(Math.sin(blinkT*2));
      ctx.save();ctx.globalAlpha=da;ctx.fillStyle="#00CFFF";ctx.shadowBlur=6;ctx.shadowColor="#00CFFF";
      ctx.beginPath();ctx.arc(cx,cy+6,2,0,Math.PI*2);ctx.fill();ctx.restore();
      angle+=0.6;blinkT+=0.04;
      raf=requestAnimationFrame(frame);
    }
    frame();
    return ()=>cancelAnimationFrame(raf);
  }, []);

  const go = (id) => { setActivePage(id); setMenuOpen(false); };

  return (
    <nav>
      <div className="nav-logo" onClick={() => go("home")}>
        <canvas ref={canvasRef} width={42} height={42} />
        <span className="nav-logo-name">Kausik AI Labs</span>
      </div>
      <div className={`nav-menu${menuOpen ? " open" : ""}`}>
        {[["about","ABOUT"],["services","SERVICES"],["products","PRODUCTS"],["contact","CONTACT"]].map(([id,label])=>(
          <a key={id} className={activePage===id?"active":""} onClick={()=>go(id)}>{label}</a>
        ))}
      </div>
      <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
        <span/><span/><span/>
      </div>
    </nav>
  );
}
