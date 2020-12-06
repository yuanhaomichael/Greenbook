import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Layout from "./Layout.js";
import AllChallengesDisplay from "./challenge/AllChallengesDisplay.js";
import AllSubmissions from "./challenge/AllSubmissions.js";
import { Card, Button } from "react-bootstrap";

export default function Challenge() {
  return (
    <Layout friends={["Melissa"]}>
      <h2 style={{color : "#AAE5CF"}}>View challenges or participate in a challenge</h2>
      <Card style={{margin: "1.5rem", textAlign: "right", height: "4rem"}}>
          <Card.Body>
          	<p style={{textAlign: "left"}}><strong>Explore all challenges here and participate in your favorite ones😊</strong></p>
          	<Link to="/view">
      			<Button style={{marginTop: "-5.5rem"}} variant="success" size="sm">View my challenges</Button>
      	  </Link>
          </Card.Body>
        </Card>
      <hr />
      <div className="row">
	      <div className="col-4">
	      	<AllChallengesDisplay />
	      </div>
	      <div className="col-8">

	      	<AllSubmissions
	      		challengeTitle="Plant an Apple tree with family"
	      		challengeText="Planting an apple tree with family is great quality time with family and helps the environment, plant it now and show the
	      					   community what you've done!"
	      		challengeDuration="7"
	      		challengePrize="100" />
	      </div>
      </div>
    </Layout>
  );
}
