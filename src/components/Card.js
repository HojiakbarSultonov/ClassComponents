import React from "react";



const Card = (props) => {
    const film = props.movies;
  return (
    <div>
      <h1 className="heading">🎞️ My movies</h1>

      {film.map((item, ind) => {
        return (
          <div className="card" key={ind}>
            <div className="top">
              <h2>{item.name}</h2>
              <img src={item.urlImg} alt="" className="w-25" />
            </div>
            <div className="bottom">
              <p className="mt-3">{item.liked}</p>
              <p>{item.year}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
