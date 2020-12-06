import React, { Component } from "react";
import "../Home.css";
import { Card, Button, Form } from "react-bootstrap";

export default function PostNow() {
  return (
    <div>
      <h4 className="title">Post</h4>
      <Card className="post">
        <Form>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>
              Post your thought or participate in a challenge here...
            </Form.Label>
            <Form.Control as="textarea" rows={4} />
          </Form.Group>
          <Form.Group>
            <Form.File
              style={{ height: "80px" }}
              id="exampleFormControlFile1"
              label="Upload an image"
            />
          </Form.Group>
          <Form.Control as="select">
            <option>Pick a challenge to participate in</option>
            <option>No electricity for an hour - 100 points</option>
            <option>No beef for 7 days - 80 points</option>
            <option>No water for 24 hours - 30 points</option>
          </Form.Control>
          <Button
            style={{
              marginTop: "3rem",
              zIndex: "100",
              marginRight: "auto",
              marginLeft: "auto",
              display: "block",
            }}
            className="post-btn"
          >
            Post now
          </Button>
        </Form>
      </Card>
    </div>
  );
}
