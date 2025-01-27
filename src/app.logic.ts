import fs from "fs";

import { yarg } from '../src/config/plugins/yargs.plugins';// Removed undefined variable 'yarg'

console.log("yarg", yarg.b);
console.log("yarg", yarg.l);
console.log("yarg", yarg.s);





let outputMessage = '';
const base = yarg.b;
const limit = yarg.l;
const headerMessage = `
====================\n  
Tabla del ${base}

\n====================\n`;


outputMessage = headerMessage + outputMessage;
if(yarg.s){

console.log(outputMessage);

}

const outputPacth = `outputs`;

fs.mkdirSync(outputPacth, {recursive:true});
fs.writeFileSync(`${outputPacth}/tabla-${base}.txt`, outputMessage);
console.log('file created ');
