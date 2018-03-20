import fs from 'fs';
import pdfmake from 'pdfmake';
import pdfPrinter from './node_modules/pdfmake/src/printer.js';

import docDefinition from './src/document';
import fonts from './fonts';

const printer = new pdfPrinter(fonts);

const filepath = `./output/output.pdf`;

let pdf = printer.createPdfKitDocument(docDefinition);
pdf.pipe(fs.createWriteStream(filepath));
pdf.end();
