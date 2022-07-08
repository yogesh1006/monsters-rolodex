import { Component } from "react";
import Card from "../card/card.component";
import './card-list.styles.css';
export class CardList extends Component {
  render() {
    const { monsterslist } = this.props;
    return (
      <div className="card-list">
        {monsterslist.map((monster) => {
          return (
           <Card monsterInstance={monster}/>
          );
        })}
      </div>
    );
  }
}

export default CardList;
