import React from "react";
import { PageContainer } from "../../components";
import DashboardRouter from "../../routers/DashboardRouter";

const Dashboard: React.FunctionComponent = () => {
    return (
        <>
            <PageContainer>
                <DashboardRouter />
            </PageContainer>
        </>
    );
};

export default Dashboard;
