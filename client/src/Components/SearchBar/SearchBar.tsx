import react from "react"
import { useState, ChangeEvent } from 'react';
import s from "./SearchBar.module.css"
import { FaSearch } from "react-icons/fa"
import action from "../../redux/Actions";
import { useAppDispatch, useAppSelector } from "../../redux/app-store";
import Swal from "sweetalert2"

export const SearchBar = ()=>{
    const countries = useAppSelector(state=>state.countries)
    const notCity = useAppSelector(state=>state.notCity)
    const dispatch = useAppDispatch()
    const [city, setCity] = useState("")
    const input = document.querySelector("input")
    let random:string = "a"
    

    if(notCity){
        Swal.fire({
            title: 'Sorry :(',
            text: 'That city does not exists',
            icon: 'error',
            confirmButtonText: 'OK!',
          })
          dispatch(action.noCityFalse())
    }

    const handleSubmit = (event: ChangeEvent<HTMLFormElement>)=>{
        event.preventDefault()
        console.log(input)
        input? input.value = "" : random = ""
        const repeatedCity = countries.filter(c=>c.name===city || c.name.toLowerCase()===city)
        if(repeatedCity.length < 1){
            dispatch(action.getCountry(city))
        }else{
            Swal.fire({
                title: 'Oops',
                text: 'That city is already showed',
                icon: 'error',
                confirmButtonText: 'OK!',
              })
        }
    }
    const handleChange = (event:ChangeEvent<HTMLInputElement>) =>{
        setCity(event.target.value)
    }
    return(
        <div className={s.box}>
            <form onSubmit={handleSubmit} className={s.form}>
                <input id="rikitun" onChange={handleChange} placeholder="Search city..." className={s.text_input} type="text"/>
                <button className={s.search_button} type="submit"><FaSearch className={s.search_icon}/></button>
            </form>
        </div>
    )
   
}