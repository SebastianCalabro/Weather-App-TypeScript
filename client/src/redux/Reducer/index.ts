import { Action } from "./actionLogic"
import { Payload } from "../Actions/index"
interface CountryState {
    countries:Payload[]
    notCity:boolean
}

const initialState:CountryState = {
    countries:[],
    notCity:false
}
const reducer = (state = initialState, action: Action):CountryState =>{
    switch(action.type){
        case "GET_COUNTRY":
            return{
                ...state,
                countries: state.countries.concat(action.payload)
            }
        case "CLOSE_COUNTRY":
            const filteredCities = state.countries.filter(e=>e.name!==action.payload)
            return{
                ...state,
                countries: filteredCities
            }
        case "NO_COUNTRY":
            return{
                ...state,
                notCity: action.payload
            }
        default:
            return state
    }
}
export default reducer