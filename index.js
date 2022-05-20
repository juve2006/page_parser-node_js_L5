import cheerio from 'cheerio'
import fs from 'fs';
import request from 'request';
import { zipFile } from './zipper.js';
import { send } from "./nodemailer.js";

const output = 'vac.txt';

const writeStream = fs.createWriteStream(output);

const url = 'https://inventorsoft.co/careers';

request(url, function (err, res, body) {
    if (!err && res.statusCode === 200){
        let $ = cheerio.load(body);
// за допомогою cheerio по класам сторінки шукаємо потрібну інфу
        $(".vacancy-card").each((index, element) => {
            let vac = $(element)
                .find('.vacancy__header')
                .text()
            let location = $(element)
                .find('.vacancy__location')
                .text()
            writeStream.write(`${index+1}) Vacancy: ${vac}, Location: ${location} \n`);
        });
        writeStream.end();
        zipFile(output);
        send();
    } else {
        throw err;
    }
});


