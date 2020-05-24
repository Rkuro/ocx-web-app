import BezierEasing, { EasingFunction } from "bezier-easing";

type BezierCoords = [number, number, number, number];

export const DefaultBezierCoords: BezierCoords = [0.25, 0.1, 0.25, 1.0];

const getCoordsOrDefault = (coords?: BezierCoords): BezierCoords => {
    let x1, y1, x2, y2;
    if (coords) {
        [x1, y1, x2, y2] = coords;
    } else {
        [x1, y1, x2, y2] = DefaultBezierCoords;
    }
    return [x1, y1, x2, y2];
};

export const useBezierEasing = (coords?: BezierCoords): EasingFunction => {
    const [x1, y1, x2, y2] = getCoordsOrDefault(coords);
    return BezierEasing(x1, y1, x2, y2);
};

export const getBezierValue = (
    val: number,
    coords?: BezierCoords
): null | number => {
    if (val > 1 || val < 0) {
        console.error(
            "Bezier value called with invalid value: ",
            val,
            "should be between 0-1"
        );
        return null;
    }
    const [x1, y1, x2, y2] = getCoordsOrDefault(coords);
    return BezierEasing(x1, y1, x2, y2)(val);
};

export default useBezierEasing;
