const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const cors = require('cors');

const token = '6844732984:AAFk73dV2cBEgTR2BUjVbQwgGT9fXQrhqPY';
const webAppUrl = 'https://master--bucolic-donut-13d8f4.netlify.app/';
const sait = 'https://evilchains.by/';
const bot = new TelegramBot(token, {polling: true});
const app = express();

app.use(express.json());
app.use(cors());


bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

})


bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if(text === '/start') {
        await bot.sendMessage(chatId, 'Добро пожаловать на страничку бота интернет магазина Evilchains! ', {
            reply_markup: {
                keyboard: [
                    [{text: 'Форма обратной связи', web_app: {url: webAppUrl + '/form'}}]
                ]
            }
        })

        await bot.sendMessage(chatId, 'Заходи в наш интернет магазин по кнопке ниже', {
            reply_markup: {
                inline_keyboard: [
                    [{text: 'Заказать', web_app: {url: webAppUrl}}]
                    
                ]
            }
        })  

    }

    if (msg?.web_app_data?.data) {
        try {
            const data = JSON.parse(msg?.web_app_data?.data)
           await bot.sendMessage(chatId, 'Спасибо за обратную связь')
            await bot.sendMessage(chatId, 'Ваша страна: ' + data?.country);
            await bot.sendMessage(chatId, 'Ваша улица: ' + data?.street);
            setTimeout(async () => {
              await bot.sendMessage(chatId, 'Всю информацию вы получите в этом чате');
            }, 3000)
        } catch (e) {
          console.log(e);
        }
    }
    
   });

app.post('/web-data', async (req, res) => {
    const {queryId, products, totalPrice} = req.body;
    try {
    await bot.answerWebAppQuery(queryId, {
        type: 'article',
        id: queryId,
        title: 'Успешная покупка',
        input_message_ontent: {message_text: 'Поздравляю с покупкой, вы приобрели товар на сумму ' + totalPrice}
    })
    return res.status(200).json({});
    } catch (e) {
        return res.status(500).json({})
    
    }
})
   const PORT = 8000;
   app.listen(PORT, () => console.log('server started on PORT ' + PORT))
   


