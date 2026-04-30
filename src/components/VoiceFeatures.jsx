import { useEffect, useRef, useState } from "react";

/* ════════════════════════════════════════════
   VOICE FEATURES — All 3 combined
   1. Welcome greeting (auto on first click)
   2. AI Voice Chatbot (mic button)
   3. Background music player
════════════════════════════════════════════ */

export default function VoiceFeatures() {
  const [chatOpen,    setChatOpen]    = useState(false);
  const [listening,   setListening]   = useState(false);
  const [speaking,    setSpeaking]    = useState(false);
  const [transcript,  setTranscript]  = useState("");
  const [messages,    setMessages]    = useState([
    { role:"ai", text:"Hello! I'm KAL — Kausik AI Labs assistant. Ask me anything about our AI services!" }
  ]);
  const [bgPlaying,   setBgPlaying]   = useState(false);
  const [welcomed,    setWelcomed]    = useState(false);
  const [showPulse,   setShowPulse]   = useState(true);

  const recognitionRef = useRef(null);
  const synthRef       = useRef(window.speechSynthesis);
  const audioRef       = useRef(null);
  const messagesEndRef = useRef(null);

  // ── Auto-scroll chat ──
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior:"smooth" });
  }, [messages]);

  // ── Welcome greeting on first user interaction ──
  useEffect(() => {
    const handleFirstClick = () => {
      if (!welcomed) {
        setWelcomed(true);
        setTimeout(() => speakText(
          "Welcome to Kausik AI Labs. AI That Works. Outcomes That Matter. " +
          "We transform businesses with cutting-edge artificial intelligence solutions."
        ), 500);
      }
    };
    window.addEventListener("click", handleFirstClick, { once: true });
    return () => window.removeEventListener("click", handleFirstClick);
  }, [welcomed]);

  // ── Pulse hide after 5s ──
  useEffect(() => {
    const t = setTimeout(() => setShowPulse(false), 8000);
    return () => clearTimeout(t);
  }, []);

  // ── Text to Speech ──
  function speakText(text) {
    const synth = synthRef.current;
    if (!synth) return;
    synth.cancel();
    const utt = new SpeechSynthesisUtterance(text);
    utt.rate   = 0.92;
    utt.pitch  = 1.0;
    utt.volume = 1.0;
    // Try to get a good English voice
    const voices = synth.getVoices();
    const preferred = voices.find(v =>
      v.name.includes("Google UK English Female") ||
      v.name.includes("Microsoft Zira") ||
      v.name.includes("Samantha") ||
      v.lang === "en-US"
    );
    if (preferred) utt.voice = preferred;
    utt.onstart  = () => setSpeaking(true);
    utt.onend    = () => setSpeaking(false);
    utt.onerror  = () => setSpeaking(false);
    synth.speak(utt);
  }

  // ── AI Response logic ──
  function getAIResponse(userText) {
    const t = userText.toLowerCase();
    if (t.includes("service") || t.includes("offer") || t.includes("what do you do"))
      return "Kausik AI Labs offers 15 AI services including Machine Learning, Conversational AI, Computer Vision, Predictive Analytics, IoT, Smart Cities, FinTech solutions, and much more!";
    if (t.includes("founder") || t.includes("kausik") || t.includes("who"))
      return "Kausik Lahiri is the Founder of Kausik AI Labs, with over 25 years of experience in BFSI, sales, marketing, and AI-driven digital transformation.";
    if (t.includes("contact") || t.includes("reach") || t.includes("email"))
      return "You can reach us at hello@kausikailabs.com or call +91 98765 43210. We're based in Kolkata, West Bengal, India.";
    if (t.includes("product"))
      return "Our products include KausikBot Enterprise, InsightIQ analytics, FinShield AI, CityMind Platform, DocIntel, and AutoFlow RPA!";
    if (t.includes("price") || t.includes("cost") || t.includes("how much"))
      return "Our pricing depends on your project requirements. Please contact us at hello@kausikailabs.com for a custom quote!";
    if (t.includes("hello") || t.includes("hi") || t.includes("hey"))
      return "Hello! Great to meet you. How can Kausik AI Labs help transform your business today?";
    if (t.includes("thank"))
      return "You're welcome! Is there anything else I can help you with?";
    if (t.includes("location") || t.includes("where") || t.includes("office"))
      return "We're headquartered in Kolkata, West Bengal, India and serve clients across 12+ countries worldwide!";
    return "That's a great question! For detailed information about Kausik AI Labs solutions, please contact our team at hello@kausikailabs.com or use the Contact page. We'd love to help!";
  }

  // ── Start voice recognition ──
  function startListening() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Sorry, your browser doesn't support voice recognition. Try Chrome!");
      return;
    }
    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = true;

    recognition.onstart = () => setListening(true);
    recognition.onresult = (e) => {
      const text = Array.from(e.results).map(r => r[0].transcript).join("");
      setTranscript(text);
      if (e.results[e.results.length - 1].isFinal) {
        handleUserMessage(text);
        setTranscript("");
      }
    };
    recognition.onend  = () => { setListening(false); setTranscript(""); };
    recognition.onerror= () => { setListening(false); setTranscript(""); };

    recognitionRef.current = recognition;
    recognition.start();
  }

  function stopListening() {
    recognitionRef.current?.stop();
    setListening(false);
  }

  // ── Handle user message ──
  function handleUserMessage(text) {
    if (!text.trim()) return;
    const userMsg = { role:"user", text };
    const aiText  = getAIResponse(text);
    const aiMsg   = { role:"ai", text: aiText };
    setMessages(prev => [...prev, userMsg, aiMsg]);
    setTimeout(() => speakText(aiText), 300);
  }

  // ── Type message in chat ──
  const [inputVal, setInputVal] = useState("");
  function sendTyped(e) {
    e.preventDefault();
    if (!inputVal.trim()) return;
    handleUserMessage(inputVal);
    setInputVal("");
  }

  // ── Background music (uses a free tone generator) ──
  function toggleBg() {
    if (!audioRef.current) {
      // Use a royalty-free ambient AI music URL
      audioRef.current = new Audio(
        "https://www.soundjay.com/misc/sounds/ambient-loop-01.mp3"
      );
      audioRef.current.loop   = true;
      audioRef.current.volume = 0.18;
      audioRef.current.onerror = () => {
        // fallback: generate tone with Web Audio API
        generateAmbientTone();
      };
    }
    if (bgPlaying) {
      audioRef.current.pause();
      setBgPlaying(false);
    } else {
      audioRef.current.play().catch(() => generateAmbientTone());
      setBgPlaying(true);
    }
  }

  // ── Ambient tone generator (fallback) ──
  const audioCtxRef = useRef(null);
  const oscillatorsRef = useRef([]);
  function generateAmbientTone() {
    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
    }
    const ctx = audioCtxRef.current;
    // Stop existing
    oscillatorsRef.current.forEach(o => { try { o.stop(); } catch(e){} });
    oscillatorsRef.current = [];

    if (bgPlaying) { setBgPlaying(false); return; }

    // Create soft ambient chord
    const freqs = [174, 220, 261, 329];
    freqs.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = i % 2 === 0 ? "sine" : "triangle";
      osc.frequency.value = freq;
      gain.gain.value = 0.04;
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      oscillatorsRef.current.push(osc);
    });
    setBgPlaying(true);
  }

  // Cleanup
  useEffect(() => {
    return () => {
      synthRef.current?.cancel();
      recognitionRef.current?.stop();
      oscillatorsRef.current.forEach(o => { try { o.stop(); } catch(e){} });
    };
  }, []);

  return (
    <>
      {/* ── WELCOME TOAST ── */}
      {!welcomed && showPulse && (
        <div style={{
          position:"fixed", bottom:"6rem", right:"1.5rem", zIndex:9998,
          background:"linear-gradient(135deg,#0A1628,#0d1e35)",
          border:"1px solid rgba(0,207,255,0.3)", borderRadius:"12px",
          padding:"0.75rem 1.2rem", maxWidth:"240px",
          boxShadow:"0 8px 32px rgba(0,0,0,0.5)",
          animation:"slideInRight 0.5s ease",
        }}>
          <div style={{fontSize:"0.78rem",color:"#00CFFF",fontWeight:600,marginBottom:"0.3rem"}}>
            🔊 Voice Assistant Ready
          </div>
          <div style={{fontSize:"0.72rem",color:"#7a9ab8",lineHeight:1.5}}>
            Click anywhere for a welcome greeting!
          </div>
        </div>
      )}

      {/* ── FLOATING BUTTONS (bottom right) ── */}
      <div style={{
        position:"fixed", bottom:"1.5rem", right:"1.5rem",
        display:"flex", flexDirection:"column", gap:"0.75rem",
        zIndex:9999, alignItems:"flex-end",
      }}>

        {/* Welcome Voice Button */}
        <button
          onClick={() => speakText("Welcome to Kausik AI Labs. AI That Works. Outcomes That Matter. Transforming businesses with AI-led strategy, intelligent systems, and outcome-driven delivery.")}
          title="Play Welcome Message"
          style={{
            width:"46px", height:"46px", borderRadius:"50%",
            background: speaking
              ? "linear-gradient(135deg,#FF6B00,#FF8C00)"
              : "linear-gradient(135deg,#1a3050,#0d1e35)",
            border:"1px solid rgba(255,107,0,0.4)",
            color:"#fff", fontSize:"1.1rem", cursor:"pointer",
            display:"flex", alignItems:"center", justifyContent:"center",
            boxShadow:"0 4px 16px rgba(0,0,0,0.4)",
            transition:"all 0.3s",
            animation: speaking ? "pulse 0.8s infinite" : "none",
          }}
        >
          {speaking ? "🔊" : "🔈"}
        </button>

        {/* Chat Button */}
        <button
          onClick={() => setChatOpen(!chatOpen)}
          title="AI Voice Chat"
          style={{
            width:"56px", height:"56px", borderRadius:"50%",
            background:"linear-gradient(135deg,#7B4FE8,#4A8EE2)",
            border:"none", color:"#fff", fontSize:"1.4rem", cursor:"pointer",
            display:"flex", alignItems:"center", justifyContent:"center",
            boxShadow:"0 6px 24px rgba(100,80,220,0.5)",
            transition:"all 0.3s",
            position:"relative",
          }}
        >
          {chatOpen ? "✕" : "🤖"}
          {!chatOpen && (
            <span style={{
              position:"absolute", top:"-4px", right:"-4px",
              width:"14px", height:"14px", borderRadius:"50%",
              background:"#00E676", border:"2px solid #060d1a",
              animation:"pulse 1.5s infinite",
            }}/>
          )}
        </button>
      </div>

      {/* ── CHAT WINDOW ── */}
      {chatOpen && (
        <div style={{
          position:"fixed", bottom:"8rem", right:"1.5rem",
          width:"340px", maxHeight:"480px",
          background:"linear-gradient(180deg,#080f20,#060d1a)",
          border:"1px solid rgba(77,168,255,0.25)", borderRadius:"16px",
          boxShadow:"0 16px 48px rgba(0,0,0,0.6)",
          display:"flex", flexDirection:"column",
          zIndex:9997, overflow:"hidden",
          animation:"slideInRight 0.3s ease",
        }}>

          {/* Chat header */}
          <div style={{
            padding:"1rem 1.2rem",
            background:"linear-gradient(135deg,rgba(123,79,232,0.3),rgba(74,142,226,0.2))",
            borderBottom:"1px solid rgba(77,168,255,0.15)",
            display:"flex", alignItems:"center", gap:"0.75rem",
          }}>
            <div style={{
              width:"36px", height:"36px", borderRadius:"50%",
              background:"linear-gradient(135deg,#7B4FE8,#4A8EE2)",
              display:"flex", alignItems:"center", justifyContent:"center",
              fontSize:"1.1rem",
            }}>🤖</div>
            <div>
              <div style={{fontSize:"0.88rem",fontWeight:700,color:"#fff"}}>KAL Assistant</div>
              <div style={{fontSize:"0.7rem",color:"#00E676",display:"flex",alignItems:"center",gap:"4px"}}>
                <span style={{width:"6px",height:"6px",borderRadius:"50%",background:"#00E676",display:"inline-block",animation:"pulse 1.5s infinite"}}/>
                {listening ? "Listening..." : speaking ? "Speaking..." : "Online"}
              </div>
            </div>
            <button onClick={() => synthRef.current?.cancel()} style={{
              marginLeft:"auto", background:"transparent", border:"none",
              color:"#7a9ab8", cursor:"pointer", fontSize:"0.8rem", padding:"4px 8px",
              borderRadius:"6px",
            }}>Stop 🔇</button>
          </div>

          {/* Messages */}
          <div style={{
            flex:1, overflowY:"auto", padding:"1rem",
            display:"flex", flexDirection:"column", gap:"0.75rem",
            maxHeight:"300px",
          }}>
            {messages.map((m, i) => (
              <div key={i} style={{
                display:"flex", justifyContent: m.role==="user" ? "flex-end" : "flex-start",
              }}>
                <div style={{
                  maxWidth:"82%",
                  background: m.role==="user"
                    ? "linear-gradient(135deg,#7B4FE8,#4A8EE2)"
                    : "rgba(255,255,255,0.06)",
                  border: m.role==="ai" ? "1px solid rgba(77,168,255,0.15)" : "none",
                  borderRadius: m.role==="user" ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
                  padding:"0.65rem 0.9rem",
                  fontSize:"0.8rem", color:"#fff", lineHeight:1.55,
                }}>
                  {m.text}
                  {m.role==="ai" && (
                    <button onClick={() => speakText(m.text)} style={{
                      display:"block", marginTop:"0.4rem",
                      background:"transparent", border:"none",
                      color:"#4DA8FF", cursor:"pointer", fontSize:"0.7rem", padding:0,
                    }}>🔊 Play</button>
                  )}
                </div>
              </div>
            ))}
            {/* Listening indicator */}
            {(listening || transcript) && (
              <div style={{display:"flex",justifyContent:"flex-end"}}>
                <div style={{
                  background:"rgba(123,79,232,0.2)",border:"1px solid rgba(123,79,232,0.4)",
                  borderRadius:"16px 16px 4px 16px",padding:"0.65rem 0.9rem",
                  fontSize:"0.8rem",color:"#a78bfa",fontStyle:"italic",
                }}>
                  {transcript || "🎙️ Listening..."}
                </div>
              </div>
            )}
            <div ref={messagesEndRef}/>
          </div>

          {/* Input row */}
          <div style={{
            padding:"0.75rem 1rem",
            borderTop:"1px solid rgba(77,168,255,0.12)",
            display:"flex", gap:"0.5rem", alignItems:"center",
          }}>
            <form onSubmit={sendTyped} style={{flex:1,display:"flex",gap:"0.5rem"}}>
              <input
                value={inputVal}
                onChange={e => setInputVal(e.target.value)}
                placeholder="Type or use mic..."
                style={{
                  flex:1, background:"rgba(255,255,255,0.06)",
                  border:"1px solid rgba(77,168,255,0.2)",
                  borderRadius:"8px", padding:"0.55rem 0.8rem",
                  color:"#fff", fontSize:"0.8rem", outline:"none",
                  fontFamily:"inherit",
                }}
              />
              <button type="submit" style={{
                background:"linear-gradient(135deg,#7B4FE8,#4A8EE2)",
                border:"none", borderRadius:"8px",
                color:"#fff", cursor:"pointer", padding:"0.55rem 0.8rem",
                fontSize:"0.85rem",
              }}>➤</button>
            </form>

            {/* Mic button */}
            <button
              onMouseDown={startListening}
              onMouseUp={stopListening}
              onTouchStart={startListening}
              onTouchEnd={stopListening}
              title="Hold to speak"
              style={{
                width:"38px", height:"38px", borderRadius:"50%",
                background: listening
                  ? "linear-gradient(135deg,#ef4444,#dc2626)"
                  : "linear-gradient(135deg,#1a3050,#0d1e35)",
                border:`1px solid ${listening?"#ef4444":"rgba(77,168,255,0.3)"}`,
                color:"#fff", cursor:"pointer", fontSize:"1rem",
                display:"flex", alignItems:"center", justifyContent:"center",
                transition:"all 0.2s", flexShrink:0,
                animation: listening ? "pulse 0.6s infinite" : "none",
              }}
            >
              {listening ? "🔴" : "🎙️"}
            </button>
          </div>

          {/* Hint */}
          <div style={{
            padding:"0.4rem 1rem 0.6rem",
            fontSize:"0.65rem", color:"#2a4a6a", textAlign:"center",
          }}>
            Hold 🎙️ to speak • Ask about services, products, contact
          </div>
        </div>
      )}

      {/* ── GLOBAL ANIMATIONS ── */}
      <style>{`
        @keyframes slideInRight {
          from { opacity:0; transform:translateX(20px); }
          to   { opacity:1; transform:none; }
        }
        @keyframes pulse {
          0%,100% { transform:scale(1); opacity:1; }
          50%      { transform:scale(1.15); opacity:0.7; }
        }
      `}</style>
    </>
  );
}
