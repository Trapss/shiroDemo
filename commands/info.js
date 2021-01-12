module.exports = {
    name: 'info',
    description: 'Information about this bot and the shiro.gg api',
    category: "util",
    aliases: [],
    execute(client, msg) {

        const {
            MessageEmbed
        } = require('discord.js')

        const embed = new MessageEmbed()
            .setColor('36393E')
            .setFooter('https://shiro.gg/')
            .addField('Development', 'The shiro.gg api was developed by Xignotic.\nThis bot was developed by iTrqPss.')
            .addField("Base URL", 'https://shiro.gg/api')
            .addField('Endpoints', 'https://shiro.gg/api/endpoints')
            .addField('Image Usage', 'sfw images: https://shiro.gg/api/images/:category (https://shiro.gg/api/images/avatars)\nnsfw images: https://shiro.gg/api/images/nsfw/:category (https://shiro.gg/api/images/nsfw/hentai)')
            .addField('Rate Limit', '300 requests per minute.')
            msg.channel.send(embed)

    }
}