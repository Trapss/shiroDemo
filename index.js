const discord = require('discord.js-light');
const enmap = require('enmap');
const { readdir } = require('fs');

const config = require('./config.json');

const client = new discord.Client({
  cacheGuilds: true,
  cacheChannels: true,
  cacheOverwrites: true,
  cacheRoles: false,
  cacheEmojis: false,
  cachePresences: false,
});

client.commands = new enmap();
client.events = new enmap();

readdir('./events', (err, files) => {
  if (err) return;
  files.forEach((file) => {
    if (!file.endsWith('.js')) return;
    const event = require(`./events/${file}`);
    const eventName = file.split('.')[0];
    client.on(eventName, event.bind(null, client));
    delete require.cache[require.resolve(`./events/${file}`)];
    client.events.set(eventName, event);
  });
});

readdir('./commands', (err, files) => {
  if (err) return;
  files.forEach((file) => {
    if (!file.endsWith('.js')) return;
    const props = require(`./commands/${file}`);
    const commandName = file.split('.')[0];
    client.commands.set(commandName, props);
  });
});

client.login(config.token).catch();
