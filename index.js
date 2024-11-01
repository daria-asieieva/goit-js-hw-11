/* empty css                      */import{i as l,S as u}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const d="46845751-23df18a8b1d1a4c3ff293bf75",f="https://pixabay.com/api/";async function y(n){const t=`${f}?key=${d}&q=${encodeURIComponent(n)}&image_type=photo&orientation=horizontal&safesearch=true`;try{const s=await(await fetch(t)).json();if(s.hits.length===0)throw new Error("No images found");return s.hits}catch(r){throw r}}function m(n){const t=document.querySelector(".gallery");t.innerHTML=n.map(r=>`
        <a href="${r.largeImageURL}" class="gallery__link">
            <div class="gallery__item">
                <img src="${r.webformatURL}" alt="${r.tags}" loading="lazy" />
                <div class="gallery__info">
                    <p><b>Likes:</b> ${r.likes}</p>
                    <p><b>Views:</b> ${r.views}</p>
                    <p><b>Comments:</b> ${r.comments}</p>
                    <p><b>Downloads:</b> ${r.downloads}</p>
                </div>
            </div>
        </a>
    `).join("")}function p(){document.querySelector(".gallery").innerHTML=""}function i(n){l.error({title:"Error",message:n,position:"topRight"})}function c(n){const t=document.querySelector(".loader");t.style.display=n?"block":"none"}document.addEventListener("DOMContentLoaded",()=>{const n=document.querySelector(".search-form"),t=new u(".gallery a");n.addEventListener("submit",async r=>{r.preventDefault();const s=r.currentTarget.elements.searchQuery.value.trim();if(s===""){i("Please enter a search query");return}p(),c(!0);try{const e=await y(s);m(e),t.refresh()}catch{i("Sorry, there are no images matching your search query. Please try again!")}finally{c(!1)}})});
//# sourceMappingURL=index.js.map
