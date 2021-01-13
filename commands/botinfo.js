const {
    MessageEmbed
} = require('discord.js')
const Discord = require('discord.js')
const os = require('os')
const moment = require('moment')
module.exports = {
    name: 'botinfo',
    description: 'Get current bot info and statistics',
    category: "util",
    aliases: ['bi'],
    execute(client, msg) {
        const ramused = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)
        const ramtotal = ((os.totalmem() / 1024) / 1024).toFixed(0)

        const embed = new MessageEmbed()
        embed.setColor('36393E')
            .setTitle('Bot Information')
            .addField('RAM Usage (MB)', ramused + '/' + ramtotal, true)
            .addField('Discord JS Version', Discord.version, true)
            .addField('Node JS Version', process.versions.node, true)
            .addField('Ready At', moment.utc(client.readyAt).format('LLLL') + ' UTC', false)
            .addField('Minutes Up', Math.floor((process.uptime() % 3600) / 60), true)
            .addField('Hours Up', Math.floor((process.uptime() % 86400) / 3600), true)
            .addField('Days up', Math.floor((process.uptime() % 31536000) / 86400), true)
            .addField('Discord API Ping', Math.floor(client.ws.ping) + 'ms', true)
            .addField('Command Count', client.commands.size, true)
            .addField('Event Count', client.events.size, true)
            .addField('CPU Core Count', os.cpus().length, true)           
        msg.channel.send(embed)
    },
}