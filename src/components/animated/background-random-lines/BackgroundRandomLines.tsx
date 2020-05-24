import React from "react";
import { makeStyles, createStyles } from "@material-ui/core";
import { motion } from "framer-motion";
import { themeExtras } from "../../../theme";

const useStyles = makeStyles(() => createStyles({}));

const BackgroundRandomLines: React.FunctionComponent = () => {
    return <></>;
};

const verticalLineClasses = makeStyles(() =>
    createStyles({
        constantStyles: {
            height: "100vh",
            width: "1px",
            color: themeExtras.border,
        },
    })
);

const RandomVerticalLine: React.FunctionComponent = () => {
    const animate = {};
    return <motion.div />;
};

export default BackgroundRandomLines;
