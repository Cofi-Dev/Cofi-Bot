import { Command } from "discord-akairo"
import { Message, MessageEmbed } from "discord.js"

export default class Remind extends Command {
  public constructor() {
    super("remind", {
      aliases: ["Remind"],
      category: "Public Commands",
      description: {
        content: "Remind a message.",
        usage: "remind [ Text ] [ Frequency ] [ Time ]",
        example: ["help"],
      },
      ratelimit: 3,
      args: [
        {
          id: "text",
          type: String,
          match: "rest",
        },
        {
          id: "frequency",
          type: String,
          match: "rest",
        },
        {
          id: "time",
          type: String,
          match: "rest",
        },
      ],
    })
  }

  public async exec(message: Message, text: String): Promise<Message> {
    return message.util.send(
      new MessageEmbed().setTitle(`Remind`).setColor("RANDOM").addFields({
        name: "Text",
        value: text,
        inline: true,
      })
    )
  }
}
