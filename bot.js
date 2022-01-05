const {Telegraf} = require('telegraf')
const BOT_API_KEY = '5058747304:AAHBseew7Rf_1jljK2Uui6Ept5W9mPzt6u8'

const bot = new Telegraf(BOT_API_KEY)

bot.start((ctx, next) => {
  ctx.state.myState = 1234
  ctx.reply('You have entered the start command')
  next(ctx)
})

bot.on('text', (ctx) => {
  ctx.reply('This is a text message')
  ctx.reply(ctx.state.myState)
})

bot.launch()