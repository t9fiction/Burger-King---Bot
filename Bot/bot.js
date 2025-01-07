const { Telegraf } = require("telegraf");
const TOKEN = "8019115372:AAGAFDXzs3EHUACGsjwmgIIV3PppNwsU2lM";
const bot = new Telegraf(TOKEN);

const web_link = "https://burger-king-bot.vercel.app/";

bot.start((ctx) =>
  ctx.reply("Welcome :) ", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();