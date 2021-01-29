import { Command } from "discord-akairo"
import { Message, MessageEmbed } from "discord.js"
import { color } from "../../Settings"

export default class Posture extends Command {
  public constructor() {
    super("posture", {
      aliases: ["posture", "postura", "fixposture"],
      category: "Public Commands",
      description: {
        content: "Friendly reminder to improve chair posture.",
        usage: "posture",
        examples: ["posture"],
      },
      ratelimit: 3,
    })
  }

  public async exec(message: Message): Promise<Message> {
    return await message.util.send(
      new MessageEmbed().setTitle(`GUYS REMEMBER`).setDescription("@everyone fix ur posture").setColor(color)
    )
  }
}
