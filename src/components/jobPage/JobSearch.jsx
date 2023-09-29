import { Col, Container, Image } from "react-bootstrap";

import { Link } from "react-router-dom";
import JobsListDescription from "./JobsListDescription";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { jobSearch } from "../../redux/action";
import JobList from "./JobsList";

const JobSearch = (props) => {
  const jobQuery = useSelector((state) => state.jobQuery?.content);
  const JobSearch = useSelector((state) => state.jobSearch?.content);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(jobSearch(jobQuery));
  }, []);

  return (
    <Container className="d-flex mt-3" style={{ height: "calc(100vh - 104px)", overflow: "auto" }}>
      <Col xs="6" style={{ height: "calc(100vh - 128px)", overflow: "auto" }}>
        {JobSearch && JobSearch.map((job, i) => <JobList job={job} key={"job-" + i} />)}
      </Col>
      <Col xs="6" style={{ height: "calc(100vh - 128px)", overflow: "auto" }}>
        {JobSearch && <JobsListDescription job={JobSearch} />}
      </Col>
    </Container>
  );
};
export default JobSearch;
