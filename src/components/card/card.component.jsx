import { Component } from "react";
import './card.styles.css';

export class Card extends Component {
  render() {
    const {name, id, email} = this.props.monsterInstance;

    return (
      <div className="card-container" key={id}>
        <img
          alt={`${name}`}
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
        />
        <h3>{name}</h3>
        <p>{email}</p>
      </div>
    );
  }
}

export default Card;
