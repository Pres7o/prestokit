// Load CSS
["https://prestokit.pages.dev/cdn/prestokit.min.css","https://prestokit.pages.dev/cdn/highlightjs/styles/onedark.min.css"].forEach(u=>{
  const l=document.createElement("link");l.rel="stylesheet";l.href=u;document.head.appendChild(l);
});

// Load Highlight.js
const s=document.createElement("script");
s.src="https://prestokit.pages.dev/cdn/highlightjs/highlight.min.js";
s.onload=()=>hljs.highlightAll();
document.head.appendChild(s);
