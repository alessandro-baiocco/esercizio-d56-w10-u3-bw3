import { Col, Container, Image } from "react-bootstrap";
import JobsList from "./JobsList";
import { Link } from "react-router-dom";
import JobsListDescription from "./JobsListDescription";

const JobSearch = () => {
  return (
    <Container className="d-flex mt-3">
      <Col xs="6">
        {/* {XX.map((xx) => (
            <JobsList />
        ))} */}
      </Col>
      <Col xs="6">
        <JobsListDescription />
      </Col>
    </Container>
  );
};
export default JobSearch;
