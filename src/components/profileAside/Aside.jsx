import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import CardAside from "./CardAside";

const Aside = (props) => {
  const [people, setPeople] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const url = "https://striveschool-api.herokuapp.com/api/profile/";
  // eslint-disable-next-line no-unused-vars
  const URLDIRISERVA = "https://barbie-linkedin.cyclic.cloud/api/profile/";
  const randNumb = Math.floor(Math.random() * 100);

  const fetchAside = async () => {
    try {
      const response = await fetch(url, {
        headers: {
          Authorization: process.env.REACT_APP_AUTHORIZATION,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setPeople(data);
        setIsLoading(false);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAside();
  }, []);

  const spinner = (
    <Container style={{ marginTop: "48px" }}>
      <Container className=" cardLinkedln py-5">
        <div className="line">
          <div className="inner"></div>
        </div>
      </Container>
    </Container>
  );

  if (isLoading) {
    return spinner;
  }

  return (
    <>
      <div className="p-4 mb-2 rounded cardLinkedln ">
        <div className="d-flex justify-content-between">
          <div>
            <span className="fs-5" style={{ fontWeight: "600" }}>
              Lingua del profilo
            </span>
            <p className="opacity-50">Italiano</p>
          </div>
          <Link to={"#"}>
            <i className="bi bi-pencil fs-5"></i>
          </Link>
        </div>
        <hr />
        <div className="d-flex justify-content-between">
          <div>
            <span className="fs-5" style={{ fontWeight: "600" }}>
              Public profile & URL
            </span>
            <p className="opacity-50">www.linkedin.com</p>
          </div>
          <Link to={"#"}>
            <i className="bi bi-pencil fs-5"></i>
          </Link>
        </div>
      </div>
      <section className=" cardLinkedln p-4 pb-1 rounded">
        <div className="fs-6 fw-bold">
          <span style={{ fontWeight: "600" }}>Altri profili consultati</span>
        </div>
        <div>
          <ul className="ps-0">
            {people.slice(randNumb, randNumb + 2).map((person) => (
              <CardAside card={person} key={person._id} />
            ))}
            <div className="text-center mt-1 ">
              <Link to={"/"} className="textNone">
                Mostra tutto
              </Link>
            </div>
          </ul>
        </div>
      </section>
      <section className=" cardLinkedln my-2 p-4 pb-1 rounded">
        <div>
          <h4 className="fs-6" style={{ fontWeight: "600" }}>
            Persone che potresti conoscere
          </h4>
          <p className="mb-0 opacity-75">Dalla tua azienda</p>
        </div>
        <div>
          <ul className="ps-0">
            {people.slice(0, 5).map((person) => (
              <CardAside card={person} key={person._id} userId={person._id} />
            ))}
            <div className="text-center mt-1">
              <Link to={"/"} className="textNone">
                Mostra tutto
              </Link>
            </div>
          </ul>
        </div>
      </section>
      <section className=" cardLinkedln p-4 pb-1 rounded">
        <div>
          <h4 className="fs-6" style={{ fontWeight: "600" }}>
            Potebbero interessarti
          </h4>
          <p className="opacity-75">Pagine per te</p>
        </div>
        <div>
          <ul className="ps-0">
            <div className="borderAside pb-4 pt-2">
              <li className="textNoneLi">
                <div className="d-flex">
                  <div>
                    <Image src={people[39]?.image} roundedCircle width={"50px"} />
                  </div>
                  <div className="d-flex flex-column ms-3">
                    <div className="fw-bold">
                      <div>{people[39]?.name}</div>
                      <span>3+</span>
                    </div>
                    <div>{people[39]?.title}</div>
                    <div className="opacity-50">10000 follower</div>
                    <div>
                      <Button className="buttonAside rounded-pill">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          data-supported-dps="16x16"
                          fill="currentColor"
                          className="mercado-match"
                          width="16"
                          height="16"
                          focusable="false"
                        >
                          <path d="M14 9H9v5H7V9H2V7h5V2h2v5h5z"></path>
                        </svg>
                        Segui
                      </Button>
                    </div>
                  </div>
                </div>
              </li>
            </div>
            <div className="borderAside pb-4 pt-2">
              <li className="textNoneLi mt-4">
                <div className="d-flex">
                  <div>
                    <Image src={people[57]?.image} roundedCircle width={"50px"} />
                  </div>
                  <div className="d-flex flex-column ms-3">
                    <div className="fw-bold">
                      <div>{people[57]?.name}</div>
                      <span>3+</span>
                    </div>
                    <div>{people[57]?.title}</div>
                    <div className="opacity-50">15000 follower</div>
                    <div>
                      <Button className="buttonAside rounded-pill">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          data-supported-dps="16x16"
                          fill="currentColor"
                          className="mercado-match"
                          width="16"
                          height="16"
                          focusable="false"
                        >
                          <path d="M14 9H9v5H7V9H2V7h5V2h2v5h5z"></path>
                        </svg>
                        Segui
                      </Button>
                    </div>
                  </div>
                </div>
              </li>
            </div>
            <div className="text-center mt-1">
              <Link to={"/"} className="textNone">
                Mostra tutto
              </Link>
            </div>
          </ul>
        </div>
      </section>
    </>
  );
};
export default Aside;
