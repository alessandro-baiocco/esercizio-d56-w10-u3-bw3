import { useState } from "react";
import { Button, Container, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { postMyNewBeatifulPost } from "../../redux/action";
const PostaUnPost = (props) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
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
          <Modal.Title style={{ fontSize: "20px" }}>Avvia un post</Modal.Title>
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
                placeholder="Di cosa vuoi parlare?"
              />
              <Form.Group className="d-flex flex-column">
                <Form.Label className="mt-2">Allega una immagine</Form.Label>
                <input type="file" accept="image/*" onChange={(e) => setImage({ image: e.target.files[0] })} />
              </Form.Group>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="rounded-pill" variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>

          <Button
            className="rounded-pill"
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
            Posta il post
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PostaUnPost;
