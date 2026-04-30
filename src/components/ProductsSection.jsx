const P=[
  ["🤖","KausikBot Enterprise","Multi-channel conversational AI with domain-specific training and CRM integration.","Conversational AI"],
  ["🔍","InsightIQ","Real-time predictive analytics engine with automated dashboards and anomaly alerts.","Analytics"],
  ["🛡️","FinShield AI","Real-time fraud detection and risk scoring processing millions of transactions daily.","FinTech"],
  ["🏙️","CityMind Platform","Smart city OS integrating IoT sensors, AI analytics, and real-time dashboards.","Smart Cities"],
  ["📋","DocIntel","AI-powered document intelligence — extraction, classification, and workflow automation.","NLP / OCR"],
  ["⚙️","AutoFlow RPA","Intelligent RPA with AI decision-making, audit trails, and seamless ERP integration.","Automation"],
];
export default function ProductsSection(){
  return(
    <div className="prod-page">
      <div className="sec-center"><h2>Our Products</h2><p>Proprietary AI products built for real-world enterprise deployment</p></div>
      <div className="prod-cards">
        {P.map(([icon,name,desc,badge],i)=>(
          <div className="p-card" key={i}>
            <div className="pi">{icon}</div>
            <h3>{name}</h3>
            <p>{desc}</p>
            <span className="p-badge">{badge}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
