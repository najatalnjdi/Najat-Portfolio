const langButton=document.getElementById("langSwitch");
const menuButton=document.querySelector(".menu");
const nav=document.querySelector("nav");
function setLanguage(lang){
  document.documentElement.lang=lang;
  document.documentElement.dir=lang==="ar"?"rtl":"ltr";
  document.querySelectorAll("[data-en][data-ar]").forEach(el=>{
    el.innerHTML=el.dataset[lang];
  });
  langButton.textContent=lang==="en"?"العربية":"English";
  document.title=lang==="ar"?"نجاة النعيمي | مطورة واجهات أمامية":"Najat Alnjdi | Front-End Developer";
  try{localStorage.setItem("najat-portfolio-language",lang)}catch(e){}
}
let initial="en";
try{initial=localStorage.getItem("najat-portfolio-language")||"en"}catch(e){}
setLanguage(initial);
langButton.addEventListener("click",()=>setLanguage(document.documentElement.lang==="en"?"ar":"en"));
if(menuButton&&nav){menuButton.addEventListener("click",()=>nav.classList.toggle("open"));nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")))}
document.getElementById("year").textContent=new Date().getFullYear();
