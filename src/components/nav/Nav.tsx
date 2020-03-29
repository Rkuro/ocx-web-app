import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import clsx from 'clsx';


const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {

    }
}))

export default function Nav() {

    const classes = useStyles()

    return (
        <React.Fragment>
            <div className={classes.root}>
                nav
            </div>
        </React.Fragment>
    )
}