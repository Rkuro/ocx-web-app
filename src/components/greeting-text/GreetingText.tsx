import React, { useState, useEffect } from 'react';
import { animated, useTransition, config } from 'react-spring';
import { Typography } from '@material-ui/core';
import { setFinished, selectGreeting } from './greetingSlice';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { useCookies } from 'react-cookie';

type greetingItem = {
    id: number,
    value?: string | null
};

const greetings = [
    { id: 0, value: 'Hi.' },
    { id: 1, value: 'Welcome to OpenCreditX' },
    { id: 2, value: '' }
];

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        textAlign:'center',
        display:'flex',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        zIndex:1
    }
}));

export default function GreetingText() {
    const classes = useStyles();
    const [index, set] = useState(0);
    const [cookies, ] = useCookies(['greetingViewed']);
    const finished = useSelector(selectGreeting);
    const dispatch = useDispatch();
    const transitions = useTransition(greetings[index], item=>item.id as any, {
        from: {
            opacity: 0
        },
        enter: {
            opacity:1
        },
        leave: {
            opacity: 0,
        },
        config: config.gentle,
        delay:1000,
        unique: true,
        onDestroyed: (item) => {
            console.log("ondestroy", item)
            // @ts-ignore
            if (item.id === 1) {
                dispatch(setFinished);
            }
        }
    })

    // useEffect(() => void setInterval(() => set((state:number) => state < 2 ? state + 1 : state), 2500), []);
    useEffect(() => {
        setTimeout(() => set(2), 2000);
        setTimeout(()=> set(1), 3000);
        setTimeout(()=>set(2), 5000);
    }, [])
    if (finished || cookies.greetingViewed) return null;
    return (
        <>
            <div className={classes.root}>
                {
                    transitions.map(({item, key, props}) => {
                        return (
                            <animated.div key={key} style={props}>
                                <Typography variant="h2">
                                    {item.value}
                                </Typography>
                            </animated.div>
                        )
                    })
                }
                
            </div>
        </>
    );
}