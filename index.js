/* empty css                      */import{a as S,S as B,i as a}from"./assets/vendor-CHjg-zSf.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const g=async(s,t)=>S.get("https://pixabay.com/api/",{params:{key:"49208970-c1347c58b4866d3d505700044",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:15}}),m=document.querySelector(".gallery"),h=document.querySelector(".loader"),u=document.querySelector(".button-load");let M=new B(".gallery a");const f=s=>{const t=s.map(({largeImageURL:r,webformatURL:l,tags:e,likes:o,views:i,comments:w,downloads:q})=>`
    <li class="gallery-img-list">
        <a href="${r}" class="gallery-link">
        <img class="img" src="${l}" alt="${e}" width="360"/>
      </a>
      <div class="info-wrapper">
        <div class="img-info">
          <p class="label">Likes</p>
          <p class="value">${o}</p>
        </div>
        <div class="img-info">
          <p class="label">Views</p>
          <p class="value">${i}</p>
        </div>
        <div class="img-info">
          <p class="label">Comments</p>
          <p class="value">${w}</p>
        </div>
        <div class="img-info">
          <p class="label">Downloads</p>
          <p class="value">${q}</p>
        </div>
      </div>
    </li>`).join("");m.insertAdjacentHTML("beforeend",t),M.refresh()},P=()=>{m.innerHTML=""},y=()=>{console.log("Показать лоадер"),h.classList.remove("is-hidden")},v=()=>{console.log("Скрыть лоадер"),h.classList.add("is-hidden")},$=()=>{console.log("Показать кнопку"),u.classList.remove("is-hidden")},d=()=>{console.log("Скрыть кнопку"),u.classList.add("is-hidden")},L=document.querySelector("form");let c=null,n=1,p=0;const b=15,E=async s=>{if(s.preventDefault(),c=s.currentTarget.elements["search-text"].value.trim(),P(),d(),n=1,c===""){a.show({message:"Please enter your request!",position:"topRight"});return}y();try{const t=await g(c,n),r=t.data.hits;if(p=t.data.totalHits,r.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",theme:"dark"});return}f(r),n*b<p?$():(a.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),d())}catch(t){a.error({message:t.message,position:"topRight"})}finally{v(),L.reset()}},O=async()=>{n++,y();try{const t=(await g(c,n)).data.hits;f(t);const{height:r}=document.querySelector(".gallery-img-list").getBoundingClientRect();if(window.scrollBy({top:r*1.7,behavior:"smooth"}),t.length<b){a.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),d();return}}catch(s){console.log(s)}finally{v()}};L.addEventListener("submit",E);u.addEventListener("click",O);
//# sourceMappingURL=index.js.map
