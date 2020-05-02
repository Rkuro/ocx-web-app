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

app.configure(
    feathers.rest(process.env["REACT_APP_API_ENDPOINT_URL"]).axios(axios)
);
app.configure(feathers.authentication({ ...config.auth }));

export const userService = app.service("users");

export default app;
