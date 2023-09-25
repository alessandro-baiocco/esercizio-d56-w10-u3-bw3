import { useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import CardAside from "./CardAside";

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
        <div>
          <span>Lingua del profilo</span>
          <p>italiano</p>
        </div>
        <Link to={"#"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-pen"
            viewBox="0 0 16 16"
          >
            <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
          </svg>
        </Link>
        <hr />
        <div>
          <span>Public profile & URL</span>
          <p>www.linkedin.com</p>
        </div>
        <Link to={"#"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-pen"
            viewBox="0 0 16 16"
          >
            <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
          </svg>
        </Link>
      </div>
      <section className=" cardLinkedln ">
        <div>Altri profili consultati</div>
        <div>
          <ul>
            {people.slice(0, 2).map((person) => (
              <CardAside card={person} key={person._id} />
            ))}
          </ul>
        </div>
      </section>
      <section className=" cardLinkedln my-2 ">
        <div>
          <h4>Persone che potresti conoscere</h4>
          <p>Dalla tua azienda</p>
        </div>
        <div>
          <ul>
            {people.slice(0, 5).map((person) => (
              <CardAside card={person} key={person._id} />
            ))}

            <div>Mostra tutto</div>
          </ul>
        </div>
      </section>
      <section className=" cardLinkedln ">
        <div>
          <h4>Potebbero interessarti</h4>
          <p>Pagine per te</p>
        </div>
        <div>
          <ul>
            <li>
              <div className="d-flex">
                <div>
                  <Image src={people[5].image} roundedCircle width={"50px"} />
                </div>
                <div className="d-flex flex-column">
                  <div>
                    <div>{people[5].name}</div>
                    <span>3+</span>
                  </div>
                  <div>{people[5].title}</div>
                  <div>10000 follower</div>
                  <div>
                    <Button>Collegati</Button>
                  </div>
                </div>
              </div>
              <div className="d-flex">
                <div>
                  <Image src={people[8].image} roundedCircle width={"50px"} />
                </div>
                <div className="d-flex flex-column">
                  <div>
                    <div>{people[8].name}</div>
                    <span>3+</span>
                  </div>
                  <div>{people[8].title}</div>
                  <div>10000 follower</div>
                  <div>
                    <Button>Collegati</Button>
                  </div>
                </div>
              </div>
              <div>Mostra tutto</div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};
export default Aside;
