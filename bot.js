const {Telegraf} = require('telegraf')
const BOT_API_KEY = '5058747304:AAHBseew7Rf_1jljK2Uui6Ept5W9mPzt6u8'

const bot = new Telegraf(BOT_API_KEY)

// console.log(bot);

bot.start((ctx) => {
//   console.log(ctx);
  ctx.reply('You have entered the start command')
})

bot.launch()