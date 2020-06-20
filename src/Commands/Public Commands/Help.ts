import { Command, CommandHandler } from "discord-akairo";
import { Message, MessageEmbed } from "discord.js";

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
          default: "All",
        },
      ],
    });
  }

  public async exec(message: Message, { command }: { command: Command }): Promise<Message> {
    return message.util.send(new MessageEmbed().setTitle(`Commands`).setColor("BLUE").setDescription("Hola"));
  }
}
