import { useEffect, useState } from "react";
import { Col, Container, ListGroup, Placeholder, Row, Spinner } from "react-bootstrap";
import { HandThumbsDown, HandThumbsDownFill, HandThumbsUp, HandThumbsUpFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  FAVOURITE_JOB,
  NOT_FAVOURITE_JOB,
  REMOVE_FAVOURITE_JOB,
  REMOVE_NOT_FAVOURITE_JOB,
  getJobsFetch,
} from "../../redux/action";
import { Link } from "react-router-dom";
import SecondaryFooter from "../footer/SecondaryFooter";
import SideBarRightJob from "./SideBarRightJob";
import SideBarLeft from "../homePage/SideBarLeft";
import CompanyJobs from "./GetCompanyJobs";

const GetJobsPage = () => {
  const jobs = useSelector((state) => state.getJobs.content);
  const isLoading = useSelector((state) => state.loadingProfile.content);
  const isFavourite = useSelector((state) => state.favouriteJob.content);
  const isntFavourite = useSelector((state) => state.notFavouriteJob.content);
  const dispatch = useDispatch();
  const [search, setSearch] = useState();

  useEffect(() => {
    dispatch(getJobsFetch());
  }, []);

  return (
    <Container className="mt-3">
      <Row className="justify-content-center">
        <Col xs="3">
          <SideBarRightJob />
        </Col>
        <Col xs="6">
          <CompanyJobs />
          <ListGroup>
            <ListGroup.Item className="p-4">
              <h5 className="mb-0">Consigliato per te</h5>
              <p className="opacity-75 mb-0" style={{ fontSize: "15px" }}>
                Sulla base del tuo profilo e della tua cronologia delle ricerche
              </p>
            </ListGroup.Item>
            {isLoading ? (
              <div className="text-center mt-3">
                <Spinner variant="success" />
              </div>
            ) : (
              jobs &&
              jobs
                .filter((job) => job.title.toLowerCase().includes(""))
                .map((job, i) => (
                  <ListGroup.Item className="p-4" key={"job-" + i}>
                    <div className="d-flex">
                      <div>
                        <img src="https://placehold.co/50x50" alt="" />
                      </div>
                      <div className="ms-2">
                        <h6 className="mb-1" style={{ fontSize: "18px" }}>
                          <Link to={job.url} style={{ textDecoration: "none" }} className="text-primary">
                            {job.title}
                          </Link>
                        </h6>
                        <p className="mb-0" style={{ fontSize: "14px" }}>
                          {job.company_name}
                        </p>
                        <p className="mb-0 opacity-75" style={{ fontSize: "14px" }}>
                          {job.candidate_required_location}
                        </p>
                        <p className="mb-0 opacity-75" style={{ fontSize: "14px" }}>
                          Pubblicato il: {job.publication_date.slice(0, 10)}
                        </p>
                      </div>
                      <div className="d-flex ms-auto gap-3">
                        {isFavourite.includes(job._id) ? (
                          <HandThumbsUpFill
                            className="fs-5 text-danger"
                            onClick={() => dispatch({ type: REMOVE_FAVOURITE_JOB, payload: job._id })}
                          />
                        ) : (
                          <HandThumbsUp
                            className="fs-5"
                            onClick={() => {
                              dispatch({ type: FAVOURITE_JOB, payload: job._id });
                              dispatch({ type: REMOVE_NOT_FAVOURITE_JOB, payload: job._id });
                            }}
                          />
                        )}
                        {isntFavourite.includes(job._id) ? (
                          <HandThumbsDownFill
                            className="fs-5 text-danger"
                            onClick={() => dispatch({ type: REMOVE_NOT_FAVOURITE_JOB, payload: job._id })}
                          />
                        ) : (
                          <HandThumbsDown
                            className="fs-5"
                            onClick={() => {
                              dispatch({ type: NOT_FAVOURITE_JOB, payload: job._id });
                              dispatch({ type: REMOVE_FAVOURITE_JOB, payload: job._id });
                            }}
                          />
                        )}
                      </div>
                    </div>
                  </ListGroup.Item>
                ))
            )}
          </ListGroup>
        </Col>
        <Col xs="3">
          <SecondaryFooter />
        </Col>
      </Row>
    </Container>
  );
};
export default GetJobsPage;
