import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  onSearchChange = (e) => {
    const searchString = e.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField: searchString };
    });
  };

  render() {
    console.log("render");

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    let filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <input
          type="search"
          placeholder="Search monsters"
          onChange={onSearchChange}
        />
        <div>
          {filteredMonsters.map((monster) => {
            return <h2 key={monster.id}>{monster.name}</h2>;
          })}
        </div>
      </div>
    );
  }
}

export default App;
