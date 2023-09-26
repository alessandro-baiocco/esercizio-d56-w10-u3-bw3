import { Container } from "react-bootstrap";
import { EyeFill, PeopleFill, Search } from "react-bootstrap-icons";

const Analyses = () => {
  return (
    <Container
      style={{ backgroundColor: "white", border: "1.5px solid lightgrey", padding: "15px" }}
      className="rounded"
    >
      <div className="lh-1">
        <h5>Analisi</h5>

        <p>
          <span className="me-2">
            <EyeFill color="grey" />
          </span>
          Solo per te
        </p>
      </div>
      <div className="d-flex">
        <div className="d-flex">
          <span>
            <PeopleFill className="fs-4 me-2" />
          </span>
          <p>
            <span className="fw-bold">7 visualizzazioni del profilo</span> <br />
            <span>
              Scopri chi ha visitato il tuo <br /> profilo.
            </span>
          </p>
        </div>
        <div className="d-flex ms-5">
          <span>
            <Search className="fs-5 me-2" />
          </span>
          <p>
            <span className="fw-bold">
              2 comparse nei motori di <br /> ricerca
            </span>{" "}
            <br />
            <span>
              Vedi quante volte compari nei <br /> risultati di ricerca.
            </span>
          </p>
        </div>
      </div>
    </Container>
  );
};
export default Analyses;
