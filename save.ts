import * as path from 'path';
import { exec } from 'child_process';
import * as S from 'sanctuary';

copyOutputPDF(process.argv);

function copyOutputPDF(xs) : void {
  return saveFile(getFilePath(xs))
}

function saveFile (x) : void {
   return S.maybe_(
       () => console.log('Error: File path with name must be provided.'))
       ((y : string) => {
         let outputPath = path.resolve(__dirname, y) + '.pdf';
         return exec(`cp output/output.pdf ${outputPath}`, err => {
           if (err) console.log(err);
           else console.log(`File copied to ${outputPath}`);
         });
       })
       (x);
}

function getFilePath (xs) {
  return S.pipe([
     S.at(2),
     S.chain(S.match(/.*[^\.]/)),
     S.map(S.prop('match'))
  ])(xs);
}
