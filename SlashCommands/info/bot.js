const Discord = require('discord.js')
const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
const db = require('quick.db');
let cpuStat = require("cpu-stat");

module.exports = {
    name: 'bot',
    description: 'Informações.',
    options: [
        {
            name: 'info',
            description: "Minhas informações",
            type: "SUB_COMMAND",
        },
        {
            name: 'ajuda',
            description: "Comando de ajuda",
            type: "SUB_COMMAND",
            options: [
                {
                    name: "comando",
                    description: "Ajuda em um comando",
                    type: 3,
                    required: false,
                    choices: [
                        {
                            name: "config contadores",
                            value: "2",
                        },
                        {
                            name: " config registro",
                            value: "13",
                        },
                        {
                            name: "config chatbot",
                            value: "1",
                        },
                        {
                            name: "mensagens",
                            value: "3",
                        },
                        {
                            name: "tempocall",
                            value: "4",
                        },
                        {
                            name: "user info",
                            value: "5",
                        },
                        {
                            name: "user avatar",
                            value: "6",
                        },
                        {
                            name: "user banner",
                            value: "7",
                        },
                        {
                            name: "vip criar",
                            value: "8",
                        },
                        {
                            name: "vip remover",
                            value: "9",
                        },
                        {
                            name: "vip reset",
                            value: "10",
                        },
                        {
                            name: "vip set",
                            value: "11",
                        },
                        {
                            name: "vip painel",
                            value: "12",
                        },
                    ],
                },
            ],

        },
    ],

    run: async (client, interaction, args) => {

    
    }
}