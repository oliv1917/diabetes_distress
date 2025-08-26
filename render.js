export function renderTexts(state, t) {
  document.getElementById("brandTitle").textContent = t("brandTitle");
  document.getElementById("brandSubtitle").textContent = t("brandSubtitle");
  document.getElementById("modulesTitle").textContent = t("modules");
  document.getElementById("streakText").textContent = t("streak") + " " + (state.streak.count || 0);
  document.getElementById("footerText").textContent = t("footer").replace("YEAR", new Date().getFullYear());
  const homeBtn = document.getElementById("homeBtn");
  homeBtn.setAttribute("aria-label", t("home"));
  const sr = homeBtn.querySelector(".sr-only");
  if (sr) sr.textContent = t("home");
  document.getElementById("langSelect").value = state.lang;
}

export function renderSidebar(state, Lang, navigateTo) {
  const list = document.getElementById("moduleList");
  list.innerHTML = "";
  Lang[state.lang].modulesData.forEach((m, mi) => {
    const done = m.pages.filter(p => !!state.completed[p.id]).length;
    const pct = Math.round((done / m.pages.length) * 100);
    const div = document.createElement("div");
    div.className = "mod";
    div.innerHTML = '<div><div class="t">' + m.title + '</div><div class="tiny">' + m.goal + '</div><div class="progressbar"><i style="width:' + pct + '%"></i></div></div><div class="badge">' + pct + '%</div>';
    div.onclick = () => navigateTo(mi, 0);
    list.appendChild(div);
  });
}

export function renderHome(state, t, overallProgress) {
  const main = document.getElementById("main");
  const pctNum = Math.round(overallProgress(state) * 100);
  const pages = Object.keys(state.completed).length;

  const badges = state.badges && state.badges.length
    ? state.badges.map(b => '<span class="chip">🏅 ' + b + '</span>').join('')
    : '<span class="tiny">' + (state.lang === "da" ? "Ingen mærker endnu — de vises her, når du låser dem op." : "No badges yet — they’ll appear here as you unlock them.") + '</span>';

  const recent = state.timeline && state.timeline.length
    ? state.timeline.slice(-6).reverse().map(ev => {
        const dt = new Date(ev.t);
        const when = dt.toLocaleString();
        return '<div class="item" style="gap:12px;"><div><div class="tiny">' + when + '</div><div>' + ev.what + '</div></div></div>';
      }).join('')
    : '<div class="tiny">' + (state.lang === "da" ? "Din aktivitet vises her." : "Your activity will show here.") + '</div>';

  main.innerHTML = ''
    + '<div class="page">'
      + '<div class="hero"><h1>' + t("welcome") + '</h1><p class="muted">' + t("subtitle") + '</p></div>'
      + '<section class="content">'
        + '<div class="kpi">'
          + '<div class="tile"><div class="big">' + pctNum + '%</div><div class="tiny">' + t("overall") + '</div></div>'
          + '<div class="tile"><div class="big">' + pages + '</div><div class="tiny">' + t("pagesDone") + '</div></div>'
          + '<div class="tile"><div class="big">' + (state.badges.slice(-1)[0] || t("none")) + '</div><div class="tiny">' + t("latestBadge") + '</div></div>'
        + '</div>'
        + '<div class="row" style="align-items:center">'
          + '<div class="progress-ring" style="--p:' + pctNum + '%"><b>' + pctNum + '%</b></div>'
          + '<div class="notice" style="flex:1;min-width:240px;">' + t("notEmergency") + '</div>'
        + '</div>'
        + '<article class="flow"><h2>' + t("badgesTitle") + '</h2><div class="badgebar" id="badgeBar">' + badges + '</div></article>'
        + '<article class="flow"><h2>' + t("activityTitle") + '</h2><div class="timeline" id="timeline">' + recent + '</div></article>'
      + '</section>'
    + '</div>';
}
