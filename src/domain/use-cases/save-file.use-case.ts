import fs from 'fs';


export interface SaveFileUseCase{
    ecxecute( options: Options) : boolean;
}

export interface Options {
    fileContent: string;
    destination?: string;
    fileName?: string;

}

export class SaveFileUseCase implements SaveFileUseCase{
    constructor() {
        /**
         * repository: storageRepositorio
         */
    }

    execute({ 
        fileContent, 
        destination = 'outputs' , 
        fileName= 'table' }:Options):boolean{ 

        try {

             // TODO: por codigo limpio fs debe llamarse desde el repositorio e inyectado como dependencia 
            fs.mkdirSync(destination, {recursive:true});
            fs.writeFileSync(`${destination}/tabla-${fileName}.txt`, fileContent);
            console.log('file created ');
            return true;
            
        } catch (error) {
            console.log("Error: ", error);
            return false;
        }
        
       

        
    }

}