const { Telegraf } = require('telegraf');

const bot = new Telegraf('5727518321:AAEgSrlmLxG_moMgdWTC0DssoKQdLjKDWMI');

// Code

bot.start((ctx) => {
    ctx.reply("Hush kelibsiz");
})

bot.launch();