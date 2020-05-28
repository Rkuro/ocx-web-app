import React, { useEffect } from "react";
import { makeStyles, createStyles } from "@material-ui/styles";
import { motion, useAnimation } from "framer-motion";
import hexToRgba from "hex-to-rgba";
import { Theme } from "@material-ui/core";
import clsx from "clsx";

const semiCircleWidth = 300;

/**
 * radial-gradient(ellipse 400px 250px at center 50px, transparent 8%, #26BBB9)
 */
const semiCircleStyle = {
    boxShadow: `inset rgba(38, 187, 185, 0.1) 0px 2px 1px 0px`,
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        semiCircleList: {
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
        outerSemiCircle: {
            borderTopLeftRadius: `${semiCircleWidth / 2}px`,
            borderTopRightRadius: `${semiCircleWidth / 2}px`,
            width: `${semiCircleWidth}px`,
            height: `${semiCircleWidth / 2}px`,
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            border: `1px solid ${hexToRgba(theme.palette.secondary.main, 0.1)}`,
        },
        innerSemiBorder: {
            borderTopLeftRadius: `${semiCircleWidth / 2}px`,
            borderTopRightRadius: `${semiCircleWidth / 2}px`,
            width: `${semiCircleWidth * 0.96}px`,
            height: `${(semiCircleWidth / 2) * 0.96}px`,
            position: "absolute",
            bottom: 0,
            border: `1px solid ${hexToRgba(theme.palette.secondary.main, 0.1)}`,
            borderBottom: 0,
        },
        semiCircle: {
            borderTopLeftRadius: `${semiCircleWidth / 2}px`,
            borderTopRightRadius: `${semiCircleWidth / 2}px`,
            background: `radial-gradient(ellipse 400px 250px at center, transparent 8%, ${hexToRgba(
                theme.palette.secondary.main,
                0.5
            )})`,
            width: `${semiCircleWidth * 0.9}px`,
            height: `${(semiCircleWidth / 2) * 0.9}px`,
            position: "absolute",
            bottom: 0,
        },
        bottomBar: {
            bottom: "-3px",
            height: "7px",
            width: "30%",
            backgroundColor: theme.palette.secondary.main,
            position: "absolute",
            borderRadius: "2px",
        },
        bottomBarLeft: {
            left: "-1px",
        },
        bottomBarRight: {
            right: "-1px",
        },
        centerRectangle: {
            width: "25px",
            height: "25px",
            border: `2px solid ${theme.palette.secondary.main}`,
        },
    })
);

interface WelcomeAnimationProps {
    active: boolean; // when to run the animation
}

interface SemiCircleTransformValues {
    x: number;
    xOffset: number;
    rotate: number;
    rotateOffset: number;
}

const initialSemiCircleTransformOffsetValues = {
    x: 150,
    // x: 0,
    xOffset: 20,
    rotate: 20,
    rotateOffset: 10,
};

const endSemiCircleTransformOffsetValues = {
    x: -75,
    xOffset: 0,
    rotate: -90,
    rotateOffset: 0,
};

const generateSemiCircleTransformOffset = (
    i: number,
    values: SemiCircleTransformValues
): string => {
    const { x, xOffset, rotate, rotateOffset } = values;
    switch (i) {
        case 0:
            return `translate3d(${-x - xOffset}px, 0px, 0px) rotate(${
                -rotate - rotateOffset
            }deg)`;
        case 1:
            return `translate3d(${-x}px, 0px, 0px) rotate(${-rotate}deg)`;
        case 2:
            return `translate3d(${x + xOffset}px,0px, 0px) rotate(${
                rotate + rotateOffset
            }deg)`;
        case 3:
            return `translate3d(${x}px, 0px, 0px) rotate(${rotate}deg)`;
        default:
            return "";
    }
};

const WelcomeAnimation: React.FunctionComponent<WelcomeAnimationProps> = (
    props
) => {
    const classes = useStyles();
    // const theme = useTheme();
    const numSemiCircles = 4;

    const controls = useAnimation();

    const semiCircleVariants = {
        begin: (i: number): object => {
            console.log("beginning: ", i);
            return {
                transform: generateSemiCircleTransformOffset(
                    i,
                    initialSemiCircleTransformOffsetValues
                ),
            };
        },
        center: (i: number): object => {
            console.log("end", i);
            return {
                transform: generateSemiCircleTransformOffset(
                    i,
                    endSemiCircleTransformOffsetValues
                ),
                transition: {
                    duration: 2.3,
                    ease:
                        i % 2 === 0
                            ? [0.42, 0.0, 0.58, 1.0]
                            : [0.0, 0.0, 0.58, 1.0],
                },
            };
        },
    };

    const squareVariants = {
        begin: {},
        center: {
            scale: [1, 0],
            transition: {
                delay: 2.3,
                duration: 1,
                ease: [0.42, 0.0, 0.58, 1.0],
            },
        },
    };

    useEffect(() => {
        controls.start("center");
    }, [controls]);

    return (
        <>
            <motion.ul className={classes.semiCircleList}>
                {Array.from(Array(numSemiCircles).keys()).map((i) => {
                    return (
                        <motion.div
                            key={i}
                            className={classes.outerSemiCircle}
                            variants={semiCircleVariants}
                            animate={controls}
                            initial="begin"
                            custom={i}
                        >
                            <div
                                className={classes.innerSemiBorder}
                                style={semiCircleStyle}
                            />
                            <div
                                className={classes.semiCircle}
                                style={semiCircleStyle}
                            />
                            <div
                                className={clsx(
                                    classes.bottomBar,
                                    classes.bottomBarRight
                                )}
                            />
                            <div
                                className={clsx(
                                    classes.bottomBar,
                                    classes.bottomBarLeft
                                )}
                            />
                        </motion.div>
                    );
                })}
                <motion.div
                    className={classes.centerRectangle}
                    variants={squareVariants}
                    animate={controls}
                />
            </motion.ul>
        </>
    );
};

export default WelcomeAnimation;
