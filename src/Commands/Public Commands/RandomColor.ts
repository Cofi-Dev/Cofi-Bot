import moment from "moment"
import { Command } from "discord-akairo"
import { Message, EmbedBuilder } from "discord.js"

export default class Now extends Command {
  public constructor() {
    super("randomColor", {
      aliases: ["random_color"],
      category: "Public Commands",
      description: {
        content: "Get random color",
        usage: "random_color",
        examples: ["random_color"],
      },
      ratelimit: 3,
    })
  }

  public async exec(message: Message): Promise<Message> {
    return await message.util.send(
      new EmbedBuilder().setTitle(`Your random color is`).setDescription('#'+Math.random().toString(16).substr(2,6)
    )
  }
}
