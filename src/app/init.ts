/**
 * Run any functions on app startup
 */
import logger from "../logger";

export default async function init(): Promise<void> {
    logger.info("App Startup - running initialization functions");
}
