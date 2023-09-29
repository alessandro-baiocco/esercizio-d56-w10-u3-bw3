import { useEffect, useState } from "react";
import { Alert, Button, Card, Container, Form, Modal, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { EDIT_MY_PROFILE, myProfileImage, myProfilePage, myProfilePageMod } from "../../redux/action";

const ProfileHero = (props) => {
  const [show, setShow] = useState(false);
  const [show3, setShow3] = useState(false);
  const [status, setStatus] = useState(null);
  const [alert, setAlert] = useState(true);
  const [profileImg, setProfileImage] = useState(null);
  const urlParam = useParams();
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleClose3 = () => setShow3(false);
  const handleShow = () => {
    setShow(true);
    setStatus(props.myProfile);
  };
  const handleShow3 = () => {
    setShow3(true);
  };

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   if (urlParam !== "me") {
  //     dispatch(myProfilePage(urlParam.userId));
  //   } else {
  //     dispatch(myProfilePage());
  //   }
  // }, []);

  const handleChange = (propertyName, propertyValue) => {
    if (propertyName !== "image") {
      setStatus({ ...status, [propertyName]: propertyValue });
    } else {
      setProfileImage({ ...status, image: propertyValue });
    }
  };

  // const myProfile = useSelector((state) => state.profile.content);
  const loading = useSelector((state) => state.loadingProfile?.content);
  const error = useSelector((state) => state.errorProfileMain.content);
  const exp = useSelector((state) => state.myExperiences?.content.slice(0, 2));

  return (
    <>
      {loading && (
        <Container className="my-5">
          <Container className="d-flex justify-content-center cardLinkedln py-5">
            <Spinner animation="grow" variant="info" />
          </Container>
        </Container>
      )}

      {error && alert && (
        <Container>
          <Alert variant="danger" onClose={() => setAlert(false)} dismissible>
            <Alert.Heading>oggi sei da solo</Alert.Heading>
            <p>errore nel reperimento dei dati</p>
          </Alert>
        </Container>
      )}

      {props.myProfile?.name && (
        <Container>
          <Card>
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1439405326854-014607f694d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              height={"200px"}
              style={{ position: "relative" }}
            />
            <Card.Body>
              <img
                src={props.myProfile && props.myProfile.image}
                alt=""
                style={{
                  position: "absolute",
                  height: "182px",
                  width: "182px",
                  borderRadius: "50%",
                  left: "20px",
                  top: "100px",
                }}
                onClick={() => handleShow3()}
              />
              {/* ----------------------- ------------------------------------------------------------------*/}
              <Modal show={show3} onHide={handleClose3}>
                <Modal.Header closeButton>
                  <Modal.Title>Modifica Presentazione</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  {props.myProfile?.name && (
                    <Form>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <input
                          type="file"
                          autoFocus
                          accept="image/*"
                          onChange={(e) => handleChange("image", e.target.files[0])}
                        />
                      </Form.Group>
                    </Form>
                  )}
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose3}>
                    Chiudi
                  </Button>
                  <Button
                    variant="primary"
                    onClick={(e) => {
                      dispatch(myProfileImage(props.myProfile._id, profileImg));
                      e.preventDefault();
                      handleClose3();
                    }}
                  >
                    Salva Modifiche
                  </Button>
                </Modal.Footer>
              </Modal>

              {/* ----------------------------------------------------------------------- */}
              <Container className="my-1 d-flex justify-content-end" height={"30px"}>
                <p style={{ color: "white" }}>p</p>
                <i className="bi bi-arrow-90deg-right fs-3 mx-3 d-md-none"></i>
                {urlParam.userId ? "" : <i className="bi bi-pencil fs-5" onClick={handleShow}></i>}
              </Container>
              <Container fluid className="d-flex justify-content-between mt-4">
                <Container className="flex-grow-1">
                  <Card.Title className="mt-4 fw-bold">
                    {props.myProfile?.name} {props.myProfile?.surname}
                  </Card.Title>
                  <p className="mb-1">Diploma presso qualcosa</p>
                  <Card.Title className="fw-light fs-6">{props.myProfile?.area}</Card.Title>
                </Container>
                <Container className="d-none d-md-flex flex-column" style={{ width: "38%" }}>
                  {exp &&
                    exp.map((exp) => (
                      <Container style={{ maxWidth: "fit-content" }} className="d-flex justify-content-end mx-2 my-2">
                        <img src={exp.image} alt="" width={"32px"} height={"32px"} style={{ objectFit: "cover" }} />
                        <p className="ms-2">{exp.company}</p>
                      </Container>
                    ))}
                  {/* <Container style={{ maxWidth: "fit-content" }} className="d-flex justify-content-end mx-0 my-2">
                    <img
                      src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                      alt=""
                      width={"40px"}
                      height={"40px"}
                    />
                    <p className="ms-2">volkswagen</p>
                  </Container> */}
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
                  {urlParam.userId ? "" : <i className="bi bi-pencil mt-2"></i>}
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
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modifica Presentazione</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {props.myProfile?.name && (
                <Form>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Nome*</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Inserisci il tuo nome"
                      autoFocus
                      value={status?.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Cognome*</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Inserisci il tuo cognome"
                      autoFocus
                      value={status?.surname}
                      onChange={(e) => handleChange("surname", e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email*</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Inserisci la tua Email"
                      autoFocus
                      value={status?.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Titolo*</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Inserisci la tua professione"
                      autoFocus
                      value={status?.title}
                      onChange={(e) => handleChange("title", e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Paese*</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Inserisci il tuo paese"
                      autoFocus
                      value={status?.area}
                      onChange={(e) => handleChange("area", e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Descriviti</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      value={status?.bio}
                      onChange={(e) => handleChange("bio", e.target.value)}
                    />
                  </Form.Group>
                </Form>
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Chiudi
              </Button>
              <Button variant="primary" onClick={(e) => dispatch(myProfilePageMod(e, status))}>
                Salva Modifiche
              </Button>
            </Modal.Footer>
          </Modal>
        </Container>
      )}
    </>
  );
};
export default ProfileHero;
