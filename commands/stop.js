const { canModifyQueue } = require("../util/EvobotUtil");


module.exports = {
  name: "stop",
  description: "Stops the music",
  execute(message) {
    if (!canModifyQueue(message.member)) return;

    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.reply("There is nothing playing.").catch(console.error);

    queue.songs = [];
    queue.connection.dispatcher.end();
    queue.textChannel.send(`${message.author} ⏹ stopped the music!`).catch(console.error);
  }
};
