import { Col, Container, Row } from "react-bootstrap";

import SuggestedForYou from "./SuggestedForYou";
import Analyses from "./Analyses";
import Resouce from "./Resource";
import Informazioni from "./informazioni";
import ProfileHero from "./ProfileHero";
import ProfileAttivita from "./ProfileAttitvita";
import EsperienzaProfile from "./EsperienzaProfile";
import Skills from "./Skills";
import Licenses from "./Licenses";
import FormazioneProfile from "./FormazioneProfile";
import Hobbies from "./Hobbies";
import Lenguages from "./Lenguages";
import Aside from "../profileAside/Aside";
import LinkedinFooter from "../footer/LinkedinFooter";
import { useEffect } from "react";

const ProfileMain = () => {
  return (
    <>
      <Container className="mt-4">
        <Row className="justify-content-center">
          <Col xs={12} md={8}>
            <ProfileHero />
            <Container className="my-2">
              <SuggestedForYou />
              <Analyses />
              <Resouce />
            </Container>
            <Informazioni />
            <ProfileAttivita />
            <EsperienzaProfile />
            <FormazioneProfile />
            <Container>
              <Licenses />
              <Skills />
              <Lenguages />
              <Hobbies />
            </Container>
          </Col>
          <Col xs={12} md={3} className="px-0">
            <Aside />
          </Col>
        </Row>
      </Container>
      <LinkedinFooter />
    </>
  );
};
export default ProfileMain;
