import { NumericLiteral } from "typescript";

export default class Equipment{
    id: string;
    description: string;
    dateFabrication: Date;
    dateInstalation: Date;

    constructor(id: string, description: string, dateFabrication: Date, dateInstalation: Date){
        this.id = id;
        this.description = description; 
        this.dateFabrication = dateFabrication;
        this.dateInstalation = dateInstalation
    }

    addEquipment (equipment: Equipment, array: Equipment []){
        if(array.push(equipment)){
            console.log("se añadio", equipment.id, "a la base de datos", array);
        }else{
            console.log("el equipo", equipment.id, "no se puedo añadir");
            }
    }
    
    deleteEquipment(id: string, array: Equipment[]): any{
        let equipmentEnc = array.findIndex(equipment => equipment.id == id);
        if (equipmentEnc >= 0){
            array.splice(equipmentEnc, 1)
            console.log("Equipo eliminado", id);
            console.log(array);
            return array;
        } else {
            console.log("El equipo", id, "no se pudo borrar");
        }
    }
    
    readEquipment(id: string, array: Equipment[]) {
        let equipmentDisp = array.find (equipment => equipment.id === id)
          if (equipmentDisp){
            console.log(id, "existe en la base de datos", equipmentDisp);
            return equipmentDisp
            } else {
                console.log(id, "no existe en la base de datos");  
            }
        }
    
    editEquipment(id:string, array: Equipment[], dato:string){
        let editEquipm = this.readEquipment(id, array)
        if (editEquipm){
            editEquipm.id = dato;
            console.log("El equipo", id, "se ha modicado al nombre", dato);       
        }
        else{console.log("el equipo no se modifico");
        }
    }
    
    }
