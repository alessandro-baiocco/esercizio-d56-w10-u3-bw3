import { Col, Container, Dropdown, DropdownButton, Form, Row } from "react-bootstrap";
import { GearFill, QuestionCircleFill, ShieldShaded } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
const LinkedinFooter = () => {
  return (
    <Container className="mt-3 d-none d-md-block">
      <Row id="FootElem" className="text-secondary">
        <Col className="col-2">
          <ul className="list-unstyled">
            <li>
              <Link to="#" className="text-decoration-none text-secondary">
                Informazioni
              </Link>
            </li>
            <li>
              <Link to="#" className="text-decoration-none text-secondary">
                Linee guida della community
              </Link>
            </li>
            <li>
              <DropdownButton
                variant="light"
                id="dropdown-item-button"
                title="Privacy e condizioni"
                className="text-secondary"
              >
                <Dropdown.Item id="dropItem" as="button">
                  <Link to="#" className="text-decoration-none text-secondary">
                    Informativa sulla privacy
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item id="dropItem" as="button">
                  <Link to="#" className="text-decoration-none text-secondary">
                    Contratto di licenza
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item id="dropItem" as="button">
                  <Link to="#" className="text-decoration-none text-secondary">
                    Termini e condizioni delle pagine
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item id="dropItem" as="button">
                  <Link to="#" className="text-decoration-none text-secondary">
                    Informativa sui cookie
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item id="dropItem" as="button">
                  <Link to="#" className="text-decoration-none text-secondary">
                    Informativa sul copyright
                  </Link>
                </Dropdown.Item>
              </DropdownButton>
            </li>
            <li>
              <Link to="#" className="text-decoration-none text-secondary">
                Sales Solutions
              </Link>
            </li>
            <li>
              <Link to="#" id="purpleLink" className="text-decoration-none">
                Centro sicurezza
              </Link>
            </li>
            <li className=" mt-3">LinkedIn Corporation &copy; 2023</li>
          </ul>
        </Col>
        <Col className="col-2">
          <ul className="list-unstyled">
            <li>
              <Link to="#" className="text-decoration-none text-secondary">
                Accessibilità
              </Link>
            </li>
            <li>
              <Link to="#" className="text-decoration-none text-secondary">
                Carriera
              </Link>
            </li>
            <li>
              <Link to="#" className="text-decoration-none text-secondary">
                Opzioni per gli annunci <br /> pubblicitari
              </Link>
            </li>
            <li>
              <Link to="#" className="text-decoration-none text-secondary">
                Mobile
              </Link>
            </li>
          </ul>
        </Col>
        <Col className="col-2">
          <ul className="list-unstyled">
            <li>
              <Link to="#" className="text-decoration-none text-secondary">
                Talent Solutions
              </Link>
            </li>
            <li>
              <Link to="#" className="text-decoration-none text-secondary">
                Soluzioni di marketing
              </Link>
            </li>
            <li>
              <Link to="#" className="text-decoration-none text-secondary">
                Pubblicità
              </Link>
            </li>
            <li>
              <Link to="#" className="text-decoration-none text-secondary">
                Piccole imprese
              </Link>
            </li>
          </ul>
        </Col>
        <Col className="col-3">
          <ul className="list-unstyled">
            <li>
              <QuestionCircleFill className="fs-6 me-2" />
              <Link to="#" className="text-decoration-none text-secondary fs-6">
                Domande? <br />
              </Link>
              <span className="fw-light">Visita il nostro Centro assistenza.</span>
            </li>
            <li>
              <GearFill className="fs-6 me-2" />
              <Link to="#" className="text-decoration-none text-secondary fs-6">
                Gestisci il tuo account e la tua privacy <br />
              </Link>
              <span className="fw-light">Vai alle impostazioni</span>
            </li>
            <li>
              <ShieldShaded className="fs-6 me-2" />
              <Link to="#" className="text-decoration-none text-secondary fs-6">
                Trasparenza sui contenuti consigliati <br />
              </Link>
              <span className="fw-light">Scopri di più sui contenuti consigliati.</span>
            </li>
          </ul>
        </Col>
        <Col className="col-3">
          <Form>
            <label>Seleziona lingua</label>
            <select className="form-select" aria-label="Default select example">
              <option>Italiano &#40; Italiano &#41; </option>
              <option value="1">English &#40; Inglese &#41;</option>
              <option value="2">Francais &#40; Francese &#41;</option>
              <option value="3">Espanol &#40; Spagnolo &#41;</option>
            </select>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LinkedinFooter;
