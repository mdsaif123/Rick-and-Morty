import React from 'react'
import FilterBtn from '../FilterBtn'

const Gender = ({setPageNumber,setgender}) => {
    let genders=["Male","Female","Genderless","Unknown"]
  return (
    <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Gender
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      {
        genders.map((item,index)=>(
            <FilterBtn task={setgender} setPageNumber={setPageNumber} key={index} name="gender" item={item} index={index}/>
        ))
      }
      
      </div>
    </div>
  </div>
  )
}

export default Gender
