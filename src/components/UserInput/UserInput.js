import React from "react";

export default function UserInput(props) {


    const style ={
        padding:".5em",
        marging:".3em",
        fontSize:"1.2em"
    }
  return (
  <input style={style} type="text" onChange={props.handleChange} value={props.value}/>
  );
}
