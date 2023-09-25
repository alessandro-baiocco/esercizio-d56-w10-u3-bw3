import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProfileAttivita = () => {
  return (
    <>
      <Container>
        <Container className="py-3 cardLinkedln rounded">
          <Container className="d-flex align-items-center ps-0">
            <Container className="me-auto">
              <h2>Attivita</h2>
              <Link>1 follower</Link>
            </Container>
            <Container style={{ width: "175px" }}>
              <Button
                className="btn btn-light border border-primary text-primary fw-bold"
                style={{ borderRadius: "12% 12% 12% 12% / 50% 50% 50% 50% " }}
              >
                Crea un post
              </Button>
            </Container>
            <i className="bi bi-pencil fs-3 mx-2"></i>
          </Container>{" "}
          <Container>
            <p className="fw-bold mb-0 mt-3">Non hai pubblicato nulla</p>
            <p className="mb-0">I post che condivi apparariranno qui</p>
          </Container>
        </Container>
      </Container>
      <Container>
        <Container className="p-0">
          <Button
            style={{ width: "100%", borderRadius: "0px", backgroundColor: "white", border: "1.5px solid lightgrey" }}
            className="btn-light "
          >
            Mostra tutte le attivita<i className="bi bi-arrow-right"></i>
          </Button>
        </Container>
      </Container>
    </>
  );
};

export default ProfileAttivita;
