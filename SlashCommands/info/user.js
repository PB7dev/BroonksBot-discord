const Discord = require('discord.js')
const axios = require('axios');
const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
const db = require('quick.db');
const moment = require('moment')
moment.locale('pt-BR')
const japiRestPkg = require('japi.rest');
const japiRest = new japiRestPkg('JAPI_TOKEN');

module.exports = {
    name: 'user',
    description: 'Informações de usuário.',
    options: [{
        name: 'avatar',
        description: "Avatar de usuário",
        type: "SUB_COMMAND",
        options: [
            {
                name: 'usuário',
                type: 'USER',
                description: 'Mencione um usuário.',
                required: false,
            },
        ]
    },
    {
        name: 'banner',
        description: "Banner de usuário",
        type: "SUB_COMMAND",
        options: [
            {
                name: 'usuário',
                type: 'USER',
                description: 'Mencione um usuário.',
                required: false,
            },
        ]
    },
    {
        name: 'info',
        description: "Ver informação de usuário.",
        type: "SUB_COMMAND",
        options: [
            {
                name: 'usuário',
                type: 'USER',
                description: 'Mencione um usuário.',
                required: false,
            },
        ]
    },
    ],

    run: async (client, interaction, args) => {

    }
}