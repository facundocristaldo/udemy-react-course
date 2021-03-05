import React from "react";
import './UserOutput.css'

export default function UserOutput({username}) {
  return (
    <div>
      <p>Hello <span>{username}</span></p>
    </div>
  );
}
