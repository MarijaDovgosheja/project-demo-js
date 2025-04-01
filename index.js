import{a as S,S as q,i as f}from"./assets/vendor-BBSqv8W6.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const E="49325136-7a5007c9432c50459db7de2bf",P="https://pixabay.com/api/",$=15;async function u(t,o){try{return(await S.get(P,{params:{key:E,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:$,page:o}})).data}catch(s){throw console.error("Error fetching images:",s),s}}const m=document.querySelector(".gallery"),p=document.querySelector(".loader"),h=document.querySelector(".load-more"),M=new q(".gallery a");function C(){m.innerHTML=""}function y(t){if(t.length===0){f.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fff",backgroundColor:"#ef4040",position:"topRight"});return}const o=t.map(({webformatURL:s,largeImageURL:a,tags:e,likes:r,views:i,comments:b,downloads:w})=>`
        <li class="gallery-item">
            <a href="${a}">
                <img src="${s}" alt="${e}" loading="lazy">
            </a>
            <div class="info">
                <div class="info-item">
                    <p class="info-title">Likes</p>
                    <p class="info-value">${r}</p>
                </div>
                <div class="info-item">
                    <p class="info-title">Views</p>
                    <p class="info-value">${i}</p>
                </div>
                <div class="info-item">
                    <p class="info-title">Comments</p>
                    <p class="info-value">${b}</p>
                </div>
                <div class="info-item">
                    <p class="info-title">Downloads</p>
                    <p class="info-value">${w}</p>
                </div>
            </div>
        </li>
    `).join("");m.insertAdjacentHTML("beforeend",o),M.refresh()}function g(){p.classList.remove("hidden")}function v(){p.classList.add("hidden")}function L(){h.classList.remove("hidden")}function l(){h.classList.add("hidden")}function O(){const t=document.querySelector(".gallery-item");if(t){const{height:o}=t.getBoundingClientRect();window.scrollBy({top:o*2,behavior:"smooth"})}}const x=document.querySelector(".form"),A=document.querySelector(".load-more");let c="",n=1,d=0;x.addEventListener("submit",async t=>{if(t.preventDefault(),c=t.target.elements["search-text"].value.trim(),!!c){n=1,C(),l(),g();try{const o=await u(c,n);d=o.totalHits,y(o.hits),d>15&&L()}catch(o){console.error("Error:",o)}finally{v(),t.target.reset()}}});A.addEventListener("click",async()=>{n+=1,g(),l();try{const t=await u(c,n);y(t.hits),O(),n*15>=d?(l(),f.info({message:"We're sorry, but you've reached the end of search results.",messageColor:"#fff",backgroundColor:"#4e75ff",position:"topRight"})):L()}catch(t){console.error("Error:",t)}finally{v()}});
//# sourceMappingURL=index.js.map
