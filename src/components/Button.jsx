import React, { Component } from "react";

export class ButtonPrimary extends Component {
  render() {
    return (
      <button
        className="p-3 border rounded-full bg-white text-black text-center font-bold cursor-pointer"
        onClick={this.props.onClick}
      >
        {this.props.label}
      </button>
    );
  }
}

export class ButtonSecondary extends Component {
  render() {
    return (
      <button
        className="p-3 border rounded-lg bg-slate-500 text-black cursor-pointer"
        onClick={this.props.onClick}
      >
        {this.props.label}
      </button>
    );
  }
}
// export { ButtonPrimary, ButtonSecondary }