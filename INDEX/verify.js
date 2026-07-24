export async function collectVerify() {

  const stations = [
    "HEAD",
    "BODY",
    "RUN",
    "QI",
    "MIND",
    "GRUN",
    "AI",
    "ALL",
    "ANKER",
    "API",
    "DE",
    "EN",
    "ERROR",
    "GATE",
    "HTML",
    "KI",
    "LIVEBRIDGE",
    "MOVE",
    "ORT",
    "PUSH",
    "RDY",
    "ROOT",
    "SEND",
    "STYLE",
    "TOR",
    "TR",
    "UNI",
    "VECTOR",
    "WELT",
    "XI"
  ];

  const results = [];

  for(const s of stations){
    const url = `../${s}/verify.html`;
    await fetch(url).then(r => r.text());
    results.push(window.NC_ROOM_RESULT);
  }

  return results;
}
