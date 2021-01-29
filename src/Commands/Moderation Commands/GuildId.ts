import { color } from "../../Settings"
import { Command } from "discord-akairo"
import { Message, MessageEmbed } from "discord.js"

export default class GuildId extends Command {
  public constructor() {
    super("GuildId", {
      aliases: ["guildid", "gid"],
      category: "Moderation Commands",
      description: {
        content: "Show Guild ID",
        usage: "guildid",
        examples: ["guildid"],
      },
      userPermissions: ["ADMINISTRATOR", "MANAGE_GUILD"],
      ratelimit: 3,
    })
  }

  public async exec(message: Message): Promise<Message> {
    return message.util.send(
      new MessageEmbed().addFields({
        name: "Guild ID",
        value: message.guild.id,
        inline: true,
      })
    )
  }
}
