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
import { useDispatch, useSelector } from "react-redux";
import { myProfilePage } from "../../redux/action";
import { useParams } from "react-router";

const MyProfileMain = () => {
  const urlParam = useParams();
  const myProfile = useSelector((state) => state.profile.content);
  const experiences = useSelector((state) => state.myExperiences.content);

  const dispatch = useDispatch();
  useEffect(() => {
    if (urlParam !== "me") {
      dispatch(myProfilePage(urlParam.userId));
    } else {
      dispatch(myProfilePage());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Container className="mt-4">
        <Row className="justify-content-center">
          <Col xs={12} md={8}>
            <ProfileHero myProfile={myProfile} />
            <Container className="my-2">
              <SuggestedForYou />
              <Analyses />
              <Resouce />
            </Container>
            <Informazioni />
            <ProfileAttivita />
            <EsperienzaProfile experiences={experiences} />
            <FormazioneProfile />
            <Container>
              <Licenses />
              <Skills />
              <Lenguages />
              <Hobbies />
            </Container>
          </Col>
          <Col xs={12} md={4} className="px-0">
            <Aside myProfile={myProfile} />
          </Col>
        </Row>
      </Container>
      <LinkedinFooter />
    </>
  );
};
export default MyProfileMain;
