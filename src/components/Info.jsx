import React,{useState,useEffect} from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';

const Info = () => {
    const [data,setData] = useState({});
    const {id,category}= useParams();
    console.log("id is this",id)
    useEffect(()=>{
        axios.get(`https://swapi.dev/api/${category}/${id}`)
        .then(
            response =>{
                console.log(response.data)
                setData(response.data)
            }
        ).catch(
            (err)=>{
            console.log("there is an error",err)
        }
        )
    },[id,category])



    return (
        <div>
            {
                category ==="people"?
            <div>
            <h1>{data.name}</h1>
            <p>height: {data.height}</p>
            <p>Mass: {data.mass}</p>
            <p>Hair Color: {data.hair_color}</p>
            <p>skin color: {data.skin_color}</p>
            </div>:category === "planets"?
            <div>
            <h1>{data.name}</h1>
            <p>diameter: {data.diameter}</p>
            <p>climate: {data.climate}</p>
            <p>terrain: {data.terrain}</p>
            <p>population: {data.population}</p>
            </div>:null
            }

        </div>
    );
};

export default Info;