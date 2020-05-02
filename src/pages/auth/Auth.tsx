import React, { useEffect } from "react";
import Nav from "../../components/nav/Nav";
import { makeStyles, createStyles, Theme } from "@material-ui/core";
import FormStepContainer from "../../components/form-step-container/FormStepContainer";
import { useSelector } from "react-redux";
import { selectAuth, AuthStage } from "./authSlice";
import AuthStageLanding from "./stages/AuthStageLanding";
import AuthStageEmail from "./stages/AuthStageEmail";
import { pageStyle } from "../../app/constants/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        page: {
            ...pageStyle,
            display: "flex",
            flexDirection: "column",
        },
        root: {
            flex: "1",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
    })
);

const renderSwitch = (stage: AuthStage) => {
    switch (stage) {
        case AuthStage.LANDING:
            return <AuthStageLanding />;
        case AuthStage.EMAIL:
            return;
        default:
            return null;
    }
};

export default function Auth() {
    const classes = useStyles();
    const auth = useSelector(selectAuth);
    // const match = useRouteMatch();
    // const dispatch = useDispatch();

    // useEffect(() => {}, []);

    console.log("Auth State:", auth);

    return (
        <>
            <div className={classes.page}>
                <Nav />
                <div className={classes.root}>
                    <FormStepContainer>
                        {renderSwitch(auth.meta.stage)}
                    </FormStepContainer>
                </div>
            </div>
        </>
    );
}
