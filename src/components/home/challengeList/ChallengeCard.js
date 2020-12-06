
import React, { Component } from "react";
import "../../Home.css";
import { Card, Button } from "react-bootstrap";


export default function ChallengeCard(props) {
  return (
    <div>
           <Card className="energy">
              <img style={{width: "40%", height: "40%", margin: "auto", marginTop: "2rem"}} src={props.img} />
              <Card.Body className="body">
                <Card.Title className="card-title"><p style={{fontSize:".7rem"}}>{props.text} <br /> {props.prize} points</p></Card.Title>
              </Card.Body>
            </Card>
    </div>
  );
}
