import { mapValue, mapValues } from "./ValueMapping";

const getValueWithProbability = (i: number, numFlickers: number): number => {
    if (i == numFlickers - 1) return 1;
    return Math.random() < mapValue(0, numFlickers - 1, 0, 1, i) ? 1 : 0;
};

const generateFlickerOpacities = (flickers: number): number[] => {
    return Array.from(Array(flickers).keys()).map((i) => {
        if (i === flickers - 1) return 1;
        return Math.random() < 0.5 ? getValueWithProbability(i, flickers) : 0;
    });
};

const generateFlickerTimes = (flickers: number): number[] => {
    return mapValues(
        Array.from(Array(flickers).keys()).map((i) => Math.pow(i, 3))
    );
};

export const useFlickerAnimations = (flickers?: number) => {
    const numFlickers = flickers ? flickers : 100;

    return {
        opacities: generateFlickerOpacities(numFlickers),
        times: generateFlickerTimes(numFlickers),
    };
};
