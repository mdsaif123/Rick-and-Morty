import React, { useEffect, useState } from 'react';
import Filter from "../Filters/Filter"
import Card from "../Cards/Card"
import Pagination from "../Paginations/Pagination"
import Search from "../Search/Search"
import Navbar from "../Navbar/Navbar"


const Home = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const [fetchedData, setFetchedData] = useState([]);
    const [search,setsearch]=useState("")
    const [status,setstatus]=useState("")
    const [gender,setgender]=useState("")
    const [species,setspecies]=useState("")
  
   
    let {info, results } = fetchedData;
    console.log(results)
    let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(api);
          const data = await response.json();
          setFetchedData(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, [api]);
  
  return (
    
      <>
    <Navbar/>
    <div className="container my-5">

    <Search setsearch={setsearch}/>
  
      <div className="row mt-3">
        <div className="col-lg-3 col-12 mb-4">
        <Filter setspecies={setspecies} setgender={setgender}  setstatus={setstatus} setPageNumber={setPageNumber}/>
        </div>
        <div className="col-lg-8 col-12">
      
        <div className="row">
        <Card page="/" results={results}/>
          
        </div>
        </div>
      </div>
    </div>
    <Pagination setPageNumber={setPageNumber} pageNumber={pageNumber}/>
    </>

  )
}

export default Home
