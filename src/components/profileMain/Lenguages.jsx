import { Container, ListGroup } from "react-bootstrap";
import { Pencil, Plus } from "react-bootstrap-icons";

const Lenguages = () => {
  return (
    <Container
      style={{ backgroundColor: "white", border: "1.5px solid lightgrey", padding: "15px" }}
      className="rounded my-3 cardLinkedln"
    >
      <div className="d-flex align-items-center mb-2">
        <h5 className="mb-0 flex-grow-1">Lingue</h5>
        <Plus className="fs-3 me-2" />
        <Pencil className="my-1 me-1" />
      </div>
      <ListGroup>
        <ListGroup.Item style={{ borderTop: "none", borderInline: "none", paddingInline: "0" }}>
          <p className="mb-1" style={{ fontWeight: "600" }}>
            Inglese
          </p>
          <p className="mb-1" style={{ fontSize: "14px", opacity: "60%" }}>
            Conoscenza professionale
          </p>
        </ListGroup.Item>
        <ListGroup.Item style={{ borderBlock: "none", borderInline: "none", paddingInline: "0" }}>
          <p className="mb-1" style={{ fontWeight: "600" }}>
            Italiano
          </p>
          <p className="mb-1" style={{ fontSize: "14px", opacity: "60%" }}>
            Conoscenza madrelingua o bilingue
          </p>
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
};

export default Lenguages;
