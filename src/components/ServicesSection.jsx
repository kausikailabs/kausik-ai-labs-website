const SERVICES = [
  ["🤖","AI & Machine Learning","Custom ML models, deep learning, and intelligent automation."],
  ["🗣️","Conversational AI","Advanced chatbots and voice assistants powered by NLP and LLMs."],
  ["📊","Predictive Analytics","Demand forecasting, churn prediction, and risk scoring."],
  ["🏥","Health Tech","Clinical NLP, diagnostic AI, and healthcare workflow automation."],
  ["⚙️","Robotic Process Automation","Intelligent RPA that eliminates repetitive work."],
  ["🌐","Internet of Things (IoT)","Smart sensor networks, edge AI, and real-time pipelines."],
  ["🥽","AR / VR","Augmented and virtual reality apps for training and industry."],
  ["📈","Big Data & Visualization","Scalable data platforms and dashboards for enterprise."],
  ["🏙️","Smart Cities","AI-driven urban systems for traffic, energy, and governance."],
  ["⛓️","Blockchain Integration","Secure blockchain systems integrated with AI."],
  ["☁️","Cloud Computing","Scalable cloud infrastructure and managed AI deployments."],
  ["👁️","Computer Vision","Real-time object detection and visual inspection systems."],
  ["📝","NLP Solutions","Text intelligence, sentiment analysis, and document extraction."],
  ["💳","FinTech Solutions","AI-powered fraud detection and financial process automation."],
  ["🏢","Enterprise AI Platforms","Custom AI platforms for large-scale enterprise deployment."],
];
export default function ServicesSection() {
  return (
    <div className="svc-page">
      <div className="sec-center">
        <h2>Our Services</h2>
        <p>End-to-end AI solutions designed to deliver measurable business impact</p>
      </div>
      <div className="svc-cards">
        {SERVICES.map(([icon,title,desc],i)=>(
          <div className="s-card" key={i}>
            <div className="si">{icon}</div>
            <h4>{title}</h4>
            <p>{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
