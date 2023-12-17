(()=>{let e=document.querySelector(".agenta-scroll-button"),l=document.querySelectorAll(".agenta-card-list li"),t=window.innerWidth,n=t>744?4:1,i=t>744?4:1;window.addEventListener("resize",()=>{i=(t=window.innerWidth)>744?4:1,l.forEach((e,l)=>{l<n||l>=n+i?e.style.display="none":e.style.display="flex"})}),e.addEventListener("click",()=>{l.forEach(e=>{e.style.display="none"});for(let e=n;e<n+i;e++)l[e]&&(l[e].style.display="flex");(n+=i)>=l.length&&(n=0)})})();//# sourceMappingURL=index.253f1aab.js.map

//# sourceMappingURL=index.253f1aab.js.map
