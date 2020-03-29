import React from 'react';
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Particles from "../../components/particles/Particles";
import Typist from 'react-typist';

const useStyles = makeStyles((theme:Theme) => createStyles({
    root: {
        display:'flex',
        height:'100vh',
        width:'100vw',
        justifyContent:'center',
        alignItems:'flex-end'
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
        marginBottom:'15vh'
    }
}));

export default function Hero() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div className={classes.content}>
                <Typist startDelay={1500} avgTypingDelay={100}>
                    <Typist.Delay ms={500} />
                    <span>Hi.</span>
                    <Typist.Backspace count={3} delay={500} />
                    <Typist.Delay ms={500} />
                    <span>My name is Robin Kurosawa</span>
                    <Typist.Backspace count={30} delay={500} />
                    <Typist.Delay ms={500} />
                    <span>Welcome to my site.</span>
                </Typist>
            </div>
            <div className={classes.particles}>
                <Particles/>
            </div>
        </div>
    )
};