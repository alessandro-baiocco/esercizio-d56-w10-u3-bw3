import { useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import CardAside from "./CardAside";
import REACT_APP_AUTHORIZATION from "../";

const Aside = () => {
  const [people, setPeople] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const url = "https://striveschool-api.herokuapp.com/api/profile/";

  const fetchAside = async () => {
    try {
      const response = await fetch(url, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExNGU0YzM3NTJhODAwMTQ1Njg3NmQiLCJpYXQiOjE2OTU2MzI5NzIsImV4cCI6MTY5Njg0MjU3Mn0.aUvjIzLRzi_SVt6ngJ9FtFNCNWcrDyY59f0TkzZ9esg",
          //   Authorization: process.env.REACT_APP_AUTHORIZATION,
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

  const spinner = <Spinner animation="border" />;

  if (isLoading) {
    return spinner;
  }

  console.log(people);
  return (
    <>
      <div className="p-4 mb-2 rounded cardLinkedln ">
        <div className="d-flex justify-content-between">
          <div>
            <span className="fs-4">Lingua del profilo</span>
            <p>italiano</p>
          </div>
          <Link to={"#"}>
            <i className="bi bi-pencil fs-3"></i>
          </Link>
        </div>
        <hr />
        <div className="d-flex justify-content-between">
          <div>
            <span className="fs-4">Public profile & URL</span>
            <p>www.linkedin.com</p>
          </div>
          <Link to={"#"}>
            <i className="bi bi-pencil fs-3"></i>
          </Link>
        </div>
      </div>
      <section className=" cardLinkedln p-4">
        <div className="fs-6 fw-bold">Altri profili consultati</div>
        <div>
          <ul className="ps-0">
            {people.slice(0, 2).map((person) => (
              <CardAside card={person} key={person._id} />
            ))}
            <div className="text-center">
              <Link to={"/"} className="textNone">
                Mostra tutto
              </Link>
            </div>
          </ul>
        </div>
      </section>
      <section className=" cardLinkedln my-2 p-4">
        <div>
          <h4 className="fs-6 fw-bold">Persone che potresti conoscere</h4>
          <p className="mb-0">Dalla tua azienda</p>
        </div>
        <div>
          <ul className="ps-0">
            {people.slice(0, 5).map((person) => (
              <CardAside card={person} key={person._id} />
            ))}
            <div className="text-center">
              <Link to={"/"} className="textNone">
                Mostra tutto
              </Link>
            </div>
          </ul>
        </div>
      </section>
      <section className=" cardLinkedln p-4">
        <div>
          <h4 className="fs-6 fw-bold">Potebbero interessarti</h4>
          <p>Pagine per te</p>
        </div>
        <div>
          <ul className="ps-0">
            <div className="borderAside pb-4 pt-2">
              <li className="textNoneLi">
                <div className="d-flex">
                  <div>
                    <Image src={people[17].image} roundedCircle width={"50px"} />
                  </div>
                  <div className="d-flex flex-column">
                    <div className="fw-bold">
                      <div>{people[17].name}</div>
                      <span>3+</span>
                    </div>
                    <div>{people[17].title}</div>
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
                    <Image src={people[38].image} roundedCircle width={"50px"} />
                  </div>
                  <div className="d-flex flex-column">
                    <div className="fw-bold">
                      <div>{people[38].name}</div>
                      <span>3+</span>
                    </div>
                    <div>{people[38].title}</div>
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
            <div className="text-center">
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
