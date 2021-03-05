import React from "react";
import CharComponent from "../charComponent/charComponent";
import ValidationComponent from "../Validation/ValidationComponent";

export default function UserInput(props) {
    const style ={
        padding:".5em",
        marging:".3em",
        fontSize:"1.2em"
    }
    
    const charsArray = [...props.value]

    const removeChar=removeIndex=>{
        const newChars = [...props.value]
        newChars.splice(removeIndex,1)
        const newText = newChars.join("")
        props.handleChangeText(newText,props.id)
    }
  return (
        <div>
            <input style={style} type="text" onChange={props.handleChange} value={props.value}/>
            <p>Text length:{props.value.length}</p>
            <ValidationComponent textLength={props.value.length}/>
            {
                charsArray.map((char,index)=><CharComponent key={index} value={char} removeElement={()=>removeChar(index)}/>)
            }
        </div>
  );
}
