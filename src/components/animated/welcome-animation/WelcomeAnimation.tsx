import React, { useEffect } from "react";
import { makeStyles, createStyles } from "@material-ui/styles";
import { motion, useAnimation, AnimationControls } from "framer-motion";
import hexToRgba from "hex-to-rgba";
import { Theme } from "@material-ui/core";
import clsx from "clsx";
import Hexagon from "react-svg-hexagon";
import { useWidth, isMobile } from "../../../utils/StyleFunctions";

const semiCircleWidth = 300;
const rectangleHeight = 90;
const rectangleSupportHeight = 30;
const rectangleOffset = 5;
const stepOneDuration = 3;
const stepTwoDuration = 3;

/**
 * radial-gradient(ellipse 400px 250px at center 50px, transparent 8%, #26BBB9)
 */
const semiCircleStyle = {
    boxShadow: `inset rgba(38, 187, 185, 0.1) 0px 2px 1px 0px`,
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        animationContainer: {
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
            position: "absolute",
        },
        cornerContainer: {
            width: "8vw",
            height: "8vw",
        },
        corner: {
            position: "absolute",
            color: "transparent",
            textShadow: `0 0 0 ${theme.palette.secondary.main}`,
            fontSize: "5px",
        },
        top: {
            top: 0,
        },
        bottom: {
            bottom: 0,
        },
        left: {
            left: 0,
        },
        right: {
            right: 0,
        },
        rectanglesContainer: {
            position: "absolute",
            display: "flex",
            flexDirection: "column",
        },
        rectangleContainer: {
            position: "relative",
            display: "flex",
        },
        rectangleMain: {
            height: `${rectangleHeight}px`,
            width: "10px",
            background: "white",
        },
        rectangleMainTop: {
            marginTop: `${
                semiCircleWidth / 2 -
                rectangleHeight +
                rectangleOffset +
                2 * rectangleSupportHeight
            }px`,
        },
        rectangleMainBot: {
            marginBottom: `${
                semiCircleWidth / 2 -
                rectangleHeight +
                rectangleOffset +
                2 * rectangleSupportHeight
            }px`,
        },
        rectangleSupport: {
            height: `${rectangleSupportHeight}px`,
            width: "10px",
            background: "white",
            position: "relative",
            margin: "0 10px",
        },
        rectangleSupportTop: {},
        rectangleSupportBot: {
            alignSelf: "flex-end",
        },
        finalHex: {
            position: "absolute",
        },
        finalCircle: {
            width: "75px",
            height: "75px",
            position: "absolute",
            border: "15px solid white",
            borderRadius: "50%",
        },
        finalCenterLine: {
            width: "1px",
            height: "75px",
            position: "absolute",
            background: "white",
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
    const stepOneControls = useAnimation();
    const stepTwoControls = useAnimation();
    const width = useWidth();

    const squareVariants = {
        begin: {},
        center: {
            scale: [1, 0],
            transition: {
                delay: 2,
                duration: 1,
                ease: [0.42, 0.0, 0.58, 1.0],
            },
        },
    };

    const containerVariants = {
        begin: {
            scale: isMobile(width) ? 0.7 : 1,
        },
        rotate: {
            rotate: 90,
            transition: {
                duration: stepTwoDuration,
                ease: [0.53, 0.02, 0.34, 1],
            },
        },
    };

    useEffect(() => {
        (async function (): Promise<void> {
            console.log("starting center");
            await stepOneControls.start("center");
            console.log("starting rotate");
            await stepTwoControls.start("rotate");
        })();
    }, [stepOneControls, stepTwoControls]);

    return (
        <>
            <motion.div
                className={classes.animationContainer}
                variants={containerVariants}
                animate={stepTwoControls}
                initial="begin"
            >
                <RectangleRotation controls={stepOneControls} />
                <SemiCircles controls={stepOneControls} />
                <motion.div
                    className={classes.centerRectangle}
                    variants={squareVariants}
                    animate={stepOneControls}
                />
                <Corners controls={stepTwoControls} />
                <CircleHex controls={stepTwoControls} />
            </motion.div>
        </>
    );
};

interface ControlProps {
    controls: AnimationControls;
}

const SemiCircles: React.FunctionComponent<ControlProps> = (props) => {
    const numSemiCircles = 4;
    const classes = useStyles();

    const semiCircleVariants = {
        begin: (i: number): object => {
            return {
                transform: generateSemiCircleTransformOffset(
                    i,
                    initialSemiCircleTransformOffsetValues
                ),
            };
        },
        center: (i: number): object => {
            return {
                transform: generateSemiCircleTransformOffset(
                    i,
                    endSemiCircleTransformOffsetValues
                ),
                transition: {
                    duration: stepOneDuration,
                    ease:
                        i % 2 === 0
                            ? [0.42, 0.0, 0.58, 1.0]
                            : [0.0, 0.0, 0.58, 1.0],
                },
            };
        },
    };

    return (
        <>
            {Array.from(Array(numSemiCircles).keys()).map((i) => {
                return (
                    <motion.div
                        key={i}
                        className={classes.outerSemiCircle}
                        variants={semiCircleVariants}
                        animate={props.controls}
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
        </>
    );
};

const renderCorner = (i: number): React.ReactNode => {
    switch (i) {
        case 0:
            return "\u25E4";
        case 1:
            return "\u25E5";
        case 2:
            return "\u25E3";
        case 3:
            return "\u25E2";
    }
};

const Corners: React.FunctionComponent<ControlProps> = (props) => {
    const classes = useStyles();
    const numCorners = 4;
    const variants = {
        rotate: (i) => {
            return {};
        },
    };
    return (
        <motion.div className={classes.cornerContainer}>
            {Array.from(Array(numCorners).keys()).map((i) => {
                return (
                    <motion.div
                        className={clsx({
                            [classes.corner]: true,
                            [classes.top]: i < 2,
                            [classes.bottom]: i >= 2,
                            [classes.left]: i % 2 === 0,
                            [classes.right]: i % 2 === 1,
                        })}
                        key={i}
                        variants={variants}
                        animate={props.controls}
                    >
                        {renderCorner(i)}
                    </motion.div>
                );
            })}
        </motion.div>
    );
};

const RectangleRotation: React.FunctionComponent<ControlProps> = (props) => {
    const classes = useStyles();
    const numSides = 2;
    const variants = {
        begin: (i): object => {
            return {
                transform: `translate3d(0, 0, 0)`,
            };
        },
        center: (i): object => {
            return {
                transform: `translateY(${i > 0 ? "" : "-"}${
                    semiCircleWidth / 2 -
                    rectangleHeight +
                    rectangleOffset +
                    rectangleHeight
                }px)`,
                transition: {
                    duration: 2,
                    ease: [0.42, 0.0, 0.58, 1.0],
                },
            };
        },
    };

    return (
        <motion.div className={classes.rectanglesContainer}>
            {Array.from(Array(numSides).keys()).map((i) => {
                return (
                    <motion.div key={i} className={classes.rectangleContainer}>
                        <motion.div
                            className={clsx({
                                [classes.rectangleSupport]: true,
                                [classes.rectangleSupportBot]: i !== 0,
                                [classes.rectangleSupportTop]: i === 0,
                            })}
                        />
                        <motion.div
                            className={clsx({
                                [classes.rectangleMain]: true,
                                [classes.rectangleMainBot]: i !== 0,
                                [classes.rectangleMainTop]: i === 0,
                            })}
                            variants={variants}
                            animate={props.controls}
                            initial="begin"
                            custom={i}
                        />
                        <motion.div
                            className={clsx({
                                [classes.rectangleSupport]: true,
                                [classes.rectangleSupportBot]: i !== 0,
                                [classes.rectangleSupportTop]: i === 0,
                            })}
                        />
                    </motion.div>
                );
            })}
        </motion.div>
    );
};

const CircleHex: React.FunctionComponent<ControlProps> = (props) => {
    const classes = useStyles();

    const circleVariants = {
        begin: {
            scale: 1.5,
            opacity: 0,
        },
        rotate: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: stepTwoDuration - 1,
                delay: 1,
            },
        },
    };
    const hexVariants = {
        begin: {
            scale: 0,
        },
        rotate: {
            scale: 1,
            transition: {
                duration: stepTwoDuration - 1,
                delay: 1,
            },
        },
    };
    const centerLineVariants = {
        begin: {
            scale: 0,
        },
        rotate: {
            scale: 1,
            transition: {
                duration: stepTwoDuration - 2,
                delay: 2,
            },
        },
    };
    return (
        <>
            <motion.div
                className={classes.finalCircle}
                variants={circleVariants}
                animate={props.controls}
                initial="begin"
            />
            <motion.div
                className={classes.finalHex}
                variants={hexVariants}
                animate={props.controls}
                initial="begin"
            >
                <Hexagon fill="white" side={20} />
            </motion.div>
            <motion.div
                className={classes.finalCenterLine}
                variants={centerLineVariants}
                animate={props.controls}
                initial="begin"
            />
        </>
    );
};

export default WelcomeAnimation;
