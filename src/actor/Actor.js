import React, { PropTypes } from 'react'
import { showActor, showActorCastCredit } from '../api';
import './Actor.css';

class Actor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    showActor(this.props.params.actorId)
      .then(details => this.setState({ details }));
    showActorCastCredit(this.props.params.actorId)
      .then(credits => this.setState({ credits }));
  }
  back() {
    this.props.router.goBack();
  }

  goToShow(id) {
    this.props.router.push(`/show/${id}`);
  }

  render () {
    const { details, credits } = this.state;
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
                <img src={details.image.original}/>
              </figure>
            </div>
            <div className="column">
              {credits &&
                <ul>
                  {credits.map((c, i) => (
                    <li key={i} className="cast-credits-list pointer" onClick={this.goToShow.bind(this, c._embedded.show.externals.thetvdb)}>
                      <p>{c._embedded.show.name}</p>
                      <figure className="image">
                        <img src={c._embedded.show.image.medium}/>
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
