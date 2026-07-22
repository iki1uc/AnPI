export function ghostScan(respo) {

    const score = FAIL.SCORE;

    const fullCircle = respo.circle === 360;
    const fullValue  = respo.value === 100;

    if (fullCircle && fullValue && score === 100) {
        return { sig: "FIT", best: respo.name };
    }

    if (score >= 60 && score < 100) {
        return { sig: "MISS", best: respo.name };
    }

    return { sig: "FAIL", best: respo.name };
}
