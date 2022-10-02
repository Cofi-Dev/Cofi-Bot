import { Command } from "discord-akairo"
import { Message } from "discord.js"

export default class Ping extends Command {
  public constructor() {
    super("version", {
      aliases: ["Version"],
      category: "Private Commands",
      description: {
        content: "Return bot version",
        usage: "version",
        examples: ["version"],
      },
      userPermissions: ["Administrator", "ManageGuild"],
      ratelimit: 3,
    })
  }

  public async exec(message: Message): Promise<Message> {
    return message.util.send(
      `Version: ${process.env.npm_package_version}\nEnviroment: ${process.env.npm_lifecycle_event}`
    )
  }
}
