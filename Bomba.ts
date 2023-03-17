import { NumberLiteralType } from "typescript";
import Equipment from "./Equipos";

export default class Bomb extends Equipment{
    id: string;
    //caudal de entrada y salida
    inletFlow: number;
    outletFlow: number;
    // fabricante
    maker: string

    constructor(id: string, description: string, dateFabrication: Date, dateInstalation: Date,inletFlow: number, outletFlow: number, maker: string){
        super(id, description, dateFabrication, dateInstalation)
    {
        this.id = id;
        this.inletFlow = inletFlow;
        this.outletFlow = outletFlow;
        this.maker = maker
    }
}

addBomb (bomb: Bomb, array: Bomb []){
    if(array.push(bomb)){
        console.log("se añadio", bomb.id, "a la base de datos", array);
    }else{
        console.log("la", bomb.id, "no se puedo añadir");
        }
}

deleteBomb(id: string, array: Bomb[]): any{
    let bombEnc = array.findIndex(bomb => bomb.id == id);
    if (bombEnc >= 0){
        array.splice(bombEnc, 1)
        console.log("Bomba eliminada", id);
        console.log(array);
        return array;
    } else {
        console.log("la bomba", id, "no se pudo borrar");
    }
}

readBomb(id: string, array: Bomb[]) {
    let bombDisp = array.find (bomb => bomb.id === id)
      if (bombDisp){
        console.log(id, "existe en la base de datos", bombDisp);
        return bombDisp
        } else {
            console.log(id, "no existe en la base de datos");  
        }
    }

editBomb(id:string, array: Bomb[], dato:string){
    let editBomb = this.readBomb(id, array)
    if (editBomb){
        editBomb.id = dato;
        console.log("La bomba", id, "se ha modicado al nombre", dato);       
    }
    else{console.log("la bomba no se modifico");
    }
}

        
    }
