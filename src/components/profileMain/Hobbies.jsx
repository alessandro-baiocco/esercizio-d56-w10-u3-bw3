import { Button, Container, ListGroup } from "react-bootstrap";
import { ArrowRight, Check2, CheckLg } from "react-bootstrap-icons";

const Hobbies = () => {
  return (
    <Container
      style={{ backgroundColor: "white", border: "1.5px solid lightgrey", padding: "15px" }}
      className="rounded"
    >
      <div className="mb-2">
        <h5 className="mb-2 flex-grow-1">Interessi</h5>
        <p>Aziende</p>
      </div>
      <ListGroup>
        <ListGroup.Item className="d-flex" style={{ borderInline: "none", paddingInline: "0" }}>
          <div className="d-flex" style={{ marginRight: "180px" }}>
            <div>
              <img
                className="me-3"
                width={"60px"}
                src="https://media.licdn.com/dms/image/C4D0BAQFpgsWxYKqXHQ/company-logo_100_100/0/1654013419638?e=1703721600&v=beta&t=MXq-_h7SbtW4l1gaDJX8EiS5wpoKXmlPAdwVInD7aNs"
                alt="logo"
              />
            </div>
            <div>
              <h6 className="mb-1">Accenture</h6>
              <p className="mb-1" style={{ fontSize: "14px", opacity: "60%" }}>
                261.273 Follower
              </p>
              <Button
                style={{ border: "1px solid grey", paddingBlock: "2px" }}
                className="rounded-pill bg-transparent text-secondary mt-2"
              >
                <CheckLg className="fs-5 mb-1 me-1" />
                Già segui
              </Button>
            </div>
          </div>
          <div className="d-flex">
            <div>
              <img
                className="me-3"
                width={"60px"}
                src="https://media.licdn.com/dms/image/C4D0BAQFpgsWxYKqXHQ/company-logo_100_100/0/1654013419638?e=1703721600&v=beta&t=MXq-_h7SbtW4l1gaDJX8EiS5wpoKXmlPAdwVInD7aNs"
                alt="logo"
              />
            </div>
            <div>
              <h6 className="mb-1">Accenture</h6>
              <p className="mb-1" style={{ fontSize: "14px", opacity: "60%" }}>
                261.273 Follower
              </p>
              <Button
                style={{ border: "1px solid grey", paddingBlock: "2px" }}
                className="rounded-pill bg-transparent text-secondary mt-2"
              >
                <CheckLg className="fs-5 mb-1 me-1" />
                Già segui
              </Button>
            </div>
          </div>
        </ListGroup.Item>
      </ListGroup>
      <div className="text-center">
        <p className="mb-0 mt-2 text-secondary">
          Mostra tutte le aziende
          <ArrowRight className="ms-1" />
        </p>
      </div>
    </Container>
  );
};

export default Hobbies;
