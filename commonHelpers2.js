import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{i as o}from"./assets/vendor-651d7991.js";const l=document.querySelector(".form");l.addEventListener("submit",u);function u(t){t.preventDefault();let s=Number(t.target.elements.delay.value),i=t.target.elements.state.value;r(s).then(({delay:e})=>{o.success({title:"",message:`'✅ Fulfilled promise in ${e} ms'`,position:"topCenter"}),console.log(`✅ Fulfilled promise in ${e} ms`)}).catch(({delay:e})=>{o.error({title:"",message:`'❌ Rejected promise in ${e} ms'`,position:"topCenter"}),console.log(`❌ Rejected promise in ${e} ms`)}),t.target.reset();function r(e){return new Promise((m,n)=>{setTimeout(()=>{i==="fulfilled"?m({delay:e}):n({delay:e})},e)})}}
//# sourceMappingURL=commonHelpers2.js.map
