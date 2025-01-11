import React, {useState} from 'react';
import { FaStar } from 'react-icons/fa';

export default function StarRating({ totalStars = 5} ) {

  const [selectedStars, setSelectedStars] = useState(0);
  const Star = ({selected = false, onSelect = f => f}) => (
    <FaStar
    id='FaStar'
    color={selected ? "red" : "grey"}
    style={{'cursor': "pointer", '--hover':"yellow" }}
    onClick={onSelect} />
  );

const createArray = length => [...Array(length)]

  return (
    <div className='star-rating'>
      <div className='starFlex'>
      
      {createArray(totalStars).map((n, i) => (
        <Star 
          key={i}
          selected={selectedStars > i} 
          onSelect={() => setSelectedStars(i + 1)}  />
      ))}
      </div>

  <div className='stars'>
    <p className='star-rating-count'>
      <span id='selectStar'>
        {selectedStars} 
      </span>
        <span></span> <span></span>
          Stars out of <span></span>
        <span id='selectStar'>
          {totalStars}
          </span>
    </p>
  </div>  
    </div>
);
};