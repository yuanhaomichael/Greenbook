import "./Layout.css";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import leaf from "../assets/img/leaf.png";
import { ReactComponent as HomeIcon } from "../assets/img/home.svg";
import { ReactComponent as UserIcon } from "../assets/img/user.svg";
import { ReactComponent as DashboardIcon } from "../assets/img/dashboard.svg";
import { ReactComponent as AddIcon } from "../assets/img/plus.svg";
import { ReactComponent as FriendIcon } from "../assets/img/boy.svg";
import { AmplifySignOut } from "@aws-amplify/ui-react";

import logo from "../assets/logo.svg";

export default function Layout(props) {
  const listItems = props.friends.map((friend) => (
    <NavLink to="/profile" className="nav-link">
      <FriendIcon className="icon" width="20px" height="20px"></FriendIcon>
      {friend}
    </NavLink>
  ));

  return (
    <div>
      <div className="row">
        <div className="col-3 side-col">
          <div className="sidebar">
            <a href="/home" className="nav-brand">
              Greenbook
              <img src={leaf}></img>
            </a>
            <NavLink to="/home" className="nav-link">
              <HomeIcon className="icon" width="20px" height="20px"></HomeIcon>
              Home
            </NavLink>
            <NavLink to="/profile" className="nav-link">
              <UserIcon
                className="icon"
                width="20px"
                height="20px"
              ></UserIcon>
              Profile
            </NavLink>
            <NavLink to="/challenges" className="nav-link">
              <DashboardIcon className="icon" width="20px" height="20px"></DashboardIcon>
              Explore Challenges
            </NavLink>
            <NavLink to="/view" className="nav-link">
              <DashboardIcon className="icon" width="20px" height="20px"></DashboardIcon>
              My Challenges
            </NavLink>
            <hr className="line"></hr>
            <NavLink to="/create" className="nav-link">
              <AddIcon className="icon" width="20px" height="20px"></AddIcon>
              Create a challenge
            </NavLink>
            <div>{listItems}</div>
            <AmplifySignOut className="signout-btn"></AmplifySignOut>
          </div>
        </div>
        <div className="col-9 children">{props.children}</div>
      </div>
    </div>
  );
}
