const dotenv = require("dotenv");
dotenv.config();

export const token: string = process.env.TOKEN;
export const authorization: string = process.env.API_TOKEN;
export const prefix: string = process.env.PREFIX ? process.env.PREFIX : "!";
export const owners: string[] = [];
export const color: string = "BLUE";
