import { Payload } from "../Actions/index"
interface get {
    type:"GET_COUNTRY",
    payload: Payload
}
interface close {
    type: "CLOSE_COUNTRY",
    payload:string
}
interface not{
    type: "NO_COUNTRY",
    payload:boolean
}
export type Action = get | close | not