const SYMS = ["AI","λ","Σ","Δ","0","1","{","}","<",">","/","ML","fn","AI","λ","Σ","0","1","Δ","fn","ML","0","<","/","AI","λ","Σ","ML","Δ","fn","/","1"];

const DOTS = [
  { bg:"#00e676", top:"10%",  left:"7%",   d:"0s"   },
  { bg:"#3b82f6", top:"30%",  left:"2%",   d:"1.3s" },
  { bg:"#a855f7", top:"56%",  left:"5%",   d:"0.6s" },
  { bg:"#00e676", top:"78%",  left:"13%",  d:"2.1s" },
  { bg:"#3b82f6", top:"92%",  left:"38%",  d:"1.5s" },
  { bg:"#00e676", top:"15%",  right:"10%", d:"0.9s" },
  { bg:"#a855f7", top:"44%",  right:"4%",  d:"2.6s" },
  { bg:"#3b82f6", top:"70%",  right:"16%", d:"0.4s" },
  { bg:"#00e676", top:"88%",  right:"6%",  d:"1.9s" },
  { bg:"#a855f7", top:"52%",  left:"48%",  d:"3.1s" },
];

const SERVICES = [
  { icon:"🤖", label:"AI & Machine Learning" },
  { icon:"🌐", label:"Internet of Things (IoT)" },
  { icon:"🗣️", label:"Conversational AI" },
  { icon:"🥽", label:"AR / VR" },
  { icon:"📊", label:"Predictive Analytics" },
  { icon:"📈", label:"Big Data Analytics & Visualization" },
  { icon:"🏥", label:"Health Tech" },
  { icon:"🏙️", label:"Smart Cities" },
  { icon:"⚙️", label:"Robotic Process Automation (RPA)" },
  { icon:"⛓️", label:"Blockchain Development & Integration" },
  { icon:"☁️", label:"Cloud Computing" },
  { icon:"👁️", label:"Computer Vision & Image Recognition" },
  { icon:"📝", label:"Natural Language Processing (NLP)" },
  { icon:"💳", label:"FinTech Solutions" },
];

const symPos = [
  {t:"5%",l:"4%"},{t:"8%",l:"18%"},{t:"3%",l:"35%"},{t:"6%",l:"55%"},
  {t:"4%",l:"72%"},{t:"7%",l:"88%"},{t:"14%",l:"2%"},{t:"16%",l:"25%"},
  {t:"12%",l:"48%"},{t:"15%",l:"65%"},{t:"13%",l:"82%"},{t:"22%",l:"8%"},
  {t:"25%",l:"30%"},{t:"20%",l:"50%"},{t:"24%",l:"70%"},{t:"21%",l:"90%"},
  {t:"35%",l:"1%"},{t:"38%",l:"20%"},{t:"33%",l:"78%"},{t:"36%",l:"95%"},
  {t:"48%",l:"3%"},{t:"52%",l:"92%"},{t:"60%",l:"6%"},{t:"63%",l:"88%"},
  {t:"72%",l:"2%"},{t:"75%",l:"85%"},{t:"82%",l:"10%"},{t:"80%",l:"78%"},
  {t:"88%",l:"22%"},{t:"90%",l:"65%"},{t:"93%",l:"40%"},{t:"95%",l:"82%"},
];

export default function AboutSection() {
  return (
    <section className="about-svc-section">
      {SYMS.map((s, i) => (
        <div key={i} className="ab-sym" style={{ top:symPos[i].t, left:symPos[i].l }}>
          {s}
        </div>
      ))}
      {DOTS.map((d, i) => (
        <div key={i} className="ab-dot" style={{
          background: d.bg,
          boxShadow: `0 0 12px 3px ${d.bg}`,
          top: d.top, left: d.left, right: d.right,
          animationDelay: d.d,
        }}/>
      ))}
      <div className="sec-center">
        <h2>About Kausik AI Labs</h2>
        <p>Delivering cutting-edge AI solutions across industries with intelligent automation</p>
      </div>
      <div className="svc-grid-wrap">
        <div className="svc-grid">
          {SERVICES.map((svc, i) => (
            <div className="svc-row" key={i}>
              <div className="svc-ico" style={{fontSize:"1.5rem"}}>{svc.icon}</div>
              <span>{svc.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
