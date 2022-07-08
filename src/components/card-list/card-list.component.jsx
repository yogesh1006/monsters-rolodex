import { Component } from "react";

export class CardList extends Component {
  render() {

    const {monsterslist} = this.props
    return (
      <div>
        {monsterslist.map((monster) => {
          return <h2 key={monster.id}>{monster.name}</h2>;
        })}
      </div>
    );
  }
}

export default CardList;
