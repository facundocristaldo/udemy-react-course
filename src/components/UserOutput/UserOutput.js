import React from "react";
import './UserOutput.css'

export default function UserOutput({username}) {
  return (
    <div className="output">
      <p>Hello <span>{username}</span></p>
      <p>Es un lindo día.</p>
    </div>
  );
}
