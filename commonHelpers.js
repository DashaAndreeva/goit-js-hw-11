import{i as l}from"./assets/vendor-ad859c2f.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();const c={form:document.querySelector(".form"),input:document.querySelector(".input-search"),button:document.querySelector(".button"),gallery:document.querySelector(".gallery")};c.form.addEventListener("submit",a);function a(o){if(o.preventDefault(),c.input.value.trim()==="")return;const e=o.target.elements.search.value;u(e).then(n=>{n.hits.length===0?(m(),l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",transitionIn:"fadeInLeft"})):p(n.hits)}).catch(n=>{alert(n)}),o.target.reset()}function u(o){const e="42307458-71f98d2a331f0bd294b8fc1ec",n="https://pixabay.com",i="/api/",t=`?key=${e}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`,r=n+i+t;return fetch(r).then(s=>s.json())}function f(o){return o.map(e=>`
    <li class="gallery-item"><a href="${e.largeImageURL}">
          <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}"></a>
          <div class="info">
          <p> <span class="info-text">Likes</span> <br/> ${e.likes}</p>
          <p><span class="info-text">Views</span> <br/> ${e.views}</p>
          <p><span class="info-text">Comments</span> <br/> ${e.comments}</p>
          <p><span class="info-text">Downloads</span> <br/> ${e.downloads}</p>
          </div>
          </li>
    `).join("")}function p(o){const e=f(o);c.gallery.innerHTML=e}function m(){c.gallery.innerHTML=""}
//# sourceMappingURL=commonHelpers.js.map
