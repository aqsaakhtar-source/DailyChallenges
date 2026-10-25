/* ===== EDIT YOUR DETAILS HERE ===== */
const ME={name:'Aqsa Akhtar',email:'aqsaakhtar0123@gmail.com',role:'UI / UX Designer',links:{Dribbble:'https://dribbble.com/aqsa-akhtar',LinkedIn:'https://www.linkedin.com/in/aqsa-akhtar-ab7090432/'}};
const T={1:'Sign Up',2:'Credit Card Checkout',3:'Landing Page',4:'Calculator',5:'App Icon',6:'User Profile',7:'Settings',8:'404 Page',9:'Music Player',10:'Social Share',11:'Flash Message',12:'E-Commerce Shop',13:'Direct Messaging',14:'Countdown Timer',15:'On/Off Switch',16:'Pop-Up Overlay',17:'Email Receipt',18:'Analytics Chart',19:'Leaderboard',20:'Location Tracker',21:'Home Monitoring',22:'Search',23:'Onboarding',24:'Boarding Pass',25:'TV App',26:'Subscribe',27:'Dropdown',28:'Contact Us',29:'Map',30:'Pricing'};
const VID=[5,10,12,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
const WORK=Object.keys(T).map(k=>{k=+k;const n=String(k).padStart(3,'0'),v=VID.includes(k);return{n,title:T[k],v,src:`assets/work/Daily_UI_${n}.${v?'mp4':'png'}`,th:`assets/work/Daily_UI_${n}.${v?'jpg':'png'}`}});
const S=Object.assign({accent:'#00f0ff',fx:true,cursor:true,reduce:false,particles:true},JSON.parse(localStorage.getItem('cp')||'{}'));
const save=()=>localStorage.setItem('cp',JSON.stringify(S));
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
function apply(){const d=document.documentElement.style;d.setProperty('--a',S.accent);d.setProperty('--fx',S.fx?1:0);document.body.classList.toggle('nocursor',!S.cursor);document.body.classList.toggle('reduce',S.reduce);$('#cur')&&($('#cur').style.display=S.cursor?'':'none',$('#curd').style.display=S.cursor?'':'none')}
const page=document.body.dataset.p;
const NAV=[['index','Home'],['work','My Work'],['profile','Profile'],['contact','Contact'],['settings','Settings']];
document.body.insertAdjacentHTML('afterbegin',`<canvas id=bg></canvas><div id=cur></div><div id=curd></div><div id=toast></div>
<nav><a class=logo href=index.html>${ME.name.split(' ')[0].toUpperCase()}<b>//</b>UI</a><button id=bt>MENU</button><ul>${NAV.map(([h,t])=>`<li><a class="l ${h==page?'on':''}" href=${h}.html>${t}</a></li>`).join('')}</ul></nav>`);
document.body.insertAdjacentHTML('beforeend',`<footer>© ${new Date().getFullYear()} ${ME.name.toUpperCase()} // ALL SYSTEMS ONLINE</footer>`);
$('#bt').onclick=()=>$('nav ul').classList.toggle('o');
function toast(m){const t=$('#toast');t.textContent=m;t.classList.add('s');setTimeout(()=>t.classList.remove('s'),2200)}
/* cursor */
let mx=innerWidth/2,my=innerHeight/2,cx=mx,cy=my;
addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;$('#curd').style.transform=`translate(${mx}px,${my}px)`});
document.addEventListener('mouseover',e=>$('#cur').classList.toggle('h',!!e.target.closest('a,button,.card,input,textarea')));
/* background: neon grid + particles + mouse links */
const cv=$('#bg'),g=cv.getContext('2d');let W,H,P=[];
function rs(){W=cv.width=innerWidth;H=cv.height=innerHeight;P=Array.from({length:Math.min(90,W/16|0)},()=>({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.5,vy:(Math.random()-.5)*.5}))}rs();addEventListener('resize',rs);
let t0=0;(function loop(t){requestAnimationFrame(loop);g.clearRect(0,0,W,H);
const hz=H*.55,sp=(t/30)%60;g.strokeStyle='#ff2bd62e';g.lineWidth=1;
for(let i=0;i<14;i++){const y=hz+Math.pow((i*60+sp)/(H*.45),2)*H*.45*1.6;if(y>H)continue;g.beginPath();g.moveTo(0,y);g.lineTo(W,y);g.stroke()}
for(let i=-20;i<=20;i++){g.beginPath();g.moveTo(W/2+i*20,hz);g.lineTo(W/2+i*160,H);g.stroke()}
const gr=g.createRadialGradient(W/2,hz,0,W/2,hz,W*.5);gr.addColorStop(0,'#ff2bd633');gr.addColorStop(1,'transparent');g.fillStyle=gr;g.fillRect(0,0,W,H);
if(!S.particles||S.reduce)return;g.fillStyle=S.accent;
P.forEach((p,i)=>{p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1;const dx=mx-p.x,dy=my-p.y,d=Math.hypot(dx,dy);if(d<160){p.x-=dx/d*1.5;p.y-=dy/d*1.5}
g.globalAlpha=.8;g.fillRect(p.x,p.y,2,2);for(let j=i+1;j<P.length;j++){const q=P[j],e=Math.hypot(p.x-q.x,p.y-q.y);if(e<110){g.globalAlpha=(1-e/110)*.35;g.strokeStyle=S.accent;g.beginPath();g.moveTo(p.x,p.y);g.lineTo(q.x,q.y);g.stroke()}}});g.globalAlpha=1})(0);
/* reveal, counters, bars, typing */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('v');$$('[data-c]',e.target).forEach(c=>{const to=+c.dataset.c;let n=0;const s=setInterval(()=>{n+=Math.ceil(to/40);if(n>=to){n=to;clearInterval(s)}c.textContent=n+(c.dataset.s||'')},30)});$$('.bar i',e.target).forEach(b=>b.style.width=b.dataset.w+'%');io.unobserve(e.target)}}),{threshold:.15});
$$('.reveal').forEach(el=>io.observe(el));
$$('[data-type]').forEach(el=>{const s=el.dataset.type;el.classList.add('cur');let i=0;(function f(){el.firstChild&&(el.firstChild.nodeValue=s.slice(0,i));if(i++<s.length)setTimeout(f,38)})();el.prepend(document.createTextNode(''))});
/* work cards */
function card(w){const b=document.createElement('button');b.className='card reveal';b.dataset.v=w.v?'motion':'static';
b.innerHTML=`<span class=tag>${w.v?'MOTION':'STATIC'}</span><div class=img><img loading=lazy src="${w.th}" alt="Daily UI ${w.n} ${w.title}"></div><div class=i><small>Daily UI ${w.n}</small><h3>${w.title}</h3></div>`;
b.onmousemove=e=>{const r=b.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;b.style.setProperty('--mx',x*100+'%');b.style.setProperty('--my',y*100+'%');if(!S.reduce)b.style.transform=`rotateY(${(x-.5)*14}deg) rotateX(${(.5-y)*14}deg) translateZ(10px)`};
b.onmouseleave=()=>b.style.transform='';b.onclick=()=>openLB(w);io.observe(b);return b}
function openLB(w){let l=$('#lb');if(!l){document.body.insertAdjacentHTML('beforeend','<div id=lb><button>CLOSE ✕</button><div></div></div>');l=$('#lb');l.onclick=e=>{if(e.target.tagName!='VIDEO'&&e.target.tagName!='IMG'){l.classList.remove('o');$('div',l).innerHTML=''}}}
$('div',l).innerHTML=(w.v?`<video src="${w.src}" controls autoplay loop playsinline></video>`:`<img src="${w.src}" alt="${w.title}">`)+`<p class=mono>DAILY UI ${w.n} // ${w.title.toUpperCase()}</p>`;l.classList.add('o')}
addEventListener('keydown',e=>{if(e.key=='Escape'&&$('#lb'))$('#lb').click()});
const gr_=$('#grid');if(gr_){const lim=+gr_.dataset.n||99;WORK.slice(0,lim).forEach(w=>gr_.append(card(w)));
$$('.filters button').forEach(b=>b.onclick=()=>{$$('.filters button').forEach(x=>x.classList.remove('on'));b.classList.add('on');$$('.card',gr_).forEach(c=>{const s=b.dataset.f=='all'||c.dataset.v==b.dataset.f;c.style.display=s?'':'none'})})}
/* settings page */
const sw=$$('[data-k]');sw.forEach(b=>{b.classList.toggle('on',!!S[b.dataset.k]);b.onclick=()=>{S[b.dataset.k]=!S[b.dataset.k];b.classList.toggle('on');save();apply();toast('SETTING UPDATED')}});
$$('.dots button').forEach(b=>{b.style.background=b.style.color=b.dataset.c;b.classList.toggle('on',b.dataset.c==S.accent);b.onclick=()=>{S.accent=b.dataset.c;save();apply();$$('.dots button').forEach(x=>x.classList.toggle('on',x==b));toast('ACCENT SYNCED')}});
$('#reset')&&($('#reset').onclick=()=>{localStorage.removeItem('cp');location.reload()});
/* contact */
$('#cf')&&($('#cf').onsubmit=e=>{e.preventDefault();const f=new FormData(e.target);toast('TRANSMITTING...');setTimeout(()=>location.href=`mailto:${ME.email}?subject=${encodeURIComponent('Portfolio message from '+f.get('n'))}&body=${encodeURIComponent(f.get('m')+'\n\n'+f.get('e'))}`,700)});
$('#links')&&($('#links').innerHTML=Object.entries(ME.links).map(([k,v])=>`<a class="btn g" style="margin:6px 8px 0 0" href="${v}" target=_blank rel=noopener>${k}</a>`).join(''));
$$('[data-me]').forEach(el=>el.textContent=ME[el.dataset.me]);
apply();
