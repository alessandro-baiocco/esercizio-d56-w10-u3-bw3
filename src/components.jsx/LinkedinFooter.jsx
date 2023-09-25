import { Col, Container, Dropdown, DropdownButton, Form, Row } from "react-bootstrap";
import { GearFill, Link, QuestionCircleFill, ShieldShaded } from "react-bootstrap-icons";

const LinkedinFooter = () => {
  return (
    <Container className="text-secondary">
      <Row>
        <Col className="col-2">
          <ul className="list-unstyled">
            <li>Informazioni</li>
            <li>Linee guida della community</li>
            <li>
              <DropdownButton variant="light" id="dropdown-item-button" title="Privacy e condizioni">
                <Dropdown.Item as="button">Informativa sulla privacy</Dropdown.Item>
                <Dropdown.Item as="button">Contratto di licenza</Dropdown.Item>
                <Dropdown.Item as="button">Termini e condizioni delle pagine</Dropdown.Item>
                <Dropdown.Item as="button">Informativa sui cookie</Dropdown.Item>
                <Dropdown.Item as="button">Informativa sul copyright</Dropdown.Item>
              </DropdownButton>
            </li>
            <li>Sales Solutions</li>
            <li>Centro sicurezza</li>
            <li className=" mt-3">LinkedIn Corporation &copy; 2023</li>
          </ul>
        </Col>
        <Col className="col-2">
          <ul className="list-unstyled">
            <li>Accessibilità</li>
            <li>Carriera</li>
            <li>
              Opzioni per gli annunci <br /> pubblicitari
            </li>
            <li>Mobile</li>
          </ul>
        </Col>
        <Col className="col-2">
          <ul className="list-unstyled">
            <li>Talent Solutions</li>
            <li>Soluzioni di marketing</li>
            <li>Pubblicità</li>
            <li>Piccole imprese</li>
          </ul>
        </Col>
        <Col className="col-3">
          <ul className="list-unstyled">
            <li>
              <QuestionCircleFill /> Domande? <br />
              <span className="fw-light">Visita il nostro Centro assistenza.</span>
            </li>
            <li>
              <GearFill /> Gestisci il tuo account e la tua privacy <br />
              <span className="fw-light">Vai alle impostazioni</span>
            </li>
            <li>
              <ShieldShaded />
              Trasparenza sui contenuti consigliati <br />
              <span className="fw-light">Scopri di più sui contenuti consigliati.</span>
            </li>
          </ul>
        </Col>
        <Col className="col-3">
          <Form>
            <label For="languages">Seleziona lingua</label>
            <select class="form-select" aria-label="Default select example">
              <option selected>Italiano &#40; Italiano &#41; </option>
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
