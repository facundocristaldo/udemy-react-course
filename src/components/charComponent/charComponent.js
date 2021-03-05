import React from 'react';

export default function CharComponent({removeElement,value}){

    return(
        <div onClick={()=>removeElement()} style={{display:'inline',padding:'16px',textAlign:'center',margin:'16px',border:'1px solid black'}}>
            {value}
        </div>
    )
}