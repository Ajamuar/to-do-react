import React, { Component } from "react";
import "./App.css";
import FormComponent from "./FormComponent";
import SelectionComponent from "./SelectionComponent";
import ListComponent from "./ListComponent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      caption: {
        content: "",
        isChecked: false
      },
      captions: [],
      selection: "all"
    };
  }

  changeCaption = caption => {
    this.setState({
      caption: {
        content: caption,
        isChecked: false
      }
    });
  };

  changeChecked = obj => {
    var captions = this.state.captions;
    for (var i = 0; i < captions.length; i++) {
      if (captions[i] === obj) {
        if (captions[i].isChecked) {
          captions[i].isChecked = false;
        } else {
          captions[i].isChecked = true;
        }
        break;
      }
    }
    this.setState({
      captions: captions
    });
  };

  deleteCaption = obj => {
    var captions = this.state.captions;
    for (var i = 0; i < captions.length; i++) {
      if (captions[i] === obj) {
        captions.splice(i, 1);
        break;
      }
    }

    this.setState({
      captions: captions
    });
  };

  isSame(arr, caption) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].content.trim() === caption.content.trim()) {
        alert("Same tasks cannot be added");
        this.setState({
          caption: {
            content: "",
            isChecked: false
          }
        });
        return true;
      }
    }
    return false;
  }

  handleClick = () => {
    if (
      this.state.caption.content !== "" &&
      !this.isSame(this.state.captions, this.state.caption)
    ) {
      var captions = this.state.captions;
      captions.push(this.state.caption);
      this.setState({
        caption: {
          content: "",
          isChecked: false
        },
        captions: captions
      });
    }
  };

  changeSelection = value => {
    this.setState({
      selection: value
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <FormComponent
            onClick={this.handleClick}
            caption={this.state.caption.content}
            changeCaption={this.changeCaption}
          />
        </header>
        <div>
          <SelectionComponent changeSelection={this.changeSelection} />
        </div>
        <div>
          <ListComponent
            list={this.state.captions}
            changeChecked={this.changeChecked}
            deleteCaption={this.deleteCaption}
            selection={this.state.selection}
          />
        </div>
      </div>
    );
  }
}

export default App;
