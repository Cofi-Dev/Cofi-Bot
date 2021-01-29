import { Router, Request, Response, Application } from "express"
import { AkairoClient } from "discord-akairo"
import fetch from "node-fetch"
import session from "express-session"
import OAuth2 from "../../Utils/Services/OAuth2"
import { authorization, callbackUri, clientID, redirectUri, clientSecret } from "../../Settings"

declare module "express-session" {
  interface Session {
    token: string
  }
}

export default class OAuth2Router {
  protected app: Application
  protected client: AkairoClient
  protected router: Router
  protected oauth: OAuth2

  public constructor(app: Application, client: AkairoClient, oauth: OAuth2) {
    this.app = app
    this.client = client
    this.router = Router()
    this.oauth = oauth

    this.app.use(
      session({
        secret: authorization,
        resave: false,
        saveUninitialized: false,
        cookie: {
          secure: "auto",
          sameSite: false,
          httpOnly: false,
          maxAge: 6048e5,
        },
      })
    )

    this.app.use(this.router)

    this.router.get("/oauth/login", (req: Request, res: Response) => {
      return res.redirect(
        `https://discord.com/api/oauth2/authorize?
        client_id=${clientID}&
        redirect_uri=${encodeURIComponent(callbackUri)}&
        response_type=code&
        scope=${encodeURIComponent("identify guilds")}`
      )
    })

    this.router.get("/oauth/logout", (req: Request, res: Response) => {
      req.session.destroy(null)
      return res.redirect(redirectUri)
    })

    this.router.get("/oauth/callback", (req: Request, res: Response) => {
      fetch("https://discord.com/api/oauth2/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-forms-urlencoded",
        },
        //@ts-ignore
        body: new URLSearchParams({
          client_id: clientID,
          client_secret: clientSecret,
          grant_type: "authorization_code",
          code: req.query.code,
          redirect_uri: callbackUri,
          scope: "identify",
        }),
      })
        .then((response) => response.json())
        .then((response) => {
          req.session.token = response["access_token"]
          res.redirect(redirectUri)
        })
    })

    this.router.get("/oauth/details", async (req: Request, res: Response) => {
      const details = await this.oauth.resolveInformation(req)
      return res.status(200).send(details)
    })
  }
}
