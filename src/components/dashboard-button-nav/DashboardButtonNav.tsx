import React from "react";
import { makeStyles, createStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(() =>
    createStyles({
        container: {
            display: "flex",
        },
    })
);

interface DashboardButtonNavProps {
    textContent: string;
    assetSource: string;
}

const DashboardButtonNav: React.FunctionComponent<DashboardButtonNavProps> = (
    props
) => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Typography>{props.textContent}</Typography>
        </div>
    );
};

export default DashboardButtonNav;
