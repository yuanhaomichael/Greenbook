import React, { Component } from "react";
import Layout from "./Layout.js";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ChallengeInfo from "./challenge/ChallengeInfo.js";

export default function ViewChallenge() {
  return (
    <Layout friends={["Melissa"]}>>
      <Tabs
        defaultActiveKey="Plant an Apple Tree..."
        id="uncontrolled-tab-example"
      >
        <Tab eventKey="home" title="Plant an Apple Tree...">
          <ChallengeInfo
            challengeTitle="Plant an Apple Tree..."
            challengeText="feawfjaiwfjaiw feuaohfa fehuaifhuaoh eafuhaufoha"
            challengeDuration={4}
            challengePrize={140}
          />
        </Tab>
        <Tab eventKey="profile" title="Save electri...">
          <ChallengeInfo
            challengeTitle="Save electri..."
            challengeText="feawfjaiwfjaiw feuaohfa fehuaifhuaoh eafuhaufoha"
            challengeDuration={4}
            challengePrize={140}
          />
        </Tab>
      </Tabs>
    </Layout>
  );
}
