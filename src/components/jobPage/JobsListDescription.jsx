import { Link } from "react-router-dom";

const JobsListDescription = () => {
  return (
    <div>
      <Link to={"#"}>
        <h3>Titolo job</h3>
      </Link>
      <p>location</p>
      <p>job_type</p>
      <p className="fs-4">Informazioni sull'offerta di lavoro</p>
      <div>description API</div>
    </div>
  );
};
export default JobsListDescription;
