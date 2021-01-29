import React from 'react'

const Rate = ({ rating, setRatingSearch }) => {
    const stars = (y) => {
        let arrayStars = [];
        for ( let i = 1; i <= 5; i++) {
            if (i <= y) {
                arrayStars.push(
                    <span className="span" key={i} onClick={() => setRatingSearch(i)}>★</span>
                );
            } else {
                arrayStars.push(
                    <span key={i} onClick={() => setRatingSearch(i)}>☆</span>
                );
            };
        };
        return arrayStars;
    }
    return <div>{stars(rating)}</div>
};
Rate.defaultProps = {
  setRatingSearch: () => {},
  rating: 1,
};


export default Rate
