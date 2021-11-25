import React from "react";
import {
    makeStyles,
    createStyles,
    Theme,
    Button,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    Typography,
    Divider,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { OAuthButtonGoogle, OAuthButtonGithub } from "../../../components/";
import { useNavigate } from "react-router";
import { Routes } from "../../../app/constants/routes";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        contentContainer: {
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
        root: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        },
        prompt: {
            textAlign: "center",
            paddingBottom: theme.spacing(4),
        },
        oauthExpansionContainer: {
            width: "100%",
            backgroundColor: "transparent",
        },
        oauthExpansionSummary: {
            border: `1px solid ${theme.palette.secondary.main}`,
            borderRadius: theme.shape.borderRadius,
        },
        oauthExpansionDetails: {
            padding: 0,
            display: "flex",
            flexDirection: "column",
        },
        oauthButtonPrompt: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            marginLeft: "36px",
        },
        oauthButtonPanel: {
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
        },
        authButtonContainer: {
            width: "100%",
            marginBottom: "20px",
        },
        authButton: {
            width: "100%",
            border: `1px solid ${theme.palette.secondary.main}`,
            padding: "12px",
        },
        divider: {
            height: "1px",
        },
    })
);

const AuthStageLanding: React.FunctionComponent = () => {
    const classes = useStyles();
    const navigate = useNavigate();

    function handleUpdateStage(authStage: Routes): void {
        navigate(authStage);
    }
    return (
        <div className={classes.root}>
            <Typography className={classes.prompt} variant="h5">
                How would you like to authenticate?
            </Typography>
            <Divider flexItem />

            <div className={classes.authButtonContainer}>
                <Button
                    variant={"outlined"}
                    className={classes.authButton}
                    onClick={(): void => handleUpdateStage(Routes.SIGNUP)}
                >
                    SIGNUP
                </Button>
            </div>

            <div className={classes.authButtonContainer}>
                <Button
                    variant={"outlined"}
                    className={classes.authButton}
                    onClick={(): void => handleUpdateStage(Routes.LOGIN)}
                >
                    LOGIN
                </Button>
            </div>

            <ExpansionPanel className={classes.oauthExpansionContainer}>
                <ExpansionPanelSummary
                    className={classes.oauthExpansionSummary}
                    expandIcon={<ExpandMoreIcon />}
                >
                    <div className={classes.oauthButtonPrompt}>
                        <Typography>Use OAuth</Typography>
                    </div>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails
                    className={classes.oauthExpansionDetails}
                >
                    <div className={classes.oauthButtonPanel}>
                        <OAuthButtonGoogle />
                        <Divider />
                        <OAuthButtonGithub />
                    </div>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
};

export default AuthStageLanding;
