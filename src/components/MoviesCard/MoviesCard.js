import React from 'react'
import { Link } from 'react-router-dom';
import Rate from "../Rate"
const MovieCard = ({movie : {image, name, date, rating, type, decreptions ,id  }}) => {
    return (
        <div className='card'>
            <div className='cardLeft'>
                <img className="img" src= {image} alt='poster'/>
            </div>
            <div className ='cardRight'>
                <h1>{name}</h1>
           <div className='cardRdetail'>
               <div>
                        {date}
                    </div>
                    <div>
                        <Rate rating={rating} />
                    </div>
                    <div>
                  {type}
                  </div>
           </div>
                <div className='cardRrating'>
                    
                    <p className="des">{decreptions}</p>
                   <div>
                        <Link className="trailer" to={`discription/${id}`}>Movies discription</Link>
                    </div>
                        
           </div>
            </div>
        </div>
    );
};
export default MovieCard