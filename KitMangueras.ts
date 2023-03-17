import Equipment from "./Equipos";

export default class KitHoses extends Equipment{
    id: string;
    //pulgadas
    iches: number;
    //rosca
    thread: string

    constructor(id: string, description: string, dateFabrication: Date, dateInstalation: Date, elemnts: number, iches: number, 
        thread: string){
        super(id, description, dateFabrication, dateInstalation)
        this.id = id;
        this.iches = iches;
        this.thread = thread;
    }
    addKitHoses (kitHoses: KitHoses, array: KitHoses []){
        if(array.push(kitHoses)){
            console.log("se añadio", kitHoses.id, "a la base de datos", array);
        }else{
            console.log("El", kitHoses.id, "no se puedo añadir");
            }
    }
    
    deleteKitHoses(id: string, array: KitHoses[]): any{
        let kitHosesEnc = array.findIndex(kitHoses => kitHoses.id == id);
        if (kitHosesEnc >= 0){
            array.splice(kitHosesEnc, 1)
            console.log("Kit de mangueras eliminado", id);
            console.log(array);
            return array;
        } else {
            console.log("El kit", id, "no se pudo eliminar");
        }
    }
    
    readKitHoses(id: string, array: KitHoses[]) {
        let kitHosesDisp = array.find (kitHoses => kitHoses.id === id)
          if (kitHosesDisp){
            console.log(id, "existe en la base de datos", kitHosesDisp);
            return kitHosesDisp
            } else {
                console.log(id, "no existe en la base de datos");  
            }
        }
    
    editKitHoses(id:string, array: KitHoses[], dato:string){
        let editKitHoses = this.readKitHoses(id, array)
        if (editKitHoses){
            editKitHoses.id = dato;
            console.log("El kit de mangueras", id, "se ha modicado al nombre", dato);       
        }
        else{console.log("El kit sigue siendo el mismo, no se modifico");
        }
    }
    
            
        }


