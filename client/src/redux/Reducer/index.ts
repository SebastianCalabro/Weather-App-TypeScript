import { Action } from "./actionLogic"
interface CountryState {
    countries:string[]
}

const initialState:CountryState = {
    countries:[]
}
const reducer = (state = initialState, action: Action):CountryState =>{
    switch(action.type){
        case "GET_COUNTRY":
            return{
                ...state,
                countries: state.countries.concat(action.payload)
            }
        case "CLOSE_COUNTRY":
            return{
                ...state,
                countries: state.countries.filter(e=>e!==action.payload)
            }
        default:
            return state
    }
}
export default reducer