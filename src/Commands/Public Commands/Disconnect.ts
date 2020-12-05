import { Command } from "discord-akairo";
import { Message, MessageEmbed } from "discord.js";

export default class Disconnect extends Command {
  public constructor() {
    super("disconnect", {
      aliases: ["disconnect", "out"],
      category: "Public Commands",
      description: {
        content: "Disconnect bot from the voice channel",
        usage: "disconnect",
        examples: ["disconnect"],
      },
      ratelimit: 3,
    });
  }

  public async exec(message: Message) {
    const voiceChannel = message.member.voice.channel;
    voiceChannel.leave();
  }
}
