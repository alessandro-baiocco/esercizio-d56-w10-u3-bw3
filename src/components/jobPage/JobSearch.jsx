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
    dispatch(jobSearch());
  }, []);

  return (
    <Container className="d-flex mt-3">
      <Col xs="6">
        {JobSearch &&
          JobSearch.filter((job) => job.title.toLowerCase().includes(jobQuery)).map((job) => <JobList job={job} />)}
      </Col>
      <Col xs="6">
        <JobsListDescription />
      </Col>
    </Container>
  );
};
export default JobSearch;
