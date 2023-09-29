import { Container } from "react-bootstrap";
import { Plus } from "react-bootstrap-icons";

const FormazioneProfile = () => {
  return (
    <Container className="my-3 rounded">
      <Container className="cardLinkedln rounded" style={{ paddingBlock: "15px" }}>
        <Container className="d-flex p-0">
          <h2 className="me-auto fs-5 ">Formazione</h2>
          <Plus className="fs-3" />
          <i className="mx-2 bi bi-pencil "></i>
        </Container>
        <Container className="d-flex px-0">
          <Container style={{ width: "fit-content", objectFit: "cover" }} className="p-0">
            <img
              src="https://images.unsplash.com/photo-1549924231-f129b911e442?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt=""
              width={"48px"}
              height={"48px"}
            />
          </Container>
          <Container>
            <p className="mb-0 fw-bold">Einstein-nebbia</p>
            <p className="mb-0">
              Diploma istituto tecnico e professionale. studi su alimenti. alimentazione e benessere: generale
            </p>
            <p className="mb-0 fw-light">2011-2016</p>
          </Container>
        </Container>
      </Container>
    </Container>
  );
};

export default FormazioneProfile;
