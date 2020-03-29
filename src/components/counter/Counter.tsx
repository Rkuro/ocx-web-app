import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  selectCount,
} from './counterSlice';
import { createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import clsx from 'clsx';
import { Button } from '@material-ui/core';


const useStyles = makeStyles((theme: Theme) => createStyles ({
    root: {
        display:'flex',
        flex:1,
    },
    row: {

    },
    button: {

    },
    value: {

    }
}))

export function Counter() {
    const classes = useStyles();
    const count = useSelector(selectCount);
    const dispatch = useDispatch();
    // const [incrementAmount, setIncrementAmount] = useState('2');

    return (
        <React.Fragment>
            <div className={clsx({
                [classes.root]: true
            })}>
                <div className={classes.row}>
                    <Button
                        className={classes.button}
                        aria-label="Increment value"
                        onClick={() => dispatch(increment())}
                    >
                        +
                    </Button>
                    <span className={classes.value}>{count}</span>
                    <Button
                        className={classes.button}
                        aria-label="Decrement value"
                        onClick={() => dispatch(decrement())}
                    >
                        -
                    </Button>
                    {/* content */}
                </div>
                
            </div>
        </React.Fragment>
    );
}
