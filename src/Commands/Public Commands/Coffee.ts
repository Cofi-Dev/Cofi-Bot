import { Command } from "discord-akairo";
import { MessageReaction } from "discord.js";
import { Message, MessageEmbed, ReactionCollector } from "discord.js";
import { color } from "../../Settings";

export default class Coffee extends Command {
  public constructor() {
    super("coffee", {
      aliases: ["coffee", "cafe", "cafe?"],
      category: "Public Commands",
      description: {
        content: 'Take a poll to have a "Cafe moment"',
        usage: "coffee",
        examples: ["coffee"],
      },
      ratelimit: 3,
    });
  }

  public async exec(message: Message): Promise<Message> {
    const sent = await message.util.send(
      new MessageEmbed().setTitle(`𝒞𝒶𝒻𝑒?`).setImage("https://i.imgur.com/ukv7zKM.jpeg")
    );

    const addReactions = (message) => {
      message.react("👍");
      message.react("👎");
    };

    const removeReactions = (message) => {
      message.reactions.removeAll();
    };

    const getUsersReactions = (reactionCollection) => {
      let userList: Array<String> = [];
      let userReactions = Array.from(reactionCollection).reduce(
        (userReactions, [key, value]) => Object.assign(userReactions, { [key]: value }),
        {}
      );
      Object.keys(userReactions).forEach(function (key) {
        userList.push(userReactions[key].username);
      });
      return userList.join(",\r\n");
    };

    const countVotes = (upVote: MessageReaction, downVote: MessageReaction) => {
      const finalMessage = new MessageEmbed().setTitle(`𝒞𝒶𝒻𝑒?`).setColor(color);

      if (downVote.count > upVote.count) {
        return message.util.send(finalMessage.setDescription(`Cafe? Cancelado...`));
      } else {
        console.log(getUsersReactions(upVote.users.cache));

        return message.util.send(
          finalMessage
            .setDescription(`Hora del Cafe familia`)
            .addFields(
              { name: "👍", value: `${getUsersReactions(upVote.users.cache)}`, inline: true },
              { name: "👎", value: `${getUsersReactions(downVote.users.cache)}`, inline: true }
            )
        );
      }
    };

    addReactions(sent);

    setTimeout(() => {
      const upVote = sent.reactions.cache.get("👍");
      const downVote = sent.reactions.cache.get("👎");

      countVotes(upVote, downVote);
      removeReactions(sent);
    }, 3000);

    return sent;
  }
}
