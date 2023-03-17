import Equipment from "./Equipos";
import {Efficiency, Engine} from "./motor";
import Bomb from "./Bomba";
import Fuel from "./Combustible";
import Electric from "./Electrico";
import KitHoses from "./KitMangueras"

const date = new Date();
const listEquipment: Equipment [] = []
const listBomb: Bomb [] = []
const listEngine : Engine [] = []
const listFuel : Fuel [] = []
const listElectric: Electric [] = []
const listKitHoses: KitHoses [] = []

const bomba1 = new Bomb ("bomba1", "chica", date, date, 15, 20, "Sofia")
const ford = new Equipment ("Ford", "azul", date, date)
const wankel = new Engine ("Wankel", "hierro", date, date, 55, Efficiency.A, "Sofia")
const taiss = new KitHoses ("Taiss", "verde", date, date, 2, 5, "plastico")
const gasoil = new Fuel ("Gasoil", "liquido",date, date, 9, Efficiency.B, "YPF", 4, "plastico")
const epic = new Electric ("Epic", "electrico", date, date, 3, Efficiency.D, "Pampero", "110", 10, true)

//gasoil.addFuel (gasoil, listFuel)
//gasoil.readFuel ("Gasoil", listFuel);
//gasoil.editFuel ("Gasoil", listFuel , "Nafta");
//gasoil.deleteFuel ("Gasoil", listFuel);

//epic.addElectric (epic, listElectric )
//epic.readElectric ("Epic", listElectric );
//epic.editElectric ("Epic", listElectric , "IsEpic");
//epic.deleteElectric ("IsEpic", listElectric );

//taiss.addKitHoses (taiss, listKitHoses )
//taiss.readKitHoses ("Taiss", listKitHoses );
//taiss.editKitHoses ("Taiss", listKitHoses , "Tays");
//taiss.deleteKitHoses ("Tays", listKitHoses );

//wankel.addEngine(wankel, listEngine)
//wankel.readEngine("Wankel", listEngine);
//wankel.editEngine("Wankel", listEngine, "wankel3");
//wankel.deleteEngine("wankel3", listEngine);

//bomba1.addBomb(bomba1, listBomb);
//bomba1.readBomb("bomba1", listBomb);
//bomba1.editBomb("bomba1", listBomb, "bomba1bis");
//bomba1.deleteBomb("bomba1bis", listBomb);


//ford.addEquipment(ford, listEquipment);
//ford.readEquipment("Ford", listEquipment);
//ford.deleteEquipment("Ford", listEquipment);
//ford.editEquipment("Ford", lisEquipment, "Chevrolet");
