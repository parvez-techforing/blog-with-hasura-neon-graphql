import React from 'react';

const Search = () => {
    return (
        <>
          <div className='bg-primary text-white lg:px-24 h-72 flex items-center'>
          <div>
            <h1 className='text-2xl font-semibold'>How can we help you?</h1>
            <input type='text' placeholder='Search' className='bg-white text-black px-4 py-2 w-96 mt-2 outline-0' />
            </div>
          </div>  
        </>
    );
};

export default Search;