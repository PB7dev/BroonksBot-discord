const Discord = require("discord.js");
const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js");
let client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MEMBERS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_VOICE_STATES
    ]
});
const config = require("./config.json");
const db = require('quick.db');
require('colors');
client.login(config.token);
client.once('ready', async () => {

    console.log(`✅ | Bot: ${client.user.tag}`);
    client.application.commands.fetch().then(col => console.log(`✅ | ${col.size} SlashCommands Carregados\n`));
    client.user.setStatus("dnd");
    client.user.setActivity(`Broonks is back`, { type: "COMPETING" })


})


client.on("messageCreate", async (msg) => {

    if (msg.content === `<@${client.user.id}>` || msg.content === `<@!${client.user.id}>`) {
        let row = new Discord.MessageActionRow()
        .addComponents(
            [
                new Discord.MessageButton()
                    .setLabel('Me adicione')
                    .setEmoji('975454360727355452')
                    .setURL('https://discord.com/oauth2/authorize?client_id=668632586578296843&permissions=1342442552&scope=bot%20applications.commands')
                    .setStyle('LINK'),
                new Discord.MessageButton()
                    .setLabel('Suporte')
                    .setEmoji('1002660191055138878')
                    .setURL('https://discord.gg/pK57aEZrEc')
                    .setStyle('LINK')
            ]
        );

        msg.reply({ content: `<:bks_1:1002660191055138878> | Olá ${msg.author}, escreva uma \`/\` para ver meus comandos.`, components: [row] }).then(pb7 => {
            setTimeout(() => {
                pb7.delete()
                msg.delete()
            }, 20000);
        })
    }

})

module.exports = client;
client.commands = new Discord.Collection();
client.slashCommands = new Discord.Collection();
client.config = require("./config.json");
require("./handler")(client);
const { glob } = require("glob");
const { promisify } = require("util");
const { watch } = require("fs");
const globPromise = promisify(glob);

client.on("interactionCreate", async (interaction) => {

    if (!interaction.guild) return interaction.reply({ content: `:x: **| Só posso responder em servidores.**`, ephemeral: true });
    if (interaction.isCommand()) {
        const cmd = client.slashCommands.get(interaction.commandName);
        if (!cmd)
            return;
        const args = [];
        for (let option of interaction.options.data) {
            if (option.type === "SUB_COMMAND") {
                if (option.name) args.push(option.name);
                option.options?.forEach((x) => {
                    if (x.value) args.push(x.value);
                });
            } else if (option.value) args.push(option.value);
        }
        cmd.run(client, interaction, args);
    }
    if (interaction.isContextMenu()) {
        await interaction.deferReply({ ephemeral: false });
        const command = client.slashCommands.get(interaction.commandName);
        if (command) command.run(client, interaction);

    }
});



const pastaEventos = './events';


client.once('ready', async () => {

    const eventos = await globPromise(`${pastaEventos}/**/*.js`);

    for (const evento of eventos) {
        const evt = require(evento);
        client.on(evt.name, (...args) => evt.execute(...args));
        console.log(`${evt.name.yellow} carregado`);
    }

});



process.on('multipleResolves', (type, reason, promise) => {
console.log(`Ocorreu um erro\n` + type, promise, reason)
});
process.on('unhandRejection', (reason, promise) => {
console.log(`Ocorreu um erro\n` + reason, promise)
});
process.on('uncaughtException', (error, origin) => {
console.log(`Ocorreu um erro\n` + error, origin)
});
process.on('uncaughtExceptionMonitor', (error, origin) => {
console.log(`Ocorreu um erro\n` + error, origin)
});



