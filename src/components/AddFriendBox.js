import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

export default function AddFriendBox(props) {
  return (
    <Card>
      <Button onClick={props.handleClick}>+ Add friend</Button>
    </Card>
  );
}
