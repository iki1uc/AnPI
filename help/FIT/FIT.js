// FIT = Existenz-Impuls
const FIT = {
    pos: "itel",
    calc: "ready",
    help: "FIT aktiviert andere Module"
};

// Andere Module FIT machen
export function makeFIT(target) {
    target.FIT = {
        pos: FIT.pos,
        calc: FIT.calc,
        help: FIT.help
    };
    return target;
}

