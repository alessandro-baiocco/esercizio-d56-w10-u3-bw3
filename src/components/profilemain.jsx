import { Container } from "react-bootstrap";

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
      <FormazioneProfile />
      <Container>
        <Licenses />
        <Skills />
        <Lenguages />
        <Hobbies />
      </Container>
    </>
  );
};
export default ProfileMain;
