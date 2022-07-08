import React, { Component } from "react";
import './search-box.styles.css'
export class SearchBox extends Component {
  render() {
    const { className, onSearchHandler, placeholder } = this.props;
    return (
      <input
        className={className}
        type="search"
        placeholder={placeholder}
        onChange={onSearchHandler}
      />
    );
  }
}

export default SearchBox;
