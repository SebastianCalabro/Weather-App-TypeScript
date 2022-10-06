import { MouseEvent } from "react"
import { useAppDispatch } from "../../redux/app-store"
import s from "./Card.module.css"
import action, { Payload } from "../../redux/Actions"
import { IoMdClose } from "react-icons/io"


export const Card = (props:{city:Payload})=>{
    const dispatch = useAppDispatch()
    const handleClose = (event:MouseEvent)=>{
        dispatch(action.closeCountry(props.city.name))
        
    }
    return(
        <div className={s.box}>
            <div className={s.blured_background}></div>
            <div className={s.info_container}>
                <div className={s.top_container}>
                    <h1 className={s.city_name}>{props.city.name?props.city.name.toUpperCase():""}</h1>
                    <button onClick={handleClose} className={s.close_button}><IoMdClose className={s.close_icon}/></button>
                </div>
                <div className={s.bottom_container}>
                    <div className={s.temp_container}>
                        <div className={s.each_temp_div}>
                            <span>MAX</span>
                            <span className={s.max}>{props.city.max}°</span>
                        </div>
                        <div className={s.each_temp_div}>
                            <span>MIN</span>
                            <span className={s.min}>{props.city.min}°</span>
                        </div>
                    </div>
                    <div className={s.icon_container}>
                    <img src={`http://openweathermap.org/img/wn/${props.city.weather}@2x.png`} alt="" className={s.img}/>
                    </div>
                </div>
            </div>
        </div>
    )
}