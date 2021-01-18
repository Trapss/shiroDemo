const {
  MessageEmbed,
} = require('discord.js');

const epts = require('../endpoints.json');

module.exports = {
  name: 'endpoints',
  description: 'List of the shiro.gg api endpoints',
  category: 'api',
  aliases: [],
  execute(client, msg) {
    const embed = new MessageEmbed()
      .setColor('36393E')
      .setFooter('https://shiro.gg/')
      .addField('SFW /images/ Endpoints', epts.sfw.join('\n'))
      .addField('NSFW /images/nsfw/ Endpoints', epts.nsfw.join('\n'));

    msg.channel.send(embed);
  },
};
