import { Command } from "discord-akairo";
import { Message, MessageEmbed } from "discord.js";
const ytdl = require("ytdl-core");

export default class Play extends Command {
  public constructor() {
    super("play", {
      aliases: ["play", "p"],
      category: "Public Commands",
      description: {
        content: "Play some music",
        usage: "play [ url ]",
        examples: ["play"],
      },
      ratelimit: 3,
      args: [
        {
          id: "url",
          type: "url",
          match: "rest",
        },
      ],
    });
  }

  public async exec(message: Message, { url }: { url: String }): Promise<Message> {
    const voiceChannel = message.member.voice.channel;

    if (!voiceChannel) {
      return message.reply("please join a voice channel first");
    }

    if (!url) {
      return message.reply("please provide an url");
    }

    voiceChannel.join().then((connection) => {
      const stream = ytdl(`${url}`, { filter: "audioonly" });
      const dispatcher = connection.play(stream);
      dispatcher.on("finish", () => voiceChannel.leave());
    });

    // TODO: Refactor feedback
    return message.util.send(
      new MessageEmbed().setTitle(`Music service`).setColor("RED").setDescription(`Started player`)
    );
  }
}
