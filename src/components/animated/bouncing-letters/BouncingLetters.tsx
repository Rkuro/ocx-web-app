import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
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
        listItem: {
            color: theme.palette.secondary.main,
        },
        spaceLetter: {
            padding: "0.1em",
        },
    })
);

interface BouncingLettersProps {
    string: string;
}

const BouncingLetters: React.FunctionComponent<BouncingLettersProps> = (
    props
) => {
    const bezier = useBezierEasing([0.8, 0.1, 1, 0.5]);
    const classes = useStyles();
    const letters = props.string.split("");
    const indices = letters.map((l, i) => i);
    const valueMapper = useMapper(indices);

    const [variant, setVariant] = useState("start");

    const listVariants = {
        stop: {
            // transform: "translate3d(0, 15px, 0)",
        },
        start: {
            transform: ["translate3d(0, 15px, 0)", "translate3d(0, 0px, 0"],
            transition: {
                // staggerChildren: 0.1,
                ease: [0, 0.5, 0.18, 1],
                duration: bezier(valueMapper(indices.length)) * 2,
            },
        },
    };

    function handleReset(): void {
        setVariant((currentVariant) =>
            currentVariant === "start" ? "stop" : "start"
        );
    }

    useEffect(() => {
        setInterval(() => handleReset(), 3000);
    }, []);

    const letterVariant = {
        stop: (index: number): object => {
            return {
                opacity: [1, 0],
                transition: {
                    duration: 0.2,
                    delay: valueMapper(letters.length - index),
                },
            };
        },
        start: (index: number): object => {
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
    };

    return (
        <>
            <motion.ul
                className={classes.container}
                variants={listVariants}
                initial="stop"
                animate={variant}
            >
                {letters.map((letter, index) => (
                    <motion.li
                        key={index}
                        custom={index}
                        variants={letterVariant}
                        className={classes.listItem}
                    >
                        <Typography
                            className={clsx({
                                [classes.spaceLetter]: letter === " ",
                            })}
                            variant="h3"
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
