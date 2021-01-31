import { Listener } from "discord-akairo"
import API from "../../API/API"
const chalk = require("chalk")
const { version } = require("../../../package.json")

export default class ReadyListener extends Listener {
  public constructor() {
    super("ready", {
      emitter: "client",
      event: "ready",
      category: "client",
    })
  }

  public exec(): void {
    new API(this.client).start()
    console.log(chalk.bold.rgb(10, 100, 200)(`Enviroment: ${process.env.NODE_ENV}`))
    console.log(chalk.bold.rgb(10, 100, 200)(`${this.client.user.tag}`))
    console.log(chalk.bold.rgb(10, 100, 200)(`Version: Alpha ${version}`))
    console.log(chalk.keyword("yellow")(`Ready at: ${this.client.readyAt.toLocaleString()}`))
    console.log(chalk.keyword("green")(`Services is now online.`))
  }
}
