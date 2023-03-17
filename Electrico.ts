import {Efficiency, Engine} from "./motor";

export default class Electric extends Engine{
    id: string;
    voltage: string;
    consumptionKwH: number;
    isLowConsumption: boolean;

    constructor(id: string, description: string, dateFabrication: Date, dateInstalation: Date, powerHp: number, efficiency: Efficiency, maker: string, 
        voltage: string, consumptionKwH: number, isLowConsumption: boolean){
            super(id, description, dateFabrication, dateInstalation, powerHp, efficiency, maker)
            this.id = id;
            this.voltage = voltage;
            this.consumptionKwH = consumptionKwH;
            this.isLowConsumption = isLowConsumption
        }
        
        addElectric (electric: Electric, array: Electric []){
            if(array.push(electric)){
                console.log("se añadio", electric.id, "a la base de datos", array);
            }else{
                console.log("El", electric.id, "no se puedo añadir");
                }
        }
        
        deleteElectric(id: string, array: Electric[]): any{
            let electricEnc = array.findIndex(electric => electric.id == id);
            if (electricEnc >= 0){
                array.splice(electricEnc, 1)
                console.log("Electrico eliminada", id);
                console.log(array);
                return array;
            } else {
                console.log("El electrico", id, "no se pudo eliminar");
            }
        }
        
        readElectric(id: string, array: Electric[]) {
            let electricDisp = array.find (electric => electric.id === id)
              if (electricDisp){
                console.log(id, "existe en la base de datos", electricDisp);
                return electricDisp
                } else {
                    console.log(id, "no existe en la base de datos");  
                }
            }
        
        editElectric(id:string, array: Electric[], dato:string){
            let editElectric = this.readElectric(id, array)
            if (editElectric){
                editElectric.id = dato;
                console.log("El electrico", id, "se ha modicado al nombre", dato);       
            }
            else{console.log("El combustible sigue siendo el mismo, no se modifico");
            }
        }
        
                
            }
        
    
    
    


   