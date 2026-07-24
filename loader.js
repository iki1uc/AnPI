export async function loadUniversal() {

  // Master-Kern
  const ALL = await import("../ALL/all.js");

  // RUN8 / VECTOR / kanal
  const RUN8 = await import("../RUN8.bind.js");
  const VECTOR = await import("../VECTOR.pipe.js");
  const KANAL = await import("../kanal.js");

  // Validierung
  const ARG = await import("../ALL/arg.js");

  // Matrix
  const M81 = await import("../81/root.json", { assert: { type: "json" } });
  const MRAW = await import("../9hoch9/root.json", { assert: { type: "json" } });
  const MFULL = await import("../81_81_1/root.json", { assert: { type: "json" } });

  // VECTOR-Häppchen
  const VCHUNK = await import("../VECTOR/chunks.js");

  // 4u KI (externe Datei)
  const FOURU = await import("file:///D:/DE/4u.js");

  // Symbiose
  window.AnPI = {
    ALL,
    RUN8,
    VECTOR,
    KANAL,
    ARG,
    M81,
    MRAW,
    MFULL,
    VCHUNK,
    FOURU
  };
}
