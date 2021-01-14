import { Request } from "express";
import { AkairoClient } from "discord-akairo";
import { Guild } from "discord.js";
import fetch from "node-fetch";
import { owners } from "../../Settings/index";
import { APIUser, APIGuildMin } from "../Interfaces";

export default class OAuth2 {
  protected client: AkairoClient;
  protected guilds: Object;

  public constructor(client: AkairoClient) {
    this.client = client;
    this.guilds = new Object();
  }

  public async resolveInformation(request: Request): Promise<APIUser | null> {
    if (!request.session.token) return null;

    const userReq = await fetch("https://discord.com/api/users/@me", {
      headers: {
        Authorization: `Bearer ${request.session.token}`,
      },
    });

    const user = await userReq.json();
    if (!user.id) return null;

    if (!this.guilds[user.id]) {
      const guildsReq = await fetch("https://discord.com/api/users/@me/guilds", {
        headers: {
          Authorization: `Bearer ${request.session.token}`,
        },
      });

      const guildRes = await guildsReq.json();

      this.guilds[user.id] = guildRes;
      setTimeout(() => {
        delete this.guilds[user.id];
      }, 3e5);
    }

    return {
      id: user.id,
      username: user.username,
      disciminator: user.discriminator,
      avatar: user.avatar,
      guilds: this.guilds[user.id].map(
        (guild): APIGuildMin => {
          const g: Guild = this.client.guilds.cache.get(guild.id);
          return {
            id: guild.id,
            name: guild.name,
            icon: guild.icon,
            admin: g ? g.members.cache.get(user.id).permissions.has("MANAGE_GUILD") : guild.owner,
            invited: g ? true : false,
          };
        }
      ),
      admin: owners.includes(user.id),
    };
  }
}
