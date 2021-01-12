const {
    MessageEmbed
} = require('discord.js');
module.exports = {
    name: 'botinfo',
    description: 'Get current server info and statistics',
    category: "util",
    aliases: ['si'],
    execute(client, msg) {

        const g = msg.guild

        const embed = new MessageEmbed()
            .setColor('36393e')
            .setTitle(g.name)
            .setFooter('ID: ' + g.id)
            .addField('Users', g.members.cache.size, true)
            .addField('Roles', g.roles.cache.size, true)
            .addField('Channels', g.channels.cache.size, true)
            .addField("Created At", moment.utc(g.createdAt).format('LLLL'))
            .addField('Owner', g.owner)
        msg.channel.send(embed)

    },
}