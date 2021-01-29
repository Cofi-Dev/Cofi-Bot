import { Listener } from "discord-akairo"
const chalk = require("chalk")

export default class UnhandledRejection extends Listener {
  constructor() {
    super("unhandledRejection", {
      event: "unhandledRejection",
      emitter: "process",
    })
  }

  public exec(error): void {
    console.log(chalk.keyword("red")(`🔴 An error has occurred: ${error}`))
  }
}
