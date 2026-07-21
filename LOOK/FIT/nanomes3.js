// nanomes3.js
// Universaler Messschieber für alle Module

export const nanomes3 = {
    unit: "nanomes³",
    nano: 0.000001,   // kleinste Einheit
    max: 1.0,         // volle FIT / volle Stärke
    min: 0.0,         // keine Existenz
    desc: "universaler Messschieber für alle Module"
};

// Hilfsfunktion: Wert normalisieren (0.0–1.0)
export function norm(value) {
    if (value < nanomes3.min) return nanomes3.min;
    if (value > nanomes3.max) return nanomes3.max;
    return value;
}

