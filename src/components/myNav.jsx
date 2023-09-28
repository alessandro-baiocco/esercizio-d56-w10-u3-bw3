import { useEffect, useState } from "react";
import { Card, Col, Container, Form, Nav, NavDropdown, Navbar, Row } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { SEARCH_JOB_QUERY } from "../redux/action";

const MyNav = () => {
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [isActive, setIsActive] = useState(false);
  const HandleSearch = () => {
    setIsActive((current) => !current);
  };

  const dispatch = useDispatch();

  const width2 = () => {
    if (window.innerWidth < 992) {
      setIsActive(false);
    } else {
      setIsActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", width2);
    return () => {
      window.removeEventListener("resize", width2);
    };
  }, []);

  return (
    <Navbar className={`bg-light media ${isActive ? `active` : ``}`}>
      <Container id="nav-container" className="d-flex align-items-center text-secondary ">
        <div className={isActive ? "d-flex w-100" : "d-flex"}>
          <Navbar.Brand to="/" className=" me-2 d-flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-linkedin text-primary d-md-block"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              className="mercado-match d-none"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M21.41 18.59l-5.27-5.28A6.83 6.83 0 0017 10a7 7 0 10-7 7 6.83 6.83 0 003.31-.86l5.28 5.27a2 2 0 002.82-2.82zM5 10a5 5 0 115 5 5 5 0 01-5-5z"></path>
            </svg>
          </Navbar.Brand>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              dispatch({ type: SEARCH_JOB_QUERY, payload: search });
              navigate("/jobs/Search");
            }}
            className="d-flex align-items-center me-auto w-100"
          >
            <div className="text-secondary">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-search d-lg-none"
                viewBox="0 0 16 16"
                onClick={() => HandleSearch()}
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
              <p className="mb-o d-none">cerca</p>
            </div>
            <Form.Control
              type="text"
              placeholder="cerca"
              className={isActive ? "d-block" : "d-block d-sm-none d-lg-block"}
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </Form>
        </div>
        <div className=" ms-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-chat-dots-fill d-block d-sm-none"
            viewBox="0 0 16 16"
          >
            <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
          </svg>
        </div>
        {!isActive && (
          <Nav className="me-auto d-none d-sm-flex">
            <Nav.Link href="/" className="mx-2 widthIconNavBar">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className={isActive ? "d-none" : "bi bi-house-door-fill d-none d-sm-block ms-2"}
                viewBox="0 0 16 16"
              >
                <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
              </svg>
              <p className={isActive ? "d-none" : "mb-0 d-none d-md-block"}>Home</p>
            </Nav.Link>
            <Nav.Link to="#link" className="mx-2 widthIconNavBar">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className={isActive ? "d-none" : "bi bi-people-fill d-none d-sm-block  ms-1"}
                viewBox="0 0 16 16"
              >
                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
              </svg>
              <p className={isActive ? "d-none" : "mb-0 d-none d-md-block"}>Rete </p>
            </Nav.Link>
            <Nav.Link to="#link" className="mx-2 widthIconNavBar">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className={isActive ? "d-none" : "bi bi-briefcase-fill d-none d-sm-block  ms-2"}
                viewBox="0 0 16 16"
              >
                <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z" />
                <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z" />
              </svg>
              <p className={isActive ? "d-none" : "mb-0 d-none d-md-block"}> Lavoro </p>
            </Nav.Link>
            <Nav.Link to="#link" className="mx-2 pt-1 widthIconNavBar2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className={isActive ? "d-none" : "bi bi-chat-dots-fill ms40px "}
                viewBox="0 0 16 16"
              >
                <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
              </svg>

              <p className={isActive ? "d-none" : "mb-0 d-none d-md-block"}>Messaggistica</p>
            </Nav.Link>
            <Nav.Link to="#link" className="mx-2 pt-1 widthIconNavBar">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className={isActive ? "d-none" : "bi bi-bell-fill ms-4 svgNotifiche"}
                viewBox="0 0 16 16"
              >
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
              </svg>
              <p className={isActive ? "d-none" : "mb-0 d-none d-md-block"}> Notifiche </p>
            </Nav.Link>

            <div className="d-flex flex-column py-2">
              <Link to={"/myprofile"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className={
                    isActive ? "d-none" : "bi bi-person-circle d-none d-sm-block  pb-0 mb-0 ms-2 text-secondary"
                  }
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path
                    fillRule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                  />
                </svg>
              </Link>

              <NavDropdown
                title="tu"
                id="basic-nav-dropdown"
                className={
                  isActive ? "d-none" : "d-none d-md-block pt-0 pe-3 border-end widthIconNavBar widthIconNavBar"
                }
              >
                <NavDropdown.Item to="#action/3.1" className="d-flex justify-content-between ps-0 pt-0">
                  <div>
                    <Link to={"/myprofile"}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        fill="currentColor"
                        className="bi bi-person-circle -none d-sm-block pb-0 mb-0 ms-2 text-secondary pt-0"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path
                          fillRule="evenodd"
                          d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                        />
                      </svg>
                    </Link>
                  </div>
                  <div className="d-flex flex-column">
                    <h5>NOME COGNOME</h5>
                    <p>
                      ruolo occupato - <br /> altre informazioni
                    </p>
                  </div>
                </NavDropdown.Item>
                <button className="border border-primary bg-white rounded-pill text-primary  w-100">
                  visualizza profilo
                </button>
                <NavDropdown.Divider />
                <p className="fw-bold ms-3">ACCOUNT</p>
                <NavDropdown.Item to="#action/3.2">
                  <p className="mb-0">Impostazioni e privacy</p>
                </NavDropdown.Item>
                <NavDropdown.Item to="#action/3.3">
                  <p className="mb-0">Guida</p>
                </NavDropdown.Item>
                <NavDropdown.Item to="#action/3.4">
                  {" "}
                  <p className="mb-0">Lingua</p>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <p className="fw-bold ms-3">GESTISCI</p>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <p className="mb-0">Post e attività</p>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <p className="mb-0">Account per la pubblicazione di off...</p>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <p className="mb-0">esci</p>
                </NavDropdown.Item>
              </NavDropdown>
            </div>
            <div className="d-flex flex-column py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className={
                  isActive ? "d-none" : "bi bi-grid-3x3-gap-fill ms-5 mb-0 pb-0 text-secondary d-none d-sm-block"
                }
                viewBox="0 0 16 16"
              >
                <path d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z" />
              </svg>
              <button
                onClick={handleShow}
                className={
                  isActive
                    ? "d-none"
                    : "d-none d-md-block border border-0 bg-light  px-0 text-secondary text-truncate ms-2"
                }
              >
                per le aziende
              </button>
              <Offcanvas show={show} onHide={handleClose} placement={`end`}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>
                    <h3>Per le aziende</h3>
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Card>
                    <Card.Header className="bg-white">
                      {" "}
                      <p className="fw-bold">Scopri altri prodotti LinkedIn</p>
                    </Card.Header>
                    <Card.Body>
                      <Container>
                        <Row>
                          <Col xs={4} className="d-flex flex-column align-items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 40 40"
                              data-supported-dps="40x40"
                              width="40"
                              height="40"
                              focusable="false"
                            >
                              <defs>
                                <linearGradient
                                  id="app-learning-@1-a"
                                  x1="7.18"
                                  y1="6.98"
                                  x2="13.8"
                                  y2="20.22"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop offset="0" stop-color="#33aada"></stop>
                                  <stop offset="1" stop-color="#0091ca"></stop>
                                </linearGradient>
                                <linearGradient
                                  id="app-learning-@1-b"
                                  x1="12.96"
                                  y1="-17.55"
                                  x2="27.9"
                                  y2="24.33"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop offset="0" stop-color="#665ed0"></stop>
                                  <stop offset="1" stop-color="#0073b1"></stop>
                                </linearGradient>
                              </defs>
                              <path
                                d="M20 30H8a1 1 0 01-1-1V11a1 1 0 011-1h12v20z"
                                fill="url(#app-learning-@1-a)"
                              ></path>
                              <path
                                d="M20 10h12a1 1 0 011 1v18a1 1 0 01-1 1H20V10z"
                                fill="url(#app-learning-@1-b)"
                              ></path>
                              <path fill="#33aada" d="M9 19h8v2H9zM9 23h8v2H9zM9 15h8v2H9z"></path>
                              <path fill="#006097" d="M23 19h8v2h-8zM23 23h8v2h-8zM23 15h8v2h-8z"></path>
                              <path
                                d="M17.41 15.25l7.46 4.52a.27.27 0 010 .46l-7.46 4.52a.27.27 0 01-.41-.23v-9a.27.27 0 01.41-.27z"
                                fill="#fff"
                              ></path>
                            </svg>
                            <p className="text-secondary" style={{ fontSize: "0.75rem" }}>
                              {" "}
                              Learning
                            </p>
                          </Col>
                          <Col xs={4} className="d-flex flex-column align-items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 40 40"
                              data-supported-dps="40x40"
                              width="40"
                              height="40"
                              focusable="false"
                            >
                              <defs>
                                <linearGradient
                                  id="app-talent-insights-medium-a"
                                  x1="34.05"
                                  y1="44.47"
                                  x2="13.67"
                                  y2="19.5"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop offset="0" stop-color="#665ed0"></stop>
                                  <stop offset="1" stop-color="#0073b1"></stop>
                                </linearGradient>
                              </defs>
                              <path d="M25 6H10a1 1 0 00-1 1v25a1 1 0 001 1h20a1 1 0 001-1V12z" fill="#caedff"></path>
                              <path fill="#65c3e8" d="M25 6v6h6l-6-6z"></path>
                              <path
                                d="M20 19a4 4 0 114-4 4 4 0 01-4 4zm3 2h-6v12h6zm8 11v-8h-5v9h4a1 1 0 001-1zm-17-5H9v5a1 1 0 001 1h4z"
                                fill="url(#app-talent-insights-medium-a)"
                              ></path>
                            </svg>
                            <p className="text-secondary" style={{ fontSize: "0.75rem" }}>
                              Talent <br /> Insights{" "}
                            </p>
                          </Col>
                          <Col xs={4} className="d-flex flex-column align-items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 40 40"
                              data-supported-dps="40x40"
                              width="40"
                              height="40"
                              focusable="false"
                            >
                              <defs>
                                <linearGradient
                                  id="app-ads-@1-a"
                                  x1="34.78"
                                  y1="3.84"
                                  x2="14.66"
                                  y2="25.84"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop offset="0" stop-color="#665ed0"></stop>
                                  <stop offset="1" stop-color="#0073b1"></stop>
                                </linearGradient>
                              </defs>
                              <g fill="url(#app-ads-@1-a)">
                                <path d="M20 11.88A8.13 8.13 0 1111.88 20 8.13 8.13 0 0120 11.88M20 9a11 11 0 1011 11A11 11 0 0020 9z"></path>
                                <circle cx="20" cy="20" r="4"></circle>
                              </g>
                              <circle
                                cx="20"
                                cy="20"
                                r="2"
                                transform="rotate(-45 20.002 19.995)"
                                fill="#33aada"
                              ></circle>
                              <path fill="#33aada" d="M24.246 12.932l2.829 2.828-5.657 5.657-2.828-2.829z"></path>
                              <path
                                fill="#33aada"
                                d="M29.19 16.46l-4.95-.7-.7-4.95 4.94-4.95L29 11l5.14.52-4.95 4.94z"
                              ></path>
                            </svg>
                            <p className="text-secondary" style={{ fontSize: "0.75rem" }}>
                              Pubblicizza{" "}
                            </p>
                          </Col>
                          <Col xs={4} className="d-flex flex-column align-items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 40 40"
                              data-supported-dps="40x40"
                              width="40"
                              height="40"
                              focusable="false"
                            >
                              <defs>
                                <linearGradient
                                  id="app-sales-navigator-@1-a"
                                  x1="40.53"
                                  y1="-53.4"
                                  x2="20.23"
                                  y2="19.17"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop offset="0" stop-color="#665ed0"></stop>
                                  <stop offset="1" stop-color="#0073b1"></stop>
                                </linearGradient>
                              </defs>
                              <circle cx="20" cy="20" r="14" fill="url(#app-sales-navigator-@1-a)"></circle>
                              <path
                                d="M17.17 17.17L27.42 12a.4.4 0 01.18 0 .39.39 0 01.4.39.42.42 0 010 .19l-5.17 10.25z"
                                fill="#fff"
                              ></path>
                              <path
                                d="M17.17 17.17L12 27.42a.42.42 0 000 .19.39.39 0 00.37.38.45.45 0 00.21 0l10.25-5.12z"
                                fill="#98d8f4"
                              ></path>
                              <circle cx="20" cy="20" r="4" fill="#fff"></circle>
                              <circle cx="20" cy="20" r="2" fill="#0073b1"></circle>
                            </svg>
                            <p className="text-secondary" style={{ fontSize: "0.75rem" }}>
                              Vendi{" "}
                            </p>
                          </Col>
                          <Col xs={4} className="d-flex flex-column align-items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 40 40"
                              data-supported-dps="40x40"
                              width="40"
                              height="40"
                              focusable="false"
                            >
                              <defs>
                                <linearGradient
                                  id="app-groups-@1-b"
                                  x1="1.84"
                                  y1="-24.59"
                                  x2="20.66"
                                  y2="25.05"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop offset="0" stop-color="#665ed0"></stop>
                                  <stop offset="1" stop-color="#0073b1"></stop>
                                </linearGradient>
                                <clipPath id="app-groups-@1-a">
                                  <path
                                    d="M18.17 9.15a11 11 0 00-7.76 16.23l-2 5.6a.47.47 0 00.63.59l5.21-2.23a11 11 0 103.92-20.19z"
                                    fill="none"
                                  ></path>
                                </clipPath>
                              </defs>
                              <path
                                d="M18.17 9.15a11 11 0 00-7.76 16.23l-2 5.6a.47.47 0 00.63.59l5.21-2.23a11 11 0 103.92-20.19z"
                                fill="#caedff"
                              ></path>
                              <circle cx="29" cy="16" r="3" fill="#0091ca"></circle>
                              <circle cx="11" cy="16" r="3" fill="#0091ca"></circle>
                              <g clip-path="url(#app-groups-@1-a)">
                                <path
                                  d="M20 18a4 4 0 114-4 4 4 0 01-4 4zm3 2h-6v16h6V20z"
                                  fill="url(#app-groups-@1-b)"
                                ></path>
                                <path fill="#0091ca" d="M26 21h6v14h-6zM8 21h6v14H8z"></path>
                              </g>
                            </svg>
                            <p className="text-secondary" style={{ fontSize: "0.75rem" }}>
                              Gruppi{" "}
                            </p>
                          </Col>
                          <Col xs={4} className="d-flex flex-column align-items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 40 40"
                              data-supported-dps="40x40"
                              width="40"
                              height="40"
                              focusable="false"
                            >
                              <circle cx="20" cy="12" r="4" fill="#0073b1"></circle>
                              <path
                                d="M31.88 13.46L16.17 29.17 18 31a1.37 1.37 0 002 0l14.71-14.71a1.13 1.13 0 00.29-.8.89.89 0 00-.29-.61l-1.41-1.42a1 1 0 00-1.42 0z"
                                fill="#0091ca"
                              ></path>
                              <path
                                d="M21.83 29.17L20 31a1.35 1.35 0 01-1 .4 1.36 1.36 0 01-1-.4l-8.71-8.71a1 1 0 010-1.41l1.41-1.41a1.07 1.07 0 01.76-.29.94.94 0 01.65.29z"
                                fill="#33aada"
                                opacity=".8"
                              ></path>
                              <path fill="#0073b1" d="M19 26.34l4-4V18h-6v6.34l2 2z"></path>
                            </svg>
                            <p className="text-secondary" style={{ fontSize: "0.75rem" }}>
                              Marketplace <br /> dei servizi{" "}
                            </p>
                          </Col>
                        </Row>
                      </Container>
                    </Card.Body>
                  </Card>
                  <Card className="mt-3">
                    <Card.Header className="bg-white">
                      <p className="fw-bold"> Scopri altro per il business</p>
                    </Card.Header>
                    <Card.Body>
                      <p className="mb-0 fw-bold ">Assumi su LinkedIn</p>{" "}
                      <p className="mt-0 mb-1 "> Trova, attrai e assumi </p>{" "}
                      <p className="mb-0 fw-bold ">Vendi con LinkedIn</p>
                      <p className="mt-0 mb-1 "> Costruisci relazioni con i buyer</p>{" "}
                      <p className="mb-0 fw-bold "> Offerta di lavoro gratuita</p>{" "}
                      <p className="mt-0 mb-1 ">Trova candidati di qualità</p>
                      <p className="mb-0 fw-bold "> Fai pubblicità su LinkedIn</p>{" "}
                      <p className="mt-0 mb-1 ">Acquisisci clienti e fai crescere la tua azienda</p>{" "}
                      <p className="mb-0 fw-bold ">Impara con LinkedIn</p>{" "}
                      <p className="mt-0 mb-1 ">Corsi per formare i tuoi dipendenti</p>{" "}
                      <p className="mb-0 fw-bold ">Centro amministrazione</p>{" "}
                      <p className="mt-0 mb-1 ">Gestisci i dettagli di fatturazione e account</p>
                    </Card.Body>
                  </Card>
                </Offcanvas.Body>
              </Offcanvas>
            </div>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
};

export default MyNav;
