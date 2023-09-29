import { Image } from "react-bootstrap";

const JobList = (props) => {
  return (
    <div className="d-flex cardLinkedln my-2 p-2">
      <div>
        <Image
          src={
            "https://media.licdn.com/dms/image/D4D0BAQGO461LRg1Tew/company-logo_100_100/0/1684246924520?e=1703721600&v=beta&t=q5avCekpo40VuhSX5tSx334ErmbC3oc9CVKYP1TnaqA"
          }
          width={"70px"}
        ></Image>
      </div>
      <div className="ms-3">
        <h3>{props.job.title}</h3>
        <p>{props.job.company_name}</p>
        <p>{props.job.candidate_required_location}</p>
        <div className="d-flex">
          <span>
            Promosso <i className="bi bi-linkedin text-primary"></i> Candidatura semplice{" "}
          </span>
        </div>
      </div>
    </div>
  );
};
export default JobList;
