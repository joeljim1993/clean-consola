// console.log('process.env', process.env);
console.log('process.env', process.argv);

// const [tsnode,app, ...args] = process.argv;

import { yarg } from '../src/config/plugins/yargs.plugins';
import { ServerApp } from './presentation/server-app';

// console.log("yarg", yarg.b);



(async()=>{

// bloque de codigo autoejecutado
// console.log("funcion autoejecutada");

await main();

console.log("fin  del programa ");

// bloque de codigo autoejecutado


})();


async function main(){

  const { b:base,l:limit,s: showTable }= yarg;  

 ServerApp.run({base,limit,showTable});
 
};