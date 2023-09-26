import { useState } from "react";
import { Button, Container, Form, Modal, Spinner } from "react-bootstrap";
import { Plus } from "react-bootstrap-icons";
import { useSelector } from "react-redux";

const EsperienzaProfile = () => {
  const experiences = useSelector((state) => state.myExperiences.content);
  const loading = useSelector((state) => state.loadingProfile?.content);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
                <img
                  src="https://images.unsplash.com/photo-1549924231-f129b911e442?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt=""
                  width={"48px"}
                  height={"48px"}
                />
              </Container>
              <Container>
                <p className="mb-0 fw-bold">Operaio generico</p>
                <p className="mb-0">Dussman service italia - Part-time</p>
                <p className="mb-0 fw-light">mar-2020 - Presente - 3 anni 7 mesi</p>
                <p className="mb-0 fw-light">Ancona, marche, italia</p>
                <p className="my-3">
                  <span className="fw-bold">competenze</span>: microsoft Word - Comunicazione
                </p>
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
