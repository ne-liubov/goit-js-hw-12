/* empty css                      */import{a as S,S as B,i}from"./assets/vendor-CHjg-zSf.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const m=async(r,t)=>{try{return(await S.get("https://pixabay.com/api/",{params:{key:"49208970-c1347c58b4866d3d505700044",q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:15}})).data}catch(o){throw o}},g=document.querySelector(".gallery"),h=document.querySelector(".loader"),u=document.querySelector(".button-load");let M=new B(".gallery a");const f=r=>{const t=r.map(({largeImageURL:o,webformatURL:l,tags:e,likes:s,views:a,comments:w,downloads:q})=>`
    <li class="gallery-img-list">
        <a href="${o}" class="gallery-link">
        <img class="img" src="${l}" alt="${e}" width="360"/>
      </a>
      <div class="info-wrapper">
        <div class="img-info">
          <p class="label">Likes</p>
          <p class="value">${s}</p>
        </div>
        <div class="img-info">
          <p class="label">Views</p>
          <p class="value">${a}</p>
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
    </li>`).join("");g.insertAdjacentHTML("beforeend",t),M.refresh()},P=()=>{g.innerHTML=""},y=()=>{h.classList.remove("is-hidden")},v=()=>{h.classList.add("is-hidden")},$=()=>{u.classList.remove("is-hidden")},d=()=>{u.classList.add("is-hidden")},L=document.querySelector("form");let c=null,n=1,p=0;const b=15,E=async r=>{if(r.preventDefault(),c=r.currentTarget.elements["search-text"].value.trim(),P(),d(),n=1,c===""){i.show({message:"Please enter your request!",position:"topRight"});return}y();try{const t=await m(c,n),o=t.hits;if(p=t.totalHits,o.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",theme:"dark"});return}f(o),n*b<p?$():(i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),d())}catch(t){i.error({message:t.message,position:"topRight"})}finally{v(),L.reset()}},O=async()=>{n++,y();try{const t=(await m(c,n)).hits;f(t);const{height:o}=document.querySelector(".gallery-img-list").getBoundingClientRect();if(window.scrollBy({top:o*1.7,behavior:"smooth"}),t.length<b){i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),d();return}}catch(r){console.log(r)}finally{v()}};L.addEventListener("submit",E);u.addEventListener("click",O);
//# sourceMappingURL=index.js.map
