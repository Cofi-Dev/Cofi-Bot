import { Command } from "discord-akairo";
import { Message, MessageEmbed } from "discord.js";
import { color } from "../../Settings";

const ytdl = require("ytdl-core");

export default class Play extends Command {
  public constructor() {
    super("play", {
      aliases: ["play", "p"],
      category: "Public Commands",
      description: {
        content: "Play some music",
        usage: "play [url]",
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
    const permissions = voiceChannel.permissionsFor(message.client.user);
    const queue = new Map();

    if (!voiceChannel) return message.reply("Please join a voice channel first");
    if (!url) return message.reply("Please provide an url");
    if (!permissions.has("CONNECT") || !permissions.has("SPEAK"))
      return message.channel.send("I need the permissions to join and speak in your voice channel!");

    const args = message.content.split(" ");
    const songInfo = await ytdl.getInfo(args[1]);
    const song = {
      title: songInfo.videoDetails.title,
      url: songInfo.videoDetails.video_url,
    };

    voiceChannel.join().then((connection) => {
      let stream = ytdl(`${url}`, { filter: "audioonly" });
      const dispatcher = connection.play(stream);
      dispatcher.on("finish", () => voiceChannel.leave());
    });

    return message.util.send(
      new MessageEmbed()
        .setTitle(`Now playing`)
        .setColor(color)
        .setDescription(`[${song.title}](${song.url}) [${message.author}]`)
    );
  }
}
