const config = require("../config.json")
const endpoints = require("../endpoints.json")

const request = require('request')

module.exports = (client, msg) => { 

    function sendImage(endpoint) {

        if (endpoints.nsfw.includes(endpoint)) { endpoint = 'nsfw/' + endpoint}

        request('https://shiro.gg/api/images/' + endpoint, {
            json: true
        }, (err, res, body) => {
            if (err || body.code !== 200) {
                console.error(err)
                msg.channel.send("There was an error fetching your image, please try again later.")
            } else {
                msg.channel.send(body.url)
            }
        })
    }

    if (msg.author.bot || msg.content.indexOf(config.prefix) !== 0) return

    const args = msg.content.slice(config.prefix.length).trim().split(/ +/)

        const commandName = args.shift().toLowerCase()

    if (endpoints.sfw.includes(commandName)) {
        sendImage(commandName)
    } else if (endpoints.nsfw.includes(commandName)) {
        if (msg.channel.nsfw) {
            sendImage(commandName)
        } else {
            msg.channel.send('This endpoint may only be used in channels marked as NSFW.')
        }
    } else {
        const command = client.commands.get(commandName) ||
        client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName))

        if (!command) return

        try { command.execute(client, msg, args) } catch (e) {
            console.error(e)
            msg.channel.send('I was unable to process this command, try again?')
        }
    }

        
}
