import { Container } from "react-bootstrap";

const EsperienzaProfile = () => {
  return (
    <Container className="my-3">
      <Container className="p-0 rounded cardLinkedln">
        <Container className="d-flex">
          <h2 className="me-auto">Esperienza</h2>
          <i className="mx-2 bi bi-plus-lg fs-3"></i>
          <i className="mx-2 bi bi-pencil fs-5"></i>
        </Container>
        <Container className="d-flex">
          <Container style={{ width: "fit-content" }} className="p-0">
            <img
              src="https://images.unsplash.com/photo-1549924231-f129b911e442?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt=""
              width={"48px"}
              height={"48px"}
            />
          </Container>
          <Container>
            <p className="mb-0 fw-bold">Operaio generico</p>
            <p className="mb-0">Dussman service italia - Part-time</p>
            <p className="mb-0 fw-light">mar-2020 - Presente - 3 anni 7 mesi</p>
            <p className="mb-0 fw-light">Ancona, marche, italia</p>
            <p className="my-3">
              <span className="fw-bold">competenze</span>: microsoft Word - Comunicazione
            </p>
          </Container>
        </Container>
      </Container>
    </Container>
  );
};

export default EsperienzaProfile;
