import hexToRgba from "hex-to-rgba";

// a^2 + b^2 = c^2
export const getViewPortHypotenuseLength = (): number => {
    return Math.sqrt(
        Math.pow(window.outerWidth, 2) + Math.pow(window.outerWidth, 2)
    );
};

export const getLinearGradient = (colorA: string, colorB: string): string => {
    return `linear-gradient(${hexToRgba(colorA, 0.5)}, 70%, ${hexToRgba(
        colorB,
        0.5
    )})`;
};
