const domainPing = require('domain-ping');
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
      .setFooter(`${moment.utc(client.readyAt).format('LLLL')} UTC`);

    domainPing('shiro.gg/api')
      .then((res) => {
        embed.addField('Discord API', `${Math.floor(client.ws.ping)}ms`, true);
        embed.addField('Shiro.gg API', `${Math.floor(res.ping_time)}ms`, true);
        msg.channel.send(embed);
      })
      .catch((error) => {
        embed.addField('Discord API', `${Math.floor(client.ws.ping)}ms`, true);
        embed.addField('Shiro.gg API', 'Unable to connect to Shiro.gg', false);
        msg.channel.send(embed);
      });
  },
};
