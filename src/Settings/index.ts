const dotenv = require("dotenv");
dotenv.config();

/* Bot settings */
export const token: string = process.env.TOKEN;
export const authorization: string = process.env.API_TOKEN;
export const prefix: string = process.env.PREFIX ? process.env.PREFIX : "!";
export const owners: string[] = [];
export const color: string = "BLUE";

/* Dashboard settings */
export const clientID: string = process.env.clientID;
export const clientSecret: string = process.env.cliendSecret;
export const redirectUri: string = process.env.redirectUri;
export const callbackUri: string = process.env.callbackUri;
