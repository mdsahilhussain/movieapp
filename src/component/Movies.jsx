import React, { Component } from "react";
import axios from "axios";

export default class Movies extends Component {
  constructor() {
    super();
    this.state = {
      hover: "",
      parr: [1],
      currPage: 1,
      movies: [],
    };
  }

  async componentDidMount() {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=5540e483a20e0b20354dabc2d66a31c9&language=en-US&page=${this.state.currPage}`
    );
    let data = res.data;
    this.setState({
      movies: [...data.results],
    });
    console.log(data);
  }

  changeMovies = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=5540e483a20e0b20354dabc2d66a31c9&language=en-US&page=${this.state.currPage}`
    );
    let data = res.data;
    this.setState({
      movies: [...data.results],
    });
  };

  handleRight = () => {
    let temparr = [];
    for (let i = 1; i < this.state.parr.length + 1; i++) {
      temparr.push(i);
    }
    this.setState(
      {
        parr: [...temparr],
        currPage: this.state.currPage + 1,
      },
      this.changeMovies
    );
  };

  handleLeft = () => {
    let temparr = [];
    for (let i = 1; i < this.state.parr.length + 1; i++) {
      temparr.push(i);
    }
    this.setState(
      {
        parr: [...temparr],
        currPage: this.state.currPage - 1,
      },
      this.changeMovies
    );
  };

  render() {
    // let movie = movies.results;
    return (
      <>
        {this.state.movies === " " ? (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <div>
            <h3 className="text-center">Trending</h3>
            <div className="movies-list">
              {this.state.movies.map((movieObj) => (
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
                    <a className="page-link" onClick={this.handleLeft}>
                      Previous
                    </a>
                  </li>

                  {this.state.parr.map((value) => (
                    <li className="page-item">
                      <a className="page-link" onClick={() => this.hadle}>
                        {value}
                      </a>
                    </li>
                  ))}
                  <li className="page-item">
                    <a className="page-link" onClick={this.handleRight}>
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
