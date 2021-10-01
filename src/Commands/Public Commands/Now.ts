import moment from "moment"
import { color } from "../../Settings"
import { Command } from "discord-akairo"
import { Message, MessageEmbed } from "discord.js"

export default class Now extends Command {
  public constructor() {
    super("now", {
      aliases: ["now"],
      category: "Public Commands",
      description: {
        content: "Get actual time",
        usage: "now",
        examples: ["now"],
      },
      ratelimit: 3,
    })
  }

  public async exec(message: Message): Promise<Message> {
    const currentTime = moment()
    return await message.util.send(
      new MessageEmbed().setTitle(`Actual time`).setDescription(moment(currentTime).format("hh:mm")).setColor(color)
    )
  }
}
