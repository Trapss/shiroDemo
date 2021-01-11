module.exports = {
    name: 'ping',
    description: 'return ping to the apis used by the bot',
    category: "util",
    aliases: [],
    execute(client, msg) {
        const domainPing = require("domain-ping")
        const moment = require('moment')

        const {
            MessageEmbed
        } = require('discord.js')

        const embed = new MessageEmbed()
            .setColor('36393E')
            .setFooter(moment.utc(client.readyAt).format('LLLL') + ' UTC')

        domainPing('shiro.gg')
            .then((res) => {
                embed.addField("Discord API", `${Math.floor(client.ws.ping)}ms`, true)
                embed.addField("Shiro.gg API", `${Math.floor(res.ping_time)}ms`, true)
                msg.channel.send(embed)
            })
            .catch((error) => {
                console.error(error)
                embed.addField("Discord API", `${Math.floor(client.ws.ping)}ms`, true)
                embed.addField("Shiro.gg API", `Unable to connect to Shiro.gg`, false)
                msg.channel.send(embed)
            })
    }
}