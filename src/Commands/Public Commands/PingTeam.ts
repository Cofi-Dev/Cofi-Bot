import { Command } from "discord-akairo"
import { Message, MessageEmbed } from "discord.js"
import { color } from "../../Settings"

export default class PingTeam extends Command {
  public constructor() {
    super("pingteam", {
      aliases: ["pingteam"],
      category: "Public Commands",
      description: {
        content: "Ping all team",
        usage: "pingteam",
        examples: ["pingteam"],
      },
      ratelimit: 3,
    })
  }

  public async exec(message: Message): Promise<Message> {
    return await message.util.send(
      new MessageEmbed().setTitle(`Ping Channel`).setDescription("@everyone ping").setColor(color)
    )
  }
}
