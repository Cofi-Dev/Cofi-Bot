import { Command } from "discord-akairo"
import { Message, EmbedBuilder } from "discord.js"
import { color } from "../../Settings"
import moment from "moment"
import "moment-duration-format"
import { Duration } from "../../Utils/Interfaces"

export default class Uptime extends Command {
  public constructor() {
    super("uptime", {
      aliases: ["Uptime"],
      category: "Private Commands",
      description: {
        content: "Check the online application time",
        usage: "uptime",
        examples: ["uptime"],
      },
      userPermissions: ["Administrator", "ManageGuild"],
      ratelimit: 3,
    })
  }

  private checkUptime(): String {
    const ms = moment(moment(new Date()), "DD/MM/YYYY HH:mm:ss").diff(
      moment(moment(this.client.readyAt.getTime()), "DD/MM/YYYY HH:mm:ss")
    )
    const d = moment.duration(ms) as Duration
    return d.format("DD/MM/YYYY HH:mm:ss")
  }

  public exec(message: Message): Promise<Message> {
    return message.util.send(
      new EmbedBuilder().setTitle(`🕓 Bot Uptime`).setColor(color).setDescription(`${this.checkUptime()}`)
    )
  }
}
