import { Command } from "discord-akairo"
import { Message, EmbedBuilder } from "discord.js"
import { color } from "../../Settings"

export default class PingChannel extends Command {
  public constructor() {
    super("pingChannel", {
      aliases: ["pingChannel"],
      category: "Public Commands",
      description: {
        content: "Ping all team",
        usage: "pingChannel",
        examples: ["pingChannel"],
      },
      ratelimit: 3,
    })
  }

  public async exec(message: Message): Promise<Message> {
    return await message.util.send(
      new EmbedBuilder().setTitle(`Ping Channel`).setDescription("@everyone ping").setColor(color)
    )
  }
}
