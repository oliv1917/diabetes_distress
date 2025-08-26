import { Store } from './storage.js';
import { renderTexts, renderSidebar, renderHome, renderData } from './render.js';

const Lang = {
  en: {
    brandTitle: "Diabetes Distress iCBT",
    brandSubtitle: "Self-guided modules • Learn • Practice • Track",
    modules: "Modules",
    home: "Home",
    save: "Save",
    delete: "Delete",
    add: "Add",
    next: "Next ▶",
    prev: "◀ Prev",
    finish: "Finish Module ▶",
    markComplete: "Mark complete",
    streak: "Streak",
    welcome: "Welcome 👋",
    subtitle: "A private, self-paced space to understand and ease diabetes distress using CBT tools.",
    notEmergency: "Not an emergency tool. If you feel unsafe or in crisis, contact emergency services.",
    overall: "Overall completion",
    pagesDone: "Pages completed",
    latestBadge: "Latest badge",
    footer: "© YEAR Diabetes Distress iCBT • Private by design (data stored only in your browser).",
    data: "Data",
    dataTitle: "Data & Privacy",
    dataInfo: "All progress is stored only in this browser. You can download it or clear it.",
    downloadData: "Download data",
    clearData: "Clear all data",
    confirmClear: "This will erase all data. Continue?",
    /* NEW */
    progressTitle: "Your Progress",
    badgesTitle: "Badges",
    activityTitle: "Recent activity",
    none: "—",

    modulesData: [
      { id:"m1", title:"1) Orientation", goal:"Get comfortable with how the program works.", pages:[
        {id:"m1p1",type:"read",title:"What is Diabetes Distress?",
         body:"<p>Diabetes distress is the emotional burden of living with diabetes—frustration, guilt, fear, or burnout. It’s common and <em>treatable</em>.</p>"},
        {id:"m1p2",type:"exercise",exercise:"distress-rating",title:"Baseline Distress"},
        {id:"m1p3",type:"read",title:"How to Use This App",
         body:"<ol><li>Work module by module (about 10–20 mins each).</li><li>Do the exercises — they’re where change happens.</li><li>Revisit tools anytime. Small steps compound.</li></ol>"},
      ]},
      { id:"m2", title:"2) Understanding Triggers", goal:"Spot patterns: people, places, numbers that spark distress.", pages:[
        {id:"m2p1",type:"read",title:"Common Triggers",
         body:"<p>Examples include: glucose readings, mealtime timing, judgment from others, clinic appointments, or fear of complications.</p>"},
        {id:"m2p2",type:"exercise",exercise:"trigger-log",title:"Trigger Log"},
        {id:"m2p3",type:"read",title:"Self-Compassion",
         body:"<p>A kind voice helps motivation more than self-criticism. Try speaking to yourself as you would to a friend.</p>"},
      ]},
      { id:"m3", title:"3) Thoughts & Feelings", goal:"Map thoughts → feelings → actions. Learn reframing.", pages:[
        {id:"m3p1",type:"read",title:"CBT Map",
         body:"<p>Event → Thought → Feeling → Action. We can’t always change events, but we can test and adjust thoughts.</p>"},
        {id:"m3p2",type:"exercise",exercise:"thought-record",title:"Thought Record"},
        {id:"m3p3",type:"exercise",exercise:"reframe-dnd",title:"Cognitive Reframe (Drag & Drop)"},
      ]},
      { id:"m4", title:"4) Problem Solving", goal:"Move from stuck to steps.", pages:[
        {id:"m4p1",type:"read",title:"5-Step Problem Solver",
         body:"<ol><li>Define the problem.</li><li>Brainstorm options.</li><li>Pick 1–2 realistic steps.</li><li>Plan details (when/where/how).</li><li>Review & adjust.</li></ol>"},
        {id:"m4p2",type:"exercise",exercise:"problem-solver",title:"Your Plan"},
        {id:"m4p3",type:"exercise",exercise:"activity-planner",title:"Small Action Planner"},
      ]},
      { id:"m5", title:"5) Values & Motivation", goal:"Anchor actions in what matters to you.", pages:[
        {id:"m5p1",type:"read",title:"Values vs. Goals",
         body:"<p>Values guide direction (ongoing), goals are steps (done/undone). When actions align with values, motivation sustains.</p>"},
        {id:"m5p2",type:"exercise",exercise:"values-sort",title:"Values Sort"},
      ]},
      { id:"m6", title:"6) Coping Skills", goal:"Regulate physiology and plan supports.", pages:[
        {id:"m6p1",type:"exercise",exercise:"breathing",title:"Guided Breathing"},
        {id:"m6p2",type:"exercise",exercise:"coping-plan",title:"Coping Plan"},
      ]},
      { id:"m7", title:"7) Communicating with Care", goal:"Ask for what you need with clarity & kindness.", pages:[
        {id:"m7p1",type:"read",title:"Assertive Script",
         body:"<p>Use <strong>COPE</strong>: <em>Context</em>, <em>Observation</em>, <em>Preference</em>, <em>Enlist</em>.</p>"},
        {id:"m7p2",type:"exercise",exercise:"care-script",title:"Build Your Script"},
      ]},
      { id:"m8", title:"8) Maintenance", goal:"Keep gains, handle setbacks.", pages:[
        {id:"m8p1",type:"exercise",exercise:"relapse-plan",title:"Relapse Prevention"},
        {id:"m8p2",type:"read",title:"Next Steps",
         body:"<p>Revisit modules; track distress weekly; celebrate wins. Consider discussing insights with your care team.</p>"},
      ]},
    ]
  },

  da: {
    brandTitle: "Diabetes-stress iCBT",
    brandSubtitle: "Selvstyrede moduler • Lær • Øv • Følg fremskridt",
    modules: "Moduler",
    home: "Forside",
    save: "Gem",
    delete: "Slet",
    add: "Tilføj",
    next: "Næste ▶",
    prev: "◀ Forrige",
    finish: "Afslut modul ▶",
    markComplete: "Markér som færdig",
    streak: "Stime",
    welcome: "Velkommen 👋",
    subtitle: "Et privat, selvstyret rum til at forstå og mindske diabetes-stress ved hjælp af KAT-værktøjer.",
    notEmergency: "Dette er ikke et nødværktøj. Hvis du føler dig utryg, kontakt akut hjælp.",
    overall: "Samlet fremskridt",
    pagesDone: "Sider færdiggjort",
    latestBadge: "Seneste mærke",
    footer: "© YEAR Diabetes-stress iCBT • Gemmes kun i din browser.",
    data: "Data",
    dataTitle: "Data & privatliv",
    dataInfo: "Alle fremskridt gemmes lokalt i denne browser. Du kan downloade eller slette dem.",
    downloadData: "Download data",
    clearData: "Slet alle data",
    confirmClear: "Er du sikker på, at du vil slette alle data? Dette kan ikke fortrydes.",
    /* NEW */
    progressTitle: "Dit fremskridt",
    badgesTitle: "Mærker",
    activityTitle: "Seneste aktivitet",
    none: "—",

    modulesData: [
      { id:"m1", title:"1) Introduktion", goal:"Bliv fortrolig med, hvordan programmet fungerer.", pages:[
        {id:"m1p1",type:"read",title:"Hvad er diabetes-stress?",
         body:"<p>Diabetes-stress er den følelsesmæssige byrde ved at leve med diabetes — frustration, skyld, frygt eller udbrændthed. Det er almindeligt og <em>kan behandles</em>.</p>"},
        {id:"m1p2",type:"exercise",exercise:"distress-rating",title:"Grundlinje for stress"},
        {id:"m1p3",type:"read",title:"Sådan bruges appen",
         body:"<ol><li>Arbejd modul for modul (ca. 10–20 min. hver).</li><li>Lav øvelserne — det er dér forandring sker.</li><li>Genbesøg værktøjerne når som helst. Små skridt giver store resultater.</li></ol>"},
      ]},
      { id:"m2", title:"2) Forstå triggere", goal:"Se mønstre: personer, steder, tal der udløser stress.", pages:[
        {id:"m2p1",type:"read",title:"Almindelige triggere",
         body:"<p>Eksempler: blodsukkermålinger, måltider, andres vurderinger, klinikbesøg eller frygt for komplikationer.</p>"},
        {id:"m2p2",type:"exercise",exercise:"trigger-log",title:"Trigger-logbog"},
        {id:"m2p3",type:"read",title:"Selvmedfølelse",
         body:"<p>En venlig stemme støtter motivation bedre end selvkritik. Prøv at tale til dig selv, som du ville til en ven.</p>"},
      ]},
      { id:"m3", title:"3) Tanker & Følelser", goal:"Kortlæg tanker → følelser → handlinger. Lær at omformulere.", pages:[
        {id:"m3p1",type:"read",title:"KAT-kort",
         body:"<p>Hændelse → Tanke → Følelse → Handling. Vi kan ikke altid ændre hændelser, men vi kan teste og justere tanker.</p>"},
        {id:"m3p2",type:"exercise",exercise:"thought-record",title:"Tankeskema"},
        {id:"m3p3",type:"exercise",exercise:"reframe-dnd",title:"Kognitiv omformulering (træk & slip)"},
      ]},
      { id:"m4", title:"4) Problemløsning", goal:"Fra fastlåst til handleplan.", pages:[
        {id:"m4p1",type:"read",title:"5-trins problemløser",
         body:"<ol><li>Definér problemet.</li><li>Brainstorm muligheder.</li><li>Vælg 1–2 realistiske skridt.</li><li>Planlæg detaljer (hvornår/hvor/hvordan).</li><li>Evaluer & justér.</li></ol>"},
        {id:"m4p2",type:"exercise",exercise:"problem-solver",title:"Din plan"},
        {id:"m4p3",type:"exercise",exercise:"activity-planner",title:"Lille handlingsplan"},
      ]},
      { id:"m5", title:"5) Værdier & Motivation", goal:"Forankr handlinger i det, der betyder mest for dig.", pages:[
        {id:"m5p1",type:"read",title:"Værdier vs. mål",
         body:"<p>Værdier giver retning (løbende), mål er konkrete skridt (gennemført/ikke gennemført). Når handlinger stemmer overens med værdier, holder motivationen længere.</p>"},
        {id:"m5p2",type:"exercise",exercise:"values-sort",title:"Værdiafklaring"},
      ]},
      { id:"m6", title:"6) Mestringsstrategier", goal:"Regulér kroppen og planlæg støtte.", pages:[
        {id:"m6p1",type:"exercise",exercise:"breathing",title:"Vejrtrækningsøvelse"},
        {id:"m6p2",type:"exercise",exercise:"coping-plan",title:"Mestringsplan"},
      ]},
      { id:"m7", title:"7) Kommunikation med omsorg", goal:"Bed om det du har brug for, klart og venligt.", pages:[
        {id:"m7p1",type:"read",title:"Assertiv kommunikation",
         body:"<p>Brug <strong>COPE</strong>: <em>Kontekst</em>, <em>Observation</em>, <em>Præference</em>, <em>Engagér</em>.</p>"},
        {id:"m7p2",type:"exercise",exercise:"care-script",title:"Byg dit manuskript"},
      ]},
      { id:"m8", title:"8) Vedligeholdelse", goal:"Bevar fremskridt og håndtér tilbagefald.", pages:[
        {id:"m8p1",type:"exercise",exercise:"relapse-plan",title:"Tilbagefaldsplan"},
        {id:"m8p2",type:"read",title:"Næste skridt",
         body:"<p>Genbesøg modulerne; følg din stress ugentligt; fejre sejre. Overvej at drøfte dine indsigter med dit behandlingsteam.</p>"},
      ]},
    ]
  }
};
/* ========== Storage & State ========== */
let state = Store.load();

/* ========== Helpers ========== */
function t(k){ return Lang[state.lang][k]; }
function todayKey(){ return new Date().toISOString().slice(0,10); }
function now(){ return new Date().toISOString(); }
function toast(msg){ let d=document.createElement("div"); d.textContent=msg;
  d.style.cssText="position:fixed;bottom:16px;left:50%;transform:translateX(-50%);background:#0b1224;padding:10px 14px;border:1px solid #1f2937;border-radius:10px;color:#e5e7eb;z-index:9999";
  document.body.appendChild(d); setTimeout(function(){ d.remove(); },2000);
}
function clamp(n,min,max){ return Math.max(min, Math.min(max, n)); }

/* Exercise locale strings */
const EX={
  en:{add:"Add",save:"Save",delete:"Delete",done:"Done",edit:"Edit",
      distressQ:"Rate your current diabetes distress (0 = none, 10 = max)", bodyQ:"Where do you feel it in your body?", noteQ:"Short note (optional)", viewTrend:"View personal trend", chartHint:"Your saved ratings will show here as a line chart.",
      trigger:"Trigger", typicalThought:"Typical thought", feelingWord:"Feeling (word + 0–10)", noTriggers:"No triggers logged yet.",
      situation:"Situation", autoThought:"Automatic thought", feelingNum:"Feeling 0–10", evidence:"Evidence for/against", altThought:"Balanced alternative thought", addRow:"Add row", noEntries:"No entries yet.",
      thoughts:"Thoughts", buckets:"Buckets", dropHere:"Drop here", reframePick:"Pick one thought and write a balanced reframe", origThought:"Original thought", balanced:"Balanced reframe",
      allOrNothing:"All-or-nothing", mindReading:"Mind reading", catastrophizing:"Catastrophizing", shoulds:"‘Should’ statements",
      defineProblem:"Define the problem", option:"Option", addOption:"Add Option", when:"when", where:"where", how:"how", savePlan:"Save Plan", selectHint:"Add a few options, then click to select your step.",
      action:"Action", energy:"Energy cost (1–5)", whenTime:"When", noActions:"No actions yet.",
      pickValues:"Pick your top 3–5 values. Then write one action for this week.", oneAction:"One small value-aligned action",
      breathingNote:"4-4-6 breathing. Inhale 4 • Hold 4 • Exhale 6", startTimer:"Start 1-minute timer", seconds:"s",
      earlySign:"Early warning sign", support:"Support person / service", step:"Coping step", noSigns:"No signs yet.", noSupports:"No supports yet.", noSteps:"No steps yet.",
      context:"Context", observation:"Observation", preference:"Preference (ask)", enlist:"Enlist", preview:"Script preview",
      risk:"Risk situation", addPair:"Add Pair", ifCue:"If (cue)", thenAct:"Then (action)", noRisks:"No risks yet.", noPairs:"No pairs yet.",
      saved:"Saved ✔️", completed:"Marked as complete ✔️"},
  da:{add:"Tilføj",save:"Gem",delete:"Slet",done:"Færdig",edit:"Redigér",
      distressQ:"Vurdér din nuværende diabetes-stress (0 = ingen, 10 = maks.)", bodyQ:"Hvor mærker du det i kroppen?", noteQ:"Kort note (valgfrit)", viewTrend:"Se personlig udvikling", chartHint:"Dine gemte vurderinger vises her som en linjegraf.",
      trigger:"Trigger", typicalThought:"Typisk tanke", feelingWord:"Følelse (ord + 0–10)", noTriggers:"Ingen triggere endnu.",
      situation:"Situation", autoThought:"Automatisk tanke", feelingNum:"Følelse 0–10", evidence:"Beviser for/imod", altThought:"Balanceret alternativ tanke", addRow:"Tilføj række", noEntries:"Ingen indtastninger endnu.",
      thoughts:"Tanker", buckets:"Kategorier", dropHere:"Slip her", reframePick:"Vælg én tanke og skriv en balanceret omformulering", origThought:"Oprindelig tanke", balanced:"Balanceret omformulering",
      allOrNothing:"Sort-hvid tænkning", mindReading:"Tankelæsning", catastrophizing:"Katastrofetænkning", shoulds:"‘Bør’-udsagn",
      defineProblem:"Definér problemet", option:"Mulighed", addOption:"Tilføj mulighed", when:"hvornår", where:"hvor", how:"hvordan", savePlan:"Gem plan", selectHint:"Tilføj et par muligheder, og klik for at vælge dit skridt.",
      action:"Handling", energy:"Energikrav (1–5)", whenTime:"Hvornår", noActions:"Ingen handlinger endnu.",
      pickValues:"Vælg dine 3–5 vigtigste værdier. Skriv derefter én handling for ugen.", oneAction:"Én lille værdistyret handling",
      breathingNote:"4-4-6 vejrtrækning. Ind 4 • Hold 4 • Ud 6", startTimer:"Start 1-minuts timer", seconds:"s",
      earlySign:"Tidligt faresignal", support:"Støtteperson / tilbud", step:"Mestringsskridt", noSigns:"Ingen tegn endnu.", noSupports:"Ingen støtter endnu.", noSteps:"Ingen skridt endnu.",
      context:"Kontekst", observation:"Observation", preference:"Præference (ønske)", enlist:"Engagér", preview:"Forhåndsvisning af manuskript",
      risk:"Risikosituation", addPair:"Tilføj par", ifCue:"Hvis (cue)", thenAct:"Så (handling)", noRisks:"Ingen risici endnu.", noPairs:"Ingen par endnu.",
      saved:"Gemt ✔️", completed:"Markéret som færdig ✔️"}
};
function te(k){ return EX[state.lang][k]; }

/* ========== Streaks & Badges ========== */
function bumpStreak(){
  let d=todayKey();
  if(state.streak.last!==d){
    let y=new Date(); y.setDate(y.getDate()-1);
    let yKey=y.toISOString().slice(0,10);
    state.streak.count=(state.streak.last===yKey)?(state.streak.count||0)+1:1;
    state.streak.last=d; Store.save(state);
  }
}
function awardBadges(){
  let p=overallProgress();
  let set=[{th:.01,n:"Getting Started"},{th:.25,n:"Quarter Way"},{th:.5,n:"Halfway Hero"},{th:.75,n:"Almost There"},{th:.99,n:"Completed 🎉"}];
  for(let i=0;i<set.length;i++){
    let b=set[i]; if(p>=b.th && state.badges.indexOf(b.n)===-1){ state.badges.push(b.n); state.timeline.push({t:now(),what:"Badge: "+b.n}); }
  }
  Store.save(state);
}

/* ========== Router & Progress ========== */
function overallProgress(s){
  const total = Lang[s.lang].modulesData.reduce((a,m)=>a+m.pages.length,0);
  return total ? Object.keys(s.completed).length/total : 0;
}
function navigateTo(mi, pi) { location.hash = `#/m/${mi}/p/${pi}`; }
function onRoute(){
  if (location.hash === "#data") {
    renderSidebar(state, Lang, navigateTo);
    renderData(state, t);
    const dl = document.getElementById("downloadBtn");
    if (dl) dl.onclick = () => {
      Store.save(state);
      const dataStr = JSON.stringify(state, null, 2);
      const blob = new Blob([dataStr], {type:"application/json"});
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "dd-data.json";
      a.click();
      URL.revokeObjectURL(url);
    };
    const cl = document.getElementById("clearBtn");
    if (cl) cl.onclick = () => {
      if (confirm(t("confirmClear"))) {
        localStorage.removeItem(Store.key);
        state = Store.load();
        location.hash = "";
        renderTexts(state, t);
        renderSidebar(state, Lang, navigateTo);
        renderHome(state, t, overallProgress);
      }
    };
    return;
  }
  const m = location.hash.match(/#\/m\/(\d+)\/p\/(\d+)/);
  if(!m){
    renderHome(state, t, overallProgress);
    renderSidebar(state, Lang, navigateTo);
    return;
  }
  openPage(+m[1], +m[2]);
}

/* ========== Page & Exercises ========== */
function openPage(mi,pi){
  let mod=Lang[state.lang].modulesData[mi]; if(!mod) return;
  let page=mod.pages[pi]; if(!page) return;
  let main=document.getElementById("main");
  main.innerHTML='<div class="page">'
    +'<div class="hero"><h1>'+mod.title+'</h1><div class="meta"><span>'+mod.goal+'</span></div></div>'
    +'<section class="content" id="content"></section>'
    +'<div class="cta-row" style="padding:0 18px 18px">'
      +'<button id="prevBtn" '+(pi===0?'disabled':'')+'>'+t("prev")+'</button>'
      +'<div class="spacer"></div>'
      +'<button id="markBtn" class="ghost">'+t("markComplete")+'</button>'
      +'<button id="nextBtn" class="primary">'+(pi===mod.pages.length-1?t("finish"):t("next"))+'</button>'
    +'</div></div>';

  let content=document.getElementById("content");
  if(page.type==="read"){
    content.innerHTML='<article class="flow"><h2>'+page.title+'</h2>'+page.body+'</article>';
  } else {
    renderExercise(content, page);
  }

  // Prev
  let prevBtn=document.getElementById("prevBtn");
  if(prevBtn) prevBtn.onclick=function(){ navigateTo(mi, Math.max(0,pi-1)); };

  // Next / Finish (patched to go to next module)
  let nextBtn=document.getElementById("nextBtn");
  if(nextBtn) nextBtn.onclick=function(){
    // If not last page: go to next page
    if (pi < mod.pages.length - 1) {
      navigateTo(mi, pi + 1);
      return;
    }
    // Last page → go to first page of next module if exists, otherwise Home
    let mods = Lang[state.lang].modulesData;
    if (mi + 1 < mods.length) {
      navigateTo(mi + 1, 0);
    } else {
      location.hash = "";
      renderHome(state, t, overallProgress);
      renderSidebar(state, Lang, navigateTo);
    }
  };

  // Mark complete
  let markBtn=document.getElementById("markBtn");
  if(markBtn) markBtn.onclick=function(){
    state.completed[page.id]=true;
    state.timeline.push({t:now(), what:"Completed "+page.title});
    bumpStreak(); awardBadges(); Store.save(state);
    toast(EX[state.lang].completed);
    renderSidebar(state, Lang, navigateTo);
  };
}

function renderExercise(root, page){
  let id=page.id, kind=page.exercise;
  function save(patch){ if(!state.exercises[id]) state.exercises[id]={};
    let cur=state.exercises[id]; for(let k in patch){ if(Object.prototype.hasOwnProperty.call(patch,k)) cur[k]=patch[k]; }
    Store.save(state);
  }

  /* ===== Distress Rating ===== */
  if(kind==="distress-rating"){
    let last=(state.exercises[id]&&typeof state.exercises[id].rating==='number')?state.exercises[id].rating:4;
    let prevBody=(state.exercises[id]&&state.exercises[id].body)?state.exercises[id].body:'';
    let prevNote=(state.exercises[id]&&state.exercises[id].note)?state.exercises[id].note:'';
    root.innerHTML=DOMPurify.sanitize('<div class="exercise"><h2>'+page.title+'</h2>'
      +'<div class="row"><label class="field"><span>'+te("distressQ")+'</span>'
        +'<input type="range" min="0" max="10" value="'+last+'" id="drRange"><div class="row"><span class="chip" id="drVal">'+last+'</span></div></label>'
        +'<label class="field"><span>'+te("bodyQ")+'</span><input type="text" id="drBody" value="'+prevBody+'"></label></div>'
      +'<label class="field"><span>'+te("noteQ")+'</span><textarea id="drNote" rows="3">'+prevNote+'</textarea></label>'
      +'<div class="cta-row"><button class="primary" id="drSave">'+t("save")+'</button><button id="drTrend">'+te("viewTrend")+'</button></div>'
      +'<canvas id="miniChart" width="600" height="160" style="width:100%;max-width:100%"></canvas></div>');
    let range=document.getElementById("drRange"), val=document.getElementById("drVal");
    if(range&&val){ range.oninput=function(){ val.textContent=range.value; }; }
    function draw(){
      let c=document.getElementById("miniChart"); if(!c) return;
      let ctx=c.getContext('2d'); ctx.clearRect(0,0,600,160);
      let pts=(state.exercises[id]&&state.exercises[id].trend)?state.exercises[id].trend:[];
      if(pts.length===0){ ctx.fillStyle="#94a3b8"; ctx.fillText(te("chartHint"),10,30); return; }
      let pad=30,w=600-pad*2,h=160-pad*2; ctx.strokeStyle="#334155"; ctx.strokeRect(pad,pad,w,h);
      let xs=pts.map(function(p,i){return pad+i*(w/Math.max(1,pts.length-1));});
      let ys=pts.map(function(p){return pad+(10-p.v)/10*h;});
      ctx.strokeStyle="#22c55e"; ctx.lineWidth=2; ctx.beginPath();
      for(let i=0;i<xs.length;i++){ if(i===0) ctx.moveTo(xs[i],ys[i]); else ctx.lineTo(xs[i],ys[i]); } ctx.stroke();
      ctx.fillStyle="#22c55e"; for(let j=0;j<xs.length;j++){ ctx.beginPath(); ctx.arc(xs[j],ys[j],3,0,Math.PI*2); ctx.fill(); }
    }
    document.getElementById("drSave").onclick=function(){
      let rating=+document.getElementById("drRange").value;
      let body=document.getElementById("drBody").value.trim();
      let note=document.getElementById("drNote").value.trim();
      let trend=(state.exercises[id]&&state.exercises[id].trend)?state.exercises[id].trend:[];
      trend.push({d:todayKey(), v:clamp(rating,0,10)});
      save({rating:rating, body:body, note:note, trend:trend});
      state.timeline.push({t:now(), what:"Distress "+rating+"/10"}); awardBadges(); Store.save(state);
      toast(EX[state.lang].saved); draw();
    };
    document.getElementById("drTrend").onclick=draw; draw();
  }

  /* ===== Trigger Log ===== */
  if(kind==="trigger-log"){
    let items=(state.exercises[id]&&state.exercises[id].items)?state.exercises[id].items:[];
    root.innerHTML='<div class="exercise"><h2>'+page.title+'</h2>'
      +'<div class="row"><label class="field"><span>'+te("trigger")+'</span><input id="tgName" type="text"></label>'
      +'<label class="field"><span>'+te("typicalThought")+'</span><input id="tgThought" type="text"></label>'
      +'<label class="field"><span>'+te("feelingWord")+'</span><input id="tgFeel" type="text"></label>'
      +'<button class="primary" id="tgAdd">'+t("add")+'</button></div><div class="list" id="tgList"></div></div>';
    function paint(){
      let list=document.getElementById("tgList"); list.innerHTML=items.length?"":"<div class='tiny'>"+te("noTriggers")+"</div>";
      items.forEach(function(it,idx){
        let row=document.createElement('div');
        row.className="item";
        let info=document.createElement('div');
        let strong=document.createElement('strong');
        strong.textContent=it.n;
        info.appendChild(strong);
        let tiny=document.createElement('div');
        tiny.className="tiny";
        tiny.textContent=it.t+' • '+it.f;
        info.appendChild(tiny);
        row.appendChild(info);
        let btn=document.createElement('button');
        btn.className="ghost";
        btn.setAttribute('data-i',idx);
        btn.textContent=t("delete");
        btn.onclick=function(){ items.splice(idx,1); state.exercises[id]={items:items}; Store.save(state); paint(); };
        row.appendChild(btn);
        list.appendChild(row);
      });
    }
    document.getElementById("tgAdd").onclick=function(){
      let n=document.getElementById("tgName").value.trim(), th=document.getElementById("tgThought").value.trim(), f=document.getElementById("tgFeel").value.trim();
      if(!n){ toast("+"+te("trigger")); return; }
      items.push({n:n,t:th,f:f}); state.exercises[id]={items:items}; Store.save(state); paint();
      document.getElementById("tgName").value=""; document.getElementById("tgThought").value=""; document.getElementById("tgFeel").value="";
    };
    paint();
  }

  /* ===== Thought Record ===== */
  if(kind==="thought-record"){
    let rows=(state.exercises[id]&&state.exercises[id].rows)?state.exercises[id].rows:[];
    root.innerHTML='<div class="exercise"><h2>'+page.title+'</h2>'
      +'<div class="row"><label class="field"><span>'+te("situation")+'</span><input id="trSit" type="text"></label>'
      +'<label class="field"><span>'+te("autoThought")+'</span><input id="trThought" type="text"></label>'
      +'<label class="field"><span>'+te("feelingNum")+'</span><input id="trFeeling" type="number" min="0" max="10" value="6"></label></div>'
      +'<label class="field"><span>'+te("evidence")+'</span><textarea id="trEvidence" rows="3"></textarea></label>'
      +'<label class="field"><span>'+te("altThought")+'</span><input id="trAlt" type="text"></label>'
      +'<div class="cta-row"><button class="primary" id="trAdd">'+te("addRow")+'</button></div>'
      +'<div class="list" id="trList"></div></div>';
    function paint(){
      let list=document.getElementById("trList"); list.innerHTML=rows.length?"":"<div class='tiny'>"+te("noEntries")+"</div>";
      rows.forEach(function(r,i){
        let el=document.createElement('div');
        el.className="item";
        let wrap=document.createElement('div');
        let top=document.createElement('div');
        let strong=document.createElement('strong');
        strong.textContent=r.sit;
        top.appendChild(strong);
        top.appendChild(document.createTextNode(' — '));
        let em=document.createElement('em');
        em.textContent=r.thought;
        top.appendChild(em);
        top.appendChild(document.createTextNode(' ( '+r.feel+'/10 )'));
        wrap.appendChild(top);
        let eviDiv=document.createElement('div');
        eviDiv.className="tiny";
        eviDiv.textContent=te("evidence")+': '+r.evi;
        wrap.appendChild(eviDiv);
        let altDiv=document.createElement('div');
        altDiv.className="tiny";
        altDiv.textContent=te("altThought")+': '+r.alt;
        wrap.appendChild(altDiv);
        el.appendChild(wrap);
        let btn=document.createElement('button');
        btn.className="ghost";
        btn.setAttribute('data-i',i);
        btn.textContent=t("delete");
        btn.onclick=function(){ rows.splice(i,1); state.exercises[id]={rows:rows}; Store.save(state); paint(); };
        el.appendChild(btn);
        list.appendChild(el);
      });
    }
    document.getElementById("trAdd").onclick=function(){
      let sit=document.getElementById("trSit").value.trim(), th=document.getElementById("trThought").value.trim(), feel=+document.getElementById("trFeeling").value;
      let evi=document.getElementById("trEvidence").value.trim(), alt=document.getElementById("trAlt").value.trim();
      if(!sit||!th){ toast(te("situation")+" + "+te("autoThought")); return; }
      rows.push({sit:sit,thought:th,feel:clamp(feel,0,10),evi:evi,alt:alt}); state.exercises[id]={rows:rows}; Store.save(state); paint();
      document.getElementById("trSit").value=""; document.getElementById("trThought").value=""; document.getElementById("trFeeling").value=5; document.getElementById("trEvidence").value=""; document.getElementById("trAlt").value="";
    };
    paint();
  }

  /* ===== Reframe (Drag & Drop) ===== */
  if(kind==="reframe-dnd"){
    let distortions=[{k:"all-or-nothing",label:te("allOrNothing")},{k:"mind-reading",label:te("mindReading")},{k:"catastrophizing",label:te("catastrophizing")},{k:"shoulds",label:te("shoulds")}];
    let examples=[
      {text:"‘My A1c is up — I’m a total failure.’",k:"all-or-nothing"},
      {text:"‘The nurse will think I’m lazy.’",k:"mind-reading"},
      {text:"‘If I miss one dose, I’ll end up hospitalized.’",k:"catastrophizing"},
      {text:"‘I should never eat dessert.’",k:"shoulds"}
    ];
    let done=(state.exercises[id]&&state.exercises[id].done)?state.exercises[id].done:[];
    root.innerHTML='<div class="exercise"><h2>'+page.title+'</h2><p class="tiny">'+te("reframePick")+'</p>'
      +'<div class="flex"><div class="grow"><h3>'+te("thoughts")+'</h3><div id="cards" class="flex" style="min-height:80px;gap:8px;flex-wrap:wrap"></div></div>'
      +'<div class="grow"><h3>'+te("buckets")+'</h3><div class="grid" style="display:grid;gap:10px;grid-template-columns:repeat(2,1fr)">'+distortions.map(function(d){return '<div class="dnd-bucket" data-k="'+d.k+'" tabindex="0"><strong>'+d.label+'</strong><div class="tiny">'+te("dropHere")+'</div><div class="bucket"></div></div>';}).join('')+'</div></div></div>'
      +'<label class="field"><span>'+te("origThought")+'</span><input id="rfOrig" type="text"></label>'
      +'<label class="field"><span>'+te("balanced")+'</span><input id="rfNew" type="text" placeholder="It’s one data point; I can adjust."></label>'
      +'<div class="cta-row"><button class="primary" id="rfSave">'+t("save")+'</button></div></div>';
    let cards=document.getElementById("cards"); examples.forEach(function(ex){ let c=document.createElement('span'); c.className="tag drag"; c.textContent=ex.text; c.draggable=true; c.dataset.k=ex.k; c.addEventListener('dragstart',function(e){ e.dataTransfer.setData('text/plain', JSON.stringify(ex)); }); cards.appendChild(c); });
    let buckets=document.querySelectorAll(".dnd-bucket");
    for(let i=0;i<buckets.length;i++){ (function(b){
      b.addEventListener('dragover',function(e){e.preventDefault();});
      b.addEventListener('drop',function(e){ e.preventDefault(); let ex=JSON.parse(e.dataTransfer.getData('text/plain')); let ok=b.dataset.k===ex.k;
        let tag=document.createElement('div'); tag.className="tag"; tag.innerHTML=ex.text+' '+(ok?'✅':'❓');
        b.querySelector('.bucket').appendChild(tag);
        done.push({text:ex.text,placed:b.dataset.k,correct:ok}); if(!state.exercises[id]) state.exercises[id]={}; state.exercises[id].done=done; Store.save(state);
      });
    })(buckets[i]); }
    document.getElementById("rfSave").onclick=function(){
      let orig=document.getElementById("rfOrig").value.trim(), neu=document.getElementById("rfNew").value.trim();
      if(!orig||!neu){ toast(te("origThought")+" + "+te("balanced")); return; }
      if(!state.exercises[id]) state.exercises[id]={}; state.exercises[id].reframe={orig:orig,neu:neu};
      state.timeline.push({t:now(),what:"Saved reframe"}); awardBadges(); Store.save(state); toast(EX[state.lang].saved);
    };
  }

  /* ===== Problem Solver ===== */
  if(kind==="problem-solver"){
    let data=state.exercises[id]?state.exercises[id]:{problem:"",options:[],chosen:[],plan:{when:"",where:"",how:""}};
    if(!data.options) data.options=[]; if(!data.chosen) data.chosen=[]; if(!data.plan) data.plan={when:"",where:"",how:""};
    root.innerHTML=DOMPurify.sanitize('<div class="exercise"><h2>'+page.title+'</h2>'
      +'<label class="field"><span>'+te("defineProblem")+'</span><input id="psProb" type="text" value="'+(data.problem||'')+'"></label>'
      +'<div class="row"><label class="field"><span>'+te("option")+'</span><input id="psOpt" type="text"></label><button class="primary" id="psAdd">'+te("addOption")+'</button></div>'
      +'<div id="psOptions" class="badgebar"></div>'
      +'<div class="row"><label class="field"><span>'+te("when")+'</span><input id="psWhen" type="text" value="'+(data.plan.when||'')+'"></label>'
      +'<label class="field"><span>'+te("where")+'</span><input id="psWhere" type="text" value="'+(data.plan.where||'')+'"></label>'
      +'<label class="field"><span>'+te("how")+'</span><input id="psHow" type="text" value="'+(data.plan.how||'')+'"></label></div>'
      +'<div class="cta-row"><button class="primary" id="psSave">'+te("savePlan")+'</button></div></div>');
    let chosen=(function(arr){let s=new Set(); for(let i=0;i<arr.length;i++) s.add(arr[i]); return s;})(data.chosen||[]);
    function renderOptions(){ let cont=document.getElementById("psOptions"); cont.innerHTML=data.options.length?"":"<span class=\"tiny\">"+te("selectHint")+"</span>";
      data.options.forEach(function(o,i){ let el=document.createElement('span'); el.className="chip"; el.textContent=o+(chosen.has(i)?" ✓":""); el.onclick=function(){ if(chosen.has(i)) chosen.delete(i); else chosen.add(i); renderOptions(); }; cont.appendChild(el); });
    }
    document.getElementById("psAdd").onclick=function(){ let v=document.getElementById("psOpt").value.trim(); if(!v) return; data.options.push(v); document.getElementById("psOpt").value=""; state.exercises[id]=data; Store.save(state); renderOptions(); };
    document.getElementById("psSave").onclick=function(){ data.problem=document.getElementById("psProb").value.trim();
      data.plan={when:document.getElementById("psWhen").value.trim(), where:document.getElementById("psWhere").value.trim(), how:document.getElementById("psHow").value.trim()};
      data.chosen=Array.from(chosen); state.exercises[id]=data; state.timeline.push({t:now(),what:"Saved problem plan"}); awardBadges(); Store.save(state); toast(EX[state.lang].saved); };
    renderOptions();
  }

  /* ===== Activity Planner ===== */
  if(kind==="activity-planner"){
    let acts=(state.exercises[id]&&state.exercises[id].acts)?state.exercises[id].acts:[];
    root.innerHTML='<div class="exercise"><h2>'+page.title+'</h2>'
      +'<p class="tiny">'+(state.lang==="da"?"Planlæg 2–3 små handlinger de næste 48 timer. Hold dem små.":"Plan 2–3 small actions for the next 48 hours. Keep them tiny.")+'</p>'
      +'<div class="row"><label class="field"><span>'+te("action")+'</span><input id="apTask" type="text"></label>'
      +'<label class="field"><span>'+te("energy")+'</span><input id="apCost" type="number" min="1" max="5" value="2"></label>'
      +'<label class="field"><span>'+te("whenTime")+'</span><input id="apWhen" type="text"></label>'
      +'<button class="primary" id="apAdd">'+t("add")+'</button></div>'
      +'<div class="list" id="apList"></div></div>';
    function paint(){ let list=document.getElementById("apList"); list.innerHTML=acts.length?"":"<div class=\"tiny\">"+te("noActions")+"</div>";
      acts.forEach(function(a,i){
        let row=document.createElement('div');
        row.className="item";
        let top=document.createElement('div');
        let strong=document.createElement('strong');
        strong.textContent=a.task;
        top.appendChild(strong);
        let span=document.createElement('span');
        span.className="tiny";
        span.textContent='Cost '+a.cost+'/5 • '+a.when;
        top.appendChild(document.createTextNode(' '));
        top.appendChild(span);
        row.appendChild(top);
        let row2=document.createElement('div');
        row2.className="row";
        let label=document.createElement('label');
        label.className="chip";
        let input=document.createElement('input');
        input.type="checkbox";
        if(a.done) input.checked=true;
        input.setAttribute('data-i',i);
        label.appendChild(input);
        label.appendChild(document.createTextNode(' '+te("done")));
        row2.appendChild(label);
        let btn=document.createElement('button');
        btn.className="ghost";
        btn.setAttribute('data-i',i);
        btn.textContent=t("delete");
        btn.onclick=function(){ acts.splice(i,1); state.exercises[id]={acts:acts}; Store.save(state); paint(); };
        row2.appendChild(btn);
        row.appendChild(row2);
        input.onchange=function(e){ acts[i].done=e.target.checked; state.exercises[id]={acts:acts}; Store.save(state); };
        list.appendChild(row);
      }); }
    document.getElementById("apAdd").onclick=function(){ let task=document.getElementById("apTask").value.trim(), cost=+document.getElementById("apCost").value, when=document.getElementById("apWhen").value.trim();
      if(!task) return; acts.push({task:task,cost:clamp(cost,1,5),when:when,done:false}); state.exercises[id]={acts:acts}; Store.save(state); paint();
      document.getElementById("apTask").value=""; document.getElementById("apCost").value=2; document.getElementById("apWhen").value=""; };
    paint();
  }

  /* ===== Values Sort ===== */
  if(kind==="values-sort"){
    let pool=state.lang==="da"?["Sundhed","Familie","Frihed","Udvikling","Venlighed","Stabilitet","Eventyr","Læring","Tro/Spiritualitet","Fællesskab","Kreativitet","Balance"]
                               :["Health","Family","Freedom","Growth","Kindness","Stability","Adventure","Learning","Faith/Spirituality","Community","Creativity","Balance"];
    let chosen=(state.exercises[id]&&state.exercises[id].top)?state.exercises[id].top.slice():[];
    root.innerHTML='<div class="exercise"><h2>'+page.title+'</h2><p class="tiny">'+te("pickValues")+'</p>'
      +'<div class="badgebar" id="vsPool"></div><div class="badgebar" id="vsTop"></div>'
      +'<label class="field"><span>'+te("oneAction")+'</span><input id="vsAction" type="text"></label><div class="cta-row"><button class="primary" id="vsSave">'+t("save")+'</button></div></div>';
    function renderPool(){ let poolEl=document.getElementById("vsPool"); poolEl.innerHTML=pool.map(function(v){return '<span class="chip">'+v+'</span>';}).join('');
      let chips=poolEl.querySelectorAll('.chip'); for(let i=0;i<chips.length;i++){ (function(ch){ ch.onclick=function(){ if(chosen.indexOf(ch.textContent)===-1){ chosen.push(ch.textContent); renderTop(); } }; })(chips[i]); } }
    function renderTop(){
      let topEl=document.getElementById("vsTop");
      topEl.textContent="";
      if(!chosen.length){
        let span=document.createElement('span');
        span.className='tiny';
        span.textContent=(state.lang==="da"?"Ingen værdier valgt endnu.":"No values selected yet.");
        topEl.appendChild(span);
        return;
      }
      chosen.forEach(function(v,i){
        let chip=document.createElement('span');
        chip.className='chip';
        chip.appendChild(document.createTextNode(v+' '));
        let btn=document.createElement('button');
        btn.setAttribute('aria-label','remove');
        btn.dataset.i=i;
        btn.textContent='×';
        chip.appendChild(btn);
        topEl.appendChild(chip);
      });
      let btns=topEl.querySelectorAll('button');
      for(let i=0;i<btns.length;i++){ (function(b){ b.onclick=function(){ let idx=+b.getAttribute('data-i'); chosen.splice(idx,1); renderTop(); }; })(btns[i]); }
    }
    document.getElementById("vsSave").onclick=function(){ let action=document.getElementById("vsAction").value.trim(); state.exercises[id]={top:chosen.slice(), action:action};
      state.timeline.push({t:now(),what:"Saved values"}); awardBadges(); Store.save(state); toast(EX[state.lang].saved); };
    renderPool(); renderTop();
  }

  /* ===== Breathing ===== */
  if(kind==="breathing"){
    root.innerHTML='<div class="exercise center"><h2>'+page.title+'</h2>'
      +'<div class="tiny">'+te("breathingNote")+'</div><div class="breath" aria-label="Breathing animation"></div>'
      +'<div class="cta-row center" style="justify-content:center"><button id="brStart" class="primary">'+te("startTimer")+'</button><div class="chip" id="brRemain">—</div></div></div>';
    document.getElementById("brStart").onclick=function(){
      let secs=60; let rem=document.getElementById("brRemain"); rem.textContent="60"+te("seconds");
      let id=setInterval(function(){ secs--; rem.textContent=secs+te("seconds");
        if(secs<=0){ clearInterval(id); rem.textContent=state.lang==="da"?"Færdig ✔️":"Done ✔️"; state.timeline.push({t:now(),what:"Breathing done"}); awardBadges(); Store.save(state); } },1000);
    };
  }

  /* ===== Coping Plan ===== */
  if(kind==="coping-plan"){
    let cp=state.exercises[id]?state.exercises[id]:{signals:[],supports:[],list:[]}; if(!cp.signals) cp.signals=[]; if(!cp.supports) cp.supports=[]; if(!cp.list) cp.list=[];
    root.innerHTML=DOMPurify.sanitize('<div class="exercise"><h2>'+page.title+'</h2>'
      +'<div class="row"><label class="field"><span>'+te("earlySign")+'</span><input id="cpSig" type="text"></label><button class="primary" id="cpAddSig">'+t("add")+'</button></div><div class="badgebar" id="cpSigList"></div>'
      +'<div class="row"><label class="field"><span>'+te("support")+'</span><input id="cpSup" type="text"></label><button class="primary" id="cpAddSup">'+t("add")+'</button></div><div class="badgebar" id="cpSupList"></div>'
      +'<div class="row"><label class="field"><span>'+te("step")+'</span><input id="cpStep" type="text"></label><button class="primary" id="cpAddStep">'+t("add")+'</button></div><div class="list" id="cpSteps"></div>'
      +'<div class="cta-row"><button class="primary" id="cpSave">'+t("save")+'</button></div></div>');
    function paint(){
      let sigList=document.getElementById("cpSigList");
      sigList.textContent="";
      if(cp.signals.length){ cp.signals.forEach(function(s,i){ let chip=document.createElement("span"); chip.className="chip"; let txt=document.createElement("span"); txt.textContent=s; let btn=document.createElement("button"); btn.setAttribute("data-t","sig"); btn.setAttribute("data-i",i); btn.textContent="×"; chip.appendChild(txt); chip.appendChild(btn); sigList.appendChild(chip); }); } else { let emptySig=document.createElement("span"); emptySig.className="tiny"; emptySig.textContent=te("noSigns"); sigList.appendChild(emptySig); }
      let supList=document.getElementById("cpSupList");
      supList.textContent="";
      if(cp.supports.length){ cp.supports.forEach(function(s,i){ let chip=document.createElement("span"); chip.className="chip"; let txt=document.createElement("span"); txt.textContent=s; let btn=document.createElement("button"); btn.setAttribute("data-t","sup"); btn.setAttribute("data-i",i); btn.textContent="×"; chip.appendChild(txt); chip.appendChild(btn); supList.appendChild(chip); }); } else { let emptySup=document.createElement("span"); emptySup.className="tiny"; emptySup.textContent=te("noSupports"); supList.appendChild(emptySup); }
      let stepList=document.getElementById("cpSteps");
      stepList.textContent="";
      if(cp.list.length){ cp.list.forEach(function(s,i){ let row=document.createElement("div"); row.className="item"; let div=document.createElement("div"); div.textContent=s; let btn=document.createElement("button"); btn.className="ghost"; btn.setAttribute("data-t","step"); btn.setAttribute("data-i",i); btn.textContent=t("delete"); row.appendChild(div); row.appendChild(btn); stepList.appendChild(row); }); } else { let emptyStep=document.createElement("div"); emptyStep.className="tiny"; emptyStep.textContent=te("noSteps"); stepList.appendChild(emptyStep); }
      let btns=document.querySelectorAll("#cpSigList button,#cpSupList button,#cpSteps button");
      for(let i=0;i<btns.length;i++){ (function(b){ b.onclick=function(){ let ttype=b.getAttribute('data-t'), ii=+b.getAttribute('data-i'); if(ttype==="sig") cp.signals.splice(ii,1); else if(ttype==="sup") cp.supports.splice(ii,1); else cp.list.splice(ii,1); Store.save(state); paint(); }; })(btns[i]); }
    }
    document.getElementById("cpAddSig").onclick=function(){ let v=document.getElementById("cpSig").value.trim(); if(!v) return; cp.signals.push(v); Store.save(state); document.getElementById("cpSig").value=""; paint(); };
    document.getElementById("cpAddSup").onclick=function(){ let v=document.getElementById("cpSup").value.trim(); if(!v) return; cp.supports.push(v); Store.save(state); document.getElementById("cpSup").value=""; paint(); };
    document.getElementById("cpAddStep").onclick=function(){ let v=document.getElementById("cpStep").value.trim(); if(!v) return; cp.list.push(v); Store.save(state); document.getElementById("cpStep").value=""; paint(); };
    document.getElementById("cpSave").onclick=function(){ state.exercises[id]=cp; state.timeline.push({t:now(),what:"Saved coping plan"}); awardBadges(); Store.save(state); toast(EX[state.lang].saved); };
    paint();
  }

  /* ===== Care Script ===== */
  if(kind==="care-script"){
    let data=state.exercises[id]?state.exercises[id]:{context:"",observation:"",preference:"",enlist:""};
    root.innerHTML=DOMPurify.sanitize('<div class="exercise"><h2>'+page.title+'</h2>'
      +'<div class="row"><label class="field"><span>'+te("context")+'</span><input id="csCtx" type="text" value="'+(data.context||'')+'"></label>'
      +'<label class="field"><span>'+te("observation")+'</span><input id="csObs" type="text" value="'+(data.observation||'')+'"></label></div>'
      +'<div class="row"><label class="field"><span>'+te("preference")+'</span><input id="csPref" type="text" value="'+(data.preference||'')+'"></label>'
      +'<label class="field"><span>'+te("enlist")+'</span><input id="csEn" type="text" value="'+(data.enlist||'')+'"></label></div>'
      +'<div class="notice"><strong>'+te("preview")+'</strong><div id="csPreview" class="tiny"></div></div>'
      +'<div class="cta-row"><button class="primary" id="csSave">'+t("save")+'</button></div></div>');
    function preview(){ let ctx=(document.getElementById("csCtx").value||'—'), obs=(document.getElementById("csObs").value||'—'), pref=(document.getElementById("csPref").value||'—'), en=(document.getElementById("csEn").value||'—');
      document.getElementById("csPreview").textContent=(state.lang==="da"?"Kontekst: ":"Context: ")+ctx+" | "+(state.lang==="da"?"Observation: ":"Observation: ")+obs+" | "+(state.lang==="da"?"Præference: ":"Preference: ")+pref+" | "+(state.lang==="da"?"Engagér: ":"Enlist: ")+en; }
    ["csCtx","csObs","csPref","csEn"].forEach(function(id){ let el=document.getElementById(id); if(el) el.addEventListener('input', preview); });
    document.getElementById("csSave").onclick=function(){ state.exercises[id]={context:document.getElementById("csCtx").value.trim(), observation:document.getElementById("csObs").value.trim(), preference:document.getElementById("csPref").value.trim(), enlist:document.getElementById("csEn").value.trim()}; state.timeline.push({t:now(),what:"Saved care script"}); awardBadges(); Store.save(state); toast(EX[state.lang].saved); preview(); };
    preview();
  }

  /* ===== Relapse Plan ===== */
  if(kind==="relapse-plan"){
    let data=state.exercises[id]?state.exercises[id]:{risks:[],ifThen:[]}; if(!data.risks) data.risks=[]; if(!data.ifThen) data.ifThen=[];
    root.innerHTML=DOMPurify.sanitize('<div class="exercise"><h2>'+page.title+'</h2>'
      +'<div class="row"><label class="field"><span>'+te("risk")+'</span><input id="rpRisk" type="text"></label><button class="primary" id="rpAddRisk">'+t("add")+'</button></div><div class="badgebar" id="rpRisks"></div>'
      +'<div class="row"><label class="field"><span>'+te("ifCue")+'</span><input id="rpIf" type="text"></label><label class="field"><span>'+te("thenAct")+'</span><input id="rpThen" type="text"></label><button class="primary" id="rpAddPair">'+te("addPair")+'</button></div><div class="list" id="rpPairs"></div></div>');
    function paint(){
      let riskList=document.getElementById("rpRisks");
      riskList.textContent="";
      if(data.risks.length){ data.risks.forEach(function(r,i){ let chip=document.createElement("span"); chip.className="chip"; let txt=document.createElement("span"); txt.textContent=r; let btn=document.createElement("button"); btn.setAttribute("data-i",i); btn.textContent="×"; chip.appendChild(txt); chip.appendChild(btn); riskList.appendChild(chip); }); } else { let emptyRisk=document.createElement("span"); emptyRisk.className="tiny"; emptyRisk.textContent=te("noRisks"); riskList.appendChild(emptyRisk); }
      let pairList=document.getElementById("rpPairs");
      pairList.textContent="";
      if(data.ifThen.length){ data.ifThen.forEach(function(p,i){ let item=document.createElement("div"); item.className="item"; let textDiv=document.createElement("div"); let strongIf=document.createElement("strong"); strongIf.textContent=state.lang==="da"?"Hvis":"If"; textDiv.appendChild(strongIf); textDiv.appendChild(document.createTextNode(" "+p.if+" ")); let strongThen=document.createElement("strong"); strongThen.textContent=state.lang==="da"?"så":"then"; textDiv.appendChild(strongThen); textDiv.appendChild(document.createTextNode(" "+p.then)); item.appendChild(textDiv); let btn=document.createElement("button"); btn.className="ghost"; btn.setAttribute("data-i",i); btn.textContent=t("delete"); item.appendChild(btn); pairList.appendChild(item); }); } else { let emptyPair=document.createElement("div"); emptyPair.className="tiny"; emptyPair.textContent=te("noPairs"); pairList.appendChild(emptyPair); }
      let delRisk=document.querySelectorAll("#rpRisks button"); for(let i=0;i<delRisk.length;i++){ (function(b){ b.onclick=function(){ let idx=+b.getAttribute('data-i'); data.risks.splice(idx,1); Store.save(state); paint(); }; })(delRisk[i]); }
      let delPair=document.querySelectorAll("#rpPairs button"); for(let j=0;j<delPair.length;j++){ (function(b){ b.onclick=function(){ let idx=+b.getAttribute('data-i'); data.ifThen.splice(idx,1); Store.save(state); paint(); }; })(delPair[j]); }
    }
    document.getElementById("rpAddRisk").onclick=function(){ let v=document.getElementById("rpRisk").value.trim(); if(!v) return; data.risks.push(v); Store.save(state); document.getElementById("rpRisk").value=""; paint(); };
    document.getElementById("rpAddPair").onclick=function(){ let iff=document.getElementById("rpIf").value.trim(), then=document.getElementById("rpThen").value.trim(); if(!iff||!then) return; data.ifThen.push({if:iff,then:then}); Store.save(state); document.getElementById("rpIf").value=""; document.getElementById("rpThen").value=""; paint(); };
    paint();
  }
}


/* ========== Language Switcher & Init ========== */
function init() {
  document.getElementById("langSelect").onchange = e => {
    state.lang = e.target.value;
    Store.save(state);
    renderTexts(state, t);
    renderSidebar(state, Lang, navigateTo);
    onRoute();
  };
  document.getElementById("homeBtn").onclick = () => {
    location.hash = "";
    renderHome(state, t, overallProgress);
  };

  document.getElementById("dataBtn").onclick = () => {
    location.hash = "#data";
    onRoute(); // trigger rendering immediately
  };

  window.addEventListener("hashchange", onRoute);
  renderTexts(state, t);
  renderSidebar(state, Lang, navigateTo);
  onRoute();
}
document.addEventListener("DOMContentLoaded", init);
