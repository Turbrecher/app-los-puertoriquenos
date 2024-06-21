import { Torneo } from "./torneo"

export interface Partida {
    id: Number
    nombre: String
    fecha: String
    torneo: Torneo
}
