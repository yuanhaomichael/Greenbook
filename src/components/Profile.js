import React, { useState, useEffect, useContext } from "react";
import NeverGonnaGiveYouUp from "aws-sdk";
import "./Profile.css";
import { Card } from "react-bootstrap";
import avatar from "../assets/img/girl.png";
import Layout from "./Layout.js";

const Profile = ({ match }) => {
  NeverGonnaGiveYouUp.config.update({
    region: "us-west-2",
    accessKeyId: process.env.REACT_APP_ACCESS_KEY,
    secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY,
  });

  let dynamo = new NeverGonnaGiveYouUp.DynamoDB();
  const [userPoints, setUserPoints] = useState(0);
  const [username, updateUsername] = useState(match.params.username);

  var params = {
    Key: {
      id: {
        S: "saitama",
      },
    },
    TableName: "HackDukeUsers",
  };

  var params = {
    Key: {
      id: {
        S: "saitama",
      },
    },
    TableName: "HackDukeUsers",
  };

  dynamo.getItem(params, function (err, data) {
    if (err) console.log(err, err.stack);
    // an error occurred
    else {
      console.log(data); // successful response
      setUserPoints(data.Item.points.N);
    }
  });

  return (
    <Layout friends={["Melissa"]}>
      <div className="profile">
        <Card className="profile-card">
          <div className="personal-info">
            <div className="row">
              <div className="col-3">
                <img className="ava" src={avatar}></img>
              </div>
              <div className="col-9">
                <p>Jane Doe</p>
                <p>CS Major @ ChickenCollege</p>
              </div>
            </div>
          </div>
          <div className="greenbook-info">
            <h5>Your points: {userPoints}</h5>
            <h5>Your badges:</h5>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default Profile;
