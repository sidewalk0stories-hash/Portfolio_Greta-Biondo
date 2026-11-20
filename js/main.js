const $=s=>document.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
/* aree */
const A=[["Applicazioni web e gestionali","Piattaforme personalizzate con login, ruoli e aree riservate."],["Automazioni intelligenti","Workflow con n8n, GitHub Actions e integrazioni API."],["Database e sicurezza","Strutture dati, permessi, relazioni e gestione degli accessi."],["Integrazioni AI e WhatsApp","Assistenti, messaggistica automatica e sistemi connessi."],["Data Intelligence","Report, controlli automatici e monitoraggio della qualità dei dati."]];let oa=0;
function ar(){$("#ar").innerHTML=A.map((a,i)=>`<button aria-expanded="${i===oa}" data-i="${i}"><span class="n">0${i+1}</span><b>${a[0]}</b><p>${a[1]}</p></button>`).join("");$$("#ar button").forEach(b=>b.onclick=()=>{oa=oa===+b.dataset.i?-1:+b.dataset.i;ar()})}ar();
/* progetti */
const P=[
{t:"Link di prenotazione",p:"Prenotazione",sc:["Zona","Trasporto","Pagamento","Nome"],v:["Collina","Navetta","A rate","Mario Rossi"],
 c:"Dopo il preventivo, il cliente riceve un link precompilato per completare la prenotazione.",s:["Una scelta per pagina","Servizi extra diversi per meta, gestiti da una schermata admin","Prenotazioni confermate nel foglio; n8n le inserisce nel gestionale"],r:["Niente doppio inserimento manuale","Nessuna prenotazione persa se il foglio non risponde"],
 b:["Pratica e anagrafica inserite due volte a mano","Salvataggio fino a 10–20 secondi"],a:["Il cliente compila, n8n inserisce i dati","Risposta in 1–2 secondi","Se il foglio non risponde, si ritenta da solo"],tc:["Next.js","Supabase","n8n","Vercel"]},
{t:"Area riservata",p:"Area clienti",sc:["Gruppo","Rata","Scadenza","Telefono"],v:["Gruppo 107","2 di 3","10 giugno","+39 333 000 0000"],
 c:"Un’area con login dove il cliente consulta il viaggio, il piano rate e i documenti.",s:["Login separato per il cliente","Piano rate e pagamenti sincronizzati","Documenti caricati dagli admin","Accesso solo al capogruppo"],r:["Informazioni sempre consultabili dal cliente","Meno richieste manuali all’ufficio"],
 b:["Informazioni inviate caso per caso","Documenti spediti a mano"],a:["Tutto in un’area con login","Documenti scaricabili in autonomia","Accesso solo a chi ne ha diritto"],tc:["Supabase","Next.js","Vercel"]},
{t:"Gestionale interno",p:"Gestionale",sc:["Cliente","Stato","Telefono","Importo"],v:["Anna F.","Preventivo","+39 333 000 0000","1.980 €"],
 c:"Il team commerciale lavorava su un foglio Google e file separati. Il foglio doveva restare il centro operativo.",s:["Opportunità a fasi con ricerca e filtri","Schede cliente con cronologia e preventivi","Preventivi automatici con storico","Accessi differenziati per ruolo"],r:["Un unico punto di riferimento","Ogni ruolo vede solo ciò che gli spetta"],
 b:["Richieste e preventivi in un foglio","Altre informazioni in file separati","Comunicazioni e analisi preparate a mano"],a:["Il foglio resta il centro del lavoro","Schede, prezzi e preventivi in un’unica app","Ogni ruolo vede solo ciò che gli spetta"],tc:["Google Sheets","Apps Script","Supabase","GitHub","Vercel"]}];
let sp=0,pd="a";
function drawPh(){$("#ph").innerHTML=P.map((p,i)=>`<button data-i="${i}" aria-pressed="${i===sp}"><div class="dv ${$("#pv").checked?"on":""}"><div class="sc"><div class="t">${p.p}</div>${p.sc.map((l,k)=>`<div class="rw"><span>${l}</span><b class="rx">${p.v[k]}</b></div>`).join("")}<div class="rw" style="background:var(--ink);color:var(--bg);justify-content:center">Continua</div></div></div><span class="pill">${p.t}</span></button>`).join("");
$$("#ph button").forEach(b=>b.onclick=()=>{sp=+b.dataset.i;pd="a";drawPh();drawDt()})}
function drawDt(){const p=P[sp],L=pd==="p"?p.b:p.a;$("#dt").innerHTML=`<div class="fade"><h3>${p.t}</h3><div class="cl"><div><span class="mo">Contesto</span><p>${p.c}</p></div><div><span class="mo">Il sistema</span><ul>${p.s.map(x=>`<li>${x}</li>`).join("")}</ul></div><div><span class="mo">Risultati</span><ul>${p.r.map(x=>`<li>${x}</li>`).join("")}</ul></div></div>
<div class="pd"><button data-k="p" aria-pressed="${pd==="p"}">Prima</button><button data-k="a" aria-pressed="${pd==="a"}">Dopo</button></div><div class="lst"><ul>${L.map(x=>`<li>${x}</li>`).join("")}</ul></div><div class="tc">${p.tc.map(x=>`<span>${x}</span>`).join("")}</div></div>`;
$$(".pd button").forEach(b=>b.onclick=()=>{pd=b.dataset.k;drawDt()})}
$("#pv").onchange=drawPh;drawPh();drawDt();
/* automazioni */
const F=[
{t:"PDF dopo la prenotazione",d:"Il documento si genera in automatico",n:[["Prenotazione confermata","Trigger"],["Genera il PDF","Dai dati della prenotazione"],["Invia al cliente","Con il documento allegato"],["Archivia","Una traccia per ogni documento"]],m:"Schema indicativo: sostituisci con i passaggi reali."},
{t:"Presenze Zoom e messaggi",d:"Un messaggio diverso per presenti e assenti",n:[["Call terminata","Trigger"],["Rileva le presenze","Chi si è collegato"]],o:{Presente:[["Messaggio per i presenti","Dopo la call"]],Assente:[["Messaggio per gli assenti","Diverso dal precedente"]]},z:[["Registra l’esito","Presenza salvata"]],m:"Messaggio generato in base all’esito."},
{t:"Report ogni mattina",d:"Dati aggiornati prima che inizi la giornata",n:[["Ogni mattina","Trigger a orario"],["Raccoglie i dati","Da più fonti"],["Aggiorna le informazioni","Pronte per la giornata"]],m:"Schema indicativo: sostituisci con i passaggi reali."}];
let sf=0,oo="Presente",tm=[];
function drawF(){tm.forEach(clearTimeout);$("#stp").innerHTML=F.map((f,i)=>`<button data-i="${i}" aria-pressed="${i===sf}"><b>0${i+1} ${f.t}</b><span>${f.d}</span></button>`).join("");
$$("#stp button").forEach(b=>b.onclick=()=>{sf=+b.dataset.i;drawF()});
const f=F[sf],ns=[...f.n,...(f.o?f.o[oo]:[]),...(f.z||[])];
$("#mac").innerHTML=`<div class="fade">${f.o?`<div class="o">Esito:${Object.keys(f.o).map(k=>`<button aria-pressed="${k===oo}">${k}</button>`).join("")}</div>`:""}${ns.map((n,i)=>`${i?'<div class="lk"></div>':""}<div class="nd"><i></i><div><b>${n[0]}</b><small>${n[1]}</small></div></div>`).join("")}<button class="go" id="go">Fai partire il flusso</button><div class="ms" id="ms">${f.m}</div></div>`;
$$(".o button").forEach(b=>b.onclick=()=>{oo=b.textContent;drawF()});
$("#go").onclick=()=>{tm.forEach(clearTimeout);const el=$$(".nd,.lk",$("#mac")),r=matchMedia("(prefers-reduced-motion:reduce)").matches;el.forEach(e=>e.classList.remove("on"));$("#ms").classList.remove("on");el.forEach((e,i)=>tm.push(setTimeout(()=>e.classList.add("on"),r?0:i*320)));tm.push(setTimeout(()=>$("#ms").classList.add("on"),r?0:el.length*320))}}
drawF();
/* privacy */
const C=["Nessun nome di persona, cliente o collega","Nessun numero di telefono o email","Nessun nome di azienda, logo o partner","Nessun importo, incasso o numero commerciale","Nessun ID di database, URL interno o chiave","Barra del browser, schede e segnalibri ritagliati","Aggiunta la dicitura “esempio con dati oscurati”"];
$("#chk").innerHTML=C.map(c=>`<label><input type="checkbox"> ${c}</label>`).join("");
function pr(){const t=$$("#chk input"),n=t.filter(x=>x.checked).length;$("#pb").style.width=n/t.length*100+"%";$("#pr").textContent=n===t.length?"✓ Pronto per essere pubblicato":`${n} di ${t.length} controlli completati`}
$$("#chk input").forEach(i=>i.onchange=pr);pr();
