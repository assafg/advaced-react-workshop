import React, { Component } from 'react'
import { showLookup, showCast } from '../api';

class Show extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    showLookup(this.props.params.showId)
      .then(details => {
        this.setState({ details });
        showCast(details.id)
          .then(cast => this.setState({ cast }));
      });
  }

  back() {
    this.props.router.goBack();
  }

  goToActorPage(actorId) {
    this.props.router.push(`actor/${actorId}`)
  }

  render () {
    const { details, cast } = this.state;
    if (!details) {
      return null;
    }
    return (
      <div>
        <div className="section">
          <div className="columns">
            <div className="column is-1">
              <a className="button" onClick={this.back.bind(this)}>
                <span className="icon"><i className="fa fa-chevron-left" /></span>
              </a>
            </div>
            <div className="column">
              <h1 className="title is-1">
                {details.name}
              </h1>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <figure className="image">
                <img src={details.image.original} alt={details.name}/>
              </figure>
            </div>
            <div className="column">
              <ul>
                <li>{details.genres.join(', ')}</li>
                <li>Avg. rating: {details.rating.average}</li>
                {Object.keys(details)
                  .filter(key => key !== 'url')
                  .filter(key => key !== 'summary')
                  .filter(key => (typeof details[key] === 'string') )
                  .map(key => (
                  <li key={key}>{key}: {details[key]}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="section">
          <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
        </div>
        {cast &&
          <div className="columns">
            {
              cast.map((c, i) => (
                <div
                  className="column pointer"
                  key={i}
                  onClick={this.goToActorPage.bind(this, c.person.id)}
                >
                  <p>{c.character.name}</p>
                  <p>{c.person.name}</p>
                  <figure className="image is-128x128">
                    <img src={c.character.image.medium} alt={c.person.name} />
                  </figure>
                </div>
              ))
            }
          </div>
        }
      </div>);
  }
}

export default Show;
