import MapRange from "map-range";
import { map } from "lodash";

function linear(x: number): number {
    return x;
}

export type Range = [number, number];

/**
 *
 * @param x1 start point for existing range
 * @param y1 end point for existing range
 * @param x2 start point for target range
 * @param y2 end point for target range
 */
export const mapValue = (x1, y1, x2, y2, value): number => {
    return MapRange(linear, x1, y1, x2, y2)(value);
};

export const mapValues = (values: number[], range?: Range): number[] => {
    const maxValue = Math.max.apply(null, values);
    const minValue = Math.min.apply(null, values);

    let targetStart, targetEnd;

    if (range) {
        [targetStart, targetEnd] = range;
    } else {
        [targetStart, targetEnd] = [0, 1];
    }

    return map(values, (value) => {
        return mapValue(minValue, maxValue, targetStart, targetEnd, value);
    });
};

export const useMapper = (values: number[], range?: Range): Function => {
    const maxValue = Math.max.apply(null, values);
    const minValue = Math.min.apply(null, values);
    let targetStart, targetEnd;
    if (range) {
        [targetStart, targetEnd] = range;
    } else {
        [targetStart, targetEnd] = [0, 1];
    }
    return MapRange(linear, minValue, maxValue, targetStart, targetEnd);
};

export default map;
