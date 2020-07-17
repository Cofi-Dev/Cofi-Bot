import { Command } from "discord-akairo";
import { Message, MessageEmbed, User } from "discord.js";

export default class Info extends Command {
  public constructor() {
    super("Info", {
      aliases: ["Info"],
      category: "Moderation Commands",
      description: {
        content: "Info about member",
        usage: "info @member",
        examples: ["info"],
      },
      ratelimit: 3,
      args: [
        {
          id: "member",
          type: "member",
          match: "rest",
        },
      ],
    });
  }

  public async exec(message: Message, { member }: { member }): Promise<Message> {
    if (member) {
      console.log(member.GuildMember);
      return message.util.send(
        new MessageEmbed().setTitle(`Bot Uptime`).setColor("GREEN").setDescription(`Info about member...`)
      );
    } else {
      return message.util.send(
        new MessageEmbed().setTitle(`Bot Uptime`).setColor("GREEN").setDescription(`Invalid user`)
      );
    }
  }
}
