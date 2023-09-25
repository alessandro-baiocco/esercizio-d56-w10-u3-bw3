import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";

const Informazioni = () => {
  const myProfile = useSelector((state) => state.profile.content);
  return (
    <Container>
      <Container className="my-3 cardLinkedln rounded" style={{ padding: "15px" }}>
        <h2 className="fs-5">Informazioni</h2>
        <p className="clampedP" height={"150px"}>
          {myProfile?.bio}
        </p>
      </Container>
    </Container>
  );
};
export default Informazioni;
