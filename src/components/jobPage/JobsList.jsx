import { Container, Image } from "react-bootstrap";
import { XLg } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { SELECTED_JOB } from "../../redux/action";

const JobList = (props) => {
  const isJobSelected = useSelector((state) => state.selectedJob.content);
  const dispatch = useDispatch();
  return (
    <Container
      onClick={() => dispatch({ type: SELECTED_JOB, payload: props.job._id })}
      className={
        isJobSelected === props.job._id
          ? "d-flex cardLinkedln my-2 p-2 jobSelectedClass"
          : "d-flex cardLinkedln my-2 p-2"
      }
    >
      <div>
        <Image
          src={
            "https://media.licdn.com/dms/image/D4D0BAQGO461LRg1Tew/company-logo_100_100/0/1684246924520?e=1703721600&v=beta&t=q5avCekpo40VuhSX5tSx334ErmbC3oc9CVKYP1TnaqA"
          }
          width={"56px"}
          height={"56px"}
        ></Image>
      </div>
      <div className="ms-3">
        <h3 style={{ fontSize: "16px", fontWeight: "500" }} className="text-primary mb-0">
          {props.job.title}
        </h3>
        <p style={{ fontSize: "14px", fontWeight: "500" }} className="mb-0">
          {props.job.company_name}
        </p>
        <p style={{ fontSize: "14px" }} className="mb-0 opacity-75">
          {props.job.candidate_required_location}
        </p>
        <div className="d-flex">
          <span className="mt-4">
            <span style={{ fontSize: "12px" }} className="me-1">
              Promosso
            </span>
            <i className="bi bi-linkedin text-primary me-1 " width={"16px"} height={"16px"}></i>
            <span style={{ fontSize: "12px" }}>Candidatura semplice</span>
          </span>
        </div>
      </div>
      <div className="ms-auto">
        <XLg />
      </div>
    </Container>
  );
};
export default JobList;
