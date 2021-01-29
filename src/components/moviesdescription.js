import React from 'react'
import { useParams } from "react-router-dom";
import {MovieData} from "./MovieData"

function Moviesdescription  ()  {
    const {moviesId} = useParams()
    console.log(moviesId)
    console.log(MovieData)
    
    return (
        <div className="descdiv">
            
            <p><strong>{MovieData.find(movie => movie.id == moviesId).decreptions}</strong></p>
            <iframe className="paradisc" width="530" height="315" src={MovieData&& MovieData.find(movie=>movie.id==moviesId).Video}
                ></iframe>


        </div>
    )
}

export default Moviesdescription
