import { CreateTableUseCase } from "../domain/use-cases/create-table.use-case";
import { SaveFileUseCase } from "../domain/use-cases/save-file.use-case";

interface RunOptions {
    base:number,
    limit:number,
    showTable:boolean;
}   


export class ServerApp {

   static run({ base, limit , showTable }:RunOptions){
        console.log("ServerApp running...");

        // se crea la instancia 
        const table = new  CreateTableUseCase().execute({base,limit});
        const wasCreated = new SaveFileUseCase()
            .execute({fileContent:table, destination:"./output/table/table.pdf"});

        if(showTable){
            console.log(table);
        };

        (wasCreated)
            ? console.log("file created")
            : console.log("file not created");
        
        
    }



    }