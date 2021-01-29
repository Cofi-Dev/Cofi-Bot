import { Command } from "discord-akairo"
import { Message, MessageEmbed } from "discord.js"
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
      userPermissions: ["ADMINISTRATOR", "MANAGE_GUILD"],
      ratelimit: 3,
    })
  }

  private checkUptime(): String {
    const readyAt = moment(this.client.readyAt.getTime())
    const now = moment(new Date())

    const ms = moment(now, "DD/MM/YYYY HH:mm:ss").diff(moment(readyAt, "DD/MM/YYYY HH:mm:ss"))
    const d = moment.duration(ms) as Duration
    return d.format("DD/MM/YYYY HH:mm:ss")
  }

  public exec(message: Message): Promise<Message> {
    return message.util.send(
      new MessageEmbed().setTitle(`🕓 Bot Uptime`).setColor(color).setDescription(`${this.checkUptime()}`)
    )
  }
}
