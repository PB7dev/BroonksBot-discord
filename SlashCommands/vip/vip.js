const Discord = require('discord.js')
const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
const db = require('quick.db');
const ms = require("ms");


module.exports = {
    name: 'vip',
    description: 'Categoria VIP.(beta)',
    options: [
        {
            name: "painel",
            description: "Painel de usuário vip. (beta)",
            type: "SUB_COMMAND",
            options: [
                {
                    name: 'usuário',
                    type: 'USER',
                    description: 'Dar cargo vip.',
                    required: false,
                },
        
            ],
        },
        {
            name: 'criar',
            description: "Criar vips.(beta)",
            type: "SUB_COMMAND",
            options: [
                {
                    name: 'cargo',
                    description: 'Cargo vip',
                    type: 'ROLE',
                    required: true
                },
                {
                    name: 'categoria',
                    description: 'Categoria desse vip',
                    type: 'CHANNEL',
                    required: true
                },
                {
                    name: "id",
                    description: "id do vip",
                    type: 3,
                    required: true,
                    choices: [
                        {
                            name: "1",
                            value: "1",
                        },
                        {
                            name: "2",
                            value: "2",
                        },
                        {
                            name: "3",
                            value: "3",
                        },
                        {
                            name: "4",
                            value: "4",
                        },
                        {
                            name: "5",
                            value: "5",
                        },
                        {
                            name: "6",
                            value: "6",
                        },
                    ],
                },
            ],
        },
        {
            name: 'set',
            description: "Setar vip para um usuário. (beta)",
            type: "SUB_COMMAND",
            options: [
                {
                    name: 'usuário',
                    type: 'USER',
                    description: 'Mencione um usuário.',
                    required: true,
                },
            ],
        },
        {
            name: 'remover',
            description: "Remover vip de um usuário. (beta)",
            type: "SUB_COMMAND",
            options: [
                {
                    name: 'usuário',
                    type: 'USER',
                    description: 'Mencione um usuário.',
                    required: true,
                },
            ],
        },
        {
            name: 'reset',
            description: "Reset seu vip. (beta)",
            type: "SUB_COMMAND",
        },
    ],

    run: async (client, interaction, args) => {


    }
}