import React from "react";
import { makeStyles, createStyles } from "@material-ui/core";
import { Nav } from "..";
import clsx from "clsx";

const useStyles = makeStyles(() =>
    createStyles({
        page: {
            width: "100vw",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
        },
        pageContent: {
            flex: "1",
        },
        flex: {
            display: "flex",
        },
    })
);

interface PageContainerProps {
    nav?: boolean;
    flex?: boolean;
    styles?: React.CSSProperties;
}

const PageContainer: React.FunctionComponent<PageContainerProps> = (props) => {
    const classes = useStyles();
    return (
        <div
            className={clsx({
                [classes.page]: true,
            })}
        >
            {props.nav && (
                <div>
                    <Nav />
                </div>
            )}
            <div
                className={clsx(classes.pageContent, {
                    [classes.flex]: props.flex,
                })}
            >
                {props.children}
            </div>
        </div>
    );
};

export default PageContainer;
