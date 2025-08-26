// Data is stored in localStorage in plain text. The application runs
// entirely in the user's browser and does not transmit this data to any
// server. If stronger confidentiality is needed, consider implementing
// Web Crypto API based encryption.
export const Store = {
  key: "dd_icbt_state",
  version: 1,
  validate(d) {
    const o = {};
    o.version = typeof d.version === "number" ? d.version : this.version;
    o.lang = typeof d.lang === "string" ? d.lang : "da";
    o.completed = d.completed && typeof d.completed === "object" ? d.completed : {};
    o.exercises = d.exercises && typeof d.exercises === "object" ? d.exercises : {};
    o.streak = d.streak && typeof d.streak.count === "number" ? { last: d.streak.last || null, count: d.streak.count } : { last: null, count: 0 };
    o.timeline = Array.isArray(d.timeline) ? d.timeline : [];
    o.badges = Array.isArray(d.badges) ? d.badges : [];
    return o;
  },
  migrate(d) {
    if (!d.version) d.version = 1;
    if (d.version < this.version) {
      d.version = this.version;
    }
    return d;
  },
  load() {
    try {
      const raw = localStorage.getItem(this.key);
      if (!raw) {
        localStorage.removeItem(this.key + "_secret");
        return this.validate({ version: this.version });
      }
      const data = JSON.parse(raw);
      return this.validate(this.migrate(data));
    } catch (e) {
      return this.validate({ version: this.version });
    }
  },
  save(d) {
    const clean = this.validate(d);
    clean.version = this.version;
    localStorage.setItem(this.key, JSON.stringify(clean));
  }
};
