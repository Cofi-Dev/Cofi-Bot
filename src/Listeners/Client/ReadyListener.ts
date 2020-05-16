import { Listener } from "discord-akairo";
const chalk = require("chalk");

export default class ReadyListener extends Listener {
  public constructor() {
    super("ready", {
      emitter: "client",
      event: "ready",
      category: "client",
    });
  }

  public exec(): void {
    console.log(chalk.bold.rgb(10, 100, 200)(`${this.client.user.tag}`));
    console.log(`---------------------------------------------------------`);
    console.log(`Version: Alpha 0.0.1`);
    console.log(chalk.keyword("yellow")(`Ready at: ${this.client.readyAt}`));
    console.log(chalk.keyword("green")(`🟢 ${this.client.user.tag} is now online.`));
  }
}
