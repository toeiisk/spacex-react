import React, { Component } from "react";
import { Container, Row, Button, Col } from "react-bootstrap";
import Background from "../img/rocket-banner.jpg";

import styled from "styled-components";
const Rocketstyle = styled.div`
  .Rocket-bg {
    height: 100vh;
    background-size: cover;
    overflow: hidden;
    background-repeat: no-repeat;
    background-position: center;
  }
  .Rocket-con {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
    height: 100vh;
    object-fit: contain;
  }

  .Rocket-con > h1 {
    font-size: 60px;
  }

  .Rocket-con > p {
    font-size: 25px;
  }

  .btn {
    width: 100%;
    border-radius: 2px;
    outline: none;
    border: none;
    cursor: pointer;
  }

  .btn-outline {
    background: transparent;
    color: #fff;
    border: 5px solid #fff;
    transition: all 0.3s ease-out;
  }

  .button-sec {
    display: flex;
  }

  @media screen and (max-width: 960px) {
    .Rocket-con > h1 {
      font-size: 40px;
    }
  }

  @media screen and (max-width: 768px) {
    .Rocket-con > h1 {
      font-size: 30px;
    }

    .Rocket-con > p {
      font-size: 20px;
    }

    .button-mb {
      display: block;
      text-decoration: none;
    }
  }
`;

class Rocket extends Component {
  render() {
    return (
      <Rocketstyle>
        <div
          className="Rocket-bg"
          style={{ backgroundImage: `url(${Background})` }}
        >
          <Container>
            <div className="Rocket-con text-light">
              <h1 className="text-uppercase">ROCKETS</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <div className="button-sec button-mb mt-3 ">
                <Button className="p-3 btn btn-outline" size="lg">
                  LEARN MORE
                </Button>
              </div>
            </div>
          </Container>
        </div>
      </Rocketstyle>
    );
  }
}

export default Rocket;