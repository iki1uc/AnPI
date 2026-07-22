// miss.js
// Universaler Auffangpunkt für fehlende Werte

export const miss = {
    state: "miss",
    desc: "universaler Slot für fehlende Punkte",
    safe: true,        // System bleibt stabil
    fall: false        // Mikado ohne Fall
};

// Funktion: Miss eintragen
export function setMiss(target, key) {
    target[key] = miss;
    return target;
}

