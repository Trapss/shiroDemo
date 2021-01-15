const {
  MessageEmbed,
} = require('discord.js');
const {
  inspect,
} = require('util');

const config = require('../config.json');

module.exports = {
  name: 'eval',
  description: 'Execute js code from within discord',
  category: 'developer',
  aliases: ['execute'],
  execute(client, msg, args) {
    const embed = new MessageEmbed()
      .setColor('36393E');

    if (config.devs.includes(msg.author.id)) {
      try {
        const code = args.join(' ');
        // eslint-disable-next-line no-eval
        const resultEval = eval(code);
        const toEval = typeof resultEval === 'string' ? resultEval : inspect(resultEval, {
          depth: 0,
        });
        embed.setDescription(toEval).setTitle('Result');
        msg.channel.send(embed);
      } catch (error) {
        embed.setDescription(error).setTitle('Error');
        msg.channel.send(embed);
      }
    } else {
      embed.setFooter('If you believe this to be an error, contact iTrqPss#8258').addField('Permission Error', 'You are not listed as a developer.');
      msg.channel.send(embed);
    }
  },
};
