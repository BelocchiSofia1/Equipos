import { EmitAndSemanticDiagnosticsBuilderProgram } from "typescript";
import Equipment from "./Equipos";

export enum Efficiency{
    A = "A", B= "B", C= "C", D = "D", E= "E", F="F"
}

//subclase
export class Engine extends Equipment{
    id: string;
    powerHp: number;
    efficiency: Efficiency;
    maker: string;

    constructor(id: string, description: string, dateFabrication: Date, dateInstalation: Date, powerHp: number, efficiency: Efficiency, maker: string){
        super(id, description, dateFabrication, dateInstalation)
        {   this.id = id;
            this.powerHp = powerHp;
            this.efficiency = efficiency; 
            this.maker = maker
        }
    }

    addEngine(engine: Engine, array: Equipment []){
        if(array.push(engine)){
            console.log("se añadio", engine.id, "a la base de datos", array);
        }else{
            console.log("el equipo", engine.id, "no se puedo añadir");
            }
    }
    
    deleteEngine(id: string, array: Engine[]){
        let engineEnc = array.findIndex(engine => engine.id == id);
        if (engineEnc >= 0){
            array.splice(engineEnc, 1)
            console.log("Motor eliminado", id);
            console.log(array);
            return array;
        } else {
            console.log("el motor", id, "no se pudo borrar");
        }
    }

    readEngine(id: string, array: Engine[]) {
        let engineDisp = array.find (engine => engine.id === id)
          if (engineDisp){
            console.log(id, "existe en la base de datos", engineDisp);
            return engineDisp
            } else {
                console.log(id, "no existe en la base de datos");  
            }
        }

    editEngine(id:string, array: Engine[], dato:string){
        let editEngine = this.readEngine(id, array)
        if (editEngine){
            editEngine.id = dato;
            console.log("El motor", id, "se ha modicado al nombre", dato);       
        }
        else{console.log("el motor no se modifico");
        }
    }
    }


    