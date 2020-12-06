
import React, { Component } from "react";
import "../../Home.css";



export default function ChallengeCard(props) {
  return (
    <div className="energy" style={{ 	width: "100%", 
    				height: "9rem",
				    border: "1px solid white", 
				    borderRadius: "10px", 
				    
				    textAlign: "center", 
				    margin: "2.5rem",
				    padding: "1.2rem"  }}>
          <img style={{width: "300%"}} src={props.icon} />
          <p>
            <strong>{props.text}</strong>
            <br />
            {props.prize} points
          </p>
    </div>
  );
}
