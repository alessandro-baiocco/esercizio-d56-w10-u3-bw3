import { useEffect, useState } from "react";
import { Button, Container, Form, Modal, Spinner } from "react-bootstrap";
import { Plus } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { myExperiencesFetch } from "../../redux/action";

const EsperienzaProfile = () => {
  const experiences = useSelector((state) => state.myExperiences.content);
  const loading = useSelector((state) => state.loadingProfile?.content);
  const myProfile = useSelector((state) => state.profile.content);

  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (myProfile) {
      dispatch(myExperiencesFetch(myProfile?._id));
    }
  }, [myProfile]);

  return (
    <Container className="my-3">
      <Container className="p-0 rounded cardLinkedln">
        <Container className="d-flex my-2">
          <h2 className="me-auto fs-5">Esperienza</h2>
          <Plus className="fs-3" />
          <i className="mx-2 bi bi-pencil mt-1 " onClick={handleShow}></i>
        </Container>
        {loading ? (
          <Container className="my-4">
            <Container className="d-flex justify-content-center cardLinkedln py-5">
              <Spinner animation="grow" variant="info" />
            </Container>
          </Container>
        ) : (
          experiences.map((experience) => (
            <Container className="d-flex">
              <Container style={{ width: "fit-content" }} className="p-0">
                <img src={experience.image} alt="" width={"48px"} height={"48px"} />
              </Container>
              <Container className="mb-3">
                <p className="mb-0 fw-bold">{experience.role}</p>
                <p className="mb-0">{experience.company}</p>
                <p className="mb-0 fw-light">{experience.description}</p>
                <p className="mb-0 fw-light">{experience.startDate}</p>
                <p className="mb-0 fw-light">{experience.endDate}</p>
              </Container>
            </Container>
          ))
        )}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modifica Esperienze</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Titolo*</Form.Label>
                <Form.Control required type="text" placeholder="Inserisci la tua professione" autoFocus />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Tempo di impiego</Form.Label>
                <Form.Select required placeholder="Tempo di Impiego">
                  <option value="1">Full-Time</option>
                  <option value="2">Part-time</option>
                  <option value="3">Autonomo</option>
                  <option value="3">Free-Lance</option>
                  <option value="3">A Contratto</option>
                  <option value="3">Stage</option>
                  <option value="3">Apprendistato</option>
                  <option value="3">Stagionale</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Area*</Form.Label>
                <Form.Control required type="text" placeholder="Inserisci la tua professione" autoFocus />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Descrizione</Form.Label>
                <Form.Control required as="textarea" rows={3} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Data di inizio</Form.Label>
                <Form.Control required type="date" placeholder="Inserisci la tua professione" autoFocus />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Data di fine</Form.Label>
                <Form.Control type="date" placeholder="Inserisci la tua professione" autoFocus />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </Container>
  );
};

export default EsperienzaProfile;
