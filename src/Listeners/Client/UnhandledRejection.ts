import { Listener } from "discord-akairo"
import chalk from "chalk"

export default class UnhandledRejection extends Listener {
  constructor() {
    super("unhandledRejection", {
      event: "unhandledRejection",
      emitter: "process",
    })
  }

  public exec(error): void {
    console.log(chalk.keyword("red")(`🔴 ERROR: ${error}`))
  }
}
