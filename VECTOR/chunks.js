export function vectorChunks(vector) {
  return vector.split(/[\(\)]/).filter(Boolean);
}
