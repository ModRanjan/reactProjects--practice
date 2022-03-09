import React, { Component } from "react";

class Counter extends Component {
  render() {
    // console.log("props", this.props);

    return (
      <div>
        {/* <img src={this.imageUrl} alt="i'm image" />  */}
        {/* <span style={this.styles} className="badge badge-primary m-2"> */}
        {/* <span style={{ fontSize: 10 }} className="badge badge-primary m-2"> */}
        <span className={this.getBadgeClasses(this.props.counter)}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
