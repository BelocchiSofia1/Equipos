import {Efficiency, Engine} from "./motor";

export default class Fuel extends Engine{
    id: string;
    cylinders:number;
    typeFuel: string;

    constructor(id: string, description: string, dateFabrication: Date, dateInstalation: Date, powerHp: number, efficiency: Efficiency, maker: string, cylinders: number, typeFuel:string){
        super(id,description, dateFabrication, dateInstalation, powerHp, efficiency, maker)
        this.id = id;   
        this.cylinders = cylinders;
        this.typeFuel = typeFuel;
     
    }
    addFuel (fuel: Fuel, array: Fuel []){
        if(array.push(fuel)){
            console.log("se añadio", fuel.id, "a la base de datos", array);
        }else{
            console.log("El", fuel.id, "no se puedo añadir");
            }
    }
    
    deleteFuel(id: string, array: Fuel[]): any{
        let fuelEnc = array.findIndex(fuel => fuel.id == id);
        if (fuelEnc >= 0){
            array.splice(fuelEnc, 1)
            console.log("Combustible eliminada", id);
            console.log(array);
            return array;
        } else {
            console.log("El combustible", id, "no se pudo eliminar");
        }
    }
    
    readFuel(id: string, array: Fuel[]) {
        let fuelDisp = array.find (fuel => fuel.id === id)
          if (fuelDisp){
            console.log(id, "existe en la base de datos", fuelDisp);
            return fuelDisp
            } else {
                console.log(id, "no existe en la base de datos");  
            }
        }
    
    editFuel(id:string, array: Fuel[], dato:string){
        let editFuel = this.readFuel(id, array)
        if (editFuel){
            editFuel.id = dato;
            console.log("El combustible", id, "se ha modicado al nombre", dato);       
        }
        else{console.log("El combustible sigue siendo el mismo, no se modifico");
        }
    }
    
            
        }
    


