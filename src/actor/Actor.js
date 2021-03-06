import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './Actor.css';

class Actor extends Component {

  static propTypes = {
    fetchActor: PropTypes.func,
    actor: PropTypes.object,
  }

  componentDidMount() {
    this.props.fetchActor(this.props.params.actorId);
  }

  back() {
    this.props.router.goBack();
  }

  goToShow(id) {
    this.props.router.push(`/show/${id}`);
  }

  render () {
    const { actor: details } = this.props;
    if (!details) {
      return <div/>;
    }
    const credits = details.credits;
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
              {credits &&
                <ul>
                  {credits.map((c, i) => (
                    <li key={i} className="cast-credits-list pointer" onClick={this.goToShow.bind(this, c._embedded.show.externals.thetvdb)}>
                      <p>{c._embedded.show.name}</p>
                      <figure className="image">
                        <img src={c._embedded.show.image.medium} alt={c._embedded.show.name} />
                      </figure>
                    </li>
                  ))}
                </ul>
              }
            </div>
          </div>
        </div>
      </div>);
  }
}

export default Actor;
