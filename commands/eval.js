module.exports = {
    name: 'eval',
    description: 'execute js',
    category: "developer",
    aliases: ['execute'],
    execute(client, msg, args) {
        const {
            MessageEmbed
        } = require('discord.js')
        const {
            inspect
        } = require('util')

        const config = require("../config.json")

        const embed = new MessageEmbed()
            .setColor('36393E')

        if (config.devs.includes(msg.author.id)) {
            try {
                const code = args.join(' ')
                let resultEval = eval(code)
                let toEval = typeof resultEval === 'string' ? resultEval : inspect(resultEval, {
                    depth: 0
                })
                embed.setDescription(toEval).setTitle('Result')
                msg.channel.send(embed)
            } catch (error) {
                embed.setDescription(error).setTitle('Error')
                msg.channel.send(embed)
            }
        } else {
            embed.setFooter('If you believe this to be an error, contact iTrqPss#8258').addField('Permission Error', 'You are not listed as a developer.')
            msg.channel.send(embed)
        }
    },
}