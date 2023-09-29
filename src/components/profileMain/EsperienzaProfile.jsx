import { useEffect, useState } from "react";
import { Button, Container, Form, Modal, Spinner } from "react-bootstrap";
import { Plus } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { deleteMyExperiences, myExperiencePageMod, postMyNewExperience } from "../../redux/action";

const EsperienzaProfile = (props) => {
  // const experiences = useSelector((state) => state.myExperiences.content);
  const loading = useSelector((state) => state.loadingProfile?.content);
  const myProfile = useSelector((state) => state.profile.content);
  const [exp, setExp] = useState(null);

  const [status, setStatus] = useState({
    area: "",
    company: "",
    description: "",
    endDate: "",
    role: "",
    startDate: "",
    image: null,
  });
  const [statusImg, setStatusImg] = useState(null);

  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleClose = () => setShow(false);
  const handleClose2 = () => setShow2(false);
  const handleShow = (i) => {
    setShow(true);
    setStatus(props.experiences[i]);
  };
  const handleShow2 = (i) => {
    setShow2(true);
  };

  // useEffect(() => {
  //   if (experiences) {
  //     dispatch(myExperiencesFetch(myProfile?._id));
  //   }
  // }, [experiences]);

  // useEffect(() => {
  //   if (myProfile) {
  //     dispatch(myExperiencesFetch(myProfile?._id));
  //   }
  // }, [myProfile]);

  const handleChange = (propertyName, propertyValue) => {
    if (propertyName !== "image") {
      setStatus({ ...status, [propertyName]: propertyValue });
    } else {
      setStatusImg({ ...status, image: propertyValue });
    }
  };

  return (
    <Container className="my-3">
      <Container className="p-0 rounded cardLinkedln">
        <Container className="d-flex my-2">
          <h2 className="me-auto fs-5">Esperienza</h2>
          <Plus
            className="fs-3"
            onClick={() => {
              handleShow2();
            }}
          />
          {/* --------------------------- */}
          <Modal show={show2} onHide={handleClose2}>
            <Modal.Header closeButton>
              <Modal.Title>AGGIUNGI ESPERIENZA</Modal.Title>
            </Modal.Header>
            <Modal.Body>
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
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Azienda*</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Inserisci la tua azienda"
                    autoFocus
                    value={status?.company}
                    onChange={(e) => handleChange("company", e.target.value)}
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
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <input
                    type="file"
                    autoFocus
                    accept="image/*"
                    onChange={(e) => handleChange("image", e.target.files[0])}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose2}>
                Close
              </Button>

              <Button
                variant="primary"
                onClick={(e) => {
                  dispatch(postMyNewExperience(myProfile._id, status, statusImg));
                  e.preventDefault();
                  handleClose2();
                  setStatus({
                    area: "",
                    company: "",
                    description: "",
                    endDate: "",
                    role: "",
                    startDate: "",
                    image: null,
                  });
                }}
              >
                AGGIUNGI
              </Button>
            </Modal.Footer>
          </Modal>
          {/* --------------------------- */}
        </Container>
        {loading ? (
          <Container className="my-4">
            <Container className="d-flex justify-content-center cardLinkedln py-5">
              <Spinner animation="grow" variant="info" />
            </Container>
          </Container>
        ) : (
          props.experiences.map((experience, i) => (
            <Container className="d-flex" key={`exp-${i}`}>
              <Container style={{ width: "fit-content" }} className="p-0">
                <img src={experience.image} alt="" width={"48px"} height={"48px"} style={{ objectFit: "cover" }} />
              </Container>
              <Container className="mb-3">
                <p className="mb-0 fw-bold">{experience.role}</p>
                <p className="mb-0">{experience.company}</p>
                <p className="mb-0 fw-light">{experience.description}</p>
                <p className="mb-0 fw-light">{experience && experience.startDate?.slice(0, 10)}</p>
                <p className="mb-0 fw-light">{experience && experience.endDate?.slice(0, 10)}</p>
              </Container>
              <i
                className="mx-2 bi bi-pencil mt-1"
                onClick={() => {
                  setExp(experience);

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
            {props.experiences && (
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
            <Button
              variant="danger"
              onClick={(e) => {
                dispatch(deleteMyExperiences(myProfile._id, status._id));
                handleClose();
              }}
            >
              CANCELLA
            </Button>
            <Button
              variant="primary"
              onClick={(e) => {
                dispatch(myExperiencePageMod(myProfile._id, status));
                e.preventDefault();
                // setTimeout(() => {
                //   myExperiencesFetch(myProfile?._id);
                // }, 1500);
              }}
            >
              Salva cambiamenti
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </Container>
  );
};

export default EsperienzaProfile;
