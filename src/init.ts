import { token, owners } from './Settings/settings';
import BotClient from './Client/BotClient';

const client: BotClient = new BotClient({ token, owners });
client.start();