import { Button, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProfileHero = () => {
  return (
    <Container>
      <Card>
        <Card.Img
          variant="top"
          src="https://images.unsplash.com/photo-1683009427619-a1a11b799e05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          height={"200px"}
          style={{ position: "relative" }}
        />
        <Card.Body>
          <img
            src="https://images.unsplash.com/photo-1683009427619-a1a11b799e05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt=""
            style={{
              position: "absolute",
              height: "182px",
              width: "182px",
              borderRadius: "50%",
              left: "20px",
              top: "100px",
            }}
          />
          <Container className="my-1 d-flex justify-content-end">
            <i className="bi bi-arrow-90deg-right fs-3 mx-3   d-md-none"></i>
            <i className="bi bi-pencil fs-3"></i>
          </Container>
          <Container fluid className="d-flex justify-content-between">
            <Container className="flex-grow-1">
              <Card.Title className="mt-4 fw-bold">alessandro baiocco</Card.Title>
              <Card.Title>diploma presso qualcosa</Card.Title>
              <Card.Title className="fw-light">Ancona , marche , Italia</Card.Title>
            </Container>
            <Container className="d-none d-md-flex flex-column align-items-end">
              <Container style={{ maxWidth: "fit-content" }} className="d-flex justify-content-end mx-0 my-2">
                <img
                  src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                  alt=""
                  width={"40px"}
                  height={"40px"}
                />
                <p className="ms-2">volkswagen</p>
              </Container>
              <Container style={{ maxWidth: "fit-content" }} className="d-flex justify-content-end mx-0 my-2">
                <img
                  src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                  alt=""
                  width={"40px"}
                  height={"40px"}
                />
                <p className="ms-2">volkswagen</p>
              </Container>
            </Container>
          </Container>
          <Link to="/profile/" className="d-block">
            1 collegamento
          </Link>
          <Container>
            <Button
              style={{ borderRadius: "12% 12% 12% 12% / 50% 50% 50% 50% " }}
              className="mx-1 my-2 fw-bold  d-none d-md-inline  px-3"
            >
              disponibile per
            </Button>
            <Button
              style={{ borderRadius: "12% 12% 12% 12% / 50% 50% 50% 50% " }}
              className="mx-1 my-2 fw-bold btn-light border border-primary  d-none d-md-inline  px-3"
            >
              aggiungi sezione profilo
            </Button>
            <Button
              style={{ borderRadius: "12% 12% 12% 12% / 50% 50% 50% 50% " }}
              className="mx-1 my-2 fw-bold btn-secondary px-3 d-none d-md-inline "
            >
              altro
            </Button>
          </Container>
          <Container className="d-flex justify-content-between">
            <Container className="d-flex" style={{ backgroundColor: "#DDE7F1" }}>
              <Container fluid className="p-0">
                <p className="m-0 fw-bold">Disponibile a lavorare</p>
                <p className="m-0">Ruoli di Operaio generico. Ufficio incaricato. tecn...</p>
                <Link>Mostra dettagli</Link>
              </Container>
              <i className="bi bi-pencil"></i>
            </Container>
            <Container className="d-none d-md-flex  flex-column">
              <p className="m-0 fw-bold">Fai sapere che stai facendo selezione e attrai</p>
              <p className="m-0">candidati qualificati</p>
              <Link>inizia</Link>
            </Container>
          </Container>
          <Container className="d-none d-md-flex  ">
            <i className="bi bi-eye-fill"></i>
            <p className="d-inline mx-2">disponibile solo per i recluiter</p>
          </Container>
        </Card.Body>
      </Card>
    </Container>
  );
};
export default ProfileHero;
