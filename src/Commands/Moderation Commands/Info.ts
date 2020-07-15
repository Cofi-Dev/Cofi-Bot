import { Command } from "discord-akairo";
import { Message, MessageEmbed } from "discord.js";

export default class Info extends Command {
  public constructor() {
    super("Info", {
      aliases: ["Info"],
      category: "Moderation Commands",
      description: {
        content: "Info about user",
        usage: "info",
        examples: ["info"],
      },
      ratelimit: 3,
    });
  }
}