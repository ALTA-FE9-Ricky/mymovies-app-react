import React from "react";

function ButtonPrimary(props) {

    return (
      <button
        className="p-3 border rounded-full bg-white text-black text-center font-bold cursor-pointer"
        onClick={props.onClick}
      >
        {props.label}
      </button>
    );
  }


function ButtonSecondary(props){

    return (
      <button
        className="p-3 border rounded-lg bg-slate-500 text-black cursor-pointer"
        onClick={props.onClick}
      >
        {props.label}
      </button>
    );
  }

export { ButtonPrimary, ButtonSecondary }