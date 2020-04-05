import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import GreetingText from '../../components/greeting-text/GreetingText';
import { selectGreeting } from '../../components/greeting-text/greetingSlice';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme:Theme) => createStyles({
    root: {
        display:'flex',
        height:'100vh',
        width:'100vw',
        justifyContent:'center',
        alignItems:'center'
    },
    particles: {
        height:'100vh',
        width: '100vw',
        flex:1,
        display:'flex',
        "& div": {
            flex:1,
            display:'flex'
        },
        position:'absolute'
    },
    content: {
        flex:1,
        textAlign:'center',
    },
    welcome: {
        ...theme.typography.h2
    }
}));

export default function Hero() {
    const classes = useStyles();
    const greetingFinished = useSelector(selectGreeting);

    return (
        <div className={classes.root}>
            <GreetingText/>
            {
                greetingFinished && 'content'
            }
        </div>
    )
};