const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const writeStream = fs.createWriteStream('vac.txt');

const url = 'https://inventorsoft.co/careers';


request(url, function (err, res, body) {
    if (!err && res.statusCode === 200){
        let $ = cheerio.load(body);

        $(".vacancy-card").each((index, element) => {
            let vac = $(element)
                .find('.vacancy__header')
                .text()

            let location = $(element)
                .find('.vacancy__location')
                .text()

            writeStream.write(`${index+1}) Vacancy: ${vac}, Location: ${location} \n`);
        });

    } else {
        throw err;
    }

});