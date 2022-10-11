import axios from "axios";
import { Dispatch } from "redux"
import { Action } from "../Reducer/actionLogic";
const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;
const REACT_APP_DEPLOY_API_KEY = process.env.REACT_APP_DEPLOY_API_KEY;
export interface Payload {
    name:string,
    max:string,
    min:string,
    weather:string,
    id:number
}

/* export function createAction<T extends string, P>(type: T, payload: P): Action<T, P> {
    return { type, payload };
} */

const action = {
    getCountry: function (city:string) {
        console.log("deploy api key",REACT_APP_DEPLOY_API_KEY)
        console.log(REACT_APP_API_KEY)
        return async function (dispatch: Dispatch<Action>) {
            console.log("my city",city)
            await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${/* 
             REACT_APP_DEPLOY_API_KEY ?
             REACT_APP_DEPLOY_API_KEY :
             REACT_APP_API_KEY ?
             REACT_APP_API_KEY :
              */"cac896b5be37c00122f7640fc90898d2"}&units=metric`)
            .then(data=> {console.log(data); return dispatch({
                type:"GET_COUNTRY",
                payload: {
                    name:data.data.name,
                    max:Math.round(data.data.main.temp_max).toString(),
                    min:Math.round(data.data.main.temp_min).toString(),
                    weather: data.data.weather[0].icon,
                    id:data.data.id
                }
            })})
            .catch(e=>dispatch({
                type:"NO_COUNTRY",
                payload:true
            }))
        }
    },
    closeCountry: function (city:string) {
        return function (dispatch: Dispatch<Action>) {
             dispatch({
                type:"CLOSE_COUNTRY",
                payload: city
            })}
        },
    noCityFalse:function () {
        return function (dispatch: Dispatch<Action>) {
            dispatch({
                type:"NO_COUNTRY",
                payload:false
            })
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