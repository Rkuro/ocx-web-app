import React from "react";
import {
    Typography,
    makeStyles,
    createStyles,
    Theme,
    Divider,
    Button,
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {},
        prompt: {
            textAlign: "center",
            margin: `0 ${theme.spacing()}px`,
        },
        backContainer: {
            display: "flex",
            alignItems: "center",
            paddingBottom: theme.spacing(2),
        },
        backButton: {
            minWidth: "32px",
        },
    })
);

const AuthStageEmail: React.FunctionComponent = (props) => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <div className={classes.backContainer}>
                    <Button className={classes.backButton}>
                        <ArrowBackIcon />
                    </Button>
                    <Typography className={classes.prompt} variant="h5">
                        Please enter your email
                    </Typography>
                </div>
                <Divider flexItem />
                {/* <form onSubmit={() => dispatch()}>

                </form> */}
            </div>
        </>
    );
};

export default AuthStageEmail;
