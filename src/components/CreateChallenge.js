import React, { useState, useEffect, useContext } from "react";
import Layout from "./Layout.js";
import AWS from "aws-sdk";
import { Card, InputGroup, FormControl, Button } from "react-bootstrap";
import "./CreateChallenge.css";

const CreateChallenge = () => {
  AWS.config.update({
    region: "us-west-2",
    accessKeyId: "AKIAY44E72XX3Y6Q24HS",
    secretAccessKey: "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",
  });

  let lambda = new AWS.Lambda();
  const [userPoints, setUserPoints] = useState(0);

  const addEvent = () => {};

  return (
    <Layout friends={["Melissa"]}>
      <div className="create">
        <h2
          style={{
            marginTop: "5px",
            fontSize: "1.5rem",
            fontWeight: "700",
            color: "#73C0A3",
          }}
        >
          Create your own challenge
        </h2>
        <Card className="big">
          <h5 style={{ marginBottom: "5px" }}>1. Challenge Details</h5>

          <div className="row">
            <div className="col-6">
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  placeholder="Challenge name"
                  aria-label="Challenge name"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </div>
            <div className="col-6">
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">Category</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  placeholder="Category"
                  aria-label="Category"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </div>
          </div>

          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>Challenge Description</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl as="textarea" aria-label="With textarea" />
          </InputGroup>

          <h5 style={{ marginBottom: "5px" }}>2. Challenge Duration</h5>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Checkbox aria-label="Checkbox for following text input" />
              One Day
            </InputGroup.Prepend>
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Checkbox aria-label="Checkbox for following text input" />
              7 Days
            </InputGroup.Prepend>
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Checkbox aria-label="Checkbox for following text input" />
              2 Weeks
            </InputGroup.Prepend>
          </InputGroup>
          <div className="row" style={{ width: "100%" }}>
            <div className="col-2">
              <Button
                style={{
                  border: "none",
                  background: "#73C0A3",
                  marginRight: "1px",
                }}
              >
                Add
              </Button>
            </div>
            <div className="col-3">
              <Button
                style={{
                  border: "none",
                  background: "#FDAAA7",
                  marginRight: "1px",
                }}
              >
                Go Back
              </Button>
            </div>

            <div className="col-4">
              <Button style={{ border: "none", marginRight: "5px" }}>
                Challenge my friends
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default CreateChallenge;
