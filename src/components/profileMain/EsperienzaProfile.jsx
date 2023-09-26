import { useEffect, useState } from "react";
import { Button, Container, Form, Modal, Spinner } from "react-bootstrap";
import { Plus } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { deleteMyExperiences, myExperiencePageMod, myExperiencesFetch } from "../../redux/action";

const EsperienzaProfile = () => {
  const experiences = useSelector((state) => state.myExperiences.content);
  const loading = useSelector((state) => state.loadingProfile?.content);
  const myProfile = useSelector((state) => state.profile.content);
  const [status, setStatus] = useState(null);

  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (i) => {
    setShow(true);
    setStatus(experiences[i]);
  };

  useEffect(() => {
    if (myProfile) {
      dispatch(myExperiencesFetch(myProfile?._id));
    }
  }, [myProfile]);

  const handleChange = (propertyName, propertyValue) => {
    setStatus({ ...status, [propertyName]: propertyValue });
    console.log(status, propertyName, propertyValue);
  };

  return (
    <Container className="my-3">
      <Container className="p-0 rounded cardLinkedln">
        <Container className="d-flex my-2">
          <h2 className="me-auto fs-5">Esperienza</h2>
          <Plus className="fs-3" />
          {/* <i className="mx-2 bi bi-pencil mt-1 " onClick={handleShow}></i> */}
        </Container>
        {loading ? (
          <Container className="my-4">
            <Container className="d-flex justify-content-center cardLinkedln py-5">
              <Spinner animation="grow" variant="info" />
            </Container>
          </Container>
        ) : (
          experiences.map((experience, i) => (
            <Container className="d-flex" key={`exp-${i}`}>
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
              <i
                className="mx-2 bi bi-pencil mt-1"
                onClick={() => {
                  handleShow(i);
                }}
              ></i>
            </Container>
          ))
        )}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modifica Esperienze</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {experiences && (
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Titolo*</Form.Label>
                  <Form.Control
                    value={status?.role}
                    onChange={(e) => handleChange("role", e.target.value)}
                    required
                    type="text"
                    placeholder="Inserisci la tua professione"
                    autoFocus
                  />
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
                  <Form.Control
                    required
                    type="text"
                    placeholder="Inserisci la tua professione"
                    autoFocus
                    value={status?.area}
                    onChange={(e) => handleChange("area", e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Descrizione</Form.Label>
                  <Form.Control
                    required
                    as="textarea"
                    rows={3}
                    value={status?.description}
                    onChange={(e) => handleChange("description", e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Data di inizio</Form.Label>
                  <Form.Control
                    required
                    type="date"
                    placeholder="Inserisci la tua professione"
                    autoFocus
                    value={status?.startDate}
                    onChange={(e) => handleChange("startDate", e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Data di fine</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="Inserisci la tua professione"
                    autoFocus
                    value={status?.endDate}
                    onChange={(e) => handleChange("endDate", e.target.value)}
                  />
                </Form.Group>
              </Form>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="danger" onClick={(e) => dispatch(deleteMyExperiences(myProfile._id, status._id))}>
              CANCELLA
            </Button>
            <Button
              variant="primary"
              onClick={(e) => {
                dispatch(myExperiencePageMod(myProfile._id, status));
                e.preventDefault();
                myExperiencesFetch(myProfile?._id);
              }}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </Container>
  );
};

export default EsperienzaProfile;
