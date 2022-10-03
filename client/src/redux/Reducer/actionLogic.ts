interface get {
    type:"GET_COUNTRY",
    payload: string
}
interface close {
    type: "CLOSE_COUNTRY",
    payload:string
}
export type Action = get | close