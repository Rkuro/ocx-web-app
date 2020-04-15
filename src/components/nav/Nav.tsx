import React, { useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { Hidden, AppBar, useScrollTrigger, Slide, Toolbar, IconButton, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Routes from '../../app/constants/routes';


const useNavStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        
    },
    mobile: {

    },
    menuButton: {

    },
    nonMobile: {
        backgroundColor:'transparent'
    },
    nonMobileToolbar: {
        display:'flex',
        justifyContent:'flex-end'
    }
}))

export default function Nav() {

    const classes = useNavStyles();

    return (
        <>
            <div className={classes.root}>
                {/* Mobile Nav */}
                <Hidden mdUp>
                    <MobileNav/>
                </Hidden>
                {/* Non-Mobile Nav */}
                <Hidden smDown>
                    <NonMobileNav/>
                </Hidden>
            </div>
        </>
    );
}

function HideOnScroll(props: any) {
    const { children } = props;
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction={props.direction} in={!trigger}>
        {children}
        </Slide>
    );
}

function MobileNav() {
    const classes = useNavStyles();
    const [open, ] = useState(false);
    return (
        <>
            <HideOnScroll direction={"down"}>
                <AppBar>
                    
                    <Toolbar>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="open drawer"
                        >
                            <MenuIcon />
                        </IconButton>

                        
                    </Toolbar>

                    {
                        open && 'content!'
                    }

                </AppBar>
            </HideOnScroll>
        </>
    );
}


function NonMobileNav() {
    const classes = useNavStyles();
    return (
        <>
            <div>
                <Link to={Routes.AUTH}>
                    <AppBar className={classes.nonMobile}>
                        <Toolbar variant="dense" className={classes.nonMobileToolbar}>
                            <Button>Login</Button>
                        </Toolbar>
                    </AppBar>
                </Link>
            </div>
        </>
    );
}