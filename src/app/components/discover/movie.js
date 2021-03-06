import React, {Component} from 'react';
import { withRouter } from 'react-router';

class Movie extends Component {
  constructor(props) {
    super(props);
  }

  onClick() {
    var id = this.props.movie.id;
    this.props.router.push(`/movie/${id}`);
  }

  render() {
    let image = null;

    if (this.props.movie.poster_path) {
      image = <img src={"https://image.tmdb.org/t/p/w300/" + this.props.movie.poster_path} />
    }
    else {
      image = <img src="http://placehold.it/300x450?text=No%20Image" />
    }

    return (
      <div className="discover__movie" onClick={this.onClick.bind(this)}>
        {image}
        <div className="discover__movie__title">{this.props.movie.title}</div>
      </div>
    )
  }
}

export default withRouter(Movie);
