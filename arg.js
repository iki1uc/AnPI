export function ARG(v) {
  return v !== null && v !== undefined;
}

export function xARG(v) {
  return typeof v === "string" && v.length > 0;
}

export function XARG(v, fouru) {
  return fouru.validate(v);
}
