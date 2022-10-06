import s from "./NavBar.module.css"
import { SearchBar } from "../SearchBar/SearchBar"

export const NavBar = ()=> {
    return(
        <div className={s.box}>
            <SearchBar/>
        </div>
    )
}