import { Router, Request, Response, Application } from "express";
import { AkairoClient } from "discord-akairo";
import { Guild } from "discord.js";
import { authorization } from "../../Settings";

export default class GuildRouter {
  protected app: Application;
  protected client: AkairoClient;
  protected router: Router;

  public constructor(app: Application, client: AkairoClient) {
    this.app = app;
    this.client = client;
    this.router = Router();

    this.app.use(this.router);

    this.router.get("/guild/:id", (req: Request, res: Response) => {
      const guild: Guild = this.client.guilds.cache.get(req.params.id);
      if (!guild) return res.status(404).send({ message: "Guild NOT FOUND" });

      return res.status(200).send({
        name: guild.name,
        owner: guild.owner !== null ? guild.owner.user.tag : null,
        members: guild.memberCount,
      });
    });

    this.router.post("/guild-name/:id", (req: Request, res: Response) => {
      // if (req.header.authorization!== authorization) return res.status(401).send({message: "Unauthorized"});

      const guild: Guild = this.client.guilds.cache.get(req.params.id);
      if (!guild) return res.status(404).send({ message: "Guild Not Found" });
      if (!req.body.name) return res.status(404).send({ message: "NO Guild name provided" });
      if (!guild.me.permissions.has("MANAGE_GUILD")) return res.status(401).send({ message: "Cannont manage Guild" });

      guild.setName(req.body.name);
      // CODE 201 - CREATED
      return res.status(201).send(req.body);
    });
  }
}
