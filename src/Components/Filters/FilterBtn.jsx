import React from "react";

const FilterBtn = ({name,index,item,task,setPageNumber}) => {
  return (

  
    <div>
      <style jsx>
{
    `
    .x:checked+label{
        background-color:#0b5ed7;
        color:white
    }
    
    input[type="radio"]{
        display:none;
    }`
}
    </style>
      <div>
        <div className="form-check">
          <input
          onClick={()=>{
            setPageNumber(1)
            task(item)
          }}
            className="form-check-input x"
            type="radio"
            name={name}
            id={`${name}-${index}`}
          />
          <label class="btn btn-outline-primary" for={`${name}-${index}`}>
          {item}
          </label>{" "}
          <label
            className="form-check-label"
            htmlFor="flexRadioDefault1"
          ></label>
        </div>
      
      </div>
    </div>
  );
};

export default FilterBtn;
