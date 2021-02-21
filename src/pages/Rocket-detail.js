import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Background from "../img/rocket.png";

import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link, useHistory, useParams } from "react-router-dom";
const Rocketstyle = styled.div`
  .container-cus {
    max-width: 1140px;
    margin: 0 auto;
  }

  .banner-bg {
    height: 80vh;
    background-size: cover;
    overflow: hidden;
    background-repeat: no-repeat;
    background-position: center;
  }

  .rocketdetail-con {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
  }

  .rocketdetail-con > h1 {
    font-size: 7rem;
  }

  .rocketdetail-con > p {
    font-size: 3rem;
  }

  .content-l img {
    width: 100%;
  }

  @media screen and (max-width: 960px) {
    .rocketdetail-con > h1 {
      font-size: 5rem;
    }
  }

  @media screen and (max-width: 768px) {
    .rocketdetail-con > h1 {
      font-size: 4rem;
    }

    .rocketdetail-con > p {
      font-size: 1.5rem;
    }
  }
`;

const Rocketdetail = (props) => {
  const [detail, setDetail] = useState({});
  let { rocket_id } = useParams();
  const history = useHistory();
  useEffect(async () => {
    const detail = await axios.get(
      `https://api.spacexdata.com/v3/rockets/${rocket_id}`
    );
    setDetail(detail.data);
  }, []);
  return (
    <Rocketstyle>
      <div className="rocketdetail-con">
        <div className="container-cus">
          <Container>
            <Row>
              <Col xs={12} md={6} className="content-l my-3">
                <img
                  src={
                    detail.flickr_images ? detail.flickr_images[0] : Background
                  }
                />
              </Col>
              <Col xs={12} md={6} className="content-r my-3">
                <h1 className="text-uppercase font-weight-bolder">
                  {detail.rocket_name}
                </h1>
                <h3 className="text-uppercase">{detail.company}</h3>
                <h5 className="text-uppercase font-weight-light">
                  {detail.country}
                </h5>
                <p>{detail.description}</p>
              </Col>
            </Row>
            <Button
              className="p-3 btn btn-outline"
              size="lg"
              onClick={() => history.goBack()}
            >
              BACK
            </Button>
          </Container>
        </div>
      </div>
    </Rocketstyle>
  );
};

export default Rocketdetail;
