import s from "./Card.module.css"
import { Payload } from "../../redux/Actions"


export const Card = (props:{city:Payload})=>{
    return(
        <div className={s.box}>
            <h1>{props.city.name}</h1>
            <div className={s.bottom_container}>
                <div className={s.temp_container}>
                    <span className={s.max}></span>
                    <span className={s.min}></span>
                </div>
                <div className={s.icon_container}>

                </div>
            </div>
        </div>
    )
}