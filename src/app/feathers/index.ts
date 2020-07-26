/**
 * const feathers = require("@feathersjs/feathers");
const rest = require("@feathersjs/rest-client");

const app = feathers();

// Connect to the same as the browser URL (only in the browser)
const restClient = rest();

// Connect to a different URL
const restClient = rest("http://feathers-api.com")

// Configure an AJAX library (see below) with that client 
app.configure(restClient.fetch(window.fetch));

// Connect to the `http://feathers-api.com/messages` service
const messages = app.service("messages");
 */
import feathers from "@feathersjs/client";
import axios from "axios";
import config from "./config.json";

const app = feathers();

const getEndpointFromEnvironment = (): string | undefined => {
    switch (process.env.NODE_ENV) {
        case "development":
            return process.env["REACT_APP_API_ENDPOINT_DEV"];
        case "production":
            return process.env["REACT_APP_API_ENDPOINT_PROD"];
    }
};

app.configure(feathers.rest(getEndpointFromEnvironment()).axios(axios));
app.configure(feathers.authentication({ ...config.auth }));

export const userService = app.service("users");

export default app;
