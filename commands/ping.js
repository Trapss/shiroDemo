const moment = require('moment');

const {
  MessageEmbed,
} = require('discord.js');
module.exports = {
  name: 'ping',
  description: 'Return ping to Discord and to Shiro',
  category: 'util',
  aliases: [],
  execute(client, msg) {
    const embed = new MessageEmbed()
      .setColor('36393E')
      .setFooter(`${moment.utc(client.readyAt).format('LLLL')} UTC`)
      .addField('Discord API', `${Math.floor(client.ws.ping)}ms`, true);
    
    msg.channel.send(embed);
       
  },
};
