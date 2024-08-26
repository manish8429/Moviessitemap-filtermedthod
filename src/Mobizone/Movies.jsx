import React, { useState } from "react";
import { movies } from "./Data.js";
import "../index.css";

const Movies = () => {
  const [movieslist, setMovieslist] = useState(movies);
  
  const filterData = (cat) => {
    setMovieslist(movies.filter((data) => data.category == cat))
  }
  return (

    <>
  <div style={{ display: 'flex', flexWrap: "wrap", justifyContent: 'center', gap: '2rem' }}>
  <button onClick={()=>setMovieslist(movies)} type="button" className="btn btn-outline-primary">All</button>
  <button onClick={()=>filterData("Action")} type="button" className="btn btn-outline-secondary">Action</button>
  <button onClick={()=>filterData("Thriller")} type="button" className="btn btn-outline-success">Thiller</button>
  <button onClick={()=>filterData("Animation")} type="button" className="btn btn-outline-danger">Animation</button>
  <button onClick={()=>filterData("Horror")} type="button" className="btn btn-outline-warning">Horrer</button>
  <button onClick={()=>filterData("Drama")} type="button" className="btn btn-outline-info">Drama</button>
  <button onClick={()=>filterData("Sci-Fi")} type="button" className="btn btn-outline-light">Sci-Fi</button>
 
</div>

{/*  upper button */}

    <div
      className="container"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "2rem",
        marginTop: "2rem",
        padding: "1rem",
      }}
    >
      {movieslist.map((data) => (
        <div
          className="movie-card"
          style={{
            width: "200px",
            borderRadius: "10px",
            border: "3px solid yellow",
            overflow: "hidden",
            cursor: "pointer",
          }}
          key={data.id}
        >
          <img
            src={data.poster_path}
            alt={data.title}
            style={{
              width: "100%",
              height: "auto",
              borderBottom: "3px solid yellow",
            }}
          />
          <div
            style={{
              padding: "1rem",
              backgroundColor: "#fff",
              textAlign: "center",
            }}
          >
            <h3 style={{ margin: "0", fontSize: "1rem", color: "#333" }}>
              {data.title}
            </h3>
            <h4
              style={{
                margin: "0",
                fontSize: "1rem",
                color: "#333",
                marginTop: ".5rem",
              }}
            >
              {data.release_date}
            </h4>
            <h4 style={{ margin: "0", fontSize: "1rem", color: "#333" }}>
              {data.category}
            </h4>
          </div>
        </div>
      ))}
    </div>
    </>
   
  );
};

export default Movies;
