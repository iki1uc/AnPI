// ------------------------------------------------------
// NC.verify.js · AnPI Engine · Raum‑Analyse
// ------------------------------------------------------

async function NC_VERIFY(files){

  const out = [];

  for(const f of files){

    // Datei laden
    const res = await fetch(f).then(r => r.ok ? r.text() : null).catch(()=>null);

    const raw = res || "";
    const ok = !!res;

    // ------------------------------------------------------
    // PX‑Decode (Symbole → Bedeutung)
    // ------------------------------------------------------
    const decoded = [...raw].map(s => Engine.PX[s] || s);

    // ------------------------------------------------------
    // MIND‑Sequenzen erkennen
    // ------------------------------------------------------
    const mind = raw.match(/[○↗□⊕△◇↘⊗⚑⚡∞]+/g);

    // ------------------------------------------------------
    // NC36‑Modi erkennen
    // ------------------------------------------------------
    const nc36 = Engine.NC36.flat().filter(s => raw.includes(s));

    // ------------------------------------------------------
    // MOVE‑Zustand bestimmen
    // ------------------------------------------------------
    const move =
      raw.includes("ERR") ? Engine.MOVE.error :
      raw.includes("FIX") ? Engine.MOVE.borg :
      raw.includes("FLOW") ? Engine.MOVE["8472"] :
      "OK";

    // ------------------------------------------------------
    // STABIL‑Zustand bestimmen
    // ------------------------------------------------------
    const stabil =
      raw.includes("FIX") ? Engine.STABIL.borg :
      raw.includes("FLOW") ? Engine.STABIL["8472"] :
      { line:"UNBEKANNT", form:"UNBEKANNT", axis:"UNBEKANNT" };

    // ------------------------------------------------------
    // GEO‑Vektor bestimmen (NC² / 6D / 12e)
    // ------------------------------------------------------
    const geo = {
      NC2: raw.length,
      D6: raw.split("\n").length,
      E12: raw.includes("ERR") ? "kritisch" : "neutral"
    };

    // ------------------------------------------------------
    // Ergebnis speichern
    // ------------------------------------------------------
    out.push({
      file: f,
      ok,
      raw,
      decoded,
      mind,
      nc36,
      move,
      stabil,
      geo
    });
  }

  return out;
}
