import { Command } from "discord-akairo";
import { Message, MessageEmbed } from "discord.js";
const ytdl = require("ytdl-core");

export default class Skip extends Command {
  public constructor() {
    super("skip", {
      aliases: ["skip", "next"],
      category: "Public Commands",
      description: {
        content: "Skip song",
        usage: "skip",
        examples: ["skip"],
      },
      ratelimit: 3,
    });
  }

  public async exec(message: Message): Promise<Message> {
    const voiceChannel = message.member.voice.channel;
    voiceChannel.leave();

    return message.util.send(
      new MessageEmbed().setTitle(`Music service`).setColor("RED").setDescription(`Skip`)
    );
  }
}
