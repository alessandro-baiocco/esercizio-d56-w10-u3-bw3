import { useEffect, useState } from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { HandThumbsDown, HandThumbsUp } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { getJobsFetch } from "../../redux/action";
import { Link } from "react-router-dom";
import SecondaryFooter from "../footer/SecondaryFooter";
import SideBarLeft from "../homePage/SideBarLeft";

const GetJobsPage = () => {
  const jobs = useSelector((state) => state.getJobs.content);
  const dispatch = useDispatch();
  const [search, setSearch] = useState();

  useEffect(() => {
    dispatch(getJobsFetch());
  }, []);

  return (
    <Container className="mt-3">
      <Row className="justify-content-center">
        <Col xs="2">
          <SideBarLeft />
        </Col>
        <Col xs="5">
          <ListGroup>
            <ListGroup.Item className="p-4">
              <h5 className="mb-0">Consigliato per te</h5>
              <p className="opacity-75 mb-0" style={{ fontSize: "15px" }}>
                Sulla base del tuo profilo e della tua cronologia delle ricerche
              </p>
            </ListGroup.Item>
            {jobs &&
              jobs
                .filter((job) => job.title.toLowerCase().includes(""))
                .map((job) => (
                  <ListGroup.Item className="p-4">
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
                        <HandThumbsUp className="fs-5" />
                        <HandThumbsDown className="fs-5" />
                      </div>
                    </div>
                  </ListGroup.Item>
                ))}
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
