import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FadeContainerProps {
    show: boolean;
}

const FadeContainer: React.FunctionComponent<FadeContainerProps> = (props) => {
    const animate = {
        opacity: Number(props.show),
    };

    const exit = {
        opacity: 0,
    };

    return (
        <AnimatePresence>
            <motion.div animate={animate} exit={exit}>
                {props.children}
            </motion.div>
        </AnimatePresence>
    );
};

export default FadeContainer;
