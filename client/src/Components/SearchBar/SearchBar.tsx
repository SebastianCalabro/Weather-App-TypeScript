import s from "./SearchBar.module.css"

export const SearchBar = ()=>{
    return(
        <div className={s.box}>
            <form>
                <input type="text"/>
                <button type="submit">search</button>
            </form>
        </div>
    )
   
}