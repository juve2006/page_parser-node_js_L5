import { createGzip } from 'zlib';
import fs from 'fs';

const gzip = createGzip();


function zipFile (file) {
    try {
        const readStream = fs.createReadStream(file);
        let newFile = file + '.zip';
        let writeStream = fs.createWriteStream(newFile);
        readStream.pipe(gzip).pipe(writeStream);
        console.log ('File was compressed');
    } catch (err) {
        console.log('An error occurred:', err);
    }
}

export {zipFile};