/**
 * Run any functions on app startup
 */
import logger from "../logger";
import { handleConnectionUpdate } from "../utils/BrowserFunctions";

const initializeConnectionChangeHandler = () => {
    const nav = window.navigator as any;
    nav.connection.onchange = handleConnectionUpdate;
};

export default async function init(): Promise<void> {
    logger.info("App Startup - running initialization functions");
    initializeConnectionChangeHandler();
}
