import { color } from "../../Settings"
import { Command } from "discord-akairo"
import { Message, EmbedBuilder } from "discord.js"
import { timeFormat, checkUserRol, checkUserPermission } from "../../Utils/Services"

export default class Info extends Command {
  public constructor() {
    super("Info", {
      aliases: ["Info", "i"],
      category: "Moderation Commands",
      description: {
        content: "Info about member",
        usage: "info [@member]",
        examples: ["info"],
      },
      userPermissions: ["Administrator", "ManageGuild"],
      ratelimit: 3,
      args: [
        {
          id: "member",
          type: "member",
          match: "rest",
        },
      ],
    })
  }

  public async exec(message: Message, { member }: { member }): Promise<Message> {
    if (member) {
      return message.util.send(
        new MessageEmbed()
          .setColor(color)
          .setTitle(`${member.user.username}#${member.user.discriminator}`)
          .setAuthor(`Member Info`)
          .setThumbnail(member.user.avatarURL())
          .addFields(
            {
              name: "User roles",
              value: checkUserRol([...message.guild.roles.cache.array()], [...member._roles]),
              inline: true,
            },
            {
              name: "Server Permissions",
              value: checkUserPermission([...member.permissions.toArray()]),
              inline: true,
            },
            {
              name: "Server Infractions",
              value: "Soon...",
              inline: true,
            }
          )
          .addFields(
            {
              name: "Last Message",
              value: "Soon...",
              inline: true,
            },
            {
              name: "Joined Server at",
              value: timeFormat(member.joinedTimestamp, "standart"),
              inline: true,
            },
            {
              name: "Joined Discord at",
              value: timeFormat(member.joinedTimestamp, "standart"),
              inline: true,
            }
          )
          .setTimestamp()
          .setFooter(`Requested by ${message.author.username}`, message.author.avatarURL())
      )
    } else {
      return message.util.send(new EmbedBuilder().setTitle(`User Info`).setColor("Blue").setDescription(`Invalid user`))
    }
  }
}
