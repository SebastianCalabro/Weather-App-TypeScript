import axios from "axios";
import { Dispatch } from "redux"
import { Action } from "../Reducer/actionLogic";

const apiKey = '4ae2636d8dfbdc3044bede63951a019b'
export function getCountry (city:string) {
    return function (dispatch: Dispatch<Action>) {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(data=> {console.log(data); return dispatch({
            type:"GET_COUNTRY",
            payload: "data"
        })})
    }
}
export function closeCountry (city:string) {
    return function (dispatch: Dispatch<Action>) {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(data=> {console.log(data); return dispatch({
            type:"GET_COUNTRY",
            payload: "data"
        })})
    }
}