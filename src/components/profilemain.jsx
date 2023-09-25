import { Button, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import SuggestedForYou from "./SuggestedForYou";
import Analyses from "./Analyses";
import Resouce from "./Resource";
import Informazioni from "./informazioni";
import ProfileHero from "./ProfileHero";
import ProfileAttivita from "./ProfileAttitvita";
import EsperienzaProfile from "./EsperienzaProfile";

const ProfileMain = () => {
  return (
    <>
      <ProfileHero />
      <Container className="my-2">
        <SuggestedForYou />
        <Analyses />
        <Resouce />
      </Container>
      <Informazioni />
      <ProfileAttivita />
      <EsperienzaProfile />
    </>
  );
};
export default ProfileMain;
