import React from "react";

class ListComponent extends React.Component {
  renderItem(obj) {
    return (
      <li key={obj.content + new Date()}>
        <span className={"to-do-" + (obj.isChecked ? "done" : "not-done")}>
          {obj.content}
        </span>
        <input
          type="checkbox"
          defaultChecked={obj.isChecked}
          onChange={event => this.props.changeChecked(obj)}
        />
        <button onClick={event => this.props.deleteCaption(obj)}>X</button>
      </li>
    );
  }
  render() {
    var selection = this.props.selection;
    const listItems = this.props.list;
    var completeList = [];
    var incompleteList = [];

    for (var i = 0; i < listItems.length; i++) {
      if (listItems[i].isChecked) {
        completeList.push(listItems[i]);
      } else {
        incompleteList.push(listItems[i]);
      }
    }

    var liElements;
    if (selection === "all") {
      liElements = listItems.map(
        obj => this.renderItem(obj)
        // 	(
        //     <li key={obj.content + new Date()}>
        //       <span className={"to-do-" + (obj.isChecked ? "done" : "not-done")}>
        //         {obj.content}
        //       </span>
        //       <input
        //         type="checkbox"
        //         defaultChecked={obj.isChecked}
        //         onChange={event => this.props.changeChecked(obj)}
        //       />
        //       <button onClick={event => this.props.deleteCaption(obj)}>X</button>
        //     </li>
        //   )
      );
    } else if (selection === "complete") {
      liElements = completeList.map(
        obj => this.renderItem(obj)
        // 	(
        //     <li key={obj.content + new Date()}>
        //       <span className={"to-do-" + (obj.isChecked ? "done" : "not-done")}>
        //         {obj.content}
        //       </span>
        //       <input
        //         type="checkbox"
        //         defaultChecked={obj.isChecked}
        //         onChange={event => this.props.changeChecked(obj)}
        //       />
        //       <button onClick={event => this.props.deleteCaption(obj)}>X</button>
        //     </li>
        //   )
      );
    } else {
      liElements = incompleteList.map(
        obj => this.renderItem(obj)
        // (
        //   <li key={obj.content + new Date()}>
        //     <span className={"to-do-" + (obj.isChecked ? "done" : "not-done")}>
        //       {obj.content}
        //     </span>
        //     <input
        //       type="checkbox"
        //       defaultChecked={obj.isChecked}
        //       onChange={event => this.props.changeChecked(obj)}
        //     />
        //     <button onClick={event => this.props.deleteCaption(obj)}>X</button>
        //   </li>
        // )
      );
    }

    return <ol>{liElements}</ol>;
  }
}

export default ListComponent;
