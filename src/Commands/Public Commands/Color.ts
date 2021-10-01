import moment from "moment"
import { color } from "../../Settings"
import { Command } from "discord-akairo"
import { Message, MessageEmbed } from "discord.js"

export default class Color extends Command {
  public constructor() {
    super("color", {
      aliases: ["color"],
      category: "Public Commands",
      description: {
        content: "Get actual time",
        usage: "color",
        examples: ["color"],
      },
      ratelimit: 3,
    })
  }

  public async exec(message: Message): Promise<Message> {
    const currentTime = moment()
    return await message.util.send(
      new MessageEmbed().setTitle(`Actual colro setup`).setDescription(color).setColor(color)
    )
  }
}
