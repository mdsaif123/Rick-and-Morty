import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ results,page }) => {
  let display;

  if (results && results.length > 0) {
    display = results.map((character) => {
      const { id, name, image, location, status } = character;
      let statusClass = "text-secondary"; // Default status class

      if (status === "Alive") {
        statusClass = "text-success";
      } else if (status === "Dead") {
        statusClass = "text-danger";
      }

      return (
        <Link
        style={{textDecoration:"none"}}
         to={`${page}${id}`} key={id} className="col-12 col-md-6 col-lg-4 my-3"> {/* Adjust column classes for responsiveness */}
          <div className="card">
            <img src={image} alt={name} className="card-img-top img-fluid" />
            <div className="card-body">
              <div className='d-flex justify-content-between'>
                <h5 className="card-title">{name}</h5>
                <div className={`badge fs-6 ${statusClass}`}>{status}</div>
              </div>
              {location && (
                <div>
                  <p className="card-text fs-6">Last Location</p>
                  <p className="card-text fs-5">{location.name}</p>
                </div>
              )}
            </div>
          </div>
        </Link>
      );
    });
  } else {
    display = <p>No Characters found :/</p>;
  }

  return <div className="row">{display}</div>; {/* Wrap all cards in a row div */}
};

export default Card;
