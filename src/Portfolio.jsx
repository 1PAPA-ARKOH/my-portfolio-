import {useState} from "react"

const PROFILE = {
    name : "PATECH",
    role : "Frontend Developer",
    headline: "I design and build interfaces people enjoy using.",
    intro: "Based in Accra. I take ideas from first sketch to shipped product, with clean code and careful details.",
    photo : "",
    email : "papaarkohm@gmail.com",

    links : [
        {label: "Github", href: "https://github.com/1PAPA-ARKOH"},
        {label: "LinkedIn", href: "https://www.linkedin.com/in/papa-arkoh-mensah-bb3564251?utm_source=share_via&utm_content=profile&utm_medium=member_ios"},
        {label: "Instagram", href: "https://instagram.com/donbillss_"},
        {label: "Snapchat", href: "https://snapchat.com/don_billss"}
    ],

    chips: ["React", "Python", "HTML, CSS & Javascript" ]
};

const PROJECTS = [
  { title: "Water Shop POS", type: "App", year: "2026", stack: "Visual Basic", blurb: "Point-of-sale and inventory system with instant product search.", c1: "#2f5bff", c2: "#7ad7ff" },
  { title: "School Examination System", type: "Web", year: "2026", stack: "HTML, CSS, Javascript", blurb: "Built an examination management system enables schools and organisations to conduct, monitor, and assess exams digitally, reducing manual work while ensuring a seamless experience for administrators and students.", c1: "#ff7a59", c2: "#ffd24a" },
  { title: "Portfolio Site", type: "Web", year: "2026", stack: "React", blurb: "This site, built to grow with every project I ship.", c1: "#7a4dff", c2: "#ff8ad8" },
  { title: "Hotel Reservation system", type: "App", year: "2026", stack: "Visual Basic", blurb: "Developed using Visual Basic, this system simplifies daily hotel management by automating bookings, guest records, payments, and room management, reducing administrative workload and improving service delivery.", c1: "#13b884", c2: "#b6f06a" },
  {title: "Java Chatbot system", type: " App", year: "2026", stack:"Java", blurb: "An intelligent Java-based chatbot designed to enhance visitor engagement by collecting preferred visit dates and times, automatically recording bookings, and simplifying appointment scheduling for museum management.", c1: "#2ecf9c", c2: "#9eed35" }
];

const SKILLS = {
  Languages: ["JavaScript", "JAVA", "Python", "Visual Basic"],
  Frontend: ["React", "HTML & CSS", "Responsive design"],
  Tools: ["Git", "VS Code"],
};
const FILTERS = ["All", "App", "Web", "Tool"];

export default function Portfolio(){
    const [filter, setFilter ] = useState("All");
    const [dark, setDark] = useState(false);
    const shown = PROJECTS.filter((p) => filter === "All" || p.type === filter);
    const initials = PROFILE.name.split(" ").map((w) => w[0]).join("").slice(0, 2);


    return (

          <div className={dark ? "pf dark" : "pf"}>
      <style>{css}</style>

      <header className="nav">
        <a className="brand" href="#top">{PROFILE.name}</a>
        <nav>
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
          <button className="theme" onClick={() => setDark(!dark)} aria-label="Toggle dark mode">
            {dark ? "Light" : "Dark"}
          </button>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-text">
            <p className="status"><span className="dot" />Open to new projects</p>
            <h1>{PROFILE.headline}</h1>
            <p className="intro">{PROFILE.intro}</p>
            <div className="actions">
              <a className="btn primary" href="#work">See my work</a>
              <a className="btn" href={`mailto:${PROFILE.email}`}>Email me</a>
            </div>
          </div>

          <div className="portrait" aria-hidden={!PROFILE.photo}>
            <div className="frame">
              {PROFILE.photo ? <img src={PROFILE.photo}  /> : <span>{initials}</span>}
            </div>
            {PROFILE.chips.map((c, i) => (
              <span key={c} className={`chip chip${i}`}>{c}</span>
            ))}
          </div>
        </section>

        <section id="work" className="block">
          <div className="block-head">
            <div>
              <h2>Selected work</h2>
              <p className="sub">{PROFILE.role}, building real tools for real people.</p>
            </div>
            <div className="tabs" role="tablist" aria-label="Filter projects">
              {FILTERS.map((f) => (
                <button key={f} role="tab" aria-selected={filter === f}
                  className={filter === f ? "tab on" : "tab"} onClick={() => setFilter(f)}>
                  {f}
                </button>
              ))}
            </div>
          </div>

          <ul className="grid">
            {shown.map((p) => (
              <li key={p.title} className="card">
                <div className="cover" style={{ background: `linear-gradient(135deg, ${p.c1}, ${p.c2})` }}>
                  <span className="cover-type">{p.type}</span>
                  <span className="cover-glyph">{p.title[0]}</span>
                </div>
                <div className="card-body">
                  <div className="card-top"><h3>{p.title}</h3><span>{p.year}</span></div>
                  <p>{p.blurb}</p>
                  <span className="stack">{p.stack}</span>
                </div>
              </li>
            ))}
          </ul>
          {shown.length === 0 && <p className="sub">No projects here yet. Add one to the PROJECTS list.</p>}
        </section>

        <section id="skills" className="block">
          <h2>What I work with</h2>
          <div className="skills">
            {Object.entries(SKILLS).map(([group, items]) => (
              <div key={group} className="skill-col">
                <h3>{group}</h3>
                <div className="pills">{items.map((s) => <span key={s}>{s}</span>)}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="cta">
          <h2>Let’s build something together</h2>
          <p>Have a project or an opportunity in mind? My inbox is open.</p>
          <a className="btn light" href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
          <p className="links">
            {PROFILE.links.map((l) => <a key={l.label} href={l.href} target="_blank" rel="noreferrer">{l.label}</a>)}
          </p>
        </section>
      </main>

      <footer>© {new Date().getFullYear()} {PROFILE.name}</footer>
    </div>
  );
}


/* ---------- Styles ---------- */
const css = `
@import url("https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700;12..96,800&family=Instrument+Sans:wght@400;500;600&display=swap");

html, body, #root {
  margin: 0 !important;
  padding: 0 !important;
  width: 100% !important;
  max-width: none !important;
  min-height: 100vh;
  display: block !important;
  text-align: left !important;
}
html:has(.pf.dark), body:has(.pf.dark) { background: #101a2b !important; }
html:has(.pf:not(.dark)), body:has(.pf:not(.dark)) { background: #eaf0f6 !important; }

.pf{--bg:#eaf0f6; --surface:#fff; --ink:#12233a; --muted:#566781; --line:#d3dce7; --accent:#2f5bff; --sun:#ffd24a; --shadow:0 18px 40px -18px rgba(18,35,58,.28);
  background:radial-gradient(900px 500px at 85% -5%, rgba(47,91,255,.14), transparent 60%), var(--bg);
  color:var(--ink); font-family:"Instrument Sans",system-ui,sans-serif; line-height:1.6; min-height:100vh; scroll-behavior:smooth; transition:background .3s,color .3s}
.pf.dark{--bg:#101a2b; --surface:#192740; --ink:#e8eefb; --muted:#9aabc6; --line:#27385a; --accent:#7f9bff; --shadow:0 18px 40px -18px rgba(0,0,0,.6)}
.pf *{box-sizing:border-box}
.pf a{color:inherit; text-decoration:none}
.pf a:focus-visible,.pf button:focus-visible{outline:3px solid var(--accent); outline-offset:3px; border-radius:8px}
.pf h1,.pf h2,.pf h3{font-family:"Bricolage Grotesque",sans-serif; margin:0; line-height:1.05}

.nav{position:sticky; top:12px; z-index:5; display:flex; justify-content:space-between; align-items:center; gap:16px;
  margin:12px auto 0; width:min(1100px,calc(100% - 32px)); padding:10px 14px 10px 22px; border-radius:999px;
  background:color-mix(in srgb,var(--surface) 80%,transparent); backdrop-filter:blur(12px); border:1px solid var(--line); box-shadow:var(--shadow)}
.brand{font-family:"Bricolage Grotesque",sans-serif; font-weight:700}
.nav nav{display:flex; align-items:center; gap:22px; font-weight:500}
.nav nav a:hover{color:var(--accent)}
.theme{font:inherit; font-weight:600; cursor:pointer; padding:6px 14px; border-radius:999px; border:1px solid var(--line); background:var(--surface); color:var(--ink)}
.theme:hover{border-color:var(--accent)}

main{width:min(1100px,calc(100% - 40px)); margin:0 auto}

.hero{display:grid; grid-template-columns:1.25fr 1fr; gap:48px; align-items:center; padding:clamp(48px,9vw,110px) 0}
.status{display:inline-flex; align-items:center; gap:10px; margin:0 0 24px; padding:6px 14px; border-radius:999px; background:var(--surface); border:1px solid var(--line); font-size:.9rem; color:var(--muted)}
.dot{width:9px; height:9px; border-radius:50%; background:#1fbf75; box-shadow:0 0 0 4px rgba(31,191,117,.22)}
.hero h1{font-size:clamp(2.4rem,6vw,4.6rem); font-weight:800; letter-spacing:-.03em; max-width:14ch}
.intro{max-width:46ch; margin:24px 0 32px; font-size:1.12rem; color:var(--muted)}
.actions{display:flex; gap:12px; flex-wrap:wrap}
.btn{display:inline-block; padding:13px 24px; border-radius:12px; border:1.5px solid var(--ink); font-weight:600; transition:transform .15s,box-shadow .15s,background .15s}
.btn:hover{transform:translateY(-2px); box-shadow:var(--shadow)}
.btn.primary{background:var(--accent); border-color:var(--accent); color:#fff}
.btn.light{background:#fff; border-color:#fff; color:#12233a}

.portrait{position:relative; justify-self:center; width:min(360px,80%)}
.frame{aspect-ratio:4/5; border-radius:32px; overflow:hidden; transform:rotate(3deg); box-shadow:var(--shadow);
  background:linear-gradient(145deg,var(--accent),#7ad7ff 60%,var(--sun)); display:grid; place-items:center}
.frame img{width:100%; height:100%; object-fit:cover}
.frame span{font-family:"Bricolage Grotesque",sans-serif; font-size:6rem; font-weight:800; color:#fff; letter-spacing:-.04em}
.chip{position:absolute; padding:8px 16px; border-radius:999px; background:var(--surface); border:1px solid var(--line); box-shadow:var(--shadow); font-weight:600; font-size:.9rem; animation:float 5s ease-in-out infinite}
.chip0{top:10%; left:-14%} .chip1{bottom:22%; right:-12%; animation-delay:-1.6s} .chip2{bottom:-3%; left:6%; animation-delay:-3.2s}
@keyframes float{50%{transform:translateY(-8px)}}

.block{padding:64px 0 24px}
.block-head{display:flex; justify-content:space-between; align-items:flex-end; gap:16px; flex-wrap:wrap; margin-bottom:28px}
.block h2{font-size:clamp(1.8rem,4vw,2.6rem); letter-spacing:-.02em}
.sub{margin:8px 0 0; color:var(--muted)}
.tabs{display:flex; gap:6px; padding:5px; border-radius:999px; background:var(--surface); border:1px solid var(--line)}
.tab{font:inherit; font-weight:500; padding:7px 16px; border-radius:999px; border:0; background:transparent; color:var(--muted); cursor:pointer}
.tab:hover{color:var(--ink)}
.tab.on{background:var(--ink); color:var(--bg)}

.grid{list-style:none; margin:0; padding:0; display:grid; grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr)); gap:24px}
.card{background:var(--surface); border:1px solid var(--line); border-radius:24px; overflow:hidden; box-shadow:var(--shadow); transition:transform .25s}
.card:hover{transform:translateY(-6px)}
.cover{height:170px; position:relative; overflow:hidden; padding:16px}
.cover-type{position:relative; padding:4px 12px; border-radius:999px; background:rgba(255,255,255,.85); color:#12233a; font-size:.82rem; font-weight:600}
.cover-glyph{position:absolute; right:-6px; bottom:-34px; font-family:"Bricolage Grotesque",sans-serif; font-weight:800; font-size:10rem; line-height:1; color:rgba(255,255,255,.35)}
.card-body{padding:20px 22px 24px}
.card-top{display:flex; justify-content:space-between; align-items:baseline; gap:12px}
.card-top h3{font-size:1.4rem}
.card-top span{color:var(--muted); font-size:.9rem}
.card-body p{margin:8px 0 14px; color:var(--muted)}
.stack{display:inline-block; padding:3px 12px; border-radius:999px; border:1px solid var(--line); font-size:.85rem; font-weight:500}

.skills{display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:20px; margin-top:28px}
.skill-col{background:var(--surface); border:1px solid var(--line); border-radius:20px; padding:22px}
.skill-col h3{font-size:1.1rem; margin-bottom:14px}
.pills{display:flex; flex-wrap:wrap; gap:8px}
.pills span{padding:5px 13px; border-radius:999px; background:color-mix(in srgb,var(--accent) 12%,transparent); font-weight:500; font-size:.92rem}

.cta{margin:72px 0 56px; padding:clamp(36px,7vw,72px); border-radius:32px; text-align:center; color:#fff;
  background:linear-gradient(135deg,#1b2f8a,var(--accent) 60%,#5aa8ff); box-shadow:var(--shadow)}
.cta h2{font-size:clamp(1.9rem,5vw,3rem); letter-spacing:-.02em}
.cta p{margin:14px auto 26px; max-width:44ch; opacity:.9}
.cta .links{display:flex; justify-content:center; gap:22px; margin:26px 0 0; font-weight:500}
.cta .links a:hover{text-decoration:underline}

footer{text-align:center; padding:24px; color:var(--muted); font-size:.9rem}

@media (max-width:820px){
  .hero{grid-template-columns:1fr; gap:40px}
  .chip0{left:-4%} .chip1{right:-4%}
  .nav nav{gap:14px}
}
@media (prefers-reduced-motion:reduce){.pf *{animation:none!important; transition:none!important}}
`;