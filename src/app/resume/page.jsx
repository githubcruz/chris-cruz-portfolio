import Cursor from "@/components/Cursor";
const experience = [
 {name:"Meta",role:"Creative Designer",date:"March 2020 – Present",location:"Menlo Park, CA",bullets:[
 "Built and maintained a Figma component library by auditing assets and standardizing patterns across collaborators.",
 "Designed web and mobile learning experiences for Meta Blueprint, including UI assets, motion graphics, and learning content.",
 "Contributed to initiatives reporting 25% higher user engagement and 30% more website traffic.",
 "Created videos and visual assets that made complex product and marketing topics more accessible.",
 "Collaborated with art directors, designers, and stakeholders to balance usability, brand standards, and delivery.",
 "Led design and prototyping for an image-privacy concept spanning Facebook, Instagram, and WhatsApp."
 ]},
 {name:"BART",role:"Human-Centered Designer",date:"September – December 2019",location:"San Francisco, CA",bullets:[
 "Led user research and usability testing for fare gate improvements and analyzed passenger behavior and errors.",
 "Project-reported outcomes included 25% fewer user errors, 5% higher gate efficiency, and a 55–60% reduction in fare evasion after installation."
 ]}
];
export const metadata={title:"Resume | Chris Cruz",description:"Chris Cruz — senior visual and product designer, experience and skills."};
export default function ResumePage(){return <main className="portfolio-cursor resume-page" style={{background:"#ffffff",color:"#121212",minHeight:"100vh",fontFamily:"var(--font-inter), Inter, Arial, sans-serif",padding:"48px max(24px,calc((100vw - 900px)/2))"}}>
<Cursor light />
<a className="resume-link" href="/" style={{color:"#0072FC",textDecoration:"none",letterSpacing:".1em",fontSize:13,fontWeight:700}}>← BACK TO PORTFOLIO</a>
<header style={{borderBottom:"1px solid #dedede",padding:"50px 0 32px"}}><h1 style={{fontSize:"clamp(42px,7vw,76px)",letterSpacing:"-.06em",margin:"0 0 12px"}}>Chris Cruz<span style={{color:"#0072FC"}}>.</span></h1><p style={{fontSize:19,margin:"0 0 18px",color:"#333333"}}>Senior Visual & Product Designer · UI/UX · Prototyping · Design Systems</p><p style={{color:"#666666",lineHeight:1.8,margin:0}}>Bay Area, California · <a className="resume-link" style={{color:"#0072FC"}} href="mailto:chrissscruz@gmail.com">chrissscruz@gmail.com</a> · <a className="resume-link" style={{color:"#0072FC"}} href="https://chriscruz.tech">chriscruz.tech</a> · <a className="resume-link" style={{color:"#0072FC"}} href="https://linkedin.com/in/cruzchris">LinkedIn</a></p></header>
<section style={{paddingTop:32}}><h2 style={{color:"#0072FC",fontSize:13,letterSpacing:".22em"}}>PROFILE</h2><p style={{color:"#333333",lineHeight:1.8}}>Multidisciplinary designer with 6+ years at Meta creating digital products, user experiences, and scalable visual systems. Experienced in UI/UX design, prototyping, user-centered research, and translating complex ideas into intuitive experiences. Works from early concepts through production-ready designs with cross-functional teams.</p></section>
<section style={{paddingTop:24}}><h2 style={{color:"#0072FC",fontSize:13,letterSpacing:".22em"}}>EXPERIENCE</h2>{experience.map(job=><article key={job.name} style={{margin:"32px 0"}}><h3 style={{fontSize:23,margin:0,color:"#161616"}}>{job.name} — {job.role}</h3><p style={{color:"#777777",fontSize:13}}>{job.location} · {job.date}</p><ul style={{paddingLeft:22,color:"#555555",lineHeight:1.75}}>{job.bullets.map(b=><li key={b} style={{marginBottom:9}}>{b}</li>)}</ul></article>)}</section>
<section style={{padding:"25px 0"}}><h2 style={{color:"#0072FC",fontSize:13,letterSpacing:".22em"}}>CORE SKILLS</h2><p style={{lineHeight:1.8,color:"#555555"}}><b>Design:</b> Visual design, brand systems, typography, art direction, iconography, digital campaigns</p><p style={{lineHeight:1.8,color:"#555555"}}><b>Product & Systems:</b> Figma component libraries, web/mobile UI, prototyping, user testing, HTML/CSS</p><p style={{lineHeight:1.8,color:"#555555"}}><b>Motion & Content:</b> Motion graphics, video production, multimedia, infographics</p><p style={{lineHeight:1.8,color:"#555555"}}><b>Collaboration:</b> Creative concepting, cross-functional collaboration, stakeholder communication</p></section>
<section style={{padding:"10px 0 60px"}}><h2 style={{color:"#0072FC",fontSize:13,letterSpacing:".22em"}}>EDUCATION</h2><p style={{color:"#333333"}}>Academy of Art University — MA, Web Design and New Media · San Francisco, CA</p></section>
<p style={{fontSize:12,color:"#777777"}}>Online resume adapted from the supplied PDF. A downloadable PDF will be added separately.</p></main>}
