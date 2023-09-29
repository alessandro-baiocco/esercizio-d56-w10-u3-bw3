import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Modal, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteMyBeatifulPost,
  getMyBeatifulPost,
  getPostsFetch,
  myProfilePage,
  putMyBeatifulPost,
} from "../../redux/action";
import {
  CaretDownFill,
  ChatText,
  HandThumbsUp,
  Linkedin,
  PencilFill,
  SendFill,
  Share,
  Trash2Fill,
  TrashFill,
} from "react-bootstrap-icons";
import SideBarLeft from "./SideBarLeft";
import SideBarRight from "./SideBarRight";
import PostaUnPost from "./PostaUnPost";

const Posts = () => {
  const posts = useSelector((state) => state.getPosts.content);
  const singlePostTesto = useSelector((state) => state.getSinglePost.content);
  const loading = useSelector((state) => state.loadingProfile.content);
  const dispatch = useDispatch();
  const postsSliced = posts.slice(-15);
  const postReversed = postsSliced.reverse();
  const myProfile = useSelector((state) => state.profile.content);
  const [show, setShow] = useState(false);
  const [imgForModal, setImgForModal] = useState("");
  const [imgModal, setImgModal] = useState(false);
  const [testo, setTesto] = useState({ text: "" });
  const [postaId, setPostaID] = useState("");

  // useEffect(() => {
  //   dispatch(getMyBeatifulPost());
  // }, [singlePostTesto]);

  useEffect(() => {
    dispatch(getPostsFetch());
  }, []);
  useEffect(() => {
    dispatch(myProfilePage());
  }, []);

  return (
    <>
      <Container className="d-flex mt-4">
        <Row>
          <Col xs="3" className="my-3">
            <SideBarLeft />
          </Col>

          <Col xs="6" className="my-3">
            {myProfile ? (
              <PostaUnPost image={myProfile.image} profile={myProfile} />
            ) : (
              <div class="line">
                <div class="inner"></div>
              </div>
            )}
            <div className="d-flex">
              <hr style={{ width: "40%" }} />

              <div>
                <p className="mb-0 py-1 ps-2 text-secondary" style={{ fontSize: "13px" }}>
                  Seleziona la visulizzazione dei feed: <strong>Piu' rilevanti per primi</strong>
                  <CaretDownFill className="ms-1" />
                </p>
              </div>
            </div>
            {loading ? (
              <div className="text-center">
                <Linkedin className="fontIcon"></Linkedin>
                <div class="line">
                  <div class="inner"></div>
                </div>
              </div>
            ) : (
              posts &&
              postReversed.map((post, i) => (
                <Card className="mb-2" key={`post-${i}`}>
                  <Card.Body>
                    {post.user && (
                      <div className="d-flex">
                        <div>
                          <img
                            src={
                              post.user?.image
                                ? post.user.image
                                : "https://media.istockphoto.com/id/1409661663/vector/computer-bug-icon-with-circuit.jpg?s=612x612&w=0&k=20&c=MOCdcUXHEI9jHV5qKWVZNGre97ofZRr5qGLugpcT6yQ="
                            }
                            alt=""
                            width={"70px"}
                            height={"70px"}
                            className="rounded-circle"
                            style={{ objectFit: "cover" }}
                          />
                        </div>
                        <Container className="d-flex">
                          <Container className="d-flex flex-column">
                            <Card.Title>
                              {post.user?.name ? post.user.name : "non è stato possibile reperire il nome utente"}{" "}
                              {post.user?.surname ? post.user.surname : ""}
                            </Card.Title>
                            <Card.Text>{post.user?.title ? post.user.title : "bug"}</Card.Text>
                          </Container>
                          {(myProfile._id === post.user?._id || post.user?._id === undefined) && (
                            <>
                              <TrashFill
                                className="text-danger me-3"
                                onClick={(e) => {
                                  dispatch(deleteMyBeatifulPost(post._id));
                                  dispatch(getPostsFetch());
                                  e.preventDefault();
                                }}
                              />

                              <PencilFill
                                onClick={() => {
                                  setShow(true);

                                  setTesto({ text: post.text });
                                  setPostaID(post._id);
                                }}
                              />
                            </>
                          )}
                        </Container>
                      </div>
                    )}
                  </Card.Body>
                  <Card.Body>
                    <Card.Text>{post.text}</Card.Text>
                    <Container className="p-0">
                      {post.image ? (
                        <img
                          src={post.image}
                          alt=""
                          width={"80px"}
                          onClick={() => {
                            setImgForModal(post?.image);
                            setImgModal(true);
                          }}
                        />
                      ) : (
                        ""
                      )}
                    </Container>
                    <hr />
                    <Container className="d-flex justify-content-between">
                      <Button className="bg-transparent text-secondary border-0 me-2">
                        <HandThumbsUp className="mb-1 fs-6 me-1" />
                        Consiglia
                      </Button>
                      <Button className="bg-transparent text-secondary border-0 me-2">
                        <ChatText className="mb-1 fs-6 me-1" />
                        Commenta
                      </Button>
                      <Button className="bg-transparent text-secondary border-0 me-2">
                        <Share className="mb-1 fs-6 me-1" />
                        Diffondi il post
                      </Button>
                      <Button className="bg-transparent text-secondary border-0 me-2">
                        <SendFill className="mb-1 fs-6 me-1" />
                        Invia
                      </Button>
                    </Container>
                  </Card.Body>
                </Card>
              ))
            )}
          </Col>

          <Col xs="3" className="my-3">
            <SideBarRight />
          </Col>
        </Row>

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
                  value={testo.text}
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
                dispatch(putMyBeatifulPost(postaId, testo));
                dispatch(getPostsFetch());

                e.preventDefault();
                setShow(false);
              }}
            >
              MODIFICA IL POST
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>

      {/* ------------------------------------------------ */}
      <Modal show={imgModal} onHide={() => setImgModal(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <img src={imgForModal} alt="" className="img-fluid" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setImgForModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Posts;
