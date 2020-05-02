import React from "react";
import { Button } from "@material-ui/core";
import GoogleLogo from "../../assets/google/google_signin_buttons/web/1x/btn_google_signin_dark_normal_web.png";

const OAuthButtonGoogle: React.FunctionComponent = () => {
    return (
        <Button>
            <img alt="Google Logo" src={GoogleLogo} />
        </Button>
    );
};

export default OAuthButtonGoogle;
