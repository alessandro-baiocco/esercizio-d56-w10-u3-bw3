import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { GET_MY_PROFILE, myProfilePage } from "../redux/action";

const PostaUnPost = () => {
  const dispatch = useDispatch();
  const myProfileImage = useSelector((state) => state.profile.content);
  const [show, setShow] = useState(false);
  const [handleClose, setHandleClose] = useState(false);
  const [testo, setTesto] = useState(null);

  useEffect(() => {
    dispatch(myProfilePage());
  }, []);

  return (
    <>
      {myProfileImage && (
        <Container className="cardLinkedln d-none d-sm-block" width={"50%"}>
          <Container fluid className="d-flex">
            <Row>
              <Col xs={2}>
                <img src={myProfileImage.image} alt="" className="rounded-circle" width={"50px"} height={"50px"} />
              </Col>
              <Col xs={8}>
                <Button className="bg-transparent rounded-pill btn-light ms-3 border border-dark" onClick={setShow}>
                  cosa stai pensando?
                </Button>
              </Col>
            </Row>
          </Container>
          <Row className="d-flex justify-content-center">
            <Col xs={6} md={6} lg={4}>
              <i className="bi bi-image"></i> contenuto multimediale
            </Col>
            <Col xs={6} md={6} lg={4}>
              <i className="bi bi-calendar3"></i> Evento
            </Col>
            <Col xs={6} md={6} lg={4}>
              <i className="bi bi-newspaper"></i> scrivi un'articolo
            </Col>
          </Row>
        </Container>
      )}

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>DI COSA VUOI PARLARE?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Descrizione</Form.Label>
              <Form.Control
                required
                as="textarea"
                rows={3}
                value={testo?.text}
                onChange={(e) => setTesto({ text: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>

          <Button
            variant="primary"
            onClick={(e) => {
              //   dispatch(postMyNewPost(myProfile._id, status, statusImg));
              e.preventDefault();

              setShow(false);
            }}
          >
            AGGIUNGI
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PostaUnPost;
