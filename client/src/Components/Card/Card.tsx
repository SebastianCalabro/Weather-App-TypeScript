import s from "./Card.module.css"
import { Payload } from "../../redux/Actions"


export const Card = (props:{city:Payload})=>{
    console.log(props)
    return(
        <div className={s.box}>
            <div className={s.blured_background}></div>
            <div className={s.info_container}>
                <h1 className={s.city_name}>{props.city.name}</h1>
                <div className={s.bottom_container}>
                    <div className={s.temp_container}>
                        <span className={s.max}>{props.city.max}°</span>
                        <span className={s.min}>{props.city.min}°</span>
                    </div>
                    <div className={s.icon_container}>
                        <span>{props.city.weather}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}