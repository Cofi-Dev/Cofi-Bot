import { createServer } from "http"
import { AkairoClient } from "discord-akairo"
import express, { Application } from "express"
import cors from "cors"
import Oauth2 from "../Utils/Services/OAuth2"
const chalk = require("chalk")

import OAuth2Router from "./Routers/OAuthRouter"
import GuildRouter from "./Routers/GuildRouter"

export default class API {
  protected client: AkairoClient
  protected server: Application
  protected oauth: Oauth2

  public constructor(client: AkairoClient) {
    this.client = client
    this.oauth = new Oauth2(this.client)
  }

  public start(): void {
    this.server = express()
    this.server.use(express.json())
    this.server.use(
      cors({
        origin: true,
        credential: true,
      })
    )

    /* LOAD ENDPOINT MODULES */
    new OAuth2Router(this.server, this.client, this.oauth)
    new GuildRouter(this.server, this.client)

    createServer(this.server).listen(process.env.PORT || 8888, (): void =>
      console.log(
        chalk.keyword("green")(`API Service is now online. (PORT: ${process.env.PORT ? process.env.PORT : 8888})`)
      )
    )
  }
}
