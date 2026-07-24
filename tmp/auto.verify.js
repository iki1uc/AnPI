export async function autoVerify() {
  const results = await import("../INDEX/verify.js").then(m => m.collectVerify());
  console.log("AUTO VERIFY:", results);
}
