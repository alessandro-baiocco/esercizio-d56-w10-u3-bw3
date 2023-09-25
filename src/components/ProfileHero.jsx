import { useEffect } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { myProfilePage } from "../redux/action";

const ProfileHero = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(myProfilePage());
  }, []);

  const myProfile = useSelector((state) => state.profile.content);

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
            src={myProfile && myProfile.image}
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
            <i className="bi bi-arrow-90deg-right fs-3 mx-3 d-md-none"></i>
            <i className="bi bi-pencil fs-5"></i>
          </Container>
          <Container fluid className="d-flex justify-content-between mt-4">
            <Container className="flex-grow-1">
              <Card.Title className="mt-4 fw-bold">
                {myProfile?.name}
                {myProfile?.surname}
              </Card.Title>
              <p className="mb-1">Diploma presso qualcosa</p>
              <Card.Title className="fw-light fs-6">{myProfile?.area}</Card.Title>
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
          <Link to="/profile/" className="d-block ps-4">
            1 collegamento
          </Link>
          <Container>
            <Button style={{ fontWeight: "600" }} className="mx-1 my-3 py-1 rounded-pill d-none d-md-inline px-3">
              Disponibile per
            </Button>
            <Button
              style={{ fontWeight: "600" }}
              className="mx-1 my-3 py-1 btn-light border border-primary rounded-pill d-none d-md-inline text-primary px-3"
            >
              Aggiungi sezione profilo
            </Button>
            <Button
              style={{ fontWeight: "600" }}
              className="mx-1 my-3 text-secondary py-1 btn-secondary bg-transparent d-none d-md-inline rounded-pill "
            >
              Altro
            </Button>
          </Container>
          <Container className="d-flex justify-content-between">
            <Container className="d-flex rounded" style={{ backgroundColor: "#DDE7F1" }}>
              <Container fluid className="p-2">
                <p className="m-0 fw-bold">Disponibile a lavorare</p>
                <p className="m-0">Ruoli di Operaio generico. Ufficio incaricato. tecn...</p>
                <Link style={{ textDecoration: "none" }}>
                  <span>Mostra dettagli</span>
                </Link>
              </Container>
              <i className="bi bi-pencil mt-2"></i>
            </Container>
            <Container className="d-none d-md-flex flex-column p-2">
              <p className="m-0 fw-bold">Fai sapere che stai facendo selezione e attrai</p>
              <p className="m-0">candidati qualificati</p>
              <Link style={{ textDecoration: "none" }}>
                <span>Inizia</span>
              </Link>
            </Container>
          </Container>
          <Container className="d-md-none d-flex  ">
            <i className="bi bi-eye-fill"></i>
            <p className=" mx-2">disponibile solo per i recluiter</p>
          </Container>
        </Card.Body>
      </Card>
    </Container>
  );
};
export default ProfileHero;
