import { Command } from "discord-akairo";
import { Message, MessageEmbed, Client } from "discord.js";

export default class Help extends Command {
  public constructor() {
    super("help", {
      aliases: ["help", "h"],
      category: "Public Commands",
      description: {
        content: "Show all avaible commands.",
        usage: "help",
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
    });
  }

  public async exec(message: Message, { command }: { command: Command }): Promise<Message> {
    const commands = this.client.commanHandler.modules;
    if (command) {
      return message.util.send(
        new MessageEmbed()
          .setTitle(`Help | ${command.description.usage} `)
          .setColor("BLUE")
          .setDescription(`${command.description.content}`)
      );
    } else {
      let messageEmbed = new MessageEmbed().setTitle(`Commands`).setColor("BLUE");
      commands.forEach((index) => {
        // console.log(index.aliases)
        messageEmbed.addFields({ name: `${index.aliases[0]}`, value: `${index.description}`, inline: true });
      });
      return message.util.send(messageEmbed);
    }
  }
}
