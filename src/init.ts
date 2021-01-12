import { token, owners } from "./Settings";
import BotClient from "./Client/BotClient";

const client: BotClient = new BotClient({ token, owners });
console.log(process.env)
client.start();
