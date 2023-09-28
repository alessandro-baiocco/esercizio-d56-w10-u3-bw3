import { useEffect } from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getCompanyJobsFetch } from "../../redux/action";
import { ChevronDown } from "react-bootstrap-icons";

const CompanyJobs = () => {
  const companyJobs = useSelector((state) => state.getJobs.company);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCompanyJobsFetch());
  }, []);

  return (
    <Container className="px-0">
      <ListGroup className="mb-3 ">
        <ListGroup.Item className="border-bottom-0 d-flex justify-content-between align-items-center">
          <h5 className="mb-0 py-2 ">Ricerche di offerte di lavoro recenti</h5>
          <div>
            <span className="opacity-75">Cancella</span>
          </div>
        </ListGroup.Item>
        {companyJobs &&
          companyJobs.slice(0, 3).map((companyJob) => (
            <ListGroup.Item>
              <div className="d-flex flex-column">
                <p className="mb-0" style={{ fontWeight: "600" }}>
                  {companyJob.company_name}
                </p>
                <p className="opacity-75 mb-0" style={{ fontSize: "12px" }}>
                  {companyJob.title}
                </p>
              </div>
            </ListGroup.Item>
          ))}
        <ListGroup.Item className="text-center text-primary" style={{ fontWeight: "600" }}>
          Vedi di piu'
          <ChevronDown />
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
};

export default CompanyJobs;
