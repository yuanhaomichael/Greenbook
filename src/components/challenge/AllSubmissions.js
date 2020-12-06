
import React, { Component } from "react";
import SubmissionList from "./AllSubmissions/SubmissionList";
import Button from 'react-bootstrap/Button';


export default function AllSubmissions(props) {
  return (

    <div style={{   width: "80%", 
                    border: "1px solid white", 
                    borderRadius: "10px", 
                    backgroundColor: "white", 
                    textAlign: "center", 
                    margin: "3rem"  }}>

          <h2><strong>{props.challengeTitle}</strong></h2>
          <strong>Description</strong><br /><p>{props.challengeText}</p>
          <strong>Duration</strong><br /><p>{props.challengeDuration} days</p>
          <strong>Reward</strong><br /><p>{props.challengePrize} points</p>

          <SubmissionList />
    </div>
  );
}
