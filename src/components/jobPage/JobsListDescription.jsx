import { Linkedin } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const JobsListDescription = (props) => {
  function createMarkup() {
    return { __html: props.job?.description };
  }

  return (
    <div id="lavoroetlavora" className="cardLinkedln my-2 ms-3 p-2">
      <Link to={"#"} className="text-decoration-none text-black">
        <h3>{props.job?.title}</h3>
      </Link>
      <p>
        <i className="bi bi-geo-alt-fill pe-3"></i>
        {props.job?.candidate_required_location}
      </p>
      <p>
        <i className="bi bi-briefcase-fill pe-3"></i>
        {props.job?.job_type}
      </p>
      <p className="fs-4 fw-semibold">Informazioni sull'offerta di lavoro</p>
      <div dangerouslySetInnerHTML={createMarkup()} />
    </div>
  );
};
export default JobsListDescription;
