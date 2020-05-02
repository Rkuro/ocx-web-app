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
import { useSelector, useDispatch } from "react-redux";
import { selectAuth, updateStage, AuthStage } from "../authSlice";

interface SelectAuthType {
    payload: AuthStage;
    type: string;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        },
        prompt: {
            textAlign: "center",
        },
        oauthExpansionContainer: {
            width: "100%",
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
        },
        oauthButtonPanel: {
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
        },
        emailButtonContainer: {
            width: "100%",
            marginBottom: "20px",
        },
        emailButton: {
            width: "100%",
            border: `1px solid ${theme.palette.secondary.main}`,
            padding: "12px",
        },
        divider: {
            height: "1px",
        },
    })
);

const AuthStageLanding: React.FunctionComponent = (props) => {
    const classes = useStyles();
    const authState = useSelector(selectAuth);
    const dispatch = useDispatch();

    return (
        <div className={classes.root}>
            <Typography className={classes.prompt} variant="h5">
                How would you like to authenticate?
            </Typography>

            <div className={classes.emailButtonContainer}>
                <Button
                    variant={"outlined"}
                    className={classes.emailButton}
                    onClick={(): SelectAuthType =>
                        dispatch(updateStage(AuthStage.EMAIL))
                    }
                >
                    Use Email
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
