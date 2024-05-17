import React,{useState,useEffect} from 'react'
import Navbar from '../Navbar/Navbar'
import Card from '../Cards/Card'
import InputGroup from '../Filters/Category/InputGroup'

const Episode = () => {

   let [id,setid]=useState(1)
   let [info,setinfo]=useState([])
   let [results,setresults]=useState("")
   let {air_date,name}=info
  let api=`https://rickandmortyapi.com/api/episode/${id}`

  useEffect(()=>{
    (async function(){
      let data=await fetch(api).then(res=>res.json())
      setinfo(data)

      let a=await Promise.all(
      data.characters.map((x)=>{
      return fetch(x).then((res)=>res.json())
      })
      )
      setresults(a)
    })()


  },[api])
  return (
    <div>
      <Navbar/>
      <div className="container">
        <div className="row my-4">
        <span className="text-primary"></span>
          <h1 className="text-center mb-4">
          Episode: <span className='text-primary'> {name===""?"unknown":name}</span></h1>
          <h5 className="text-center">Air Date {air_date}</h5>
        </div>
        <div className="row">
          <div className="col-lg-3 col-12 col-md-12">
          <div className="text-center mb-4">
           Pic Episode
           <InputGroup setid={setid} name="Episode" total={51}/>
          </div>
          </div>
          <div className="col-lg-8">
            <div className="row"> <Card page="/episode/" results={results}/></div>
         </div>

        </div>
      </div>

      
    </div>
  )
}

export default Episode
