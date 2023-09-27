import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { GET_MY_PROFILE, myProfilePage, postMyNewBeatifulPost } from "../../redux/action";

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
              <i class="bi bi-image"></i> contenuto multimediale
            </Col>
            <Col xs={6} md={6} lg={4}>
              <i class="bi bi-calendar3"></i> Evento
            </Col>
            <Col xs={6} md={6} lg={4}>
              <i class="bi bi-newspaper"></i> scrivi un'articolo
            </Col>
          </Row>
        </Container>
      )}

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>POST ZONE</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Control
                required
                as="textarea"
                rows={3}
                value={testo?.text}
                onChange={(e) => setTesto({ text: e.target.value })}
                placeholder="di cosa vuoi parlare?"
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
              dispatch(postMyNewBeatifulPost(testo));
              e.preventDefault();
              setShow(false);
            }}
          >
            POSTA IL POST
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PostaUnPost;
