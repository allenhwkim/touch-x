(()=>{var vn=`<button tabindex="-1">
  <slot></slot>
</button>`,En=`x-button {
  --primary: #3751B5;
  --accent: #FF4081;
  --disabled: rgba(0,0,0,.26);
  --size: 32px;
  display: inline-block;
  margin: 0px 4px;
  border-radius: 4px;
  padding: 0 16px;
  box-sizing: border-box;
  position: relative;
  user-select: none;
  cursor: pointer;
  white-space: nowrap;
  vertical-align: bottom;
  text-align: center;
  border: 1px solid rgba(0,0,0,.12);
  box-shadow: 2px 2px 4px #CCC;
  outline: none;
  background-color: #FFF;
  line-height: var(--size);
  min-width: 60px;
  color: inherit;
  cursor: pointer;
}
x-button:focus {
  box-shadow: white 0 0 0 2px, #ff821f 0 0 0 4px;
}
x-button > button {
  border: none;
  background: none;
  background-color: inherit;
  align-items: center;
  min-width: inherit;
  cursor: inherit;  
  line-height: inherit;
  color: inherit;
  padding: inherit;
}
x-button.icon { 
  width: var(--size);
  height: var(--size);
  min-width: var(--size);
  border-radius: 50%; 
  padding: 0; 
}
x-button.icon > button { 
  border-radius: inherit; 
}

x-button.primary { background: var(--primary); color: #FFF; }
x-button.accent { background: var(--accent); color: #FFF;}
x-button:active { box-shadow: none; transform: translate(2px, 2px); }
x-button[tabindex="-1"][disabled] { background-color: #FFF; }
x-button[disabled] { color: var(--disabled); pointer-events: none; }

x-button.no-style {
  border: none;
  background: transparent;
  min-width: revert;
  line-height: revert;
  box-shadow: revert;
  outline: revert;
  padding: revert;
}`;function wn(t,e,n=0){return new Promise(function(i,s){e?setTimeout(function(){if(e.indexOf("</slot>")){let o=e.replace("<slot></slot>",t.innerHTML);t.innerHTML=o}else t.innerHTML=e;An(t),i(!0)},n):i(!1)})}function Fn(t,e){let n=t.tagName.toLowerCase(),i=n==="x-input"&&t.getAttribute("type"),s=i?`-${i}`:"",r=`${n}${s}`;if(document.querySelector(`style[${r}]`)){let o=document.querySelector(`style[${r}]`);o.createdAt=new Date().getTime()}else{let o=document.createElement("style");return o.setAttribute(r,""),o.appendChild(document.createTextNode(e)),document.head.appendChild(o),o.createdAt=new Date().getTime(),o}}function _n(t){let e=t.tagName.toLowerCase(),n=e==="x-input"&&t.getAttribute("type"),i=n?`-${n}`:"",s=`${e}${i}`,r=document.body.querySelectorAll(`${s}`).length;if(document.querySelector(`style[${s}]`)&&r<1){let a=document.querySelector(`style[${s}]`);new Date().getTime()>a.createdAt+500&&a.remove()}}function An(t){t.querySelectorAll("script").forEach(e=>{let n=document.createElement("script");Array.from(e.attributes).forEach(i=>n.setAttribute(i.name,i.value)),n.appendChild(document.createTextNode(e.innerText));try{t.replaceChild(n,e)}catch{t.appendChild(n)}})}function Cn(t,e,n=[],i=[]){let s=["class","contenteditable","debug","draggable","tabindex"];Array.from(t.attributes).filter(a=>!a.name.match(/^on[a-z]+/)).filter(a=>!s.includes(a.name)).filter(a=>(i==null?void 0:i.length)===0||i.includes(a.name)).filter(a=>(n==null?void 0:n.length)===0||!n.includes(a.name)).forEach(a=>e&&e.setAttribute(a.name,a.value));function r(a){a.filter(l=>l.type==="attributes").filter(l=>!l.attributeName.match(/^on[a-z]+/)).filter(l=>!s.includes(l.attributeName)).filter(l=>(i==null?void 0:i.length)&&i.includes(l.attributeName)).filter(l=>(n==null?void 0:n.length)&&!n.includes(l.attributeName)).forEach(l=>{let c=l.attributeName,f=l.target.getAttribute(c);e.setAttribute(c,f)})}new MutationObserver(r).observe(t,{attributes:!0})}function Tn(t,e){return function(n,i){n=n||t,i=i||e,customElements.get(n)||customElements.define(n,i)}}var vt=class extends HTMLElement{get value(){var t;return(t=this.querySelector("button"))==null?void 0:t.value}get disabled(){var t;return(t=this.querySelector("button"))==null?void 0:t.disabled}get validity(){var t;return(t=this.querySelector("button"))==null?void 0:t.validity}get validationMessage(){var t;return(t=this.querySelector("button"))==null?void 0:t.validationMessage}set value(t){this._setProp("value",t)}set disabled(t){this._setProp("disabled",t)}_setProp(t,e){t==="disabled"&&(e?this.setAttribute("disabled",""):this.removeAttribute("disabled"));let n=this.querySelector("button")?0:500;setTimeout(i=>{this.querySelector("button")[t]=e})}constructor(...t){return super(...t)}connectedCallback(){Fn(this,En),wn(this,vn).then(t=>this._init())}disconnectedCallback(){_n(this)}static get observedAttributes(){return["disabled"]}attributeChangedCallback(t,e,n){t==="disabled"&&this._setTabIndex()}_init(){this._setTabIndex(),Cn(this,this.querySelector("button")),this.addEventListener("keydown",t=>{t.keyCode===13&&this.click()})}_setTabIndex(){let t=this.getAttribute("disabled");this.setAttribute("tabindex",t===null?0:-1)}};vt.define=Tn("x-button",vt);var Sn=`<div class="calendar">
  <div class="x-header">
    <div class="x-month-year">
      <span id="x-month" class="x-month"></span>
      <select id="x-years" class="x-years"></select>
    </div>
    <div class="x-buttons">
      <button class="x-previous" arial-label="previous month">&#9664;</button>
      <button class="x-today" arial-label="today">&#9679;</button>
      <button class="x-next" arial-label="next month">&#9654;</button>
    </div>
  </div>

  <div class="x-week-days-container"></div>

  <div class="x-days-container"></div>
</div>`,Ln=`x-calendar {
  display: block;
}
x-overlay x-calendar {
  width: 320px;
}
x-calendar .x-header {
  display: flex;
  padding: 12px 8px;
  font-weight: bold;
}
x-calendar .x-header  .x-month-year {
  flex: 1;
}
x-calendar .x-header  .x-month-year .x-years{
  border: none;
}
x-calendar .x-header  .x-month-year .year {
  border: 0;
  font-weight: bold;
  font-size: 16px;
}
x-calendar .x-header  .x-month-year button {
  background: transparent;
  border: 0;
}
x-calendar .x-header  .x-buttons button {
  background: transparent;
  border: none;
  cursor: pointer;
}

x-calendar .x-week-days-container {
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
}
 x-calendar .x-week-days-container .x-weekday {
  background: #CCC;
}

x-calendar .x-days-container { 
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px 12px 4px;
}

x-calendar .x-weekday,
x-calendar .x-date {
  border: 0;
  background: #FFF;
  font-size: 16px;
  line-height: 1.5em;
  box-sizing: border-box;
  width: calc(100%/7);
  text-align: center;
}
x-calendar .x-date span {
  display: inline-block;
  padding: 0 4px;
}
x-calendar .x-date:not(.x-same-month) { color: #ccc }
x-calendar .x-date:not([disabled]) { cursor: pointer }

x-calendar .x-date.x-select span,
x-calendar .x-date:not([disabled]):hover span {
  background: #ccc;
}
`;function kn(t,e,n=0){return new Promise(function(i,s){e?setTimeout(function(){if(e.indexOf("</slot>")){let o=e.replace("<slot></slot>",t.innerHTML);t.innerHTML=o}else t.innerHTML=e;qn(t),i(!0)},n):i(!1)})}function Mn(t,e){let n=t.tagName.toLowerCase(),i=n==="x-input"&&t.getAttribute("type"),s=i?`-${i}`:"",r=`${n}${s}`;if(document.querySelector(`style[${r}]`)){let o=document.querySelector(`style[${r}]`);o.createdAt=new Date().getTime()}else{let o=document.createElement("style");return o.setAttribute(r,""),o.appendChild(document.createTextNode(e)),document.head.appendChild(o),o.createdAt=new Date().getTime(),o}}function $n(t){let e=t.tagName.toLowerCase(),n=e==="x-input"&&t.getAttribute("type"),i=n?`-${n}`:"",s=`${e}${i}`,r=document.body.querySelectorAll(`${s}`).length;if(document.querySelector(`style[${s}]`)&&r<1){let a=document.querySelector(`style[${s}]`);new Date().getTime()>a.createdAt+500&&a.remove()}}function qn(t){t.querySelectorAll("script").forEach(e=>{let n=document.createElement("script");Array.from(e.attributes).forEach(i=>n.setAttribute(i.name,i.value)),n.appendChild(document.createTextNode(e.innerText));try{t.replaceChild(n,e)}catch{t.appendChild(n)}})}function Hn(t,e){["input","select"].includes(t.tagName.toLowerCase())?t.value=e:t.innerText=e}function Dn(t,e){return function(n,i){n=n||t,i=i||e,customElements.get(n)||customElements.define(n,i)}}function lt(t){if(!t){let l=new Date().getTimezoneOffset()*6e4;t=new Date(Date.now()-l).toISOString().slice(0,-1)}let e=t.replace(/[^0-9]/g,""),[n,i,s]=[e.substr(0,4),e.substr(4,2),e.substr(6,2)],[r,o,a]=[e.substr(8,2),e.substr(10,2),e.substr(12,2)];return new Date(+n,+i-1,+s,+r,+o,+a)}function Et(t){var e;let[n,i,s]=[t._locale,t._selectedDate,t._dates],[r,o,a]=[t._curDate||new Date,t._minDate,t._maxDate],[l,c,f]=[t._template,t._weekFormat,t._id],g=new Date(r.getFullYear(),r.getMonth(),0),v=new Date(r.getFullYear(),r.getMonth()+1,1);function _(b,A){return b.toLocaleDateString(n,A)}function T(b,A,H=A-b+1){return Array.from({length:H},(D,y)=>b+y)}function F(b,A){let H=r.getFullYear(),D=Math.max(b.getFullYear(),H-10),y=Math.min(A.getFullYear(),H+10);return T(D,y)}function L(b){return b.getMonth()===r.getMonth()}function $(b,A){return b.getFullYear()===A.getFullYear()&&b.getMonth()===A.getMonth()&&b.getDate()===A.getDate()}function M(b,A,H){let D=new CustomEvent("x-calendar-"+A,{bubbles:!0,detail:H});b.target.dispatchEvent(D),b.stopPropagation()}function xt(b){var A,H;let D=new CustomEvent("x-select",{bubbles:!0,detail:b});t.dispatchEvent(D),t.target&&Hn(t.target,b),(H=(A=t.target)==null?void 0:A.closest("x-input"))==null||H.classList.remove("empty")}let k=b=>t.querySelector(b);t.innerHTML=l,k(".x-month-year")&&(k(".x-month-year #x-month").innerText=_(r,{month:"long"}),F(o,a).forEach(b=>{k(".x-month-year #x-years").insertAdjacentHTML("beforeend",`<option value="${b}">${b}</option>`)}),(e=k(`.x-month-year #x-years [value="${r.getFullYear()}"]`))==null||e.setAttribute("selected",""),k(".x-month-year #x-years").addEventListener("change",function(b){M(b,"year",this.value)})),k(".x-buttons")&&(g===o?k(".x-buttons .x-previous").setAttribute("disabled",""):k(".x-buttons .x-previous").removeAttribute("disabled"),v>a?k(".x-buttons .x-next").setAttribute("disabled",""):k(".x-buttons .x-next").removeAttribute("disabled"),k(".x-buttons .x-previous").addEventListener("click",b=>M(b,"month",-1)),k(".x-buttons .x-today").addEventListener("click",b=>M(b,"today",-1)),k(".x-buttons .x-next").addEventListener("click",b=>M(b,"month",1)),s.slice(0,7).map(b=>_(b,{weekday:c})).forEach(b=>{k(".x-week-days-container").insertAdjacentHTML("beforeend",`<div class="x-weekday">${b}`)}));function yt(b,A="yyyy-MM-dd"){var H={M:b.getMonth()+1,d:b.getDate(),h:b.getHours(),m:b.getMinutes(),s:b.getSeconds()};return A.replace(/(y+)/g,y=>b.getFullYear().toString().slice(-y.length)).replace(/(M+|d+|h+|m+|s+)/g,y=>((y.length>1?"0":"")+H[y.slice(-1)]).slice(-2))}s&&s.forEach(b=>{let A=document.createElement("button");(!L(b)||b<o||b>a)&&A.setAttribute("disabled",""),A.classList.add("x-date"),L(b)&&A.classList.add("x-same-month"),$(b,i)&&(A.classList.add("x-select"),i.toString=function(){return yt(i,t._dateFormat)}),A.addEventListener("focus",y=>{y.target.setAttribute("id",`${f}-selected`),y.target.setAttribute("aria-selected","true")}),A.addEventListener("blur",y=>{y.target.removeAttribute("id"),y.target.removeAttribute("aria-selected")}),A.addEventListener("click",y=>{b.toString=function(){return this.toLocaleDateString()},xt(b)});let D=new Intl.NumberFormat(t._locale).format(b.getDate()).replace("\u3007","\u5341");A.insertAdjacentHTML("beforeend",`<span>${D}</span>`),k(".x-days-container")&&k(".x-days-container").appendChild(A)})}var wt=class extends HTMLElement{constructor(...t){let e=super(...t);return this.target,e}connectedCallback(){this.target=document.getElementById(this.getAttribute("target")),this._id=this.getAttribute("id")||`x-${parseInt(""+Math.random()*1e4)}`,this._weekFormat=this.getAttribute("week-format")||"short",this._locale=this.getAttribute("locale")||"en-US",this._selectedDate=lt(this.getAttribute("date")),this._curDate=this._selectedDate,this._minDate=lt(this.getAttribute("min-date")||"1969-01-01"),this._maxDate=lt(this.getAttribute("max-date")||"2100-12-31"),this._firstDayOfWeek=Number(this.getAttribute("first-day-of-week")||0),this._dates=this._getCalendarDays(this._selectedDate),this._dateFormat=this.getAttribute("date-format")||"yyyy-MM-dd",this.addEventListener("x-calendar-month",this._handleEvent.bind(this)),this.addEventListener("x-calendar-year",this._handleEvent.bind(this)),this.addEventListener("x-calendar-today",this._handleEvent.bind(this)),this.addEventListener("x-select",this._handleEvent.bind(this)),Mn(this,Ln),kn(this,Sn).then(t=>{this._template=this.innerHTML,Et(this)})}disconnectedCallback(){$n(this)}static get observedAttributes(){return["date","locale","min-date","week-format","max-date","first-day-of-week"]}attributeChangedCallback(t,e,n){this._selectedDate=lt(this.getAttribute("date")),this._weekFormat=this.getAttribute("week-format")||"short",this._locale=this.getAttribute("locale")||"en-US",this._minDate=lt(this.getAttribute("min-date")||"1969-01-01"),this._maxDate=lt(this.getAttribute("max-date")||"2100-12-31"),this._firstDayOfWeek=Number(this.getAttribute("first-day-of-week")||0),Et(this)}_handleEvent(t){let e=t.detail;switch(t.type){case"x-calendar-month":this._setMonth(e);break;case"x-calendar-year":this._setYear(e);break;case"x-calendar-today":this._setToday();break;case"x-select":this._selectedDate=e;break}}_setYear(t){let e=this._curDate,[n,i]=[e.getMonth(),e.getDate()];this._curDate=new Date(t,n,i),this._dates=this._getCalendarDays(this._curDate),Et(this)}_setToday(){this._curDate=new Date,this._setMonth(0)}_setMonth(t){let e=this._curDate,[n,i,s]=[e.getFullYear(),e.getMonth(),e.getDate()];this._curDate=new Date(n,i+t,s),this._lastDayOfPrevMonth=new Date(this._curDate.getFullYear(),this._curDate.getMonth(),0),this._firstDayOfNextMonth=new Date(this._curDate.getFullYear(),this._curDate.getMonth()+1,1),this._dates=this._getCalendarDays(this._curDate),Et(this)}_getCalendarDays(t){let e=this._firstDayOfWeek,n=60*60*24*1e3,i=this._getCalendarStartDay(t,e).getTime();return this._range(0,41).map(s=>new Date(i+n*s))}_getCalendarStartDay(t,e){let n=60*60*24*1e3,[i,s]=[t.getFullYear(),t.getMonth()],r=new Date(i,s,1).getTime();return this._range(1,7).map(o=>new Date(r-n*o)).find(o=>o.getDay()===e)}_range(t,e,n=e-t+1){return Array.from({length:n},(i,s)=>t+s)}};wt.define=Dn("x-calendar",wt);var Pn=`<!-- carousel items -->
<div class="x-items">
  <slot></slot> 
</div>

<!-- prev/next buttons -->
<button class="x-prev x-button" aria-label="previous">&nbsp;</button>
<button class="x-next x-button" aria-label="next">&nbsp;</button>

<!-- shortcuts for each item -->
<div class="x-shortcuts"></div>`,Nn=`x-carousel { display: block; position: relative; }
x-carousel .x-items { overflow: auto; display: flex; }
x-carousel .x-items * { transform: scale(0.99); opacity: .5; transition: all .3s; }
x-carousel .x-items .x-active {  transform: scale(1); opacity: 1; }
x-carousel .x-button {
  border: 0;
  background: transparent;
  display: inline-block;
  color: #FFF;
  opacity: .3;
}
x-carousel .x-button:hover,
x-carousel .x-button:focus {
  opacity: 1;
}
x-carousel .x-button.x-prev { 
  position: absolute; left: 0; top: 50%; transform: translateY(-50%);
}
x-carousel .x-button.x-next {
  position: absolute; right: 0; top: 50%; transform: translateY(-50%);
}
x-carousel .x-next.x-button::before { font-size: 2em; content: '\\25B6'; }
x-carousel .x-prev.x-button::before { font-size: 2em; content: '\\25C0'; }
x-carousel .x-shortcuts {
  position: absolute;
  bottom: 24px;
  width: 100%;
  display: flex;
  justify-content: center;
}
x-carousel .x-shortcuts .x-button {
  width: 16px; 
  height: 16px;
  border-radius: 50%;
  background: #FFF;
  opacity: .5;
  margin: 0 1px;
  color: transparent;
}
x-carousel .x-shortcuts .x-button:hover,
x-carousel .x-shortcuts .x-button:focus { opacity: .7 }
x-carousel .x-shortcuts .x-button.x-active { opacity: 1 }`;function Xn(t,e,n=0){return new Promise(function(i,s){e?setTimeout(function(){if(e.indexOf("</slot>")){let o=e.replace("<slot></slot>",t.innerHTML);t.innerHTML=o}else t.innerHTML=e;zn(t),i(!0)},n):i(!1)})}function On(t,e){let n=t.tagName.toLowerCase(),i=n==="x-input"&&t.getAttribute("type"),s=i?`-${i}`:"",r=`${n}${s}`;if(document.querySelector(`style[${r}]`)){let o=document.querySelector(`style[${r}]`);o.createdAt=new Date().getTime()}else{let o=document.createElement("style");return o.setAttribute(r,""),o.appendChild(document.createTextNode(e)),document.head.appendChild(o),o.createdAt=new Date().getTime(),o}}function In(t){let e=t.tagName.toLowerCase(),n=e==="x-input"&&t.getAttribute("type"),i=n?`-${n}`:"",s=`${e}${i}`,r=document.body.querySelectorAll(`${s}`).length;if(document.querySelector(`style[${s}]`)&&r<1){let a=document.querySelector(`style[${s}]`);new Date().getTime()>a.createdAt+500&&a.remove()}}function zn(t){t.querySelectorAll("script").forEach(e=>{let n=document.createElement("script");Array.from(e.attributes).forEach(i=>n.setAttribute(i.name,i.value)),n.appendChild(document.createTextNode(e.innerText));try{t.replaceChild(n,e)}catch{t.appendChild(n)}})}function jn(t,e){return function(n,i){n=n||t,i=i||e,customElements.get(n)||customElements.define(n,i)}}var Ft=class extends HTMLElement{constructor(...t){return super(...t)}connectedCallback(){On(this,Nn),Xn(this,Pn).then(t=>{this._initHTMLAndEvents(),this._show(this._selected,!1)})}disconnectedCallback(){In(this)}_initHTMLAndEvents(){this._selected=+this.getAttribute("selected")||0,this._items=Array.from(this.querySelector(".x-items").children),this.querySelector(".x-prev.x-button").addEventListener("click",t=>this._showPrev()),this.querySelector(".x-next.x-button").addEventListener("click",t=>this._showNext()),this._items.forEach((t,e)=>{t.addEventListener("click",i=>this._show(e));let n=document.createElement("button");n.classList.add("x-button"),this._selected===e&&n.classList.add("x-active"),n.innerText=""+e,n.addEventListener("click",i=>{this._show(e),i.stopPropagation()}),this.querySelector(".x-shortcuts").appendChild(n)}),this.setAttribute("tabindex","-1"),this.addEventListener("keyup",t=>{t.key==="ArrowLeft"&&this._showPrev(),t.key==="ArrowRight"&&this._showNext()})}_show(t,e=!0){this._items[this._selected].classList.remove("x-active"),this._selected=+t;let n=this._items[this._selected];e?n.scrollIntoView({behavior:"smooth",inline:"center",block:"nearest"}):setTimeout(i=>{this.querySelector(".x-items").scrollLeft=n.offsetLeft},1e3),this._items[this._selected].classList.add("x-active"),this.querySelector(".x-shortcuts .x-active").classList.remove("x-active"),Array.from(this.querySelectorAll(".x-shortcuts .x-button"))[this._selected].classList.add("x-active")}_showPrev(){let t=(this._selected+this._items.length-1)%this._items.length;this._show(t)}_showNext(){let t=(this._selected+this._items.length+1)%this._items.length;this._show(t)}};Ft.define=jn("x-carousel",Ft);var Bn=`<div class="x-clock">
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 220 220">
    <style>
     text { 
       font-family: Courier New;
       font-weight: bold;
       user-select: none;
     }
    </style>

    <g transform="translate(110,110)">
      <!-- tick -->
      <g>
        <circle r="108" class="x-clock-circle" fill="none" stroke-width="4" stroke="gray" />
        <circle r="97" class="x-clock-1-minute" fill="none" stroke-width="11" stroke="black" 
          stroke-dasharray="4 46.789082" transform="rotate(-1.5)" />
        <circle r="100" class="x-clock-5-minute"  fill="none" stroke-width="5" stroke="black"
          stroke-dasharray="2 8.471976" transform="rotate(-.873)" />
      </g>

      <!-- hands -->
      <g id="hands" transform="rotate(180)">
        <circle class="x-clock-center" r="7" fill="#333" />
        <g id="hour-hand" tabindex="0">
          <line  class="x-clock-hour-hand" stroke-width="5" y2="70" stroke-linecap="round" stroke="#333"  />
        </g>
        <g id="minute-hand" tabindex="0" (keydown)="onKeydown($event, 1)">
          <line class="x-clock-minute-hand" stroke-width="5" y2="85" stroke-linecap="round" stroke="#666" />
        </g>
        <g id="second-hand">
          <line class="x-clock-second-hand" stroke-width="2" y2="95" stroke="#999" />
        </g>
      </g>
      <!-- numbers -->
      <g id="numbers" class="x-clock-numbers">
        <text x="35" y="-65">1</text>
        <text x="65" y="-35">2</text>
        <text x="75" y="5">3</text>
        <text x="65" y="45">4</text>
        <text x="35" y="75">5</text>
        <text x="-5"  y="85">6</text>
        <text x="-45" y="75">7</text>
        <text x="-75" y="45">8</text>
        <text x="-85" y="5">9</text>
        <text x="-75" y="-35">10</text>
        <text x="-50" y="-65">11</text>
        <text x="-10" y="-75">12</text>
      </g>

      <g id="digital"  class="x-clock-digital">
        <text id="digital-text" x="-40" y="30"></text>
      </g>
    </g>
  </svg>
    </label>
</div>
`,Rn=`x-clock {
  display: block;
  /* position: relative; //This affects offsetX/Y. Don't */
  width: 160px;
  height: 160px;
}
x-clock .x-clock {
  width: 100%;
  height: 100%;
}
x-clock .x-clock .x-clock-hour-hand,
x-clock .x-clock .x-clock-minute-hand {
  cursor: pointer;
}
x-clock .x-clock #second-hand {
  display: none;
}
x-clock[run=true] .x-clock #second-hand {
  display: initial;
}
`;function Un(t,e,n=0){return new Promise(function(i,s){e?setTimeout(function(){if(e.indexOf("</slot>")){let o=e.replace("<slot></slot>",t.innerHTML);t.innerHTML=o}else t.innerHTML=e;Vn(t),i(!0)},n):i(!1)})}function Wn(t,e){let n=t.tagName.toLowerCase(),i=n==="x-input"&&t.getAttribute("type"),s=i?`-${i}`:"",r=`${n}${s}`;if(document.querySelector(`style[${r}]`)){let o=document.querySelector(`style[${r}]`);o.createdAt=new Date().getTime()}else{let o=document.createElement("style");return o.setAttribute(r,""),o.appendChild(document.createTextNode(e)),document.head.appendChild(o),o.createdAt=new Date().getTime(),o}}function Yn(t){let e=t.tagName.toLowerCase(),n=e==="x-input"&&t.getAttribute("type"),i=n?`-${n}`:"",s=`${e}${i}`,r=document.body.querySelectorAll(`${s}`).length;if(document.querySelector(`style[${s}]`)&&r<1){let a=document.querySelector(`style[${s}]`);new Date().getTime()>a.createdAt+500&&a.remove()}}function Vn(t){t.querySelectorAll("script").forEach(e=>{let n=document.createElement("script");Array.from(e.attributes).forEach(i=>n.setAttribute(i.name,i.value)),n.appendChild(document.createTextNode(e.innerText));try{t.replaceChild(n,e)}catch{t.appendChild(n)}})}function Gn(t,e){["input","select"].includes(t.tagName.toLowerCase())?t.value=e:t.innerText=e}function Kn(t,e){return function(n,i){n=n||t,i=i||e,customElements.get(n)||customElements.define(n,i)}}var _t=class extends HTMLElement{constructor(...t){let e=super(...t);return this.target,this._docMouseUpHandler=this._onDragEnd.bind(this),e}connectedCallback(){Wn(this,Rn),this.target=document.getElementById(this.getAttribute("target")),Un(this,Bn).then(t=>{this._init(),document.addEventListener("mouseup",this._docMouseUpHandler),document.addEventListener("touchend",this._docMouseUpHandler)})}disconnectedCallback(){Yn(this),document.removeEventListener("mouseup",this._docMouseUpHandler),document.removeEventListener("touchend",this._docMouseUpHandler)}_init(){this._onDrag=!1,this._time=new Date,this._dragStaPos,this._dragElId,this._prevMin,this._hour=this.getAttribute("hour"),this._minute=this.getAttribute("minute"),this.addEventListener("mousedown",this._onDragStart.bind(this)),this.addEventListener("touchstart",this._onDragStart.bind(this),{passive:!0}),this.addEventListener("mousemove",this._onDragFunc.bind(this)),this.addEventListener("touchmove",this._onDragFunc.bind(this),{passive:!0}),this._hour&&this._time.setHours(this._hour),this._minute&&this._time.setMinutes(this._minute),this.querySelector("#hour-hand").addEventListener("keydown",t=>this._onKeydown(t,60)),this.querySelector("#minute-hand").addEventListener("keydown",t=>this._onKeydown(t,1)),this._updateHourHand(this._time,!0,!1),this.getAttribute("run")&&this._runClock()}_onDragEnd(t){this._onDrag=!1}_onDragStart(t){t.preventDefault(),this._onDrag=!0,this._dragStaPos=[t.pageX,t.pageY];let e=t.target.closest("#hour-hand, #minute-hand");this._dragElId=e&&e.id}_onDragFunc(t){if(t.preventDefault(),!this._onDrag)return!1;let e=[t.pageX,t.pageY],n=this._distance(this._dragStaPos,e),i=this._mouseToDeg(t);if(n&&this._dragElId==="hour-hand"){let[s,r]=this._degToTime(i),o=this._time.getHours()===23&&s===0?0:this._time.getHours()===11&&s===0?12:this._time.getHours()===12&&s===11?11:this._time.getHours()===0&&s===11?23:this._time.getHours()>=12?s+12:s;this._time.setHours(o),this._time.setMinutes(r),this._updateHourHand(this._time)}else if(n&&this._dragElId==="minute-hand"){let s=this._degToMin(i);this._time.setMinutes(s),this._updateMinuteHand(this._time)}}_onKeydown(t,e){let n=this._time.getTime();[39,38].indexOf(t.keyCode)>-1?(this._updateHourHand(new Date(n+e*6e4)),t.preventDefault()):[37,40].indexOf(t.keyCode)>-1&&(this._updateHourHand(new Date(n-e*6e4)),t.preventDefault())}_updateHourHand(t,e=!0,n=!0){var i,s;this._time=new Date(t.getTime());let[r,o]=[t.getHours(),t.getMinutes()],a=r%12*60/2,l=o/60*(360/12),c=a+l;if(this.querySelector("#hour-hand").setAttribute("transform",`rotate(${c})`),e&&this._updateMinuteHand(this._time,!1),this._time.toString=function(){return this.toLocaleTimeString("en-US",{hour12:0,hourCycle:"h23"}).replace(/^24/,"00")},this.querySelector("#digital-text").textContent=this._time,n){let g=new CustomEvent("x-select",{bubbles:!0,detail:this._time});this.dispatchEvent(g),this.target&&Gn(this.target,this._time),(s=(i=this.target)==null?void 0:i.closest("x-input"))==null||s.classList.remove("empty")}}_updateMinuteHand(t,e=!0){this._time=new Date(t.getTime());let n=t.getMinutes(),i=360/60*n,s=this.querySelector("#minute-hand");if(this._onDrag){let r=this._prevMin===59&&n===0?1:this._prevMin===0&&n===59?-1:0;this._time.setHours(this._time.getHours()+r)}s.setAttribute("transform",`rotate(${i})`),e&&this._updateHourHand(this._time,!1),this._prevMin=n}_degToTime(t){let e=t<0?180+t+180:t,n=Math.floor(e/30),i=Math.floor(e)%30*2;return[n,i]}_degToMin(t){let e=t<0?180+t+180:t;return Math.floor(e/6)}_mouseToDeg(t){let e=this.querySelector(".x-clock"),n=this._cumulativeOffset(e),[i,s]=[n.x+e.offsetWidth/2,n.y+e.offsetHeight/2];return Math.atan2(t.pageX-i,(t.pageY-s)*-1)*(180/Math.PI)}_distance(t,e){return Math.sqrt(Math.pow(t[0]-e[0],2)+Math.pow(t[1]-e[1],2))}_cumulativeOffset(t){let e=0,n=0;do e+=t.offsetTop||0,n+=t.offsetLeft||0,t=t.offsetParent;while(t);return{x:n,y:e}}_runClock(){let t=this.querySelector("#minute-hand"),e=this.querySelector("#second-hand"),n=this.querySelector("#digital-text");e.setAttribute("transform",`rotate(${360/60*this._time.getSeconds()})`),setInterval(i=>{this._time.setSeconds(this._time.getSeconds()+1);let s=6*this._time.getSeconds();if(e.setAttribute("transform",`rotate(${s})`),s===360){let r=6*this._time.getMinutes();t.setAttribute("transform",`rotate(${r})`)}n.textContent=this._time},1e3)}};_t.define=Kn("x-clock",_t);var Zn=`<canvas class="canvas"></canvas>
<div class="circle"></div>
<div class="desc">&nbsp;</div>
`,Jn=`x-color-picker {
  position: relative;
  display: block;
}

x-color-picker > .circle {
  border: 2px solid;
  border-radius: 50%;
  width: 12px;
  height: 12px;
  position: absolute;
  top:0;
  left: 0;
  pointer-events: none;
  box-sizing: border-box;
}

x-color-picker > .desc {
  font-size: 14px;
  text-align: center;
  width: 100%;
}
`;function Qn(t,e,n=0){return new Promise(function(i,s){e?setTimeout(function(){if(e.indexOf("</slot>")){let o=e.replace("<slot></slot>",t.innerHTML);t.innerHTML=o}else t.innerHTML=e;ni(t),i(!0)},n):i(!1)})}function ti(t,e){let n=t.tagName.toLowerCase(),i=n==="x-input"&&t.getAttribute("type"),s=i?`-${i}`:"",r=`${n}${s}`;if(document.querySelector(`style[${r}]`)){let o=document.querySelector(`style[${r}]`);o.createdAt=new Date().getTime()}else{let o=document.createElement("style");return o.setAttribute(r,""),o.appendChild(document.createTextNode(e)),document.head.appendChild(o),o.createdAt=new Date().getTime(),o}}function ei(t){let e=t.tagName.toLowerCase(),n=e==="x-input"&&t.getAttribute("type"),i=n?`-${n}`:"",s=`${e}${i}`,r=document.body.querySelectorAll(`${s}`).length;if(document.querySelector(`style[${s}]`)&&r<1){let a=document.querySelector(`style[${s}]`);new Date().getTime()>a.createdAt+500&&a.remove()}}function ni(t){t.querySelectorAll("script").forEach(e=>{let n=document.createElement("script");Array.from(e.attributes).forEach(i=>n.setAttribute(i.name,i.value)),n.appendChild(document.createTextNode(e.innerText));try{t.replaceChild(n,e)}catch{t.appendChild(n)}})}function ii(t,e){["input","select"].includes(t.tagName.toLowerCase())?t.value=e:t.innerText=e}function si(t,e){return function(n,i){n=n||t,i=i||e,customElements.get(n)||customElements.define(n,i)}}var At=class extends HTMLElement{constructor(...t){return super(...t)}connectedCallback(){ti(this,Jn),this.target=document.getElementById(this.getAttribute("target")),Qn(this,Zn).then(t=>this._init())}disconnectedCallback(){ei(this)}_init(){this.canvas=this.querySelector(".canvas"),this.circle=this.querySelector(".circle"),this.desc=this.querySelector(".desc"),this.width=this.offsetWidth||parseInt(this.getAttribute("width")||240),this.height=this.offsetHeight||parseInt(this.getAttribute("height")||160),this.style.width=this.width+"px",this.style.minHeight=this.height+"px",this._drawColors(this.canvas),this.canvas.addEventListener("click",t=>{this._pickColor(t,this.canvas,this.circle,this.desc,this.target)})}_drawColors(t){[t.width,t.height]=[this.width,this.height];let e=t.getContext("2d"),{width:n,height:i}=t,s=e.createLinearGradient(0,0,n,0);s.addColorStop(0,"rgb(255, 0, 0)"),s.addColorStop(1/6,"rgb(255, 255, 0)"),s.addColorStop(2/6,"rgb(0, 255, 0)"),s.addColorStop(3/6,"rgb(0, 255, 255)"),s.addColorStop(4/6,"rgb(0, 0, 255)"),s.addColorStop(5/6,"rgb(255, 0, 255)"),s.addColorStop(1,"rgb(255, 0, 0)"),e.fillStyle=s,e.fillRect(0,0,n,i);let r=e.createLinearGradient(0,0,0,i);r.addColorStop(0,"rgba(255, 255, 255, 1)"),r.addColorStop(.5,"rgba(255, 255, 255, 0)"),r.addColorStop(.5,"rgba(0, 0, 0, 0)"),r.addColorStop(1,"rgba(0, 0, 0, 1)"),e.fillStyle=r,e.fillRect(0,0,n,i)}_pickColor(t,e,n,i,s){var r;let o=t.target.getBoundingClientRect(),a=t.clientX-o.left,l=t.clientY-o.top,f=e.getContext("2d").getImageData(a,l,1,1),[g,v,_]=f.data,[T,F,L]=this._rgb2hsl(g,v,_),$=L<.5?"#FFF":"#000";n.style.top=l-6+"px",n.style.left=a-6+"px",n.style.borderColor=$,i.innerText=Object.values(this._toCss(g,v,_,T,F,L)).toString().replace(/\),/g,") "),i.style.backgroundColor=this._toCss(g,v,_,T,F,L).hex,i.style.color=$;let M=`#${this._int2hex(g)}${this._int2hex(v)}${this._int2hex(_)}`;e.dispatchEvent(new CustomEvent("x-select",{bubbles:!0,detail:{r:g,g:v,b:_,h:T,s:F,l:L,hex:M}})),this.target&&(ii(this.target,M),(r=this.target.closest("x-input"))==null||r.classList.remove("empty"))}_int2hex(t){return(Math.round(t)<16?"0":"")+Math.round(t).toString(16)}_toCss(t,e,n,i,s,r){let o=a=>(Math.round(a)<16?"0":"")+Math.round(a).toString(16);return{rgb:`rgb(${Math.round(t)},${Math.round(e)},${Math.round(n)})`,hsl:`hsl(${Math.round(360*i)},${Math.round(100*s)}%,${Math.round(100*r)}%)`,hex:`#${o(t)}${o(e)}${o(n)}`}}_rgb2hsl(t,e,n){t/=255,e/=255,n/=255;var i=Math.max(t,e,n),s=Math.min(t,e,n),r,o,a=(i+s)/2;if(i==s)r=o=0;else{var l=i-s;switch(o=a>.5?l/(2-i-s):l/(i+s),i){case t:r=(e-n)/l+(e<n?6:0);break;case e:r=(n-t)/l+2;break;case n:r=(t-e)/l+4;break}r/=6}return[r,o,a]}};At.define=si("x-color-picker",At);function ri(t,e){let n=t.tagName.toLowerCase(),i=n==="x-input"&&t.getAttribute("type"),s=i?`-${i}`:"",r=`${n}${s}`;if(document.querySelector(`style[${r}]`)){let o=document.querySelector(`style[${r}]`);o.createdAt=new Date().getTime()}else{let o=document.createElement("style");return o.setAttribute(r,""),o.appendChild(document.createTextNode(e)),document.head.appendChild(o),o.createdAt=new Date().getTime(),o}}function oi(t,e=[]){let n={};return Array.from(t.attributes).filter(i=>{let s="id,class,tittle,lang,hidden,style,dir,tabindex,accesskey,contenteditable,draggable,debug,trace".split(",");return!e.includes(i.name)&&!s.includes(i.name)&&!i.name.match(/^on[a-z]+$/)&&!i.name.match(/-/)}).forEach(i=>{n[i.name]=i.value}),n}function le(t,e){return function(n,i){n=n||t,i=i||e,customElements.get(n)||customElements.define(n,i)}}function ct(t,e){let n=t.trace;if(n&&console.info("  getValueFromExpressionX",{scope:t,expr:e}),Array.isArray(e)&&e.length===3)return n&&console.info("  getValueFromExpressionX boolean expression with values",{expr:e}),e[0]?e[1]:e[2];if(e==="::id")return n&&console.info("  getValueFromExpressionX ::id",{expr:e}),(+new Date+Math.random()).toString(36).replace(".","");if((""+e).match(/^(true|false)$/))return n&&console.info("  getValueFromExpressionX boolean expression without values",{expr:e}),""+e=="true";if((""+e).match(/^[0-9.]+$/))return n&&console.info("  getValueFromExpressionX number",{expr:e}),+e;if(typeof e!="string")return n&&console.info("  getValueFromExpressionX not string expression",{expr:e}),e;if(e.match(/^[#.]/)){n&&console.info("  getValueFromExpressionX DOM selector",{expr:e});let i=t.querySelector(e);return i.value||i.innerText}else{if((e.match(/ /)||e.match(/[^a-z0-9_.\[\]]/i))&&!e.includes("="))return n&&console.info("  getValueFromExpressionX string",{expr:e}),(e.match(/[{\[]{2}.+[}\]]{2}/g)||[]).forEach(i=>{let s=i.replace(/[{\[\]}]/g,"");e=e.replace(i,t[s])}),e;if(e==="")return n&&console.info("  getValueFromExpressionX blank",{expr:e}),"";if(typeof t[e]!="undefined")return n&&console.info("  getValueFromExpressionX scope expression",{expr:e}),t[e];{n&&console.info("  getValueFromExpressionX with object expression",{expr:e});let[i,...s]=e.split("."),r=s.length&&s.slice(-1)[0].match(/.+=.+/),o=s.length&&s.slice(-1)[0].match(/^[^=]+$/);if(s.length===0)return n&&console.info("  getValueFromExpressionX no expression",{propName:i,exprs:s}),t[i]?t[i]:e;if(o&&Array.isArray(t[i])){n&&console.info("  getValueFromExpressionX endsWithPropName and array",{propName:i,exprs:s});let a=[...t[i]],l=s.pop();return s.forEach(c=>{let[f,g]=c.split("=");a=a.filter(v=>(n&&console.info("  getValueFromExpressionX endsWithPropName and array",v,{key:f,value:g}),g==="true"||g==="false"?!!v[f]==(g=="true"):v[f]==g))}),a[l]}else if(r&&Array.isArray(t[i])){n&&console.info("  getValueFromExpressionX endsWithCondition and array",{propName:i,exprs:s});let a=[...t[i]];return s.forEach(l=>{let[c,f]=l.split("=");a=a.filter(g=>g[c]==f)}),a}else{if(o&&!Array.isArray(t[i]))return n&&console.info("  getValueFromExpressionX endsWithCondition and NOT array",{propName:i,exprs:s}),new Function("scope",`return scope.${e};`)(t);if(e.match(/=/)){n&&console.info("  getValueFromExpressionX has = in expression",{propName:i,expr:e});let[a,l]=e.split(/=+/);return new Function("scope",`return scope.${a};`)(t)==l}}}}}function Fe(t,e){let n=t.trace;if(n&&console.info("  _getExprValue",{scope:t,expr:e}),e.match(/^[#.](.+)\[(.+)\]$/)){n&&console.info("  getTargetFromExpressionX DOM selector Attribute",{scope:t,expr:e});let[i,s,r]=e.match(/^(.+)\[(.+)\]$/);return n&&console.info("  getTargetFromExpressionX DOM selector Attribute",{scope:t,expr:e,selector:s,attrName:r}),t.parentElement.querySelector(s).isSameNode(t)?{refs:[t],attrName:r}:{refs:Array.from(t.querySelectorAll(s)),attrName:r}}if(e.match(/^#(.+?)\.(.+)$/)){n&&console.info("  getTargetFromExpressionX DOM selector with property",{scope:t,expr:e});let[i,s,r]=e.match(/^(#.+?)\.(.+)$/);return{refs:[t.querySelector(s)],propName:r}}else{if(e.match(/^[#.]/))return n&&console.info("  getTargetFromExpressionX DOM selector",{scope:t,expr:e}),{refs:Array.from(t.querySelectorAll(e)),propName:"value"};{let[i,...s]=e.split("."),r=s.length&&s.slice(-1)[0].match(/.+=.+/),o=s.length&&s.slice(-1)[0].match(/^[^=]+$/);if(s.length===0)return n&&console.info("  getTargetFromExpressionX no expression",{propName:i,exprs:s}),{refs:[t],propName:i};if(o){n&&console.info("  getTargetFromExpressionX endsWithPropName",{propName:i,exprs:s});let a=s.pop(),l=t[i]||[];return s.forEach(c=>{let[f,g]=c.split("=");l=l.filter(v=>g==="true"||g==="false"?!!v[f]==(g=="true"):v[f]==g)}),{refs:l,propName:a}}else if(r){n&&console.info("  getTargetFromExpressionX endsWithCondition",{propName:i,exprs:s});let a=[...t[i]||[]];return s.forEach(l=>{let[c,f]=l.split("=");a=a.filter(g=>f==="true"||f==="false"?!!g[c]==(f=="true"):g[c]==f)}),{refs:a}}}}}function ai(t,e,n){console.log("> x-div log",e,n)}function li(t,e,n){t.trace&&console.info("  _add",{target:e,params:n}),n.id=n.id||(+new Date+Math.random()).toString(36).replace(".",""),Array.isArray(t[e])?(t[e].push(n),t.setProperty(e,t[e])):typeof t[e]=="undefined"?(t[e]=[],t[e].push(n),t.setProperty(e,t[e])):console.error("addition is only allowed to array type",{target:e,params:n})}function ci(t,e,n){let i=t.querySelector(e);i&&typeof i.fetch=="function"?i.fetch(n):console.error("could not find el to fetch",i)}function ui(t,e,n){n=Array.isArray(n)?n:[n];let i=document.querySelector("x-route[main-route], x-route");t.trace&&console.info("  goto",{mainRoute:i,scope:t,target:e,params:n}),(e.match(/:[a-z0-9]+/ig)||[]).forEach((r,o)=>e=e.replace(r,n[o])),t.trace&&console.info("  goto",{mainRoute:i,scope:t,target:e,params:n}),i?i.navigate(e):console.error(n?"route error, route params is not allowed":"route error, could not find x-route[main-route]")}function di(t,e,n){t.trace&&console.info("  set",{scope:t,target:e,source:n});let[i,...s]=e.split("."),{refs:r,propName:o,attrName:a}=Fe(t,e);t.trace&&console.info("  set getTargetFromExpressionX",{refs:r,propName:o,attrName:a});let l=ct(t,n);if(t.trace&&console.info("  set",{refs:r,scopePropName:i,sourceVal:l}),typeof l=="undefined")throw`Invalid source ${n}`;r.forEach(c=>{let f=c instanceof HTMLElement,g=Array.isArray(t[i]);if(f&&a)t.trace&&console.info("  set attribute",{attrName:a,sourceVal:l}),c.setAttribute(a,l);else if(f&&c===t)t.trace&&console.info("  set scope property",o,"as",l),t.setProperty(o,l);else if(g){let v=t[i].indexOf(c);v!==-1?(t.trace&&console.info("  set array elment",{ref:c,propName:o,ndx:v,sourceVal:l}),t[i][v][o]=l):console.error("could not find",c,"from",t[i])}else o?(t.trace&&console.info("  set ",o,"as",l),new Function("ref","sourceVal",`ref.${o} = sourceVal;`)(c,l)):o||(alert("Unexpected Error"),c=l)}),typeof t[i]!="undefined"&&t.setProperty(i,t[i])}function hi(t,e){let n=e.match(/(.*)\.(.+?)$/),i=e.match(/(.*)\[(.+?)\]$/);if(n){let[s,r,o]=n,a=t.querySelector(r)||t.parentElement.querySelector(r);a&&a.classList.contains(o)?a.classList.remove(o):a?a.classList.add(o):console.error("could not find element to toggle class",a)}else if(i){let[s,r,o]=n,a=t.querySelector(r)||t.parentElement.querySelector(r);a&&a.getAttribute(o)===null?a.setAttribute(o,""):a?a.removeAttribute(o):console.error("could not find elementn to toggle attrubute",a)}}function fi(t,e,n){if(t.trace&&console.info("  remove",{scope:t,target:e,params:n}),e.match(/^[.#]/))document.querySelector(e).remove();else{let{refs:i,propName:s}=Fe(t,e),[r,...o]=e.split(".");i.forEach(a=>{if(t.trace&&console.info("  remove object",{ref:a,propName:s}),Array.isArray(t[r])){let l=t[r].indexOf(a);t[r].splice(l,1)}else s?delete t[r][s]:s||delete t[r];t.setProperty(r,t[r])})}}function pi(t,e,n){let i=n.trace;i&&console.info("  parseCommandExpr",{commandExpr:e});let[s,r,o]=e.split(/^([a-z]+)\((.*)\)$/i),[a,...l]=o.split(",").map(g=>g.trim());i&&console.info("  parseCommandExpr",{el:t,optionExprs:l});let c=l[0],f;if(typeof c=="undefined")typeof t.value!="undefined"&&(i&&console.info("  getArgs case 1",l.length,t.value),f=t.value);else if(c.match(/^['"].+['"]$/))f=[c.replace(/^['"]/,"").replace(/['"]$/,"")];else if(l.length)if(c.match(/^(.*?)=(.*)$/))i&&console.info("  parseCommandExpr with equalSigns",{optionExprs:l}),f={},l.forEach(g=>{let[v,_,T]=g.match(/^(.*?)=(.*)$/);if(T.startsWith("::")){let F=T.replace("::","");f[_]=t[F]}else f[_]=ct(n,T)});else{i&&console.info("  parseCommandExpr with no equalSigns",{optionExprs:l});let g=l.map(v=>{if(v.match(/^['"]/))return v.replace(/['"]/g,"");if(v.match(/^::/)){let _=c.replace("::","");return t[_]}else return ct(n,v)});f=g.length>1?g:g[0]}return{command:r,target:a,options:f}}var P=class{static translate(t,e={}){var n,i,s;let r,o;if(t.match(/\.[a-z0-9_]+$/i)){o=t.split("."),r=(n=P[P.getLanguage()])==null?void 0:n[o[0]];for(var a=1;a<o.length;a++)if(r=r==null?void 0:r[o[a]],!r&&P.getLanguage()!=="en")return r=`(${P.getLanguage().toUpperCase()}) ${t}`,r}else r=(s=(i=P[P.getLanguage()])==null?void 0:i[t])==null?void 0:s.trim();if(r||(r=P.getLanguage()==="en"?t:`(${P.getLanguage().toUpperCase()}) ${t}`),r){for(let l in e)r=r.replace(new RegExp(`\${${l}}`,"g"),e[l]),r=r.replace(new RegExp(`{{${l}}}`,"g"),e[l]);return r}}static getLanguage(){function t(){let n=document.cookie.split("; ").find(i=>i.startsWith(`${name}=`));return n?n.split("=")[1]:null}return(P.language||window.localStorage.getItem("language")||t()||document.documentElement.getAttribute("lang")||navigator.language.split("-")[0]||"en").toLowerCase()}},_e=class extends HTMLElement{constructor(){super();this.orgCThildElements,this.orgKey,this.commonAttrName}connectedCallback(){let t=P.getLanguage();if(t!=="en"&&!P[t]&&console.error("Please provide translation before app starts",t),this._saveOriginal(),this.attributes.length){if(this.commonAttrName){let n=this._getMatchingEl();this._translate(n)}else this._translate(this);new MutationObserver(this.attrMutationCallback.bind(this)).observe(this,{attributes:!0})}else{let e=this._getAttrMap();this._translate(this,e)}}attrMutationCallback(t){t.forEach(e=>{if(e.attributeName===this.commonAttrName){let n=this._getMatchingEl();this._translate(n)}else e.attributeName.match(/^[a-z0-9]+$/i)&&this._translate(this)})}_translate(t){let e=t===this?this.orgKey.trim():(t.textContent||t.innerText).trim(),n=this._getAttrMap(),i=P.translate(e,n);i&&(this.innerHTML=i)}_getMatchingEl(){let t=this.commonAttrName,e=this.getAttribute(t);return this.orgChildren.find(i=>i.getAttribute(t)===e||i.getAttribute(t)==="default")}_saveOriginal(){if(!this.orgChildren){this.orgChildren=Array.from(this.children||[]),this.orgKey=(this.textContent||this.innerText).trim();let t={};this.orgChildren.forEach(n=>{Array.from(n.attributes).forEach(i=>{t[i.name]=t[i.name]||0,t[i.name]++})});let e=Object.entries(t).find(([n,i])=>i===this.orgChildren.length);this.commonAttrName=e&&e[0]}}_getAttrMap(){return Array.from(this.attributes).reduce((t,e)=>(t[e.name]=e.value,t),{})}};_e.define=le("x-t9n",_e);var Ae=class extends HTMLElement{constructor(){super();this.targetEl}connectedCallback(){let t=this.getAttribute("selector");setTimeout(e=>{t?(this.targetEl=document.querySelector(t),new MutationObserver(this.mutationCallback.bind(this)).observe(this,{attributes:!0})):console.error("element not found",t)})}mutationCallback(t){this.targetEl.querySelectorAll("[x-translate]").forEach(n=>{n.getAttribute("x-translate").split(",").forEach(s=>{let r=n.getAttribute(s),o=P.translate(r);n.setAttribute(s,o)})})}};Ae.define=le("x-t9n-attr",Ae);var mi=`x-div {display: block; padding: 12px; }
x-div a {cursor: pointer;} 
x-div.x-loading::before {
  display: flex;
  position: absolute;
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' style='width: 40px; height: 40px;'%3E%3Ccircle cx='50' cy='50' r='35' fill='none' stroke='%23e15b64' stroke-width='10' stroke-dasharray='165 57'%3E%3CanimateTransform attributeName='transform' type='rotate' repeatCount='indefinite' dur='1s' values='0 50 50;360 50 50' keyTimes='0;1'%3E%3C/animateTransform%3E%3C/circle%3E%3C/svg%3E");
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .5);
  z-index: 10;
}
/* 
x-div form:invalid button:not([type]), 
x-div form:invalid button[type=submit] { 
  pointer-events: none; opacity: .5;
} 
*/`,Ct=class extends HTMLElement{constructor(...t){let e=super(...t);return this.debug,this.trace,e}connectedCallback(){if(this.parentElement.closest("x-div")){console.error("error, x-div cannot be used inside x-div",this.parentElement.closest("x-div")),this.innerHTML="error, x-div cannot be used inside x-div";return}this.debug=this.getAttribute("debug")!==null,this.trace=this.getAttribute("trace")!==null,ri(this,mi);let t=oi(this);Object.entries(t).forEach(([e,n])=>this.setProperty(e,n)),this._addEventListener(),this.translateAttributes()}translateAttributes(){this.querySelectorAll("[x-t9n]").forEach(t=>{t.getAttribute("x-t9n").split(",").map(n=>n.trim()).forEach(n=>{let i=t.getAttribute(n),s=P.translate(i)||i;t.setAttribute(n,s)})})}_addEventListener(){this.addEventListener("click",this._xEventHandler.bind(this)),this.addEventListener("input",this._xEventHandler.bind(this)),this.addEventListener("change",this._xEventHandler.bind(this)),this.addEventListener("keyup",this._xEventHandler.bind(this)),this.addEventListener("x-success",this._xEventHandler.bind(this)),this.addEventListener("x-error",this._xEventHandler.bind(this)),this.addEventListener("x-select",this._xEventHandler.bind(this)),this.addEventListener("x-route",this._xEventHandler.bind(this))}_xEventHandler(t){let e=t.type==="click"?"xon-click":t.type==="input"?"xon-input":t.type==="change"?"xon-change":t.type==="keyup"&&t.key==="Enter"?"xon-enter":t.type==="keyup"&&t.key!=="Enter"?"xon-keyup":t.type.match(/^x-/)?t.type.replace(/^x-/,"xon-"):void 0,n=e&&(t.target.getAttribute(e)||this.getAttribute(e));if(!n||e==="x-enter"&&!t.target.value)return;this.event=t,this.debug&&console.info(`
handling event`,t.type,"from",t.target.outerHTML.match(/.*?>/)[0]);let{command:i,target:s,options:r}=pi(t.target,n,this);switch(this.trace&&console.info("  processing command",{commandExpr:n,command:i,target:s,options:r}),i){case"add":li(this,s,r),typeof t.target.value=="string"&&(t.target.value="");break;case"remove":fi(this,s,r);break;case"goto":ui(this,s,r);break;case"toggle":hi(this,s,r);break;case"fetch":ci(this,s,r);break;case"set":di(this,s,r);break;case"log":ai(this,s,{event:t,...r});break;default:console.error("Invalid command",n)}}setProperty(t,e){["id","class","tittle","style","tabindex","debug"].includes(t)||t.match(/^on[a-z]+/)||t.match(/^aria-/)||t.match(/^x-/)||(this.trace&&console.info("  setProperty",{propName:t,propValue:e}),this[t]=e,this._setChildValueProperty(t),this._setChildCssProperty(t),this._setChildClassProperty(t),this._setChildAttrValue(t))}_setChildValueProperty(t){let e=`[x-value*="${t}"]`;this.querySelectorAll(`[x-value*="${t}"]`).forEach(i=>{let s=i.getAttribute("x-value");this.debug&&console.info(`value binding for ${t}`,i.outerHTML.match(/.*?>/)[0]);let r=ct(this,s),o=typeof i.value=="undefined"?"innerText":"value";if(o==="innerText"&&typeof r=="object")try{i[o]=JSON.stringify(r,null,"  ")}catch{i[o]=r}else i[o]=r})}_setChildCssProperty(t){let e=this.querySelectorAll(`[x-style*="${t}"]`);Array.from(e).forEach(n=>{let i=n.getAttribute("x-style");this.debug&&console.info(`style binding for ${t}`,n.outerHTML.match(/.*?>/)[0]),n.getAttribute("x-style").match(/\[\[.+?\]\]/g).map(s=>s.replace(/[\[\]]/g,"")).forEach(s=>{i=i.replace(`[[${s}]]`,this[s])}),i.split(";").map(s=>s.split(":")).forEach(([s,r])=>{s&&(s=s.trim().replace(/\b-([a-z])/g,(o,a)=>a.toUpperCase()),this.trace&&console.info("  _setChildCssProperty",{cssProp:s,cssVal:r}),n.style[s]=r.trim())})})}_setChildClassProperty(t){let e=this.querySelectorAll(`[x-class*="${t}"]`);Array.from(e).forEach(n=>{n.getAttribute("x-class").split(";").map(i=>i.split(":")).forEach(([i,s])=>{this.debug&&console.info(`class binding for ${t}`,n.outerHTML.match(/.*?>/)[0]),!!ct(this,s)?n.classList.add(i):n.classList.remove(i)})})}_setChildAttrValue(t){let e=this.querySelectorAll(`[x-attr*="${t}"]`);Array.from(e).forEach(n=>{n.getAttribute("x-attr").split(";").map(i=>i.split(":")).forEach(([i,s])=>{this.debug&&console.info(`attribute setting for ${t}`,n.outerHTML.match(/.*?>/)[0]);let r=ct(this,s);["checked","selected"].includes(i)&&r===!1||typeof r=="undefined"?n.removeAttribute(i):n.setAttribute(i,r)})})}};Ct.define=le("x-div",Ct);var gi=`<div class="loading">
  <svg viewBox="0 0 100 100" style="width: 40px; height: 40px;">
    <circle cx="50" cy="50" r="35" fill="none" 
      stroke="#e15b64" stroke-width="10" stroke-dasharray="165 57">
      <animateTransform attributeName="transform" type="rotate" 
        repeatCount="indefinite" dur="1s"
        values="0 50 50;360 50 50" keyTimes="0;1">
      </animateTransform>
    </circle>
  </svg>
</div>`,bi=`x-http {
  display: block;
}

x-http > .loading {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: none;
  align-items: center;
  justify-content: center;
}

x-http > .loading.visible {
  background: #FFF;
  display: flex;
}`;function xi(t,e,n=0){return new Promise(function(i,s){e?setTimeout(function(){if(e.indexOf("</slot>")){let o=e.replace("<slot></slot>",t.innerHTML);t.innerHTML=o}else t.innerHTML=e;Ei(t),i(!0)},n):i(!1)})}function yi(t,e){let n=t.tagName.toLowerCase(),i=n==="x-input"&&t.getAttribute("type"),s=i?`-${i}`:"",r=`${n}${s}`;if(document.querySelector(`style[${r}]`)){let o=document.querySelector(`style[${r}]`);o.createdAt=new Date().getTime()}else{let o=document.createElement("style");return o.setAttribute(r,""),o.appendChild(document.createTextNode(e)),document.head.appendChild(o),o.createdAt=new Date().getTime(),o}}function vi(t){let e=t.tagName.toLowerCase(),n=e==="x-input"&&t.getAttribute("type"),i=n?`-${n}`:"",s=`${e}${i}`,r=document.body.querySelectorAll(`${s}`).length;if(document.querySelector(`style[${s}]`)&&r<1){let a=document.querySelector(`style[${s}]`);new Date().getTime()>a.createdAt+500&&a.remove()}}function Ei(t){t.querySelectorAll("script").forEach(e=>{let n=document.createElement("script");Array.from(e.attributes).forEach(i=>n.setAttribute(i.name,i.value)),n.appendChild(document.createTextNode(e.innerText));try{t.replaceChild(n,e)}catch{t.appendChild(n)}})}function wi(t,e){return function(n,i){n=n||t,i=i||e,customElements.get(n)||customElements.define(n,i)}}var Tt=class extends HTMLElement{constructor(...t){let e=super(...t);return this.url,this.debug,this.method="get",this.headers={Accept:"application/json","Content-Type":"application/json"},this.resptype="json",this.respStatusCode,this.__payload={},this.payload=new Proxy(this.__payload,{set:(n,i,s)=>{if(i!==""){let r=Object.assign({},n);n[i]=isNaN(s)?s:+s;let o=JSON.stringify(r)!==JSON.stringify(n);this.auto&&o&&this.fetch()}return!0}}),this.resp,this.error,e}connectedCallback(){var t;yi(this,bi),this.url=this.getAttribute("url"),this.method=this.getAttribute("method")||"get",this.auto=this.getAttribute("auto")!==null,this.debug=this.getAttribute("debug")!==null,this.resptype=this.getAttribute("resptype")||"json",this.respStatusCode=this.getAttribute("resp-status-code"),this.initHeaders(),this.initPayload(),this._validateProps().length>0?this.innerHTML=JSON.stringify(this._validateProps(),null,"  "):this.innerHTML.trim()?((t=this.firstElementChild)==null||t.classList.add("loading"),this.auto&&this.fetch()):xi(this,gi).then(e=>this.auto&&this.fetch())}disconnectedCallback(){vi(this)}_validateProps(){let t=[];return this.method.match(/^(GET|POST|PUT|DELETE|PATCH)$/i)||t.push({method:this.method,error:"Invalid method"}),this.respSTatusCode&&this.respStatusCode.match(/ /)&&t.push({method:this.respStatusCode,error:"Invalid respStatusCode"}),t}initHeaders(){(this.getAttribute("headers")||"").split(";").forEach(e=>{let[n,i]=e.split(":").map(s=>s.trim());n&&(this.headers[n]=i)})}initPayload(){(this.getAttribute("payload")||"").split(";").forEach(e=>{let[n,i]=e.split("=").map(s=>s.trim());this.payload[n]=i})}fetch(){if(!this.url)return!1;let t=this.method.toUpperCase(),e=this.headers,n="cors",i="no-cache",s="same-origin",r="follow",o="no-referrer-when-downgrade",a=this.method.toUpperCase()==="GET"?this._getUrl(this.payload):this._getUrl(),l=this.method.toUpperCase()==="GET"?void 0:this._getBody();return this.url.includes("{{")?!1:(this.debug&&console.debug("<x-http> fetch starts",{url:a,payload:this.payload,method:t,headers:e,body:l}),this.showLoading(),fetch(a,{method:t,mode:n,cache:i,credentials:s,redirect:r,referrerPolicy:o,headers:e,body:l}).then(c=>{if(!c.ok)throw Error(c.statusText);return c[this.resptype]()}).then(c=>{if(this.respStatusCode&&c[this.respStatusCode]>300)throw c;this.debug&&console.debug("<x-http> fetch success",a,c),this.resp=c;let f=new CustomEvent("x-success",{bubbles:!0,detail:c});this.dispatchEvent(f)}).catch(c=>{this.debug&&console.debug("<x-http> fetch error",a,c),this.error=c;let f=new CustomEvent("x-error",{bubbles:!0,detail:c});this.dispatchEvent(f)}).finally(c=>{setTimeout(f=>this.hideLoading(),100)}))}_getUrl(t={}){(this.url.match(/{{.+?}}/g)||[]).forEach(r=>{let o=r.replace(/[{}]/g,""),a=this.getAttribute(o);this.url=this.url.replace(r,a)});let n=this.url.includes("?"),i=Object.entries(t).map(([r,o])=>`${r}=${t[r]}`).join("&");return n?this.url+i:i?this.url+"?"+i:this.url}_getBody(t){let e=Object.assign({},this.payload,t);return JSON.stringify(e)}showLoading(){let t=this.parentElement,e=getComputedStyle(t).position;return e==="static"&&(t.style.position="relative"),this.querySelector(".loading")&&this.querySelector(".loading").classList.add("visible"),e}hideLoading(t){let e=this.parentElement,n=getComputedStyle(e).position;this.querySelector(".loading").classList.remove("visible"),t&&(e.style.position=null)}};Tt.define=wi("x-http",Tt);function Fi(t,e){return function(n,i){n=n||t,i=i||e,customElements.get(n)||customElements.define(n,i)}}var St=class extends HTMLElement{static get observedAttributes(){return["locale","format","currency","max-decimal","type","value"]}constructor(...t){let e=super(...t);return this.type,this.locale="en-US",this.maxDecimal=2,this.format="yyyy-MM-dd",this.currency="USD",e}connectedCallback(){}disconnectedCallback(){}attributeChangedCallback(t,e,n){if(this.type=this.getAttribute("type")||this.type,!["number","currency","date"].includes(this.type))return;this.locale=this.getAttribute("locale")||this.locale,this.maxDecimal=this.getAttribute("max-decimal")||this.maxDecimal,this.currency=this.getAttribute("currency")||this.currency,this.format=this.getAttribute("format")||this.getAttribute("locale")&&this._getDateFormat(this.locale)||this.format;let i;if(this.type==="number"){let s=+this.getAttribute("value");i=new Intl.NumberFormat(this.locale,{maximumFractionDigits:this.maxDecimal}).format(s)}else if(this.type==="currency"){let s=+this.getAttribute("value");i=new Intl.NumberFormat(this.locale,{currency:this.currency,style:"currency"}).format(s)}else if(this.type==="date"){let s=this.getAttribute("value")?new Date(this.getAttribute("value")):new Date;i=this._date2str(s,this.locale,this.format)}try{this.innerText=i}catch(s){this.innerText=s}}_date2str(t,e,n="yyyy-MM-dd"){let[i,s]=new Intl.DateTimeFormat(e,{weekday:"long",month:"long"}).format(t).split(" "),[r,o]=new Intl.DateTimeFormat(e,{weekday:"short",month:"short"}).format(t).split(" ");var a={M:t.getMonth()+1,d:t.getDate(),h:t.getHours(),m:t.getMinutes(),s:t.getSeconds()};return n.replace(/month/ig,c=>"\u246B\u246B").replace(/mon/ig,c=>"\u246B").replace(/weekday/ig,c=>"\u2466\u2466").replace(/week/ig,c=>"\u2466").replace(/(y{2,})/g,c=>t.getFullYear().toString().slice(-c.length)).replace(/(M+|d+|h+|m+|s+)/g,c=>((c.length>1?"0":"")+a[c.slice(-1)]).slice(-2)).replace(/⑫⑫/g,c=>i).replace(/⑫/g,c=>r).replace(/⑦⑦/ig,c=>s).replace(/⑦/ig,c=>o)}_getDateFormat(t){let[e,n]=t.toLowerCase().split(/[-_]/);return["fi"].includes(n)?"dd.MM.yyyy ":["fr","th"].includes(n)?"dd/MM/yyyy":["it","no"].includes(n)?"dd.MM.yy":["es"].includes(n)?"dd-MM-yy":["us"].includes(n)?"MM-dd-yy":["gb"].includes(n)?"dd/MM/yy":"yyyy-MM-dd"}};St.define=Fi("x-format",St);function j(t,e,n=0){return new Promise(function(i,s){e?setTimeout(function(){if(e.indexOf("</slot>")){let o=e.replace("<slot></slot>",t.innerHTML);t.innerHTML=o}else t.innerHTML=e;Ai(t),i(!0)},n):i(!1)})}function B(t,e){let n=t.tagName.toLowerCase(),i=n==="x-input"&&t.getAttribute("type"),s=i?`-${i}`:"",r=`${n}${s}`;if(document.querySelector(`style[${r}]`)){let o=document.querySelector(`style[${r}]`);o.createdAt=new Date().getTime()}else{let o=document.createElement("style");return o.setAttribute(r,""),o.appendChild(document.createTextNode(e)),document.head.appendChild(o),o.createdAt=new Date().getTime(),o}}function _i(t){let e=t.tagName.toLowerCase(),n=e==="x-input"&&t.getAttribute("type"),i=n?`-${n}`:"",s=`${e}${i}`,r=document.body.querySelectorAll(`${s}`).length;if(document.querySelector(`style[${s}]`)&&r<1){let a=document.querySelector(`style[${s}]`);new Date().getTime()>a.createdAt+500&&a.remove()}}function Ai(t){t.querySelectorAll("script").forEach(e=>{let n=document.createElement("script");Array.from(e.attributes).forEach(i=>n.setAttribute(i.name,i.value)),n.appendChild(document.createTextNode(e.innerText));try{t.replaceChild(n,e)}catch{t.appendChild(n)}})}function I(t,e,n=[],i=[]){let s=["class","contenteditable","debug","draggable","tabindex"];Array.from(t.attributes).filter(a=>!a.name.match(/^on[a-z]+/)).filter(a=>!s.includes(a.name)).filter(a=>(i==null?void 0:i.length)===0||i.includes(a.name)).filter(a=>(n==null?void 0:n.length)===0||!n.includes(a.name)).forEach(a=>e&&e.setAttribute(a.name,a.value));function r(a){a.filter(l=>l.type==="attributes").filter(l=>!l.attributeName.match(/^on[a-z]+/)).filter(l=>!s.includes(l.attributeName)).filter(l=>(i==null?void 0:i.length)&&i.includes(l.attributeName)).filter(l=>(n==null?void 0:n.length)&&!n.includes(l.attributeName)).forEach(l=>{let c=l.attributeName,f=l.target.getAttribute(c);e.setAttribute(c,f)})}new MutationObserver(r).observe(t,{attributes:!0})}function Ci(t,e){return function(n,i){n=n||t,i=i||e,customElements.get(n)||customElements.define(n,i)}}var Ce=`x-input[type=checkbox] {
  --x-checkbox-size: 20px;
  --x-checkbox-border: #333;
  --x-checkbox-fill: #FFF;
  --x-checkbox-icon: '\\2714';
  --x-checkbox-color: inherit;
  --x-checkbox-radius: 4px;
  display: inline-block;
}
x-input[type=checkbox] > input {
  outline: none;
  position: relative;
  width: 1px;
  height: 1px;
  display: block;
  margin: 0;
  margin-right: var(--x-checkbox-size);
  margin-bottom: var(--x-checkbox-size);
}

x-input[type=checkbox] > input::before  {
  display: flex;
  box-sizing: border-box;
  content: '';
  position: absolute;
  width: var(--x-checkbox-size);
  height: var(--x-checkbox-size);
  background-color: #FFF;
  border-radius: var(--x-checkbox-radius);
  border: 1px solid var(--x-checkbox-border);
  color: var(--x-checkbox-color);
  align-items: center;
  justify-content: center;
}

x-input[type=checkbox] > input:hover::before,
x-input[type=checkbox] > input:focus::before  {
  outline: none;
  box-shadow: white 0 0 0 2px, #ff821f 0 0 0 4px;
}

x-input[type=checkbox] > input:disabled {
  opacity: 0.5;
  background: #CCC;
}

x-input[type=checkbox] > input:checked::before {
  content: var(--x-checkbox-icon);
  background-color: var(--x-checkbox-fill, #FFF);
}

x-input[type=checkbox].filled > input:checked::before {
  border: none;
  background: var(--x-checkbox-fill);
  color: #FFF;
}

x-input[type=checkbox].filled > input:checked.disabled::before {
  border: 1px solid #CCC;
  background: #CCC;
  color: #FFF;
}`,Ti=class{static init(){let t=["fill","icon","border","size","color","radius"];return Ce&&B(this,Ce),j(this,"<input />").then(e=>{let n=this.querySelector("input");if(I(this,n,t),this.getAttribute("fill")&&(this.classList.add("filled"),n.style.setProperty("--x-checkbox-fill",this.getAttribute("fill"))),this.getAttribute("icon")){let i=this.getAttribute("icon").charCodeAt(0).toString(16);n.style.setProperty("--x-checkbox-icon",`'\\${i}'`)}this.getAttribute("size")&&n.style.setProperty("--x-checkbox-size",this.getAttribute("size")),this.getAttribute("border")&&n.style.setProperty("--x-checkbox-border",this.getAttribute("border")),this.getAttribute("color")&&n.style.setProperty("--x-checkbox-color",this.getAttribute("color")),this.getAttribute("radius")&&n.style.setProperty("--x-checkbox-radius",this.getAttribute("radius"))})}},Te=`x-input[type=radio] > input {
  --x-radio-size: 20px;
  --x-radio-border: #333;
  --x-radio-fill: red;
  --x-radio-icon: '\\25CF';
  --x-radio-color: inherit;
  width: 0;
  height: 0;
  margin: 0 var(--x-radio-size) var(--x-radio-size) 0;
  box-sizing: border-box;
  position: relative;
  vertical-align: middle;
}

x-input[type=radio] > input::after {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  content: ' ';
  width: var(--x-radio-size);
  height: var(--x-radio-size);
  border-radius: 50%;
  background: white;
  display: flex;
  border: 1px solid var(--x-radio-border);
  align-items: center;
  justify-content: center;
}
x-input[type=radio] > input:hover::after,
x-input[type=radio] > input:focus::after  {
  outline: none;
  box-shadow: white 0 0 0 2px, #ff821f 0 0 0 4px;
}


x-input[type=radio] > input:checked::after {
  content: var(--x-radio-icon);
}

x-input[type=radio] > input:disabled::after {
  opacity: .5;
  background: #ccc;
  pointer-events: none;
}

x-input.filled[type=radio] > input:checked::after {
  border: none;
  background: var(--x-radio-fill);
  color: #FFF;
}`,Si=class{static init(){let t=["fill","icon","border","size","color","radius"];return Te&&B(this,Te),j(this,"<input />").then(e=>{let n=this.querySelector("input");if(I(this,n,t),this.getAttribute("fill")&&(this.classList.add("filled"),n.style.setProperty("--x-radio-fill",this.getAttribute("fill"))),this.getAttribute("icon")){let i=this.getAttribute("icon").charCodeAt(0).toString(16);n.style.setProperty("--x-radio-icon",`'\\${i}'`)}this.getAttribute("size")&&n.style.setProperty("--x-radio-size",this.getAttribute("size")),this.getAttribute("border")&&n.style.setProperty("--x-radio-border",this.getAttribute("border")),this.getAttribute("color")&&n.style.setProperty("--x-radio-color",this.getAttribute("color"))})}},Li=`x-input[type=date] {
  position: relative;
  display: inline-block;
}`,ki=class{static init(){let n=`${this.getAttribute("text-field")!==null?'<x-input type="text"></x-input>':"<input />"}<x-overlay><x-calendar></x-calendar></x-overlay>`,i="type,locale,date,week-format,min-date,max-date,first-day-of-week,target".split(",");return B(this,Li),j(this,n,100).then(s=>{let r=this.querySelector("input, x-input");I(this,r,i);let o=this.querySelector("x-calendar");r.value&&o.setAttribute("date",r.value),I(this,o,[],i)})}},Mi=`x-input[type=time] {
  position: relative;
  display: inline-block;
}`,$i=class{static init(){let n=`${this.getAttribute("text-field")!==null?'<x-input type="text"></x-input>':"<input />"}<x-overlay><x-clock></x-clock></x-overlay>`,i="type".split(",");return B(this,Mi),j(this,n).then(s=>{let r=this.querySelector("input");I(this,r,i);let o=this.querySelector("x-clock");if(I(this,o,[],i),o&&(r==null?void 0:r.value.match(/[0-9]+:/))){let[a,l,c]=r.value.split(":");(o==null?void 0:o._time)&&(o._time.setHours(a),o._time.setMinutes(l),o._updateHourHand(o._time,!0,!1))}})}},qi=`x-input[type=color] {
  position: relative;
  display: inline-block;
}`,Hi=class{static init(){let n=`${this.getAttribute("text-field")!==null?'<x-input type="text"></x-input>':"<input />"}<x-overlay><x-color-picker></x-color-picker></x-overlay>`,i="type,hour,minute,run".split(",");return B(this,qi),j(this,n).then(s=>{let r=this.querySelector("input");I(this,r,i);let o=this.querySelector("x-color-picker");I(this,o,[],i)})}},Di=`<div class="x-file-input">
  <input />
  <div class="x-slot"><slot></slot></div>
</div>
<div class="x-file-list"></div>`,Pi=`x-input[type=file]  .x-file-input {
  display: block;
  cursor: grab;
  background: #F5F5F5;
  padding: 16px;
  border: 1px solid #F5F5F5;
  box-sizing: border-box;
}
x-input[type=file]  .x-file-input:hover {
  background: #FFF;
  border: 1px solid #CCC;
}
x-input[type=file]  .x-file {
  display: flex;
  border-top: 1px solid #ccc;
  padding: 8px;
  position: relative;
  justify-content: space-between;
}
x-input[type=file]  .x-file:last-child {
  border-bottom: 1px solid #ccc;
}
x-input[type=file]  .x-file .x-name {
  width: 40%;
}
x-input[type=file]  .x-file .x-preview {
  max-width: 200px;
  max-height: 40px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
x-input[type=file]  .x-file .x-buttons * {
  border: 0;
  background: transparent;
  cursor: pointer;
}

x-input[type=file]  .x-file .x-buttons .x-upload {
  font-size: 1.1em;
  display: none;
}
x-input[type=file]  .x-file .x-progress {
  display: none;
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  transition: width .3s;
  background: red;
}
x-input[type=file].x-with-upload .x-buttons .x-upload {
  display: initial;
}
x-input[type=file].x-with-upload .x-progress {
  display: initial;
}`,R=class{static init(){let t="upload-fn".split(",");return B(this,Pi),j(this,Di).then(e=>{let n=this.querySelector("input");I(this,n,t),this._files=[],this._showList=!0,this._uploadFn=this.getAttribute("upload-fn"),this._onAddFile=R._onAddFile.bind(this),this._setDragover=R._setDragover.bind(this),this._showFile=R._showFile.bind(this),this._deleteFile=R._deleteFile.bind(this),this._changeFiles=R._changeFiles.bind(this),this._readURL=R._readURL.bind(this),this._formatSize=R._formatSize.bind(this),this._upload=R._upload.bind(this),this.addEventListener("dragover",i=>this._setDragover(i,!0)),this.addEventListener("dragleave",i=>this._setDragover(i,!1)),this.addEventListener("drop",i=>this._onAddFile(i)),this.addEventListener("paste",i=>this._onAddFile(i)),this.querySelector('input[type="file"]').addEventListener("change",i=>{this._changeFiles(i)})})}static _onAddFile(t){this._setDragover(t,!1),this._changeFiles(t)}static _setDragover(t,e){t.preventDefault(),t.stopPropagation();let n=e?"add":"remove";this.classList[n]("x-dragover")}static _showFile(t){if(!this._showList)return;let e=document.createElement("div");e.classList.add("x-file");let n=t.type.startsWith("image")?`<img class="x-preview" src="${t.dataURL}" />`:`<span>${t.type}</span>`;e.insertAdjacentHTML("beforeend",`<div class="x-name">${t.name}</div><div class="x-preview">${n}(${this._formatSize(t.size)})</div><div class="x-buttons"><button class="x-delete">\u{1F5D1}</button><button class="x-upload">\u21E7</button></div><div class="x-progress"></div>`),e.querySelector(".x-delete").addEventListener("click",i=>{this._deleteFile(i,t)}),e.querySelector(".x-upload").addEventListener("click",i=>this._upload(t)),this._uploadFn&&this.classList.add("x-with-upload"),this.querySelector(".x-file-list").appendChild(e)}static _deleteFile(t,e){let n=this._files.indexOf(e);this._files.splice(n,1),t.target.closest(".x-file").remove();let i=new CustomEvent("x-select",{bubbles:!0,detail:this.files});this.dispatchEvent(i)}static _changeFiles(t){let e=[...(t.dataTransfer||t.clipboardData||t.target).files];if(e.length>0){e.forEach(i=>{this._readURL(i).then(s=>{i.dataURL=s,this._showFile(i)})});let n=new CustomEvent("x-select",{bubbles:!0,detail:e});this.dispatchEvent(n),this._files=this._files.concat(e)}}static _readURL(t){return new Promise((e,n)=>{let i=new FileReader;i.onload=s=>e(s.target.result),i.onerror=s=>n(s),i.readAsDataURL(t)})}static _formatSize(t,e=2){let n=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],i=Math.floor(Math.log(t)/Math.log(1e3));return parseFloat((t/Math.pow(1e3,i)).toFixed(e))+" "+n[i]}static _upload(t){let n=(this._uploadFn&&new Function(`return ${this._uploadFn};`)())(t);n instanceof XMLHttpRequest&&(n.addEventListener("progress",i=>{let s=Math.round(100*i.loaded/t.size)+"%";this.querySelector(".x-progress").style.width=s,this.dispatchEvent(new CustomEvent("x-progress",{detail:i,bubbles:!0}))}),n.addEventListener("load",i=>{this.querySelector(".x-progress").style.width="100%",this.dispatchEvent(new CustomEvent("x-load",{detail:i,bubbles:!0}))}),n.addEventListener("error",i=>{this.dispatcohEvent(new CustomEvent("x-error",{detail:i,bubbles:!0}))}))}},Se=`x-input[type=switch] {
  --x-switch-color: red;
}

x-input[type=switch] {
  display: inline-block;
  box-sizing: border-box;
  border-radius: 100px;
  margin-right: .25em;
  white-space: nowrap;
  position: relative;
  padding: 2px;
}

x-input[type=switch][aria-checked='true'] {
  background:  var(--x-switch-color);
  color: #FFF;
  border: 2px solid var(--x-switch-color);
  padding-left: 8px;
}

x-input[type=switch][aria-checked='false'] {
  background: #FFF;
  color: var(--x-switch-color);
  border: 2px solid var(--x-switch-color);
  padding-right: 8px;
}

x-input[type=switch] > .x-on, 
x-input[type=switch] > .x-off { 
  visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
x-input[type=switch] > .x-on  { margin-top: 0; }
x-input[type=switch] > .x-off { margin-top: calc(-1em + -2px); }

x-input[type=switch] > * > .x-ball { 
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: var(--x-switch-color);
}
x-input[type=switch] > * > .x-text { 
  flex: 1;
}

x-input[type=switch][aria-checked='true'] > .x-on  > .x-ball {
  background-color: #FFF;
}
x-input[type=switch][aria-checked='true'] > .x-off  > .x-ball {
  background-color: var(--x-switch-color);
}

x-input[type=switch][aria-checked='true'] > .x-on {
  visibility: visible;
}
x-input[type=switch][aria-checked='false'] > .x-off {
  visibility: visible;
}

x-input[type=switch][aria-checked][disabled] {
  background: #CCC;
  color: #FFF;
  border: 2px solid #CCC;
  pointer-events: none;
}
x-input[type=switch][aria-checked="false"][disabled] > * > .x-ball {
  background: #FFF;
}
`,Ni=`<input type="hidden" />
<div class="x-on">
  <b class="x-text"></b>&nbsp;
  <b class="x-ball"></b>
</div>
<div class="x-off">
  <b class="x-ball"></b>&nbsp;
  <b class="x-text"></b>
</div>`,Xi=class{static init(){let t=["type","on","off","color","status","disabled","role","tabindex"];return Se&&B(this,Se),j(this,Ni).then(e=>{let n=this.querySelector("input");I(this,n,t);let i=this.getAttribute("on")||" ",s=this.getAttribute("off")||" ";this.querySelector(".x-on .x-text").innerText=i,this.querySelector(".x-off .x-text").innerText=s,this.getAttribute("color")&&this.style.setProperty("--x-switch-color",this.getAttribute("color")),this.addEventListener("click",a=>{let l=this.getAttribute("aria-checked")==="true";this.setAttribute("aria-checked",!l),n.value=l?i:s}),this.addEventListener("keydown",a=>{a.keyCode===13&&this.click()});let r=["true",""].includes(this.getAttribute("disabled")),o=this.getAttribute("status")||"off";this.setAttribute("tabindex",r?-1:0),this.setAttribute("role","switch"),this.setAttribute("aria-checked",o==="on")})}},Le=`x-input[type="text"]  {
  position:  relative;
  display:  inline-block;
  padding:  1em 8px 0 4px;
  border-bottom:  1px  solid#CCC;
  background: #F8F8F8;
}
x-input[type="text"][disabled]  {
  pointer-events: none; 
  opacity: .5;
}
x-input[type="text"]:not([label])  {
  padding-top: 6px;
}

x-input[type="text"] .label  {
  position:  absolute;
  pointer-events: none; 
  box-sizing: border-box;
  cursor:  text;
  user-select:  none;
  top: 16px;
  left: 4px;
  background: #FFF;
  width: 100%;
  z-index: 1;
  color: #888;
  background: transparent;
}
x-input[type="text"] .label:empty + input  {
  opacity: 1;
}

x-input[type="text"]:not(.empty)  .label,  
x-input[type="text"].x-focused .label  {
  transition:  0.2s  ease  all;
  top: 2px;
  font-size: 12px;
}

x-input[type="text"] input  {
  width: 100%;
  outline:  none;
  border:  none;
  padding:  0  0  6px  0;
  height: 26px;
  opacity: 0;
  background: transparent;
}

x-input[type="text"]:not(.empty):not(.x-focused) input,
x-input[type="text"].x-focused .input,
x-input[type="text"].x-focused input  {
  opacity: 1;
  transition: opacity .35s ease-in-out;
}

x-input[type="text"] .ink-bar  {  /*  hidden  2px  line  */
  position:  absolute;
  bottom:  0;
  left:  calc(50% - 5px);
  height:  2px;
  width:  10px;
  visibility:  hidden;
  background-color:#8e44ad;
}

x-input[type="text"].x-focused .ink-bar  {  /*  2px  100%  line  */
  left: 0;
  width:  100%;
  visibility:  visible;
  transition:  0.2s  ease  all;
}
`,Oi=`<span class="label"></span>
<input />
<div class="ink-bar"></div>`,Ii=class{static init(){let t=["type","label"];return Le&&B(this,Le),j(this,Oi).then(e=>{let n=this.querySelector("input");I(this,n,t),this.querySelector(".label").innerText=this.getAttribute("label")||"",n.value===""?this.classList.add("empty"):this.classList.remove("empty"),n.addEventListener("focus",i=>{this.classList.add("x-focused"),n.value===""?this.classList.add("empty"):this.classList.remove("empty")}),n.addEventListener("blur",i=>this.classList.remove("x-focused")),n.addEventListener("input",i=>{n.value===""?this.classList.add("empty"):this.classList.remove("empty")})})}},zi=`<div class="x-mask"></div>
<div class="x-face"></div>
<input class="x-input" />`,ke=`x-input[type=mask] {
  display: inline-block;
  position: relative;
  box-sizing: border-box;
}

x-input[type=mask] .x-input {
  font-family: monospace;
  height: 32px;
  width: 200px;
  background: transparent;
  padding: 0 4px;
  box-sizing: border-box;
  border: 1px solid #999;
  font-size: 14px;
}

x-input[type=mask] .x-face,
x-input[type=mask] .x-mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* z-index: -1; */
  pointer-events: none;
  font-family: monospace;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  white-space: pre;
  border: 1px solid transparent;
  opacity: .3;

  font-size: 13.33333px;
  padding-left: 2px;
  border-width: 1px;
}
x-input[type=mask][hide-input] .x-input {
  color: transparent;
  caret-color: #333;
}
x-input[type=mask][hide-input] .x-face {
  opacity: 1;
}
x-input[type=mask]:not([hide-input]) .x-face {
  display: none;
}
`,Me={y:"[0-9]",m:"[0-9]",d:"[0-9]",Y:"[0-9]",M:"[0-9]",D:"[0-9]",9:"[0-9]","#":"[0-9]",x:"[a-zA-Z]",X:"[a-zA-Z]",_:"[0-9]"},Q=class{static init(){let t=["mask","hide-input"];return ke&&B(this,ke),j(this,zi).then(e=>{this.inputEl=this.querySelector(".x-input"),this.maskEl=this.querySelector(".x-mask"),this.faceEl=this.querySelector(".x-face"),this.hideInput=this.getAttribute("hide-input")!==null,this.maskStr=this.getAttribute("mask"),!this.maskStr&&(this.innerHTML="mask attribute is required."),this.maskEl.innerText=this.maskStr,I(this,this.inputEl,t),Q._syncStyle(this.inputEl,this.maskEl,this.faceEl),this.inputEl.addEventListener("focus",Q._handleInitial.bind(this)),this.inputEl.addEventListener("keydown",Q._handleKeyDown.bind(this)),this.inputEl.addEventListener("input",Q._handleInput.bind(this))})}static _syncStyle(t,e,n){let i=getComputedStyle(t);e.style.fontSize=n.style.fontSize=i.fontSize,e.style.paddingLeft=n.style.paddingLeft=i.paddingLeft,e.style.borderWidth=n.style.borderWidth=i.borderWidth}static _handleInput(){this.maskEl.innerText=" ".repeat(this.inputEl.value.length)+this.maskStr.substring(this.inputEl.value.length),this.hideInput&&(this.faceEl.innerText=this.inputEl.value.replace(/[a-z0-9_#]/g,"\u25CF"),this.faceEl.innerText=this.inputEl.value.slice(0,-1).replace(/[a-z0-9_#]/g,"\u25CF")+this.inputEl.value.substring(this.inputEl.value.length-1),setTimeout(t=>{this.faceEl.innerText=this.inputEl.value.replace(/[a-z0-9_#]/g,"\u25CF")},1e3))}static _handleInitial(){this.inputEl.value===""&&this.maskStr.match(/^[^a-z0-9_#]/i)&&(this.inputEl.value=this.maskStr.match(/^[^a-z0-9_#]/i)[0],this.maskEl.innerText=" ".repeat(this.inputEl.value.length)+this.maskStr.substring(this.inputEl.value.length))}static _handleKeyDown(t,e=!1){let n=t.key,i=this.maskStr.split(""),s=i[this.inputEl.value.length],r=n.match(/^\S$/);r&&!s?t.preventDefault():r&&(!Q._isInputAcceptable(n,s)&&t.preventDefault(),Q._addNextMask(this.inputEl,i))}static _addNextMask(t,e){setTimeout(function(){let n=t.value.length;for(let i=n;i<e.length;i++){let s=e[i];if(!(s&&!Me[s]))break;t.value+=s}})}static _isInputAcceptable(t,e){let n=Me[e];if(n){let i=`^${n}$`,s=new RegExp(n);return!!t.match(s)}}},ji={checkbox:Ti,radio:Si,date:ki,time:$i,color:Hi,file:R,switch:Xi,text:Ii,mask:Q},Lt=class extends HTMLElement{get checked(){var t;return(t=this.querySelector("input"))==null?void 0:t.checked}get readOnly(){var t;return(t=this.querySelector("input"))==null?void 0:t.readOnly}get value(){var t;return(t=this.querySelector("input"))==null?void 0:t.value}get disabled(){var t;return(t=this.querySelector("input"))==null?void 0:t.disabled}get validity(){var t;return(t=this.querySelector("input"))==null?void 0:t.validity}get validationMessage(){var t;return(t=this.querySelector("input"))==null?void 0:t.validationMessage}set value(t){this._setProp("value",t)}set checked(t){this._setProp("checked",t)}set readOnly(t){this._setProp("readOnly",t)}set disabled(t){this._setProp("disabled",t)}_setProp(t,e){t==="disabled"&&(e?this.setAttribute("disabled",""):this.removeAttribute("disabled")),this.querySelector("input")?this.querySelector("input")[t]=e:setTimeout(n=>this.querySelector("input")[t]=e,500)}connectedCallback(){setTimeout(t=>{let e=this.getAttribute("type")?this.getAttribute("type"):this.getAttribute("mask")?"mask":"text";!this.getAttribute("type")&&this.setAttribute("type",e),ji[e].init.bind(this)().then(n=>{let i=["color","date","time"].includes(e),s=this.getAttribute("text-field")!==null;if(i&&s){let r=this.querySelector("x-input");r&&I(this,r,["type"]),this.getAttribute("label")&&this.querySelector('x-input[type="text"]').setAttribute("label",this.getAttribute("label"))}})})}disconnectedCallback(){_i(this)}};Lt.define=Ci("x-input",Lt);function Bi(t,e,n=0){return new Promise(function(i,s){e?setTimeout(function(){if(e.indexOf("</slot>")){let o=e.replace("<slot></slot>",t.innerHTML);t.innerHTML=o}else t.innerHTML=e;Wi(t),i(!0)},n):i(!1)})}function Ri(t,e){let n=t.tagName.toLowerCase(),i=n==="x-input"&&t.getAttribute("type"),s=i?`-${i}`:"",r=`${n}${s}`;if(document.querySelector(`style[${r}]`)){let o=document.querySelector(`style[${r}]`);o.createdAt=new Date().getTime()}else{let o=document.createElement("style");return o.setAttribute(r,""),o.appendChild(document.createTextNode(e)),document.head.appendChild(o),o.createdAt=new Date().getTime(),o}}function Ui(t){let e=t.tagName.toLowerCase(),n=e==="x-input"&&t.getAttribute("type"),i=n?`-${n}`:"",s=`${e}${i}`,r=document.body.querySelectorAll(`${s}`).length;if(document.querySelector(`style[${s}]`)&&r<1){let a=document.querySelector(`style[${s}]`);new Date().getTime()>a.createdAt+500&&a.remove()}}function Wi(t){t.querySelectorAll("script").forEach(e=>{let n=document.createElement("script");Array.from(e.attributes).forEach(i=>n.setAttribute(i.name,i.value)),n.appendChild(document.createTextNode(e.innerText));try{t.replaceChild(n,e)}catch{t.appendChild(n)}})}function $e(t){if(Number.isInteger(t))return new Promise(function(e){setTimeout(n=>e(),t)});if(typeof t=="string"){let e=0;return new Promise(function(n,i){function s(){if(e>3e3&&i(),window[t])return n(window[t]);setTimeout(s,100),e+=100}s()})}else if(typeof t=="function"){let e=0;return new Promise(function(n,i){function s(){if(e>3e3&&i(),t())return n(t());setTimeout(s,100),e+=100}s()})}}function qe(t,e){return function(n,i){n=n||t,i=i||e,customElements.get(n)||customElements.define(n,i)}}var Yi=`x-openlayers {
  display: block;
  height: 200px;
}
x-openlayers > .map {
  display: block;
  height: 100%;
  width: 100%;
}

x-openlayers .ol-popup {
  position: absolute;
  background-color: white;
  box-shadow: 0 1px 4px rgba(0,0,0,0.2);
  padding: 15px;
  border-radius: 10px;
  border: 1px solid #cccccc;
  bottom: 12px;
  left: -50px;
  min-width: 280px;
}
x-openlayers .ol-popup:after, .ol-popup:before {
  top: 100%;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
}
x-openlayers .ol-popup:after {
  border-top-color: white;
  border-width: 10px;
  left: 48px;
  margin-left: -10px;
}
x-openlayers .ol-popup:before {
  border-top-color: #cccccc;
  border-width: 11px;
  left: 48px;
  margin-left: -11px;
}
x-openlayers .ol-popup-closer {
  text-decoration: none;
  position: absolute;
  top: 2px;
  right: 8px;
}
x-openlayers .ol-popup-closer:after {
  content: "\u2716";
}`,Vi=`<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.9.0/css/ol.css" type="text/css">
<script src="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.9.0/build/ol.js"><\/script>
<div class="map"></div>
<slot></slot>`;function He(t){return new Promise(e=>{if(typeof t=="string"&&t.match(/[-0-9.]+,\s?[-0-9.]+/)){let n=t.split(",").map(i=>+i.trim());e(n)}else if(typeof t=="string"){let n=`https://nominatim.openstreetmap.org/search?q=${t}&format=json`;window.fetch(n).then(i=>i.json()).then(i=>{let s=i[0]?[i[0].lon,i[0].lat]:[0,0];e(s)})}})}var Gi=`
<svg display="block" height="41px" width="27px" viewBox="0 0 27 41">
  <g fill-rule="nonzero">
    <g transform="translate(3.0, 29.0)" fill="#000000">
			<ellipse opacity="0.04" cx="10.5" cy="5.80029008" rx="10.5" ry="5.25002273"></ellipse>
			<ellipse opacity="0.04" cx="10.5" cy="5.80029008" rx="10.5" ry="5.25002273"></ellipse>
			<ellipse opacity="0.04" cx="10.5" cy="5.80029008" rx="9.5" ry="4.77275007"></ellipse>
			<ellipse opacity="0.04" cx="10.5" cy="5.80029008" rx="8.5" ry="4.29549936"></ellipse>
			<ellipse opacity="0.04" cx="10.5" cy="5.80029008" rx="7.5" ry="3.81822308"></ellipse>
			<ellipse opacity="0.04" cx="10.5" cy="5.80029008" rx="6.5" ry="3.34094679"></ellipse>
			<ellipse opacity="0.04" cx="10.5" cy="5.80029008" rx="5.5" ry="2.86367051"></ellipse>
			<ellipse opacity="0.04" cx="10.5" cy="5.80029008" rx="4.5" ry="2.38636864"></ellipse>
		</g>
		<g fill="#3FB1CE">
			<path d="M27,13.5 C27,19.074644 20.250001,27.000002 14.75,34.500002 C14.016665,35.500004 12.983335,35.500004 12.25,34.500002 C6.7499993,27.000002 0,19.222562 0,13.5 C0,6.0441559 6.0441559,0 13.5,0 C20.955844,0 27,6.0441559 27,13.5 Z"></path>
		</g>
		<g opacity="0.25" fill="#000000">
			<path d="M13.5,0 C6.0441559,0 0,6.0441559 0,13.5 C0,19.222562 6.7499993,27 12.25,34.5 C13,35.522727 14.016664,35.500004 14.75,34.5 C20.250001,27 27,19.074644 27,13.5 C27,6.0441559 20.955844,0 13.5,0 Z M13.5,1 C20.415404,1 26,6.584596 26,13.5 C26,15.898657 24.495584,19.181431 22.220703,22.738281 C19.945823,26.295132 16.705119,30.142167 13.943359,33.908203 C13.743445,34.180814 13.612715,34.322738 13.5,34.441406 C13.387285,34.322738 13.256555,34.180814 13.056641,33.908203 C10.284481,30.127985 7.4148684,26.314159 5.015625,22.773438 C2.6163816,19.232715 1,15.953538 1,13.5 C1,6.584596 6.584596,1 13.5,1 Z"></path>
		</g>
		<g transform="translate(6.0, 7.0)" fill="#FFFFFF"></g>
		<g transform="translate(8.0, 8.0)">
			<circle fill="#000000" opacity="0.25" cx="5.5" cy="5.5" r="5.4999962"></circle>
			<circle fill="#FFFFFF" cx="5.5" cy="5.5" r="5.4999962"></circle>
		</g>
	</g>
</svg>`,kt=class extends HTMLElement{static get observedAttributes(){return["position"]}attributeChangedCallback(t,e,n){!this.marker||t==="position"&&this.setMarker(n)}connectedCallback(){if(this.map,this.marker,this.center=this.getAttribute("center")!==null,this.style.display="none",this.closest("x-openlayers")&&this.getAttribute("position")){this._init();return}}_init(){let t=this.closest("x-openlayers");this.image=this.getAttribute("src"),t.waitForMap().then(e=>(this.map=e,this.setMarker(this.getAttribute("position")))).then(e=>{this.popup=this.getPopup(this.map),this.popup&&this.map.addOverlay(this.popup)})}setMarker(t){return this.marker&&this.map.removeLayer(this.marker),He(t).then(e=>(this.marker=this.getMarker(e,this.image),this.map.addLayer(this.marker),this.center&&this.map.getView().setCenter(window.ol.proj.fromLonLat(e)),this.marker))}getMarker(t,e=null){e=e||this._svgToBase64(Gi);let n=new window.ol.Feature({geometry:new window.ol.geom.Point(window.ol.proj.fromLonLat(t)),name:"Somewhere"});return new window.ol.layer.Vector({source:new window.ol.source.Vector({features:[n]}),style:new window.ol.style.Style({image:new window.ol.style.Icon({anchor:[.5,46],anchorXUnits:"fraction",anchorYUnits:"pixels",src:e})})})}getPopup(t){if(!this.innerHTML)return null;let e=document.createElement("div");e.classList.add("ol-popup");let n=document.createElement("a");n.classList.add("ol-popup-closer");let i=document.createElement("div");e.append(n,i);var s=new window.ol.Overlay({element:e,autoPan:!0,autoPanAnimation:{duration:250}});return n.addEventListener("click",r=>(s.setPosition(void 0),n.blur(),!1)),t.on("singleclick",r=>{t.hasFeatureAtPixel(r.pixel)===!0?(i.innerHTML=this.innerHTML,s.setPosition(r.coordinate)):(s.setPosition(void 0),n.blur())}),s}_svgToBase64(t){return"data:image/svg+xml,"+t.replace("<svg>",'<svg xmlns="http://www.w3.org/2000/svg">').replace("<svg ",'<svg xmlns="http://www.w3.org/2000/svg" ').replace('xmlns="http://www.w3.org/2000/svg" '.repeat(2),'xmlns="http://www.w3.org/2000/svg" ').replace(/>\s+</g,"><").replace(/\s+/g," ").replace(/"/g,"'").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/#/g,"%23").replace(/\n/g,"")}};kt.define=qe("x-ol-marker",kt);var Mt=class extends HTMLElement{constructor(...t){let e=super(...t);return this.zoom,this.center,e}static get observedAttributes(){return["center","zoom"]}disconnectedCallback(){Ui(this)}attributeChangedCallback(t,e,n){t==="center"&&this.setCenter(n),t==="zoom"&&this.setZoom(n)}connectedCallback(){Ri(this,Yi),setTimeout(t=>{this.zoom=+this.getAttribute("zoom")||13,this.center=this.getAttribute("center"),this.satellite=this.getAttribute("satellite")!==null,Bi(this,Vi).then(e=>$e(n=>this.querySelector(".map").offsetWidth>0)).then(e=>$e("ol")).then(e=>{this.map=new window.ol.Map({target:this.querySelector(".map")}),this.map.addLayer(new window.ol.layer.Group({layers:this.getLayers()})),this.center&&this.setCenter(this.center),this.setZoom(this.zoom),this.map.addControl(this.getCustomControl(e)),setTimeout(n=>this.map.updateSize(),100)})})}getCustomControl(t){class e extends window.ol.control.Control{constructor(i={}){let s=document.createElement("button");s.setAttribute("title","Switch Map"),s.innerHTML="\u{1F6F0}";let r=document.createElement("div");r.className="ol-rotate ol-unselectable ol-control",r.appendChild(s);super({element:r,target:i.target});this.layerNo=1,s.addEventListener("click",this.handleRotateNorth.bind(this),!1)}handleRotateNorth(){let i=this.getMap().getLayerGroup().getLayersArray().filter(s=>s instanceof window.ol.layer.Tile);this.layerNo=(this.layerNo+1)%i.length,i.forEach((s,r)=>{s.setVisible(r===this.layerNo)})}}return new e}getLayers(){let t=[new window.ol.layer.Tile({source:new window.ol.source.XYZ({url:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",maxZoom:19})}),new window.ol.layer.Tile({source:new window.ol.source.OSM})];return this.satellite?t.reverse():t}setZoom(t){!this.map||this.map.getView().setZoom(t?+t:15)}setCenter(t){!this.map||He(t).then(e=>this.map.getView().setCenter(window.ol.proj.fromLonLat(e)))}waitForMap(){let[t,e]=[this,0];return new Promise((n,i)=>{function s(){t.map?n(t.map):e+=100,e>3e3?i():setTimeout(s,100)}setTimeout(s,100)})}};Mt.define=qe("x-openlayers",Mt);var Ki=`<div class="x-arrow up">
  <i class="x-icon"></i>
</div>
<div class="x-overlay"><slot></slot></div>
<div class="x-arrow down">
  <i class="x-icon"></i>
</div>`,Zi=`x-overlay {
  position: absolute;
  z-index: 999;
  display: none;
}

x-overlay .x-overlay {
  display: block;
  background: #FFF;
  border: 1px solid #ccc;
  padding: 8px;
  box-shadow: 4px 4px 8px #ccc;
}

x-overlay .x-arrow .x-icon {
  position: relative;
  width: 0;
  height: 0;
  display: block;
  z-index: 1;
  transform: translateX(-50%);
}
x-overlay .x-arrow .x-icon::after {
  content: '';
  width: 0;
  height: 0;
  position: absolute;
  left: -11px;
}

x-overlay .x-arrow.up .x-icon {
  top: 1px;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  border-bottom: 12px solid #CCC;
}
x-overlay .x-arrow.up .x-icon::after {
  border-left: 11px solid transparent;
  border-right: 11px solid transparent;
  border-bottom: 11px solid #FFF;
  top: 2px;
}

x-overlay .x-arrow.down .x-icon {
  bottom: 1px;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  border-top: 12px solid #CCC;
}
x-overlay .x-arrow.down .x-icon::after {
  border-left: 11px solid transparent;
  border-right: 11px solid transparent;
  border-top: 11px solid #FFF;
  bottom: 2px;
}`;function Ji(t){t.setAttribute("tabindex",t.getAttribute("tabindex")||"-1");let e=Array.from(t.querySelectorAll('a[href], button, textarea, input[type="text"],input[type="radio"], input[type="checkbox"], select, [tabindex]')).filter(s=>{let r=s.getAttribute("tabindex")||"0";return!s.disabled&&r!=="-1"});e.forEach(s=>{s.addEventListener("focus",r=>{t._overlayClicked=!0,setTimeout(o=>t._overlayClicked=!1,100)})});let n=e[0],i=e[e.length-1];t.addEventListener("keydown",function(s){s.keyCode===9&&(s.shiftKey?document.activeElement===n&&(i.focus(),s.preventDefault()):document.activeElement===i&&(n.focus(),s.preventDefault()))})}function Qi(t,e,n){e.querySelectorAll(".x-arrow").forEach(l=>l.style.display="none");let i=t.getBoundingClientRect().bottom,s=window.innerHeight<i+e.offsetHeight;if(n){let l=s?"down":"up";e.querySelector(`.x-arrow.${l}`).style.display="block"}let r=n?t.offsetLeft+t.offsetWidth/2-e.offsetWidth/2:t.offsetLeft,o=s?t.offsetTop-e.offsetHeight:t.offsetTop+t.offsetHeight;e.style.left=`${r}px`,e.style.top=`${o}px`,e.style.minWidth=t.offsetWidth+"px";let a=e.getBoundingClientRect().right;if(a>window.innerWidth){let l=window.innerWidth-a.offsetWidth-24;a.style.left=`${l}px`}if(n){let l=s?"down":"up",c=e.querySelector(`.x-arrow.${l} .x-icon`);c.style.left=t.offsetLeft-e.offsetLeft+t.offsetWidth/2+"px"}}function ts(t,e,n=0){return new Promise(function(i,s){e?setTimeout(function(){if(e.indexOf("</slot>")){let o=e.replace("<slot></slot>",t.innerHTML);t.innerHTML=o}else t.innerHTML=e;is(t),i(!0)},n):i(!1)})}function es(t,e){let n=t.tagName.toLowerCase(),i=n==="x-input"&&t.getAttribute("type"),s=i?`-${i}`:"",r=`${n}${s}`;if(document.querySelector(`style[${r}]`)){let o=document.querySelector(`style[${r}]`);o.createdAt=new Date().getTime()}else{let o=document.createElement("style");return o.setAttribute(r,""),o.appendChild(document.createTextNode(e)),document.head.appendChild(o),o.createdAt=new Date().getTime(),o}}function ns(t){let e=t.tagName.toLowerCase(),n=e==="x-input"&&t.getAttribute("type"),i=n?`-${n}`:"",s=`${e}${i}`,r=document.body.querySelectorAll(`${s}`).length;if(document.querySelector(`style[${s}]`)&&r<1){let a=document.querySelector(`style[${s}]`);new Date().getTime()>a.createdAt+500&&a.remove()}}function is(t){t.querySelectorAll("script").forEach(e=>{let n=document.createElement("script");Array.from(e.attributes).forEach(i=>n.setAttribute(i.name,i.value)),n.appendChild(document.createTextNode(e.innerText));try{t.replaceChild(n,e)}catch{t.appendChild(n)}})}function ss(t,e){return function(n,i){n=n||t,i=i||e,customElements.get(n)||customElements.define(n,i)}}var rs=`x-${parseInt(""+Math.random()*1e4)}`,$t=class extends HTMLElement{constructor(...t){let e=super(...t);return this._css=Zi,this.triggerEl,this.showArrow=!1,this._evtWinResize=this._onWinResize.bind(this),this._evtDocClick=this._onDocClick.bind(this),this._evtDocKeydown=this._onDocKeydown.bind(this),this.debug=this.getAttribute("debug")!==null,e}connectedCallback(){es(this,this._css),setTimeout(t=>{ts(this,Ki).then(e=>{this._setOverlay(),window.addEventListener("resize",this._evtinResize),document.addEventListener("keydown",this._evtDocKeydown),document.addEventListener("click",this._evtDocClick),this.getAttribute("opened")!==null&&this.open("attr:opened")})},500)}disconnectedCallback(){ns(this),window.removeEventListener("resize",this._evtWinResize),document.removeEventListener("keydown",this._evtDocKeydown),document.removeEventListener("click",this._evtDocClick)}_setOverlay(){this.showArrow=this.showArrow||this.getAttribute("show-arrow"),this.showArrow=this.showArrow===""?!0:Boolean(this.showArrow),this._setTriggerActions(),this._setXElementTarget()}_setXElementTarget(){let t=this.querySelector(".x-overlay").firstElementChild,e=t&&t.tagName.match(/^X-/);this.debug&&console.log("<x-overlay>",{firstChild:t,is1stXElem:e,triggerEl:this.triggerEl}),e&&!t.target&&(t.target=this.triggerEl)}_onWinResize(t){this.close("window:resize")}_onDocClick(t){let e=t.target.closest(this.tagName.toLowerCase());!this.triggerEl.contains(t.target)&&!this.isEqualNode(e)&&(this.debug&&console.log({"<x-overlay> event.target":t.target},this.triggerEl),this.close("document:click"))}_onDocKeydown(t){let e=this.style.display==="block";t.key==="Escape"&&e&&this.close("document:escape")}open(t){if(this.style.display==="block")return!1;this._prevActiveElement=document.activeElement,this.style.display="block",Qi(this.triggerEl,this,this.showArrow);let e=new CustomEvent("x-overlay-open",{bubbles:!0,detail:t});this.dispatchEvent(e),this.debug&&console.log("<x-overlay> open",t)}close(t){if(t&&(this._overlayClicked||this.style.display==="none"))return!1;this.style.display="none",(this.getAttribute("trigger-actions")||"click,focus").split(",").includes("focus")||this._prevActiveElement&&this._prevActiveElement.focus();let n=new CustomEvent("x-overlay-close",{bubbles:!0,detail:t});this.dispatchEvent(n),this.debug&&console.log("<x-overlay> close",t)}_setTriggerActions(){let t=this.getAttribute("trigger");t?this.triggerEl=document.getElementById(t):this.previousElementSibling.tagName.toLowerCase()==="x-input"?this.triggerEl=this.previousElementSibling.querySelector("input"):this.triggerEl=this.previousElementSibling,this.triggerEl?(this._id=this.getAttribute("id")||rs,this.setAttribute("id",this._id),this.style.display="none",this._setTriggerEventListener(),this.addEventListener("mousedown",e=>{this._overlayClicked=!0,setTimeout(n=>this._overlayClicked=!1,100)}),this.addEventListener("mouseenter",e=>{this._overlayMouseEntered=!0}),this.addEventListener("mouseleave",e=>{this._overlayMouseEntered=!1,this.close("trigger:mouseleave")}),setTimeout(e=>Ji(this)),this.close("trigger:init")):console.error("[x-trigger] invalid trigger",t)}_setTriggerEventListener(){let t=this.triggerEl,e=(this.getAttribute("trigger-actions")||this.triggerActions||"click,focus").split(","),n=(this.getAttribute("close-actions")||this.closeActions||"blur").split(",");t.setAttribute("aria-controlls",this._id),t.setAttribute("aria-activedescendant",`${this._id}-selected`),e.forEach(i=>{t.addEventListener(i.trim(),s=>this.open(`trigger:${i.trim()}`))}),n.forEach(i=>{t.addEventListener(i.trim(),s=>{if(i.trim()==="blur"){if(this._overlayClicked||this.style.display==="none")return!1;setTimeout(r=>this.close(`trigger:${i.trim()}`),100)}else setTimeout(r=>{if(this._overlayMouseEntered||this.style.display==="none")return!1;this.close(`trigger:${i.trim()}`)},100)})})}};$t.define=ss("x-overlay",$t);var os=`x-pagination {
  display: block;
  text-align: center;
}

x-pagination > .pages {
  display: inline-block;
}

x-pagination .page {
  border: none;
  background: #FFF;
  min-width: 28px;
  min-height: 28px;
  cursor: pointer;
  text-align: center;
  font-size: 14px;
  color: inherit;
}
x-pagination .page:disabled {
  color: #999;
}
x-pagination .prev.page::before {
  content : 'Prev';
}
x-pagination .next.page::before {
  content : 'Next';
}

x-pagination .pages > .page.selected {
  color: #FFF;
  background-color: #4285f4;
  border-radius: 4px;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
  transition: all .2s linear;
}`,as=`<button class="first page" value="1">First</button>
<button class="prev page"></button>
<div class="pages"></div>
<button class="next page"></button>
<button class="last page">Last</button>`;function ls(t,e,n=0){return new Promise(function(i,s){e?setTimeout(function(){if(e.indexOf("</slot>")){let o=e.replace("<slot></slot>",t.innerHTML);t.innerHTML=o}else t.innerHTML=e;ds(t),i(!0)},n):i(!1)})}function cs(t,e){let n=t.tagName.toLowerCase(),i=n==="x-input"&&t.getAttribute("type"),s=i?`-${i}`:"",r=`${n}${s}`;if(document.querySelector(`style[${r}]`)){let o=document.querySelector(`style[${r}]`);o.createdAt=new Date().getTime()}else{let o=document.createElement("style");return o.setAttribute(r,""),o.appendChild(document.createTextNode(e)),document.head.appendChild(o),o.createdAt=new Date().getTime(),o}}function us(t){let e=t.tagName.toLowerCase(),n=e==="x-input"&&t.getAttribute("type"),i=n?`-${n}`:"",s=`${e}${i}`,r=document.body.querySelectorAll(`${s}`).length;if(document.querySelector(`style[${s}]`)&&r<1){let a=document.querySelector(`style[${s}]`);new Date().getTime()>a.createdAt+500&&a.remove()}}function ds(t){t.querySelectorAll("script").forEach(e=>{let n=document.createElement("script");Array.from(e.attributes).forEach(i=>n.setAttribute(i.name,i.value)),n.appendChild(document.createTextNode(e.innerText));try{t.replaceChild(n,e)}catch{t.appendChild(n)}})}function hs(t,e,n=1){let i=[],s=t;for(;s<=e;)i.push(s),s+=n;return i}function fs(t,e){return function(n,i){n=n||t,i=i||e,customElements.get(n)||customElements.define(n,i)}}var qt=class extends HTMLElement{static get observedAttributes(){return["value","current-page","num-records-per-page","num-pages","total-pages","total-records"]}get value(){return this.totalRecords}set value(t){this.totalRecords!==t&&(this.totalRecords=t,this.reset(this.currentPage))}constructor(...t){let e=super(...t);return this.debug,this.totalRecords,this.totalPages,this.currentPage,this.numRecordsPerPage,this.numPages,this._initialized,this.reset=this._reset,e}connectedCallback(){cs(this,os),this.debug=this.getAttribute("debug")!==null,this.currentPage=+this.getAttribute("current-page")||1,this.numRecordsPerPage=+this.getAttribute("num-records-per-page")||10,this.numPages=+this.getAttribute("num-pages")||5,this.totalPages=+this.getAttribute("total-pages"),this.totalRecords=+this.getAttribute("total-records")||100,ls(this,as).then(t=>{this.reset(this.currentPage),this._initialized=!0}),this.addEventListener("click",this.handleClick.bind(this))}disconnectedCallback(){us(this)}attributeChangedCallback(t,e,n){if(!this._initialized)return;let i={"current-page":"currentPage","num-records-per-page":"numRecordsPerPage","num-pages":"numPages","total-pages":"totalPages","total-records":"totalRecords"};i[t]&&e!==n&&(this[i[t]]=+n,this.reset(this.currentPage))}_reset(t){typeof t!="undefined"&&(this.currentPage=+t),this.numPages%2==0&&this.numPages++,this.totalPages=Math.ceil(this.totalRecords/this.numRecordsPerPage),this._setNavButtons(),this._setPageButtons();let e=new CustomEvent("x-select",{bubbles:!0,detail:{page:this.currentPage,offset:(this.currentPage-1)*this.numRecordsPerPage,limit:this.numRecordsPerPage}});this.dispatchEvent(e),this.debug&&console.debug("<x-pagination> x-select",e)}getPages(t,e,n=5){let i=(n-1)/2,s=t;i*2-t>=1?s=i+1:i+t>e&&(s=e-i);let r=Math.max(s-i,1),o=Math.min(e,s+i);return hs(r,o)}_setNavButtons(t){let e=this.querySelector(".first.page"),n=this.querySelector(".prev"),i=this.querySelector(".next"),s=this.querySelector(".last.page"),r=this.getPages(this.currentPage,this.totalPages,this.numPages),[o,a]=[r[0],r.slice(-1)[0]];e&&(e.value=1,e.disabled=o<2),n&&(n.disabled=o<2,n.value=this.currentPage-1),i&&(i.disabled=a+1>this.totalPages,i.value=this.currentPage+1),e&&(s.disabled=a+1>this.totalPages,s.value=this.totalPages)}_setPageButtons(){let t=this.getPages(this.currentPage,this.totalPages,this.numPages),e=this.querySelector(".pages");e&&(e.innerHTML="",t.forEach(n=>{let i=n===this.currentPage?"selected":"",s=(n-1)*this.numRecordsPerPage+1;e.insertAdjacentHTML("beforeend",`<button class="page ${i}" value="${n}">${n}</button>`)}))}handleClick(t){let e=t.target;e.classList.contains("page")&&this.reset(e.value)}};qt.define=fs("x-pagination",qt);function ps(t,e,n=0){return new Promise(function(i,s){e?setTimeout(function(){if(e.indexOf("</slot>")){let o=e.replace("<slot></slot>",t.innerHTML);t.innerHTML=o}else t.innerHTML=e;bs(t),i(!0)},n):i(!1)})}function ms(t,e){let n=t.tagName.toLowerCase(),i=n==="x-input"&&t.getAttribute("type"),s=i?`-${i}`:"",r=`${n}${s}`;if(document.querySelector(`style[${r}]`)){let o=document.querySelector(`style[${r}]`);o.createdAt=new Date().getTime()}else{let o=document.createElement("style");return o.setAttribute(r,""),o.appendChild(document.createTextNode(e)),document.head.appendChild(o),o.createdAt=new Date().getTime(),o}}function gs(t){let e=t.tagName.toLowerCase(),n=e==="x-input"&&t.getAttribute("type"),i=n?`-${n}`:"",s=`${e}${i}`,r=document.body.querySelectorAll(`${s}`).length;if(document.querySelector(`style[${s}]`)&&r<1){let a=document.querySelector(`style[${s}]`);new Date().getTime()>a.createdAt+500&&a.remove()}}function bs(t){t.querySelectorAll("script").forEach(e=>{let n=document.createElement("script");Array.from(e.attributes).forEach(i=>n.setAttribute(i.name,i.value)),n.appendChild(document.createTextNode(e.innerText));try{t.replaceChild(n,e)}catch{t.appendChild(n)}})}function xs(t,e){return function(n,i){n=n||t,i=i||e,customElements.get(n)||customElements.define(n,i)}}var ys=`x-pre { 
  display: block;
  font-family: monospace;
  white-space: pre-wrap;
  background: #eee;
  padding: 12px;
  margin: 8px 0;
}`,Ht=class extends HTMLElement{constructor(...t){return super(...t)}connectedCallback(){ms(this,ys),ps(this,null).then(t=>{let e=this.innerText;e?this.innerText=this.fixIndent(e):setTimeout(n=>{this.innerText=this.previousElementSibling.outerHTML})})}disconnectedCallback(){gs(this)}fixIndent(t){t=t.replace(/^([ \t]*\n+){1,}|[\n\t ]+$/g,"");let e=(t.match(/^([ ]+)/)||[])[1];if(e){let n=new RegExp(`^${e}`,"gm");return t.replace(n,"")}return t}};Ht.define=xs("x-pre",Ht);function vs(t,e){let i="script,style,pre,x-pre,x-ace,x-highlightjs".split(",").concat(e),s=new DOMParser,r=`<xml>${t}</xml>`.replace(/(src|href)=".*?"/g,'$1="OMITTED"').replace(/&nbsp;/g,"&#160;");i.forEach(a=>{let l=new RegExp(`<${a}[\\s\\S]+?<\\/${a}>`,"gm");r=r.replace(l,`<${a}>OMITTED</${a}>`)}),r=r.replace(/(<[a-z-]+.*?)(\s[a-z][a-z-]+\s)(.*?\/?\s?>)/gm,"$1 $3").replace(/(<[a-z-]+.*?)(\s[a-z][a-z-]+)(\/?\s?>)/gm,"$1 $3");let o=s.parseFromString(r,"text/xml");if(o.documentElement.querySelector("parsererror"))return console.error(r.split(/\n/).map((a,l)=>`${l+1}: ${a}`).join(`
`)),o.documentElement.querySelector("parsererror")}function Es(t,e){for(;t.firstChild;)t.removeChild(t.firstChild);if(e){let n=vs(e.replace(/<style.*?<\/style>/g,"").replace(/<script.*?<\/script>/g,""));if(n)t.appendChild(n);else{let i=document.createElement("div");i.insertAdjacentHTML("beforeend",e),Array.from(i.childNodes).forEach(s=>t.appendChild(s)),ws(t)}}}function ws(t){t.querySelectorAll("script").forEach(e=>{let n=document.createElement("script");Array.from(e.attributes).forEach(i=>n.setAttribute(i.name,i.value)),n.appendChild(document.createTextNode(e.innerText));try{t.replaceChild(n,e)}catch{t.appendChild(n)}})}function Fs(t,e){return function(n,i){n=n||t,i=i||e,customElements.get(n)||customElements.define(n,i)}}var Y=class extends HTMLElement{constructor(...t){let e=super(...t);return this.routes,this.targetId,this.popStateHandler,e}connectedCallback(){this.debug=this.getAttribute("debug")!==null,this.querySelectorAll("li:empty").forEach(t=>t.style.display="none"),this.targetId=this.getAttribute("target"),setTimeout(t=>{this.routes=this.getRoutes(),this.addEventListener("click",this.clickHandler.bind(this)),this._loadHTML(),this._handleDOMChange(),this._handlePopStateChange(),this.fireRouteChangeEvent(window.location.pathname)},100)}disconnectedCallback(){window.removeEventListener("popstate",this.popStateHandler)}_handleDOMChange(){new MutationObserver(e=>{this.routes=this.getRoutes(),this._loadHTML()}).observe(this,{childList:!0,subtree:!0})}_handlePopStateChange(){this.popStateHandler=t=>this._loadHTML(),window.addEventListener("popstate",this.popStateHandler.bind(this))}getRoute(t){let e=this.routes.find(i=>t.match(i.pattern));if(e){let i=(e.patternAttr.match(/:[a-z0-9]+/g)||[]).map(r=>r.replace(":","")),s=t.match(e.pattern).splice(1);var n={};i.forEach((r,o)=>n[r]=s[o]),e.params=n}return e}getRoutes(){return Array.from(this.querySelectorAll("[href], [pattern]")).map(n=>{let i=n.innerText,s=n.getAttribute("src"),r=n.getAttribute("href"),o=n.getAttribute("pattern")||n.getAttribute("href"),a=`${o}$`.replace(/\//g,"\\/").replace(/\?/g,"\\?").replace(/:[a-z0-9]+/ig,"(.*?)");return{pattern:new RegExp(a),patternAttr:o,urlPath:r,src:s,name:i}})}fireRouteChangeEvent(t){let e=this.getRoute(t);if(this.debug&&console.debug("<x-route> fireRouteChangeEvent",t,e),e){let n=new CustomEvent("x-route",{bubbles:!0,detail:{state:e}});return this.dispatchEvent(n),e}}clickHandler(t){t.preventDefault();let e=t.target.closest("[href]");if(e){let n=e.getAttribute("href");this.navigate(n)}}navigate(t){let e=this.getRoute(t);this._loadHTML(e).then(n=>{this.fireRouteChangeEvent(t)}),window.history.pushState(e,e.name,t)}_loadHTML(t,e){if(this.debug&&console.debug("<x-route> _loadHTML params:",{route:t,targetEl:e}),this.debug&&console.debug("<x-route> _loadHTML routes:",this.routes,"path:",window.location.pathname),t=t||this.getRoute(window.location.pathname),e=e||document.getElementById(this.targetId),this.debug&&console.debug("<x-route> _loadHTML params updated",{route:t,targetEl:e}),!t||!e)return Promise.resolve(e);let n=this.querySelector(`[href="${t.urlPath}"]`);return this.debug&&console.debug("<x-route> _loadHTML",{activeRouteEl:n}),n&&(this.querySelectorAll("[href].active").forEach(i=>i.classList.remove("active")),this.querySelector(`[href="${t.urlPath}"]`).classList.add("active")),t=Y.beforeFetchCallback?Y.beforeFetchCallback(t):t,this.debug&&console.debug("<x-route> _loadHTML after callback",{route:t}),t.src?window.fetch(t.src+"?"+new Date().getTime()).then(i=>i.text()).then(i=>{i.match(/^<!DOCTYPE/)?i="404 NOT FOUND":i=Y.afterFetchCallback?Y.afterFetchCallback(i):i,e.style.opacity=0,e.classList.remove("slide-in"),Es(e,i);let s=new CustomEvent("x-load",{bubbles:!0,detail:t});return this.dispatchEvent(s),setTimeout(r=>{e.removeAttribute("style"),e.classList.add("slide-in")},100),e}):Promise.resolve(e)}};Y.define=Fs("x-route",Y);function _s(t,e){let n=t.tagName.toLowerCase(),i=n==="x-input"&&t.getAttribute("type"),s=i?`-${i}`:"",r=`${n}${s}`;if(document.querySelector(`style[${r}]`)){let o=document.querySelector(`style[${r}]`);o.createdAt=new Date().getTime()}else{let o=document.createElement("style");return o.setAttribute(r,""),o.appendChild(document.createTextNode(e)),document.head.appendChild(o),o.createdAt=new Date().getTime(),o}}function As(t){let e=t.tagName.toLowerCase(),n=e==="x-input"&&t.getAttribute("type"),i=n?`-${n}`:"",s=`${e}${i}`,r=document.body.querySelectorAll(`${s}`).length;if(document.querySelector(`style[${s}]`)&&r<1){let a=document.querySelector(`style[${s}]`);new Date().getTime()>a.createdAt+500&&a.remove()}}function Cs(t,e){let i="script,style,pre,x-pre,x-ace,x-highlightjs".split(",").concat(e),s=new DOMParser,r=`<xml>${t}</xml>`.replace(/(src|href)=".*?"/g,'$1="OMITTED"').replace(/&nbsp;/g,"&#160;");i.forEach(a=>{let l=new RegExp(`<${a}[\\s\\S]+?<\\/${a}>`,"gm");r=r.replace(l,`<${a}>OMITTED</${a}>`)}),r=r.replace(/(<[a-z-]+.*?)(\s[a-z][a-z-]+\s)(.*?\/?\s?>)/gm,"$1 $3").replace(/(<[a-z-]+.*?)(\s[a-z][a-z-]+)(\/?\s?>)/gm,"$1 $3");let o=s.parseFromString(r,"text/xml");if(o.documentElement.querySelector("parsererror"))return console.error(r.split(/\n/).map((a,l)=>`${l+1}: ${a}`).join(`
`)),o.documentElement.querySelector("parsererror")}function Ts(t,e){for(;t.firstChild;)t.removeChild(t.firstChild);if(e){let n=Cs(e.replace(/<style.*?<\/style>/g,"").replace(/<script.*?<\/script>/g,""));if(n)t.appendChild(n);else{let i=document.createElement("div");i.insertAdjacentHTML("beforeend",e),Array.from(i.childNodes).forEach(s=>t.appendChild(s)),Ss(t)}}}function Ss(t){t.querySelectorAll("script").forEach(e=>{let n=document.createElement("script");Array.from(e.attributes).forEach(i=>n.setAttribute(i.name,i.value)),n.appendChild(document.createTextNode(e.innerText));try{t.replaceChild(n,e)}catch{t.appendChild(n)}})}function Ls(t,e){return function(n,i){n=n||t,i=i||e,customElements.get(n)||customElements.define(n,i)}}var ks=`x-include {
  display: block;
  position: relative;
}

x-include.x-loading::before {
  display: flex;
  position: absolute;
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' style='width: 40px; height: 40px;'%3E%3Ccircle cx='50' cy='50' r='35' fill='none' stroke='%23e15b64' stroke-width='10' stroke-dasharray='165 57'%3E%3CanimateTransform attributeName='transform' type='rotate' repeatCount='indefinite' dur='1s' values='0 50 50;360 50 50' keyTimes='0;1'%3E%3C/animateTransform%3E%3C/circle%3E%3C/svg%3E");
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .5);
  z-index: 10;
}`,V=class extends HTMLElement{static get observedAttributes(){return["src"]}connectedCallback(){_s(this,ks)}disconnectedCallback(){As(this)}attributeChangedCallback(t,e,n){this._loadSrcHTML()}_loadSrcHTML(){let t=this.getAttribute("src");t=V.beforeFetchCallback&&V.beforeFetchCallback(t)||t,t&&(this.classList.add("x-loading"),window.fetch(t).then(e=>e.text()).then(e=>{e.match(/^<!DOCTYPE/)?e="404 NOT FOUND":e=V.afterFetchCallback?V.afterFetchCallback(e):e,Ts(this,e)}).finally(e=>{this.classList.remove("x-loading")}))}};V.define=Ls("x-include",V);function Ms(t,e,n=0){return new Promise(function(i,s){e?setTimeout(function(){if(e.indexOf("</slot>")){let o=e.replace("<slot></slot>",t.innerHTML);t.innerHTML=o}else t.innerHTML=e;Hs(t),i(!0)},n):i(!1)})}function $s(t,e){let n=t.tagName.toLowerCase(),i=n==="x-input"&&t.getAttribute("type"),s=i?`-${i}`:"",r=`${n}${s}`;if(document.querySelector(`style[${r}]`)){let o=document.querySelector(`style[${r}]`);o.createdAt=new Date().getTime()}else{let o=document.createElement("style");return o.setAttribute(r,""),o.appendChild(document.createTextNode(e)),document.head.appendChild(o),o.createdAt=new Date().getTime(),o}}function qs(t){let e=t.tagName.toLowerCase(),n=e==="x-input"&&t.getAttribute("type"),i=n?`-${n}`:"",s=`${e}${i}`,r=document.body.querySelectorAll(`${s}`).length;if(document.querySelector(`style[${s}]`)&&r<1){let a=document.querySelector(`style[${s}]`);new Date().getTime()>a.createdAt+500&&a.remove()}}function Hs(t){t.querySelectorAll("script").forEach(e=>{let n=document.createElement("script");Array.from(e.attributes).forEach(i=>n.setAttribute(i.name,i.value)),n.appendChild(document.createTextNode(e.innerText));try{t.replaceChild(n,e)}catch{t.appendChild(n)}})}function Ds(t,e=500){var n;return function(...i){var s=this,r=function(){n=null,t.apply(s,i)};clearTimeout(n),n=setTimeout(r,e)}}function Ps(t,e,n=[],i=[]){let s=["class","contenteditable","debug","draggable","tabindex"];Array.from(t.attributes).filter(a=>!a.name.match(/^on[a-z]+/)).filter(a=>!s.includes(a.name)).filter(a=>(i==null?void 0:i.length)===0||i.includes(a.name)).filter(a=>(n==null?void 0:n.length)===0||!n.includes(a.name)).forEach(a=>e&&e.setAttribute(a.name,a.value));function r(a){a.filter(l=>l.type==="attributes").filter(l=>!l.attributeName.match(/^on[a-z]+/)).filter(l=>!s.includes(l.attributeName)).filter(l=>(i==null?void 0:i.length)&&i.includes(l.attributeName)).filter(l=>(n==null?void 0:n.length)&&!n.includes(l.attributeName)).forEach(l=>{let c=l.attributeName,f=l.target.getAttribute(c);e.setAttribute(c,f)})}new MutationObserver(r).observe(t,{attributes:!0})}function Ns(t,e){return e=Object.assign({wait:100,attributes:!1,childList:!0,subtree:!0},e),new Promise(n=>{let i=!1,s=new MutationObserver(a=>{i=!0,t.dispatchEvent(new CustomEvent("dom-changed",{detail:a,bubbles:!0}))});s.observe(t,e);let r=Ds(o,e.wait)();function o(){n(t),s.disconnect(t),t.removeEventListener("dom-change",r)}t.addEventListener("dom-change",r),setTimeout(a=>{!i&&n(t)},e.wait)})}function Xs(t,e){return function(n,i){n=n||t,i=i||e,customElements.get(n)||customElements.define(n,i)}}var Os=`<select class="x-native">
  <slot></slot>
</select>

<!-- this replaces the native select dropdown  -->
<!-- native <option> is set to "display: none" -->
<div class="x-custom" aria-hidden="true">
</div>`,De=`x-select {
  --height: 36px;
  display: none;
  position: relative;
  white-space: nowrap;
  height: var(--height);
}
x-select.x-init {
  display: inline-block;
}

x-select .x-native {
  padding: 0 8px;
  border-radius: 4px;
  width: 100%;
  height: var(--height);
  display: inline-block;
  box-sizing: border-box;
  background: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>") no-repeat right center;
  padding-right: 24px;
  appearance:none; /* to remove default arrow replaceing with bg image */
}

.x-native:focus {
  outline: none;
  box-shadow: white 0 0 0 2px, #ff821f 0 0 0 4px;
}

x-select:disabled .x-native {
  background: url("data:image/svg+xml;utf8,<svg fill='grey' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>") no-repeat right center;
}

.x-native > option {
  display: none;
}

.x-custom {
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  border: 0px solid #6f6f6f;
  border-radius: 4px;
  background-color: #fff;
  z-index: 1;
  max-height: 0;
  overflow: hidden;
  transition: max-height .2s;
}

.x-native:focus ~ .x-custom {
  max-height: 500px;
  border-width: 1px;
  box-shadow: 0 0 4px #e9e1f8;
}

.x-custom > * {
  position: relative;
  padding: 8px;
  padding-left: 25px;
  border-bottom: 1px solid #d3d3d3;
}

.x-custom > *:last-child {
  border-bottom: none;
}

.x-custom > *.selected::before {
  content: "\u2713";
  position: absolute;
  left: 8px;
}

.x-custom > *.active, 
.x-custom > *:not([disabled]):hover {
  background-color: #865bd7;
  color: white;
  cursor: default;
}

.x-custom > *[disabled] {
  opacity: .5;
}`,Dt=class extends HTMLElement{get value(){var t;return(t=this.querySelector("select"))==null?void 0:t.value}get disabled(){var t;return(t=this.querySelector("select"))==null?void 0:t.disabled}get validity(){var t;return(t=this.querySelector("select"))==null?void 0:t.validity}get validationMessage(){var t;return(t=this.querySelector("select"))==null?void 0:t.validationMessage}set value(t){this._setProp("value",t)}set disabled(t){this._setProp("disabled",t)}_setProp(t,e){t==="disabled"&&(e?this.setAttribute("disabled",""):this.removeAttribute("disabled")),this.querySelector("select")?this.querySelector("select")[t]=e:setTimeout(n=>this.querySelector("select")[t]=e,500)}constructor(){super();this.html,this.xNative,this.xCustom}connectedCallback(){De&&$s(this,De),Ns(this).then(t=>(this.html=this.innerHTML,Ms(this,Os))).then(t=>{this.xNative=this.querySelector(".x-native"),this.xCustom=this.querySelector(".x-custom"),Ps(this,this.xNative);let e=this.html.replace(/option/g,"div").replace(/value=/g,"data-value=");this.xCustom.innerHTML=e,this._init(),this.classList.add("x-init")})}disconnectedCallback(){qs(this)}_init(){this.getAttribute("multiple")===null?this.xNative.addEventListener("keydown",this._xNativeKeydownHandler.bind(this)):(this.xCustom.setAttribute("tabindex",0),this.xCustom.removeAttribute("aria-hidden"),this.xCustom.addEventListener("keydown",this._xNativeKeydownHandler.bind(this))),this.xCustom.addEventListener("mousedown",t=>{this._syncNativeAndCustom(t.target.dataset.value)}),this._syncNativeAndCustom()}_xNativeKeydownHandler(t){if(t.keyCode===27){t.target.blur();return}function e(i){let r=(n.findIndex(o=>o.classList.contains("active"))+i+n.length)%n.length;n.forEach((o,a)=>{let l=a===r?"add":"remove";o.classList[l]("active")})}let n=Array.from(this.xCustom.querySelectorAll("[data-value]"));if(t.keyCode===39||t.keyCode===40)e(1);else if(t.keyCode===37||t.keyCode===38)e(-1);else if(t.keyCode===13){let i=n.findIndex(r=>r.classList.contains("active")),s=n[i].dataset.value;this._syncNativeAndCustom(s),this.xNative.blur()}else{let i=t.key.toLowerCase();n.forEach(s=>{let o=s.innerText.toLowerCase().indexOf(i)!==-1?"add":"remove";s.classList[o]("active")})}}_syncNativeAndCustom(t){t!==void 0&&(this.xNative.value=t),this.value=this.xNative.value,this.dispatchEvent(new Event("change"),{bubbles:!0});let n=Array.from(this.xNative.querySelectorAll("option")).findIndex(s=>s.value==this.xNative.value);Array.from(this.xCustom.querySelectorAll("[data-value]")).forEach((s,r)=>{let o=r===n?"add":"remove";s.classList[o]("selected"),s.classList[o]("active")})}};Dt.define=Xs("x-select",Dt);var Is=`x-table {
  display: block;
  width: 100%;
}

x-table.no-header header {
  display: none;
}
x-table.no-footer footer {
  display: none;
}

x-table header,
table.x-table header {
  display: flex;
  justify-content: space-between;
  padding-bottom: 8px;
  font-size: .8em;
  align-items: baseline;
}
x-table footer,
table.x-table footer {
  display: flex;
  justify-content: center;
  padding: 16px 0;
}

x-table table,
table.x-table {
  width: 100%;
  border: 1px solid #dee2e6;
  border-collapse: collapse;
  font-size: .9rem;
}

x-table table > thead > tr > th,
table.x-table > thead > tr > th {
  white-space: nowrap;
  position: relative;
  border-top: 0;
  padding-top: 1.1rem;
  padding-bottom: 1rem;
  vertical-align: bottom;
  border: 1px solid #dee2e6;
  border-width: 0 1px 2px 1px;
  padding: .75rem;
  font-weight: 400;
  text-align: inherit;
}

x-table table > tbody > tr,
table.x-table > tbody > tr {
  background: #FFF;
}

x-table table > tbody > tr:nth-of-type(odd),
table.x-table > tbody > tr:nth-of-type(odd) {
  background-color: rgba(0,0,0,0.05);
}

x-table table > tbody > tr > td,
table.x-table > tbody > tr > td {
  padding-top: 1.1rem;
  padding-bottom: 1rem;
  vertical-align: middle;
  border: 1px solid #dee2e6;
  border-width: 0 1px 1px 1px;
  padding: 8px 12px;
  font-weight: 400;
  text-align: inherit;
}

x-table table > thead > tr > th:before {
  position: absolute;
  cursor: pointer;
  top: 8px;
  display: block;
  right: 16px;
  content: '\u25B2';
  opacity: .3;
  transform:scale(1.2, .7);
}
x-table table > thead > tr > th.asc:before {
  opacity: 1;
}
x-table table > thead > tr > th:after {
  cursor: pointer;
  position: absolute;
  bottom: 8px;
  display: block;
  right: 16px;
  content: '\u25BC';
  opacity: .3;
  transform:scale(1.2, .7);
}
x-table table > thead > tr > th.desc:after {
  opacity: 1;
}

@media screen and (max-width: 720px) {
  x-table thead {
    display: none;
  }
  x-table td {
    display: flex;
  }
  
  x-table td::before {
    content: attr(data-label);
    font-weight: bold;
    width: 120px;
    min-width: 120px;
    text-align: left;
  }
}`,zs=`<header>
  <div>
    Showing <span id="start"></span> to
     <span id="end"></span> of 
     <span id="total"></span> entries 
  </div>
  <div class="x-table-search">
    Search: <x-input id="x-search-input"></x-input>
  </div>
</header>

<article>
  <slot></slot>
</article>

<footer>
  <x-pagination></x-pagination>
</footer>

`;function js(t,e,n=0){return new Promise(function(i,s){e?setTimeout(function(){if(e.indexOf("</slot>")){let o=e.replace("<slot></slot>",t.innerHTML);t.innerHTML=o}else t.innerHTML=e;Us(t),i(!0)},n):i(!1)})}function Bs(t,e){let n=t.tagName.toLowerCase(),i=n==="x-input"&&t.getAttribute("type"),s=i?`-${i}`:"",r=`${n}${s}`;if(document.querySelector(`style[${r}]`)){let o=document.querySelector(`style[${r}]`);o.createdAt=new Date().getTime()}else{let o=document.createElement("style");return o.setAttribute(r,""),o.appendChild(document.createTextNode(e)),document.head.appendChild(o),o.createdAt=new Date().getTime(),o}}function Rs(t){let e=t.tagName.toLowerCase(),n=e==="x-input"&&t.getAttribute("type"),i=n?`-${n}`:"",s=`${e}${i}`,r=document.body.querySelectorAll(`${s}`).length;if(document.querySelector(`style[${s}]`)&&r<1){let a=document.querySelector(`style[${s}]`);new Date().getTime()>a.createdAt+500&&a.remove()}}function Us(t){t.querySelectorAll("script").forEach(e=>{let n=document.createElement("script");Array.from(e.attributes).forEach(i=>n.setAttribute(i.name,i.value)),n.appendChild(document.createTextNode(e.innerText));try{t.replaceChild(n,e)}catch{t.appendChild(n)}})}function Ws(t,e=500){var n;return function(...i){var s=this,r=function(){n=null,t.apply(s,i)};clearTimeout(n),n=setTimeout(r,e)}}function Ys(t,e){return e=Object.assign({wait:100,attributes:!1,childList:!0,subtree:!0},e),new Promise(n=>{let i=!1,s=new MutationObserver(a=>{i=!0,t.dispatchEvent(new CustomEvent("dom-changed",{detail:a,bubbles:!0}))});s.observe(t,e);let r=Ws(o,e.wait)();function o(){n(t),s.disconnect(t),t.removeEventListener("dom-change",r)}t.addEventListener("dom-change",r),setTimeout(a=>{!i&&n(t)},e.wait)})}function Vs(t,e){return function(n,i){n=n||t,i=i||e,customElements.get(n)||customElements.define(n,i)}}var Pt=class extends HTMLElement{static get observedAttributes(){return["order","offset","limit"]}get list(){return this._list_org}set list(t){this._list_org=t,this._renderWithTemplate();let e=this.querySelector("x-pagination");e&&(e.numRecordsPerPage=this._limit,e.totalRecords=this.list.length,e._reset())}constructor(...t){let e=super(...t);return this._list_org=[],this._template,this._orderExpr,this._offset=0,this._limit=10,this.xPagination,this.searchInput,e}connectedCallback(){let t=this._getValidationError();if(t)return this.innerHTML=t;this._orderExpr=this.getAttribute("order"),this._offset=+this.getAttribute("offset")||this._offset,this._limit=+this.getAttribute("limit")||this._limit,Bs(this,Is),Ys(this).then(e=>js(this,zs)).then(e=>{let n=this.getAttribute("list-from")===null?this._getTemplateSuccess():this.querySelector("tbody > tr:not(.error):not(.empty):not(.bottom)").outerHTML,i=this._getMobileTemplateSuccess(n),s=(this.querySelector("tbody > tr.error")||{}).outerHTML||'<tr><td colspan="100">Unknown error</td></tr>',r=(this.querySelector("tbody > tr.empty")||{}).outerHTML||'<tr><td colspan="100">No records found</td></tr>',o=(this.querySelector("tbody > tr.bottom")||{}).outerHTML||'<tr><td colspan="100">Bottom of list</td></tr>';this._template={success:i,error:s,empty:r,bottom:o},this._setList(),this._setSearchInput(),this._setupPagination(),this._setOrderBy()})}disconnectedCallback(){Rs(this)}attributeChangedCallback(t,e,n){if(e===n)return!1;switch(t){case"order":this._orderExpr=n,this._renderWithTemplate();break;case"offset":this._offset=+n,this._renderWithTemplate();break;case"limit":this._limit=+n,this._renderWithTemplate();break}}_getValidationError(){if(!this.querySelector("table")||!this.querySelector("thead")||!this.querySelector("tbody"))return'<b style="color:red">&lt;x-table> error, missing &lt;thead> and/or &lt;body></b>'}_setupPagination(){this.querySelector("x-pagination").addEventListener("x-select",t=>{this._offset=t.detail.offset,this._renderWithTemplate()})}_setList(){let t=document.getElementById(this.getAttribute("list-from"));t&&t.tagName==="X-HTTP"?(t.resp&&(this.list=t.resp),t.addEventListener("x-success",e=>{this.list=e.detail,this._renderWithTemplate()})):t?this.list=t.value:this.list.length===0&&(this.list=this._getListFromTbody())}_setSearchInput(){this.querySelector("#x-search-input").addEventListener("input",t=>{let e=t.target.value,n=[...this.list];n=n.filter(i=>JSON.stringify(i).indexOf(e)!==-1),this._renderWithTemplate(n,e)})}_setOrderBy(){this.querySelector("table thead tr").addEventListener("click",t=>{let e=t.target.getAttribute("data-key")||t.target.className.split(" ")[0],n=t.target.classList.contains("asc")?"desc":"asc";this.querySelectorAll("table thead tr th").forEach(i=>i.classList.remove("asc","desc")),t.target.classList.add(n),this.setAttribute("order",`${e} ${n}`)})}_getHTMLFromTemplate(t,e){let n=t||JSON.stringify(e);return(n.match(/{{[^}]+}}/g)||[]).forEach(i=>{n=n.replace(/{{([^}]+)}}/g,(s,r)=>{if(r.includes(" ")){let[o,a,l]=r.match(/(.+) if (.+)/)||[];return new Function(`return this.${l};`).bind(e)()?a:""}else return`${new Function(`return this.${r};`).bind(e)()}`}).replace(/(checked)="false"/,"")}),n}_renderWithTemplate(t,e){if(!this._template)return;t=t||this._list_org,setTimeout(r=>{this.querySelector("#start").innerText=this._offset+1,this.querySelector("#end").innerText=this._offset+this._limit,this.querySelector("#total").innerText=t.length});let n=this._getSorted(t,this._orderExpr),i=this._getLimited(n,this._offset,this._limit),s=this.querySelector("tbody");s.innerHTML="",i.length?i.forEach(r=>{let o=this._getHTMLFromTemplate(this._template.success,r);if(e){let a=new RegExp(`(?<!<[^>]*)(${e})`,"gi"),l=o.replace(a,c=>`<b class="highlight">${c}</b>`);s.insertAdjacentHTML("beforeend",l)}else s.insertAdjacentHTML("beforeend",o)}):s.insertAdjacentHTML("beforeend",this._template.empty||"")}_getSorted(t=[],e){if(e){let[n,i="asc"]=e.split(" ");return t.sort((r,o)=>{let a=r[n]>o[n]?1:-11,l=i.match(/^desc/i)?-1:1;return a*l})}else return t}_getLimited(t=[],e,n){return n?t.slice(e,e+n):t}_getKeysFromThead(){let t=[];return this.querySelectorAll("thead > tr > *").forEach(e=>{let n=e.className&&e.className.split(" ")[0]||e.innerText.replace(/[^a-z0-9_]/ig,"_");e.setAttribute("data-key",n),t.push(n)}),t}_getTemplateSuccess(){let t=this._getKeysFromThead(),e=this.querySelector("tbody > tr");if(e){let n=e.outerHTML;return e.outerHTML.match(/<td.*?>.*?<\/td>/g).forEach((s,r)=>{let[o,a,l,c]=s.match(/(<td.*?>)(.*)(<\/td>)/);n=n.replace(s,`${a}{{${t[r]}}}${c}`)}),n}else return""}_getMobileTemplateSuccess(t){let e=this._getKeysFromThead();return t.match(/<td(.*?)>.*?<\/td>/g).forEach((i,s)=>{let[r,o,a]=i.match(/<td(.*?)>(.*?)<\/td>/);t=t.replace(i,`<td${o} data-label="${e[s]}">${a}</td>`)}),t}_getListFromTbody(){let t=[],e=this._getKeysFromThead();return this.querySelectorAll("tbody > tr").forEach(i=>{let s={};i.querySelectorAll("td").forEach((r,o)=>{s[e[o]]=r.innerText}),t.push(s)}),t}};Pt.define=Vs("x-table",Pt);var Gs=`x-tabs .tabs {
  border-bottom: 1px solid #999;
  display: flex;
  position: relative;
  cursor: pointer;
  overflow-x: auto;
  overflow-y: hidden;
}

x-tabs .tabs [tab-for] {
  margin: 1px 2px 0 0;
  padding: 12px;
  position: relative;
  opacity: .7;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  /* min-width: 160px; */
  outline: 0;
}

x-tabs .tabs [tab-for][aria-selected] {
  background: #FFF;
  opacity: 1;
}

x-tabs .tabs [tab-for][disabled] {
  opacity: .5;
  pointer-events: none;
}

x-tabs .tabs  .underline-bar {
  position: absolute;
  bottom: -1px;
  height: 2px;
  background: #333;
  border-radius: 2px 2px 0 0;
  transition: 500ms cubic-bezier(0.35, 0, 0.25, 1);
}

x-tabs .tab-contents {
  margin: 12px 0;
}
x-tabs .tab-contents [contents-for] {
  min-height: 100px;
  display: none;
}

x-tabs .tab-contents [contents-for][aria-selected] {
  display: block;
}`;function Ks(t,e){let n=t.tagName.toLowerCase(),i=n==="x-input"&&t.getAttribute("type"),s=i?`-${i}`:"",r=`${n}${s}`;if(document.querySelector(`style[${r}]`)){let o=document.querySelector(`style[${r}]`);o.createdAt=new Date().getTime()}else{let o=document.createElement("style");return o.setAttribute(r,""),o.appendChild(document.createTextNode(e)),document.head.appendChild(o),o.createdAt=new Date().getTime(),o}}function Zs(t){let e=t.tagName.toLowerCase(),n=e==="x-input"&&t.getAttribute("type"),i=n?`-${n}`:"",s=`${e}${i}`,r=document.body.querySelectorAll(`${s}`).length;if(document.querySelector(`style[${s}]`)&&r<1){let a=document.querySelector(`style[${s}]`);new Date().getTime()>a.createdAt+500&&a.remove()}}function Js(t,e){return function(n,i){n=n||t,i=i||e,customElements.get(n)||customElements.define(n,i)}}var Nt=class extends HTMLElement{constructor(...t){let e=super(...t);return this.selected,this.tabEls,this.contentsEls,e}connectedCallback(){Ks(this,Gs),this._initData()}disconnectedCallback(){Zs(this)}_initData(){this.selected=this.getAttribute("selected"),this.tabsEls=Array.from(this.querySelectorAll("[tab-for]")),this.contentsEls=Array.from(this.querySelectorAll("[contents-for]")),this._setAttributes(),this._addEventListeners(),this._selectTabAndContents(this.selected,!1)}_setAttributes(){this.querySelector(".tabs").setAttribute("role","tablist"),this.querySelector(".tabs").insertAdjacentHTML("beforeend",'<div class="underline-bar"></div>'),this.tabsEls.forEach(t=>{let e=t.getAttribute("tab-for");t.setAttribute("id",e),t.setAttribute("role","tab"),t.setAttribute("aria-controls",`${e}-contents`),t.setAttribute("tabindex","0")}),this.contentsEls.forEach(t=>{let e=t.getAttribute("contents-for");t.setAttribute("role","tabpanel"),t.setAttribute("id",`${e}-contents`),t.setAttribute("aria-labelledby",e),t.setAttribute("tabindex","0")})}_addEventListeners(){this.tabsEls.forEach(t=>{t.addEventListener("click",this._clickHandler.bind(this)),t.addEventListener("keydown",this._keydownHandler.bind(this))})}_selectTabAndContents(t,e=!0){if(!t){let n=this.querySelector("[tab-for][aria-selected]")||this.querySelector("[tab-for]");t=n&&n.getAttribute("tab-for")}this._selectTab(t,e),this._selectContents(t)}_selectTab(t,e){let n=this.querySelector(`[tab-for="${t}"]`);this.tabsEls.filter(s=>!s.isEqualNode(n)).forEach(s=>{s.removeAttribute("aria-selected"),s.removeAttribute("tabindex")}),n.setAttribute("aria-selected","true"),n.setAttribute("tabindex","0");let i=this.querySelector(".underline-bar");i&&setTimeout(s=>{Object.assign(i.style,{width:n.offsetWidth+"px",left:n.offsetLeft+"px"})}),e&&n.focus()}_selectContents(t){let e=this.querySelector(`[contents-for="${t}"]`);e&&(this.contentsEls.filter(n=>!n.isEqualNode(e)).forEach(n=>{n.classList.remove("selected"),n.removeAttribute("aria-selected")}),e.classList.add("selected"),e.setAttribute("aria-selected","true"))}_clickHandler(t){let e=t.target.closest("x-tabs [tab-for]");e&&this._selectTabAndContents(e.getAttribute("tab-for"))}_keydownHandler(t){let e=this.tabsEls.filter(a=>a.getAttribute("disabled")===null),n=t.keyCode===39?1:t.keyCode===37?-1:0,i=this.tabsEls.find(a=>a.getAttribute("aria-selected")!==null),s=e.indexOf(i),r=(e.length+s+n)%e.length,o=e[r].getAttribute("tab-for");this._selectTabAndContents(o)}};Nt.define=Js("x-tabs",Nt);function Qs(t,e,n=0){return new Promise(function(i,s){e?setTimeout(function(){if(e.indexOf("</slot>")){let o=e.replace("<slot></slot>",t.innerHTML);t.innerHTML=o}else t.innerHTML=e;nr(t),i(!0)},n):i(!1)})}function tr(t,e){let n=t.tagName.toLowerCase(),i=n==="x-input"&&t.getAttribute("type"),s=i?`-${i}`:"",r=`${n}${s}`;if(document.querySelector(`style[${r}]`)){let o=document.querySelector(`style[${r}]`);o.createdAt=new Date().getTime()}else{let o=document.createElement("style");return o.setAttribute(r,""),o.appendChild(document.createTextNode(e)),document.head.appendChild(o),o.createdAt=new Date().getTime(),o}}function er(t){let e=t.tagName.toLowerCase(),n=e==="x-input"&&t.getAttribute("type"),i=n?`-${n}`:"",s=`${e}${i}`,r=document.body.querySelectorAll(`${s}`).length;if(document.querySelector(`style[${s}]`)&&r<1){let a=document.querySelector(`style[${s}]`);new Date().getTime()>a.createdAt+500&&a.remove()}}function nr(t){t.querySelectorAll("script").forEach(e=>{let n=document.createElement("script");Array.from(e.attributes).forEach(i=>n.setAttribute(i.name,i.value)),n.appendChild(document.createTextNode(e.innerText));try{t.replaceChild(n,e)}catch{t.appendChild(n)}})}function Pe(t,e){return function(n,i){n=n||t,i=i||e,customElements.get(n)||customElements.define(n,i)}}var ir=`<div class="x-arrow up">
  <i class="x-icon"></i>
</div>
<div class="x-overlay"><slot></slot></div>
<div class="x-arrow down">
  <i class="x-icon"></i>
</div>`,sr=`x-overlay {
  position: absolute;
  z-index: 999;
  display: none;
}

x-overlay .x-overlay {
  display: block;
  background: #FFF;
  border: 1px solid #ccc;
  padding: 8px;
  box-shadow: 4px 4px 8px #ccc;
}

x-overlay .x-arrow .x-icon {
  position: relative;
  width: 0;
  height: 0;
  display: block;
  z-index: 1;
  transform: translateX(-50%);
}
x-overlay .x-arrow .x-icon::after {
  content: '';
  width: 0;
  height: 0;
  position: absolute;
  left: -11px;
}

x-overlay .x-arrow.up .x-icon {
  top: 1px;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  border-bottom: 12px solid #CCC;
}
x-overlay .x-arrow.up .x-icon::after {
  border-left: 11px solid transparent;
  border-right: 11px solid transparent;
  border-bottom: 11px solid #FFF;
  top: 2px;
}

x-overlay .x-arrow.down .x-icon {
  bottom: 1px;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  border-top: 12px solid #CCC;
}
x-overlay .x-arrow.down .x-icon::after {
  border-left: 11px solid transparent;
  border-right: 11px solid transparent;
  border-top: 11px solid #FFF;
  bottom: 2px;
}`;function rr(t){t.setAttribute("tabindex",t.getAttribute("tabindex")||"-1");let e=Array.from(t.querySelectorAll('a[href], button, textarea, input[type="text"],input[type="radio"], input[type="checkbox"], select, [tabindex]')).filter(s=>{let r=s.getAttribute("tabindex")||"0";return!s.disabled&&r!=="-1"});e.forEach(s=>{s.addEventListener("focus",r=>{t._overlayClicked=!0,setTimeout(o=>t._overlayClicked=!1,100)})});let n=e[0],i=e[e.length-1];t.addEventListener("keydown",function(s){s.keyCode===9&&(s.shiftKey?document.activeElement===n&&(i.focus(),s.preventDefault()):document.activeElement===i&&(n.focus(),s.preventDefault()))})}function or(t,e,n){e.querySelectorAll(".x-arrow").forEach(l=>l.style.display="none");let i=t.getBoundingClientRect().bottom,s=window.innerHeight<i+e.offsetHeight;if(n){let l=s?"down":"up";e.querySelector(`.x-arrow.${l}`).style.display="block"}let r=n?t.offsetLeft+t.offsetWidth/2-e.offsetWidth/2:t.offsetLeft,o=s?t.offsetTop-e.offsetHeight:t.offsetTop+t.offsetHeight;e.style.left=`${r}px`,e.style.top=`${o}px`,e.style.minWidth=t.offsetWidth+"px";let a=e.getBoundingClientRect().right;if(a>window.innerWidth){let l=window.innerWidth-a.offsetWidth-24;a.style.left=`${l}px`}if(n){let l=s?"down":"up",c=e.querySelector(`.x-arrow.${l} .x-icon`);c.style.left=t.offsetLeft-e.offsetLeft+t.offsetWidth/2+"px"}}var ar=`x-${parseInt(""+Math.random()*1e4)}`,ce=class extends HTMLElement{constructor(...t){let e=super(...t);return this._css=sr,this.triggerEl,this.showArrow=!1,this._evtWinResize=this._onWinResize.bind(this),this._evtDocClick=this._onDocClick.bind(this),this._evtDocKeydown=this._onDocKeydown.bind(this),this.debug=this.getAttribute("debug")!==null,e}connectedCallback(){tr(this,this._css),setTimeout(t=>{Qs(this,ir).then(e=>{this._setOverlay(),window.addEventListener("resize",this._evtinResize),document.addEventListener("keydown",this._evtDocKeydown),document.addEventListener("click",this._evtDocClick),this.getAttribute("opened")!==null&&this.open("attr:opened")})},500)}disconnectedCallback(){er(this),window.removeEventListener("resize",this._evtWinResize),document.removeEventListener("keydown",this._evtDocKeydown),document.removeEventListener("click",this._evtDocClick)}_setOverlay(){this.showArrow=this.showArrow||this.getAttribute("show-arrow"),this.showArrow=this.showArrow===""?!0:Boolean(this.showArrow),this._setTriggerActions(),this._setXElementTarget()}_setXElementTarget(){let t=this.querySelector(".x-overlay").firstElementChild,e=t&&t.tagName.match(/^X-/);this.debug&&console.log("<x-overlay>",{firstChild:t,is1stXElem:e,triggerEl:this.triggerEl}),e&&!t.target&&(t.target=this.triggerEl)}_onWinResize(t){this.close("window:resize")}_onDocClick(t){let e=t.target.closest(this.tagName.toLowerCase());!this.triggerEl.contains(t.target)&&!this.isEqualNode(e)&&(this.debug&&console.log({"<x-overlay> event.target":t.target},this.triggerEl),this.close("document:click"))}_onDocKeydown(t){let e=this.style.display==="block";t.key==="Escape"&&e&&this.close("document:escape")}open(t){if(this.style.display==="block")return!1;this._prevActiveElement=document.activeElement,this.style.display="block",or(this.triggerEl,this,this.showArrow);let e=new CustomEvent("x-overlay-open",{bubbles:!0,detail:t});this.dispatchEvent(e),this.debug&&console.log("<x-overlay> open",t)}close(t){if(t&&(this._overlayClicked||this.style.display==="none"))return!1;this.style.display="none",(this.getAttribute("trigger-actions")||"click,focus").split(",").includes("focus")||this._prevActiveElement&&this._prevActiveElement.focus();let n=new CustomEvent("x-overlay-close",{bubbles:!0,detail:t});this.dispatchEvent(n),this.debug&&console.log("<x-overlay> close",t)}_setTriggerActions(){let t=this.getAttribute("trigger");t?this.triggerEl=document.getElementById(t):this.previousElementSibling.tagName.toLowerCase()==="x-input"?this.triggerEl=this.previousElementSibling.querySelector("input"):this.triggerEl=this.previousElementSibling,this.triggerEl?(this._id=this.getAttribute("id")||ar,this.setAttribute("id",this._id),this.style.display="none",this._setTriggerEventListener(),this.addEventListener("mousedown",e=>{this._overlayClicked=!0,setTimeout(n=>this._overlayClicked=!1,100)}),this.addEventListener("mouseenter",e=>{this._overlayMouseEntered=!0}),this.addEventListener("mouseleave",e=>{this._overlayMouseEntered=!1,this.close("trigger:mouseleave")}),setTimeout(e=>rr(this)),this.close("trigger:init")):console.error("[x-trigger] invalid trigger",t)}_setTriggerEventListener(){let t=this.triggerEl,e=(this.getAttribute("trigger-actions")||this.triggerActions||"click,focus").split(","),n=(this.getAttribute("close-actions")||this.closeActions||"blur").split(",");t.setAttribute("aria-controlls",this._id),t.setAttribute("aria-activedescendant",`${this._id}-selected`),e.forEach(i=>{t.addEventListener(i.trim(),s=>this.open(`trigger:${i.trim()}`))}),n.forEach(i=>{t.addEventListener(i.trim(),s=>{if(i.trim()==="blur"){if(this._overlayClicked||this.style.display==="none")return!1;setTimeout(r=>this.close(`trigger:${i.trim()}`),100)}else setTimeout(r=>{if(this._overlayMouseEntered||this.style.display==="none")return!1;this.close(`trigger:${i.trim()}`)},100)})})}};ce.define=Pe("x-overlay",ce);var lr=`x-tooltip {
  position: absolute;
  display: none;
}

@keyframes appear {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

x-tooltip .x-overlay {
  display: block;
  background: #FFF;
  border: 1px solid #ccc;
  padding: 8px;
  box-shadow: 4px 4px 8px #ccc;
  animation: appear .3s;
}

x-tooltip .x-arrow .x-icon{
  position: relative;
  width: 0;
  height: 0;
  display: block;
  z-index: 1;
  transform: translateX(-50%);
}
x-tooltip .x-arrow .x-icon::after {
  content: '';
  width: 0;
  height: 0;
  position: absolute;
  left: -11px;
}

x-tooltip .x-arrow.up .x-icon {
  /* top: 1px; */
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  border-bottom: 12px solid #CCC;
}
x-tooltip .x-arrow.up .x-icon::after {
  border-left: 11px solid transparent;
  border-right: 11px solid transparent;
  border-bottom: 11px solid #FFF;
  top: 2px;
}

x-tooltip .x-arrow.down .x-icon {
  /* bottom: 1px; */
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  border-top: 12px solid #CCC;
}
x-tooltip .x-arrow.down .x-icon::after {
  border-left: 11px solid transparent;
  border-right: 11px solid transparent;
  border-top: 11px solid #FFF;
  bottom: 2px;
}`,Xt=class extends ce{constructor(...t){let e=super(...t);return e.triggerActions="focus, mouseenter, click",e.closeActions="blur, mouseleave",e.showArrow=!0,e._css=lr,e}};Xt.define=Pe("x-tooltip",Xt);var cr=Object.create,ue=Object.defineProperty,ur=Object.getOwnPropertyDescriptor,dr=Object.getOwnPropertyNames,hr=Object.getPrototypeOf,fr=Object.prototype.hasOwnProperty,pr=t=>ue(t,"__esModule",{value:!0}),mr=(t,e)=>function(){return e||(0,t[Object.keys(t)[0]])((e={exports:{}}).exports,e),e.exports},gr=(t,e,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of dr(e))!fr.call(t,i)&&i!=="default"&&ue(t,i,{get:()=>e[i],enumerable:!(n=ur(e,i))||n.enumerable});return t},br=t=>gr(pr(ue(t!=null?cr(hr(t)):{},"default",t&&t.__esModule&&"default"in t?{get:()=>t.default,enumerable:!0}:{value:t,enumerable:!0})),t),xr=mr({"node_modules/tslib/tslib.js"(t,e){var n,i,s,r,o,a,l,c,f,g,v,_,T,F,L,$,M,xt,k,yt,b,A,H,D;(function(y){var rt=typeof global=="object"?global:typeof self=="object"?self:typeof this=="object"?this:{};typeof define=="function"&&define.amd?define("tslib",["exports"],function(u){y(J(rt,J(u)))}):typeof e=="object"&&typeof e.exports=="object"?y(J(rt,J(e.exports))):y(J(rt));function J(u,d){return u!==rt&&(typeof Object.create=="function"?Object.defineProperty(u,"__esModule",{value:!0}):u.__esModule=!0),function(h,m){return u[h]=d?d(h,m):m}}})(function(y){var rt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(u,d){u.__proto__=d}||function(u,d){for(var h in d)Object.prototype.hasOwnProperty.call(d,h)&&(u[h]=d[h])};n=function(u,d){if(typeof d!="function"&&d!==null)throw new TypeError("Class extends value "+String(d)+" is not a constructor or null");rt(u,d);function h(){this.constructor=u}u.prototype=d===null?Object.create(d):(h.prototype=d.prototype,new h)},i=Object.assign||function(u){for(var d,h=1,m=arguments.length;h<m;h++){d=arguments[h];for(var x in d)Object.prototype.hasOwnProperty.call(d,x)&&(u[x]=d[x])}return u},s=function(u,d){var h={};for(var m in u)Object.prototype.hasOwnProperty.call(u,m)&&d.indexOf(m)<0&&(h[m]=u[m]);if(u!=null&&typeof Object.getOwnPropertySymbols=="function")for(var x=0,m=Object.getOwnPropertySymbols(u);x<m.length;x++)d.indexOf(m[x])<0&&Object.prototype.propertyIsEnumerable.call(u,m[x])&&(h[m[x]]=u[m[x]]);return h},r=function(u,d,h,m){var x=arguments.length,p=x<3?d:m===null?m=Object.getOwnPropertyDescriptor(d,h):m,E;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")p=Reflect.decorate(u,d,h,m);else for(var S=u.length-1;S>=0;S--)(E=u[S])&&(p=(x<3?E(p):x>3?E(d,h,p):E(d,h))||p);return x>3&&p&&Object.defineProperty(d,h,p),p},o=function(u,d){return function(h,m){d(h,m,u)}},a=function(u,d){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(u,d)},l=function(u,d,h,m){function x(p){return p instanceof h?p:new h(function(E){E(p)})}return new(h||(h=Promise))(function(p,E){function S(O){try{w(m.next(O))}catch(ot){E(ot)}}function z(O){try{w(m.throw(O))}catch(ot){E(ot)}}function w(O){O.done?p(O.value):x(O.value).then(S,z)}w((m=m.apply(u,d||[])).next())})},c=function(u,d){var h={label:0,sent:function(){if(p[0]&1)throw p[1];return p[1]},trys:[],ops:[]},m,x,p,E;return E={next:S(0),throw:S(1),return:S(2)},typeof Symbol=="function"&&(E[Symbol.iterator]=function(){return this}),E;function S(w){return function(O){return z([w,O])}}function z(w){if(m)throw new TypeError("Generator is already executing.");for(;h;)try{if(m=1,x&&(p=w[0]&2?x.return:w[0]?x.throw||((p=x.return)&&p.call(x),0):x.next)&&!(p=p.call(x,w[1])).done)return p;switch(x=0,p&&(w=[w[0]&2,p.value]),w[0]){case 0:case 1:p=w;break;case 4:return h.label++,{value:w[1],done:!1};case 5:h.label++,x=w[1],w=[0];continue;case 7:w=h.ops.pop(),h.trys.pop();continue;default:if(p=h.trys,!(p=p.length>0&&p[p.length-1])&&(w[0]===6||w[0]===2)){h=0;continue}if(w[0]===3&&(!p||w[1]>p[0]&&w[1]<p[3])){h.label=w[1];break}if(w[0]===6&&h.label<p[1]){h.label=p[1],p=w;break}if(p&&h.label<p[2]){h.label=p[2],h.ops.push(w);break}p[2]&&h.ops.pop(),h.trys.pop();continue}w=d.call(u,h)}catch(O){w=[6,O],x=0}finally{m=p=0}if(w[0]&5)throw w[1];return{value:w[0]?w[1]:void 0,done:!0}}},f=function(u,d){for(var h in u)h!=="default"&&!Object.prototype.hasOwnProperty.call(d,h)&&D(d,u,h)},D=Object.create?function(u,d,h,m){m===void 0&&(m=h),Object.defineProperty(u,m,{enumerable:!0,get:function(){return d[h]}})}:function(u,d,h,m){m===void 0&&(m=h),u[m]=d[h]},g=function(u){var d=typeof Symbol=="function"&&Symbol.iterator,h=d&&u[d],m=0;if(h)return h.call(u);if(u&&typeof u.length=="number")return{next:function(){return u&&m>=u.length&&(u=void 0),{value:u&&u[m++],done:!u}}};throw new TypeError(d?"Object is not iterable.":"Symbol.iterator is not defined.")},v=function(u,d){var h=typeof Symbol=="function"&&u[Symbol.iterator];if(!h)return u;var m=h.call(u),x,p=[],E;try{for(;(d===void 0||d-- >0)&&!(x=m.next()).done;)p.push(x.value)}catch(S){E={error:S}}finally{try{x&&!x.done&&(h=m.return)&&h.call(m)}finally{if(E)throw E.error}}return p},_=function(){for(var u=[],d=0;d<arguments.length;d++)u=u.concat(v(arguments[d]));return u},T=function(){for(var u=0,d=0,h=arguments.length;d<h;d++)u+=arguments[d].length;for(var m=Array(u),x=0,d=0;d<h;d++)for(var p=arguments[d],E=0,S=p.length;E<S;E++,x++)m[x]=p[E];return m},F=function(u,d){for(var h=0,m=d.length,x=u.length;h<m;h++,x++)u[x]=d[h];return u},L=function(u){return this instanceof L?(this.v=u,this):new L(u)},$=function(u,d,h){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var m=h.apply(u,d||[]),x,p=[];return x={},E("next"),E("throw"),E("return"),x[Symbol.asyncIterator]=function(){return this},x;function E(q){m[q]&&(x[q]=function(at){return new Promise(function(ae,yn){p.push([q,at,ae,yn])>1||S(q,at)})})}function S(q,at){try{z(m[q](at))}catch(ae){ot(p[0][3],ae)}}function z(q){q.value instanceof L?Promise.resolve(q.value.v).then(w,O):ot(p[0][2],q)}function w(q){S("next",q)}function O(q){S("throw",q)}function ot(q,at){q(at),p.shift(),p.length&&S(p[0][0],p[0][1])}},M=function(u){var d,h;return d={},m("next"),m("throw",function(x){throw x}),m("return"),d[Symbol.iterator]=function(){return this},d;function m(x,p){d[x]=u[x]?function(E){return(h=!h)?{value:L(u[x](E)),done:x==="return"}:p?p(E):E}:p}},xt=function(u){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var d=u[Symbol.asyncIterator],h;return d?d.call(u):(u=typeof g=="function"?g(u):u[Symbol.iterator](),h={},m("next"),m("throw"),m("return"),h[Symbol.asyncIterator]=function(){return this},h);function m(p){h[p]=u[p]&&function(E){return new Promise(function(S,z){E=u[p](E),x(S,z,E.done,E.value)})}}function x(p,E,S,z){Promise.resolve(z).then(function(w){p({value:w,done:S})},E)}},k=function(u,d){return Object.defineProperty?Object.defineProperty(u,"raw",{value:d}):u.raw=d,u};var J=Object.create?function(u,d){Object.defineProperty(u,"default",{enumerable:!0,value:d})}:function(u,d){u.default=d};yt=function(u){if(u&&u.__esModule)return u;var d={};if(u!=null)for(var h in u)h!=="default"&&Object.prototype.hasOwnProperty.call(u,h)&&D(d,u,h);return J(d,u),d},b=function(u){return u&&u.__esModule?u:{default:u}},A=function(u,d){if(!d.has(u))throw new TypeError("attempted to get private field on non-instance");return d.get(u)},H=function(u,d,h){if(!d.has(u))throw new TypeError("attempted to set private field on non-instance");return d.set(u,h),h},y("__extends",n),y("__assign",i),y("__rest",s),y("__decorate",r),y("__param",o),y("__metadata",a),y("__awaiter",l),y("__generator",c),y("__exportStar",f),y("__createBinding",D),y("__values",g),y("__read",v),y("__spread",_),y("__spreadArrays",T),y("__spreadArray",F),y("__await",L),y("__asyncGenerator",$),y("__asyncDelegator",M),y("__asyncValues",xt),y("__makeTemplateObject",k),y("__importStar",yt),y("__importDefault",b),y("__classPrivateFieldGet",A),y("__classPrivateFieldSet",H)})}}),yr=br(xr()),{__extends:ut,__assign:hl,__rest:fl,__decorate:pl,__param:ml,__metadata:gl,__awaiter:vr,__generator:Ne,__exportStar:bl,__createBinding:xl,__values:de,__read:tt,__spread:yl,__spreadArrays:vl,__spreadArray:dt,__await:he,__asyncGenerator:Er,__asyncDelegator:El,__asyncValues:wr,__makeTemplateObject:wl,__importStar:Fl,__importDefault:_l,__classPrivateFieldGet:Al,__classPrivateFieldSet:Cl}=yr.default;function C(t){return typeof t=="function"}function Fr(t){var e=function(i){Error.call(i),i.stack=new Error().stack},n=t(e);return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var fe=Fr(function(t){return function(n){t(this),this.message=n?n.length+` errors occurred during unsubscription:
`+n.map(function(i,s){return s+1+") "+i.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=n}});function pe(t,e){if(t){var n=t.indexOf(e);0<=n&&t.splice(n,1)}}var Ot=function(){function t(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._teardowns=null}return t.prototype.unsubscribe=function(){var e,n,i,s,r;if(!this.closed){this.closed=!0;var o=this._parentage;if(o)if(this._parentage=null,Array.isArray(o))try{for(var a=de(o),l=a.next();!l.done;l=a.next()){var c=l.value;c.remove(this)}}catch(F){e={error:F}}finally{try{l&&!l.done&&(n=a.return)&&n.call(a)}finally{if(e)throw e.error}}else o.remove(this);var f=this.initialTeardown;if(C(f))try{f()}catch(F){r=F instanceof fe?F.errors:[F]}var g=this._teardowns;if(g){this._teardowns=null;try{for(var v=de(g),_=v.next();!_.done;_=v.next()){var T=_.value;try{Oe(T)}catch(F){r=r??[],F instanceof fe?r=dt(dt([],tt(r)),tt(F.errors)):r.push(F)}}}catch(F){i={error:F}}finally{try{_&&!_.done&&(s=v.return)&&s.call(v)}finally{if(i)throw i.error}}}if(r)throw new fe(r)}},t.prototype.add=function(e){var n;if(e&&e!==this)if(this.closed)Oe(e);else{if(e instanceof t){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._teardowns=(n=this._teardowns)!==null&&n!==void 0?n:[]).push(e)}},t.prototype._hasParent=function(e){var n=this._parentage;return n===e||Array.isArray(n)&&n.includes(e)},t.prototype._addParent=function(e){var n=this._parentage;this._parentage=Array.isArray(n)?(n.push(e),n):n?[n,e]:e},t.prototype._removeParent=function(e){var n=this._parentage;n===e?this._parentage=null:Array.isArray(n)&&pe(n,e)},t.prototype.remove=function(e){var n=this._teardowns;n&&pe(n,e),e instanceof t&&e._removeParent(this)},t.EMPTY=function(){var e=new t;return e.closed=!0,e}(),t}(),Tl=Ot.EMPTY;function Xe(t){return t instanceof Ot||t&&"closed"in t&&C(t.remove)&&C(t.add)&&C(t.unsubscribe)}function Oe(t){C(t)?t():t.unsubscribe()}var et={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},It={setTimeout:function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=It.delegate;return((n==null?void 0:n.setTimeout)||setTimeout).apply(void 0,dt([],tt(t)))},clearTimeout:function(t){var e=It.delegate;return((e==null?void 0:e.clearTimeout)||clearTimeout)(t)},delegate:void 0};function Ie(t){It.setTimeout(function(){var e=et.onUnhandledError;if(e)e(t);else throw t})}function ft(){}var _r=function(){return me("C",void 0,void 0)}();function Ar(t){return me("E",void 0,t)}function Cr(t){return me("N",t,void 0)}function me(t,e,n){return{kind:t,value:e,error:n}}var nt=null;function Tr(t){if(et.useDeprecatedSynchronousErrorHandling){var e=!nt;if(e&&(nt={errorThrown:!1,error:null}),t(),e){var n=nt,i=n.errorThrown,s=n.error;if(nt=null,i)throw s}}else t()}function Sr(t){et.useDeprecatedSynchronousErrorHandling&&nt&&(nt.errorThrown=!0,nt.error=t)}var ge=function(t){ut(e,t);function e(n){var i=t.call(this)||this;return i.isStopped=!1,n?(i.destination=n,Xe(n)&&n.add(i)):i.destination=Lr,i}return e.create=function(n,i,s){return new ze(n,i,s)},e.prototype.next=function(n){this.isStopped?xe(Cr(n),this):this._next(n)},e.prototype.error=function(n){this.isStopped?xe(Ar(n),this):(this.isStopped=!0,this._error(n))},e.prototype.complete=function(){this.isStopped?xe(_r,this):(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this),this.destination=null)},e.prototype._next=function(n){this.destination.next(n)},e.prototype._error=function(n){try{this.destination.error(n)}finally{this.unsubscribe()}},e.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},e}(Ot),ze=function(t){ut(e,t);function e(n,i,s){var r=t.call(this)||this,o;if(C(n))o=n;else if(n){o=n.next,i=n.error,s=n.complete;var a;r&&et.useDeprecatedNextContext?(a=Object.create(n),a.unsubscribe=function(){return r.unsubscribe()}):a=n,o=o==null?void 0:o.bind(a),i=i==null?void 0:i.bind(a),s=s==null?void 0:s.bind(a)}return r.destination={next:o?be(o,r):ft,error:be(i??je,r),complete:s?be(s,r):ft},r}return e}(ge);function be(t,e){return function(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];try{t.apply(void 0,dt([],tt(n)))}catch(s){et.useDeprecatedSynchronousErrorHandling?Sr(s):Ie(s)}}}function je(t){throw t}function xe(t,e){var n=et.onStoppedNotification;n&&It.setTimeout(function(){return n(t,e)})}var Lr={closed:!0,next:ft,error:je,complete:ft},ye=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function Be(t){return t}function kr(t){return t.length===0?Be:t.length===1?t[0]:function(n){return t.reduce(function(i,s){return s(i)},n)}}var G=function(){function t(e){e&&(this._subscribe=e)}return t.prototype.lift=function(e){var n=new t;return n.source=this,n.operator=e,n},t.prototype.subscribe=function(e,n,i){var s=this,r=$r(e)?e:new ze(e,n,i);return Tr(function(){var o=s,a=o.operator,l=o.source;r.add(a?a.call(r,l):l?s._subscribe(r):s._trySubscribe(r))}),r},t.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(n){e.error(n)}},t.prototype.forEach=function(e,n){var i=this;return n=Re(n),new n(function(s,r){var o;o=i.subscribe(function(a){try{e(a)}catch(l){r(l),o==null||o.unsubscribe()}},r,s)})},t.prototype._subscribe=function(e){var n;return(n=this.source)===null||n===void 0?void 0:n.subscribe(e)},t.prototype[ye]=function(){return this},t.prototype.pipe=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return kr(e)(this)},t.prototype.toPromise=function(e){var n=this;return e=Re(e),new e(function(i,s){var r;n.subscribe(function(o){return r=o},function(o){return s(o)},function(){return i(r)})})},t.create=function(e){return new t(e)},t}();function Re(t){var e;return(e=t??et.Promise)!==null&&e!==void 0?e:Promise}function Mr(t){return t&&C(t.next)&&C(t.error)&&C(t.complete)}function $r(t){return t&&t instanceof ge||Mr(t)&&Xe(t)}function qr(t){return C(t==null?void 0:t.lift)}function pt(t){return function(e){if(qr(e))return e.lift(function(n){try{return t(n,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}var ht=function(t){ut(e,t);function e(n,i,s,r,o){var a=t.call(this,n)||this;return a.onFinalize=o,a._next=i?function(l){try{i(l)}catch(c){n.error(c)}}:t.prototype._next,a._error=r?function(l){try{r(l)}catch(c){n.error(c)}finally{this.unsubscribe()}}:t.prototype._error,a._complete=s?function(){try{s()}catch(l){n.error(l)}finally{this.unsubscribe()}}:t.prototype._complete,a}return e.prototype.unsubscribe=function(){var n,i=this.closed;t.prototype.unsubscribe.call(this),!i&&((n=this.onFinalize)===null||n===void 0||n.call(this))},e}(ge),Ue={now:function(){return(Ue.delegate||Date).now()},delegate:void 0},Hr=function(t){ut(e,t);function e(n,i){return t.call(this)||this}return e.prototype.schedule=function(n,i){return i===void 0&&(i=0),this},e}(Ot),zt={setInterval:function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=zt.delegate;return((n==null?void 0:n.setInterval)||setInterval).apply(void 0,dt([],tt(t)))},clearInterval:function(t){var e=zt.delegate;return((e==null?void 0:e.clearInterval)||clearInterval)(t)},delegate:void 0},Dr=function(t){ut(e,t);function e(n,i){var s=t.call(this,n,i)||this;return s.scheduler=n,s.work=i,s.pending=!1,s}return e.prototype.schedule=function(n,i){if(i===void 0&&(i=0),this.closed)return this;this.state=n;var s=this.id,r=this.scheduler;return s!=null&&(this.id=this.recycleAsyncId(r,s,i)),this.pending=!0,this.delay=i,this.id=this.id||this.requestAsyncId(r,this.id,i),this},e.prototype.requestAsyncId=function(n,i,s){return s===void 0&&(s=0),zt.setInterval(n.flush.bind(n,this),s)},e.prototype.recycleAsyncId=function(n,i,s){if(s===void 0&&(s=0),s!=null&&this.delay===s&&this.pending===!1)return i;zt.clearInterval(i)},e.prototype.execute=function(n,i){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var s=this._execute(n,i);if(s)return s;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},e.prototype._execute=function(n,i){var s=!1,r;try{this.work(n)}catch(o){s=!0,r=o||new Error("Scheduled action threw falsy error")}if(s)return this.unsubscribe(),r},e.prototype.unsubscribe=function(){if(!this.closed){var n=this,i=n.id,s=n.scheduler,r=s.actions;this.work=this.state=this.scheduler=null,this.pending=!1,pe(r,this),i!=null&&(this.id=this.recycleAsyncId(s,i,null)),this.delay=null,t.prototype.unsubscribe.call(this)}},e}(Hr),We=function(){function t(e,n){n===void 0&&(n=t.now),this.schedulerActionCtor=e,this.now=n}return t.prototype.schedule=function(e,n,i){return n===void 0&&(n=0),new this.schedulerActionCtor(this,e).schedule(i,n)},t.now=Ue.now,t}(),Pr=function(t){ut(e,t);function e(n,i){i===void 0&&(i=We.now);var s=t.call(this,n,i)||this;return s.actions=[],s._active=!1,s._scheduled=void 0,s}return e.prototype.flush=function(n){var i=this.actions;if(this._active){i.push(n);return}var s;this._active=!0;do if(s=n.execute(n.state,n.delay))break;while(n=i.shift());if(this._active=!1,s){for(;n=i.shift();)n.unsubscribe();throw s}},e}(We),Ye=new Pr(Dr),Nr=Ye;function Xr(t){return t&&C(t.schedule)}var Ve=function(t){return t&&typeof t.length=="number"&&typeof t!="function"};function Or(t){return C(t==null?void 0:t.then)}function Ir(t){return C(t[ye])}function zr(t){return Symbol.asyncIterator&&C(t==null?void 0:t[Symbol.asyncIterator])}function jr(t){return new TypeError("You provided "+(t!==null&&typeof t=="object"?"an invalid object":"'"+t+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function Br(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Rr=Br();function Ur(t){return C(t==null?void 0:t[Rr])}function Wr(t){return Er(this,arguments,function(){var n,i,s,r;return Ne(this,function(o){switch(o.label){case 0:n=t.getReader(),o.label=1;case 1:o.trys.push([1,,9,10]),o.label=2;case 2:return[4,he(n.read())];case 3:return i=o.sent(),s=i.value,r=i.done,r?[4,he(void 0)]:[3,5];case 4:return[2,o.sent()];case 5:return[4,he(s)];case 6:return[4,o.sent()];case 7:return o.sent(),[3,2];case 8:return[3,10];case 9:return n.releaseLock(),[7];case 10:return[2]}})})}function Yr(t){return C(t==null?void 0:t.getReader)}function jt(t){if(t instanceof G)return t;if(t!=null){if(Ir(t))return Vr(t);if(Ve(t))return Gr(t);if(Or(t))return Kr(t);if(zr(t))return Ge(t);if(Ur(t))return Zr(t);if(Yr(t))return Jr(t)}throw jr(t)}function Vr(t){return new G(function(e){var n=t[ye]();if(C(n.subscribe))return n.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function Gr(t){return new G(function(e){for(var n=0;n<t.length&&!e.closed;n++)e.next(t[n]);e.complete()})}function Kr(t){return new G(function(e){t.then(function(n){e.closed||(e.next(n),e.complete())},function(n){return e.error(n)}).then(null,Ie)})}function Zr(t){return new G(function(e){var n,i;try{for(var s=de(t),r=s.next();!r.done;r=s.next()){var o=r.value;if(e.next(o),e.closed)return}}catch(a){n={error:a}}finally{try{r&&!r.done&&(i=s.return)&&i.call(s)}finally{if(n)throw n.error}}e.complete()})}function Ge(t){return new G(function(e){Qr(t,e).catch(function(n){return e.error(n)})})}function Jr(t){return Ge(Wr(t))}function Qr(t,e){var n,i,s,r;return vr(this,void 0,void 0,function(){var o,a;return Ne(this,function(l){switch(l.label){case 0:l.trys.push([0,5,6,11]),n=wr(t),l.label=1;case 1:return[4,n.next()];case 2:if(i=l.sent(),!!i.done)return[3,4];if(o=i.value,e.next(o),e.closed)return[2];l.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return a=l.sent(),s={error:a},[3,11];case 6:return l.trys.push([6,,9,10]),i&&!i.done&&(r=n.return)?[4,r.call(n)]:[3,8];case 7:l.sent(),l.label=8;case 8:return[3,10];case 9:if(s)throw s.error;return[7];case 10:return[7];case 11:return e.complete(),[2]}})})}function to(t,e,n,i,s){i===void 0&&(i=0),s===void 0&&(s=!1);var r=e.schedule(function(){n(),s?t.add(this.schedule(null,i)):this.unsubscribe()},i);if(t.add(r),!s)return r}function eo(t){return t instanceof Date&&!isNaN(t)}function Ke(t,e){return pt(function(n,i){var s=0;n.subscribe(new ht(i,function(r){i.next(t.call(e,r,s++))}))})}var no=Array.isArray;function io(t,e){return no(e)?t.apply(void 0,dt([],tt(e))):t(e)}function so(t){return Ke(function(e){return io(t,e)})}function ro(t,e,n,i,s,r,o,a){var l=[],c=0,f=0,g=!1,v=function(){g&&!l.length&&!c&&e.complete()},_=function(F){return c<i?T(F):l.push(F)},T=function(F){r&&e.next(F),c++;var L=!1;jt(n(F,f++)).subscribe(new ht(e,function($){s==null||s($),r?_($):e.next($)},function(){L=!0},void 0,function(){if(L)try{c--;for(var $=function(){var M=l.shift();o?to(e,o,function(){return T(M)}):T(M)};l.length&&c<i;)$();v()}catch(M){e.error(M)}}))};return t.subscribe(new ht(e,_,function(){g=!0,v()})),function(){a==null||a()}}function Ze(t,e,n){return n===void 0&&(n=1/0),C(e)?Ze(function(i,s){return Ke(function(r,o){return e(i,r,s,o)})(jt(t(i,s)))},n):(typeof e=="number"&&(n=e),pt(function(i,s){return ro(i,s,t,n)}))}var oo=["addListener","removeListener"],ao=["addEventListener","removeEventListener"],lo=["on","off"];function ve(t,e,n,i){if(C(n)&&(i=n,n=void 0),i)return ve(t,e,n).pipe(so(i));var s=tt(ho(t)?ao.map(function(a){return function(l){return t[a](e,l,n)}}):co(t)?oo.map(Je(t,e)):uo(t)?lo.map(Je(t,e)):[],2),r=s[0],o=s[1];if(!r&&Ve(t))return Ze(function(a){return ve(a,e,n)})(jt(t));if(!r)throw new TypeError("Invalid event target");return new G(function(a){var l=function(){for(var c=[],f=0;f<arguments.length;f++)c[f]=arguments[f];return a.next(1<c.length?c:c[0])};return r(l),function(){return o(l)}})}function Je(t,e){return function(n){return function(i){return t[n](e,i)}}}function co(t){return C(t.addListener)&&C(t.removeListener)}function uo(t){return C(t.on)&&C(t.off)}function ho(t){return C(t.addEventListener)&&C(t.removeEventListener)}function fo(t,e,n){t===void 0&&(t=0),n===void 0&&(n=Nr);var i=-1;return e!=null&&(Xr(e)?n=e:i=e),new G(function(s){var r=eo(t)?+t-n.now():t;r<0&&(r=0);var o=0;return n.schedule(function(){s.closed||(s.next(o++),0<=i?this.schedule(void 0,i):s.complete())},r)})}function po(t,e){return e===void 0&&(e=Ye),pt(function(n,i){var s=null,r=null,o=null,a=function(){if(s){s.unsubscribe(),s=null;var c=r;r=null,i.next(c)}};function l(){var c=o+t,f=e.now();if(f<c){s=this.schedule(void 0,c-f),i.add(s);return}a()}n.subscribe(new ht(i,function(c){r=c,o=e.now(),s||(s=e.schedule(l,t),i.add(s))},function(){a(),i.complete()},void 0,function(){r=s=null}))})}function mo(t){return pt(function(e,n){jt(t).subscribe(new ht(n,function(){return n.complete()},ft)),!n.closed&&e.subscribe(n)})}function go(t,e,n){var i=C(t)||e||n?{next:t,error:e,complete:n}:t;return i?pt(function(s,r){var o;(o=i.subscribe)===null||o===void 0||o.call(i);var a=!0;s.subscribe(new ht(r,function(l){var c;(c=i.next)===null||c===void 0||c.call(i,l),r.next(l)},function(){var l;a=!1,(l=i.complete)===null||l===void 0||l.call(i),r.complete()},function(l){var c;a=!1,(c=i.error)===null||c===void 0||c.call(i,l),r.error(l)},function(){var l,c;a&&((l=i.unsubscribe)===null||l===void 0||l.call(i)),(c=i.finalize)===null||c===void 0||c.call(i)}))}):Be}var bo=`x-ul > ul,
x-ul > * > ul {
  padding-left: 0;
}
x-ul ul {
  list-style: none;
}
x-ul li {
  cursor: pointer;
  margin: 0;
  line-height: 28px;
}
x-ul li:not(.x-has-list)::before {
  content: '\u2022';
  display: inline-block;
  width: 16px;
}
x-ul .x-highlighted {
  background: #ccc;
}

/* with ul/li */
x-ul li > ul {
  border-left: 1px dashed black;
}
x-ul li.x-has-list[aria-expanded] {
  background: #f9f9f9;
}
x-ul li.x-has-list[aria-expanded].x-highlighted {
  background: #ccc;
}
x-ul li:not([aria-expanded]) > ul,
x-ul li:not([aria-expanded]) > * > ul {
  display: none;
}
x-ul li.x-has-list[aria-expanded] > ul,
x-ul li.x-has-list[aria-expanded] > * > ul {
  background: #FFF;
  padding-left: 16px;
}
x-ul li.x-has-list[aria-expanded]::before {
  content: '\u229F';
  display: inline-block;
  width: 16px;
}
x-ul li.x-has-list:not([aria-expanded])::before {
  content: '\u229E';
  display: inline-block;
  width: 16px;
}
`;function xo(t,e){let n=t.tagName.toLowerCase(),i=n==="x-input"&&t.getAttribute("type"),s=i?`-${i}`:"",r=`${n}${s}`;if(document.querySelector(`style[${r}]`)){let o=document.querySelector(`style[${r}]`);o.createdAt=new Date().getTime()}else{let o=document.createElement("style");return o.setAttribute(r,""),o.appendChild(document.createTextNode(e)),document.head.appendChild(o),o.createdAt=new Date().getTime(),o}}function yo(t){let e=t.tagName.toLowerCase(),n=e==="x-input"&&t.getAttribute("type"),i=n?`-${n}`:"",s=`${e}${i}`,r=document.body.querySelectorAll(`${s}`).length;if(document.querySelector(`style[${s}]`)&&r<1){let a=document.querySelector(`style[${s}]`);new Date().getTime()>a.createdAt+500&&a.remove()}}function vo(t,e){return function(n,i){n=n||t,i=i||e,customElements.get(n)||customElements.define(n,i)}}function Eo(t,e={}){e=Object.assign({debounce:100,expires:2e3},e);let n=new MutationObserver(s=>{t.dispatchEvent(new CustomEvent("dom-change",{detail:s}))});n.observe(t,{attributes:!1,childList:!0,subtree:!0});let i;return e.expires?(setTimeout(s=>n.disconnect(),e.expires),i=mo(fo(e.expires))):i=go(s=>s),setTimeout(s=>t.dispatchEvent(new CustomEvent("dom-change"))),ve(t,"dom-change").pipe(i,po(e.debounce))}var Bt=class extends HTMLElement{constructor(...t){let e=super(...t);return this._selected,this._dropdown,e}connectedCallback(){xo(this,bo),Eo(this).subscribe(t=>{this._init(),this._initHighlightAndSelect(this._selected)})}disconnectedCallback(){yo(this)}_init(){this._selected=this.getAttribute("selected"),this._expandAll=this.getAttribute("expanded"),this._dropdown=this.classList.contains("dropdown"),this.setAttribute("tabindex",0);let t=this._keydownHandler.bind(this);if(this.removeEventListener("keydown",t),this.addEventListener("keydown",t),this._dropdown){let e=function(n){Array.from(this.querySelectorAll("[aria-expanded]")).forEach(i=>{i.removeAttribute("aria-expanded")})};this.removeEventListener("mouseleave",e),this.addEventListener("mouseleave",e)}this.querySelectorAll("li > ul, li > * > ul").forEach(e=>{let n=e.closest("li");if(n.classList.add("x-has-list"),n.parentElement.setAttribute("aria-has-popup",""),this._expandAll&&n.setAttribute("aria-expanded",""),this._dropdown){let i=this._toggleAriaExpanded(n);n.removeEventListener("mouseenter",s=>i),n.addEventListener("mouseenter",s=>i)}}),this.querySelectorAll("li").forEach(e=>{let n=this._liClickHandler.bind(this);e.removeEventListener("click",n),e.addEventListener("click",n)})}_initHighlightAndSelect(t){if(t){let e=this.querySelector("#"+t);if(e){e.classList.add("x-highlighted");let n=e.parentElement.closest("li.x-has-list");for(;n;)n.setAttribute("aria-expanded",""),n=n.parentElement.closest("li.x-has-list")}}this._fireSelect(this.querySelector(".x-highlighted"))}_fireSelect(t){let e=this.querySelector(".x-highlighted");e&&e.classList.remove("x-highlighted"),t&&t.offsetParent!==null&&(t.classList.add("x-highlighted"),this.dispatchEvent(new CustomEvent("x-select",{bubbles:!0,detail:t})))}_toggleAriaExpanded(t){if(t.getAttribute("aria-expanded")!==null)t.removeAttribute("aria-expanded");else{if(this._dropdown){let n=Array.from(t.parentElement.children).find(i=>i.getAttribute("aria-expanded")!==null);n&&n.removeAttribute("aria-expanded")}t.setAttribute("aria-expanded","")}}_liClickHandler(t){let e=t.target.closest("li");t.target.isSameNode(e)?e.classList.contains("x-has-list")&&this._toggleAriaExpanded(e):this._fireSelect(e),t.stopPropagation()}_keydownHandler(t){if(["INPUT","TEXTAREA"].includes(document.activeElement.tagName))return;let e=this.querySelector(".x-highlighted"),n=e.classList.contains("x-has-list");["Enter","Space"].includes(t.code)?(e&&n&&this._toggleAriaExpanded(e),t.code==="Enter"&&this._fireSelect(e)):["ArrowUp","ArrowLeft"].includes(t.code)?this._highlightEl(-1):["ArrowDown","ArrowRight"].includes(t.code)&&this._highlightEl(1),["Enter","Space","ArrowUp","ArrowLeft","ArrowDown","ArrowRight"].includes(t.code)&&(t.stopPropagation(),t.preventDefault())}_highlightEl(t){let e=this.querySelectorAll("li"),n=Array.from(e).filter(o=>o.offsetParent!==null),i=this.querySelector(".x-highlighted"),s=n.indexOf(i),r=(n.length+s+t)%n.length;i&&i.classList.remove("x-highlighted"),n[r]&&n[r].classList.add("x-highlighted")}};Bt.define=vo("x-ul",Bt);function wo(t,e){let n=t.tagName.toLowerCase(),i=n==="x-input"&&t.getAttribute("type"),s=i?`-${i}`:"",r=`${n}${s}`;if(document.querySelector(`style[${r}]`)){let o=document.querySelector(`style[${r}]`);o.createdAt=new Date().getTime()}else{let o=document.createElement("style");return o.setAttribute(r,""),o.appendChild(document.createTextNode(e)),document.head.appendChild(o),o.createdAt=new Date().getTime(),o}}function Fo(t){let e=t.tagName.toLowerCase(),n=e==="x-input"&&t.getAttribute("type"),i=n?`-${n}`:"",s=`${e}${i}`,r=document.body.querySelectorAll(`${s}`).length;if(document.querySelector(`style[${s}]`)&&r<1){let a=document.querySelector(`style[${s}]`);new Date().getTime()>a.createdAt+500&&a.remove()}}function _o(t,e){return function(n,i){n=n||t,i=i||e,customElements.get(n)||customElements.define(n,i)}}var Qe=`x-snackbar {
  position: fixed;
  bottom: 0;
  margin: 0 auto;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}
x-snackbar.left {
  left: 0;
  right: auto;
  transform: none;
}
x-snackbar.right {
  left: auto;
  right: 0;
  transform: none;
}
x-snackbar.green > .x-message {
  background: green;
}
x-snackbar.red > .x-message {
  background: red;
}

x-snackbar > .x-message {
  transition: all .3s;
  background: #333;
  color: #FFF;
  margin: 4px;
  padding: 8px;
  border-radius: 4px;
  animation: fadein .5s;
  min-width: 200px;
}

@keyframes fadein {
  from { opacity: 0; } 
  to { opacity: 1; }
}`,Rt=class extends HTMLElement{connectedCallback(){Qe&&wo(this,Qe)}disconnectedCallback(){Fo(this)}addMessage(t,e={}){e.class&&(this.className=e.class);let n=document.createElement("div");n.classList.add("x-message"),n.innerText=t,this.appendChild(n),setTimeout(i=>this.removeMessage(n),e.duration||5e3)}removeMessage(t){t.style.opacity="0",setTimeout(e=>{t.remove(),this.children.length||this.remove()},300)}};Rt.define=_o("x-snackbar",Rt);var Ao=`<div class="x-blocker" aria-label="dialog backdrop"></div>

<div class="x-dialog" role="dialog" aria-modal="true">
  <button class="x-close-button" aria-lable="close dialog">x</button>
  <slot></slot>
</div>`,Co=`x-dialog.x-visible {
  display: block;
}
x-dialog {
  display: none;
}

x-dialog .x-blocker {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1;
}

x-dialog .x-dialog {
  position: fixed;
  box-shadow: 8px 8px 16px #999;
  background-color: white;
  border-radius: 4px;
  padding: 12px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: appear .3s;
  z-index: 1;
  min-width: 320px;
  min-height: 120px;
}

@keyframes appear {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

x-dialog .x-dialog .x-close-button {
  position: absolute;
  top: 0;
  cursor: pointer;
  right: 8px;
  border: 0;
  background: transparent;
  opacity: .5;
}
x-dialog .x-dialog .x-close-button:hover {
  opacity: 1;
}

x-dialog.not-closable .x-dialog .x-close-button {
  display: none;
}
x-dialog.not-closable .x-blocker {
  pointer-events: none;
}`;function To(t,e,n=0){return new Promise(function(i,s){e?setTimeout(function(){if(e.indexOf("</slot>")){let o=e.replace("<slot></slot>",t.innerHTML);t.innerHTML=o}else t.innerHTML=e;ko(t),i(!0)},n):i(!1)})}function So(t,e){let n=t.tagName.toLowerCase(),i=n==="x-input"&&t.getAttribute("type"),s=i?`-${i}`:"",r=`${n}${s}`;if(document.querySelector(`style[${r}]`)){let o=document.querySelector(`style[${r}]`);o.createdAt=new Date().getTime()}else{let o=document.createElement("style");return o.setAttribute(r,""),o.appendChild(document.createTextNode(e)),document.head.appendChild(o),o.createdAt=new Date().getTime(),o}}function Lo(t){let e=t.tagName.toLowerCase(),n=e==="x-input"&&t.getAttribute("type"),i=n?`-${n}`:"",s=`${e}${i}`,r=document.body.querySelectorAll(`${s}`).length;if(document.querySelector(`style[${s}]`)&&r<1){let a=document.querySelector(`style[${s}]`);new Date().getTime()>a.createdAt+500&&a.remove()}}function ko(t){t.querySelectorAll("script").forEach(e=>{let n=document.createElement("script");Array.from(e.attributes).forEach(i=>n.setAttribute(i.name,i.value)),n.appendChild(document.createTextNode(e.innerText));try{t.replaceChild(n,e)}catch{t.appendChild(n)}})}function Mo(t,e=500){var n;return function(...i){var s=this,r=function(){n=null,t.apply(s,i)};clearTimeout(n),n=setTimeout(r,e)}}function $o(t,e){return e=Object.assign({wait:100,attributes:!1,childList:!0,subtree:!0},e),new Promise(n=>{let i=!1,s=new MutationObserver(a=>{i=!0,t.dispatchEvent(new CustomEvent("dom-changed",{detail:a,bubbles:!0}))});s.observe(t,e);let r=Mo(o,e.wait)();function o(){n(t),s.disconnect(t),t.removeEventListener("dom-change",r)}t.addEventListener("dom-change",r),setTimeout(a=>{!i&&n(t)},e.wait)})}function qo(t,e){return function(n,i){n=n||t,i=i||e,customElements.get(n)||customElements.define(n,i)}}var Ut=class extends HTMLElement{constructor(...t){let e=super(...t);return this.triggerEl,e}connectedCallback(){So(this,Co),To(this,Ao).then(t=>{this._lastActiveEl=document.activeElement,this.setAttribute("tabindex","-1"),this.closable=this.getAttribute("closable")!=="false",!this.closable&&this.classList.add("not-closable"),this._setEventListener();let e=this.getAttribute("trigger");this.triggerEl=document.getElementById(e),e&&this.triggerEl&&(this.triggerEl.addEventListener("click",n=>this.open()),this.triggerEl.addEventListener("keydown",n=>n.key==="Enter"&&this.open()))})}disconnectedCallback(){Lo(this)}open(){this.classList.add("x-visible"),document.body.style.overflow="hidden",$o(this).then(t=>{this._trapFocus(this.querySelector(".x-dialog")),this.dispatchEvent(new CustomEvent("x-dialog-open",{bubbles:!0})),this.focus()})}close(){this.classList.remove("x-visible"),this._lastActiveEl.isSameNode(document.body)||this._lastActiveEl&&this._lastActiveEl.focus(),document.body.style.overflow="auto",this.dispatchEvent(new CustomEvent("x-dialog-close",{bubbles:!0}))}_setEventListener(){this.querySelector(".x-blocker").addEventListener("click",this.close.bind(this)),this.querySelector(".x-close-button").addEventListener("click",this.close.bind(this)),this.addEventListener("keydown",this._onKeydown.bind(this))}_onKeydown(t){t.key==="Escape"&&this.close()}_trapFocus(t){t.setAttribute("tabindex",t.getAttribute("tabindex")||"-1");let e=Array.from(t.querySelectorAll('a[href], button, textarea, input[type="text"],input[type="radio"], input[type="checkbox"], select, [tabindex]')).filter(s=>{let r=s.getAttribute("tabindex")||"0";return!s.disabled&&r!=="-1"}),n=e[0],i=e[e.length-1];t.addEventListener("keydown",function(s){s.keyCode===9&&(s.shiftKey?document.activeElement===n&&(i.focus(),s.preventDefault()):document.activeElement===i&&(n.focus(),s.preventDefault()))})}};Ut.define=qo("x-dialog",Ut);function Ho(t,e,n=0){return new Promise(function(i,s){e?setTimeout(function(){if(e.indexOf("</slot>")){let o=e.replace("<slot></slot>",t.innerHTML);t.innerHTML=o}else t.innerHTML=e;No(t),i(!0)},n):i(!1)})}function Do(t,e){let n=t.tagName.toLowerCase(),i=n==="x-input"&&t.getAttribute("type"),s=i?`-${i}`:"",r=`${n}${s}`;if(document.querySelector(`style[${r}]`)){let o=document.querySelector(`style[${r}]`);o.createdAt=new Date().getTime()}else{let o=document.createElement("style");return o.setAttribute(r,""),o.appendChild(document.createTextNode(e)),document.head.appendChild(o),o.createdAt=new Date().getTime(),o}}function Po(t){let e=t.tagName.toLowerCase(),n=e==="x-input"&&t.getAttribute("type"),i=n?`-${n}`:"",s=`${e}${i}`,r=document.body.querySelectorAll(`${s}`).length;if(document.querySelector(`style[${s}]`)&&r<1){let a=document.querySelector(`style[${s}]`);new Date().getTime()>a.createdAt+500&&a.remove()}}function No(t){t.querySelectorAll("script").forEach(e=>{let n=document.createElement("script");Array.from(e.attributes).forEach(i=>n.setAttribute(i.name,i.value)),n.appendChild(document.createTextNode(e.innerText));try{t.replaceChild(n,e)}catch{t.appendChild(n)}})}function Xo(t,e){return function(n,i){n=n||t,i=i||e,customElements.get(n)||customElements.define(n,i)}}var Oo=`x-accordion {
  display: block;
  background-color: #fff;
  border: 1px solid rgba(0,0,0,.125);
  border-top-left-radius: calc(.25rem - 1px);
  border-top-right-radius: calc(.25rem - 1px);
}
x-accordion + x-accordion {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
x-accordion > .accordion-button {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 1rem 1.25rem;
    font-size: 1rem;
    color: #212529;
    text-align: left;
    background-color: #fff;
    border: 0;
    border-radius: 0;
    overflow-anchor: none;
    transition: color .15s ease-in-out,
      background-color .15s ease-in-out,
      border-color .15s ease-in-out, 
      box-shadow .15s ease-in-out,
      border-radius .15s ease;
}
x-accordion.expanded > .accordion-button {
    color: #0c63e4;
    background-color: #e7f1ff;
    box-shadow: inset 0 -1px 0 rgb(0 0 0 / 13%);
}

x-accordion > .accordion-button::after {
    flex-shrink: 0;
    width: 1.25rem;
    height: 1.25rem;
    margin-left: auto;
    content: "";
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-size: 1.25rem;
    transition: transform .2s ease-in-out;
}
x-accordion.expanded > .accordion-button::after {
    transform: rotate(-180deg);
}

x-accordion.expanded > .accordion-button + * {
  max-height: 1000px;
  padding: 1rem 1.25rem;
  transition: max-height .2s ease-in-out;
}

x-accordion > .accordion-button + * {
  display: block;
  padding: 0 1.25rem;
  overflow-y: hidden; 
  max-height: 0;
}`,Io=`<button class="accordion-button" type="button" 
  aria-expanded="false"
  aria-controls="accordion-contents">
  LABEL GOES HERE
</button>
<div id="accordion-contents">
  <slot></slot>
</div>`,Wt=class extends HTMLElement{constructor(...t){return super(...t)}connectedCallback(){Do(this,Oo),this.label=this.getAttribute("label"),Ho(this,Io).then(t=>{let e=this.querySelector(".accordion-button");e.innerText=this.label,e.addEventListener("click",n=>{this.classList.toggle("expanded")})})}disconnectedCallback(){Po(this)}};Wt.define=Xo("x-accordion",Wt);function zo(t,e){let n=t.tagName.toLowerCase(),i=n==="x-input"&&t.getAttribute("type"),s=i?`-${i}`:"",r=`${n}${s}`;if(document.querySelector(`style[${r}]`)){let o=document.querySelector(`style[${r}]`);o.createdAt=new Date().getTime()}else{let o=document.createElement("style");return o.setAttribute(r,""),o.appendChild(document.createTextNode(e)),document.head.appendChild(o),o.createdAt=new Date().getTime(),o}}function jo(t){let e=t.tagName.toLowerCase(),n=e==="x-input"&&t.getAttribute("type"),i=n?`-${n}`:"",s=`${e}${i}`,r=document.body.querySelectorAll(`${s}`).length;if(document.querySelector(`style[${s}]`)&&r<1){let a=document.querySelector(`style[${s}]`);new Date().getTime()>a.createdAt+500&&a.remove()}}function Bo(t,e){return function(n,i){n=n||t,i=i||e,customElements.get(n)||customElements.define(n,i)}}var Ro=`x-clipboard {
  position: relative;
  cursor: pointer;
  line-height: 1.5;
}

x-clipboard:before, x-clipboard:after {
  left: 50%;
  top: 100%;
  opacity: 0;
  transform: translate(-50%, 0);
  transition: all 0.18s ease-out 0.18s;
  position: absolute;
  z-index: 10;
}

x-clipboard:before {
  background: no-repeat url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http://www.w3.org/2000/svg%22%20width%3D%2236px%22%20height%3D%2212px%22%3E%3Cpath%20fill%3D%22rgba(17, 17, 17, 0.9)%22%20transform%3D%22rotate(180 18 6)%22%20d%3D%22M2.658,0.000%20C-13.615,0.000%2050.938,0.000%2034.662,0.000%20C28.662,0.000%2023.035,12.002%2018.660,12.002%20C14.285,12.002%208.594,0.000%202.658,0.000%20Z%22/%3E%3C/svg%3E");
  background-size: 100% auto;
  width: 18px;
  height: 6px;
  margin-top: 5px;
  content: '';
}

x-clipboard:after {
  margin-top: 11px;
  pointer-events: none;
  font-family: sans-serif;
  background: rgba(33,37,41,0.9);
  border-radius: 4px;
  color: #fff;
  content: attr(label);
  padding: 8px 12px;
  white-space: nowrap;
}

x-clipboard:hover:before, 
x-clipboard:hover:after {
  opacity: 1;
  pointer-events: auto;
}

x-clipboard:hover {
  color: #f76707;
}`,Yt=class extends HTMLElement{constructor(...t){return super(...t)}connectedCallback(){zo(this,Ro),this._init()}disonnectedCallback(){jo(this)}_init(){this.label=this.getAttribute("label")||"Copy this",!this.getAttribute("label")&&this.setAttribute("label",this.label),this.addEventListener("click",t=>{this._copyText(this.innerText),this.setAttribute("label","Copied")}),this.addEventListener("mouseleave",t=>{setTimeout(e=>{this.setAttribute("label",this.label)},500)})}_copyText(t){var e=document.createElement("input");e.value=t,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)}};Yt.define=Bo("x-clipboard",Yt);function Uo(t,e){return function(n,i){n=n||t,i=i||e,customElements.get(n)||customElements.define(n,i)}}var Wo=[{flag:"\u{1F3C1}",name:"Chequered Flag"},{flag:"\u{1F6A9}",name:"Triangular Flag"},{flag:"\u{1F38C}",name:"Crossed Flags"},{flag:"\u{1F3F4}",name:"Black Flag"},{flag:"\u{1F3F3}\uFE0F",name:"White Flag"},{flag:"\u{1F3F3}\uFE0F\u200D\u{1F308}",name:"Rainbow Flag"},{flag:"\u{1F3F4}\u200D\u2620\uFE0F",name:"Pirate Flag"},{flag:"\u{1F1E6}\u{1F1E8}",name:"Ascension Island"},{flag:"\u{1F1E6}\u{1F1E9}",name:"Andorra"},{flag:"\u{1F1E6}\u{1F1EA}",name:"United Arab Emirates"},{flag:"\u{1F1E6}\u{1F1EB}",name:"Afghanistan"},{flag:"\u{1F1E6}\u{1F1EC}",name:"Antigua & Barbuda"},{flag:"\u{1F1E6}\u{1F1EE}",name:"Anguilla"},{flag:"\u{1F1E6}\u{1F1F1}",name:"Albania"},{flag:"\u{1F1E6}\u{1F1F2}",name:"Armenia"},{flag:"\u{1F1E6}\u{1F1F4}",name:"Angola"},{flag:"\u{1F1E6}\u{1F1F6}",name:"Antarctica"},{flag:"\u{1F1E6}\u{1F1F7}",name:"Argentina"},{flag:"\u{1F1E6}\u{1F1F8}",name:"American Samoa"},{flag:"\u{1F1E6}\u{1F1F9}",name:"Austria"},{flag:"\u{1F1E6}\u{1F1FA}",name:"Australia"},{flag:"\u{1F1E6}\u{1F1FC}",name:"Aruba"},{flag:"\u{1F1E6}\u{1F1FD}",name:"\xC5land Islands"},{flag:"\u{1F1E6}\u{1F1FF}",name:"Azerbaijan"},{flag:"\u{1F1E7}\u{1F1E6}",name:"Bosnia & Herzegovina"},{flag:"\u{1F1E7}\u{1F1E7}",name:"Barbados"},{flag:"\u{1F1E7}\u{1F1E9}",name:"Bangladesh"},{flag:"\u{1F1E7}\u{1F1EA}",name:"Belgium"},{flag:"\u{1F1E7}\u{1F1EB}",name:"Burkina Faso"},{flag:"\u{1F1E7}\u{1F1EC}",name:"Bulgaria"},{flag:"\u{1F1E7}\u{1F1ED}",name:"Bahrain"},{flag:"\u{1F1E7}\u{1F1EE}",name:"Burundi"},{flag:"\u{1F1E7}\u{1F1EF}",name:"Benin"},{flag:"\u{1F1E7}\u{1F1F1}",name:"St. Barth\xE9lemy"},{flag:"\u{1F1E7}\u{1F1F2}",name:"Bermuda"},{flag:"\u{1F1E7}\u{1F1F3}",name:"Brunei"},{flag:"\u{1F1E7}\u{1F1F4}",name:"Bolivia"},{flag:"\u{1F1E7}\u{1F1F6}",name:"Caribbean Netherlands"},{flag:"\u{1F1E7}\u{1F1F7}",name:"Brazil"},{flag:"\u{1F1E7}\u{1F1F8}",name:"Bahamas"},{flag:"\u{1F1E7}\u{1F1F9}",name:"Bhutan"},{flag:"\u{1F1E7}\u{1F1FB}",name:"Bouvet Island"},{flag:"\u{1F1E7}\u{1F1FC}",name:"Botswana"},{flag:"\u{1F1E7}\u{1F1FE}",name:"Belarus"},{flag:"\u{1F1E7}\u{1F1FF}",name:"Belize"},{flag:"\u{1F1E8}\u{1F1E6}",name:"Canada"},{flag:"\u{1F1E8}\u{1F1E8}",name:"Cocos (Keeling) Islands"},{flag:"\u{1F1E8}\u{1F1E9}",name:"Congo - Kinshasa"},{flag:"\u{1F1E8}\u{1F1EB}",name:"Central African Republic"},{flag:"\u{1F1E8}\u{1F1EC}",name:"Congo - Brazzaville"},{flag:"\u{1F1E8}\u{1F1ED}",name:"Switzerland"},{flag:"\u{1F1E8}\u{1F1EE}",name:"C\xF4te d\u2019Ivoire"},{flag:"\u{1F1E8}\u{1F1F0}",name:"Cook Islands"},{flag:"\u{1F1E8}\u{1F1F1}",name:"Chile"},{flag:"\u{1F1E8}\u{1F1F2}",name:"Cameroon"},{flag:"\u{1F1E8}\u{1F1F3}",name:"China"},{flag:"\u{1F1E8}\u{1F1F4}",name:"Colombia"},{flag:"\u{1F1E8}\u{1F1F5}",name:"Clipperton Island"},{flag:"\u{1F1E8}\u{1F1F7}",name:"Costa Rica"},{flag:"\u{1F1E8}\u{1F1FA}",name:"Cuba"},{flag:"\u{1F1E8}\u{1F1FB}",name:"Cape Verde"},{flag:"\u{1F1E8}\u{1F1FC}",name:"Cura\xE7ao"},{flag:"\u{1F1E8}\u{1F1FD}",name:"Christmas Island"},{flag:"\u{1F1E8}\u{1F1FE}",name:"Cyprus"},{flag:"\u{1F1E8}\u{1F1FF}",name:"Czechia"},{flag:"\u{1F1E9}\u{1F1EA}",name:"Germany"},{flag:"\u{1F1E9}\u{1F1EC}",name:"Diego Garcia"},{flag:"\u{1F1E9}\u{1F1EF}",name:"Djibouti"},{flag:"\u{1F1E9}\u{1F1F0}",name:"Denmark"},{flag:"\u{1F1E9}\u{1F1F2}",name:"Dominica"},{flag:"\u{1F1E9}\u{1F1F4}",name:"Dominican Republic"},{flag:"\u{1F1E9}\u{1F1FF}",name:"Algeria"},{flag:"\u{1F1EA}\u{1F1E6}",name:"Ceuta & Melilla"},{flag:"\u{1F1EA}\u{1F1E8}",name:"Ecuador"},{flag:"\u{1F1EA}\u{1F1EA}",name:"Estonia"},{flag:"\u{1F1EA}\u{1F1EC}",name:"Egypt"},{flag:"\u{1F1EA}\u{1F1ED}",name:"Western Sahara"},{flag:"\u{1F1EA}\u{1F1F7}",name:"Eritrea"},{flag:"\u{1F1EA}\u{1F1F8}",name:"Spain"},{flag:"\u{1F1EA}\u{1F1F9}",name:"Ethiopia"},{flag:"\u{1F1EA}\u{1F1FA}",name:"European Union"},{flag:"\u{1F1EB}\u{1F1EE}",name:"Finland"},{flag:"\u{1F1EB}\u{1F1EF}",name:"Fiji"},{flag:"\u{1F1EB}\u{1F1F0}",name:"Falkland Islands"},{flag:"\u{1F1EB}\u{1F1F2}",name:"Micronesia"},{flag:"\u{1F1EB}\u{1F1F4}",name:"Faroe Islands"},{flag:"\u{1F1EB}\u{1F1F7}",name:"France"},{flag:"\u{1F1EC}\u{1F1E6}",name:"Gabon"},{flag:"\u{1F1EC}\u{1F1E7}",name:"United Kingdom"},{flag:"\u{1F1EC}\u{1F1E9}",name:"Grenada"},{flag:"\u{1F1EC}\u{1F1EA}",name:"Georgia"},{flag:"\u{1F1EC}\u{1F1EB}",name:"French Guiana"},{flag:"\u{1F1EC}\u{1F1EC}",name:"Guernsey"},{flag:"\u{1F1EC}\u{1F1ED}",name:"Ghana"},{flag:"\u{1F1EC}\u{1F1EE}",name:"Gibraltar"},{flag:"\u{1F1EC}\u{1F1F1}",name:"Greenland"},{flag:"\u{1F1EC}\u{1F1F2}",name:"Gambia"},{flag:"\u{1F1EC}\u{1F1F3}",name:"Guinea"},{flag:"\u{1F1EC}\u{1F1F5}",name:"Guadeloupe"},{flag:"\u{1F1EC}\u{1F1F6}",name:"Equatorial Guinea"},{flag:"\u{1F1EC}\u{1F1F7}",name:"Greece"},{flag:"\u{1F1EC}\u{1F1F8}",name:"South Georgia & South Sandwich Islands"},{flag:"\u{1F1EC}\u{1F1F9}",name:"Guatemala"},{flag:"\u{1F1EC}\u{1F1FA}",name:"Guam"},{flag:"\u{1F1EC}\u{1F1FC}",name:"Guinea-Bissau"},{flag:"\u{1F1EC}\u{1F1FE}",name:"Guyana"},{flag:"\u{1F1ED}\u{1F1F0}",name:"Hong Kong SAR China"},{flag:"\u{1F1ED}\u{1F1F2}",name:"Heard & McDonald Islands"},{flag:"\u{1F1ED}\u{1F1F3}",name:"Honduras"},{flag:"\u{1F1ED}\u{1F1F7}",name:"Croatia"},{flag:"\u{1F1ED}\u{1F1F9}",name:"Haiti"},{flag:"\u{1F1ED}\u{1F1FA}",name:"Hungary"},{flag:"\u{1F1EE}\u{1F1E8}",name:"Canary Islands"},{flag:"\u{1F1EE}\u{1F1E9}",name:"Indonesia"},{flag:"\u{1F1EE}\u{1F1EA}",name:"Ireland"},{flag:"\u{1F1EE}\u{1F1F1}",name:"Israel"},{flag:"\u{1F1EE}\u{1F1F2}",name:"Isle of Man"},{flag:"\u{1F1EE}\u{1F1F3}",name:"India"},{flag:"\u{1F1EE}\u{1F1F4}",name:"British Indian Ocean Territory"},{flag:"\u{1F1EE}\u{1F1F6}",name:"Iraq"},{flag:"\u{1F1EE}\u{1F1F7}",name:"Iran"},{flag:"\u{1F1EE}\u{1F1F8}",name:"Iceland"},{flag:"\u{1F1EE}\u{1F1F9}",name:"Italy"},{flag:"\u{1F1EF}\u{1F1EA}",name:"Jersey"},{flag:"\u{1F1EF}\u{1F1F2}",name:"Jamaica"},{flag:"\u{1F1EF}\u{1F1F4}",name:"Jordan"},{flag:"\u{1F1EF}\u{1F1F5}",name:"Japan"},{flag:"\u{1F1F0}\u{1F1EA}",name:"Kenya"},{flag:"\u{1F1F0}\u{1F1EC}",name:"Kyrgyzstan"},{flag:"\u{1F1F0}\u{1F1ED}",name:"Cambodia"},{flag:"\u{1F1F0}\u{1F1EE}",name:"Kiribati"},{flag:"\u{1F1F0}\u{1F1F2}",name:"Comoros"},{flag:"\u{1F1F0}\u{1F1F3}",name:"St. Kitts & Nevis"},{flag:"\u{1F1F0}\u{1F1F5}",name:"North Korea"},{flag:"\u{1F1F0}\u{1F1F7}",name:"South Korea"},{flag:"\u{1F1F0}\u{1F1FC}",name:"Kuwait"},{flag:"\u{1F1F0}\u{1F1FE}",name:"Cayman Islands"},{flag:"\u{1F1F0}\u{1F1FF}",name:"Kazakhstan"},{flag:"\u{1F1F1}\u{1F1E6}",name:"Laos"},{flag:"\u{1F1F1}\u{1F1E7}",name:"Lebanon"},{flag:"\u{1F1F1}\u{1F1E8}",name:"St. Lucia"},{flag:"\u{1F1F1}\u{1F1EE}",name:"Liechtenstein"},{flag:"\u{1F1F1}\u{1F1F0}",name:"Sri Lanka"},{flag:"\u{1F1F1}\u{1F1F7}",name:"Liberia"},{flag:"\u{1F1F1}\u{1F1F8}",name:"Lesotho"},{flag:"\u{1F1F1}\u{1F1F9}",name:"Lithuania"},{flag:"\u{1F1F1}\u{1F1FA}",name:"Luxembourg"},{flag:"\u{1F1F1}\u{1F1FB}",name:"Latvia"},{flag:"\u{1F1F1}\u{1F1FE}",name:"Libya"},{flag:"\u{1F1F2}\u{1F1E6}",name:"Morocco"},{flag:"\u{1F1F2}\u{1F1E8}",name:"Monaco"},{flag:"\u{1F1F2}\u{1F1E9}",name:"Moldova"},{flag:"\u{1F1F2}\u{1F1EA}",name:"Montenegro"},{flag:"\u{1F1F2}\u{1F1EB}",name:"St. Martin"},{flag:"\u{1F1F2}\u{1F1EC}",name:"Madagascar"},{flag:"\u{1F1F2}\u{1F1ED}",name:"Marshall Islands"},{flag:"\u{1F1F2}\u{1F1F0}",name:"North Macedonia"},{flag:"\u{1F1F2}\u{1F1F1}",name:"Mali"},{flag:"\u{1F1F2}\u{1F1F2}",name:"Myanmar (Burma)"},{flag:"\u{1F1F2}\u{1F1F3}",name:"Mongolia"},{flag:"\u{1F1F2}\u{1F1F4}",name:"Macao Sar China"},{flag:"\u{1F1F2}\u{1F1F5}",name:"Northern Mariana Islands"},{flag:"\u{1F1F2}\u{1F1F6}",name:"Martinique"},{flag:"\u{1F1F2}\u{1F1F7}",name:"Mauritania"},{flag:"\u{1F1F2}\u{1F1F8}",name:"Montserrat"},{flag:"\u{1F1F2}\u{1F1F9}",name:"Malta"},{flag:"\u{1F1F2}\u{1F1FA}",name:"Mauritius"},{flag:"\u{1F1F2}\u{1F1FB}",name:"Maldives"},{flag:"\u{1F1F2}\u{1F1FC}",name:"Malawi"},{flag:"\u{1F1F2}\u{1F1FD}",name:"Mexico"},{flag:"\u{1F1F2}\u{1F1FE}",name:"Malaysia"},{flag:"\u{1F1F2}\u{1F1FF}",name:"Mozambique"},{flag:"\u{1F1F3}\u{1F1E6}",name:"Namibia"},{flag:"\u{1F1F3}\u{1F1E8}",name:"New Caledonia"},{flag:"\u{1F1F3}\u{1F1EA}",name:"Niger"},{flag:"\u{1F1F3}\u{1F1EB}",name:"Norfolk Island"},{flag:"\u{1F1F3}\u{1F1EC}",name:"Nigeria"},{flag:"\u{1F1F3}\u{1F1EE}",name:"Nicaragua"},{flag:"\u{1F1F3}\u{1F1F1}",name:"Netherlands"},{flag:"\u{1F1F3}\u{1F1F4}",name:"Norway"},{flag:"\u{1F1F3}\u{1F1F5}",name:"Nepal"},{flag:"\u{1F1F3}\u{1F1F7}",name:"Nauru"},{flag:"\u{1F1F3}\u{1F1FA}",name:"Niue"},{flag:"\u{1F1F3}\u{1F1FF}",name:"New Zealand"},{flag:"\u{1F1F4}\u{1F1F2}",name:"Oman"},{flag:"\u{1F1F5}\u{1F1E6}",name:"Panama"},{flag:"\u{1F1F5}\u{1F1EA}",name:"Peru"},{flag:"\u{1F1F5}\u{1F1EB}",name:"French Polynesia"},{flag:"\u{1F1F5}\u{1F1EC}",name:"Papua New Guinea"},{flag:"\u{1F1F5}\u{1F1ED}",name:"Philippines"},{flag:"\u{1F1F5}\u{1F1F0}",name:"Pakistan"},{flag:"\u{1F1F5}\u{1F1F1}",name:"Poland"},{flag:"\u{1F1F5}\u{1F1F2}",name:"St. Pierre & Miquelon"},{flag:"\u{1F1F5}\u{1F1F3}",name:"Pitcairn Islands"},{flag:"\u{1F1F5}\u{1F1F7}",name:"Puerto Rico"},{flag:"\u{1F1F5}\u{1F1F8}",name:"Palestinian Territories"},{flag:"\u{1F1F5}\u{1F1F9}",name:"Portugal"},{flag:"\u{1F1F5}\u{1F1FC}",name:"Palau"},{flag:"\u{1F1F5}\u{1F1FE}",name:"Paraguay"},{flag:"\u{1F1F6}\u{1F1E6}",name:"Qatar"},{flag:"\u{1F1F7}\u{1F1EA}",name:"R\xE9union"},{flag:"\u{1F1F7}\u{1F1F4}",name:"Romania"},{flag:"\u{1F1F7}\u{1F1F8}",name:"Serbia"},{flag:"\u{1F1F7}\u{1F1FA}",name:"Russia"},{flag:"\u{1F1F7}\u{1F1FC}",name:"Rwanda"},{flag:"\u{1F1F8}\u{1F1E6}",name:"Saudi Arabia"},{flag:"\u{1F1F8}\u{1F1E7}",name:"Solomon Islands"},{flag:"\u{1F1F8}\u{1F1E8}",name:"Seychelles"},{flag:"\u{1F1F8}\u{1F1E9}",name:"Sudan"},{flag:"\u{1F1F8}\u{1F1EA}",name:"Sweden"},{flag:"\u{1F1F8}\u{1F1EC}",name:"Singapore"},{flag:"\u{1F1F8}\u{1F1ED}",name:"St. Helena"},{flag:"\u{1F1F8}\u{1F1EE}",name:"Slovenia"},{flag:"\u{1F1F8}\u{1F1EF}",name:"Svalbard & Jan Mayen"},{flag:"\u{1F1F8}\u{1F1F0}",name:"Slovakia"},{flag:"\u{1F1F8}\u{1F1F1}",name:"Sierra Leone"},{flag:"\u{1F1F8}\u{1F1F2}",name:"San Marino"},{flag:"\u{1F1F8}\u{1F1F3}",name:"Senegal"},{flag:"\u{1F1F8}\u{1F1F4}",name:"Somalia"},{flag:"\u{1F1F8}\u{1F1F7}",name:"Suriname"},{flag:"\u{1F1F8}\u{1F1F8}",name:"South Sudan"},{flag:"\u{1F1F8}\u{1F1F9}",name:"S\xE3o Tom\xE9 & Pr\xEDncipe"},{flag:"\u{1F1F8}\u{1F1FB}",name:"El Salvador"},{flag:"\u{1F1F8}\u{1F1FD}",name:"Sint Maarten"},{flag:"\u{1F1F8}\u{1F1FE}",name:"Syria"},{flag:"\u{1F1F8}\u{1F1FF}",name:"Eswatini"},{flag:"\u{1F1F9}\u{1F1E6}",name:"Tristan Da Cunha"},{flag:"\u{1F1F9}\u{1F1E8}",name:"Turks & Caicos Islands"},{flag:"\u{1F1F9}\u{1F1E9}",name:"Chad"},{flag:"\u{1F1F9}\u{1F1EB}",name:"French Southern Territories"},{flag:"\u{1F1F9}\u{1F1EC}",name:"Togo"},{flag:"\u{1F1F9}\u{1F1ED}",name:"Thailand"},{flag:"\u{1F1F9}\u{1F1EF}",name:"Tajikistan"},{flag:"\u{1F1F9}\u{1F1F0}",name:"Tokelau"},{flag:"\u{1F1F9}\u{1F1F1}",name:"Timor-Leste"},{flag:"\u{1F1F9}\u{1F1F2}",name:"Turkmenistan"},{flag:"\u{1F1F9}\u{1F1F3}",name:"Tunisia"},{flag:"\u{1F1F9}\u{1F1F4}",name:"Tonga"},{flag:"\u{1F1F9}\u{1F1F7}",name:"Turkey"},{flag:"\u{1F1F9}\u{1F1F9}",name:"Trinidad & Tobago"},{flag:"\u{1F1F9}\u{1F1FB}",name:"Tuvalu"},{flag:"\u{1F1F9}\u{1F1FC}",name:"Taiwan"},{flag:"\u{1F1F9}\u{1F1FF}",name:"Tanzania"},{flag:"\u{1F1FA}\u{1F1E6}",name:"Ukraine"},{flag:"\u{1F1FA}\u{1F1EC}",name:"Uganda"},{flag:"\u{1F1FA}\u{1F1F2}",name:"U.S. Outlying Islands"},{flag:"\u{1F1FA}\u{1F1F3}",name:"United Nations"},{flag:"\u{1F1FA}\u{1F1F8}",name:"United States of America, USA"},{flag:"\u{1F1FA}\u{1F1FE}",name:"Uruguay"},{flag:"\u{1F1FA}\u{1F1FF}",name:"Uzbekistan"},{flag:"\u{1F1FB}\u{1F1E6}",name:"Vatican City"},{flag:"\u{1F1FB}\u{1F1E8}",name:"St. Vincent & Grenadines"},{flag:"\u{1F1FB}\u{1F1EA}",name:"Venezuela"},{flag:"\u{1F1FB}\u{1F1EC}",name:"British Virgin Islands"},{flag:"\u{1F1FB}\u{1F1EE}",name:"U.S. Virgin Islands"},{flag:"\u{1F1FB}\u{1F1F3}",name:"Vietnam"},{flag:"\u{1F1FB}\u{1F1FA}",name:"Vanuatu"},{flag:"\u{1F1FC}\u{1F1EB}",name:"Wallis & Futuna"},{flag:"\u{1F1FC}\u{1F1F8}",name:"Samoa"},{flag:"\u{1F1FD}\u{1F1F0}",name:"Kosovo"},{flag:"\u{1F1FE}\u{1F1EA}",name:"Yemen"},{flag:"\u{1F1FE}\u{1F1F9}",name:"Mayotte"},{flag:"\u{1F1FF}\u{1F1E6}",name:"South Africa"},{flag:"\u{1F1FF}\u{1F1F2}",name:"Zambia"},{flag:"\u{1F1FF}\u{1F1FC}",name:"Zimbabwe"},{flag:"\u{1F3F4}\u{E0067}\u{E0062}\u{E0065}\u{E006E}\u{E0067}\u{E007F}",name:"England"},{flag:"\u{1F3F4}\u{E0067}\u{E0062}\u{E0073}\u{E0063}\u{E0074}\u{E007F}",name:"Scotland"},{flag:"\u{1F3F4}\u{E0067}\u{E0062}\u{E0077}\u{E006C}\u{E0073}\u{E007F}",name:"Wales"},{flag:"\u{1F3F4}\u{E0075}\u{E0073}\u{E0074}\u{E0078}\u{E007F}",name:"Flag for Texas (US-TX)"}],Vt=class extends HTMLElement{connectedCallback(){let t=this.getAttribute("name"),e=Wo.find(n=>n.name.match(new RegExp(t,"i")));console.log({flag:e}),e&&(this.innerText=e.flag,this.setAttribute("title",e.name))}};Vt.define=Uo("x-flag",Vt);function Yo(t,e,n=0){return new Promise(function(i,s){e?setTimeout(function(){if(e.indexOf("</slot>")){let o=e.replace("<slot></slot>",t.innerHTML);t.innerHTML=o}else t.innerHTML=e;Vo(t),i(!0)},n):i(!1)})}function Vo(t){t.querySelectorAll("script").forEach(e=>{let n=document.createElement("script");Array.from(e.attributes).forEach(i=>n.setAttribute(i.name,i.value)),n.appendChild(document.createTextNode(e.innerText));try{t.replaceChild(n,e)}catch{t.appendChild(n)}})}function Go(t){if(Number.isInteger(t))return new Promise(function(e){setTimeout(n=>e(),t)});if(typeof t=="string"){let e=0;return new Promise(function(n,i){function s(){if(e>3e3&&i(),window[t])return n(window[t]);setTimeout(s,100),e+=100}s()})}else if(typeof t=="function"){let e=0;return new Promise(function(n,i){function s(){if(e>3e3&&i(),t())return n(t());setTimeout(s,100),e+=100}s()})}}function Ko(t,e){return function(n,i){n=n||t,i=i||e,customElements.get(n)||customElements.define(n,i)}}var Zo='<script id="x-qrcode" src="//unpkg.com/qrcode@1.4.4/build/qrcode.min.js"><\/script>',Gt=class extends HTMLElement{connectedCallback(){this.value=this.getAttribute("value")||"Hello QR Code";let e=document.querySelector("script#x-qrcode")?"":Zo;Yo(this,e).then(n=>Go("QRCode")).then(n=>QRCode.toDataURL(this.value)).then(n=>{let i=document.createElement("img");i.setAttribute("alt",this.value),i.setAttribute("title",this.value),i.src=n,this.appendChild(i)}).catch(n=>{})}};Gt.define=Ko("x-qrcode",Gt);function Jo(t,e,n=0){return new Promise(function(i,s){e?setTimeout(function(){if(e.indexOf("</slot>")){let o=e.replace("<slot></slot>",t.innerHTML);t.innerHTML=o}else t.innerHTML=e;Qo(t),i(!0)},n):i(!1)})}function Qo(t){t.querySelectorAll("script").forEach(e=>{let n=document.createElement("script");Array.from(e.attributes).forEach(i=>n.setAttribute(i.name,i.value)),n.appendChild(document.createTextNode(e.innerText));try{t.replaceChild(n,e)}catch{t.appendChild(n)}})}function ta(t){if(Number.isInteger(t))return new Promise(function(e){setTimeout(n=>e(),t)});if(typeof t=="string"){let e=0;return new Promise(function(n,i){function s(){if(e>3e3&&i(),window[t])return n(window[t]);setTimeout(s,100),e+=100}s()})}else if(typeof t=="function"){let e=0;return new Promise(function(n,i){function s(){if(e>3e3&&i(),t())return n(t());setTimeout(s,100),e+=100}s()})}}function ea(t,e){return function(n,i){n=n||t,i=i||e,customElements.get(n)||customElements.define(n,i)}}var tn=`<svg class="barcode"
  jsbarcode-value="123456789012"
  jsbarcode-format="code128"
  jsbarcode-width="1"
  jsbarcode-background="#FFFFFF"
  jsbarcode-linecolor="#000000"
  jsbarcode-margin="10"
  jsbarcode-displayvalue="true"
  jsbarcode-fontoptions=""
  jsbarcode-fontsize="20"
  jsbarcode-fontoptions="monospace"
  jsbarcode-textalign="center"
  jsbarcode-textposition="bottom"
  jsbarcode-textmargin="2"
  jsbarcode-fontoptions="bold">
</svg>`,na='<script id="x-jsbarcode" src="//unpkg.com/jsbarcode/dist/JsBarcode.all.min.js"><\/script>',Kt=class extends HTMLElement{constructor(...t){return super(...t)}connectedCallback(){this.value=this.getAttribute("value"),this.format=this.getAttribute("format");let e=document.querySelector("script#x-jsbarcode")?tn:na+tn;this.value?Jo(this,e).then(n=>ta("JsBarcode")).then(n=>{let i=this.querySelector("svg");i.setAttribute("jsbarcode-value",this.value),this.format&&i.setAttribute("jsbarcode-format",this.format);try{JsBarcode(".barcode").init()}catch(s){throw this.innerHTML=s,s}}):this.innerHTML="barcode value required"}};Kt.define=ea("x-barcode",Kt);function ia(t,e){let n=t.tagName.toLowerCase(),i=n==="x-input"&&t.getAttribute("type"),s=i?`-${i}`:"",r=`${n}${s}`;if(document.querySelector(`style[${r}]`)){let o=document.querySelector(`style[${r}]`);o.createdAt=new Date().getTime()}else{let o=document.createElement("style");return o.setAttribute(r,""),o.appendChild(document.createTextNode(e)),document.head.appendChild(o),o.createdAt=new Date().getTime(),o}}function sa(t){let e=t.tagName.toLowerCase(),n=e==="x-input"&&t.getAttribute("type"),i=n?`-${n}`:"",s=`${e}${i}`,r=document.body.querySelectorAll(`${s}`).length;if(document.querySelector(`style[${s}]`)&&r<1){let a=document.querySelector(`style[${s}]`);new Date().getTime()>a.createdAt+500&&a.remove()}}function ra(t,e){return function(n,i){n=n||t,i=i||e,customElements.get(n)||customElements.define(n,i)}}var oa=`x-typing-effect {
  display: block;
  font-family: monospace;
  white-space: pre;
}`,Zt=class extends HTMLElement{connectedCallback(){ia(this,oa),this.orgText=this.innerText,this.innerHTML="";let t=this.orgText.split("");this.recursivePromiseChain(t,this)}recursivePromiseChain(t,e){let n=t.shift();return n?new Promise(i=>{e.innerText+=n,setTimeout(s=>i(),n===`
`?300:100)}).then(i=>this.recursivePromiseChain(t,e)):Promise.resolve()}disconnectedCallback(){sa(this)}};Zt.define=ra("x-typing-effect",Zt);function aa(t,e,n=0){return new Promise(function(i,s){e?setTimeout(function(){if(e.indexOf("</slot>")){let o=e.replace("<slot></slot>",t.innerHTML);t.innerHTML=o}else t.innerHTML=e;ua(t),i(!0)},n):i(!1)})}function la(t,e){let n=t.tagName.toLowerCase(),i=n==="x-input"&&t.getAttribute("type"),s=i?`-${i}`:"",r=`${n}${s}`;if(document.querySelector(`style[${r}]`)){let o=document.querySelector(`style[${r}]`);o.createdAt=new Date().getTime()}else{let o=document.createElement("style");return o.setAttribute(r,""),o.appendChild(document.createTextNode(e)),document.head.appendChild(o),o.createdAt=new Date().getTime(),o}}function ca(t){let e=t.tagName.toLowerCase(),n=e==="x-input"&&t.getAttribute("type"),i=n?`-${n}`:"",s=`${e}${i}`,r=document.body.querySelectorAll(`${s}`).length;if(document.querySelector(`style[${s}]`)&&r<1){let a=document.querySelector(`style[${s}]`);new Date().getTime()>a.createdAt+500&&a.remove()}}function ua(t){t.querySelectorAll("script").forEach(e=>{let n=document.createElement("script");Array.from(e.attributes).forEach(i=>n.setAttribute(i.name,i.value)),n.appendChild(document.createTextNode(e.innerText));try{t.replaceChild(n,e)}catch{t.appendChild(n)}})}function da(t,e=500){var n;return function(...i){var s=this,r=function(){n=null,t.apply(s,i)};clearTimeout(n),n=setTimeout(r,e)}}function en(t){if(Number.isInteger(t))return new Promise(function(e){setTimeout(n=>e(),t)});if(typeof t=="string"){let e=0;return new Promise(function(n,i){function s(){if(e>3e3&&i(),window[t])return n(window[t]);setTimeout(s,100),e+=100}s()})}else if(typeof t=="function"){let e=0;return new Promise(function(n,i){function s(){if(e>3e3&&i(),t())return n(t());setTimeout(s,100),e+=100}s()})}}function ha(t,e){return e=Object.assign({wait:100,attributes:!1,childList:!0,subtree:!0},e),new Promise(n=>{let i=!1,s=new MutationObserver(a=>{i=!0,t.dispatchEvent(new CustomEvent("dom-changed",{detail:a,bubbles:!0}))});s.observe(t,e);let r=da(o,e.wait)();function o(){n(t),s.disconnect(t),t.removeEventListener("dom-change",r)}t.addEventListener("dom-change",r),setTimeout(a=>{!i&&n(t)},e.wait)})}function fa(t,e){return function(n,i){n=n||t,i=i||e,customElements.get(n)||customElements.define(n,i)}}var pa=`x-ace {
  display: block;
  position: relative;
  min-height: 80px;
  height: 100%;
  white-space: pre-wrap;
  width: 100%;
}
x-ace.disabled {
  opacity: .5;
  pointer-events: none;
}
x-ace.readonly {
  pointer-events: none;
}
x-ace > .editor {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0;
}`,ma=`<script src="https://unpkg.com/ace-builds/src-min-noconflict/ace.js"><\/script>
<pre class="editor"></pre>`,Jt=class extends HTMLElement{set value(t){if(!t)return;let e=this.editor?0:500;setTimeout(n=>{var i;return(i=this.editor)==null?void 0:i.setValue(t)},e)}get value(){var t;return(t=this.editor)==null?void 0:t.getValue()}set disabled(t){let e=this.editor?0:500;setTimeout(n=>{var i;(i=this.editor)==null||i.setReadOnly(t),t?this.classList.add("disabled"):this.classList.remove("disabled")},e)}get disabled(){var t;return(t=this.editor)==null?void 0:t.getReadOnly()}set readonly(t){let e=this.editor?0:500;setTimeout(n=>{var i;(i=this.editor)==null||i.setReadOnly(t),t?this.classList.add("readonly"):this.classList.remove("readonly")},e)}get readonly(){var t;return(t=this.editor)==null?void 0:t.getReadOnly()}connectedCallback(){this.theme=this.getAttribute("theme")||"monokai",this.language=this.getAttribute("language")||"javascript";let t=la(this,pa);ha(this).then(e=>(this.orgValue=this.fixIndent(this.innerText),aa(this,t?ma:'<pre class="editor"></pre>'))).then(e=>en("ace")).then(e=>en(n=>this.querySelector(".editor").offsetWidth)).then(e=>{let n=this.querySelector(".editor"),i=window.ace.edit(n);i.setValue(this.orgValue),i.setTheme(`ace/theme/${this.theme}`),i.session.setMode(`ace/mode/${this.language}`),i.renderer.setScrollMargin(8,8,0,0),this.editor=i,this.dispatchEvent(new CustomEvent("load",{detail:i,bubbles:!0})),["blur","change","copy","focus","paste"].forEach(s=>{i.on(s,r=>{this.dispatchEvent(new CustomEvent(s,{detail:r,bubbles:!0}))})})}).then(e=>this.editor.resize())}disconnectedCallback(){ca(this)}fixIndent(t){t=t.replace(/^([ \t]*\n+){1,}|[\n\t ]+$/g,"");let e=(t.match(/^([ ]+)/)||[])[1];if(e){let n=new RegExp(`^${e}`,"gm");return t.replace(n,"")}return t}};Jt.define=fa("x-ace",Jt);function ga(t,e,n=0){return new Promise(function(i,s){e?setTimeout(function(){if(e.indexOf("</slot>")){let o=e.replace("<slot></slot>",t.innerHTML);t.innerHTML=o}else t.innerHTML=e;ya(t),i(!0)},n):i(!1)})}function ba(t,e){let n=t.tagName.toLowerCase(),i=n==="x-input"&&t.getAttribute("type"),s=i?`-${i}`:"",r=`${n}${s}`;if(document.querySelector(`style[${r}]`)){let o=document.querySelector(`style[${r}]`);o.createdAt=new Date().getTime()}else{let o=document.createElement("style");return o.setAttribute(r,""),o.appendChild(document.createTextNode(e)),document.head.appendChild(o),o.createdAt=new Date().getTime(),o}}function xa(t){let e=t.tagName.toLowerCase(),n=e==="x-input"&&t.getAttribute("type"),i=n?`-${n}`:"",s=`${e}${i}`,r=document.body.querySelectorAll(`${s}`).length;if(document.querySelector(`style[${s}]`)&&r<1){let a=document.querySelector(`style[${s}]`);new Date().getTime()>a.createdAt+500&&a.remove()}}function ya(t){t.querySelectorAll("script").forEach(e=>{let n=document.createElement("script");Array.from(e.attributes).forEach(i=>n.setAttribute(i.name,i.value)),n.appendChild(document.createTextNode(e.innerText));try{t.replaceChild(n,e)}catch{t.appendChild(n)}})}function va(t,e=500){var n;return function(...i){var s=this,r=function(){n=null,t.apply(s,i)};clearTimeout(n),n=setTimeout(r,e)}}function nn(t){if(Number.isInteger(t))return new Promise(function(e){setTimeout(n=>e(),t)});if(typeof t=="string"){let e=0;return new Promise(function(n,i){function s(){if(e>3e3&&i(),window[t])return n(window[t]);setTimeout(s,100),e+=100}s()})}else if(typeof t=="function"){let e=0;return new Promise(function(n,i){function s(){if(e>3e3&&i(),t())return n(t());setTimeout(s,100),e+=100}s()})}}function Ea(t,e){return e=Object.assign({wait:100,attributes:!1,childList:!0,subtree:!0},e),new Promise(n=>{let i=!1,s=new MutationObserver(a=>{i=!0,t.dispatchEvent(new CustomEvent("dom-changed",{detail:a,bubbles:!0}))});s.observe(t,e);let r=va(o,e.wait)();function o(){n(t),s.disconnect(t),t.removeEventListener("dom-change",r)}t.addEventListener("dom-change",r),setTimeout(a=>{!i&&n(t)},e.wait)})}function wa(t,e){return function(n,i){n=n||t,i=i||e,customElements.get(n)||customElements.define(n,i)}}var Fa=`<link rel="stylesheet"
  href="//unpkg.com/@highlightjs/cdn-assets/styles/default.min.css" />
<script 
  src="//unpkg.com/@highlightjs/cdn-assets/highlight.min.js"><\/script>

<script src="//unpkg.com/prettier@2.3.1/standalone.js"><\/script>
<script src="//unpkg.com/prettier@2.3.1/parser-postcss.js"><\/script>
<script src="//unpkg.com/prettier@2.3.1/parser-html.js"><\/script>
<script src="//unpkg.com/prettier@2.3.1/parser-babel.js"><\/script>
<script src="//unpkg.com/prettier@2.3.1/parser-angular.js"><\/script>
<script src="//unpkg.com/prettier@2.3.1/parser-typescript.js"><\/script>
<script src="//unpkg.com/prettier@2.3.1/parser-yaml.js"><\/script>
<script src="//unpkg.com/prettier@2.3.1/parser-markdown.js"><\/script>

<div class="x-highlight"></div>`,_a=`x-highlightjs {
  white-space: pre;
}
x-highlightjs.parsed {
  white-space: initial;
}
x-highlightjs > .x-highlight {
  font-family: monospace;
  white-space: pre;
  padding: 8px 12px;
  overflow: auto; 
  font-size: 14px; 
}
`,Qt=class extends HTMLElement{set value(t){if(!t.trim())return;if(this.prettier)try{let i=this.getParser(this.language);this._value=window.prettier.format(t,{parser:i,plugins:window.prettierPlugins})}catch(i){console.error(i),this._value=i}else this._value=this.fixIndent(t);let e=this.querySelector(".x-highlight");setTimeout(i=>{e.innerHTML=this.language==="html"?`<pre><code>${this._value.replace(/</g,"&lt;")}</code><pre>`:this._value;let s=window.hljs.highlightElement(e);this.dispatchEvent(new CustomEvent("load",{detail:e,bubbles:!0}))},e?0:500)}get value(){return this._value}connectedCallback(){let t=ba(this,_a);this.prettier=this.getAttribute("prettier")!==null,this.language=this.getAttribute("language")||"javascript";let e=this.getAttribute("theme")||"monokai",n,i;Ea(this).then(s=>{n=this.innerText,this.classList.add("parsed"),i=t?Fa:'<div class="x-highlight"></div>'}).then(s=>ga(this,i)).then(s=>nn("hljs")).then(s=>this.prettier?nn("prettier"):Promise.resolve()).then(s=>{var r;(r=this.querySelector("link"))==null||r.setAttribute("href",`//unpkg.com/@highlightjs/cdn-assets/styles/${e}.min.css`),this.value=n})}disconnectedCallback(){xa(this)}fixIndent(t){t=t.replace(/^([ \t]*\n+){1,}|[\n\t ]+$/g,"");let e=(t.match(/^([ ]+)/)||[])[1];if(e){let n=new RegExp(`^${e}`,"gm");return t.replace(n,"")}return t}getParser(t){let n=Object.entries({css:["css","postcss","scss","sass"],html:["xml","xhtml","html5","html"],babel:["js","javascript","es5","es6","es7"],angular:["angular","ng"],markdown:["markdown","md"],typescript:["typescript","ts"],yaml:["yaml"],"json-stringify":["json"]}).find(([i,s])=>s.indexOf(t)!==-1);return(n==null?void 0:n[0])||"babel"}};Qt.define=wa("x-highlightjs",Qt);var Aa=`x-sidebar {
  --x-sidebar-width: 200px;
}
@media only screen and (max-width: 767px) {
  x-sidebar { /* it's a mobile sidebar, blocker and content */
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw !important; /* to cover the whole screen */
    height: 100vh !important;
    padding: 0;  /* to override the default padding */
    background: rgba(0,0,0, .5); /* half transparent background */
    display: none;
    z-index: 99999; /* to be on top of other elements */
  }
  x-sidebar.x-visible {
    display: block;
  }
  /* to cover the whole screen and to detect user click on background */
  x-sidebar .x-blocker { 
    position: absolute;
    width: 100%;
    height: 100%;
  }
  /* user content */
  x-sidebar .x-content {
    position: absolute;
    top: 0;
    left: 0;
    background: #FFF;
    height: 100%;
    width: var(--x-sidebar-width);
    left: -50%;   /* will be animated to left: 0, by animation */
    animation: x-slide 0.5s forwards;
  }
  @keyframes x-slide {
    100% { left: 0; }
  }
}

@media only screen and (min-width: 768px) {
  x-sidebar.x-visible {
    transition: width 0.2s;
    width: var(--x-sidebar-width);
    font-size: initial;
    overflow: auto;
  }
  x-sidebar:not(.x-visible) {
    padding: 0;
    overflow: hidden;
    font-size: 0px;
    transition: width 0.2s;
    animation: x-slide-out .2s;
    color: transparent;
    width: 2px;
  }
}`,Ca=`<div class="x-blocker"></div>
<div class="x-content">
  <slot></slot>
</div>`,Ta=class{constructor(t){this.touchStaX,this.toucnendX,this.touchSta,this.touchEnd,t=t||document.body,t.getAttribute("x-swipe")===null&&(t.setAttribute("x-swipe",""),t.addEventListener("touchstart",this.setTouchSta.bind(this)),t.addEventListener("mousedown",this.setTouchSta.bind(this)),t.addEventListener("touchend",this.setTouchEnd.bind(this)),t.addEventListener("mouseup",this.setTouchEnd.bind(this)))}handleGesture(){if(Math.abs(this.touchEndX-this.touchStaX)<80||this.touchEnd-this.touchSta>500)return;let t=this.touchEndX<this.touchStaX?"left":"right",e=new CustomEvent("x-swipe",{bubbles:!0,detail:t});document.body.dispatchEvent(e)}setTouchSta(t){this.touchStaX=t.type==="touchstart"?t.changedTouches[0].screenX:t.screenX,this.touchSta=new Date().getTime()}setTouchEnd(t){this.touchEndX=t.type==="touchend"?t.changedTouches[0].screenX:t.screenX,this.touchEnd=new Date().getTime(),this.handleGesture()}};function Sa(t,e,n=0){return new Promise(function(i,s){e?setTimeout(function(){if(e.indexOf("</slot>")){let o=e.replace("<slot></slot>",t.innerHTML);t.innerHTML=o}else t.innerHTML=e;Ma(t),i(!0)},n):i(!1)})}function La(t,e){let n=t.tagName.toLowerCase(),i=n==="x-input"&&t.getAttribute("type"),s=i?`-${i}`:"",r=`${n}${s}`;if(document.querySelector(`style[${r}]`)){let o=document.querySelector(`style[${r}]`);o.createdAt=new Date().getTime()}else{let o=document.createElement("style");return o.setAttribute(r,""),o.appendChild(document.createTextNode(e)),document.head.appendChild(o),o.createdAt=new Date().getTime(),o}}function ka(t){let e=t.tagName.toLowerCase(),n=e==="x-input"&&t.getAttribute("type"),i=n?`-${n}`:"",s=`${e}${i}`,r=document.body.querySelectorAll(`${s}`).length;if(document.querySelector(`style[${s}]`)&&r<1){let a=document.querySelector(`style[${s}]`);new Date().getTime()>a.createdAt+500&&a.remove()}}function Ma(t){t.querySelectorAll("script").forEach(e=>{let n=document.createElement("script");Array.from(e.attributes).forEach(i=>n.setAttribute(i.name,i.value)),n.appendChild(document.createTextNode(e.innerText));try{t.replaceChild(n,e)}catch{t.appendChild(n)}})}function $a(t,e){return function(n,i){n=n||t,i=i||e,customElements.get(n)||customElements.define(n,i)}}var te=class extends HTMLElement{constructor(...t){let e=super(...t);return this.width,this._url=location.href,this._urlChangeListner=this._handleUrlChange.bind(this),this._touchSwipeListner=this._handleTouchSwipe.bind(this),e}connectedCallback(){this.width=this.getAttribute("width"),La(this,Aa),Sa(this,Ca).then(t=>{this.width&&this.style.setProperty("--x-sidebar-width",`${this.width}px`),new Ta(document.body),document.body.removeEventListener("x-swipe",this._touchSwipeListner),document.body.addEventListener("x-swipe",this._touchSwipeListner),window.innerWidth<768?(this.querySelector(".x-blocker").addEventListener("click",e=>this.hide()),document.body.removeEventListener("click",this._urlChangeListner),document.body.addEventListener("click",this._urlChangeListner)):this.classList.add("x-visible")})}disconnectedCallback(){ka(this),document.body.removeEventListener("click",this._urlChangeListner),document.body.removeEventListener("x-swipe",this._touchSwipeListner)}show(){this.classList.add("x-visible"),window.innerWidth<768&&(document.body.style.overflow="hidden")}hide(){this.classList.remove("x-visible"),document.body.style.overflow=""}toggle(){this.classList.contains("x-visible")?this.hide():this.show()}_handleUrlChange(t){setTimeout(e=>{this._url!==location.href&&this.hide(),this._url=location.href})}_handleTouchSwipe(t){}};te.define=$a("x-sidebar",te);function sn(t,e){return function(n,i){n=n||t,i=i||e,customElements.get(n)||customElements.define(n,i)}}var N=class{static translate(t,e={}){var n,i,s;let r,o;if(t.match(/\.[a-z0-9_]+$/i)){o=t.split("."),r=(n=N[N.getLanguage()])==null?void 0:n[o[0]];for(var a=1;a<o.length;a++)if(r=r==null?void 0:r[o[a]],!r&&N.getLanguage()!=="en")return r=`(${N.getLanguage().toUpperCase()}) ${t}`,r}else r=(s=(i=N[N.getLanguage()])==null?void 0:i[t])==null?void 0:s.trim();if(r||(r=N.getLanguage()==="en"?t:`(${N.getLanguage().toUpperCase()}) ${t}`),r){for(let l in e)r=r.replace(new RegExp(`\${${l}}`,"g"),e[l]),r=r.replace(new RegExp(`{{${l}}}`,"g"),e[l]);return r}}static getLanguage(){function t(){let n=document.cookie.split("; ").find(i=>i.startsWith(`${name}=`));return n?n.split("=")[1]:null}return(N.language||window.localStorage.getItem("language")||t()||document.documentElement.getAttribute("lang")||navigator.language.split("-")[0]||"en").toLowerCase()}},ee=class extends HTMLElement{constructor(){super();this.orgCThildElements,this.orgKey,this.commonAttrName}connectedCallback(){let t=N.getLanguage();if(t!=="en"&&!N[t]&&console.error("Please provide translation before app starts",t),this._saveOriginal(),this.attributes.length){if(this.commonAttrName){let n=this._getMatchingEl();this._translate(n)}else this._translate(this);new MutationObserver(this.attrMutationCallback.bind(this)).observe(this,{attributes:!0})}else{let e=this._getAttrMap();this._translate(this,e)}}attrMutationCallback(t){t.forEach(e=>{if(e.attributeName===this.commonAttrName){let n=this._getMatchingEl();this._translate(n)}else e.attributeName.match(/^[a-z0-9]+$/i)&&this._translate(this)})}_translate(t){let e=t===this?this.orgKey.trim():(t.textContent||t.innerText).trim(),n=this._getAttrMap(),i=N.translate(e,n);i&&(this.innerHTML=i)}_getMatchingEl(){let t=this.commonAttrName,e=this.getAttribute(t);return this.orgChildren.find(i=>i.getAttribute(t)===e||i.getAttribute(t)==="default")}_saveOriginal(){if(!this.orgChildren){this.orgChildren=Array.from(this.children||[]),this.orgKey=(this.textContent||this.innerText).trim();let t={};this.orgChildren.forEach(n=>{Array.from(n.attributes).forEach(i=>{t[i.name]=t[i.name]||0,t[i.name]++})});let e=Object.entries(t).find(([n,i])=>i===this.orgChildren.length);this.commonAttrName=e&&e[0]}}_getAttrMap(){return Array.from(this.attributes).reduce((t,e)=>(t[e.name]=e.value,t),{})}};ee.define=sn("x-t9n",ee);var ne=class extends HTMLElement{constructor(){super();this.targetEl}connectedCallback(){let t=this.getAttribute("selector");setTimeout(e=>{t?(this.targetEl=document.querySelector(t),new MutationObserver(this.mutationCallback.bind(this)).observe(this,{attributes:!0})):console.error("element not found",t)})}mutationCallback(t){this.targetEl.querySelectorAll("[x-translate]").forEach(n=>{n.getAttribute("x-translate").split(",").forEach(s=>{let r=n.getAttribute(s),o=N.translate(r);n.setAttribute(s,o)})})}};ne.define=sn("x-t9n-attr",ne);function qa(t,e){return function(n,i){n=n||t,i=i||e,customElements.get(n)||customElements.define(n,i)}}var ie=class extends HTMLElement{constructor(...t){let e=super(...t);return this.listeners=[],e}connectedCallback(){this.debug=this.getAttribute("debug")!==null}disconnectedCallback(){this.listeners.forEach(([t,e,n])=>{t.removeEventListener(e,n),this.debug&&console.debug("x-listeners","event removed from",t,e,n)})}handleGlobalListener(t,e,n){this.listeners.push([t,e,n]),this.debug&&console.debug("x-listeners","event is registered to be removed when disconnected",t,e,n)}};ie.define=qa("x-listeners",ie);var rn=`body {
  --x-m: 1rem; /* margin */
  --x-b: 1px solid #EEE; /* border */
  --x-p: 1rem; /* padding */
  --x-g: #EEE; /* background */
}

/* headers */
.x-h1, .x-h2, .x-h3, .x-h4 { font-weight: bold; line-height: 1.1; margin: 1rem 0; }
.x-h1 { font-size: 48px; line-height: 60px; }
.x-h2 { font-size: 32px; line-height: 44px; letter-spacing: -0.6px;}
.x-h3 { font-size: 24px; line-height: 34px; letter-spacing: -0.4px;}
.x-h4 { font-size: 20px; line-height: 28px; letter-spacing: -0.4px;}

.x-m { margin: var(--x-m); } /* margin */
.x-b { border: var(--x-b); } /* border */
.x-p { padding: var(--x-p) !important; }     /* padding */
.x-g { background: var(--x-g) !important; } /* background */

/* margin/border/padding/background combined for convenience */
.x-mbpg { margin: var(--x-m); border: var(--x-b); padding: var(--x-p); background: var(--x-g); }
.x-mbp { margin: var(--x-m); border: var(--x-b); padding: var(--x-p) !important; }
.x-mbg { margin: var(--x-m); border: var(--x-b); background: var(--x-g) !important; }
.x-mpg { margin: var(--x-m); padding: var(--x-p) !important; background: var(--x-g) !important; }
.x-bpg { border: var(--x-b); padding: var(--x-p); background: var(--x-g); }
.x-bp { border: var(--x-b); padding: var(--x-p) !important; }
.x-bg { border: var(--x-b); background: var(--x-g) !important; }
.x-pg { padding: var(--x-p) !important; background: var(--x-g) !important; }

/* shadows */
.x-s1 { box-shadow: rgb(41 42 43 / 10%) 0px 1px 3px, rgb(0 0 0 / 4%) 0px 0px 0.5px; }
.x-s2 { box-shadow: rgb(41 42 43 / 10%) 0px 2px 5px, rgb(41 42 43 / 6%) 0px 0px 0.5px; }
.x-s3 { box-shadow: rgb(0 0 0 / 2%) 0px 0px 1px, rgb(0 0 0 / 3%) 0px 2px 5px, rgb(0 0 0 / 4%) 0px 3px 7px, rgb(0 0 0 / 4%) 0px 7px 10px; }

/* center */
.x-c { display: flex; justify-content: center; align-items: center; flex-wrap: wrap; }`;function K(t,e){let n=t.tagName.toLowerCase(),i=n==="x-input"&&t.getAttribute("type"),s=i?`-${i}`:"",r=`${n}${s}`;if(document.querySelector(`style[${r}]`)){let o=document.querySelector(`style[${r}]`);o.createdAt=new Date().getTime()}else{let o=document.createElement("style");return o.setAttribute(r,""),o.appendChild(document.createTextNode(e)),document.head.appendChild(o),o.createdAt=new Date().getTime(),o}}function Z(t){let e=t.tagName.toLowerCase(),n=e==="x-input"&&t.getAttribute("type"),i=n?`-${n}`:"",s=`${e}${i}`,r=document.body.querySelectorAll(`${s}`).length;if(document.querySelector(`style[${s}]`)&&r<1){let a=document.querySelector(`style[${s}]`);new Date().getTime()>a.createdAt+500&&a.remove()}}function on(){if(!document.querySelector("style[elements-x]")){let t=document.createElement("style");t.setAttribute("elements-x",""),t.appendChild(document.createTextNode(rn)),document.head.appendChild(t)}[vt,_t,Ut,Ct,Tt,Lt,qt,Rt,St,Xt,Nt,Bt,wt,Ft,At,Y,V,Ht,$t,Pt,Dt,Wt,Gt,Kt,Yt,Vt,Zt,Jt,Qt,Mt,kt,te,ie,ee,ne].forEach(t=>t.define())}function Ha(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}else return Array.from(t)}var Ee=!1;typeof window!="undefined"&&(we={get passive(){Ee=!0}},window.addEventListener("testPassive",null,we),window.removeEventListener("testPassive",null,we));var we,se=typeof window!="undefined"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),it=[],re=!1,an=-1,mt=void 0,st=void 0,gt=void 0,ln=function(e){return it.some(function(n){return!!(n.options.allowTouchMove&&n.options.allowTouchMove(e))})},oe=function(e){var n=e||window.event;return ln(n.target)||n.touches.length>1?!0:(n.preventDefault&&n.preventDefault(),!1)},Da=function(e){if(gt===void 0){var n=!!e&&e.reserveScrollBarGap===!0,i=window.innerWidth-document.documentElement.clientWidth;if(n&&i>0){var s=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);gt=document.body.style.paddingRight,document.body.style.paddingRight=s+i+"px"}}mt===void 0&&(mt=document.body.style.overflow,document.body.style.overflow="hidden")},Pa=function(){gt!==void 0&&(document.body.style.paddingRight=gt,gt=void 0),mt!==void 0&&(document.body.style.overflow=mt,mt=void 0)},Na=function(){return window.requestAnimationFrame(function(){if(st===void 0){st={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var e=window,n=e.scrollY,i=e.scrollX,s=e.innerHeight;document.body.style.position="fixed",document.body.style.top=-n,document.body.style.left=-i,setTimeout(function(){return window.requestAnimationFrame(function(){var r=s-window.innerHeight;r&&n>=s&&(document.body.style.top=-(n+r))})},300)}})},Xa=function(){if(st!==void 0){var e=-parseInt(document.body.style.top,10),n=-parseInt(document.body.style.left,10);document.body.style.position=st.position,document.body.style.top=st.top,document.body.style.left=st.left,window.scrollTo(n,e),st=void 0}},Oa=function(e){return e?e.scrollHeight-e.scrollTop<=e.clientHeight:!1},Ia=function(e,n){var i=e.targetTouches[0].clientY-an;return ln(e.target)?!1:n&&n.scrollTop===0&&i>0||Oa(n)&&i<0?oe(e):(e.stopPropagation(),!0)},cn=function(e,n){if(!e){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(!it.some(function(s){return s.targetElement===e})){var i={targetElement:e,options:n||{}};it=[].concat(Ha(it),[i]),se?Na():Da(n),se&&(e.ontouchstart=function(s){s.targetTouches.length===1&&(an=s.targetTouches[0].clientY)},e.ontouchmove=function(s){s.targetTouches.length===1&&Ia(s,e)},re||(document.addEventListener("touchmove",oe,Ee?{passive:!1}:void 0),re=!0))}};var un=function(e){if(!e){console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");return}it=it.filter(function(n){return n.targetElement!==e}),se&&(e.ontouchstart=null,e.ontouchmove=null,re&&it.length===0&&(document.removeEventListener("touchmove",oe,Ee?{passive:!1}:void 0),re=!1)),se?Xa():Pa()};var U=class{constructor(e){U.els=U.els||[],U.els.push(e),!U._instance&&(U._instance=this,this.touchOrgX,this.touchOrgY,this.touchStaX,this.touchStaY,this.touchEndX,this.touchEndY,this.touchOrgAt,this.touchStaAt,this.prevMove,this.prevEndX,this.prevEndY,this.touchStaListener=this._setTouchSta.bind(this),this.touchEndListener=this._setTouchEnd.bind(this),this.touchMoveListener=this._setTouchMove.bind(this),this.isTouchDevice="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0,this.events=this.isTouchDevice?{start:"touchstart",move:"touchmove",end:"touchend"}:{start:"mousedown",move:"mousemove",end:"mouseup"},document.body.addEventListener(this.events.start,this.touchStaListener,!1),document.addEventListener(this.events.move,this.touchMoveListener,!1),document.addEventListener(this.events.end,this.touchEndListener),document.addEventListener("mouseleave",n=>this.touchStaAt=0))}_fireEvent(e){let n=new CustomEvent("x-swipe",{bubbles:!0,detail:e});document.body.dispatchEvent(n)}_setTouchSta(e){if(U.els.some(n=>n.contains(e.target))){!("createTouch"in document)&&screen.width>699&&(document.body.style.width=`${document.body.scrollWidth}px`),cn(document.body);let{clientX:n,clientY:i}=this.isTouchDevice?e.changedTouches[0]:e;[this.touchOrgX,this.touchOrgY]=[n,i],this.touchOrgAt=new Date().getTime(),[this.touchStaX,this.touchStaY]=[n,i],[this.touchStaAt,this.touchStaEl]=[new Date().getTime(),e.target],this._fireEvent({type:"start",x1:n,y1:i,touchStaEl:this.touchStaEl,orgEvent:e})}else this.reset()}_setTouchMove(e){if(!this.touchStaEl)return;let{clientX:n,clientY:i}=this.isTouchDevice?e.changedTouches[0]:e,[s,r,o,a]=[this.touchStaX,this.touchStaY,n,i],[l,c]=[this.prevEndX,this.prevEndY],{xMove:f,yMove:g}=this._getDirection(l||o,c||a,o,a),v=`${f} ${g}`.trim();if(f&&g&&v!==this.prevMove){[this.touchStaX,this.touchStaY,this.touchStaAt]=[this.prevEndX,this.prevEndY,new Date().getTime()];let[_,T]=[this.touchStaX,this.touchStaY],F=this._getMatrix(_,T,o,a);this._fireEvent({type:"move",orgEvent:e,...F})}else{let _=this._getMatrix(s,r,o,a);this._fireEvent({type:"move",orgEvent:e,..._})}f&&g&&(this.prevMove=v),[this.prevEndX,this.prevEndY]=[o,a]}_setTouchEnd(e){if(!this.touchStaEl)return;un(document.body),!("createTouch"in document)&&screen.width>699&&(document.body.style.width="");let{clientX:n,clientY:i}=this.isTouchDevice?e.changedTouches[0]:e;[this.touchEndX,this.touchEndY]=[n,i],this.touchEndAt=new Date().getTime();let[s,r,o,a]=[this.touchStaX,this.touchStaY,this.touchEndX,this.touchEndY],l=this._getMatrix(s,r,o,a),{xMove:c,yMove:f}=this._getDirection(s,r,o,a),g=l.distanceX>l.distanceY?c:f;this._fireEvent({type:"end",direction:g,orgEvent:e,...l}),this.reset()}_getDirection(e,n,i,s){let r=e===i?"":e>i?"LEFT":"RIGHT",o=n===s?"":n>s?"UP":"DOWN";return{xMove:r,yMove:o}}_getMatrix(e,n,i,s){let r=new Date().getTime(),[o,a]=[Math.abs(i-e),Math.abs(s-n)],l=Math.ceil(Math.sqrt(o**2+a**2)),c=r-(this.touchStaAt||r),f=l/c,[g,v,_]=[this.touchOrgX,this.touchOrgY,this.touchOrgAt],[T,F]=[Math.abs(i-g),Math.abs(s-v)],L=Math.ceil(Math.sqrt(T**2+F**2)),$=r-(_||r),M=L/$;return{x0:g,y0:v,x1:e,y1:n,x2:i,y2:s,distanceX:o,distanceY:a,distance:l,duration:c,speed:f,distance0:L,duration0:$,speed0:M,touchStaEl:this.touchStaEl}}reset(){[this.touchStaX,this.touchStaY,this.touchStaAt]=[0,0,0],[this.touchEndX,this.touchEndY,this.touchEndAt]=[0,0,0],[this.prevMove,this.prevEndX,this.prevEndY]=["",0,0],this.touchStaEl=void 0}};window.TouchX=U;var dn=class extends HTMLElement{constructor(...e){let n=super(...e);this.swipeListener=this._swipeListener.bind(this)}connectedCallback(){new TouchX(this),this.wResizer=this.getAttribute("width")!==null,this.hResizer=this.getAttribute("height")!==null,this.prevEl=this.previousElementSibling,this.nextEl=this.nextElementSibling,[this.prevElWidth,this.nextElWidth]=[0,0],[this.prevElHeight,this.nextElHeight]=[0,0],document.addEventListener("x-swipe",this.swipeListener)}disconnectedCallback(){document.removeEventListener("x-swipe",this.swipeListener)}_swipeListener(e){let{type:n,touchStaEl:i,x0:s,y0:r,x2:o,y2:a}=e.detail;if(i===this){if(n==="start"&&(this.classList.add("active"),[this.prevElWidth,this.nextElWidth]=[this.prevEl.offsetWidth,this.nextEl.offsetWidth],[this.prevElHeight,this.nextElHeight]=[this.prevEl.offsetHeight,this.nextEl.offsetHeight]),n==="move"){if(this.wResizer){let l=o-s;this.prevEl.style.width=Math.max(this.prevElWidth+l,20)+"px",this.nextEl.style.width=Math.max(this.nextElWidth-l,20)+"px"}else if(this.hResizer){let l=a-r;this.prevEl.style.height=Math.max(this.prevElHeight+l,20)+"px",this.nextEl.style.height=Math.max(this.nextElHeight-l,20)+"px"}}n==="end"&&this.classList.remove("active")}}};customElements.get("x-resizer")||customElements.define("x-resizer",dn);var hn={fadeIn:function(t,e){this.style.opacity=t},fadeOut:function(t,e){this.style.opacity=1-t},slideIn:function(t,e){X(this,`translateX(${-100+t*100}%)`,t)},slideInLeft:function(t,e){X(this,`translateX(${-100+t*100}%)`,t)},slideOutLeft:function(t,e){X(this,`translateX(${-1*t*100}%)`,1-t)},slideInRight:function(t,e){X(this,`translateX(${100-t*100}%)`,t)},slideOut:function(t,e){X(this,`translateX(${1*t*100}%)`,1-t)},slideOutRight:function(t,e){X(this,`translateX(${1*t*100}%)`,1-t)},slideInDown:function(t,e){X(this,`translateY(${-100+t*100}%)`,t)},slideOutUp:function(t,e){X(this,`translateY(${-1*t*100}%)`,1-t)},slideInUp:function(t,e){X(this,`translateY(${100-t*100}%)`,t)},slideOutDown:function(t,e){X(this,`translateY(${1*t*100}%)`,1-t)},zoomIn:function(t,e){X(this,`scale(${t})`,t)},zoomOut:function(t,e){X(this,`scale(${1-t})`,1-t)},rotateIn:function(t,e){X(this,`rotate(${-180+t*180}deg)`,t)},rotateOut:function(t,e){X(this,`rotate(${t*180*-1}deg)`,1-t)}};function X(t,e,n){t.style.transform=e,t.style.opacity=n}var fn={linear:t=>t,easeIn:t=>Math.pow(t,1.675),easeOut:t=>1-Math.pow(1-t,1.675),easeInOut:t=>.5*(Math.sin((t-.5)*Math.PI)+1),inExpo:t=>t==0?0:Math.pow(1024,t-1),outExpo:t=>t==1?t:1-Math.pow(2,-10*t),inOutExpo:t=>t==0?0:t==1?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(-Math.pow(2,-10*(t-1))+2),bounceEaseOut:function(t){function e(n){for(let i=0,s=1,r;;i+=s,s/=2)if(n>=(7-4*i)/11)return-Math.pow((11-6*i-11*n)/4,2)+Math.pow(s,2)}return 1-e(1-t)}};function za(t,e,n,i){let s=document.documentElement;if(i){let a=i.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();s.style.setProperty("--animation-timing-function",a)}n&&s.style.setProperty("--animation-duration",n+"ms");let r=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),o=getComputedStyle(document.documentElement).getPropertyValue("--animation-duration")||"250ms";return r.match(/^expand-/)?(t.className.split(" ").filter(a=>a.match(/^x-expand/)).forEach(a=>t.classList.remove(a)),new Promise(a=>{t.classList.add(`x-${r}`,"x-hidden"),setTimeout(l=>a(),100)}).then(a=>new Promise(l=>{t.classList.remove("x-hidden"),setTimeout(c=>l(),parseInt(o))}))):(t.className.split(" ").filter(a=>a.match(/^x-expand/)).forEach(a=>t.classList.remove(a)),t.classList.add(`x-${r}`),new Promise(a=>{setTimeout(l=>{t.classList.remove(`x-${r}`),a()},parseInt(o))}))}function ja(t,e,n,i){n=n||250;let s=e||hn.fadeIn,r=i||fn.linear,o=performance.now();return new Promise(function(a){requestAnimationFrame(function l(c){let f=(c-o)/n;f>1&&(f=1),s.bind(t)(r(f),f),f<1?requestAnimationFrame(l):a(!0)})})}function W(t,e,n,i){if(typeof e=="string")return za(t,e,n,i);if(typeof e=="function")return ja(t,e,n,i)}W.TIMING_FUNCTIONS=fn;W.DRAW_FUNCTIONS=hn;var Ba=`
  x-slides {
    border: 1px solid #CCC;
    display: flex;
    overflow-x: hidden;
    width: 100%;
    box-sizing: border-box;
  }
  x-slides > * {
    min-width: 100%;
  }
`,pn=class extends HTMLElement{constructor(...e){let n=super(...e);return this._touchSwipeListener=this.touchSwipeListener.bind(this),n}connectedCallback(){new TouchX(this),K(this,Ba),this.currentNo=this.getAttribute("selected")||0,Array.from(this.children).forEach((e,n)=>e.setAttribute("index",n)),setTimeout(e=>this.setSlide(this.currentNo),300),window.addEventListener("resize",e=>this.setSlide(this.currentNo,!1)),document.body.addEventListener("x-swipe",this._touchSwipeListener)}disconnectedCallback(){Z(this),document.body.removeEventListener("x-swipe",this._touchSwipeListener)}animateTo(e){e=(e+this.children.length)%this.children.length;let n=this.querySelector(`[index="${e}"]`),i=this.scrollLeft,r=this.getScrollLeft(n)-i;return W(this,(o,a)=>{this.scrollLeft=i+r*o})}touchSwipeListener(e){let{x0:n,x2:i,type:s,speed:r}=e.detail;if(s==="start")this.dragStartX=this.scrollLeft;else if(s==="move")this.scrollLeft=this.dragStartX+(n-i);else if(s==="end"){this.dragStartX=void 0;let o=i+(i-n)*(1+r);if(Math.abs(o-n)>this.offsetWidth/2){let a=i<n?this.currentNo+1:this.currentNo-1;this.animateTo(a).then(l=>this.setSlide(a))}else this.animateTo(this.currentNo)}else s==="cancel"&&(this.dragStartX=void 0,this.setSlide(this.currentNo))}getScrollLeft(e){let[n,i]=[e.previousElementSibling,0];for(;n;)i+=n.offsetWidth,n=n.previousElementSibling;return i}setSlide(e){e=(e+this.children.length)%this.children.length,this.currentNo=e;let n=this.querySelector(`[index="${e}"]`),{prevSlideNum:i,nextSlideNum:s}=this._getNumSiblings(n),r=Math.floor(this.children.length/2);if(s>r){let a=s-r;for(var o=0;o<a;o++)this.insertBefore(this.lastElementChild,this.firstElementChild)}else if(i>=r){let a=i-r;for(let l=0;l<=a;l++)this.insertBefore(this.firstElementChild,null)}this.scrollLeft=this.getScrollLeft(n)}_getNumSiblings(e){let[n,i]=[0,0],s=e.nextElementSibling;for(;s;)i++,s=s.nextElementSibling;let r=e.previousElementSibling;for(;r;)n++,r=r.previousElementSibling;return{prevSlideNum:n,nextSlideNum:i}}};customElements.get("x-slides")||customElements.define("x-slides",pn);var Ra=`
  x-draggable { user-select: none; }
  .x-drop-active { box-shadow: 0 0 16px orange; transform: scale(1.05); }
`,mn=class extends HTMLElement{constructor(...e){let n=super(...e);return this.dragClone,this.onDrop=i=>1,this._touchSwipeListener=this.touchSwipeListener.bind(this),n}connectedCallback(){let e=this.getAttribute("drop-zone");this.dropZones=e&&Array.from(document.querySelectorAll(e)),console.log(e,this.dropZones),Array.from(this.children).forEach(n=>{n.classList.add("x-draggable"),new TouchX(n)}),K(this,Ra),document.body.addEventListener("x-swipe",this._touchSwipeListener)}disconnectedCallback(){Z(this),document.body.removeEventListener("x-swipe",this._touchSwipeListener)}touchSwipeListener(e){let{x1:n,y1:i,x2:s,y2:r,touchStaEl:o,type:a}=e.detail,[l,c]=[o.offsetWidth,o.offsetHeight];if(a==="start")o.style.opacity=.5,o.classList.add("x-active"),o.classList.contains("x-draggable")&&(this.dragClone=o.cloneNode(!0),this.dragClone.style.position="absolute",console.log({x1:n,y1:i,w:l,h:c}),this.dragClone.style.left=`${n-l/2}px`,this.dragClone.style.top=`${i-c/2}px`,this.dragClone.style.width=`${l}px`,this.dragClone.style.height=`${c}px`,this.dragClone.addEventListener("contextmenu",f=>f.preventDefault()),document.body.appendChild(this.dragClone));else if(a==="move"&&this.dragClone){this.dragClone.style.opacity=1,this.dragClone.style.left=`${s-l/2}px`,this.dragClone.style.top=`${r-c/2}px`;let f=this.onDropZone(s-l/2,r-c/2);f&&!f.contains(o)?f.classList.add("x-drop-active"):this.dropZones.forEach(g=>g.classList.remove("x-drop-active"))}else if(a==="end"){let f=this.onDropZone(s-l/2,r-c/2);f&&this.onDrop({dropZoneEl:f,...e.detail})&&f.appendChild(o),this.dropZones.forEach(g=>g.classList.remove("x-drop-active")),o.style.opacity=null,o.classList.remove("x-active"),this.reset()}else a==="cancel"&&(o.style.opacity=null,o.classList.remove("x-active"),this.reset())}reset(){this.dragClone&&document.body.removeChild(this.dragClone),this.dragClone=void 0}onDropZone(e,n){return this.dropZones?this.dropZones.find(s=>{let{x:r,y:o,width:a,height:l}=s.getBoundingClientRect();return r<=e&&o<=n&&e<=r+a&&n<=o+l}):void 0}};customElements.get("x-draggable")||customElements.define("x-draggable",mn);var Ua=`
  x-sortable { user-select: none; position: relative;}
  x-sortable > *, x-sortable li { cursor: grab; position: relative; }
  x-sortable.x-active .x-target:after { 
    content: ''; height: 2px; display: block; background: #AAA; 
    position: absolute; inset: auto 0 -4px 0;
  }
  x-sortable .x-cloned { position: absolute; pointer-events: none; display: none; }
`,gn=class extends HTMLElement{constructor(...e){let n=super(...e);return this._touchSwipeListener=this.touchSwipeListener.bind(this),n}connectedCallback(){K(this,Ua),new TouchX(this),document.body.addEventListener("x-swipe",this._touchSwipeListener)}disconnectedCallback(){Z(this),document.body.removeEventListener("x-swipe",this._touchSwipeListener)}touchSwipeListener(e){let{type:n,x2:i,y2:s,touchStaEl:r}=e.detail;if(n==="start")r.style.opacity=.5,this.classList.add("x-active"),this.clonedEl=r.cloneNode(r,!0),this.clonedEl.classList.add("x-cloned"),this.clonedEl.style.width=`${r.offsetWidth}px`,this.appendChild(this.clonedEl);else if(n==="move")this.querySelector(".x-target")?.classList.remove("x-target"),this.target=document.elementFromPoint(i,s),this.target?.classList.add("x-target"),this._setClonedElPos(i,s);else if(n==="end"){if(this.target&&this.contains(this.target))try{this.target.insertAdjacentElement("afterend",r)}catch{}r.style.opacity=null,this.classList.remove("x-active"),this.clonedEl.remove()}else n==="cancel"&&(r.style.opacity=null,this.classList.remove("x-active"),this.clonedEl.remove())}_setClonedElPos(e,n){this.clonedEl.style.top=`${n-this.offsetTop+window.scrollY}px`,this.clonedEl.style.left=`${e-this.offsetLeft}px`,this.clonedEl.style.display="block"}};customElements.get("x-sortable")||customElements.define("x-sortable",gn);var bn=`x-drawer:not([desktop]){position:fixed;z-index:99999;background:var(--background-color, #FFF);color:var(--text-color, #333);user-select:text}x-drawer:not([desktop]).x-visible{display:initial;box-shadow:var(--box-shadow, 0 0 8px #333);opacity:1}x-drawer:not([desktop])[left]{inset:0 auto 0 0}x-drawer:not([desktop])[right]{inset:0 0 0 auto}x-drawer:not([desktop])[top]{inset:0 0 auto}x-drawer:not([desktop])[bottom]{inset:auto 0 0}x-drawer.x-visible .x-handle{display:none}x-drawer:not([desktop]) .x-handle{position:absolute;cursor:grab;background:rgba(1,1,1,0);inset:0 auto 0 100%}x-drawer:not([desktop])[left] .x-handle{inset:0 auto 0 100%;width:32px;height:auto}x-drawer:not([desktop])[right] .x-handle{inset:0 100% 0 auto;width:32px;height:auto}x-drawer:not([desktop])[top] .x-handle{inset:100% 0 auto;width:auto;height:32px}x-drawer:not([desktop])[bottom] .x-handle{inset:auto 0 100%;width:auto;height:32px}
`;var xn=class extends HTMLElement{constructor(...e){let n=super(...e);return this.width,this.height,this._url=location.href,this.classList.remove("x-visible"),this._docClickListener=this.docClickListener.bind(this),this._touchSwipeListener=this.touchSwipeListener.bind(this),n}connectedCallback(){this.getAttribute("desktop")===null&&(this.pos=this.getAttribute("right")!==null?"RIGHT":this.getAttribute("top")!==null?"TOP":this.getAttribute("bottom")!==null?"BOTTOM":"LEFT",this.handle=document.createElement("div"),this.handle.classList.add("x-handle"),this.appendChild(this.handle),K(this,bn),[this.width,this.height]=[this.offsetWidth,this.offsetHeight],new TouchX(this.handle),document.body.addEventListener("x-swipe",this._touchSwipeListener),document.body.addEventListener("click",this._docClickListener),this.classList.contains("x-visible")||(this.style.transform=this._getHideTransform(0,0,1)))}disconnectedCallback(){Z(this),document.body.removeEventListener("x-swipe",this._touchSwipeListener),document.body.removeEventListener("click",this._docClickListener)}_getShowTransform(e,n,i){let[s,r,o]=[this.pos,this.width,this.height],a=["LEFT","RIGHT"].includes(s),l=a?e*(1-i):n*(1-i);return a?`translateX(${l}px)`:`translateY(${l}px)`}_getHideTransform(e,n,i){let[s,r,o]=[this.pos,this.width,this.height],a=["LEFT","RIGHT"].includes(s),l=s==="LEFT"?e+(r+e)*i*-1:s==="RIGHT"?e+(r+e)*i:s==="TOP"?n+(o+n)*i*-1:s==="BOTTOM"?n+(o+n)*i:"";return l=s==="LEFT"?Math.max(l,r*-1):s==="RIGHT"?Math.min(l,r):s==="TOP"?Math.max(l,o*-1):s==="BOTTOM"?Math.min(l,o):void 0,a?`translateX(${l}px)`:`translateY(${l}px)`}toggle(){this.classList.contains("x-visible")?this.hide("toggle"):this.show("toggle")}docClickListener(e){this.contains(e.target)?setTimeout(n=>{this._url!==location.href&&this.hide("url-change"),this._url=location.href}):this.showHideJustDone||this.hide("document-click")}touchSwipeListener(e){let{x2:n,y2:i,distance0:s,touchStaEl:r,direction:o,type:a,...l}=e.detail;r===this.handle&&(a==="move"?this.showPartly(this.pos,n,i):a==="end"&&(["LEFT","RIGHT"].includes(this.pos)?s>this.width/2?this.show("drag"):this.hide("drag"):s>this.height/2?this.show("drag"):this.hide("drag")))}show(e){let n=window.getComputedStyle(this),i=new WebKitCSSMatrix(n.transform),[s,r]=[i.m41,i.m42];this.classList.add("x-visible"),this.showHideJustDone=!0,setTimeout(o=>this.showHideJustDone=void 0,100),W(this,(o,a)=>{let l=this._getShowTransform(s,r,o);this.style.transform=l},250,W.TIMING_FUNCTIONS.linear)}showPartly(e,n,i){let[s,r,o,a]=[this.width,this.height,window.innerWidth,window.innerHeight];this.classList.add("x-visible");let l=e==="LEFT"?`translateX(${Math.min(n-s,0)}px)`:e==="RIGHT"?`translateX(${Math.max(s-(o-n),0)}px)`:e==="TOP"?`translateY(${Math.min(i-r,0)}px)`:e==="BOTTOM"?`translateY(${Math.max(r-(a-i),0)}px)`:"";this.style.transform=l}hide(e){if(!this.classList.contains("x-visible"))return;let n=window.getComputedStyle(this),i=new WebKitCSSMatrix(n.transform),[s,r]=[i.m41,i.m42];this.showHideJustDone=!0,setTimeout(o=>this.showHideJustDone=void 0,100),W(this,(o,a)=>{let l=this._getHideTransform(s,r,o);this.style.transform=l},250,W.TIMING_FUNCTIONS.linear).then(o=>this.classList.remove("x-visible"))}};customElements.get("x-drawer")||customElements.define("x-drawer",xn);on();var bt=document.querySelector.bind(document);(function(t){if(t.search[1]==="/"){var e=t.search.slice(1).split("&").map(function(n){return n.replace(/~and~/g,"&")}).join("?");window.history.replaceState(null,null,t.pathname.slice(0,-1)+e+t.hash)}})(window.location);window.addEventListener("DOMContentLoaded",function(){document.body.addEventListener("click",i=>document.body.classList.remove("a11y-outline")),document.body.addEventListener("keydown",i=>i.key==="Tab"&&document.body.classList.add("a11y-outline")),bt("#dark-mode-switch").addEventListener("click",i=>{let s=bt("#dark-mode-switch").getAttribute("aria-checked")==="true"?"light":"dark";document.documentElement.setAttribute("data-theme",s),localStorage.setItem("theme",s)});let t=localStorage.getItem("theme");document.documentElement.setAttribute("data-theme",t),bt("#dark-mode-switch").setAttribute("status",t==="dark"?"on":"off"),("createTouch"in document||screen.width<=699)&&(bt("#sidebar").classList.add("hidden"),document.body.addEventListener("x-route",i=>bt("#sidebar").classList.add("hidden"))),document.querySelector("head").querySelector('[href^="http"], [href^="//"], [src^="http"], [src^="//"]')&&window.fetch("//unpkg.com/elements-x").then(i=>{!i.ok&&alert("Requires internet connection, but not fully working")}).catch(i=>{alert("Requires internet connection, but not fully working")})});})();
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
