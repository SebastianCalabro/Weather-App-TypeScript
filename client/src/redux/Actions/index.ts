import axios from "axios";
import { Dispatch } from "redux"
import { Action } from "../Reducer/actionLogic";

export interface Payload {
    name:string,
    max:string,
    min:string,
    weather:string
}

const apiKey = 'cac896b5be37c00122f7640fc90898d2'

/* export function createAction<T extends string, P>(type: T, payload: P): Action<T, P> {
    return { type, payload };
} */

const action = {
    getCountry: function (city:string) {
        return async function (dispatch: Dispatch<Action>) {
            await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            .then(data=> {console.log(data); return dispatch({
                type:"GET_COUNTRY",
                payload: {
                    name:data.data.name,
                    max:data.data.main.temp_max.toString(),
                    min:data.data.main.temp_min.toString(),
                    weather: data.data.weather[0].description
                }
            })})
        }
    },
    closeCountry: function (city:string) {
        return function (dispatch: Dispatch<Action>) {
            axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            .then(data=> {console.log(data); return dispatch({
                type:"GET_COUNTRY",
                payload: data.data.name
            })})
        }
    }
}
export default action
/* export function getCountry (city:string) {
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
} */