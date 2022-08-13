const Discord = require("discord.js")
const canvas = require("discord-canvas-easy");
const db = require("quick.db")



module.exports = {
    name: "mensagens",
    description: "Contador de mensagens.",
    type: "CHAT_INPUT",
    options: [
        {
            name: 'usuario',
            type: 'USER',
            description: 'Mencione um usuário.',
            required: false,
        },
    ],

    run: async (client, interaction, args) => {


    }
}