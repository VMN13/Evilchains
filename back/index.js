const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const cors = require('cors');

const token = '6844732984:AAFk73dV2cBEgTR2BUjVbQwgGT9fXQrhqPY';
const webAppUrl = 'https://evilchains.by/';


const bot = new TelegramBot(token, {polling: true});
const app = express();

app.use(express.json());
app.use(cors());

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if(text === '/start') {
        await bot.sendMessage(chatId, 'Рады видеть вас в нашем интернет магазине!', {
            reply_markup: {
                inline_keyboard: [
                    [{text: 'сайт', web_app: {url: webAppUrl}}]
                ]
            }
        })

        
            }
        });

