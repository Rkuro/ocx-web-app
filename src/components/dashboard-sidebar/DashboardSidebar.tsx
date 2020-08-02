import React, { useState } from "react";
import { useWidth, isMobile } from "../../utils/StyleFunctions";
import DashboardSidebarMobile from "./DashboardSidebarMobile";
import DashboardSidebarDesktop from "./DashboardSidebarDesktop";

export interface DashboardSidebarChildProps {
    collapsed: boolean;
    setCollapsed: (collapsed: boolean) => void;
}

const DashboardSidebarWrapper: React.FunctionComponent = (props) => {
    const width = useWidth();
    const [collapsed, setCollapsed] = useState(!isMobile(width));

    return isMobile(width) ? (
        <DashboardSidebarMobile
            collapsed={collapsed}
            setCollapsed={setCollapsed}
            {...props}
        />
    ) : (
        <DashboardSidebarDesktop
            collapsed={collapsed}
            setCollapsed={setCollapsed}
            {...props}
        />
    );
};

export default DashboardSidebarWrapper;
