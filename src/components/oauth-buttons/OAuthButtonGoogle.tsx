import React from "react";
import { Button, makeStyles, createStyles } from "@material-ui/core";
import GoogleLogo from "../../assets/google/google_signin_buttons/web/1x/btn_google_signin_dark_normal_web.png";
import { OAuthButtonStyle } from "../../app/constants/styles";

const useStyles = makeStyles(() => createStyles({
    button: {
        ...OAuthButtonStyle
    }
}));

const OAuthButtonGoogle: React.FunctionComponent = () => {
    const classes = useStyles();
    return (
        <Button className={classes.button}>
            <img alt="Google Logo" src={GoogleLogo} />
        </Button>
    );
};

export default OAuthButtonGoogle;
