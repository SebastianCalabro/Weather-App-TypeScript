import { useEffect } from "react"
import { useDispatch } from "react-redux"
import s from "./Home.module.css"
import { BsFillCloudyFill } from "react-icons/bs"
import { MdWbSunny } from "react-icons/md"
import { Cards } from "../Cards/Cards"
import action from "../../redux/Actions"
import { useAppSelector, useAppDispatch } from '../../redux/app-store'

export const Home = () => {
    const dispatch = useAppDispatch()
    useEffect(()=>{
        dispatch(action.getCountry("London"))
    },[])
    return (
        <div className={s.box}>
            <Cards/>
            <section>
                <div className={s.row}>
                    <div className={s.line}>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                    </div>
                    <div className={s.line}>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                    </div>
                </div>
                <div className={s.row}>
                    <div className={s.line}>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                    </div>
                    <div className={s.line}>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                    </div>
                </div>
                <div className={s.row}>
                    <div className={s.line}>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                    </div>
                    <div className={s.line}>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                    </div>
                </div>
                <div className={s.row}>
                    <div className={s.line}>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                    </div>
                    <div className={s.line}>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                    </div>
                </div>
                <div className={s.row}>
                    <div className={s.line}>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                    </div>
                    <div className={s.line}>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                    </div>
                </div>
                <div className={s.row}>
                    <div className={s.line}>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                    </div>
                    <div className={s.line}>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                    </div>
                </div>
                <div className={s.row}>
                    <div className={s.line}>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                    </div>
                    <div className={s.line}>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                    </div>
                </div>
                <div className={s.row}>
                    <div className={s.line}>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                    </div>
                    <div className={s.line}>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                    </div>
                </div>
                <div className={s.row}>
                    <div className={s.line}>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                    </div>
                    <div className={s.line}>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                    </div>
                </div>
                <div className={s.row}>
                    <div className={s.line}>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                    </div>
                    <div className={s.line}>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                        <BsFillCloudyFill className={s.icons}/>
                        <MdWbSunny className={s.icons}/>
                    </div>
                </div>
            </section>
        </div>
    )
}