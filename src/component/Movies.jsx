import React, { Component } from "react";
import { movies } from "./getMovies";

export default class Movies extends Component {
  constructor() {
    super();
    this.state = {
      hover: "",
      parr: [1],
    };
  }
  render() {
    let movie = movies.results;
    return (
      <>
        {movie === " " ? (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <div>
            <h3 className="text-center">Trending</h3>
            <div className="movies-list">
              {movie.map((movieObj) => (
                <div
                  className="card movies-card"
                  onMouseEnter={() => this.setState({ hover: movieObj.id })}
                  onMouseLeave={() => this.setState({ hover: "" })}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`}
                    alt={movieObj.title}
                    className="card-img-top movies-img"
                  />
                  {/* <div className="card-body"> */}
                  <h5 className="card-title movies-title">
                    {movieObj.original_title}
                  </h5>
                  {/* <p className="card-text movies-text">{movieObj.overview} </p> */}
                  <div
                    className="button-wrapper"
                    style={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "center",
                    }}
                  >
                    {this.state.hover === movieObj.id && (
                      <a href="/" className="btn btn-primary movies-button">
                        Add to Favourit
                      </a>
                    )}
                  </div>
                  {/* </div> */}
                </div>
              ))}
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    <a className="page-link" href="#">
                      Previous
                    </a>
                  </li>
                  <li className="page-item">
                    {this.state.parr.map((value) => (
                      <a className="page-link" href="#">
                        1
                      </a>
                    ))}
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        )}
      </>
    );
  }
}
