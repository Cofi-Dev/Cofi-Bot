import { Listener } from "discord-akairo";

export default class UnhandledRejection extends Listener {
  constructor() {
    super("unhandledRejection", {
      event: "unhandledRejection",
      emitter: "process",
    });
  }

  public exec(error): void {
    console.error(error);
    console.error("entra");
  }
}
