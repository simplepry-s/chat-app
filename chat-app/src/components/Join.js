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
        <h1 className="heading">Join</h1>
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
          <button className="button mt-20" type="submit">
            Sign in
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
