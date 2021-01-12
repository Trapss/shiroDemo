module.exports = {
    name: 'endpoints',
    description: 'List of the shiro.gg api endpoints',
    category: "api",
    aliases: [],
    execute(client, msg) {

        const {
            MessageEmbed
        } = require('discord.js')

        const embed = new MessageEmbed()
            .setColor('36393E')
            .setFooter('https://shiro.gg/api')
            .addField('SFW /images Endpoints', 'avatars\nblush\nhug\nkiss\nneko\nnom\npat\npoke\npout\nslap\nsmug\ntickle\nwallpapers')
            .addField('NSFW /images Endpoints', 'nsfw/bondage\nnsfw/hentai\nnsfw/thighs')

        msg.channel.send(embed)

    }
}