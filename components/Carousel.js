import Image from 'next/image';
import Link from 'next/link';
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
            <h3 className='text-2xl'>{item.title}</h3>

            <div className='flex-col-1 mt-3'>
              <Image className='rounded-lg' src={item.image} width={300} height={180}/>
              
            </div>
            <Link className='text-xs underline-offset-2 hover:decoration-dashed hover:underline' href={item.url}>{item.url}</Link>

            <p className='text-sm text-gray-800 mt-3'>{item.description}</p>
          </div>
        );
      })}

      <div className='mt-3 text-sm gap-3 '>
        <button className='mr-3 underline-offset-2 hover:decoration-dashed hover:underline' onClick={handlePrevClick}>Previous</button>
        <button className='underline-offset-2 hover:decoration-dashed hover:underline' onClick={handleNextClick}>Next</button>
      </div>

    </div>
  );
}

export default Carousel