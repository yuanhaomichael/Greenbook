
import React, { Component } from "react";
import "../../Home.css";
import { Card, Button, Form } from "react-bootstrap";

export default function PostNow() {
  return (
    <div>
   
        <Card className="post">
        <Form>
           <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Participate in this challenge:</Form.Label>
                <Form.Control as="textarea" rows={4} />
          </Form.Group>
          <Form.Group>
             <Form.File style={{height: "80px"}}id="exampleFormControlFile1" label="Upload an image" />
          </Form.Group>
 
        </Form>
          
          
          <Button style={{marginTop: "3rem", zIndex: "100"}} className="post-btn">Post now</Button>
        </Card>
    </div>
  );
}
