import React, { useRef } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core";
import { themeExtras } from "../../../theme";
import { motion } from "framer-motion";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            width: "100%",
        },
        border: {
            position: "absolute",
            backgroundColor: themeExtras.panelBorder,
            height: "2px",
            width: "20%",
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
const getDelay = (variation: string, top?: boolean): number => {
    if (variation === "left") {
        return top ? 0.25 : 0;
    } else {
        return top ? 0.5 : 0.75;
    }
};

const MovingBorder: React.FunctionComponent<MovingBorderProps> = (props) => {
    const classes = useStyles();
    const ref = useRef(null);
    const variants = {
        moving: ({ variation, ref }): object => {
            return {
                transform: [
                    `translate3d(0px, 0, 0)`,
                    `translate3d(${variation === "left" ? "" : "-"}${
                        ref.current.offsetWidth * 0.8 // 1 - the actual element width
                    }px, 0, 0)`,
                    `translate3d(0px, 0, 0)`,
                ],
            };
        },
    };
    const transition = {
        duration: 4,
        loop: Infinity,
        ease: [0.17, 0.67, 0.83, 0.67],
        times: [0, 0.7, 1],
        delay: ({ variation, ref }): number => {
            return getDelay(variation, props.top);
        },
    };
    const exit = {
        opacity: 0,
    };
    const variations = ["left", "right"];
    return (
        <>
            <div className={classes.container} ref={ref}>
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
                        animate="moving"
                        variants={variants}
                        transition={{
                            ...transition,
                            delay: getDelay(variation, props.top),
                        }}
                        custom={{
                            variation,
                            ref,
                        }}
                        exit={exit}
                    />
                ))}
            </div>
        </>
    );
};

export default MovingBorder;
