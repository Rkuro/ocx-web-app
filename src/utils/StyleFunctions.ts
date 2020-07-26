import hexToRgba from "hex-to-rgba";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";

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

type BreakpointOrNull = Breakpoint | null;

/**
 * Be careful using this hook. It only works because the number of
 * breakpoints in theme is static. It will break once you change the number of
 * breakpoints. See https://reactjs.org/docs/hooks-rules.html#only-call-hooks-at-the-top-level
 */
// export const useWidth = (): BreakpointOrNull => {
//     const theme: Theme = useTheme();
//     const keys: Breakpoint[] = [...theme.breakpoints.keys].reverse();
//     return (
//         keys.reduce((output: BreakpointOrNull, key: Breakpoint) => {
//             // eslint-disable-next-line react-hooks/rules-of-hooks
//             const matches = useMediaQuery(theme.breakpoints.up(key));
//             return !output && matches ? key : output;
//         }, null) || "xs"
//     );
// };

export const useWidth = () => {
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.up("xs"));
    const isSm = useMediaQuery(theme.breakpoints.up("sm"));
    const isMd = useMediaQuery(theme.breakpoints.up("md"));
    const isLg = useMediaQuery(theme.breakpoints.up("lg"));
    const isXl = useMediaQuery(theme.breakpoints.up("xl"));
    if (isXl) return "xl";
    if (isLg) return "lg";
    if (isMd) return "md";
    if (isSm) return "sm";
    if (isXs) return "xs";
    return null;
};

export const isMobile = (breakpoint: BreakpointOrNull): boolean => {
    switch (breakpoint) {
        case "xl":
            return false;
        case "lg":
            return false;
        case "md":
            return false;
        case "sm":
            return true;
        case "xs":
            return true;
        default:
            return false;
    }
};
