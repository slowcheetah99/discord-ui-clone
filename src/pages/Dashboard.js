import React, { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  DashboardWrapper,
  Sidebar,
  Ctas,
  Center,
  Aside,
  Nav,
  Main,
  Icon,
  Content,
  Messages,
} from "../styles/DashboardStyles";

import discord from "../assets/discord_logo.svg";
import newline from "../assets/new_line.png";
import plusIcon from "../assets/plus.svg";
import { AiFillCompass as CompassIcon } from "react-icons/ai";
import { BsDownload as DownloadIcon } from "react-icons/bs";
import { FaUsers as Users } from "react-icons/fa";
import { SiBlender as Nitro } from "react-icons/si";
import { FaFingerprint as Fingerprint } from "react-icons/fa";
import { AiOutlinePlus as Plus } from "react-icons/ai";
import sadWampus from "../assets/no_online_friends.svg";
import happyWampus from "../assets/add_friend_icon.svg";
const Dashboard = () => {
  const { pathname } = useLocation();
  return (
    <DashboardWrapper>
      <Sidebar>
        <Ctas>
          <Icon src={discord} alt="discord logo" />
          <Icon src={newline} alt="newline logo" />
          <Icon src={plusIcon} alt="plus icon" />
          <CompassIcon className="icons" />
          <DownloadIcon className="icons" />
        </Ctas>
        <Content>
          <input
            type="text"
            name="user-search"
            placeholder="Find or start a conversation"
          />

          <Link to="/dashboard">
            <div>
              <Users />
              <h5>Friends</h5>
            </div>
          </Link>

          <Link to="/discovery">
            <div>
              <Fingerprint />
              <h5>Stage Discovery</h5>
            </div>
          </Link>

          <Link to="/nitro">
            <div>
              <Nitro />
              <h5>Nitro</h5>
            </div>
          </Link>

          <Messages>
            <h6>DIRECT MESSAGES</h6>
            <Plus />
          </Messages>
        </Content>
      </Sidebar>
      <Center>
        <Nav>
          <Link to="/dashboard">
            <span>
              <Users />
              <p>Friends</p>
            </span>
          </Link>

          <Link to="/dashboard/online">
            <p>Online</p>
          </Link>

          <Link to="/dashboard/all">
            <p>All</p>
          </Link>

          <Link to="/dashboard/pending">
            <p>Pending</p>
          </Link>

          <Link to="/dashboard/blocked">
            <p>Blocked</p>
          </Link>

          <Link
            to="/dashboard/add-friend"
            className={
              pathname === "/dashboard/add-friend"
                ? "friend-btn-color"
                : "friend-btn"
            }
          >
            <p>Add Friend</p>
          </Link>
        </Nav>
        <Main>
          {pathname === "/dashboard/add-friend" ? (
            <Fragment>
              <div className="friends">
                <div className="friends-container">
                  <h4>ADD FRIEND</h4>
                  <h6>
                    You can add a friend with their Discord Tag. It's cAsE
                    sEnSiTiVe!
                  </h6>

                  <form method="POST" action="" className="friend-search">
                    <input
                      type="text"
                      name="friend-search"
                      placeholder="Enter a username#0000"
                    />
                    <button type="submit">Send Friend Request</button>
                  </form>
                </div>
                <img src={happyWampus} alt="waiting for friends" />
                <p>Wampus is waiting on friends. You don't have to though</p>
              </div>
            </Fragment>
          ) : (
            <img
              src={sadWampus}
              alt="no friends currently"
              className="sad-wampus"
            />
          )}
        </Main>
        <Aside>
          <h3>Active Now</h3>
          <article className="meta-info">
            <h4>It's quiet for now...</h4>
            <p>
              When a friend starts an activity--like playing a game or hanging
              out on voice--we'll show it here.
            </p>
          </article>
        </Aside>
      </Center>
    </DashboardWrapper>
  );
};

export default Dashboard;
