import React from 'react'
import FilterBtn from '../FilterBtn'

const Species = ({setspecies,setPageNumber}) => {
    let species=["Human","Alien","Humanoid","poopybutthole","Mythological","Unknown","Animal","Disease","Robot","Planet"]
  return (
    <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
     Species
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
       {species.map((item,index)=>(
          <FilterBtn task={setspecies} setPageNumber={setPageNumber} key={index} item={item} index={index} name="species"/>
       ))}
      </div>
    </div>
  </div>
  )
}

export default Species
