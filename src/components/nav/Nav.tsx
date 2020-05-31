import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Hidden } from "@material-ui/core";
import { themeExtras } from "../../theme";
// import { Link } from "react-router-dom";
// import Routes from "../../app/constants/routes";

const useNavStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {},
        mobileRoot: {},
        mobileAppBar: {},
        menuButton: {},
        nonMobileRoot: {
            width: "100vw",
            padding: theme.spacing(2),
            borderBottom: `1px solid ${themeExtras.navBorder}`,
        },
        nonMobileAppBar: {
            backgroundColor: "transparent",
        },
        nonMobileToolbar: {
            display: "flex",
            justifyContent: "flex-end",
        },
    })
);

export default function Nav() {
    const classes = useNavStyles();

    return (
        <>
            <div className={classes.root}>
                {/* Mobile Nav */}
                {/* <Hidden mdUp><MobileNav /></Hidden> */}
                {/* Non-Mobile Nav */}
                <Hidden smDown>
                    <NonMobileNav />
                </Hidden>
            </div>
        </>
    );
}

const NonMobileNav: React.FunctionComponent = () => {
    const classes = useNavStyles();
    return (
        <>
            <div className={classes.nonMobileRoot}></div>
        </>
    );
};
