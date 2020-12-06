import React, { Component, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import AddFriendBox from "../../../AddFriendBox.js";

export default function SubmissionContainer(props) {
  const [addEnabled, setEnabled] = useState(false);

  const toggleAdd = () => {
    setEnabled(!addEnabled);
  };

  const handleClick = () => {
    toggleAdd();
    props.handleClick(props.name);
  };

  const [count, setCount] = useState(props.likes);
  const [clicked, setClicked] = useState(false);
  return (
    <div>
      <Card style={{ marginBottom: "5rem" }}>
        <div className="row">
          <div className="col-4" style={{ padding: "1rem" }}>
            <img
              style={{ width: "100%", height: "100%", borderRadius: "100px" }}
              src={props.ava}
            />
          </div>
          <div className="col-8">
            <Card.Title style={{ textAlign: "left" }}>
              <h4>{props.name}</h4>
              <p>{props.time}</p>
            </Card.Title>
          </div>
          {addEnabled && (
            <AddFriendBox
              style={{ marginLeft: "500px" }}
              handleClick={handleClick}
            ></AddFriendBox>
          )}
          {addEnabled && (
            <Button
              variant="secondary"
              onClick={toggleAdd}
              style={{ marginLeft: "20px" }}
            >
              X
            </Button>
          )}
          {!addEnabled && (
            <Button
              variant="secondary"
              onClick={toggleAdd}
              style={{ marginLeft: "50px" }}
            >
              More
            </Button>
          )}
        </div>

        <Card.Body>
          <Card.Text style={{ textAlign: "left" }}>{props.text}</Card.Text>
          <img style={{ width: "100%", height: "100%" }} src={props.post} />
          <hr />
          <Button
            variant="primary"
            onClick={() => {
              if (clicked === false) {
                setCount(count + 1);
              }
              setClicked(true);
            }}
          >
            Like
          </Button>
          &nbsp;{count}
        </Card.Body>
      </Card>
    </div>
  );
}
