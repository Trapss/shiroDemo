const { MessageEmbed } = require('discord.js');
const moment = require('moment');

const config = require('../config.json');

module.exports = async (client) => {
  const embed = new MessageEmbed();

  try {
    embed.setColor('36393E')
      .setTitle(`${client.user.username} | Client Started`)
      .setFooter(`Ready at: ${moment.utc(client.readyAt).format('LLLL')} UTC`);
    await client.channels.forge(config.startLogChannel).send(embed);
  // eslint-disable-next-line no-empty
  } catch (e) {}

  client.user.setActivity(`for ${config.prefix}help`, { type: 'WATCHING' });
};
