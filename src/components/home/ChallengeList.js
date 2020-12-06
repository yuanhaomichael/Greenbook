import React, { Component } from "react";
import "../Home.css";
import ChallengeCard from "./challengeList/ChallengeCard.js";
import { Card, Button } from "react-bootstrap";
import food from "../../assets/img/fruits.png";
import water from "../../assets/img/drop.png";
import waste from "../../assets/img/recycle-bin.png";
import energy from "../../assets/img/energy.png";

export default function ChallengeList() {
  return (
    <div>
      <div className="row cards">
        <div className="col-3">
          <ChallengeCard
            img={food}
            text="plant an apple tree today"
            prize="100"
          />
        </div>
        <div className="col-3">
          {" "}
          <ChallengeCard
            img={water}
            text="don't use water for a day"
            prize="100"
          />
        </div>
        <div className="col-3">
          {" "}
          <ChallengeCard img={waste} text="reduce waste by 50%" prize="60" />
        </div>
        <div className="col-3">
          {" "}
          <ChallengeCard
            img={energy}
            text="No electricity for a day"
            prize="80"
          />
        </div>
      </div>
    </div>
  );
}
