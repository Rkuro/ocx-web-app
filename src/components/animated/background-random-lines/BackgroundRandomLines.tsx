import React from "react";
import { makeStyles, createStyles } from "@material-ui/core";
import { motion } from "framer-motion";
import { themeExtras } from "../../../theme";
import clsx from "clsx";
import { getViewPortHypotenuseLength } from "../../../utils/StyleFunctions";
import { generateRandomValues } from "../../../utils/AnimationGenerators";
import { Range } from "../../../utils/ValueMapping";

const useStyles = makeStyles(() =>
    createStyles({
        container: {
            position: "fixed",
            left: "20vw",
            top: "20vh",
            display: "flex",
            alignItems: "center",
            zIndex: -1,
        },
        line: {
            position: "absolute",
            width: "0.5px",
            background: themeExtras.backgroundLines,
        },
        lineOne: {
            height: `${getViewPortHypotenuseLength()}px`,
            transform: "rotate(135deg)",
        },
        lineTwo: {
            height: `${getViewPortHypotenuseLength() * 0.7}px`,
            transform: "rotate(130deg)",
        },
    })
);

const BackgroundRandomLines: React.FunctionComponent = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <LineOne />
            <LineTwo />
        </div>
    );
};

const generateLineRotations = (
    numRotations: number,
    rotationLimits: Range
): number[] => {
    const rotations = generateRandomValues(numRotations - 1, rotationLimits);
    rotations.push(rotations[0]); // ensure the first and last values are the same so the animation is smooth
    return rotations;
};

const LineOne: React.FunctionComponent = () => {
    const classes = useStyles();
    const animate = {
        rotate: generateLineRotations(6, [100, 150]),
    };
    const transition = {
        loop: Infinity,
        times: [0, 0.2, 0.4, 0.6, 0.8, 1],
        duration: 25,
    };
    return (
        <motion.div
            className={clsx(classes.line, classes.lineOne)}
            animate={animate}
            transition={transition}
        />
    );
};

const LineTwo: React.FunctionComponent = () => {
    const classes = useStyles();
    const animate = {
        rotate: generateLineRotations(6, [130, 140]),
    };
    const transition = {
        loop: Infinity,
        times: [0, 0.2, 0.4, 0.6, 0.8, 1],
        duration: 20,
    };
    return (
        <motion.div
            className={clsx(classes.line, classes.lineTwo)}
            animate={animate}
            transition={transition}
        />
    );
};

export default BackgroundRandomLines;
