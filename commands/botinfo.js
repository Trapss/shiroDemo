const {
    MessageEmbed
} = require('discord.js')
const Discord = require('discord.js')
const os = require('os')
const moment = require('moment')
const domainPing = require("domain-ping")
module.exports = {
    name: 'botinfo',
    description: 'Get current bot info and statistics',
    category: "util",
    aliases: ['bi'],
    execute(client, msg) {
        const ramused = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)
        const ramtotal = ((os.totalmem() / 1024) / 1024).toFixed(0)

        try {
            domainPing('shiro.gg')
                .then((res) => {
                    const cp = res.ping_time;
                }).catch((error) => {
                    console.error(error);
                });
        } catch (e) {
            console.error(e)
        }

        const embed = new MessageEmbed()
        embed.setColor('36393E')
            .setTitle('Bot Information')
            .addField('RAM Usage (MB)', ramused + '/' + ramtotal, true)
            .addField('Discord JS Version', Discord.version, true)
            .addField('Node JS Version', process.versions.node, true)
            .addField('Ready At', moment.utc(client.readyAt).format('LLLL') + ' UTC', false)
            .addField('Discord API Ping', Math.floor(client.ws.ping) + 'ms', true)
        if (cp) {
            embed.addField('Shiro API Ping', cp + 'ms', true)
        }
        embed.addField('Days up', Math.floor((process.uptime() % 31536000) / 86400), true)
            .addField('Hours Up', Math.floor((process.uptime() % 86400) / 3600), true)
            .addField('Minutes Up', Math.floor((process.uptime() % 3600) / 60), true)
            .addField('Command Count', client.commands.size, true)
            .addField('CPU Core Count', os.cpus().length, true)
            .addField('Event Count', client.events.size, true)
        msg.channel.send(embed)
    },
}