export const BADGES = [
  { th: 0.01, n: 'Getting Started' },
  { th: 0.25, n: 'Quarter Way' },
  { th: 0.5, n: 'Halfway Hero' },
  { th: 0.75, n: 'Almost There' },
  { th: 0.99, n: 'Completed 🎉' }
];

export const LANG = {
  en: {
    brandTitle: 'Diabetes Distress iCBT',
    brandSubtitle: 'Self-guided modules • Learn • Practice • Track',
    modules: 'Modules',
    home: 'Home',
    save: 'Save',
    delete: 'Delete',
    add: 'Add',
    next: 'Next ▶',
    prev: '◀ Prev',
    finish: 'Finish Module ▶',
    markComplete: 'Mark complete',
    welcome: 'Welcome 👋',
    subtitle: 'A private, self-paced space to understand and ease diabetes distress using CBT tools.',
    notEmergency: 'Not an emergency tool. If you feel unsafe or in crisis, contact emergency services.',
    overall: 'Overall completion',
    pagesDone: 'Pages completed',
    latestBadge: 'Latest badge',
    footer: '© YEAR Diabetes Distress iCBT • Private by design (data stored only in your browser).',
    data: 'Data',
    dataTitle: 'Data & Privacy',
    dataInfo: 'All progress is stored only in this browser. You can download it or clear it.',
    downloadData: 'Download data',
    clearData: 'Clear all data',
    confirmClear: 'This will erase all data. Continue?',
    confirmDelete: 'Delete this item?',
    progressTitle: 'Your Progress',
    badgesTitle: 'Badges',
    activityTitle: 'Recent activity',
    stressToday: 'How stressed are you today?',
    none: '—',
    noStreakData: 'No streak data',
    streakHeading: 'Daily streak (last 30 days)',
    streakLegendIntensity: 'Levels show actions: 0=none, 1=1, 2=2, 3=3, 4+=4+',
    streakLegendDay: 'Each column is a day',
    journal: 'Journal',
    theme: 'Theme',
    journalEmpty: 'No notes yet.',
    onboardSlides: [
      'Work module by module',
      'Streaks and badges',
      'Data stays private.'
    ],
    gotIt: 'Got it',
    modulesData: [
      {
        id: 'm1',
        title: '1) Orientation',
        icon: '📘',
        goal: 'Get comfortable with how the program works.',
        pages: [
          {
            id: 'm1p1',
            type: 'read',
            title: 'What is Diabetes Distress?',
            body: '<p>Diabetes distress is the emotional burden of living with diabetes—frustration, guilt, fear, or burnout. It’s common and <em>treatable</em>.</p>'
          },
          { id: 'm1p2', type: 'exercise', exercise: 'distress-rating', title: 'Baseline Distress' },
          {
            id: 'm1p3',
            type: 'read',
            title: 'How to Use This App',
            body: '<ol><li>Work module by module (about 10–20 mins each).</li><li>Do the exercises — they’re where change happens.</li><li>Revisit tools anytime. Small steps compound.</li></ol>'
          }
        ]
      },
      {
        id: 'm2',
        title: '2) Understanding Triggers',
        icon: '🎯',
        goal: 'Spot patterns: people, places, numbers that spark distress.',
        pages: [
          {
            id: 'm2p1',
            type: 'read',
            title: 'Common Triggers',
            body: '<p>Examples include: glucose readings, mealtime timing, judgment from others, clinic appointments, or fear of complications.</p>'
          },
          { id: 'm2p2', type: 'exercise', exercise: 'trigger-log', title: 'Trigger Log' },
          {
            id: 'm2p3',
            type: 'read',
            title: 'Self-Compassion',
            body: '<p>A kind voice helps motivation more than self-criticism. Try speaking to yourself as you would to a friend.</p>'
          }
        ]
      },
      {
        id: 'm3',
        title: '3) Thoughts & Feelings',
        icon: '💭',
        goal: 'Map thoughts → feelings → actions. Learn reframing.',
        pages: [
          {
            id: 'm3p1',
            type: 'read',
            title: 'CBT Map',
            body: '<p>Event → Thought → Feeling → Action. We can’t always change events, but we can test and adjust thoughts.</p>'
          },
          { id: 'm3p2', type: 'exercise', exercise: 'thought-record', title: 'Thought Record' },
          { id: 'm3p3', type: 'exercise', exercise: 'reframe-dnd', title: 'Cognitive Reframe (Drag & Drop)' }
        ]
      },
      {
        id: 'm4',
        title: '4) Problem Solving',
        icon: '🛠️',
        goal: 'Move from stuck to steps.',
        pages: [
          {
            id: 'm4p1',
            type: 'read',
            title: '5-Step Problem Solver',
            body: '<ol><li>Define the problem.</li><li>Brainstorm options.</li><li>Pick 1–2 realistic steps.</li><li>Plan details (when/where/how).</li><li>Review & adjust.</li></ol>'
          },
          { id: 'm4p2', type: 'exercise', exercise: 'problem-solver', title: 'Your Plan' },
          { id: 'm4p3', type: 'exercise', exercise: 'activity-planner', title: 'Small Action Planner' }
        ]
      },
      {
        id: 'm5',
        title: '5) Values & Motivation',
        icon: '🌟',
        goal: 'Anchor actions in what matters to you.',
        pages: [
          {
            id: 'm5p1',
            type: 'read',
            title: 'Values vs. Goals',
            body: '<p>Values guide direction (ongoing), goals are steps (done/undone). When actions align with values, motivation sustains.</p>'
          },
          { id: 'm5p2', type: 'exercise', exercise: 'values-sort', title: 'Values Sort' }
        ]
      },
      {
        id: 'm6',
        title: '6) Coping Skills',
        icon: '🧘',
        goal: 'Regulate physiology and plan supports.',
        pages: [
          { id: 'm6p1', type: 'exercise', exercise: 'breathing', title: 'Guided Breathing' },
          { id: 'm6p2', type: 'exercise', exercise: 'coping-plan', title: 'Coping Plan' }
        ]
      },
      {
        id: 'm7',
        title: '7) Communicating with Care',
        icon: '💬',
        goal: 'Ask for what you need with clarity & kindness.',
        pages: [
          {
            id: 'm7p1',
            type: 'read',
            title: 'Assertive Script',
            body: '<p>Use <strong>COPE</strong>: <em>Context</em>, <em>Observation</em>, <em>Preference</em>, <em>Enlist</em>.</p>'
          },
          { id: 'm7p2', type: 'exercise', exercise: 'care-script', title: 'Build Your Script' }
        ]
      },
      {
        id: 'm8',
        title: '8) Maintenance',
        icon: '🔄',
        goal: 'Keep gains, handle setbacks.',
        pages: [
          { id: 'm8p1', type: 'exercise', exercise: 'relapse-plan', title: 'Relapse Prevention' },
          {
            id: 'm8p2',
            type: 'read',
            title: 'Next Steps',
            body: '<p>Revisit modules; track distress weekly; celebrate wins. Consider discussing insights with your care team.</p>'
          }
        ]
      }
    ]
  },
  da: {
    brandTitle: 'Diabetes-stress iCBT',
    brandSubtitle: 'Selvstyrede moduler • Lær • Øv • Følg fremskridt',
    modules: 'Moduler',
    home: 'Forside',
    save: 'Gem',
    delete: 'Slet',
    add: 'Tilføj',
    next: 'Næste ▶',
    prev: '◀ Forrige',
    finish: 'Afslut modul ▶',
    markComplete: 'Markér som færdig',
    welcome: 'Velkommen 👋',
    subtitle: 'Et privat, selvstyret rum til at forstå og mindske diabetes-stress ved hjælp af KAT-værktøjer.',
    notEmergency: 'Dette er ikke et nødværktøj. Hvis du føler dig utryg, kontakt akut hjælp.',
    overall: 'Samlet fremskridt',
    pagesDone: 'Sider færdiggjort',
    latestBadge: 'Seneste mærke',
    footer: '© YEAR Diabetes-stress iCBT • Gemmes kun i din browser.',
    data: 'Data',
    dataTitle: 'Data & privatliv',
    dataInfo: 'Alle fremskridt gemmes lokalt i denne browser. Du kan downloade eller slette dem.',
    downloadData: 'Download data',
    clearData: 'Slet alle data',
    confirmClear: 'Er du sikker på, at du vil slette alle data? Dette kan ikke fortrydes.',
    confirmDelete: 'Slet dette element?',
    progressTitle: 'Dit fremskridt',
    badgesTitle: 'Mærker',
    activityTitle: 'Seneste aktivitet',
    stressToday: 'Hvor stresset føler du dig i dag?',
    none: '—',
    noStreakData: 'Ingen stime-data',
    streakHeading: 'Daglig stime (seneste 30 dage)',
    streakLegendIntensity: 'Niveauer: 0=ingen, 1=1, 2=2, 3=3, 4+=4+ aktiviteter',
    streakLegendDay: 'Hver kolonne er en dag',
    journal: 'Journal',
    theme: 'Tema',
    journalEmpty: 'Ingen noter endnu.',
    onboardSlides: ['Arbejd modul for modul', 'Serier og badges', 'Data forbliver privat.'],
    gotIt: 'Forstået',
    modulesData: [
      {
        id: 'm1',
        title: '1) Introduktion',
        icon: '📘',
        goal: 'Bliv fortrolig med, hvordan programmet fungerer.',
        pages: [
          {
            id: 'm1p1',
            type: 'read',
            title: 'Hvad er diabetes-stress?',
            body: '<p>Diabetes-stress er den følelsesmæssige byrde ved at leve med diabetes — frustration, skyld, frygt eller udbrændthed. Det er almindeligt og <em>kan behandles</em>.</p>'
          },
          { id: 'm1p2', type: 'exercise', exercise: 'distress-rating', title: 'Grundlinje for stress' },
          {
            id: 'm1p3',
            type: 'read',
            title: 'Sådan bruges appen',
            body: '<ol><li>Arbejd modul for modul (ca. 10–20 min. hver).</li><li>Lav øvelserne — det er dér forandring sker.</li><li>Genbesøg værktøjerne når som helst. Små skridt giver store resultater.</li></ol>'
          }
        ]
      },
      {
        id: 'm2',
        title: '2) Forstå triggere',
        icon: '🎯',
        goal: 'Se mønstre: personer, steder, tal der udløser stress.',
        pages: [
          {
            id: 'm2p1',
            type: 'read',
            title: 'Almindelige triggere',
            body: '<p>Eksempler: blodsukkermålinger, måltider, andres vurderinger, klinikbesøg eller frygt for komplikationer.</p>'
          },
          { id: 'm2p2', type: 'exercise', exercise: 'trigger-log', title: 'Trigger-logbog' },
          {
            id: 'm2p3',
            type: 'read',
            title: 'Selvmedfølelse',
            body: '<p>En venlig stemme støtter motivation bedre end selvkritik. Prøv at tale til dig selv, som du ville til en ven.</p>'
          }
        ]
      },
      {
        id: 'm3',
        title: '3) Tanker & Følelser',
        icon: '💭',
        goal: 'Kortlæg tanker → følelser → handlinger. Lær at omformulere.',
        pages: [
          {
            id: 'm3p1',
            type: 'read',
            title: 'KAT-kort',
            body: '<p>Hændelse → Tanke → Følelse → Handling. Vi kan ikke altid ændre hændelser, men vi kan teste og justere tanker.</p>'
          },
          { id: 'm3p2', type: 'exercise', exercise: 'thought-record', title: 'Tankeskema' },
          { id: 'm3p3', type: 'exercise', exercise: 'reframe-dnd', title: 'Kognitiv omformulering (træk & slip)' }
        ]
      },
      {
        id: 'm4',
        title: '4) Problemløsning',
        icon: '🛠️',
        goal: 'Fra fastlåst til handleplan.',
        pages: [
          {
            id: 'm4p1',
            type: 'read',
            title: '5-trins problemløser',
            body: '<ol><li>Definér problemet.</li><li>Brainstorm muligheder.</li><li>Vælg 1–2 realistiske skridt.</li><li>Planlæg detaljer (hvornår/hvor/hvordan).</li><li>Evaluer & justér.</li></ol>'
          },
          { id: 'm4p2', type: 'exercise', exercise: 'problem-solver', title: 'Din plan' },
          { id: 'm4p3', type: 'exercise', exercise: 'activity-planner', title: 'Lille handlingsplan' }
        ]
      },
      {
        id: 'm5',
        title: '5) Værdier & Motivation',
        icon: '🌟',
        goal: 'Forankr handlinger i det, der betyder mest for dig.',
        pages: [
          {
            id: 'm5p1',
            type: 'read',
            title: 'Værdier vs. mål',
            body: '<p>Værdier giver retning (løbende), mål er konkrete skridt (gennemført/ikke gennemført). Når handlinger stemmer overens med værdier, holder motivationen længere.</p>'
          },
          { id: 'm5p2', type: 'exercise', exercise: 'values-sort', title: 'Værdiafklaring' }
        ]
      },
      {
        id: 'm6',
        title: '6) Mestringsstrategier',
        icon: '🧘',
        goal: 'Regulér kroppen og planlæg støtte.',
        pages: [
          { id: 'm6p1', type: 'exercise', exercise: 'breathing', title: 'Vejrtrækningsøvelse' },
          { id: 'm6p2', type: 'exercise', exercise: 'coping-plan', title: 'Mestringsplan' }
        ]
      },
      {
        id: 'm7',
        title: '7) Kommunikation med omsorg',
        icon: '💬',
        goal: 'Bed om det du har brug for, klart og venligt.',
        pages: [
          {
            id: 'm7p1',
            type: 'read',
            title: 'Assertiv kommunikation',
            body: '<p>Brug <strong>COPE</strong>: <em>Kontekst</em>, <em>Observation</em>, <em>Præference</em>, <em>Engagér</em>.</p>'
          },
          { id: 'm7p2', type: 'exercise', exercise: 'care-script', title: 'Byg dit manuskript' }
        ]
      },
      {
        id: 'm8',
        title: '8) Vedligeholdelse',
        icon: '🔄',
        goal: 'Bevar fremskridt og håndtér tilbagefald.',
        pages: [
          { id: 'm8p1', type: 'exercise', exercise: 'relapse-plan', title: 'Tilbagefaldsplan' },
          {
            id: 'm8p2',
            type: 'read',
            title: 'Næste skridt',
            body: '<p>Genbesøg modulerne; følg din stress ugentligt; fejre sejre. Overvej at drøfte dine indsigter med dit behandlingsteam.</p>'
          }
        ]
      }
    ]
  }
};

export const EX = {
  en: {
    add: 'Add',
    save: 'Save',
    delete: 'Delete',
    done: 'Done',
    edit: 'Edit',
    distressQ: 'Rate your current diabetes distress (0 = none, 10 = max)',
    bodyQ: 'Where do you feel it in your body?',
    noteQ: 'Short note (optional)',
    viewTrend: 'View personal trend',
    chartHint: 'Your saved ratings will show here as a line chart.',
    trigger: 'Trigger',
    typicalThought: 'Typical thought',
    feelingWord: 'Feeling (word + 0–10)',
    noTriggers: 'No triggers logged yet.',
    situation: 'Situation',
    autoThought: 'Automatic thought',
    feelingNum: 'Feeling 0–10',
    feelingAfter: 'Feeling after 0–10',
    evidence: 'Evidence for/against',
    altThought: 'Balanced alternative thought',
    addRow: 'Add row',
    noEntries: 'No entries yet.',
    thoughts: 'Thoughts',
    buckets: 'Buckets',
    dropHere: 'Drop here',
    reframePick: 'Pick one thought and write a balanced reframe',
    origThought: 'Original thought',
    balanced: 'Balanced reframe',
    allOrNothing: 'All-or-nothing',
    mindReading: 'Mind reading',
    catastrophizing: 'Catastrophizing',
    shoulds: '‘Should’ statements',
    defineProblem: 'Define the problem',
    option: 'Option',
    addOption: 'Add Option',
    when: 'when',
    where: 'where',
    how: 'how',
    savePlan: 'Save Plan',
    selectHint: 'Add a few options, then click to select your step.',
    action: 'Action',
    energy: 'Energy cost (1–5)',
    whenTime: 'When',
    noActions: 'No actions yet.',
    pickValues: 'Pick your top 3–5 values. Then write one action for this week.',
    oneAction: 'One small value-aligned action',
    breathingNote: '4-4-6 breathing. Inhale 4 • Hold 4 • Exhale 6',
    startTimer: 'Start timer',
    seconds: 's',
    earlySign: 'Early warning sign',
    support: 'Support person / service',
    step: 'Coping step',
    noSigns: 'No signs yet.',
    noSupports: 'No supports yet.',
    noSteps: 'No steps yet.',
    context: 'Context',
    observation: 'Observation',
    preference: 'Preference (ask)',
    enlist: 'Enlist',
    preview: 'Script preview',
    risk: 'Risk situation',
    addPair: 'Add Pair',
    ifCue: 'If (cue)',
    thenAct: 'Then (action)',
    noRisks: 'No risks yet.',
    noPairs: 'No pairs yet.',
    drBodyExample: 'tight chest',
    drNoteExample: 'after tough call',
    tgNameExample: 'before meals',
    tgThoughtExample: "I'm failing at this",
    tgFeelExample: 'anxious',
    trSitExample: 'missed medication',
    trThoughtExample: "I can't manage",
    trEvidenceExample: 'I usually remember',
    trAltExample: 'Everyone slips up',
    rfOrigExample: "I'm out of control",
    rfNewExample: "One high number isn't failure",
    psProbExample: 'late insulin doses',
    psOptExample: 'set phone alarm',
    psWhenExample: 'after dinner',
    psWhereExample: 'kitchen table',
    psHowExample: 'prepare kit beforehand',
    apTaskExample: 'walk 10 minutes',
    apWhenExample: '7 pm',
    vsActionExample: 'call a friend',
    cpSigExample: 'skipping checks',
    cpSupExample: 'partner',
    cpStepExample: 'slow breathing',
    csCtxExample: 'at appointments',
    csObsExample: 'you arrive late',
    csPrefExample: 'I prefer 5 min notice',
    csEnExample: 'can we plan ahead?',
    rpRiskExample: 'travel days',
    rpIfExample: 'if overwhelmed',
    rpThenExample: 'take a break',
    saved: 'Saved ✔️',
    completed: 'Marked as complete ✔️'
  },
  da: {
    add: 'Tilføj',
    save: 'Gem',
    delete: 'Slet',
    done: 'Færdig',
    edit: 'Redigér',
    distressQ: 'Vurdér din nuværende diabetes-stress (0 = ingen, 10 = maks.)',
    bodyQ: 'Hvor mærker du det i kroppen?',
    noteQ: 'Kort note (valgfrit)',
    viewTrend: 'Se personlig udvikling',
    chartHint: 'Dine gemte vurderinger vises her som en linjegraf.',
    trigger: 'Trigger',
    typicalThought: 'Typisk tanke',
    feelingWord: 'Følelse (ord + 0–10)',
    noTriggers: 'Ingen triggere endnu.',
    situation: 'Situation',
    autoThought: 'Automatisk tanke',
    feelingNum: 'Følelse 0–10',
    feelingAfter: 'Følelse efter 0–10',
    evidence: 'Beviser for/imod',
    altThought: 'Balanceret alternativ tanke',
    addRow: 'Tilføj række',
    noEntries: 'Ingen indtastninger endnu.',
    thoughts: 'Tanker',
    buckets: 'Kategorier',
    dropHere: 'Slip her',
    reframePick: 'Vælg én tanke og skriv en balanceret omformulering',
    origThought: 'Oprindelig tanke',
    balanced: 'Balanceret omformulering',
    allOrNothing: 'Sort-hvid tænkning',
    mindReading: 'Tankelæsning',
    catastrophizing: 'Katastrofetænkning',
    shoulds: '‘Bør’-udsagn',
    defineProblem: 'Definér problemet',
    option: 'Mulighed',
    addOption: 'Tilføj mulighed',
    when: 'hvornår',
    where: 'hvor',
    how: 'hvordan',
    savePlan: 'Gem plan',
    selectHint: 'Tilføj et par muligheder, og klik for at vælge dit skridt.',
    action: 'Handling',
    energy: 'Energikrav (1–5)',
    whenTime: 'Hvornår',
    noActions: 'Ingen handlinger endnu.',
    pickValues: 'Vælg dine 3–5 vigtigste værdier. Skriv derefter én handling for ugen.',
    oneAction: 'Én lille værdistyret handling',
    breathingNote: '4-4-6 vejrtrækning. Ind 4 • Hold 4 • Ud 6',
    startTimer: 'Start timer',
    seconds: 's',
    earlySign: 'Tidligt faresignal',
    support: 'Støtteperson / tilbud',
    step: 'Mestringsskridt',
    noSigns: 'Ingen tegn endnu.',
    noSupports: 'Ingen støtter endnu.',
    noSteps: 'Ingen skridt endnu.',
    context: 'Kontekst',
    observation: 'Observation',
    preference: 'Præference (ønske)',
    enlist: 'Engagér',
    preview: 'Forhåndsvisning af manuskript',
    risk: 'Risikosituation',
    addPair: 'Tilføj par',
    ifCue: 'Hvis (cue)',
    thenAct: 'Så (handling)',
    noRisks: 'Ingen risici endnu.',
    noPairs: 'Ingen par endnu.',
    drBodyExample: 'stram brystkasse',
    drNoteExample: 'efter svær samtale',
    tgNameExample: 'før måltider',
    tgThoughtExample: 'jeg klarer det ikke',
    tgFeelExample: 'bekymret',
    trSitExample: 'glemte medicin',
    trThoughtExample: 'jeg kan ikke håndtere det',
    trEvidenceExample: 'jeg husker det normalt',
    trAltExample: 'alle laver fejl',
    rfOrigExample: 'jeg er uden kontrol',
    rfNewExample: 'en høj måling er ikke fiasko',
    psProbExample: 'forsinkede insulin-doser',
    psOptExample: 'sæt telefonalarm',
    psWhenExample: 'efter aftensmad',
    psWhereExample: 'ved køkkenbordet',
    psHowExample: 'forbered udstyr på forhånd',
    apTaskExample: 'gå 10 minutter',
    apWhenExample: 'kl. 19',
    vsActionExample: 'ring til en ven',
    cpSigExample: 'springer målinger over',
    cpSupExample: 'partner',
    cpStepExample: 'rolig vejrtrækning',
    csCtxExample: 'ved aftaler',
    csObsExample: 'du kommer for sent',
    csPrefExample: 'jeg vil have 5 min varsel',
    csEnExample: 'kan vi planlægge?',
    rpRiskExample: 'rejsedage',
    rpIfExample: 'hvis overvældet',
    rpThenExample: 'tag en pause',
    saved: 'Gemt ✔️',
    completed: 'Markéret som færdig ✔️'
  }
};
