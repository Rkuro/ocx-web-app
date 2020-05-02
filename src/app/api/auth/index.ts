import app from "../../feathers";
import logger from "../../../logger";
import {
    AuthenticationResult,
    AuthenticationRequest,
} from "@feathersjs/authentication/lib";

const authenticate = async (
    request: AuthenticationRequest
): Promise<AuthenticationResult> => {
    try {
        return app.authenticate(request);
    } catch (e) {
        logger.error(`Error calling authenticate: ${e}`);
        return Promise.reject(e);
    }
};

/**
 * Returns false if there was an error during authentication
 */
const reAuthenticate = async (): Promise<AuthenticationResult> => {
    try {
        return app.reAuthenticate();
    } catch (e) {
        logger.error(`Error calling reAuthenticate: ${e}`);
        return Promise.reject(e);
    }
};

export { authenticate, reAuthenticate };
