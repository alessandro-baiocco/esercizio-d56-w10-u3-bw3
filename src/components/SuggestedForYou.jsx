import { Button, Container } from "react-bootstrap";
import { BriefcaseFill, EyeFill } from "react-bootstrap-icons";

const SuggestedForYou = () => {
  return (
    <Container
      style={{ backgroundColor: "white", border: "1.5px solid lightgrey", padding: "20px" }}
      className="rounded"
    >
      <div>
        <h5>Consigliato per te</h5>

        <p>
          <span className="me-2">
            <EyeFill />
          </span>
          Solo per te
        </p>
      </div>
      <div style={{ border: "1.5px solid lightgrey" }} className="rounded p-3">
        <div className="d-flex">
          <span>
            <BriefcaseFill color="orange" style={{ fontSize: "55px" }} className="me-2" />
          </span>
          <p className="align-middle">
            Aggiungi una posizione lavorativa precedente. Sarà più facile trovarti ed entrare in <br /> contatto con te.
          </p>
        </div>
        <div>
          <p>Aiuta i responsabili delle assunzioni e i tuoi colleghi a trovarti.</p>
          <Button className="rounded-pill bg-transparent text-secondary border-secondary">
            Aggiungi posizione lavorativa precedente
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default SuggestedForYou;
