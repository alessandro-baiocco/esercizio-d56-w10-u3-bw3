import { useEffect } from "react";
import { Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getPostsFetch } from "../../redux/action";
import { ChatText, HandThumbsUp, SendFill, Share } from "react-bootstrap-icons";

const Posts = () => {
  const posts = useSelector((state) => state.getPosts.content);
  const loading = useSelector((state) => state.loadingProfile.content);
  const dispatch = useDispatch();
  const postsSliced = posts.slice(0, 15);

  useEffect(() => {
    dispatch(getPostsFetch());
  }, []);

  return (
    <Container>
      <Row>
        {loading ? (
          <Spinner variant="success"></Spinner>
        ) : (
          posts &&
          postsSliced.map((post) => (
            <Col xs="7">
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
                  <Container className="text-center">
                    <Button className="bg-transparent text-secondary border-0 me-4">
                      <HandThumbsUp className="mb-1 fs-5 me-1" />
                      Consiglia
                    </Button>
                    <Button className="bg-transparent text-secondary border-0 me-4">
                      <ChatText className="mb-1 fs-5 me-1" />
                      Commenta
                    </Button>
                    <Button className="bg-transparent text-secondary border-0 me-4">
                      <Share className="mb-1 fs-5 me-1" />
                      Diffondi il post
                    </Button>
                    <Button className="bg-transparent text-secondary border-0 me-4">
                      <SendFill className="mb-1 fs-5 me-1" />
                      Invia
                    </Button>
                  </Container>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default Posts;
