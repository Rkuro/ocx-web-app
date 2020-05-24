//@ts-nocheck
import React, { useEffect, useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core";
import { useSpring, animated } from "react-spring";
import { themeExtras } from "../../../theme";
import { motion } from "framer-motion";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {},
        border: {
            position: "absolute",
            backgroundColor: themeExtras.border,
            height: "2px",
            width: "100px",
        },
        left: {
            left: 0,
        },
        right: {
            right: 0,
        },
        top: {
            top: 0,
        },
        bottom: {
            bottom: 0,
        },
        cover: {
            height: "100%",
        },
    })
);

interface MovingBorderProps {
    top?: boolean;
    bottom?: boolean;
}

// randomly offset delay by where it is
const getDelay = (variation, top) => {
    if (variation === "left") {
        return top ? 0.25 : 0;
    } else {
        return top ? 0.5 : 0.75;
    }
};

const MovingBorder: React.FunctionComponent<MovingBorderProps> = (props) => {
    const classes = useStyles();
    const movement = Math.random() * 100;
    const anim = {};
    const transition = {
        duration: 4,
        loop: Infinity,
        ease: [0.17, 0.67, 0.83, 0.67],
        times: [0, 0.7, 1],
    };
    const variations = ["left", "right"];
    return (
        <>
            <div className={classes.container}>
                {variations.map((variation) => (
                    <motion.div
                        key={`moving-border-${variation}`}
                        className={clsx({
                            [classes.border]: true,
                            [classes.top]: props.top,
                            [classes.bottom]: props.bottom,
                            [classes.left]: variation === "left",
                            [classes.right]: variation === "right",
                        })}
                        animate={{
                            transform: [
                                `translate3d(0px, 0, 0)`,
                                `translate3d(${
                                    variation === "left" ? "100" : "-100"
                                }%, 0, 0)`,
                                `translate3d(0px, 0, 0)`,
                            ],
                        }}
                        transition={{
                            ...transition,
                            delay: getDelay(variation, props.top),
                        }}
                    />
                ))}
            </div>
        </>
    );
};

export default MovingBorder;
