import React, { Component, useState } from "react";
import SubmissionContainer from "../challenge/AllSubmissions/submissionList/SubmissionContainer";
import samplePhoto from "../../assets/samplePhoto.svg";
import plantTree from "../../assets/plantTree.jpeg";
import { propTypes } from "react-bootstrap/esm/Image";
import manAva from "../../assets/img/human.png";
import womanAva from "../../assets/img/woman.png";

export default function SubmissionList(props) {
  const handleClick = (name) => {
    props.handleClick(name);
  };

  return (
    <div style={{ textAlign: "center", width: "49%", margin: "auto" }}>
      <SubmissionContainer
        photo={samplePhoto}
        post={plantTree}
        name="Alex Watt"
        time="2020.11.20 20:20"
        text="  Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          			sed do eiusmod tempor incididunt ut laabore et dolore magna aliqua. 
          			Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi "
        likes={152}
        handleClick={handleClick}
        ava={manAva}
      />

      <SubmissionContainer
        photo={samplePhoto}
        post={plantTree}
        name="Lauren Smith"
        time="2020.11.20 20:20"
        text="  Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut laabore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi "
        likes={2}
        ava={womanAva}
        handleClick={handleClick}
      />
    </div>
  );
}
