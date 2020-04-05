import React, { useState, useEffect } from 'react';
import { animated, useTransition, config } from 'react-spring';
import { Typography } from '@material-ui/core';
import { setFinished, selectGreeting } from './greetingSlice';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';

type greetingItem = {
    id: number,
    value?: string | null
};

const greetings = [
    { id: 0, value: 'Hi.' },
    { id: 1, value: 'Welcome to OpenCreditX' },
    { id: 2, value: null }
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
    const finished = useSelector(selectGreeting);
    const dispatch = useDispatch();
    const transitions = useTransition(greetings[index], (item:greetingItem) => item.id, {
        from: { opacity: 0},
        enter: { opacity: 1, delay: 800},
        leave: { opacity: 0},
        unique: true,
        config: {
            ...config.gentle,
        },
        onDestroyed: (item) => {
            if (item.id === 1) {
                dispatch(setFinished(true));
            }
        }
    });

    useEffect(() => void setInterval(() => set((state:number) => state < 2 ? state + 1 : state), 2500), []);
    if (finished) return null;
    return (
        <>
            <div className={classes.root}>
                {
                    transitions.map(({item, props, key}) => {
                        return (
                            <animated.div style={{
                                position:'absolute',
                                ...props
                            }} key={key}>
                                <Typography variant="h2">
                                    {item.value}
                                </Typography>
                            </animated.div>
                        );
                    })
                }
            </div>
        </>
    );
}