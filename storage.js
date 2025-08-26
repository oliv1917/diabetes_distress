export const Store = {
  key: "dd_icbt_state",
  version: 1,
  getSecret() {
    let s = localStorage.getItem(this.key + "_secret");
    if (!s) {
      s = Math.random().toString(36).slice(2);
      localStorage.setItem(this.key + "_secret", s);
    }
    return s;
  },
  xor(str, key) {
    let r = "";
    for (let i = 0; i < str.length; i++) {
      r += String.fromCharCode(str.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }
    return r;
  },
  encrypt(text) {
    const xorStr = this.xor(text, this.getSecret());
    const bytes = new TextEncoder().encode(xorStr);
    let binary = "";
    for (const b of bytes) binary += String.fromCharCode(b);
    return btoa(binary);
  },
  decrypt(c) {
    try {
      const binary = atob(c);
      const bytes = Uint8Array.from(binary, ch => ch.charCodeAt(0));
      const decoded = new TextDecoder().decode(bytes);
      return this.xor(decoded, this.getSecret());
    } catch (e) {
      return null;
    }
  },
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
      if (!raw) return this.validate({ version: this.version });
      const decrypted = this.decrypt(raw);
      if (!decrypted) throw new Error("Malformed data");
      const data = JSON.parse(decrypted);
      return this.validate(this.migrate(data));
    } catch (e) {
      return this.validate({ version: this.version });
    }
  },
  save(d) {
    const clean = this.validate(d);
    clean.version = this.version;
    localStorage.setItem(this.key, this.encrypt(JSON.stringify(clean)));
  }
};
