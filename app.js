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
var Store={
  key:"dd_icbt_state",
  version:1,
  getSecret:function(){
    var s=localStorage.getItem(this.key+"_secret");
    if(!s){ s=Math.random().toString(36).slice(2); localStorage.setItem(this.key+"_secret",s); }
    return s;
  },
  xor:function(str,key){ var r=""; for(var i=0;i<str.length;i++){ r+=String.fromCharCode(str.charCodeAt(i)^key.charCodeAt(i%key.length)); } return r; },
  encrypt:function(text){ return btoa(this.xor(text,this.getSecret())); },
  decrypt:function(c){ return this.xor(atob(c),this.getSecret()); },
  validate:function(d){
    var o={};
    o.version=typeof d.version==="number"?d.version:this.version;
    o.lang=typeof d.lang==="string"?d.lang:"da";
    o.completed=d.completed&&typeof d.completed==="object"?d.completed:{};
    o.exercises=d.exercises&&typeof d.exercises==="object"?d.exercises:{};
    o.streak=d.streak&&typeof d.streak.count==="number"?{last:d.streak.last||null,count:d.streak.count}:{last:null,count:0};
    o.timeline=Array.isArray(d.timeline)?d.timeline:[];
    o.badges=Array.isArray(d.badges)?d.badges:[];
    return o;
  },
  migrate:function(d){
    if(!d.version) d.version=1;
    if(d.version<this.version){
      d.version=this.version;
    }
    return d;
  },
  load:function(){
    try{
      var raw=localStorage.getItem(this.key);
      if(!raw) return this.validate({version:this.version});
      var data=JSON.parse(this.decrypt(raw));
      return this.validate(this.migrate(data));
    }catch(e){
      return this.validate({version:this.version});
    }
  },
  save:function(d){
    var clean=this.validate(d); clean.version=this.version;
    localStorage.setItem(this.key,this.encrypt(JSON.stringify(clean)));
  }
};
var state=Store.load();

/* ========== Helpers ========== */
function t(k){ return Lang[state.lang][k]; }
function todayKey(){ return new Date().toISOString().slice(0,10); }
function now(){ return new Date().toISOString(); }
function toast(msg){ var d=document.createElement("div"); d.textContent=msg;
  d.style.cssText="position:fixed;bottom:16px;left:50%;transform:translateX(-50%);background:#0b1224;padding:10px 14px;border:1px solid #1f2937;border-radius:10px;color:#e5e7eb;z-index:9999";
  document.body.appendChild(d); setTimeout(function(){ d.remove(); },2000);
}
function clamp(n,min,max){ return Math.max(min, Math.min(max, n)); }

/* Exercise locale strings */
var EX={
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
  var d=todayKey();
  if(state.streak.last!==d){
    var y=new Date(); y.setDate(y.getDate()-1);
    var yKey=y.toISOString().slice(0,10);
    state.streak.count=(state.streak.last===yKey)?(state.streak.count||0)+1:1;
    state.streak.last=d; Store.save(state);
  }
}
function awardBadges(){
  var p=overallProgress();
  var set=[{th:.01,n:"Getting Started"},{th:.25,n:"Quarter Way"},{th:.5,n:"Halfway Hero"},{th:.75,n:"Almost There"},{th:.99,n:"Completed 🎉"}];
  for(var i=0;i<set.length;i++){
    var b=set[i]; if(p>=b.th && state.badges.indexOf(b.n)===-1){ state.badges.push(b.n); state.timeline.push({t:now(),what:"Badge: "+b.n}); }
  }
  Store.save(state);
}

/* ========== Sidebar + Home ========== */
function renderSidebar(){
  var list=document.getElementById("moduleList"); list.innerHTML="";
  Lang[state.lang].modulesData.forEach(function(m,mi){
    var done=m.pages.filter(function(p){return !!state.completed[p.id];}).length;
    var pct=Math.round(done/m.pages.length*100);
    var div=document.createElement("div");
    div.className="mod";
    div.innerHTML='<div><div class="t">'+m.title+'</div><div class="tiny">'+m.goal+'</div><div class="progressbar"><i style="width:'+pct+'%"></i></div></div><div class="badge">'+pct+'%</div>';
    div.onclick=function(){ navigateTo(mi,0); };
    list.appendChild(div);
  });
}
function renderHome(){
  var main=document.getElementById("main");
  var pctNum=Math.round(overallProgress()*100);
  var pages=Object.keys(state.completed).length;

  var badges = state.badges && state.badges.length
    ? state.badges.map(function(b){ return '<span class="chip">🏅 '+b+'</span>'; }).join('')
    : '<span class="tiny">'+(state.lang==="da"?"Ingen mærker endnu — de vises her, når du låser dem op.":"No badges yet — they’ll appear here as you unlock them.")+'</span>';

  var recent = state.timeline && state.timeline.length
    ? state.timeline.slice(-6).reverse().map(function(ev){
        var dt=new Date(ev.t); var when=dt.toLocaleString();
        return '<div class="item" style="gap:12px;"><div><div class="tiny">'+when+'</div><div>'+ev.what+'</div></div></div>';
      }).join('')
    : '<div class="tiny">'+(state.lang==="da"?"Din aktivitet vises her.":"Your activity will show here.")+'</div>';

  main.innerHTML=''
    +'<div class="page">'
      +'<div class="hero"><h1>'+t("welcome")+'</h1><p class="muted">'+t("subtitle")+'</p></div>'
      +'<section class="content">'
        +'<div class="kpi">'
          +'<div class="tile"><div class="big">'+pctNum+'%</div><div class="tiny">'+t("overall")+'</div></div>'
          +'<div class="tile"><div class="big">'+pages+'</div><div class="tiny">'+t("pagesDone")+'</div></div>'
          +'<div class="tile"><div class="big">'+(state.badges.slice(-1)[0]||t("none"))+'</div><div class="tiny">'+t("latestBadge")+'</div></div>'
        +'</div>'
        +'<div class="row" style="align-items:center">'
          +'<div class="progress-ring" style="--p:'+pctNum+'%"><b>'+pctNum+'%</b></div>'
          +'<div class="notice" style="flex:1;min-width:240px;">'+t("notEmergency")+'</div>'
        +'</div>'
        +'<article class="flow"><h2>'+t("badgesTitle")+'</h2><div class="badgebar" id="badgeBar">'+badges+'</div></article>'
        +'<article class="flow"><h2>'+t("activityTitle")+'</h2><div class="timeline" id="timeline">'+recent+'</div></article>'
      +'</section>'
    +'</div>';
}

/* ========== Router & Progress ========== */
function overallProgress(){
  var total=Lang[state.lang].modulesData.reduce(function(a,m){return a+m.pages.length;},0);
  return total? Object.keys(state.completed).length/total : 0;
}
function navigateTo(mi,pi){ location.hash="#/m/"+mi+"/p/"+pi; }
function onRoute(){
  var m=location.hash.match(/#\/m\/(\d+)\/p\/(\d+)/);
  if(!m){ renderHome(); renderSidebar(); return; }
  openPage(+m[1],+m[2]);
}

/* ========== Page & Exercises ========== */
function openPage(mi,pi){
  var mod=Lang[state.lang].modulesData[mi]; if(!mod) return;
  var page=mod.pages[pi]; if(!page) return;
  var main=document.getElementById("main");
  main.innerHTML='<div class="page">'
    +'<div class="hero"><h1>'+mod.title+'</h1><div class="meta"><span>'+mod.goal+'</span></div></div>'
    +'<section class="content" id="content"></section>'
    +'<div class="cta-row" style="padding:0 18px 18px">'
      +'<button id="prevBtn" '+(pi===0?'disabled':'')+'>'+t("prev")+'</button>'
      +'<div class="spacer"></div>'
      +'<button id="markBtn" class="ghost">'+t("markComplete")+'</button>'
      +'<button id="nextBtn" class="primary">'+(pi===mod.pages.length-1?t("finish"):t("next"))+'</button>'
    +'</div></div>';

  var content=document.getElementById("content");
  if(page.type==="read"){
    content.innerHTML='<article class="flow"><h2>'+page.title+'</h2>'+page.body+'</article>';
  } else {
    renderExercise(content, page);
  }

  // Prev
  var prevBtn=document.getElementById("prevBtn");
  if(prevBtn) prevBtn.onclick=function(){ navigateTo(mi, Math.max(0,pi-1)); };

  // Next / Finish (patched to go to next module)
  var nextBtn=document.getElementById("nextBtn");
  if(nextBtn) nextBtn.onclick=function(){
    // If not last page: go to next page
    if (pi < mod.pages.length - 1) {
      navigateTo(mi, pi + 1);
      return;
    }
    // Last page → go to first page of next module if exists, otherwise Home
    var mods = Lang[state.lang].modulesData;
    if (mi + 1 < mods.length) {
      navigateTo(mi + 1, 0);
    } else {
      location.hash = "";
      renderHome();
    }
  };

  // Mark complete
  var markBtn=document.getElementById("markBtn");
  if(markBtn) markBtn.onclick=function(){
    state.completed[page.id]=true;
    state.timeline.push({t:now(), what:"Completed "+page.title});
    bumpStreak(); awardBadges(); Store.save(state);
    toast(EX[state.lang].completed);
    renderSidebar();
  };
}

function renderExercise(root, page){
  var id=page.id, kind=page.exercise;
  function save(patch){ if(!state.exercises[id]) state.exercises[id]={};
    var cur=state.exercises[id]; for(var k in patch){ if(Object.prototype.hasOwnProperty.call(patch,k)) cur[k]=patch[k]; }
    Store.save(state);
  }

  /* ===== Distress Rating ===== */
  if(kind==="distress-rating"){
    var last=(state.exercises[id]&&typeof state.exercises[id].rating==='number')?state.exercises[id].rating:4;
    var prevBody=(state.exercises[id]&&state.exercises[id].body)?state.exercises[id].body:'';
    var prevNote=(state.exercises[id]&&state.exercises[id].note)?state.exercises[id].note:'';
    root.innerHTML='<div class="exercise"><h2>'+page.title+'</h2>'
      +'<div class="row"><label class="field"><span>'+te("distressQ")+'</span>'
        +'<input type="range" min="0" max="10" value="'+last+'" id="drRange"><div class="row"><span class="chip" id="drVal">'+last+'</span></div></label>'
        +'<label class="field"><span>'+te("bodyQ")+'</span><input type="text" id="drBody" value="'+prevBody+'"></label></div>'
      +'<label class="field"><span>'+te("noteQ")+'</span><textarea id="drNote" rows="3">'+prevNote+'</textarea></label>'
      +'<div class="cta-row"><button class="primary" id="drSave">'+t("save")+'</button><button id="drTrend">'+te("viewTrend")+'</button></div>'
      +'<canvas id="miniChart" width="600" height="160" style="width:100%;max-width:100%"></canvas></div>';
    var range=document.getElementById("drRange"), val=document.getElementById("drVal");
    if(range&&val){ range.oninput=function(){ val.textContent=range.value; }; }
    function draw(){
      var c=document.getElementById("miniChart"); if(!c) return;
      var ctx=c.getContext('2d'); ctx.clearRect(0,0,600,160);
      var pts=(state.exercises[id]&&state.exercises[id].trend)?state.exercises[id].trend:[];
      if(pts.length===0){ ctx.fillStyle="#94a3b8"; ctx.fillText(te("chartHint"),10,30); return; }
      var pad=30,w=600-pad*2,h=160-pad*2; ctx.strokeStyle="#334155"; ctx.strokeRect(pad,pad,w,h);
      var xs=pts.map(function(p,i){return pad+i*(w/Math.max(1,pts.length-1));});
      var ys=pts.map(function(p){return pad+(10-p.v)/10*h;});
      ctx.strokeStyle="#22c55e"; ctx.lineWidth=2; ctx.beginPath();
      for(var i=0;i<xs.length;i++){ if(i===0) ctx.moveTo(xs[i],ys[i]); else ctx.lineTo(xs[i],ys[i]); } ctx.stroke();
      ctx.fillStyle="#22c55e"; for(var j=0;j<xs.length;j++){ ctx.beginPath(); ctx.arc(xs[j],ys[j],3,0,Math.PI*2); ctx.fill(); }
    }
    document.getElementById("drSave").onclick=function(){
      var rating=+document.getElementById("drRange").value;
      var body=document.getElementById("drBody").value.trim();
      var note=document.getElementById("drNote").value.trim();
      var trend=(state.exercises[id]&&state.exercises[id].trend)?state.exercises[id].trend:[];
      trend.push({d:todayKey(), v:clamp(rating,0,10)});
      save({rating:rating, body:body, note:note, trend:trend});
      state.timeline.push({t:now(), what:"Distress "+rating+"/10"}); awardBadges(); Store.save(state);
      toast(EX[state.lang].saved); draw();
    };
    document.getElementById("drTrend").onclick=draw; draw();
  }

  /* ===== Trigger Log ===== */
  if(kind==="trigger-log"){
    var items=(state.exercises[id]&&state.exercises[id].items)?state.exercises[id].items:[];
    root.innerHTML='<div class="exercise"><h2>'+page.title+'</h2>'
      +'<div class="row"><label class="field"><span>'+te("trigger")+'</span><input id="tgName" type="text"></label>'
      +'<label class="field"><span>'+te("typicalThought")+'</span><input id="tgThought" type="text"></label>'
      +'<label class="field"><span>'+te("feelingWord")+'</span><input id="tgFeel" type="text"></label>'
      +'<button class="primary" id="tgAdd">'+t("add")+'</button></div><div class="list" id="tgList"></div></div>';
    function paint(){
      var list=document.getElementById("tgList"); list.innerHTML=items.length?"":"<div class='tiny'>"+te("noTriggers")+"</div>";
      items.forEach(function(it,idx){
        var row=document.createElement('div'); row.className="item";
        row.innerHTML='<div><strong>'+it.n+'</strong><div class="tiny">'+it.t+' • '+it.f+'</div></div><button class="ghost" data-i="'+idx+'">'+t("delete")+'</button>';
        row.querySelector('button').onclick=function(){ items.splice(idx,1); state.exercises[id]={items:items}; Store.save(state); paint(); };
        list.appendChild(row);
      });
    }
    document.getElementById("tgAdd").onclick=function(){
      var n=document.getElementById("tgName").value.trim(), th=document.getElementById("tgThought").value.trim(), f=document.getElementById("tgFeel").value.trim();
      if(!n){ toast("+"+te("trigger")); return; }
      items.push({n:n,t:th,f:f}); state.exercises[id]={items:items}; Store.save(state); paint();
      document.getElementById("tgName").value=""; document.getElementById("tgThought").value=""; document.getElementById("tgFeel").value="";
    };
    paint();
  }

  /* ===== Thought Record ===== */
  if(kind==="thought-record"){
    var rows=(state.exercises[id]&&state.exercises[id].rows)?state.exercises[id].rows:[];
    root.innerHTML='<div class="exercise"><h2>'+page.title+'</h2>'
      +'<div class="row"><label class="field"><span>'+te("situation")+'</span><input id="trSit" type="text"></label>'
      +'<label class="field"><span>'+te("autoThought")+'</span><input id="trThought" type="text"></label>'
      +'<label class="field"><span>'+te("feelingNum")+'</span><input id="trFeeling" type="number" min="0" max="10" value="6"></label></div>'
      +'<label class="field"><span>'+te("evidence")+'</span><textarea id="trEvidence" rows="3"></textarea></label>'
      +'<label class="field"><span>'+te("altThought")+'</span><input id="trAlt" type="text"></label>'
      +'<div class="cta-row"><button class="primary" id="trAdd">'+te("addRow")+'</button></div>'
      +'<div class="list" id="trList"></div></div>';
    function paint(){
      var list=document.getElementById("trList"); list.innerHTML=rows.length?"":"<div class='tiny'>"+te("noEntries")+"</div>";
      rows.forEach(function(r,i){
        var el=document.createElement('div'); el.className="item";
        el.innerHTML='<div><div><strong>'+r.sit+'</strong> — <em>'+r.thought+'</em> ( '+r.feel+'/10 )</div><div class="tiny">'+te("evidence")+': '+r.evi+'</div><div class="tiny">'+te("altThought")+': '+r.alt+'</div></div><button class="ghost" data-i="'+i+'">'+t("delete")+'</button>';
        el.querySelector('button').onclick=function(){ rows.splice(i,1); state.exercises[id]={rows:rows}; Store.save(state); paint(); };
        list.appendChild(el);
      });
    }
    document.getElementById("trAdd").onclick=function(){
      var sit=document.getElementById("trSit").value.trim(), th=document.getElementById("trThought").value.trim(), feel=+document.getElementById("trFeeling").value;
      var evi=document.getElementById("trEvidence").value.trim(), alt=document.getElementById("trAlt").value.trim();
      if(!sit||!th){ toast(te("situation")+" + "+te("autoThought")); return; }
      rows.push({sit:sit,thought:th,feel:clamp(feel,0,10),evi:evi,alt:alt}); state.exercises[id]={rows:rows}; Store.save(state); paint();
      document.getElementById("trSit").value=""; document.getElementById("trThought").value=""; document.getElementById("trFeeling").value=5; document.getElementById("trEvidence").value=""; document.getElementById("trAlt").value="";
    };
    paint();
  }

  /* ===== Reframe (Drag & Drop) ===== */
  if(kind==="reframe-dnd"){
    var distortions=[{k:"all-or-nothing",label:te("allOrNothing")},{k:"mind-reading",label:te("mindReading")},{k:"catastrophizing",label:te("catastrophizing")},{k:"shoulds",label:te("shoulds")}];
    var examples=[
      {text:"‘My A1c is up — I’m a total failure.’",k:"all-or-nothing"},
      {text:"‘The nurse will think I’m lazy.’",k:"mind-reading"},
      {text:"‘If I miss one dose, I’ll end up hospitalized.’",k:"catastrophizing"},
      {text:"‘I should never eat dessert.’",k:"shoulds"}
    ];
    var done=(state.exercises[id]&&state.exercises[id].done)?state.exercises[id].done:[];
    root.innerHTML='<div class="exercise"><h2>'+page.title+'</h2><p class="tiny">'+te("reframePick")+'</p>'
      +'<div class="flex"><div class="grow"><h3>'+te("thoughts")+'</h3><div id="cards" class="flex" style="min-height:80px;gap:8px;flex-wrap:wrap"></div></div>'
      +'<div class="grow"><h3>'+te("buckets")+'</h3><div class="grid" style="display:grid;gap:10px;grid-template-columns:repeat(2,1fr)">'+distortions.map(function(d){return '<div class="dnd-bucket" data-k="'+d.k+'" tabindex="0"><strong>'+d.label+'</strong><div class="tiny">'+te("dropHere")+'</div><div class="bucket"></div></div>';}).join('')+'</div></div></div>'
      +'<label class="field"><span>'+te("origThought")+'</span><input id="rfOrig" type="text"></label>'
      +'<label class="field"><span>'+te("balanced")+'</span><input id="rfNew" type="text" placeholder="It’s one data point; I can adjust."></label>'
      +'<div class="cta-row"><button class="primary" id="rfSave">'+t("save")+'</button></div></div>';
    var cards=document.getElementById("cards"); examples.forEach(function(ex){ var c=document.createElement('span'); c.className="tag drag"; c.textContent=ex.text; c.draggable=true; c.dataset.k=ex.k; c.addEventListener('dragstart',function(e){ e.dataTransfer.setData('text/plain', JSON.stringify(ex)); }); cards.appendChild(c); });
    var buckets=document.querySelectorAll(".dnd-bucket");
    for(var i=0;i<buckets.length;i++){ (function(b){
      b.addEventListener('dragover',function(e){e.preventDefault();});
      b.addEventListener('drop',function(e){ e.preventDefault(); var ex=JSON.parse(e.dataTransfer.getData('text/plain')); var ok=b.dataset.k===ex.k;
        var tag=document.createElement('div'); tag.className="tag"; tag.innerHTML=ex.text+' '+(ok?'✅':'❓');
        b.querySelector('.bucket').appendChild(tag);
        done.push({text:ex.text,placed:b.dataset.k,correct:ok}); if(!state.exercises[id]) state.exercises[id]={}; state.exercises[id].done=done; Store.save(state);
      });
    })(buckets[i]); }
    document.getElementById("rfSave").onclick=function(){
      var orig=document.getElementById("rfOrig").value.trim(), neu=document.getElementById("rfNew").value.trim();
      if(!orig||!neu){ toast(te("origThought")+" + "+te("balanced")); return; }
      if(!state.exercises[id]) state.exercises[id]={}; state.exercises[id].reframe={orig:orig,neu:neu};
      state.timeline.push({t:now(),what:"Saved reframe"}); awardBadges(); Store.save(state); toast(EX[state.lang].saved);
    };
  }

  /* ===== Problem Solver ===== */
  if(kind==="problem-solver"){
    var data=state.exercises[id]?state.exercises[id]:{problem:"",options:[],chosen:[],plan:{when:"",where:"",how:""}};
    if(!data.options) data.options=[]; if(!data.chosen) data.chosen=[]; if(!data.plan) data.plan={when:"",where:"",how:""};
    root.innerHTML='<div class="exercise"><h2>'+page.title+'</h2>'
      +'<label class="field"><span>'+te("defineProblem")+'</span><input id="psProb" type="text" value="'+(data.problem||'')+'"></label>'
      +'<div class="row"><label class="field"><span>'+te("option")+'</span><input id="psOpt" type="text"></label><button class="primary" id="psAdd">'+te("addOption")+'</button></div>'
      +'<div id="psOptions" class="badgebar"></div>'
      +'<div class="row"><label class="field"><span>'+te("when")+'</span><input id="psWhen" type="text" value="'+(data.plan.when||'')+'"></label>'
      +'<label class="field"><span>'+te("where")+'</span><input id="psWhere" type="text" value="'+(data.plan.where||'')+'"></label>'
      +'<label class="field"><span>'+te("how")+'</span><input id="psHow" type="text" value="'+(data.plan.how||'')+'"></label></div>'
      +'<div class="cta-row"><button class="primary" id="psSave">'+te("savePlan")+'</button></div></div>';
    var chosen=(function(arr){var s=new Set(); for(var i=0;i<arr.length;i++) s.add(arr[i]); return s;})(data.chosen||[]);
    function renderOptions(){ var cont=document.getElementById("psOptions"); cont.innerHTML=data.options.length?"":"<span class=\"tiny\">"+te("selectHint")+"</span>";
      data.options.forEach(function(o,i){ var el=document.createElement('span'); el.className="chip"; el.textContent=o+(chosen.has(i)?" ✓":""); el.onclick=function(){ if(chosen.has(i)) chosen.delete(i); else chosen.add(i); renderOptions(); }; cont.appendChild(el); });
    }
    document.getElementById("psAdd").onclick=function(){ var v=document.getElementById("psOpt").value.trim(); if(!v) return; data.options.push(v); document.getElementById("psOpt").value=""; state.exercises[id]=data; Store.save(state); renderOptions(); };
    document.getElementById("psSave").onclick=function(){ data.problem=document.getElementById("psProb").value.trim();
      data.plan={when:document.getElementById("psWhen").value.trim(), where:document.getElementById("psWhere").value.trim(), how:document.getElementById("psHow").value.trim()};
      data.chosen=Array.from(chosen); state.exercises[id]=data; state.timeline.push({t:now(),what:"Saved problem plan"}); awardBadges(); Store.save(state); toast(EX[state.lang].saved); };
    renderOptions();
  }

  /* ===== Activity Planner ===== */
  if(kind==="activity-planner"){
    var acts=(state.exercises[id]&&state.exercises[id].acts)?state.exercises[id].acts:[];
    root.innerHTML='<div class="exercise"><h2>'+page.title+'</h2>'
      +'<p class="tiny">'+(state.lang==="da"?"Planlæg 2–3 små handlinger de næste 48 timer. Hold dem små.":"Plan 2–3 small actions for the next 48 hours. Keep them tiny.")+'</p>'
      +'<div class="row"><label class="field"><span>'+te("action")+'</span><input id="apTask" type="text"></label>'
      +'<label class="field"><span>'+te("energy")+'</span><input id="apCost" type="number" min="1" max="5" value="2"></label>'
      +'<label class="field"><span>'+te("whenTime")+'</span><input id="apWhen" type="text"></label>'
      +'<button class="primary" id="apAdd">'+t("add")+'</button></div>'
      +'<div class="list" id="apList"></div></div>';
    function paint(){ var list=document.getElementById("apList"); list.innerHTML=acts.length?"":"<div class=\"tiny\">"+te("noActions")+"</div>";
      acts.forEach(function(a,i){ var row=document.createElement('div'); row.className="item";
        row.innerHTML='<div><strong>'+a.task+'</strong> <span class="tiny">Cost '+a.cost+'/5 • '+a.when+'</span></div><div class="row"><label class="chip"><input type="checkbox" '+(a.done?'checked':'')+' data-i="'+i+'"> '+te("done")+'</label><button class="ghost" data-i="'+i+'">'+t("delete")+'</button></div>';
        row.querySelector('input').onchange=function(e){ acts[i].done=e.target.checked; state.exercises[id]={acts:acts}; Store.save(state); };
        row.querySelector('button').onclick=function(){ acts.splice(i,1); state.exercises[id]={acts:acts}; Store.save(state); paint(); };
        list.appendChild(row);
      }); }
    document.getElementById("apAdd").onclick=function(){ var task=document.getElementById("apTask").value.trim(), cost=+document.getElementById("apCost").value, when=document.getElementById("apWhen").value.trim();
      if(!task) return; acts.push({task:task,cost:clamp(cost,1,5),when:when,done:false}); state.exercises[id]={acts:acts}; Store.save(state); paint();
      document.getElementById("apTask").value=""; document.getElementById("apCost").value=2; document.getElementById("apWhen").value=""; };
    paint();
  }

  /* ===== Values Sort ===== */
  if(kind==="values-sort"){
    var pool=state.lang==="da"?["Sundhed","Familie","Frihed","Udvikling","Venlighed","Stabilitet","Eventyr","Læring","Tro/Spiritualitet","Fællesskab","Kreativitet","Balance"]
                               :["Health","Family","Freedom","Growth","Kindness","Stability","Adventure","Learning","Faith/Spirituality","Community","Creativity","Balance"];
    var chosen=(state.exercises[id]&&state.exercises[id].top)?state.exercises[id].top.slice():[];
    root.innerHTML='<div class="exercise"><h2>'+page.title+'</h2><p class="tiny">'+te("pickValues")+'</p>'
      +'<div class="badgebar" id="vsPool"></div><div class="badgebar" id="vsTop"></div>'
      +'<label class="field"><span>'+te("oneAction")+'</span><input id="vsAction" type="text"></label><div class="cta-row"><button class="primary" id="vsSave">'+t("save")+'</button></div></div>';
    function renderPool(){ var poolEl=document.getElementById("vsPool"); poolEl.innerHTML=pool.map(function(v){return '<span class="chip">'+v+'</span>';}).join('');
      var chips=poolEl.querySelectorAll('.chip'); for(var i=0;i<chips.length;i++){ (function(ch){ ch.onclick=function(){ if(chosen.indexOf(ch.textContent)===-1){ chosen.push(ch.textContent); renderTop(); } }; })(chips[i]); } }
    function renderTop(){ var topEl=document.getElementById("vsTop"); if(!chosen.length){ topEl.innerHTML="<span class='tiny'>"+(state.lang==="da"?"Ingen værdier valgt endnu.":"No values selected yet.")+"</span>"; return; }
      topEl.innerHTML=chosen.map(function(v,i){return '<span class="chip">'+v+' <button aria-label="remove" data-i="'+i+'">×</button></span>';}).join('');
      var btns=topEl.querySelectorAll('button'); for(var i=0;i<btns.length;i++){ (function(b){ b.onclick=function(){ var idx=+b.getAttribute('data-i'); chosen.splice(idx,1); renderTop(); }; })(btns[i]); } }
    document.getElementById("vsSave").onclick=function(){ var action=document.getElementById("vsAction").value.trim(); state.exercises[id]={top:chosen.slice(), action:action};
      state.timeline.push({t:now(),what:"Saved values"}); awardBadges(); Store.save(state); toast(EX[state.lang].saved); };
    renderPool(); renderTop();
  }

  /* ===== Breathing ===== */
  if(kind==="breathing"){
    root.innerHTML='<div class="exercise center"><h2>'+page.title+'</h2>'
      +'<div class="tiny">'+te("breathingNote")+'</div><div class="breath" aria-label="Breathing animation"></div>'
      +'<div class="cta-row center" style="justify-content:center"><button id="brStart" class="primary">'+te("startTimer")+'</button><div class="chip" id="brRemain">—</div></div></div>';
    document.getElementById("brStart").onclick=function(){
      var secs=60; var rem=document.getElementById("brRemain"); rem.textContent="60"+te("seconds");
      var id=setInterval(function(){ secs--; rem.textContent=secs+te("seconds");
        if(secs<=0){ clearInterval(id); rem.textContent=state.lang==="da"?"Færdig ✔️":"Done ✔️"; state.timeline.push({t:now(),what:"Breathing done"}); awardBadges(); Store.save(state); } },1000);
    };
  }

  /* ===== Coping Plan ===== */
  if(kind==="coping-plan"){
    var cp=state.exercises[id]?state.exercises[id]:{signals:[],supports:[],list:[]}; if(!cp.signals) cp.signals=[]; if(!cp.supports) cp.supports=[]; if(!cp.list) cp.list=[];
    root.innerHTML='<div class="exercise"><h2>'+page.title+'</h2>'
      +'<div class="row"><label class="field"><span>'+te("earlySign")+'</span><input id="cpSig" type="text"></label><button class="primary" id="cpAddSig">'+t("add")+'</button></div><div class="badgebar" id="cpSigList"></div>'
      +'<div class="row"><label class="field"><span>'+te("support")+'</span><input id="cpSup" type="text"></label><button class="primary" id="cpAddSup">'+t("add")+'</button></div><div class="badgebar" id="cpSupList"></div>'
      +'<div class="row"><label class="field"><span>'+te("step")+'</span><input id="cpStep" type="text"></label><button class="primary" id="cpAddStep">'+t("add")+'</button></div><div class="list" id="cpSteps"></div>'
      +'<div class="cta-row"><button class="primary" id="cpSave">'+t("save")+'</button></div></div>';
    function paint(){
      document.getElementById("cpSigList").innerHTML = cp.signals.length? cp.signals.map(function(s,i){return '<span class="chip">'+s+' <button data-t="sig" data-i="'+i+'">×</button></span>';}).join('') : "<span class='tiny'>"+te("noSigns")+"</span>";
      document.getElementById("cpSupList").innerHTML = cp.supports.length? cp.supports.map(function(s,i){return '<span class="chip">'+s+' <button data-t="sup" data-i="'+i+'">×</button></span>';}).join('') : "<span class='tiny'>"+te("noSupports")+"</span>";
      document.getElementById("cpSteps").innerHTML = cp.list.length? cp.list.map(function(s,i){return '<div class="item"><div>'+s+'</div><button class="ghost" data-t="step" data-i="'+i+'">'+t("delete")+'</button></div>';}).join('') : "<div class='tiny'>"+te("noSteps")+"</div>";
      var btns=document.querySelectorAll("#cpSigList button,#cpSupList button,#cpSteps button");
      for(var i=0;i<btns.length;i++){ (function(b){ b.onclick=function(){ var ttype=b.getAttribute('data-t'), ii=+b.getAttribute('data-i'); if(ttype==="sig") cp.signals.splice(ii,1); else if(ttype==="sup") cp.supports.splice(ii,1); else cp.list.splice(ii,1); Store.save(state); paint(); }; })(btns[i]); }
    }
    document.getElementById("cpAddSig").onclick=function(){ var v=document.getElementById("cpSig").value.trim(); if(!v) return; cp.signals.push(v); Store.save(state); document.getElementById("cpSig").value=""; paint(); };
    document.getElementById("cpAddSup").onclick=function(){ var v=document.getElementById("cpSup").value.trim(); if(!v) return; cp.supports.push(v); Store.save(state); document.getElementById("cpSup").value=""; paint(); };
    document.getElementById("cpAddStep").onclick=function(){ var v=document.getElementById("cpStep").value.trim(); if(!v) return; cp.list.push(v); Store.save(state); document.getElementById("cpStep").value=""; paint(); };
    document.getElementById("cpSave").onclick=function(){ state.exercises[id]=cp; state.timeline.push({t:now(),what:"Saved coping plan"}); awardBadges(); Store.save(state); toast(EX[state.lang].saved); };
    paint();
  }

  /* ===== Care Script ===== */
  if(kind==="care-script"){
    var data=state.exercises[id]?state.exercises[id]:{context:"",observation:"",preference:"",enlist:""};
    root.innerHTML='<div class="exercise"><h2>'+page.title+'</h2>'
      +'<div class="row"><label class="field"><span>'+te("context")+'</span><input id="csCtx" type="text" value="'+(data.context||'')+'"></label>'
      +'<label class="field"><span>'+te("observation")+'</span><input id="csObs" type="text" value="'+(data.observation||'')+'"></label></div>'
      +'<div class="row"><label class="field"><span>'+te("preference")+'</span><input id="csPref" type="text" value="'+(data.preference||'')+'"></label>'
      +'<label class="field"><span>'+te("enlist")+'</span><input id="csEn" type="text" value="'+(data.enlist||'')+'"></label></div>'
      +'<div class="notice"><strong>'+te("preview")+'</strong><div id="csPreview" class="tiny"></div></div>'
      +'<div class="cta-row"><button class="primary" id="csSave">'+t("save")+'</button></div></div>';
    function preview(){ var ctx=(document.getElementById("csCtx").value||'—'), obs=(document.getElementById("csObs").value||'—'), pref=(document.getElementById("csPref").value||'—'), en=(document.getElementById("csEn").value||'—');
      document.getElementById("csPreview").textContent=(state.lang==="da"?"Kontekst: ":"Context: ")+ctx+" | "+(state.lang==="da"?"Observation: ":"Observation: ")+obs+" | "+(state.lang==="da"?"Præference: ":"Preference: ")+pref+" | "+(state.lang==="da"?"Engagér: ":"Enlist: ")+en; }
    ["csCtx","csObs","csPref","csEn"].forEach(function(id){ var el=document.getElementById(id); if(el) el.addEventListener('input', preview); });
    document.getElementById("csSave").onclick=function(){ state.exercises[id]={context:document.getElementById("csCtx").value.trim(), observation:document.getElementById("csObs").value.trim(), preference:document.getElementById("csPref").value.trim(), enlist:document.getElementById("csEn").value.trim()}; state.timeline.push({t:now(),what:"Saved care script"}); awardBadges(); Store.save(state); toast(EX[state.lang].saved); preview(); };
    preview();
  }

  /* ===== Relapse Plan ===== */
  if(kind==="relapse-plan"){
    var data=state.exercises[id]?state.exercises[id]:{risks:[],ifThen:[]}; if(!data.risks) data.risks=[]; if(!data.ifThen) data.ifThen=[];
    root.innerHTML='<div class="exercise"><h2>'+page.title+'</h2>'
      +'<div class="row"><label class="field"><span>'+te("risk")+'</span><input id="rpRisk" type="text"></label><button class="primary" id="rpAddRisk">'+t("add")+'</button></div><div class="badgebar" id="rpRisks"></div>'
      +'<div class="row"><label class="field"><span>'+te("ifCue")+'</span><input id="rpIf" type="text"></label><label class="field"><span>'+te("thenAct")+'</span><input id="rpThen" type="text"></label><button class="primary" id="rpAddPair">'+te("addPair")+'</button></div><div class="list" id="rpPairs"></div></div>';
    function paint(){
      var risksHTML=data.risks.map(function(r,i){return '<span class="chip">'+r+' <button data-i="'+i+'">×</button></span>';}).join('');
      document.getElementById("rpRisks").innerHTML=risksHTML||"<span class='tiny'>"+te("noRisks")+"</span>";
      var pairHTML=data.ifThen.map(function(p,i){
        return (state.lang==="da"
          ? '<div class="item"><div><strong>Hvis</strong> '+p.if+' <strong>så</strong> '+p.then+'</div><button class="ghost" data-i="'+i+'">'+t("delete")+'</button></div>'
          : '<div class="item"><div><strong>If</strong> '+p.if+' <strong>then</strong> '+p.then+'</div><button class="ghost" data-i="'+i+'">'+t("delete")+'</button></div>');
      }).join('');
      document.getElementById("rpPairs").innerHTML=pairHTML||"<div class='tiny'>"+te("noPairs")+"</div>";
      var delRisk=document.querySelectorAll("#rpRisks button"); for(var i=0;i<delRisk.length;i++){ (function(b){ b.onclick=function(){ var idx=+b.getAttribute('data-i'); data.risks.splice(idx,1); Store.save(state); paint(); }; })(delRisk[i]); }
      var delPair=document.querySelectorAll("#rpPairs button"); for(var j=0;j<delPair.length;j++){ (function(b){ b.onclick=function(){ var idx=+b.getAttribute('data-i'); data.ifThen.splice(idx,1); Store.save(state); paint(); }; })(delPair[j]); }
    }
    document.getElementById("rpAddRisk").onclick=function(){ var v=document.getElementById("rpRisk").value.trim(); if(!v) return; data.risks.push(v); Store.save(state); document.getElementById("rpRisk").value=""; paint(); };
    document.getElementById("rpAddPair").onclick=function(){ var iff=document.getElementById("rpIf").value.trim(), then=document.getElementById("rpThen").value.trim(); if(!iff||!then) return; data.ifThen.push({if:iff,then:then}); Store.save(state); document.getElementById("rpIf").value=""; document.getElementById("rpThen").value=""; paint(); };
    paint();
  }
}


/* ========== Language Switcher & Init ========== */
function renderTexts(){
  document.getElementById("brandTitle").textContent=t("brandTitle");
  document.getElementById("brandSubtitle").textContent=t("brandSubtitle");
  document.getElementById("modulesTitle").textContent=t("modules");
  document.getElementById("streakText").textContent=t("streak")+" "+(state.streak.count||0);
  document.getElementById("footerText").textContent=t("footer").replace("YEAR", new Date().getFullYear());
  document.getElementById("langSelect").value=state.lang;
}
document.getElementById("langSelect").onchange=function(e){ state.lang=e.target.value; Store.save(state); renderTexts(); renderSidebar(); onRoute(); };
document.getElementById("homeBtn").onclick=function(){ location.hash=""; renderHome(); };

window.addEventListener("hashchange", onRoute);
document.addEventListener("DOMContentLoaded", function(){ renderTexts(); renderSidebar(); onRoute(); });
