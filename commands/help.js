module.exports = {
    name: 'help',
    description: 'Bot help',
    category: "util",
    aliases: [],
    execute(client, msg) {

        const {
            MessageEmbed
        } = require('discord.js')

        // api commands
        const endpoints = require('./endpoints')
        const api = require('./api')

        // util commands
        const ping = require('./ping')
        const info = require('./info')

        // dev commands
        const eval = require('./eval')

        const embed = new MessageEmbed()
            .setColor('36393E')
            .setFooter('https://shiro.gg/')
            .addField("API Commands", `endpoints - ${endpoints.description}\napi {endpoint} - ${api.description}`)
            .addField("Utility Commands", `ping - ${ping.description}`)
            .addField("Developer Commands", `eval {code} - ${eval.description}\ninfo - ${info.description}`)
        msg.channel.send(embed)

    }
}