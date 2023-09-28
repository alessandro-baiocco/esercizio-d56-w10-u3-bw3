import { Link } from "react-router-dom";

const JobsListDescription = (props) => {
  return (
    <div id="lavoroetlavora">
      <Link to={"#"}>
        <h3>{props.job[0]?.title}</h3>
      </Link>
      <p>{props.job[0]?.candidate_required_location}</p>
      <p>{props.job[0]?.job_type}</p>
      <p className="fs-4">Informazioni sull'offerta di lavoro</p>
      <div></div>
    </div>
  );
};
export default JobsListDescription;
