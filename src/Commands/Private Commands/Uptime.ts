import { Command } from "discord-akairo";
import { Message } from "discord.js";

export default class Uptime extends Command {
  public constructor() {
    super("uptime", {
      aliases: ["uptime"],
      category: "Private Commands",
      description: {
        content: "Check the online application time",
        usage: "uptime",
        examples: ["uptime"],
      },
      ratelimit: 3,
    });
  }

  private checkUptime(): Date {
    let now = new Date().getTime();

    return new Date(now);
  }

  public exec(message: Message): Promise<Message> {
    return message.util.send(`Working`);
  }
}
