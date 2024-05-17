import React from 'react';
import Status from './Category/Status';
import Gender from './Category/Gender';
import Species from './Category/Species';

const Filter = ({ setPageNumber, setstatus, setgender, setspecies }) => {

  const clear = () => {
    setPageNumber("");
    setstatus("");
    setgender("");
    setspecies("");
  }

  return (
    <div className=' col-12 col-lg-12 '>
      <div className="row my-4">
        <div className="d-flex justify-content-between">
          <h4>Filter</h4>
          <h6 onClick={clear} className='text-primary text-decoration-underline' style={{ cursor: "pointer" }}>Clear filter</h6>
        </div>
      </div>

      <div className="accordion " id="accordionExample">
        <div className="row">
          <div className="  ">
            <Status setPageNumber={setPageNumber} setstatus={setstatus} />
          </div>
          <div className=" ">
            <Species setspecies={setspecies} setPageNumber={setPageNumber} />
          </div>
          <div className=" ">
            <Gender setgender={setgender} setPageNumber={setPageNumber} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
