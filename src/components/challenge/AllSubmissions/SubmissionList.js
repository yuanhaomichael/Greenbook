
import React, { Component } from "react";
import SubmissionContainer from "./submissionList/SubmissionContainer"
import samplePhoto from "../../../assets/samplePhoto.svg"
import plantTree from "../../../assets/plantTree.jpeg"
import PostNow from "./PostNow.js"


export default function SubmissionList() {
  return (
    <div>
        <div style={{width: "200%", textAlign: "left", padding: "0rem", marginLeft: "-12rem", marginBottom: "3rem"}}>
          <PostNow />
        </div>
          <SubmissionContainer
          	photo={samplePhoto}
          	post={plantTree}
          	name="Alex Watt"
          	time="2020.11.20 20:20"
          	text="  Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          			sed do eiusmod tempor incididunt ut laabore et dolore magna aliqua. 
          			Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi "
          	likes={152}		

          	/><SubmissionContainer
            photo={samplePhoto}
            post={plantTree}
            name="Alex Watt"
            time="2020.11.20 20:20"
            text="  Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut laabore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi "
            likes={152}   

            /><SubmissionContainer
            photo={samplePhoto}
            post={plantTree}
            name="Alex Watt"
            time="2020.11.20 20:20"
            text="  Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut laabore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi "
            likes={152}   

            />
    </div>
  );
}
