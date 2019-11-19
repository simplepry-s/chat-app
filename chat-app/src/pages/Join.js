import React, { useState } from "react";
import { Link } from "react-router-dom";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  const handleChangeName = e => {
    setName(e.target.value);
  };

  const handleChangesRoom = e => {
    setRoom(e.target.value);
  };
  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <div className="heading">Join Chat Here!!</div>
        <div>
          <input
            placeholder="Name"
            className="joinInput"
            type="text"
            value={name}
            onChange={e => handleChangeName(e)}
          />
        </div>
        <div>
          <input
            placeholder="Room"
            className="joinInput"
            type="text"
            value={room}
            onChange={e => handleChangesRoom(e)}
          />
        </div>
        <Link
          onClick={event => (!name || !room ? event.preventDefault : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className="button" type="submit">
            Sign in
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
