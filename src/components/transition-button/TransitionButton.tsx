import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
    makeStyles,
    createStyles,
    Button,
    ButtonProps,
} from "@material-ui/core";
import { useSpring } from "react-spring";

// enum AnimationState {
//     IDLE = "IDLE",
//     RUNNING = "RUNNING",
//     FINISHED = "FINISHED",
// }

const useStyles = makeStyles(() =>
    createStyles({
        link: {
            textDecoration: "none",
        },
    })
);

interface TransitionButtonProps extends ButtonProps {
    link: string;
}

const TransitionButton: React.FunctionComponent<TransitionButtonProps> = (
    transitionButtonProps
) => {
    const [showButton, setShowButton] = useState(true);
    const history = useHistory();
    const classes = useStyles();

    function handleClick(): void {
        // history.push(props.link);
        console.log("handleClick called!");
        setShowButton(false);
    }

    const { x } = useSpring({
        from: { x: 0 },
        x: showButton ? 1 : 0,
        config: { duration: 1000 },
    });

    console.log("transitionbutton render:", x);

    return (
        <>
            <Button onClick={handleClick} {...transitionButtonProps}>
                {/* {props.children} */}
                {showButton.toString()}
            </Button>
        </>
    );
};

export default TransitionButton;
