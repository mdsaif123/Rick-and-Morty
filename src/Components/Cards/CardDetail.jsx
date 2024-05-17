import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import { useParams } from 'react-router-dom';

const CardDetail = () => {
  let { id } = useParams();
  const [fetchedData, setFetchedData] = useState({});

  let { name, image, origin, gender, location, species, status } = fetchedData;
  let api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(api);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setFetchedData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [api]);

  return (
    <div>
      <Navbar />
      <div className="container d-flex justify-content-center">
        <div className="d-flex flex-column">
          <h1 className="">{name}</h1>
          <img src={image} alt={name} className='img-fluid' />
          <h1 className='badge badge-primary p-2 my-2 text-dark'>{status}</h1>
          <p>Origin: &nbsp;{origin?.name}</p>
          <p>Gender:&nbsp;{gender}</p>
          <p>Location:&nbsp;{location?.name}</p>
          <p> Species:&nbsp;{species}</p>
        </div>
      </div>
    </div>
  );
}

export default CardDetail;
