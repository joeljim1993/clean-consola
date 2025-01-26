import yargs  from 'yargs';
const  { hideBin }  =  require('yargs/helpers');



export const yarg = yargs(hideBin(process.argv))
    .option("b",{
        alias:"base",
        type:"number",
        demandOption:true,
        describe:"Es la base de la tabla de multiplicar"
    })
    .options("l",{
        alias:"limit",
        type:"number",
        default:10,
        describe:"multiplication table limit"
    })
    .options("s",{
        alias:"show",
        type:"boolean",
        default:false,
        describe:"show the multiplication table"
    })
    .check((argv,options) => {

        if( argv.b < 1 ) throw "Error: The base must be greater than 0";
        


        return true;
    })
    .parseSync();