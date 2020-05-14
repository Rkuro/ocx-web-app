/* eslint @typescript-eslint/ban-ts-ignore: 0 */
import React, { useState, useEffect } from "react";
import { animated, useTransition, config } from "react-spring";
import { Typography } from "@material-ui/core";
import { setFinished, selectGreeting } from "./greetingSlice";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";

interface GreetingItem {
    id: number;
    value: string;
}

const greetings = [
    { id: 0, value: "Hi." },
    { id: 1, value: "Welcome to OpenCreditX" },
    { id: 2, value: "" },
];

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            textAlign: "center",
            display: "flex",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1,
        },
    })
);

const GreetingText: React.FunctionComponent = () => {
    const classes = useStyles();
    const [index, set] = useState(0);
    const [cookies, setCookie] = useCookies(["greetingViewed"]);
    const finished = useSelector(selectGreeting);
    const dispatch = useDispatch();
    const transitions = useTransition(greetings[index], (item) => item.id, {
        from: {
            opacity: 0,
        },
        enter: {
            opacity: 1,
        },
        leave: {
            opacity: 0,
        },
        config: config.gentle,
        delay: 1000,
        unique: true,
        onDestroyed: (item) => {
            // onDestroyed seems to have bad typing for the return object here
            // @ts-ignore
            if (item.id === 1) {
                console.log("Destroying!");
                dispatch(setFinished(true));
                setCookie("greetingViewed", true);
            }
        },
    });

    useEffect(() => {
        setTimeout(() => set(2), 2000);
        setTimeout(() => set(1), 3000);
        setTimeout(() => set(2), 5000);
    }, []);
    if (finished || cookies.greetingViewed) return null;
    return (
        <>
            <div className={classes.root}>
                {transitions.map(({ item, key, props }) => {
                    return (
                        <animated.div key={key} style={props}>
                            <Typography variant="h2">{item.value}</Typography>
                        </animated.div>
                    );
                })}
            </div>
        </>
    );
};

export default GreetingText;
