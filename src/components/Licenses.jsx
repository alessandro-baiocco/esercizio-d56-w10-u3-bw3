import { Button, Container, ListGroup } from "react-bootstrap";
import { ArrowRight, BoxArrowUpRight, Pencil, Plus } from "react-bootstrap-icons";

const Licenses = () => {
  return (
    <Container style={{ padding: "15px" }} className="rounded my-3 cardLinkedln">
      <div className="d-flex align-items-center">
        <h5 className="mb-0">Licenze e certificazioni</h5>
        <Plus className="fs-3 me-2 ms-auto" />
        <Pencil className="my-1 me-1" />
      </div>
      <ListGroup>
        <ListGroup.Item style={{ borderTop: "none", borderInline: "none", paddingInline: "0" }}>
          <div className="d-flex mb-3">
            <span className="me-2">
              <img
                width={"40px"}
                src="https://s3-eu-west-1.amazonaws.com/tpd/logos/62a6277627ee655c1226b624/0x0.png"
                alt="logo"
              />
            </span>
            <div>
              <h6 className="mb-0">HTML 5</h6>
              <p className="mb-0">EPICODE</p>
              <p className="mb-0" style={{ opacity: "50%", fontSize: "14px" }}>
                Data di rilascio: giu 2023
              </p>
              <p className="mb-0" style={{ opacity: "50%", fontSize: "14px" }}>
                ID credenziale B5K8GH68
              </p>
              <Button
                style={{ border: "1px solid grey", paddingBlock: "3px" }}
                className="rounded-pill bg-transparent text-secondary mt-2"
              >
                Mostra le credenziali
                <BoxArrowUpRight className="ms-2 mb-1" />
              </Button>
            </div>
          </div>
        </ListGroup.Item>
        <ListGroup.Item style={{ borderTop: "none", borderInline: "none", paddingInline: "0" }}>
          <div className="d-flex mb-3">
            <span className="me-2">
              <img
                width={"40px"}
                src="https://s3-eu-west-1.amazonaws.com/tpd/logos/62a6277627ee655c1226b624/0x0.png"
                alt="logo"
              />
            </span>
            <div>
              <h6 className="mb-0">JAVASCRIPT</h6>
              <p className="mb-0">EPICODE</p>
              <p className="mb-0" style={{ opacity: "50%", fontSize: "14px" }}>
                Data di rilascio: giu 2023
              </p>
              <p className="mb-0" style={{ opacity: "50%", fontSize: "14px" }}>
                ID credenziale B5K8GH68
              </p>
              <Button
                style={{ border: "1px solid grey", paddingBlock: "3px" }}
                className="rounded-pill bg-transparent text-secondary mt-2"
              >
                Mostra le credenziali
                <BoxArrowUpRight className="ms-2 mb-1" />
              </Button>
            </div>
          </div>
        </ListGroup.Item>
      </ListGroup>
      <div className="text-center">
        <p className="mb-0 mt-2 text-secondary">
          Mostra tutte le licenze e certificazioni (5) <ArrowRight />
        </p>
      </div>
    </Container>
  );
};

export default Licenses;
