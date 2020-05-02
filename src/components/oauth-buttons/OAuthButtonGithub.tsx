import React from "react";
import { Button, makeStyles, createStyles, Theme } from "@material-ui/core";
import GithubLogo from "../../assets/github/GitHub-Logos/GitHub_Logo_White.png";
import GithubMark from "../../assets/github/GitHub-Mark/PNG/GitHub-Mark-Light-32px.png";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
            justifyContent: "center",
            flex: "1",
            alignItems: "center",
        },
        logo: {
            maxWidth: "63px",
            margin: "0 20px",
        },
        mark: {},
    })
);

export const OAuthButtonGithub: React.FunctionComponent = (props) => {
    const classes = useStyles();
    return (
        <Button>
            <div className={classes.root}>
                <img
                    className={classes.logo}
                    alt="Github Logo"
                    src={GithubLogo}
                />
                <img
                    className={classes.mark}
                    alt="Github Mark"
                    src={GithubMark}
                />
            </div>
        </Button>
    );
};

export default OAuthButtonGithub;
