import React from "react";

class SelectionComponent extends React.Component {
  render() {
    return (
      <div id="options">
        <input
          type="radio"
          value="all"
          name="option"
          onChange={event => this.props.changeSelection(event.target.value)}
          defaultChecked="checked"
        />
        <label>All</label>
        &nbsp;
        <input
          type="radio"
          value="complete"
          name="option"
          onChange={event => this.props.changeSelection(event.target.value)}
        />
        <label>Complete</label>
        &nbsp;
        <input
          type="radio"
          value="incomplete"
          name="option"
          onChange={event => this.props.changeSelection(event.target.value)}
        />
        <label>Incomplete</label>
        &nbsp;
      </div>
    );
  }
}

export default SelectionComponent;
