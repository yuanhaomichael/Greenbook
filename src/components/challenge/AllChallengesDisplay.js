
import React, { Component } from "react";
import ChallengeCard from "./AllChallengesDisplay/ChallengeCard"
import sampleIcon from "../../assets/fruits.svg"
import "../Home.css";


export default function SubmissionList() {
  return (
   		<div className="cards">
   		 <a>
          <ChallengeCard 
          	icon={sampleIcon}
          	text='Plant an Apple tree with family'
            prize="100"
          	color="#AAE5CF"
          />
         </a> 
          <ChallengeCard 
          	icon={sampleIcon}
          	text='Do not eat beef for 7 days'
            prize="70"
          	color="#AAE5CF"
          />
    	</div>
  )
}
