const U=[['POWERTRAIN','Solid-State Battery Pack','Today’s liquid-electrolyte batteries can overheat, and range is limited when petrol is not an option.','Use solid-state cells with higher energy density, faster charging and much lower fire risk.',['Longer range','Safer in heat and crashes','Longer battery life'],['battery'],[.5,.2,9.5]],
['BODY & ROOF','Solar Roof Skin','A large van roof is wasted space, and charging points may be scarce or unreliable.','Add thin solar panels on the roof and body to trickle-charge the battery and run cabin systems.',['Free daily range','Keeps AC and lights alive','Ideal for sunny regions'],['solar'],[.4,.6,9.5]],
['POWER OUTLET','Vehicle-to-Home / Grid (V2X)','Blackouts and fuel crises leave homes, clinics and shelters without power.','Bi-directional charging turns the van into a mobile power bank for a home or the grid.',['Emergency backup','Earns value from the grid','Community resilience'],['v2x'],[-1.25,.25,9]],
['GEARBOX • MODULAR','Swappable Battery Modules','Long charging waits and too few stations slow down a busy shared vehicle.','Use standard modular packs that can be swapped in minutes at a service point.',['Near-zero downtime','Easy upgrades','Lower repair costs'],['swap','swapL'],[.6,.2,10]],
['CHARGING PORT','Ultra-Fast 800V Charging','Slow charging makes long family trips and taxi use impractical.','Adopt an 800V system with smart and wireless charging for very quick top-ups.',['Short stops','Smart grid-friendly charging','Hands-free at home'],['port'],[.95,.2,8.5]],
['SAFETY SYSTEM','AI Safety Shield','Crowded future roads raise collision risk, especially with 6–8 people on board.','Fuse LiDAR, radar and cameras with driver-alert AI and vehicle-to-vehicle (V2V) talk.',['Auto emergency braking','Fatigue alerts','Spots hazards early'],['lidar','radar'],[.85,.3,10]],
['CHASSIS & UNDERBODY','Battery Fire & Flood Guard','Floods, storms and battery fires are growing risks on future roads.','Seal the pack, add thermal-runaway containment, underbody armour and early-warning sensors.',['Flood-ready','Fire isolated early','Safe passenger exit alerts'],['guard'],[.4,-.28,9.5]]];
const G=[['1ST GEAR','Quick wins','Solar roof skin, AI safety shield, flood and fire guard'],['2ND GEAR','Build-up','800V fast charging, V2X power outlet, swappable modules'],['3RD GEAR','Next-gen','Solid-state battery pack']];
const L=a=>`<ol class="c">${a.map(x=>`<li class="n"><div><b>${x[0]}</b><span>${x[1]}</span></div></li>`).join('')}</ol>`;
const ST=[null,
['THE CHALLENGE',`<div class="mono" style="color:var(--v)">THE CHALLENGE</div><h2>The road ahead is changing</h2>${L([['Petrol shortage','Fuel may become scarce and costly, so vehicles must run without it.'],['Power cuts & grid stress','Charging must still work when electricity supply is unstable.'],['Extreme weather','Floods, storms and heat stress the battery and the body.'],['Crowded, riskier roads','More vehicles and more passengers mean more safety demands.']])}`,[-.45,.25,12.5],[]],
['OUR IDEA',`<div class="mono" style="color:var(--v)">OUR IDEA</div><h2>One vehicle. Many futures.</h2><p class="nt" style="margin:0 0 14px;font-style:normal;font-size:14px;color:var(--i)">A family-size Toyota EV that keeps moving without petrol, powers people in emergencies and protects everyone on board.</p><div class="sts"><div><b>6–8</b><span>PASSENGERS</span></div><div><b data-n="0">0</b><span>PETROL NEEDED</span></div><div><b data-n="7">0</b><span>UPGRADES</span></div></div>`,[.1,.3,12.5],[]],
...U.map((u,i)=>[u[0],`<div class="num">0${i+1}</div><div class="mono" style="color:var(--mu)">UPGRADE 0${i+1} • ${u[0]}</div><h2>${u[1]}</h2><dl><dt>Future problem</dt><dd>${u[2]}</dd><dt>Proposed upgrade</dt><dd>${u[3]}</dd></dl><ol>${u[4].map(b=>`<li>${b}</li>`).join('')}</ol>`,u[6],u[5]]),
['THE BIG PICTURE',`<div class="mono" style="color:var(--v)">THE BIG PICTURE</div><h2>How the upgrades work together</h2>${L([['Sun & Grid','Solar roof and 800V charging'],['Quick Energy','Swap or fast-charge'],['Smart Storage','Solid-state battery'],['Safe Drive','AI shield, flood and fire guard'],['Power Out','V2X for homes and clinics']])}`,[.25,.4,12.5],['solar','port','battery','lidar','v2x']],
['WHERE TO START',`<div class="mono" style="color:var(--v)">SUGGESTED PRIORITY</div><h2>Shifting gears: where to start</h2><div class="gt">${G.map((g,i)=>`<button data-g="${i}" class="${i?'':'on'}">${g[0]}</button>`).join('')}</div><div class="gp" id="gp"><h4>${G[0][1]}</h4><p>${G[0][2]}</p></div>`,[.5,.25,12.5],[]],
['KEY TAKEAWAYS',`<div class="mono" style="color:var(--v)">CONCLUSION</div><h2>Key takeaways</h2>${L([['Petrol-free and sustainable','Solar and solid-state ideas reduce dependence on fuel.'],['Safer for 6–8 people','AI safety plus flood and fire protection guard every passenger.'],['Useful beyond driving','V2X and swappable batteries help families and communities in tough times.']])}`,[-.3,.3,12.5],[]],
['PRESENTED BY',`<dl><dt>Presented by</dt><dd style="font:600 22px/1.3 Fraunces,Georgia,serif">B. Akileshwaran<br>&amp; Dharshan Rithik</dd></dl>`,[-.9,.25,12.5],[]]];
const N=ST.length,TIT=['BEYOND PETROL',...ST.slice(1).map(s=>s[0])];
const pn=document.getElementById('pn'),hero=document.getElementById('hero'),rl=document.getElementById('rl'),ln=document.getElementById('ln'),tb=document.getElementById('tb');
for(let i=0;i<N;i++){const b=document.createElement('button');b.title=TIT[i];b.onclick=()=>scrollTo({top:i*innerHeight,behavior:'smooth'});rl.appendChild(b)}
ln.innerHTML=[0,1,2].map(()=>'<g style="display:none"><path class="ln"/><circle class="dt" r="5"/><text class="tx"></text></g>').join('');const gs=[...ln.children];
pn.onclick=e=>{const b=e.target.closest('[data-g]');if(!b)return;pn.querySelectorAll('.gt button').forEach(x=>x.classList.toggle('on',x==b));const g=G[b.dataset.g];document.getElementById('gp').innerHTML=`<h4>${g[1]}</h4><p>${g[2]}</p>`};
addEventListener('keydown',e=>{if(e.key=='ArrowDown'||e.key=='ArrowRight')scrollBy({top:innerHeight,behavior:'smooth'});if(e.key=='ArrowUp'||e.key=='ArrowLeft')scrollBy({top:-innerHeight,behavior:'smooth'})});
// ---------- 3D blueprint ----------
const T=THREE,R=new T.WebGLRenderer({canvas:document.getElementById('c'),antialias:true,alpha:true});R.setPixelRatio(Math.min(devicePixelRatio,2));
const sc=new T.Scene(),cam=new T.PerspectiveCamera(30,1,.1,100),car=new T.Group();sc.add(car);
const TN=[0xf7f3ea,0x2a2d2b,0x2f7d5b,0xff4b1f],VER=new T.Color(0xff4b1f),P={};
const mk=(g,tn,bo)=>{const gr=new T.Group(),c=new T.Color(TN[tn||0]),f=new T.Mesh(g,new T.MeshBasicMaterial({color:c,transparent:true,polygonOffset:true,polygonOffsetFactor:1,polygonOffsetUnits:1}));f.userData={c,o:bo||1};gr.add(f,new T.LineSegments(new T.EdgesGeometry(g,28),new T.LineBasicMaterial({color:tn==1?0x8d9792:0x121212,transparent:true})));return gr};
const at=(o,x,y,z)=>{o.position.set(x||0,y||0,z||0);return o},box=(w,h,d,t,x,y,z)=>at(mk(new T.BoxGeometry(w,h,d),t),x,y,z),
cyl=(r,l,t,x,y,z,ax)=>{const o=at(mk(new T.CylinderGeometry(r,r,l,28),t),x,y,z);if(ax=='z')o.rotation.x=Math.PI/2;if(ax=='x')o.rotation.z=Math.PI/2;return o},
grp=(...a)=>{const g=new T.Group();a.forEach(q=>g.add(q));return g},
ext=(s,d,t,bo)=>{const g=new T.ExtrudeGeometry(s,{depth:d,bevelEnabled:true,bevelSize:.03,bevelThickness:.03,bevelSegments:2,curveSegments:16});g.translate(0,0,-d/2);return mk(g,t,bo)},
poly=p=>{const s=new T.Shape();p.forEach((q,i)=>i?s.lineTo(q[0],q[1]):s.moveTo(q[0],q[1]));return s};
function add(n,label,o,v,x,y,z){if(x!==undefined)o.position.set(x,y,z);car.add(o);const fs=[],ls=[];o.traverse(q=>{if(q.isLineSegments)ls.push(q.material);else if(q.isMesh)fs.push(q)});P[n]={o,h:o.position.clone(),v:new T.Vector3(...v),label,fs,ls,f:0,g:0}}
function side(){const s=new T.Shape();s.moveTo(-2.4,.4);s.lineTo(-1.99,.4);s.absarc(-1.55,.4,.44,Math.PI,0,true);s.lineTo(1.11,.4);s.absarc(1.55,.4,.44,Math.PI,0,true);s.lineTo(2.4,.4);s.lineTo(2.45,.72);s.lineTo(1.15,1.02);s.lineTo(-2.3,1.02);s.lineTo(-2.5,.7);s.closePath();return ext(s,.06,0)}
add('hood','Hood',ext(poly([[1.15,1.06],[1.9,1],[2.35,.84],[2.45,.7],[1.15,.84]]),1.62,0),[1,1.6,0],0,0,0);
add('tail',null,ext(poly([[-2.2,1.7],[-2.42,1.04],[-2.5,.66],[-2.28,.66],[-2.2,.95]]),1.5,0),[-1.5,.4,0],0,0,0);
add('glass','Glass cabin',ext(poly([[1.15,1.04],[.6,1.72],[-2.2,1.72],[-2.35,1.04]]),1.5,0,.45),[0,1.3,0],0,0,0);
add('solar','Solar roof skin',grp(box(2.6,.05,1.4,1),...[-1.04,-.52,0,.52,1.04].map(q=>box(.02,.07,1.4,0,q,0,0))),[0,1.7,0],-.8,1.78,0);
add('sideR','Door & body panel',side(),[0,.1,1.6],0,0,.85);add('sideL',null,side(),[0,.1,-1.6],0,0,-.85);
add('chassis','Chassis',grp(box(4.8,.08,1.6,1),box(4.8,.1,.12,0,0,-.02,.7),box(4.8,.1,.12,0,0,-.02,-.7)),[0,-.4,0],0,.46,0);
add('bumpF',null,box(.18,.3,1.7,0,2.5,.58,0),[1.2,0,0],2.5,.58,0);add('bumpR',null,box(.18,.3,1.7,0,-2.5,.58,0),[-1.2,0,0],-2.5,.58,0);
add('lights',null,grp(box(.1,.07,.35,2,0,0,.55),box(.1,.07,.35,2,0,0,-.55)),[1.4,.3,0],2.42,.76,0);
const wheel=()=>grp(cyl(.4,.26,1),cyl(.28,.27,0),...[0,1,2,3,4].map(i=>{const b=box(.5,.05,.28,1);b.rotation.z=i*Math.PI/5;return b}));
[[1.55,1],[1.55,-1],[-1.55,1],[-1.55,-1]].forEach(([q,s],i)=>add('w'+i,i?null:'Wheel',wheel(),[0,0,1.6*s],q,.4,.8*s));
const seat=z=>{const b=box(.1,.55,.42,1,-.22,.3,0);b.rotation.z=.15;return at(grp(box(.5,.1,.42,1),b),0,0,z)};
add('seat1','6–8 seats',grp(seat(.4),seat(-.4)),[.4,.9,0],.55,.64,0);add('seat2',null,grp(seat(.4),seat(-.4)),[0,1,0],-.5,.64,0);add('seat3',null,grp(box(.5,.1,1.3,1),box(.1,.55,1.3,1,-.22,.3,0)),[-.5,1.1,0],-1.5,.64,0);
add('dash',null,grp(box(.3,.22,1.55,1)),[.6,.7,0],1,.92,0);
add('battery','Solid-state battery',grp(box(2.6,.14,1.1,1),...[-1.1,-.8,-.5,-.2,.1,.4,.7,1].map(q=>box(.03,.145,1,2,q,0,0))),[0,-1.5,0],0,.27,0);
add('swap','Swappable modules',box(2,.12,.28,2,0,.27,.78),[0,-.8,1.4],0,0,0);add('swapL',null,box(2,.12,.28,2,0,.27,-.78),[0,-.8,-1.4],0,0,0);
add('guard','Underbody armour',box(3.6,.05,1.5,1),[0,-1.8,0],0,.1,0);
add('port','Charging port · 800V',grp(box(.22,.22,.08,1),cyl(.07,.1,2,0,0,.05,'z')),[0,.4,1.4],1.85,.88,.9);
const vx=grp(box(.25,.3,.1,1),cyl(.06,.12,2,-.05,.05,.05,'z'),cyl(.06,.12,2,.05,-.05,.05,'z'));vx.rotation.y=-Math.PI/2;add('v2x','V2X outlet',vx,[-1.8,.2,.3],-2.55,.86,.4);
add('lidar','LiDAR',grp(cyl(.1,.1,1,0,0,0,'y'),cyl(.115,.03,2,0,.05,0,'y')),[0,1.6,0],.7,1.88,0);add('radar','Imaging radar',box(.06,.14,.3,2),[1.4,0,0],2.52,.62,0);
const gd=new T.GridHelper(18,36,0x121212,0x121212);gd.material.transparent=true;gd.material.opacity=.14;sc.add(gd);
const sm=(a,b,v)=>Math.min(1,Math.max(0,(v-a)/(b-a))),V=new T.Vector3(),B=new T.Box3(),cen=p=>{B.setFromObject(p.o);return B.getCenter(new T.Vector3())};
let W,H,cur=-1,mob,px=0,py=0,az=-.9,el=.2,ds=12.5,ox=0,oy=0,tg=new T.Vector3(0,.8,0),fx=1;
addEventListener('pointermove',e=>{px=e.clientX/innerWidth-.5;py=e.clientY/innerHeight-.5});
function rs(){W=innerWidth;H=innerHeight;R.setSize(W,H,false);cam.aspect=W/H;mob=W<800;document.getElementById('sp').style.height=N*H+'px'}addEventListener('resize',rs);rs();
function render(s){const o=ST[s];document.getElementById('fg').textContent=String(s).padStart(2,'0');hero.classList.toggle('x',s>0);tb.classList.toggle('x',s==0);pn.classList.toggle('x',s==0);
 if(o){pn.innerHTML=o[1];pn.scrollTop=0;pn.querySelectorAll('[data-n]').forEach(n=>{const t=+n.dataset.n,s0=performance.now(),f=x=>{const p=Math.min(1,(x-s0)/1400);n.textContent=Math.round(t*p);p<1&&requestAnimationFrame(f)};requestAnimationFrame(f)})}
 [...rl.children].forEach((b,i)=>{b.classList.toggle('on',i==s);b.classList.toggle('d',i<s)})}
function loop(t){requestAnimationFrame(loop);t*=.001;
 const s=Math.min(N-1,Math.max(0,Math.floor(scrollY/H+.5)));if(s!=cur){cur=s;render(s)}
 const o=ST[s],cm=o?o[2]:[-.9,.2,12.5];let fl=o?o[3]:[];if(s==ST.length-4)fl=[fl[Math.floor(t/1.4)%fl.length]];
 for(const k in P){const p=P[k],foc=fl.includes(k)?1:0,gh=fl.length?(foc?0:1):0;p.f+=(foc-p.f)*.06;p.g+=(gh-p.g)*.06;const e=p.f*p.f*(3-2*p.f);p.o.position.copy(p.h).addScaledVector(p.v,e);
  p.fs.forEach(q=>{q.material.color.copy(q.userData.c).lerp(VER,p.f);q.material.opacity=q.userData.o*(1-.9*p.g)});p.ls.forEach(m=>m.opacity=1-.72*p.g)}
 let tt=new T.Vector3(0,.8,0);if(fl.length){tt=new T.Vector3();fl.forEach(k=>tt.add(cen(P[k])));tt.multiplyScalar(.7/fl.length).add(new T.Vector3(0,.25,0))}
 tg.lerp(tt,.05);const a0=s==0?-.9+t*.12:cm[0]+Math.sin(t*.25)*.08;az+=((a0+px*.3)-az)*.05;el+=((cm[1]-py*.15)-el)*.05;ds+=((cm[2]+(mob?2.5:0))-ds)*.05;
 cam.position.set(tg.x+Math.sin(az)*Math.cos(el)*ds,tg.y+Math.sin(el)*ds,tg.z+Math.cos(az)*Math.cos(el)*ds);cam.lookAt(tg);
 const tx=mob?0:(s==0?-W*.14:W*.2),ty=mob?(s==0?H*.12:H*.2):0;ox+=(tx-ox)*.06;oy+=(ty-oy)*.06;cam.setViewOffset(W,H,ox,oy,W,H);cam.updateProjectionMatrix();
 const pr=pn.getBoundingClientRect();gs.forEach((g,i)=>{const k=fl[i];if(!k||s==0||!P[k].label){g.style.display='none';return}g.style.display='';const v=cen(P[k]).project(cam),x=(v.x*.5+.5)*W,y=(-v.y*.5+.5)*H,ex=mob?x:pr.left,ey=mob?pr.top:pr.top+50+i*26;
  g.children[0].setAttribute('d',`M${x},${y}L${mob?x:x+(ex-x)*.35},${mob?y+(ey-y)*.5:ey}L${ex},${ey}`);g.children[1].setAttribute('cx',x);g.children[1].setAttribute('cy',y);const tx2=g.children[2];tx2.textContent=P[k].label;tx2.setAttribute('x',Math.min(x+12,W-150));tx2.setAttribute('y',y-10)});
 R.render(sc,cam)}
requestAnimationFrame(loop);
