import { number } from "yargs";

export interface CreateTableUseCase{
    execute( options: CreateTableOptions) : string;
}

export interface CreateTableOptions {
    base: number;
    limit?: number;

}


export class CreateTableUseCase implements CreateTableUseCase{
    constructor() {
        /**
         * DI - Dependency Injection
         */
    }

    execute({ base, limit=10 }:CreateTableOptions){ 

        console.log("CreatetableUseCase running...");
        let outputMessage = '';

        for( let i = 1; i <= limit; i++){
            outputMessage += `${base} x ${i} = ${Number(base) * i}\n`;
        }

        return outputMessage;
        
    }

}