import { Command } from "discord-akairo";
import { Message, MessageEmbed, Client } from "discord.js";

export default class Ping extends Command {
  public constructor() {
    super("ping", {
      aliases: ["ping"],
      category: "Public Commands",
      description: {
        content: "Check the latency of the ping to server",
        usage: "ping",
        examples: ["ping"],
      },
      ratelimit: 3,
    });
  }

  public async exec(message: Message): Promise<Message> {
    const sent = await message.util.send("Waiting response...");
    const timeDiff = Math.abs(<any>(sent.editedAt || sent.createdAt) - <any>(message.editedAt || message.createdAt));
    return message.util.send(
      new MessageEmbed()
        .setAuthor("Ping", this.client.user.avatarURL())
        .setColor("GREEN")
        // Old style
        // .setDescription(
        //   `🔂 **RTT**: ${timeDiff} ms\n
        // 💟 **Heartbeat**: ${Math.round(this.client.ws.ping)} ms`
        // )
        .addFields(
          { name: "🔂 **RTT**", value: `${timeDiff} ms`, inline: true },
          { name: "💟 **Heartbeat**", value: `${Math.round(this.client.ws.ping)} ms`, inline: true }
        )
    );
  }
}
