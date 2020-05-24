/* eslint @typescript-eslint/ban-ts-ignore: 0 */
import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import { setFinished, selectGreeting } from "./greetingSlice";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import { motion, AnimatePresence } from "framer-motion";

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            textAlign: "center",
            display: "flex",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        },
    })
);

const messages = ["Hi", "Welcome to OpenCreditX"];

const GreetingText: React.FunctionComponent = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [cookies, setCookies] = useCookies(["greetingViewed"]);
    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
    const [currentVariant, setCurrentVariant] = useState("inactive");

    const variants = {
        active: {
            opacity: 1,
        },
        inactive: {
            opacity: 0,
        },
    };

    useEffect(() => {
        setTimeout(() => setCurrentVariant("active"));
        setTimeout(() => setCurrentVariant("inactive"), 2000);
        setTimeout(() => setCurrentVariant("active"), 4000);
        setTimeout(() => setCurrentVariant("inactive"), 6000);
    }, []);

    const handleAnimationComplete = (): void => {
        if (currentMessageIndex === 0 && currentVariant === "inactive") {
            setCurrentMessageIndex(1);
        }
        if (currentMessageIndex === 1 && currentVariant === "inactive") {
            setTimeout(() => {
                setCookies("greetingViewed", true);
                dispatch(setFinished(true));
            }, 1000);
        }
    };

    return (
        <>
            <div className={classes.root}>
                <AnimatePresence>
                    {messages.map(
                        (message, index) =>
                            index === currentMessageIndex && (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0 }}
                                    animate={currentVariant}
                                    variants={variants}
                                    transition={{ delay: 1 }}
                                    onAnimationComplete={
                                        handleAnimationComplete
                                    }
                                >
                                    <GreetingItem greeting={message} />
                                </motion.div>
                            )
                    )}
                </AnimatePresence>
            </div>
        </>
    );
};

interface GreetingItemProps {
    greeting: string;
}

const GreetingItem: React.FunctionComponent<GreetingItemProps> = (props) => {
    return <Typography variant="h2">{props.greeting}</Typography>;
};

export default GreetingText;
