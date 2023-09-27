import { useEffect } from "react";
import { Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getPostsFetch, myProfilePage } from "../../redux/action";
import { CaretDownFill, ChatText, HandThumbsUp, SendFill, Share } from "react-bootstrap-icons";
import SideBarLeft from "./SideBarLeft";
import SideBarRight from "./SideBarRight";
import PostaUnPost from "./PostaUnPost";

const Posts = () => {
  const posts = useSelector((state) => state.getPosts.content);
  const loading = useSelector((state) => state.loadingProfile.content);
  const dispatch = useDispatch();
  const postsSliced = posts.slice(-15);
  const postReversed = postsSliced.reverse();
  const myProfile = useSelector((state) => state.profile.content);
  //   const postsForLoop = for(let i = 0; i<16; i++ ){

  //   }

  useEffect(() => {
    dispatch(getPostsFetch());
  }, []);
  useEffect(() => {
    dispatch(myProfilePage());
  }, []);

  return (
    <Container className="d-flex">
      <Row>
        <Col xs="3">
          <SideBarLeft />
        </Col>

        <Col xs="6">
          {myProfile ? <PostaUnPost image={myProfile.image} /> : ""}
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
            <Spinner variant="success"></Spinner>
          ) : (
            posts &&
            postReversed.map((post) => (
              <>
                {console.log(post)}
                <Card className="mb-2">
                  <Card.Body>
                    <div className="d-flex">
                      <div>
                        <img
                          src={post.user.image}
                          alt=""
                          width={"70px"}
                          height={"70px"}
                          className="rounded-circle"
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <Container>
                        <Card.Title>
                          {post.user.name} {post.user.surname}
                        </Card.Title>
                        <Card.Text>{post.user.title}</Card.Text>
                      </Container>
                    </div>
                  </Card.Body>
                  <Card.Body>
                    <Card.Text>{post.text}</Card.Text>
                    <hr />
                    <Container className="d-flex">
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
              </>
            ))
          )}
        </Col>

        <Col xs="3">
          <SideBarRight />
        </Col>
      </Row>
    </Container>
  );
};

export default Posts;
