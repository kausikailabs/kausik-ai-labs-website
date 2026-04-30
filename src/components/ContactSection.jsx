import{useState}from"react";
const INFO=[["📧","Email","hello@kausikailabs.com"],["📞","Phone","+91 98361 20115"],["📍","Location","Kolkata, Bangaluru, India"],["🕐","Hours","Mon–Fri, 9 AM – 7 PM IST"]];
const SVCS=["AI & Machine Learning","Conversational AI","Predictive Analytics","Health Tech","IoT","FinTech Solutions","Smart Cities","Computer Vision","Blockchain","Cloud Computing","Other"];
export default function ContactSection(){
  const[sent,setSent]=useState(false);
  const submit=e=>{e.preventDefault();setSent(true);setTimeout(()=>setSent(false),3000);};
  return(
    <div className="contact-page">
      <div className="sec-center"><h2>Contact Us</h2><p>Let's discuss how AI can transform your business.</p></div>
      <div className="contact-body">
        <div className="ci-col">
          <h3>Get In Touch</h3>
          <p>Whether you have a defined project or just an idea, we're happy to explore what AI can do for you.</p>
          {INFO.map(([icon,lbl,val])=>(
            <div className="ci-item" key={lbl}>
              <div className="ci-icon">{icon}</div>
              <div><div className="ci-lbl">{lbl}</div><div className="ci-val">{val}</div></div>
            </div>
          ))}
        </div>
        <div className="cf-box">
          <h3>Send a Message</h3>
          <form onSubmit={submit}>
            <div className="row2">
              <div className="fg"><label>First Name</label><input type="text" placeholder="Kausik"/></div>
              <div className="fg"><label>Last Name</label><input type="text" placeholder="Lahiri"/></div>
            </div>
            <div className="fg"><label>Email</label><input type="email" placeholder="hello@company.com"/></div>
            <div className="fg"><label>Company</label><input type="text" placeholder="Your Company"/></div>
            <div className="fg"><label>Service</label>
              <select><option>Select a service...</option>{SVCS.map(s=><option key={s}>{s}</option>)}</select>
            </div>
            <div className="fg"><label>Message</label><textarea placeholder="Tell us about your AI challenge..."/></div>
            <button className="btn-sub" type="submit" style={sent?{background:"linear-gradient(135deg,#059669,#10B981)"}:{}}>
              {sent?"✓ Sent!":"Send Message →"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
