import { Badge, Container, ListGroup } from "react-bootstrap";
import { ArrowRight, EyeFill, PeopleFill, Reception3 } from "react-bootstrap-icons";

const Resouce = () => {
  return (
    <Container
      style={{ backgroundColor: "white", border: "1.5px solid lightgrey", padding: "15px" }}
      className="rounded"
    >
      <div className="lh-1">
        <h5>Risorse</h5>

        <p>
          <span className="me-2">
            <EyeFill color="grey" />
          </span>
          Solo per te
        </p>
      </div>
      <ListGroup>
        <ListGroup.Item style={{ borderTop: "none", borderInline: "none" }}>
          <div className="d-flex ">
            <span className="me-2">
              <Reception3 className="fs-5 mb-4" />
            </span>
            <div className="lh-1">
              <h6>
                Modalità creazione di contenuti{" "}
                <Badge className="bg-secondary text-dark" style={{ opacity: "50%" }}>
                  No
                </Badge>
              </h6>
              <p>Fatti scoprire, metti in risalto i contenuti sul tuo profilo e accedi agli strumenti di creazione</p>
            </div>
          </div>
        </ListGroup.Item>
        <ListGroup.Item style={{ borderTop: "none", borderInline: "none" }}>
          <div className="d-flex ">
            <span className="me-2">
              <PeopleFill className="fs-5 mb-4" />
            </span>
            <div className="lh-1">
              <h6>La mia rete</h6>
              <p>Salva e gestisci i tuoi collegamenti e interessi.</p>
            </div>
          </div>
        </ListGroup.Item>
      </ListGroup>
      <div className="text-center">
        <p className="mb-0 mt-2 text-secondary">
          Mostra tutte le risorse (5) <ArrowRight />
        </p>
      </div>
    </Container>
  );
};
export default Resouce;
