import { Command } from "discord-akairo"
import { Message, EmbedBuilder } from "discord.js"
import { prefix } from "../../Settings"

export default class Help extends Command {
  public constructor() {
    super("help", {
      aliases: ["Help", "h"],
      category: "Public Commands",
      description: {
        content: "Show all avaible commands.",
        usage: "help [ Command ]",
        example: ["help"],
      },
      ratelimit: 3,
      args: [
        {
          id: "command",
          type: "command",
          match: "rest",
        },
      ],
    })
  }

  public async exec(message: Message, { command }: { command: Command }): Promise<Message> {
    const commands = this.client.commanHandler.modules
    if (command) {
      return message.util.send(
        new EmbedBuilder()
          .setTitle(`Help | ${command.description.usage} `)
          .setColor("Blue")
          .setDescription(`${command.description.content}`)
      )
    } else {
      let messageEmbed = new EmbedBuilder().setTitle(`Commands`).setColor("Blue")
      commands.forEach((command) => {
        messageEmbed.addFields({
          name: `${command.aliases[0]}`,
          value: "```" + `${prefix}${command.description.usage}` + "```",
          inline: true,
        })
      })
      return message.util.send(messageEmbed)
    }
  }
}
