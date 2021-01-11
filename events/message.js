const config = require("../config.json")
module.exports = (client, msg) => { 

    if (msg.author.bot || msg.content.indexOf(config.prefix) !== 0) return

    const args = msg.content.slice(config.prefix.length).trim().split(/ +/)
        const commandName = args.shift().toLowerCase()

        const command = client.commands.get(commandName) ||
            client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName))

        if (!command) return

        try { command.execute(client, msg, args) } catch (e) {
            console.error(e)
            msg.channel.send('I was unable to process this command, try again?')
        }
}
