const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const Canvas = require('canvas')
const Utils = require("../../util/Util.js")
const db = require("quick.db")
const ms = require('milliseconds');

const japiRestPkg = require('japi.rest');
const japiRest = new japiRestPkg('TOKEN_JAPI');

const { registerFont } = require('canvas')
registerFont('./fontes/helsinki.ttf', { family: 'helsinki' })
registerFont('./fontes/IndieFlower-Regular.ttf', { family: 'indieFlower-Regular' }) //Segoe UI Black
registerFont('./fontes/Segoe UI Black.ttf', { family: 'Segoe UI Black' })

module.exports = {
    name: "tempocall",
    description: "Contador de tempo em call.",
    type: "CHAT_INPUT",
    options: [
        {
            name: 'usuário',
            type: 'USER',
            description: 'Mencione um usuário.',
            required: false,
        },
    ],

    run: async (client, interaction, args) => {

    }
}