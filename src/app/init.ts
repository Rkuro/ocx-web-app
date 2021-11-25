/**
 * Run any functions on app startup
 */
import logger from "../logger";
import { handleConnectionUpdate } from "../utils/BrowserFunctions";

const initializeConnectionChangeHandler = () => {
    // need the explicit any so that we can use the experimental onchange function
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const nav = window.navigator as any;
    nav.connection.onchange = handleConnectionUpdate;
};

export default async function init(): Promise<void> {
    logger.info("App Startup - running initialization functions");
    initializeConnectionChangeHandler();
}
