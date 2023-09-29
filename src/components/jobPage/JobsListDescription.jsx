import { Button } from "react-bootstrap";
import { Linkedin } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const JobsListDescription = (props) => {
  function createMarkup() {
    return { __html: props.job?.description };
  }

  return (
    <div id="lavoroetlavora" className="cardLinkedln my-2 ms-3 p-3">
      <Link to={"#"} className="text-decoration-none text-black">
        <h3 style={{ fontSize: "24px" }}>{props.job?.title}</h3>
      </Link>
      <p style={{ fontSize: "14px", marginBottom: "12px" }}>
        <i className="bi bi-geo-alt-fill pe-2" style={{ width: "20px", height: "18px" }}></i>
        {props.job?.candidate_required_location}
      </p>
      <p style={{ fontSize: "14px", marginBottom: "12px" }}>
        <i className="bi bi-briefcase-fill pe-2" style={{ width: "20px", height: "18px" }}></i>
        {props.job?.job_type}
      </p>
      <div className="d-flex gap-2 my-3">
        <Button className="rounded-pill" style={{ fontWeight: "600" }}>
          <Linkedin className="mb-1 me-2" />
          Candidatura Semplice
        </Button>
        <Button
          className="rounded-pill text-primary bg-transparent"
          style={{ border: "1.5px solid", fontWeight: "600" }}
        >
          Salva
        </Button>
      </div>
      <p className="fw-semibold" style={{ fontSize: "20px" }}>
        Informazioni sull'offerta di lavoro
      </p>
      <div className="fw-light" dangerouslySetInnerHTML={createMarkup()} />
    </div>
  );
};
export default JobsListDescription;
