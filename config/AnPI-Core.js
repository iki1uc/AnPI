export async function loadAnPI() {

  const stations = [
    "AI","ANKER","API","BODY","DE","EN","ERROR","GATE","HEAD",
    "HH","HTML","KI","LOOK","ORT","ROOT","RUN","STYLE","TOR",
    "TR","UNI","WELT"
  ];

  const result = {};

  // Station roots laden
  for (const station of stations) {
    try {
      const root = await fetch(`./${station}/root.json`).then(r => r.json());
      result[station] = root;
    } catch (e) {
      result[station] = { error: "missing root.json" };
    }
  }

  // Odamirt CONFIG laden
  try {
    const od = await fetch("./config/odamirt.json").then(r => r.json());
    result["ODAMIRT"] = od;
  } catch (e) {
    result["ODAMIRT"] = { error: "missing odamirt.json" };
  }

  return result;
}

window.AnPI = { load: loadAnPI };
