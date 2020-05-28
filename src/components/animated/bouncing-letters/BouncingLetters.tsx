import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Typography, Theme } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/styles";
import clsx from "clsx";
import useBezierEasing from "../../../utils/BezierEasing";
import { useMapper } from "../../../utils/ValueMapping";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            display: "flex",
            listStyle: "none",
        },
        default: {
            color: theme.palette.secondary.main,
        },
        spaceLetter: {
            padding: "0.1em",
        },
        error: {
            color: theme.palette.error.main,
        },
        success: {
            color: theme.palette.success.main,
        },
    })
);

interface BouncingLettersProps {
    string: string;
    active?: boolean;
    error?: boolean;
    success?: boolean;
}

const BouncingLetters: React.FunctionComponent<BouncingLettersProps> = (
    props
) => {
    const bezier = useBezierEasing([0.8, 0.1, 1, 0.5]);
    const classes = useStyles();
    const letters = props.string.split("");
    const indices = letters.map((l, i) => i);
    const valueMapper = useMapper(indices);
    const [intervalId, setIntervalId] = useState(-1);
    const [variant, setVariant] = useState("end");

    const listVariants = {
        begin: {
            // transform: "translate3d(0, 15px, 0)",
        },
        end: {
            transform: ["translate3d(0, 15px, 0)", "translate3d(0, 0px, 0"],
            transition: {
                ease: [0, 0.5, 0.18, 1],
                duration: bezier(valueMapper(indices.length)) * 2,
            },
        },
        idle: {},
    };

    function handleReset(): void {
        setVariant((currentVariant) =>
            currentVariant === "begin" ? "end" : "begin"
        );
    }

    // Catch when active changes
    useEffect(() => {
        if (!props.active) {
            clearInterval(intervalId);
        }
    }, [props.active, intervalId]);

    // Handle the animation reset
    useEffect(() => {
        const interval: number = window.setInterval(() => handleReset(), 3000);
        setIntervalId(interval);
        return (): void => clearInterval(interval);
    }, []);

    const letterVariant = {
        begin: (index: number): object => {
            return {
                opacity: [1, 0],
                transition: {
                    duration: 0.2,
                    delay: valueMapper(letters.length - index),
                },
            };
        },
        end: (index: number): object => {
            return {
                opacity: [0, 1],
                transform: [
                    "translate3d(0, 40px, 0)",
                    "translate3d(0, 0px, 0)",
                ],
                transition: {
                    ease: [0.0, 0.0, 1, 1],
                    duration: bezier(valueMapper(index)),
                    delay: bezier(valueMapper(index)),
                },
            };
        },
        idle: {
            opacity: 1,
            transform: "translate3d(0,0,0)",
        },
    };

    const exit = {
        opacity: 0,
    };

    return (
        <>
            <motion.ul
                className={classes.container}
                variants={listVariants}
                initial="begin"
                animate={variant}
            >
                {letters.map((letter, index) => (
                    <motion.li
                        key={index}
                        custom={index}
                        variants={letterVariant}
                        animate={props.active ? variant : "idle"}
                        exit={exit}
                    >
                        <Typography
                            className={clsx({
                                [classes.spaceLetter]: letter === " ",
                                [classes.error]: props.error,
                                [classes.success]: props.success,
                                [classes.default]:
                                    !props.error && !props.success,
                            })}
                            variant="h4"
                        >
                            {letter.toUpperCase()}
                        </Typography>
                    </motion.li>
                ))}
            </motion.ul>
        </>
    );
};

export default BouncingLetters;
