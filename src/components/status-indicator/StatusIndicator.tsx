import React, { useState } from "react";
import { makeStyles, createStyles } from "@material-ui/core";
import { useTransition, animated, useSpring } from "react-spring";
import { map } from "lodash";

export enum STATUS_INDICATOR_TYPE {
    "PROGRESS" = "PROGRESS",
    "ERROR" = "ERROR",
    "SUCCESS" = "SUCCESS",
}

const useStyles = makeStyles(() =>
    createStyles({
        container: {
            display: "flex",
        },
    })
);

interface StatusIndicatorProps {
    type: STATUS_INDICATOR_TYPE;
    status: string;
    setFinished: Function;
}

interface Letter {
    text: string;
    id: number;
}

const StatusIndicator: React.FunctionComponent<StatusIndicatorProps> = (
    props
) => {
    // const statusLetters = map(props.status.split(""), (char, index) => {
    //     return {
    //         text: char,
    //         id: index,
    //     };
    // });

    // const [letters, setLetters] = useState(statusLetters);
    // const classes = useStyles();
    // const letterTransitions = useTransition(letters, (key: Letter) => key.id, {
    //     from: { transform: "translate3d(0,-40px,0)" },
    //     enter: { transform: "translate3d(0,0px,0)" },
    //     leave: { transform: "translate3d(0,-40px,0)" },
    //     reset: true,
    // });

    // console.log("letters", letters);

    // return (
    //     <>
    //         <div className={classes.container}>
    //             {letterTransitions.map(({ item, key, props }) => {
    //                 return (
    //                     <animated.div key={key} style={props}>
    //                         {item.text}
    //                     </animated.div>
    //                 );
    //             })}
    //         </div>
    //     </>
    // );

    const spring = useSpring({
        to: { number: 1 },
        from: { number: 0 },
    });
    console.log("spring!");

    return (
        <>
            <animated.div>{"test"}</animated.div>
        </>
    );
};

export default StatusIndicator;
