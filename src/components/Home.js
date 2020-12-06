import React, { Component, useState } from "react";
import Layout from "./Layout.js";
import ChallengeCard from "./home/challengeList/ChallengeCard.js";
import SubmissionList from "./home/SubmissionList.js";
import ChallengeList from "./home/ChallengeList.js";
import PostNow from "./home/PostNow.js";
import "./Home.css";
import { Card, Button } from "react-bootstrap";

export default function Home(props) {
  const [friends, setFriends] = useState(["Melissa"]);

  const handleClick = (name) => {
    const newList = friends.concat(name);
    setFriends(newList);
  };

  return (
    <Layout friends={friends}>
      <div className="homepage">
        <Card>
          <Card.Body>Welcome Jane👋, happy challenging!</Card.Body>
        </Card>
        <h4 className="title">Pick a challenge</h4>
        <ChallengeList />
        <PostNow />
      </div>
      <div>
        <SubmissionList handleClick={handleClick} />
      </div>
    </Layout>
  );
}
