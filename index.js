import"./assets/vendor-DRBp52o7.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".accordion-header").forEach(o=>{o.addEventListener("click",function(){const r=this.nextElementSibling,n=r.style.display==="block";document.querySelectorAll(".accordion-content").forEach(e=>{e.style.display="none",e.previousElementSibling.classList.remove("active")}),n||(r.style.display="block",this.classList.add("active"))})})});
//# sourceMappingURL=index.js.map
