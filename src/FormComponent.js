import React from "react";

class FormComponent extends React.Component {
  render() {
    return (
      <form onClick={e => e.preventDefault()}>
        <input
          type="text"
          name="caption"
          value={this.props.caption}
          onChange={event => this.props.changeCaption(event.target.value)}
        />
        <button onClick={this.props.onClick}>Add</button>
      </form>
    );
  }
}

export default FormComponent;
