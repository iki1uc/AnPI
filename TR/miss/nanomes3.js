export const nanomes3 = {
    nano: 0.000001,
    max: 1.0,
    min: 0.0
};

export function norm(v) {
    if (v < nanomes3.min) return nanomes3.min;
    if (v > nanomes3.max) return nanomes3.max;
    return v;
}

