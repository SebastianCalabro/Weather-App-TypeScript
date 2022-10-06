import { useAppSelector } from "../../redux/app-store"
import { Card } from "../Card/Card"
import s from "./Cards.module.css"
import { Payload } from "../../redux/Actions"

export const Cards = ()=>{
    const countries = useAppSelector(state=>state.countries)
    console.log(countries)
    const fakeCity: Payload[] = [{name:"London",max:"12",min:"10",weather:"sunny"}, {name:"London",max:"12",min:"10",weather:"sunny"}]
    console.log(fakeCity)
    return(
        <div className={s.box}>
            {
                fakeCity.length > 0 ?
                fakeCity.map((c:Payload)=><Card city={c}/>) :
                ""
            }
        </div>
    )
    
}