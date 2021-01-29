import React from 'react'
import Rate from "./components/Rate"

const SearchMovie = ({ setNameSearch, ratingSearch, setRatingSearch }) => {
    return (
        <div>
            <input className="search" type="text" placeholder="Tap here !"
                onChange={(e) => setNameSearch(e.target.value)} />
             <div className="rating-search">
          <Rate rating={ratingSearch} setRatingSearch={setRatingSearch} />
        </div>
            <button  className="searchbutt">Search</button>
        </div>
    )
}

export default SearchMovie
