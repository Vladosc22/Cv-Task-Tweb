// ─── DATE CV — editează aici ──────────────────────────────────────────────────
const CV_DATA ={

    name: "Chiochiu Vladislav",
    title: "Student • Informatică și Ingineria Sistemelor",
    university: "Universitatea Tehnică a Moldovei — Anul II",
    contact: {
        email: "chiochiu.vlad@gmail.com",
        phone: "+373 6X XXX XXX",
        github: "github.com/vladosc22",
        linkedin: "linkedin.com/in/vladchiochiu",
        location: "Chișinău, Moldova",
    },
    about:
        "Student în Anul II la FCIM UTM, specializarea Informatică și Ingineria Sistemelor. Construiesc aplicații back-end cu Java & Spring Boot și am experiență practică cu baze de date relaționale, REST API și front-end modern cu React. Caut să aplic cunoștințele dobândite în proiecte reale și să cresc continuu ca developer.",
    education: [
        {
            degree: "Licență — Informatică și Ingineria Sistemelor",
            school: "Universitatea Tehnică a Moldovei, FCIM",
            period: "2023 – prezent",
            details: [
                "Cursuri: Algoritmi & Structuri de Date, POO, Baze de Date, Rețele de Calculatoare",
                "Media generală: [X.X] / 10",
            ],
        },
        {
            degree: "Bacalaureat — Profil Matematică-Informatică",
            school: "[Liceul / Colegiul tău]",
            period: "Absolvit [YYYY]",
            details: [],
        },
    ],
    skills: [
        {
            category: "Backend",
            items: ["Java", "Spring Boot", "Spring MVC", "Spring Data JPA", "REST API", "Maven"],
        },
        {
            category: "Frontend",
            items: ["JavaScript", "React", "HTML5", "CSS3"],
        },
        {
            category: "Baze de Date",
            items: ["SQL", "PostgreSQL", "MySQL", "Hibernate"],
        },
        {
            category: "Tools",
            items: ["Git", "GitHub", "IntelliJ IDEA", "VS Code", "Postman", "Linux CLI"],
        },
        {
            category: "Concepte",
            items: ["OOP", "SOLID", "Design Patterns", "Agile / Scrum"],
        },
    ],
    projects: [
        {
            name: "Eco sistem app",
            stack: "Java · Spring Boot · PostgreSQL · JWT · JUnit 5",
            period: "2024",
            bullets: [
                "REST API complet (CRUD) pentru gestionarea studenților, cursurilor și notelor.",
                "Autentificare cu Spring Security + JWT; migrații DB cu Flyway.",
                "Testat cu JUnit 5 & Mockito (~70% acoperire). Disponibil pe GitHub.",
            ],
        },
        {
            name: "Sistem de managemnt al policliniclor",
            stack: "Java · Spring MVC · Hibernate · MySQL · Thymeleaf",
            period: "2024",
            bullets: [
                "Aplicație web MVC pentru cumpărarea și gestionarea biletelor la evenimente.",
                "Relații many-to-many între utilizatori și evenimente, mapate cu Hibernate ORM.",
                "Proiect de echipă (3 persoane) — responsabil de layer-ul Service și Repository.",
            ],
        },
        {
            name: "[Proiectul tău 3]",
            stack: "[Tech stack]",
            period: "[An]",
            bullets: [
                "Descrie ce face aplicația în 1-2 propoziții.",
                "Ce tehnologie interesantă ai folosit sau ce ai învățat?",
            ],
        },
    ],
    languages: [
        { lang: "Română",  level: "Limbă maternă",   pct: 100 },
        { lang: "Engleză", level: "B2 – Avansat",      pct: 80  },
        { lang: "Rusă",    level: "B1 – Intermediar",  pct: 60  },
    ],
    hobbies: [
        // { icon: "🎮", name: "Game Dev",     desc: "Experimentez cu Unity — bun pretext pentru design patterns." },
        { icon: "🏋️", name: "Sport",       desc: "Sală de 3 ori pe săptămână. Disciplina se reflectă și în cod." },
        { icon: "📚", name: "Cărți tech",  desc: "Clean Code, Effective Java, Head First Design Patterns." },
        // { icon: "🎸", name: "Chitară",     desc: "4 ani — rock clasic și fingerstyle." },
        { icon: "🌍", name: "Open Source", desc: "Urmăresc proiecte Spring pe GitHub, PR-uri mici." },
    ],
};

// ─── STYLES ──────────────────────────────────────────────────────────────────
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@400;500&family=Inter:wght@300;400;500;600&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --navy:  #0f2540;
    --navy2: #1a3a5c;
    --blue:  #2563eb;
    --sky:   #93c5fd;
    --lt:    #e8f0fe;
    --white: #ffffff;
    --ink:   #1e293b;
    --mid:   #475569;
    --muted: #94a3b8;
    --bdr:   #cbd5e1;
    --bg:    #f8faff;
  }

  body { background: var(--bg); font-family: 'Inter', sans-serif; color: var(--ink); }

  .cv-wrap {
    max-width: 900px;
    margin: 32px auto;
    background: var(--white);
    box-shadow: 0 4px 40px rgba(15,37,64,.13), 0 1px 4px rgba(15,37,64,.07);
    border-radius: 4px;
    overflow: hidden;
  }

  /* ── HEADER ── */
  .cv-header {
    background: linear-gradient(135deg, var(--navy) 0%, var(--navy2) 55%, #1e4d7b 100%);
    padding: 44px 52px 36px;
    position: relative;
    overflow: hidden;
  }
  .cv-header::before {
    content: '';
    position: absolute; top: -80px; right: -80px;
    width: 300px; height: 300px; border-radius: 50%;
    border: 50px solid rgba(147,197,253,.06); pointer-events: none;
  }
  .cv-header::after {
    content: '';
    position: absolute; bottom: -50px; right: 160px;
    width: 160px; height: 160px; border-radius: 50%;
    border: 28px solid rgba(147,197,253,.04); pointer-events: none;
  }
  .hdr-name {
    font-family: 'DM Serif Display', serif;
    font-size: 3rem; color: var(--white);
    line-height: 1.1; letter-spacing: -.5px; margin-bottom: 6px;
  }
  .hdr-title {
    font-size: .82rem; color: var(--sky);
    letter-spacing: .06em; text-transform: uppercase;
    font-weight: 500; margin-bottom: 3px;
  }
  .hdr-uni {
    font-size: .78rem; color: rgba(147,197,253,.65);
    font-style: italic; margin-bottom: 22px;
  }
  .contact-row { display: flex; flex-wrap: wrap; gap: 6px 22px; }
  .contact-item {
    display: flex; align-items: center; gap: 5px;
    font-size: .75rem; color: rgba(186,220,245,.82);
    font-family: 'DM Mono', monospace;
  }
  .contact-item .ci { opacity: .6; }

  /* ── BODY GRID ── */
  .cv-body { display: grid; grid-template-columns: 1fr 290px; }

  /* ── MAIN ── */
  .cv-main { padding: 40px 44px 44px 52px; border-right: 1px solid var(--bdr); }

  /* ── SIDEBAR ── */
  .cv-side { padding: 40px 36px 44px 32px; background: var(--bg); }

  /* ── SECTION LABEL ── */
  .sec-label {
    display: flex; align-items: center; gap: 10px;
    font-family: 'DM Mono', monospace;
    font-size: .65rem; font-weight: 500;
    letter-spacing: .14em; text-transform: uppercase;
    color: var(--blue); margin-bottom: 18px;
  }
  .sec-label::after {
    content: ''; flex: 1; height: 1px;
    background: linear-gradient(to right, var(--bdr), transparent);
  }
  .sec-block { margin-bottom: 34px; }

  /* ── ABOUT ── */
  .about-text {
    font-size: .855rem; line-height: 1.78; color: var(--mid);
    border-left: 3px solid var(--blue); padding-left: 16px;
  }

  /* ── EDUCATION ── */
  .edu-item { margin-bottom: 18px; }
  .edu-row { display: flex; justify-content: space-between; align-items: flex-start; gap: 8px; }
  .edu-degree { font-size: .875rem; font-weight: 600; color: var(--ink); }
  .edu-period {
    font-family: 'DM Mono', monospace; font-size: .7rem;
    color: var(--muted); white-space: nowrap; padding-top: 2px;
  }
  .edu-school { font-size: .78rem; color: var(--mid); margin: 3px 0 8px; }
  .edu-details { list-style: none; }
  .edu-details li {
    font-size: .76rem; color: var(--muted);
    padding: 2px 0 2px 14px; position: relative; line-height: 1.6;
  }
  .edu-details li::before { content: '—'; position: absolute; left: 0; color: var(--bdr); }

  /* ── PROJECTS ── */
  .project-card {
    border: 1px solid var(--bdr); border-left: 3px solid var(--blue);
    border-radius: 4px; padding: 16px 18px; margin-bottom: 14px;
    background: var(--white); transition: box-shadow .2s, border-left-color .2s;
  }
  .project-card:hover {
    box-shadow: 0 4px 18px rgba(37,99,235,.09);
    border-left-color: var(--navy);
  }
  .proj-row { display: flex; justify-content: space-between; align-items: flex-start; gap: 8px; margin-bottom: 4px; }
  .proj-name { font-size: .875rem; font-weight: 600; color: var(--ink); }
  .proj-period { font-family: 'DM Mono', monospace; font-size: .68rem; color: var(--muted); }
  .proj-stack {
    font-family: 'DM Mono', monospace; font-size: .68rem;
    color: var(--blue); margin-bottom: 10px; opacity: .9;
  }
  .proj-bullets { list-style: none; }
  .proj-bullets li {
    font-size: .79rem; color: var(--mid); line-height: 1.65;
    padding: 2px 0 2px 14px; position: relative;
  }
  .proj-bullets li::before { content: '›'; position: absolute; left: 0; color: var(--blue); font-weight: 700; font-size: 1em; }

  /* ── SKILLS ── */
  .skill-group { margin-bottom: 18px; }
  .skill-cat {
    font-family: 'DM Mono', monospace; font-size: .65rem;
    letter-spacing: .09em; text-transform: uppercase;
    color: var(--navy2); font-weight: 500; margin-bottom: 7px;
  }
  .tags { display: flex; flex-wrap: wrap; gap: 5px; }
  .tag {
    font-size: .7rem; padding: 3px 9px; border-radius: 2px;
    background: var(--lt); color: var(--blue);
    border: 1px solid rgba(37,99,235,.18);
    font-family: 'DM Mono', monospace;
    transition: background .15s, color .15s; cursor: default;
  }
  .tag:hover { background: var(--blue); color: var(--white); }

  /* ── LANGUAGES ── */
  .lang-item { margin-bottom: 14px; }
  .lang-top { display: flex; justify-content: space-between; margin-bottom: 5px; }
  .lang-name { font-size: .8rem; font-weight: 600; color: var(--ink); }
  .lang-level { font-size: .7rem; color: var(--muted); font-family: 'DM Mono', monospace; }
  .lang-track { height: 4px; background: var(--bdr); border-radius: 2px; overflow: hidden; }
  .lang-fill {
    height: 100%; border-radius: 2px;
    background: linear-gradient(to right, var(--navy2), var(--blue));
  }

  /* ── HOBBIES ── */
  .hobbies-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
  .hobby-card {
    background: var(--white); border: 1px solid var(--bdr);
    border-radius: 4px; padding: 12px 10px;
    transition: border-color .2s;
  }
  .hobby-card:hover { border-color: var(--blue); }
  .hobby-icon { font-size: 1.25rem; margin-bottom: 5px; }
  .hobby-name { font-size: .74rem; font-weight: 600; color: var(--ink); margin-bottom: 3px; }
  .hobby-desc { font-size: .67rem; color: var(--muted); line-height: 1.5; }

  /* ── PRINT ── */
  @media print {
    body { background: white; }
    .cv-wrap { box-shadow: none; margin: 0; border-radius: 0; max-width: 100%; }
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 680px) {
    .cv-body { grid-template-columns: 1fr; }
    .cv-main { padding: 28px 24px; border-right: none; border-bottom: 1px solid var(--bdr); }
    .cv-side { padding: 28px 24px; }
    .cv-header { padding: 32px 24px 28px; }
    .hdr-name { font-size: 2.2rem; }
  }
`;

// ─── COMPONENTE ───────────────────────────────────────────────────────────────
function SecLabel({ children }) {
    return <div className="sec-label">{children}</div>;
}

function Header({ d }) {
    return (
        <header className="cv-header">
            <div className="hdr-name">{d.name}</div>
            <div className="hdr-title">{d.title}</div>
            <div className="hdr-uni">{d.university}</div>
            <div className="contact-row">
                {[
                    ["📧", d.contact.email],
                    ["📱", d.contact.phone],
                    ["🐙", d.contact.github],
                    ["💼", d.contact.linkedin],
                    ["📍", d.contact.location],
                ].map(([icon, val]) => (
                    <div className="contact-item" key={val}>
                        <span className="ci">{icon}</span>{val}
                    </div>
                ))}
            </div>
        </header>
    );
}

function Main({ d }) {
    return (
        <main className="cv-main">
            <section className="sec-block">
                <SecLabel>Despre mine</SecLabel>
                <p className="about-text">{d.about}</p>
            </section>

            <section className="sec-block">
                <SecLabel>Educație</SecLabel>
                {d.education.map((e, i) => (
                    <div className="edu-item" key={i}>
                        <div className="edu-row">
                            <div className="edu-degree">{e.degree}</div>
                            <div className="edu-period">{e.period}</div>
                        </div>
                        <div className="edu-school">{e.school}</div>
                        {e.details.length > 0 && (
                            <ul className="edu-details">
                                {e.details.map((det, j) => <li key={j}>{det}</li>)}
                            </ul>
                        )}
                    </div>
                ))}
            </section>

            <section className="sec-block">
                <SecLabel>Proiecte</SecLabel>
                {d.projects.map((p, i) => (
                    <div className="project-card" key={i}>
                        <div className="proj-row">
                            <div className="proj-name">{p.name}</div>
                            <div className="proj-period">{p.period}</div>
                        </div>
                        <div className="proj-stack">{p.stack}</div>
                        <ul className="proj-bullets">
                            {p.bullets.map((b, j) => <li key={j}>{b}</li>)}
                        </ul>
                    </div>
                ))}
            </section>
        </main>
    );
}

function Sidebar({ d }) {
    return (
        <aside className="cv-side">
            <section className="sec-block">
                <SecLabel>Competențe</SecLabel>
                {d.skills.map((g, i) => (
                    <div className="skill-group" key={i}>
                        <div className="skill-cat">{g.category}</div>
                        <div className="tags">
                            {g.items.map(s => <span className="tag" key={s}>{s}</span>)}
                        </div>
                    </div>
                ))}
            </section>

            <section className="sec-block">
                <SecLabel>Limbi</SecLabel>
                {d.languages.map((l, i) => (
                    <div className="lang-item" key={i}>
                        <div className="lang-top">
                            <span className="lang-name">{l.lang}</span>
                            <span className="lang-level">{l.level}</span>
                        </div>
                        <div className="lang-track">
                            <div className="lang-fill" style={{ width: `${l.pct}%` }} />
                        </div>
                    </div>
                ))}
            </section>

            <section className="sec-block">
                <SecLabel>Interese</SecLabel>
                <div className="hobbies-grid">
                    {d.hobbies.map((h, i) => (
                        <div className="hobby-card" key={i}>
                            <div className="hobby-icon">{h.icon}</div>
                            <div className="hobby-name">{h.name}</div>
                            <div className="hobby-desc">{h.desc}</div>
                        </div>
                    ))}
                </div>
            </section>
        </aside>
    );
}

// ─── EXPORT ───────────────────────────────────────────────────────────────────
export default function CV() {
    return (
        <>
            <style>{styles}</style>
            <div className="cv-wrap">
                <Header d={CV_DATA} />
                <div className="cv-body">
                    <Main d={CV_DATA} />
                    <Sidebar d={CV_DATA} />
                </div>
            </div>
        </>
    );
}