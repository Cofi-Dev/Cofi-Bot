import { Command } from "discord-akairo";
import { Message, MessageEmbed } from "discord.js";
const ytdl = require("ytdl-core");

export default class Stop extends Command {
  public constructor() {
    super("stop", {
      aliases: ["stop", "leave", "quit"],
      category: "Public Commands",
      description: {
        content: "Stop music",
        usage: "stop",
        examples: ["stop"],
      },
      ratelimit: 3,
    });
  }

  public async exec(message: Message): Promise<Message> {
    const voiceChannel = message.member.voice.channel;
    voiceChannel.leave();

    return message.util.send(
      new MessageEmbed().setTitle(`Music service`).setColor("RED").setDescription(`Leaving voice channel`)
    );
  }
}
