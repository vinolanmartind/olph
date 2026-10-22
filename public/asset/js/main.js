/* Tiny script: only remembers language (English/Tamil) and theme (light/dark).
   Menu, dropdowns, side bar and the home slider are plain HTML + CSS (no JavaScript). */
(function(){
  var d=document.documentElement,lang='en';
  function get(k,v){try{return localStorage.getItem(k)||v}catch(e){return v}}
  function put(k,v){try{localStorage.setItem(k,v)}catch(e){}}
  function apply(){
    var items=document.querySelectorAll('[data-ta]'),i,el;
    for(i=0;i<items.length;i++){el=items[i];if(el.dataset.en===undefined)el.dataset.en=el.textContent;el.textContent=lang==='ta'?el.dataset.ta:el.dataset.en}
    var b=document.querySelectorAll('.babel');
    for(i=0;i<b.length;i++)b[i].textContent=lang==='ta'?'English':'\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD';
    d.lang=lang;
  }
  lang=get('lang','en');
  document.addEventListener('click',function(e){
    var t=e.target.closest&&e.target.closest('.daybreak,.babel');if(!t)return;
    if(t.classList.contains('daybreak')){var n=d.dataset.theme==='dark'?'light':'dark';d.dataset.theme=n;put('theme',n)}
    else{lang=lang==='ta'?'en':'ta';put('lang',lang);apply()}
  });
  if(lang==='ta')apply();
})();
