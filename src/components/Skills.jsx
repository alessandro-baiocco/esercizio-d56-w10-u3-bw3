import { Button, Container, ListGroup } from "react-bootstrap";
import { ArrowRight, BoxArrowUpRight, Pencil, Plus } from "react-bootstrap-icons";

const Skills = () => {
  return (
    <Container
      style={{ backgroundColor: "white", border: "1.5px solid lightgrey", padding: "15px" }}
      className="rounded"
    >
      <div className="d-flex align-items-center">
        <h5 className="mb-0 flex-grow-1">Competenze</h5>
        <Button style={{ paddingBlock: "3px" }} className="me-3 rounded-pill bg-transparent text-primary">
          Quiz valutazione competenze
        </Button>
        <Plus className="fs-3 me-3 ms-auto" />
        <Pencil className="my-1" />
      </div>
      <ListGroup>
        <ListGroup.Item style={{ borderTop: "none", borderInline: "none", paddingInline: "0" }}>
          <p className="mb-1" style={{ fontWeight: "600" }}>
            Brain Storming
          </p>
        </ListGroup.Item>
        <ListGroup.Item style={{ borderTop: "none", borderInline: "none", paddingInline: "0" }}>
          <p className="mb-1" style={{ fontWeight: "600" }}>
            Team Work
          </p>
        </ListGroup.Item>
        <ListGroup.Item style={{ borderTop: "none", borderInline: "none", paddingInline: "0" }}>
          <p className="mb-1" style={{ fontWeight: "600" }}>
            Problem Solving
          </p>
        </ListGroup.Item>
      </ListGroup>
      <div className="text-center">
        <p className="mb-0 mt-2 text-secondary">
          Mostra tutte le competenze (5) <ArrowRight />
        </p>
      </div>
    </Container>
  );
};

export default Skills;
