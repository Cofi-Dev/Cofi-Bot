import { color } from "../../Settings/settings";
import { Command } from "discord-akairo";
import { Message, MessageEmbed } from "discord.js";
import { timeFormat } from "../../Utils/Services/TimeFormer";

export default class Info extends Command {
  public constructor() {
    super("Info", {
      aliases: ["Info"],
      category: "Moderation Commands",
      description: {
        content: "Info about member",
        usage: "info [ @member ]",
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
      console.log(member);
      return message.util.send(
        new MessageEmbed()
          .setColor(color)
          .setTitle(member.user.username)
          // .setURL('USER URL DASHBOARD')
          .setAuthor("Member Info", this.client.user.avatarURL())
          .setDescription("Some description here")
          .setThumbnail(member.user.avatarURL())
          .addFields(
            { name: "Member since", value: timeFormat(member.joinedTimestamp, "standart") },
            { name: "Inline field title", value: "Some value here", inline: false },
            { name: "Inline field title", value: "Some value here", inline: false }
          )
          .addField("Inline field title", "Some value here", true)
          .setTimestamp()
          .setFooter("Some footer text here", "https://i.imgur.com/wSTFkRM.png")
      );
    } else {
      return message.util.send(
        new MessageEmbed().setTitle(`User Info`).setColor("GREEN").setDescription(`Invalid user`)
      );
    }
  }
}
