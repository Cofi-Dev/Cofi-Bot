import { createServer } from "http";
import { AkairoClient } from "discord-akairo";
import express, { Application } from "express";
import cors from "cors";
const chalk = require("chalk");

import GuildRouter from "./Routers/GuildRouter";

export default class API {
  protected client: AkairoClient;
  protected server: Application;

  public constructor(client: AkairoClient) {
    this.client = client;
  }

  public start(): void {
    this.server = express();
    this.server.use(express.json());
    this.server.use(
      cors({
        origin: true,
        credential: true,
      })
    );

    /* LOAD ENDPOINT MODULES */
    new GuildRouter(this.server, this.client);

    createServer(this.server).listen(process.env.PORT || 8888, (): void =>
      console.log(
        chalk.keyword("green")(`API Service is now online. (PORT: ${process.env.PORT ? process.env.PORT : 8888})`)
      )
    );
  }
}
