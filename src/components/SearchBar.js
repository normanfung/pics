import React from "react";

class SearchBar extends React.Component {
  state = { term: "Birds" };

  onClick = (event) => {
    event.preventDefault();
    var buttons = document.querySelectorAll(".button");
    buttons.forEach((item) => {
      item.classList = "ui button item";
    });
    event.target.classList += " active";

    this.props.onSubmit(event.target.value);
  };

  render() {
    return (
      <div className="ui segment">
        <h2 className="ui center aligned header">
          <img
            src="https://yahyaconsultants.com/wp-content/uploads/2018/06/Photo-icon.png"
            className="ui circular image"
            alt="Images Icon"
          ></img>
        </h2>
        <h1
          className="ui center aligned header"
          style={{ fontFamily: "Ballet" }}
        >
          Pick Me!
        </h1>
        <div className="ui four item menu">
          <button
            className="ui button item"
            onClick={this.onClick}
            value="Mountain"
          >
            Mountain
          </button>
          <button
            className="ui button item"
            onClick={this.onClick}
            value="Beaches"
          >
            Beaches
          </button>
          <button
            className="ui button item"
            onClick={this.onClick}
            value="Birds"
          >
            Birds
          </button>
          <button
            className="ui button item"
            onClick={this.onClick}
            value="Food"
          >
            Food
          </button>
        </div>
      </div>
    );
  }
}

export default SearchBar;
