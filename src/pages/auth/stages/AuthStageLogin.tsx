import React, { useState } from "react";
import {
    Typography,
    makeStyles,
    createStyles,
    Theme,
    Divider,
    Button,
    TextField,
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useDispatch } from "react-redux";
import { AuthStage, updateStage, AuthDispatchReturn } from "../authSlice";

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
        form: {
            display: "flex",
            flexDirection: "column",
        },
        input: {},
        submitButton: {
            marginTop: theme.spacing(3),
        },
    })
);

const AuthStageLogin: React.FunctionComponent = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");

    return (
        <>
            <div className={classes.root}>
                <div className={classes.backContainer}>
                    <Button
                        className={classes.backButton}
                        onClick={(): AuthDispatchReturn =>
                            dispatch(updateStage(AuthStage.LANDING))
                        }
                    >
                        <ArrowBackIcon />
                    </Button>
                    <Typography className={classes.prompt} variant="h5">
                        Please enter your email
                    </Typography>
                </div>
                <Divider flexItem />
                <form
                    className={classes.form}
                    onSubmit={(): void => console.log("emailinput", emailInput)}
                >
                    <TextField
                        id="email"
                        type="email"
                        className={classes.input}
                        label="Email"
                        variant="outlined"
                        color="secondary"
                    />
                    <TextField
                        id="password"
                        type="password"
                        className={classes.input}
                        label="Password"
                        variant="outlined"
                        color="secondary"
                    />
                    <Button
                        className={classes.submitButton}
                        color="secondary"
                        type="submit"
                        variant="contained"
                    >
                        Submit
                    </Button>
                </form>
            </div>
        </>
    );
};

export default AuthStageLogin;
