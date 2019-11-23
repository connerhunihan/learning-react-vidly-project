import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Table extends Component {
  state = {
    movies: getMovies()
  };

  handleDelete = movie => {
    {
      const movieList = this.state.movies.filter(m => m._id !== movie._id);
      this.setState({ movies: movieList });
    }
  };

  resetTable = () => {
    this.setState({ movies: getMovies() });
  };

  render() {
    const { length: count } = this.state.movies; // this is creating a new constant COUNT, and assigning it the LENGTH property of the THIS.STATE.MOVIES object

    if (count === 0) {
      return (
        <React.Fragment>
          <p>There are no movies in the database.</p>
          <button onClick={this.resetTable} className="btn btn-danger btn-sm">
            Reset Database
          </button>
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <p>Showing {this.state.movies.length} movies in the database</p>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map(movie => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Table;
