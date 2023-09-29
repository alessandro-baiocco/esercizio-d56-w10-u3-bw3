import { Col, Container, Image } from "react-bootstrap";

import { Link } from "react-router-dom";
import JobsListDescription from "./JobsListDescription";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { jobSearch } from "../../redux/action";
import JobList from "./JobsList";

const JobSearch = (props) => {
  const jobQuery = useSelector((state) => state.jobQuery?.content);
  const JobSearch = useSelector((state) => state.jobSearch?.content);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(jobSearch(jobQuery));
  }, []);

  const [selectedJob, setSelectedJob] = useState(false);

  const handleJob = (job) => {
    setSelectedJob(job);
  };

  return (
    <Container className="d-flex mt-3" style={{ height: "calc(100vh - 104px)", overflow: "auto" }}>
      <Col xs="12" md="5" style={{ height: "calc(100vh - 128px)", overflow: "auto" }}>
        {JobSearch &&
          JobSearch.map((job) => (
            <div key={job.id} onClick={() => handleJob(job)}>
              <JobList job={job} selectedJob={selectedJob} />
            </div>
          ))}
      </Col>
      <Col xs="none" md="7" style={{ height: "calc(100vh - 128px)", overflow: "auto" }}>
        {selectedJob ? (
          <JobsListDescription job={selectedJob} selectedJob={selectedJob} />
        ) : (
          <h3 className="ps-5">Scegli un'offerta per vedere la descrizione</h3>
        )}
      </Col>
    </Container>
  );
};
export default JobSearch;
