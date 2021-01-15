const {
  MessageEmbed,
} = require('discord.js');
const moment = require('moment');

module.exports = {
  name: 'botinfo',
  description: 'Get current server info and statistics',
  category: 'util',
  aliases: ['si'],
  execute(client, msg) {
    const g = msg.guild;

    const embed = new MessageEmbed()
      .setColor('36393e')
      .setTitle(g.name)
      .setFooter(`ID: ${g.id}`)
      .addField('Created At', `${moment.utc(g.createdAt).format('LLLL')} UTC`)
      .addField('Owner', g.owner);
    msg.channel.send(embed);
  },
};
