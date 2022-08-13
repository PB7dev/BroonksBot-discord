const Discord = require("discord.js")
const db = require('quick.db');
const { MessageSelectMenu, MessageActionRow } = require("discord.js");

module.exports = {
    name: 'config',
    description: 'Configure o bot.',
    options: [
        {
            name: 'contadores',
            description: "Configure os contadores do bot.",
            type: "SUB_COMMAND",
        },
        {
            name: 'registro',
            description: "Configure registro automatico. (beta)",
            type: "SUB_COMMAND",
        },
        {
            name: 'chatbot',
            description: "Configure um canal de texto para os membros falarem comigo.",
            type: "SUB_COMMAND",
            options: [
                {
                    name: 'chat',
                    description: 'Qual o canal de texto que deseja configurar?',
                    type: 'CHANNEL',
                    required: true
                },
                {
                    name: "idioma",
                    description: "Configure uma linguagem para o servidor.",
                    type: 3,
                    required: true,
                    choices: [
                        {
                            name: "Português",
                            value: "ptbr",
                        },
                        {
                            name: "English",
                            value: "en",
                        },
                    ],
                },
            ],
        },
    ],

    run: async (client, interaction, args) => {

  
    }
}