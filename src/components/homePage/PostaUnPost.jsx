import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { GET_MY_PROFILE, getPostsFetch, myProfilePage, postMyNewBeatifulPost } from "../../redux/action";
const PostaUnPost = (props) => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [handleClose, setHandleClose] = useState(false);
  const [testo, setTesto] = useState(null);
  const [image, setImage] = useState({ image: "" });

  return (
    <>
      {props.image && (
        <Container className="cardLinkedln d-none d-sm-block mb-2 rounded " width={"50%"}>
          <Container fluid className="d-flex py-3 px-0">
            <Container className="d-flex px-0">
              <Container style={{ width: "12%" }}>
                <img src={props.image} alt="" className="rounded-circle" width={"50px"} height={"50px"} />
              </Container>
              <Container className="w-100 my-auto">
                <Button
                  className="bg-transparent rounded-pill btn-light border-secondary w-100 text-start text-secondary py-2  "
                  onClick={setShow}
                >
                  <span>Avvia un post</span>
                </Button>
              </Container>
            </Container>
          </Container>
          <Container className="d-flex flex-wrap justify-content-between r py-2 text-secondary">
            <p>
              <i className="bi bi-image text-primary"></i> Contenuto multimediale
            </p>
            <p>
              <i className="bi bi-calendar3 text-warning"></i> Evento
            </p>
            <p className="mx-auto mx-lg-0">
              <i className="bi bi-newspaper text-danger"></i> Scrivi un'articolo
            </p>
          </Container>
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
              <Form.Group>
                <Form.Label>VUOI METTERCI QUALCOSA?</Form.Label>
                <input type="file" accept="image/*" onChange={(e) => setImage({ image: e.target.files[0] })} />
              </Form.Group>
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
              dispatch(postMyNewBeatifulPost(testo, image, props.profile));
              // dispatch(getPostsFetch());
              e.preventDefault();
              setShow(false);
              setTesto("");
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
