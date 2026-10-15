/* ===== 1. YOUR DETAILS (edit only this block) ===== */
const ME = {
  email:   "sriharshamedarametla2@gmail.com",
  github:  "https://github.com/sriharsha55",
  linkedin:"linkedin.com/in/sriharshamedarametla"
};

/* ===== 2. ANSWERS FOR THE ASK BOX ===== */
const FAQ = [
  { label:"Projects",   keys:["project","openhealth","hotel","built","work"],
    text:"Two main projects: OpenHealth, an AI tool that detects multiple diseases (graduation project, Dec 2023 to May 2024), and a hotel booking website built during his internship (Jun to Oct 2023)." },
  { label:"Skills",     keys:["skill","tech","language","python","java","stack","know"],
    text:"Python and Java (basics), HTML, CSS, JavaScript, SQL, GitHub, and ML / MLOps." },
  { label:"Experience", keys:["experience","intern","job","topnotch","company"],
    text:"Intern at Topnotch Softwares, Visakhapatnam (Jun to Oct 2023), where he built a hotel booking website." },
  { label:"Education",  keys:["education","study","college","degree","btech","gmr","school"],
    text:"B.Tech in Information Technology from GMR Institute of Technology, Rajam (2020 to 2024)." },
  { label:"Contact",    keys:["contact","email","hire","reach","linkedin","github"],
    text:"Use the Email, GitHub and LinkedIn buttons in the Contact section at the bottom of the page." }
];
const ans = document.getElementById("answer");
function show(t){ ans.textContent = t; }

/* chips */
const chips = document.getElementById("chips");
FAQ.forEach(f => {
  const b = document.createElement("button");
  b.textContent = f.label;
  b.onclick = () => show(f.text);
  chips.appendChild(b);
});

/* typed question: match keywords */
document.getElementById("askForm").onsubmit = e => {
  e.preventDefault();
  const q = document.getElementById("q").value.toLowerCase();
  const hit = FAQ.find(f => f.keys.some(k => q.includes(k)));
  show(hit ? hit.text : "I can answer about projects, skills, experience, education and contact. Try one of those words.");
};

/* ===== 3. TYPING EFFECT ===== */
const words = ["Web developer","AI / ML builder","Hackathon enthusiast","Fast learner"];
const el = document.getElementById("typing");
let w = 0, c = 0, del = false;
function tick(){
  const word = words[w];
  el.textContent = word.slice(0, c);
  if(!del && c === word.length){ del = true; return setTimeout(tick, 1400); }
  if(del && c === 0){ del = false; w = (w + 1) % words.length; }
  c += del ? -1 : 1;
  setTimeout(tick, del ? 40 : 80);
}
tick();

/* ===== 4. FILL IN YOUR LINKS ===== */
document.querySelectorAll("[data-link]").forEach(a => {
  const k = a.dataset.link;
  a.href = k === "email" ? "mailto:" + ME.email : ME[k];
  if(k !== "email") a.target = "_blank";
});
document.getElementById("emailBtn").href = "mailto:" + ME.email;