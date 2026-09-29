(function(){
const C=window.CLINIC,$=id=>document.getElementById(id);
document.documentElement.style.setProperty('--teal',C.accent);
document.title=C.name+' — '+C.tagline;
/* ---------- content ---------- */
$('ldName').textContent=C.name;$('navName').innerHTML=C.navBrand||(C.shortName+'<span> Clinic</span>');
$('c0k').textContent=C.name;
const words=C.tagline.split(' ');const last=words.pop();
$('c0h').innerHTML=words.join(' ')+' <em>'+last+'</em>';$('c0p').textContent=C.subtitle;
$('mq').innerHTML=Array(2).fill(C.services.map(s=>s[0]).join(' ✦ ')+' ✦ ').join('');
$('aboutH').textContent=C.department==='dentist'?'A calmer, gentler way to look after your smile.':'A calmer, smarter way to get moving again.';
$('aboutP').textContent=C.name+' combines hands-on expertise with modern technology. Every plan is personal, every milestone measured, and every visit unhurried.';
$('stats').innerHTML=C.stats.map(s=>`<div class="stat rv-in"><b data-n="${s[0]}">0</b><b>${s[1]}</b><span>${s[2]}</span></div>`).join('');
$('svcGrid').innerHTML=C.services.map(s=>`<div class="card rv-in"><div class="ic">${s[2]}</div><h3>${s[0]}</h3><p>${s[1]}</p></div>`).join('');
$('steps').innerHTML=C.process.map(p=>`<div class="step rv-in"><h3>${p[0]}</h3><p>${p[1]}</p></div>`).join('');
if(!C.team||!C.team.length){const tl=$('teamLbl');if(tl)tl.style.display='none'}
$('team').innerHTML=C.team.map(t=>`<div class="doc rv-in"><div class="av">${t[2]}</div><h3>${t[0]}</h3><small>${t[1]}</small></div>`).join('');
$('gal').innerHTML=C.gallery.map((g,i)=>`<div class="gi" style="${g.img?`background-image:url(${g.img})`:''}">${g.img?'':window.RHSArt(g.art||'reception',i,C.shortName)}<div class="cap">${g.title}</div></div>`).join('');
$('rvTr').innerHTML=[...C.reviews,...C.reviews].map(r=>`<div class="rc"><div class="st">${'★'.repeat(r[2])}${'☆'.repeat(5-r[2])}</div><p>“${r[1]}”</p><b>${r[0]}</b> <small style="color:var(--mut)">· ${r[3]||""}</small></div>`).join('');
$('contact').innerHTML=`<div><small>Call</small><p>${C.phone}</p></div>${C.email?`<div><small>Email</small><p>${C.email}</p></div>`:''}<div><small>Visit</small><p>${C.address}</p></div><div><small>Hours</small>${C.hours.map(h=>`<p>${h[0]} — ${h[1]}</p>`).join('')}</div>`;
$('foot').textContent='© '+new Date().getFullYear()+' '+C.name+' · Demo prototype';
$('fs').innerHTML=C.services.map(s=>`<option>${s[0]}</option>`).join('');
$('ft').innerHTML=['9:00 AM','10:00 AM','11:00 AM','12:00 PM','2:00 PM','3:00 PM','4:00 PM','5:00 PM','6:00 PM','7:00 PM'].map(t=>`<option>${t}</option>`).join('');
$('fd').min=new Date().toISOString().split('T')[0];
const waBase='https://wa.me/'+C.whatsapp;$('waFloat').href=waBase+'?text='+encodeURIComponent('Hi '+C.name+', I would like to book an appointment.');
$('bf').addEventListener('submit',e=>{e.preventDefault();
 const m=`Hello ${C.name}! I'd like to book an appointment.\nName: ${$('fn').value}\nPhone: ${$('fp').value}\nService: ${$('fs').value}\nDate: ${$('fd').value}\nTime: ${$('ft').value}\n${$('fnote').value?'Note: '+$('fnote').value:''}`;
 window.open(waBase+'?text='+encodeURIComponent(m),'_blank');});
const bg=$('burger'),mm=$('mmenu');bg.addEventListener('click',()=>{const o=mm.classList.toggle('open');bg.classList.toggle('open',o);bg.setAttribute('aria-expanded',o)});mm.querySelectorAll('a').forEach(l=>l.addEventListener('click',()=>{mm.classList.remove('open');bg.classList.remove('open')}));
$('hbg').innerHTML=C.heroImg?`<img src="${C.heroImg}" alt="">`:window.RHSArt.hero(C.department,C.shortName);
/* ---------- loader (≈3s) ---------- */
setTimeout(()=>$('loader').classList.add('done'),3000);
/* ---------- reveal + counters ---------- */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;e.target.classList.add('show');
 const n=e.target.querySelector&&e.target.querySelector('[data-n]');if(n&&!n.dataset.d){n.dataset.d=1;const T=+n.dataset.n,t0=performance.now();
 (function f(t){const p=Math.min((t-t0)/1800,1);const v=T*(1-Math.pow(1-p,3));n.textContent=(T%1?v.toFixed(1):Math.round(v).toLocaleString());if(p<1)requestAnimationFrame(f)})(t0)}
 io.unobserve(e.target)}),{threshold:.15});
document.querySelectorAll('.rv-in').forEach((el,i)=>{el.style.transitionDelay=(i%4)*90+'ms';io.observe(el)});
/* card spotlight + tilt */
document.querySelectorAll('.card').forEach(c=>{c.addEventListener('mousemove',e=>{const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;
 c.style.setProperty('--mx',x*100+'%');c.style.setProperty('--my',y*100+'%');c.style.transform=`perspective(800px) rotateY(${(x-.5)*8}deg) rotateX(${(.5-y)*8}deg) translateY(-4px)`});
 c.addEventListener('mouseleave',()=>c.style.transform='')});
/* depth gallery */
const gal=$('gal'),gis=[...gal.children];
function depth(){const gc=gal.getBoundingClientRect(),mid=gc.left+gc.width/2;
 gis.forEach(g=>{const r=g.getBoundingClientRect(),d=(r.left+r.width/2-mid)/gc.width;const a=Math.max(-1,Math.min(1,d));
 g.style.transform=`rotateY(${-a*38}deg) scale(${1-Math.abs(a)*.16}) translateZ(${-Math.abs(a)*120}px)`;g.style.filter=`brightness(${1-Math.abs(a)*.45})`})}
gal.addEventListener('scroll',depth,{passive:true});window.addEventListener('resize',depth);setTimeout(depth,50);
/* ---------- 3D ---------- */
const cv=$('gl');let R;try{R=new THREE.WebGLRenderer({canvas:cv,antialias:true,alpha:true})}catch(e){cv.style.display='none'}
if(R){
const MOB=Math.min(innerWidth,screen.width||innerWidth)<=800;R.setPixelRatio(Math.min(devicePixelRatio,MOB?1.5:2));R.toneMapping=THREE.ACESFilmicToneMapping;R.toneMappingExposure=.85;
const scene=new THREE.Scene(),cam=new THREE.PerspectiveCamera(38,1,.1,100);cam.position.set(0,0,10);
scene.add(new THREE.HemisphereLight(0xbffcf0,0x06222d,.18));
const key=new THREE.DirectionalLight(0xffffff,.55);key.position.set(4,6,6);scene.add(key);
const p1=new THREE.PointLight(0x14b8a6,22,30);p1.position.set(-5,-2,4);scene.add(p1);
const p2=new THREE.PointLight(0x7ff0d8,14,30);p2.position.set(5,3,-3);scene.add(p2);

/* ---- soft-box environment for realistic reflections ---- */
function makeEnv(rend){const es=new THREE.Scene();
 es.add(new THREE.Mesh(new THREE.SphereGeometry(20,32,16),new THREE.MeshBasicMaterial({color:0x0a3a44,side:THREE.BackSide})));
 [[0,12,8,10,5,0xffffff,5],[-14,3,2,6,10,0xbffcf0,3.5],[14,4,-4,6,10,0xffffff,3],[0,-12,4,12,6,0x14b8a6,1.5]].forEach(([x,y,z,w,h,c,k])=>{const m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:new THREE.Color(c).multiplyScalar(k),side:THREE.DoubleSide}));m.position.set(x,y,z);m.lookAt(0,0,0);es.add(m)});
 return new THREE.PMREMGenerator(rend).fromScene(es,.03).texture}
window.__makeEnv=makeEnv;
scene.environment=makeEnv(R);
function smooth(g){g.computeVertexNormals();const p=g.attributes.position,n=g.attributes.normal,m=new Map();
 for(let i=0;i<p.count;i++){const k=Math.round(p.getX(i)*1e4)+','+Math.round(p.getY(i)*1e4)+','+Math.round(p.getZ(i)*1e4);let e=m.get(k);if(!e){e=[0,0,0,[]];m.set(k,e)}e[0]+=n.getX(i);e[1]+=n.getY(i);e[2]+=n.getZ(i);e[3].push(i)}
 m.forEach(e=>{const l=Math.hypot(e[0],e[1],e[2])||1;e[3].forEach(i=>n.setXYZ(i,e[0]/l,e[1]/l,e[2]/l))});return g}
const boneM=new THREE.MeshStandardMaterial({color:0xd8cbaf,roughness:.5,metalness:0,envMapIntensity:.55});
const discM=new THREE.MeshPhysicalMaterial({color:0x14b8a6,roughness:.28,clearcoat:1,clearcoatRoughness:.1,emissive:0x0a5a52,emissiveIntensity:.55,transparent:true,opacity:.92});
const teal=new THREE.MeshPhysicalMaterial({color:0x14b8a6,roughness:.25,metalness:.2,clearcoat:1,emissive:0x0a4d46,emissiveIntensity:.6});
const enamel=new THREE.MeshPhysicalMaterial({color:0xf2eee2,roughness:.15,clearcoat:1,clearcoatRoughness:.05,envMapIntensity:.95});
const dentin=new THREE.MeshStandardMaterial({color:0xdccfae,roughness:.5,envMapIntensity:.7});
const model=new THREE.Group(),parts=[];scene.add(model);
function add(mesh,base,dir){mesh.position.copy(base);mesh.userData={base:base.clone(),dir:dir.clone()};parts.push(mesh);model.add(mesh);return mesh}
const V3=(x,y,z)=>new THREE.Vector3(x,y,z);
let TARGET=3.5;
if(C.department==='dentist'){
 /* molar: squarish crown with 4 cusps + fissures, two curved roots */
 const cg=new THREE.SphereGeometry(1,110,80),cp=cg.attributes.position,vv=new THREE.Vector3();
 const cusps=[[-.42,-.4,.34],[.42,-.4,.3],[-.42,.42,.3],[.42,.42,.36]];
 for(let i=0;i<cp.count;i++){vv.fromBufferAttribute(cp,i);let x=vv.x,y=vv.y,z=vv.z;
  x=Math.sign(x)*Math.pow(Math.abs(x),.78)*.95;z=Math.sign(z)*Math.pow(Math.abs(z),.78)*.88;let yy;
  if(y>=0){let b=0;cusps.forEach(c=>{b+=c[2]*Math.exp(-((x-c[0])**2+(z-c[1])**2)/.09)});const f=Math.exp(-(x*x)/.008)+Math.exp(-(z*z)/.008);yy=y*.5+b*y*.9-f*.16*y}
  else{yy=y*.7;const sc=1-(-y)*.28;x*=sc;z*=sc}
  cp.setXYZ(i,x,yy,z)}
 const crown=new THREE.Mesh(smooth(cg),enamel);add(crown,V3(0,0,0),V3(0,.9,0));
 function root(len,rad,bend){const g=new THREE.CylinderGeometry(rad,rad*.1,len,30,36,false),p=g.attributes.position;
  for(let i=0;i<p.count;i++){const y=p.getY(i),t=(len/2-y)/len;p.setX(i,p.getX(i)+bend*t*t*len*.55);p.setZ(i,p.getZ(i)*(1-.2*t))}return smooth(g)}
 [[-.5,1.95,.36,-.55],[.5,1.8,.34,.5]].forEach(r=>{const m=new THREE.Mesh(root(r[1],r[2],r[3]),dentin);add(m,V3(r[0],-.5-r[1]/2+.08,0),V3(r[0]*1.2,-.85,0))});
 const gum=new THREE.Mesh(new THREE.TorusGeometry(.82,.06,20,120),teal);gum.rotation.x=Math.PI/2;gum.scale.set(1.08,.98,1);add(gum,V3(0,-.5,0),V3(0,.15,0));
 const g2=new THREE.Mesh(new THREE.TorusGeometry(1.5,.018,12,160),teal);g2.rotation.x=Math.PI/2;add(g2,V3(0,-.5,0),V3(0,-.35,0));
 TARGET=3.4;
}else{
 /* spine: 17 vertebrae with body, arch, spinous + transverse processes, discs, sacrum, coccyx; natural S-curve */
 function vertebra(s){const g=new THREE.Group(),R=.5,h=.34;
  const prof=new THREE.SplineCurve([[0,-h/2],[R*.8,-h/2],[R*.97,-h/2+.05],[R*.82,-.01],[R*.97,h/2-.05],[R*.8,h/2],[0,h/2]].map(p=>new THREE.Vector2(p[0],p[1]))).getPoints(28);
  const body=new THREE.Mesh(new THREE.LatheGeometry(prof,44),boneM);body.scale.set(1.15,1,.9);g.add(body);
  const arch=new THREE.Mesh(new THREE.TorusGeometry(.31,.085,14,30,Math.PI),boneM);arch.rotation.x=-Math.PI/2;arch.position.set(0,0,-.42);arch.scale.set(1,1,1);g.add(arch);
  const lam=new THREE.Mesh(new THREE.BoxGeometry(.3,.26,.1),boneM);lam.position.set(0,0,-.73);g.add(lam);
  const tau=.35+.35*Math.min(1,s);const sp=new THREE.Mesh(new THREE.CylinderGeometry(.035,.1,.62,12),boneM);sp.rotation.x=-(Math.PI/2+tau);sp.position.set(0,-.07,-.98);g.add(sp);
  [-1,1].forEach(k=>{const tp=new THREE.Mesh(new THREE.CylinderGeometry(.03,.07,.55,12),boneM);tp.rotation.z=-k*Math.PI/2;tp.rotation.y=k*.35;tp.position.set(k*.56,0,-.5);g.add(tp);
   const fc=new THREE.Mesh(new THREE.SphereGeometry(.09,16,12),boneM);fc.scale.set(1,1.5,.7);fc.position.set(k*.27,.19,-.58);g.add(fc)});
  g.scale.setScalar(s);return g}
 const NV=13,sz=[],ys=[];let y=0;
 for(let i=0;i<NV;i++){const s=.62+.5*Math.pow(i/(NV-1),.9);sz.push(s);if(i){y-=(.34*sz[i-1]/2+.34*s/2+.09*s+.04)}ys.push(y)}
 const tot=-ys[NV-1];const zc=t=>.2*Math.cos(t*Math.PI*3)*(.5+.5*Math.sin(Math.PI*Math.min(1,t)));
 const H=tot;
 for(let i=0;i<NV;i++){const t=-ys[i]/H,dt=.01,dz=zc(Math.min(1,t+dt))-zc(Math.max(0,t-dt));const v=vertebra(sz[i]);
  v.rotation.x=Math.atan2(-dz*1.0,H*dt*2);const yy=ys[i],zz=zc(t);
  add(v,V3(0,yy,zz),V3(0,yy*.5,0));
  if(i<NV-1){const ym=(ys[i]+ys[i+1])/2,tm=-ym/H,s=(sz[i]+sz[i+1])/2;
   const dp=new THREE.SplineCurve([[0,-.06],[.44,-.06],[.52,0],[.44,.06],[0,.06]].map(p=>new THREE.Vector2(p[0],p[1]))).getPoints(20);
   const d=new THREE.Mesh(new THREE.LatheGeometry(dp,44),discM);d.scale.set(1.1*s,.8*s,.86*s);d.rotation.x=v.rotation.x;add(d,V3(0,ym,zc(tm)),V3(0,ym*.5,0))}}
 const ly=ys[NV-1]-.9,lt=Math.min(1,-ly/H);
 const sac=new THREE.Mesh(smooth(new THREE.ConeGeometry(.62,1.5,7,6)),boneM);sac.rotation.x=Math.PI+.25;sac.scale.set(1.15,1,.55);add(sac,V3(0,ly,zc(1)-.1),V3(0,ly*.5,0));
 const cx=new THREE.Mesh(smooth(new THREE.ConeGeometry(.16,.5,10,3)),boneM);cx.rotation.x=Math.PI-.5;add(cx,V3(0,ly-.98,zc(1)-.45),V3(0,ly*.5-.2,0));
 TARGET=3.6;
}
{const bb=new THREE.Box3().setFromObject(model),c=bb.getCenter(new THREE.Vector3()),sz=bb.getSize(new THREE.Vector3());
 parts.forEach(m=>{m.position.sub(c);m.userData.base.sub(c)});TARGET=TARGET/sz.y;model.scale.setScalar(TARGET)}
const baseS=TARGET;let mob=false;const N=MOB?250:500,pg=new THREE.BufferGeometry(),pa=new Float32Array(N*3);for(let i=0;i<N*3;i++)pa[i]=(Math.random()-.5)*26;
pg.setAttribute('position',new THREE.BufferAttribute(pa,3));
const dust=new THREE.Points(pg,new THREE.PointsMaterial({color:0x7ff0d8,size:.045,transparent:true,opacity:.6}));scene.add(dust);
let W,H;function size(){W=cv.clientWidth;H=cv.clientHeight;R.setSize(W,H,false);cam.aspect=W/H;cam.updateProjectionMatrix();mob=W<=800;model.position.x=mob?0:2.4;model.scale.setScalar(baseS*(mob?.56:1))}
size();window.addEventListener('resize',size);
let sp=0,mx=0,my=0;window.addEventListener('mousemove',e=>{mx=e.clientX/innerWidth-.5;my=e.clientY/innerHeight-.5});
const hbg=$('hbg'),hero=$('hero'),chaps=[...document.querySelectorAll('.chap')],pbar=$('pbar');
const clock=new THREE.Clock();
(function loop(){requestAnimationFrame(loop);const t=clock.getElapsedTime();
 const r=hero.getBoundingClientRect(),p=Math.min(Math.max(-r.top/(r.height-innerHeight),0),1);sp+=(p-sp)*.07;
 pbar.style.width=(sp*100)+'%';hbg.style.transform=`translate3d(${mx*-26}px,${-sp*90-my*14}px,0) scale(${1.07+sp*.1})`;
 const ci=sp<.33?0:sp<.68?1:2;chaps.forEach((c,i)=>c.classList.toggle('on',i===ci));
 const ex=Math.sin(Math.min(sp*1.15,1)*Math.PI)*(mob?.4:1);
 parts.forEach(m=>{m.position.copy(m.userData.base).addScaledVector(m.userData.dir,ex)});
 model.rotation.y=t*.25+sp*Math.PI*2.2;model.rotation.x=Math.sin(t*.5)*.05+sp*.25;
 model.position.y=(mob?1.7:.1)+Math.sin(t*.9)*.12;
 const z=10-Math.sin(sp*Math.PI)*2.2;cam.position.set(mx*1.2,-my*.8,z);cam.lookAt(0,0,0);
 dust.rotation.y=t*.02+sp*.6;dust.position.y=sp*2;
 R.render(scene,cam)})();

/* ---------- cinematic reviews ---------- */
const N2=Math.min(5,C.reviews.length),cine=$('cine');cine.style.height=(N2+1)*100+'vh';
$('cScore').textContent=C.reviewScore||'4.9';$('cStars').textContent='★★★★★';$('cCount').textContent=(C.reviewCount||'')+' Google reviews';
const split=t=>t.split(' ').map((w,i)=>`<span class="w" style="--i:${i}">${w}</span>`).join(' ');
$('cQuotes').innerHTML=C.reviews.slice(0,N2).map(r=>`<div class="cq"><div class="cs">${'★'.repeat(r[2])}</div><p>“${split(r[1])}”</p><div class="cw"><b>${r[0]}</b><span>${r[3]||'Verified patient'}</span></div></div>`).join('');
$('cRail').innerHTML=Array(N2).fill('<i></i>').join('');
const cqs=[...document.querySelectorAll('.cq')],dots=[...document.querySelectorAll('.crail i')];
const cv2=$('gl2');let R2;try{R2=new THREE.WebGLRenderer({canvas:cv2,antialias:true,alpha:true})}catch(e){}
if(R2){R2.setPixelRatio(Math.min(devicePixelRatio,MOB?1.25:1.75));R2.toneMapping=THREE.ACESFilmicToneMapping;
 const s2=new THREE.Scene();s2.fog=new THREE.FogExp2(0x03121a,.03);const c2=new THREE.PerspectiveCamera(55,1,.1,200);
 s2.environment=window.__makeEnv(R2);s2.add(new THREE.HemisphereLight(0xbffcf0,0x06222d,.4));const cl=new THREE.PointLight(0x7ff0d8,35,20);s2.add(cl);
 const L=80,rings=[];
 for(let i=0;i<9;i++){const z=-6-i*9;const g=new THREE.Mesh(new THREE.TorusGeometry(3.4+(i%3)*.5,.04,12,120),new THREE.MeshBasicMaterial({color:i%2?0x14b8a6:0x7ff0d8}));g.position.z=z;g.rotation.z=i;s2.add(g);rings.push(g);
  const g2=new THREE.Mesh(new THREE.TorusGeometry(4.7,.012,8,120),new THREE.MeshBasicMaterial({color:0x7ff0d8,transparent:true,opacity:.45}));g2.position.z=z;s2.add(g2)}
 const shardM=new THREE.MeshPhysicalMaterial({color:0x9ff5e6,roughness:.1,metalness:.1,clearcoat:1,transparent:true,opacity:.75}),shards=[];
 for(let i=0;i<(MOB?40:80);i++){const m=new THREE.Mesh(new THREE.IcosahedronGeometry(.1+Math.random()*.25,0),shardM);const a=Math.random()*6.28,r=2.6+Math.random()*5;m.position.set(Math.cos(a)*r,Math.sin(a)*r,-Math.random()*L);m.userData.s=Math.random()*.02+.005;s2.add(m);shards.push(m)}
 const SN=MOB?700:1400,sg=new THREE.BufferGeometry(),sa=new Float32Array(SN*3);for(let i=0;i<SN;i++){const a=Math.random()*6.28,r=1+Math.random()*9;sa[i*3]=Math.cos(a)*r;sa[i*3+1]=Math.sin(a)*r;sa[i*3+2]=5-Math.random()*(L+15)}
 sg.setAttribute('position',new THREE.BufferAttribute(sa,3));s2.add(new THREE.Points(sg,new THREE.PointsMaterial({color:0xbffcf0,size:.06,transparent:true,opacity:.8})));
 const hm=model.clone(true);hm.rotation.set(0,0,0);hm.scale.setScalar(baseS*(MOB?1.15:1.45));s2.add(hm);
 const kl=new THREE.DirectionalLight(0xffffff,1.6);kl.position.set(3,4,-L+10);s2.add(kl);const tl=new THREE.PointLight(0x14b8a6,80,30);tl.position.set(-3,-1,-L+6);s2.add(tl);
 let W2,H2;const size2=()=>{W2=cv2.clientWidth;H2=cv2.clientHeight;R2.setSize(W2,H2,false);c2.aspect=W2/H2;c2.updateProjectionMatrix();hm.position.set(0,W2>800?0:.9,-L+1)};size2();addEventListener('resize',size2);
 let p2=0,last=-1;
 (function l2(){requestAnimationFrame(l2);const r=cine.getBoundingClientRect();if(r.bottom<0||r.top>innerHeight)return;
  const p=Math.min(Math.max(-r.top/(r.height-innerHeight),0),1);p2+=(p-p2)*.09;const t=performance.now()/1000;
  const dm=1-Math.min(1,Math.max(0,(p2-.55)/.4));c2.position.set((Math.sin(t*.4+p2*6)*.35+mx*.6)*dm,(Math.cos(t*.3)*.25-my*.4)*dm,-p2*(L-7));
  c2.lookAt(c2.position.x*.3*dm,c2.position.y*.3*dm,c2.position.z-10);c2.rotation.z+=Math.sin(p2*Math.PI*4)*.06;cl.position.set(c2.position.x,c2.position.y,c2.position.z-2);
  rings.forEach((g,i)=>g.rotation.z+=.002*(i%2?1:-1));shards.forEach(m=>{m.rotation.x+=m.userData.s;m.rotation.y+=m.userData.s*1.3});
  hm.rotation.y=Math.sin(t*.55)*1.05;hm.position.y=(W2>800?0:.9)+Math.sin(t)*.08;
  const ci=Math.min(N2-1,Math.floor(p*N2*.999));
  if(ci!==last){last=ci;cqs.forEach((q,i)=>q.classList.toggle('on',i===ci));dots.forEach((d,i)=>d.classList.toggle('on',i===ci));$('cNum').textContent='0'+(ci+1)+' / 0'+N2}
  R2.render(s2,c2)})();
}else{cine.style.height='auto';cqs.forEach(q=>{q.style.position='relative';q.style.opacity=1;q.querySelectorAll('.w').forEach(w=>{w.style.opacity=1;w.style.transform='none';w.style.filter='none'})})}
}
})();