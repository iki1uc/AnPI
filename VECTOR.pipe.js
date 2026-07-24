export function VECTOR_pipe(run8) {
  return {
    vector: `VECTOR(${run8.axis})`,
    sat: `WURMLOCH:VECTOR(${run8.axis})`,
    nc: `NC.link -> WURMLOCH:VECTOR(${run8.axis})`,
    worm: `OPEN(NC.link -> WURMLOCH:VECTOR(${run8.axis}))`
  };
}
