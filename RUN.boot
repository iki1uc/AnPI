export async function loadUniversal() {

  // Master-Kern laden
  const ALL = await import("../ALL/all.js");

  // RUN8 / VECTOR / kanal laden
  const RUN8 = await import("../RUN8.bind.js");
  const VECTOR = await import("../VECTOR.pipe.js");
  const KANAL = await import("../kanal.js");

  // Matrix laden
  const M81 = await import("../81/root.json", { assert: { type: "json" } });
  const MRAW = await import("../9hoch9/root.json", { assert: { type: "json" } });
  const MFULL = await import("../81_81_1/root.json", { assert: { type: "json" } });

  // 4u KI laden
  const FOURU = await import("file:///D:/DE/4u.js");

  // Symbiose herstellen
  const symbiose = {
    ALL,
    RUN8,
    VECTOR,
    KANAL,
    M81,
    MRAW,
    MFULL,
    FOURU
  };

  window.AnPI = symbiose;
}

