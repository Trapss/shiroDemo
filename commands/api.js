module.exports = {
    name: 'api',
    description: 'Returns an image based on the input api endpoint',
    category: "api",
    aliases: [],
    execute(client, msg, args) {

        const { MessageEmbed } = require('discord.js')
        const request = require('request');

        const config = require('../config.json')
        const endpointsList = require('../endpoints.json')
   
        const embed = new MessageEmbed()
            .setColor('36393E')
            .setFooter('https://shiro.gg/api')

        function sendImage(endpoint){
            request('https://shiro.gg/api/images/' + endpoint, {
                    json: true
                }, (err, res, body) => {
                    msg.channel.send(body.url)
                } 
            )}

        if (endpointsList.sfw.includes(args[0])) {
            sendImage(args[0])
        } else if (endpointsList.nsfw.includes(args[0])) {
            if (msg.channel.nsfw) { sendImage(args[0]) } else {
                embed.addField("Usage Error", `The endpoint you are trying to use may only be accessed in channels marked as nsfw.`)
                msg.channel.send(embed)
            }
        } else {  
            embed.addField("Usage Error", `The endpoint you are trying to use could not be found. Please try ${config.prefix}endpoints for a list of valid arguments.`)
            msg.channel.send(embed)
        }  
    }
}
