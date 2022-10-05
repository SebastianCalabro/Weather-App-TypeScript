import { Payload } from "../Actions/index"
interface get {
    type:"GET_COUNTRY",
    payload: Payload
}
interface close {
    type: "CLOSE_COUNTRY",
    payload:string
}
export type Action = get | close