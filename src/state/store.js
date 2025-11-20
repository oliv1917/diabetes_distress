const STORAGE_KEY = 'dd_icbt_state';

const defaultState = {
  version: 1,
  lang: 'da',
  theme: 'dark',
  completed: {},
  exercises: {},
  streak: { last: null, count: 0 },
  timeline: [],
  badges: [],
  onboarded: false
};

const canUseStorage = typeof window !== 'undefined' && !!window.localStorage;

export function loadState() {
  if (!canUseStorage) return { ...defaultState };
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return { ...defaultState };
    }
    const parsed = JSON.parse(raw);
    return sanitizeState(parsed);
  } catch (err) {
    return { ...defaultState };
  }
}

export function saveState(nextState) {
  if (!canUseStorage) return;
  const clean = sanitizeState(nextState);
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(clean));
}

export function clearState() {
  if (canUseStorage) {
    window.localStorage.removeItem(STORAGE_KEY);
  }
  return { ...defaultState };
}

function sanitizeState(data) {
  const safe = { ...defaultState, ...(data || {}) };
  safe.version = 1;
  safe.completed = typeof safe.completed === 'object' && safe.completed ? safe.completed : {};
  safe.exercises = typeof safe.exercises === 'object' && safe.exercises ? safe.exercises : {};
  safe.streak = safe.streak && typeof safe.streak.count === 'number' ? safe.streak : { last: null, count: 0 };
  safe.timeline = Array.isArray(safe.timeline) ? safe.timeline : [];
  safe.badges = Array.isArray(safe.badges) ? safe.badges : [];
  safe.lang = ['da', 'en'].includes(safe.lang) ? safe.lang : 'da';
  safe.theme = safe.theme === 'light' ? 'light' : 'dark';
  safe.onboarded = Boolean(safe.onboarded);
  return safe;
}

export function capArray(arr, max = 30) {
  if (Array.isArray(arr) && arr.length > max) {
    arr.splice(0, arr.length - max);
  }
}

export function exportState(state) {
  return JSON.stringify(sanitizeState(state), null, 2);
}

export { defaultState as initialStateTemplate };
