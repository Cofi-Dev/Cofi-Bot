import { Command } from "discord-akairo";
import { Message, MessageEmbed } from "discord.js";
import { color } from "../../Settings";

export default class Uptime extends Command {
  public constructor() {
    super("uptime", {
      aliases: ["Uptime"],
      category: "Private Commands",
      description: {
        content: "Check the online application time",
        usage: "uptime",
        examples: ["uptime"],
      },
      ratelimit: 3,
    });
  }

  // TODO refactor this function is pretty weird imo...
  private checkUptime(): String {
    let readyAt = this.client.readyAt.getTime();
    let now = new Date().getTime();
    let distance = Math.abs(readyAt - now);
    const hours = Math.floor(distance / 3600000);
    distance -= hours * 3600000;
    const minutes = Math.floor(distance / 60000);
    distance -= minutes * 60000;
    const seconds = Math.floor(distance / 1000);
    return `${hours}:${("0" + minutes).slice(-2)}:${("0" + seconds).slice(-2)}`;
  }

  public exec(message: Message): Promise<Message> {
    return message.util.send(
      new MessageEmbed().setTitle(`Bot Uptime`).setColor(color).setDescription(`🕓${this.checkUptime()}`)
    );
  }
}
