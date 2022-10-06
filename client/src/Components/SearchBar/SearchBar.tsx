import s from "./SearchBar.module.css"
import { FaSearch } from "react-icons/fa"

export const SearchBar = ()=>{
    return(
        <div className={s.box}>
            <form className={s.form}>
                <input placeholder="Search city..." className={s.text_input} type="text"/>
                <button className={s.search_button} type="submit"><FaSearch className={s.search_icon}/></button>
            </form>
        </div>
    )
   
}