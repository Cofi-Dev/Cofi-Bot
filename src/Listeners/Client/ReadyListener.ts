import { Listener } from "discord-akairo";
const chalk = require('chalk');

export default class ReadyListener extends Listener {
  public constructor() {
    super("ready", {
      emitter: "client",
      event: "ready",
      category: "client",
    });
  }

  public exec(): void {
    console.log(chalk.keyword('green')(`🟢 ${this.client.user.tag} is now online.`));
  }
}
