import { useAppSelector } from "../../redux/app-store"
import { Card } from "../Card/Card"
import s from "./Cards.module.css"
import { Payload } from "../../redux/Actions"

export const Cards = ()=>{
    const countries = useAppSelector(state=>state.countries)
    console.log(countries)
    return(
        <div className={s.box}>
            {
                countries.length > 0 ?
                countries.map((c:Payload)=><Card key={c.id} city={c}/>) :
                ""
            }
        </div>
    )
    
}