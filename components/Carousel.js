import React, { useState } from 'react'


function Carousel({items}) {
    const [currentItem, setCurrentItem] = useState(0);


  // Event handler for clicking the "next" button
  const handleNextClick = () => {
    setCurrentItem((currentItem + 1) % items.length);
  };

  // Event handler for clicking the "previous" button
  const handlePrevClick = () => {
    setCurrentItem((currentItem + 1) % items.length);
  };

 

  return (
    <div className="mt-6">
      {/* Use the map() method to loop through the items */}
      {items.map((item, index) => {

        
        // Add the style attribute with the "display: none" style
        // to all items except the one with the index specified
        // by the currentItem state variable
        const style = index === currentItem ? {} : { display: 'none' };

        return (
            <div className="carousel-item" style={style}>
            <h3 className='text-xl'>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        );
      })}

      <div className='mt-3 text-sm gap-3'>
        <button onClick={handlePrevClick}>Previous</button>
        <button onClick={handleNextClick}>Next</button>
      </div>

    </div>
  );
}

export default Carousel