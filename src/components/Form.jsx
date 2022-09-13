import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";


const Form =() =>{
const [category,setCategory] = useState("people")
const [id,setId] = useState("");

// making useNavigate into a variable
const navigate = useNavigate();
const submit =(e)=>{
    e.preventDefault()
    console.log("hola")
    navigate(`/${category}/${id}`)
}


    return(
        <div className='container'>
            <form onSubmit={submit} className='d-flex align-item-center justify-content-center gap-3'>
                <div className="form-group">
                    <label >search form:</label>
            <select onChange={(e)=> setCategory(e.target.value)}>
                <option value="people">people</option>
                <option value="planets">planets</option>
                <option value="films">films</option>
                <option value="species">species</option>
                <option value="vehicles">vehicles</option>
                <option value="starships">starships</option>
            </select>
                </div>
                <div className="form-group">
                    <label htmlFor="">id</label>
                    <input  onChange={(e)=>setId(e.target.value)} type="number" placeholder='numbers only' />
                </div>
                <input type="submit" value='search' className='btn btn-primary' />
            </form>
        </div>
    )
}


export default Form;