import React, { useEffect, useState, useCallback, useRef } from 'react';
import { animated, useTransition, config, useSpring } from 'react-spring';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import * as _ from "lodash";

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        borderRadius:'50%',
        border: '1px solid white',
        padding: '4vw',
        position: 'absolute'
    }
}));

const springValues = {
    from: {
        transform: `scale(0.01)`,
        opacity:0
    },
    to: [
        {
            transform:`scale(10.0)`,
            opacity:1
        },
        {
            transform:`scale(10.0)`,
            opacity:0
        }
    ],
    delay: 1000,
    config: config.gentle
}

export default function CircleReveal() {
    const classes = useStyles();
    const refCircle0:any = useRef(false);
    const refCircle1:any = useRef(false);
    const refCircle2:any = useRef(false);
    // const [items, set] = useState([] as number[]);
    const [circle0, setCircle0] = useState(false);
    const [circle1, setCircle1] = useState(false);
    const [circle2, setCircle2] = useState(false);

    const circle0Props = useSpring({...springValues});
    const circle1Props = useSpring({...springValues});
    const circle2Props = useSpring({...springValues});

    const reset = useCallback(() => {
        console.log("circle0ref",refCircle0.current);
        console.log("circle1ref",refCircle1.current);

        setTimeout(() => setCircle0(true), 1000);
        setTimeout(() => setCircle1(true), 4000);
        setTimeout(() => setCircle2(true), 8000);
        
      }, []);
    
    useEffect(() => void reset(), []);

    console.log(circle0, circle1, circle2)

    return (
        <>
            {
                circle0 && <animated.div className={classes.root} style={circle0Props}/>
            }
            {
                circle1 && <animated.div className={classes.root} style={circle1Props}/>
            }
            {
                circle2 && <animated.div className={classes.root} style={circle2Props}/>
            }
        </>
    );
}