export function RUN8_bind(whirl) {
  return {
    pulse: whirl.pulse(),
    axis: whirl.axis(),
    sequence: whirl.sequence()
  };
}
