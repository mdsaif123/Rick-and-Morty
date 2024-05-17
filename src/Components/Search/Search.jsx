import React from 'react'
import "./Search.css"

const Search = ({setsearch}) => {
  return (
   

    <div className='search-box'>
    <div>
        <input onChange={(e)=>{
            setsearch(e.target.value)
        }} type="text" className='img-fluid' placeholder="Search*" name="" id="" />
        <button>Search</button>
    </div>
      
    </div>
  )
}

export default Search
