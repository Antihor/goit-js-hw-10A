import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{f,i as h}from"./assets/vendor-651d7991.js";const c=document.querySelector("#datetime-picker"),s=document.querySelector("button[data-start]"),y=document.querySelector("[data-seconds]"),b=document.querySelector("[data-minutes]"),p=document.querySelector("[data-hours]"),S=document.querySelector("[data-days]");s.setAttribute("disabled",!0);s.addEventListener("click",q);let a,u,n;const D={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const e=Date.now();n=t[0],n<e&&(s.setAttribute("disabled",!0),h.error({title:"",message:"Please, choose a date in the future",position:"topCenter"})),n>e&&s.removeAttribute("disabled"),u=new Date(n)}};function q(){c.setAttribute("disabled","true"),a=setInterval(()=>{const t=Date.now(),e=u-t,o=C(e);y.textContent=o.seconds,b.textContent=o.minutes,p.textContent=o.hours,S.textContent=o.days,e<1e3&&clearInterval(a)},1e3)}f(c,D);function r(t){return String(t).padStart(2,"0")}function C(t){const i=r(Math.floor(t/864e5)),d=r(Math.floor(t%864e5/36e5)),l=r(Math.floor(t%864e5%36e5/6e4)),m=r(Math.floor(t%864e5%36e5%6e4/1e3));return{days:i,hours:d,minutes:l,seconds:m}}
//# sourceMappingURL=commonHelpers.js.map
