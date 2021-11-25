import React, { useState, useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { selectAuth, AuthenticatePayload } from "../authSlice";
import { authenticateThunk } from "../authSlice";
import { useNavigate } from "react-router-dom";
import Routes from "../../../app/constants/routes";
import { LoaderContained } from "../../../components";
import FadeContainer from "../../../components/animated/fade-container/FadeContainer";

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
        input: {
            margin: `${theme.spacing(1)}px 0`,
        },
        submitButton: {
            marginTop: theme.spacing(3),
        },
        errorText: {
            display: "flex",
            justifyContent: "center",
            color: theme.palette.error.light,
            padding: theme.spacing(1),
        },
    })
);

const AuthStageLogin: React.FunctionComponent = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const authState = useSelector(selectAuth);
    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [userAttemptedSubmission, setUserAttemptedSubmission] =
        useState(false);

    const handleSubmit = async (e: React.FormEvent): Promise<void> => {
        e.preventDefault(); // Stop auto-page reload
        console.log("handling submit!", emailInput, passwordInput);
        const payload: AuthenticatePayload = {
            creds: {
                email: emailInput,
                password: passwordInput,
            },
        };
        await dispatch(authenticateThunk(payload));
        setUserAttemptedSubmission(true);
    };

    useEffect(() => {
        if (authState.user !== null) {
            console.log(
                "[Auth Login] Redirecting authenticated user to dashboard"
            );
            navigate(Routes.DASHBOARD);
        }
    }, [authState.user, navigate]);

    console.log(
        "Auth stage login render:",
        emailInput,
        userAttemptedSubmission
    );

    // Only show error if error is not null and they attempted to submit already
    const shouldShowErrorText =
        authState.error != null && userAttemptedSubmission;

    return (
        <>
            <div className={classes.root}>
                {authState.loading && <LoaderContained />}
                <div className={classes.backContainer}>
                    <Button
                        className={classes.backButton}
                        onClick={(): void => navigate(Routes.AUTH)}
                    >
                        <ArrowBackIcon />
                    </Button>
                    <Typography
                        className={classes.prompt}
                        variant="h5"
                    ></Typography>
                </div>
                <Divider flexItem />
                <FadeContainer show={shouldShowErrorText}>
                    <div className={classes.errorText}>
                        <Typography>{authState.error?.message}</Typography>
                    </div>
                </FadeContainer>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <TextField
                        id="email"
                        type="email"
                        className={classes.input}
                        label="Email"
                        variant="outlined"
                        color="secondary"
                        autoComplete="username"
                        onChange={(e): void =>
                            setEmailInput(e.currentTarget.value)
                        }
                    />
                    <TextField
                        id="password"
                        type="password"
                        className={classes.input}
                        label="Password"
                        variant="outlined"
                        color="secondary"
                        autoComplete="current-password"
                        onChange={(e): void =>
                            setPasswordInput(e.currentTarget.value)
                        }
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
