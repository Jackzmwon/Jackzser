const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://images.wallpapersden.com/image/download/pokemon-detective-pikachu-4k_a2lrZmWUmZqaraWkpJRsZ2WtbGdl.jpg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*Jackzser bot created by Jackz wizard*
*Creator number : wa.me/918075641889?text=Hi%20Jackz%20ser.%20*

*Bot setting video : https://youtu.be/_D4ZYuUSXjs*

*Githublink (Setup)  :    https://github.com/Jackzmwon/Jackzser*

*Audio commads :   https://github.com/Jackzmwon/Jackzser/tree/master/uploads*

*Sticker commads : https://github.com/Jackzmwon/Jackzser/tree/master/uploads*
`}) 

}));
