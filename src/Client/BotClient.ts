import { AkairoClient, CommandHandler, ListenerHandler } from "discord-akairo";
import { Message } from "discord.js";
import { BotOptions } from "../Utils/Interfaces/";
import { join } from "path";
import { prefix, owners } from "../Settings";

declare module "discord-akairo" {
  interface AkairoClient {
    commanHandler: CommandHandler;
    listenerHandler: ListenerHandler;
  }
}

export default class BotClient extends AkairoClient {
  public config: BotOptions;
  public listenerHandler: ListenerHandler = new ListenerHandler(this, {
    directory: join(__dirname, "..", "Listeners"),
  });
  public commanHandler: CommandHandler = new CommandHandler(this, {
    directory: join(__dirname, "..", "Commands"),
    prefix: prefix,
    allowMention: true,
    handleEdits: true,
    commandUtil: true,
    commandUtilLifetime: 3e5,
    defaultCooldown: 6e4,
    argumentDefaults: {
      prompt: {
        modifyStart: (_: Message, str: string): string => `${str}\n\nType \`cancel\` to cancel the command...`,
        modifyRetry: (_: Message, str: string): string => `${str}\n\nType \`cancel\` to cancel the command...`,
        timeout: "You took to long, the command has been cancelled...",
        ended: "You exceeded the maximum amount of tries, this command has now been cancelled...",
        cancel: "This command has been cancelled",
        retries: 3,
        time: 3e4,
      },
      otherwise: "",
    },
    ignorePermissions: owners,
  });

  public constructor(config: BotOptions) {
    super({
      ownerID: owners,
    });
    this.config = config;
  }

  private async _init(): Promise<void> {
    this.commanHandler.useListenerHandler(this.listenerHandler);
    this.listenerHandler.setEmitters({
      commanHandler: this.commanHandler,
      listenerHandler: this.listenerHandler,
      process,
    });

    this.commanHandler.loadAll();
    this.listenerHandler.loadAll();
  }

  public async start(): Promise<string> {
    await this._init();
    return this.login(this.config.token);
  }
}
