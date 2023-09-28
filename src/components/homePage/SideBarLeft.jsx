import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";

const SideBarLeft = () => {
  const profile = useSelector((state) => state.profile.content);

  return (
    <div>
      <div className="rounded-3 cardLinkedln">
        <div>
          <Image
            src={
              "https://images.unsplash.com/photo-1439405326854-014607f694d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            }
            className="imgHome rounded-top"
          />
        </div>
        <div className="border-bottom mtNegative text-center">
          <Link to={""} className="text-decoration-none text-dark">
            <div className="d-flex justify-content-center">
              <Image src={profile?.image} roundedCircle width={"72px"} height={"70px"} className="borderUser" />
            </div>
            <h3 className="fs-5 fw-semibold ">
              {profile?.name} {profile?.surname}
            </h3>
          </Link>
          <p className="textNone fs-6">{profile?.title}</p>
        </div>
        <div className="d-flex border-bottom justify-content-between">
          <Container className="my-3">
            <div className="textNone fs-6">Collegamenti</div>
            <div className="fw-semibold" style={{ fontSize: "small" }}>
              Espandi la tua rete
            </div>
          </Container>
          <Container className="my-3" style={{ flex: "1" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              data-supported-dps="16x16"
              fill="currentColor"
              className="mercado-match "
              width="16"
              height="16"
              focusable="false"
            >
              <path d="M9 4a3 3 0 11-3-3 3 3 0 013 3zM6.75 8h-1.5A2.25 2.25 0 003 10.25V15h6v-4.75A2.25 2.25 0 006.75 8zM13 8V6h-1v2h-2v1h2v2h1V9h2V8z"></path>
            </svg>
          </Container>
        </div>
        <Container className="my-3 opacity-75">
          <i className="bi bi-bookmark-fill"></i>
          <span className="ms-3 fw-medium">I miei elementi</span>
        </Container>
      </div>
      <div className="rounded-3 cardLinkedln mt-3 ">
        <div className="borderAside p-2">
          <Link to={""} className="text-decoration-none fw-semibold ">
            <div className="my-2 fs-6">Gruppi</div>
          </Link>
          <div className="d-flex justify-content-between">
            <Link to={""} className="text-decoration-none fw-semibold ">
              <div className="my-2 fs-6">Eventi</div>
            </Link>
            <Link to={""} className="text-decoration-none fw-semibold ">
              <div>
                <li-icon aria-hidden="true" type="add" className="artdeco-button__icon" size="small">
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
                </li-icon>
              </div>
            </Link>
          </div>
          <Link to={""} className="text-decoration-none fw-semibold ">
            <div className="my-2 fs-6">Hastag seguiti</div>
          </Link>
        </div>
        <div className="d-flex justify-content-center my-2">
          <Link to={"#"} className="text-decoration-none text-dark opacity-50 fw-medium">
            Scopri di più
          </Link>
        </div>
      </div>
    </div>
  );
};
export default SideBarLeft;
