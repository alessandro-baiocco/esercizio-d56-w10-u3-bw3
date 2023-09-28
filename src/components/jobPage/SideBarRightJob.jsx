import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const SideBarRightJob = () => {
  return (
    <div>
      <section className="rounded-3 cardLinkedln p-3">
        <ul className="p-0">
          <li className="fw-semibold textNoneLi pt-3 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              className="mercado-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M19 5a3 3 0 00-3-3H5v20l7-6.29L19 22z"></path>
            </svg>
            <span className="ps-2" style={{ fontSize: "14px" }}>
              Le mie offerte di lavoro
            </span>
          </li>
          <li className="fw-semibold textNoneLi pt-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              className="mercado-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"></path>
            </svg>
            <span className="ps-2" style={{ fontSize: "14px" }}>
              Avvisi offerte di lavoro
            </span>
          </li>
          <li className="fw-semibold textNoneLi pt-3 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              className="mercado-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M14.73 10H17l-5.5 8L8 14.5l1.34-1.34L11.21 15zM20 3v16a3 3 0 01-3 3H7a3 3 0 01-3-3V3h5.69l.52-1A2 2 0 0112 1a2 2 0 011.76 1l.52 1zm-2 2h-2.6l.6 1.1V7H8v-.9L8.6 5H6v14a1 1 0 001 1h10a1 1 0 001-1z"></path>
            </svg>
            <span className="ps-2" style={{ fontSize: "14px" }}>
              Valutazioni delle competenze
            </span>
          </li>
          <li className="fw-semibold textNoneLi pt-3 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              className="mercado-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
            </svg>
            <span className="ps-2" style={{ fontSize: "14px" }}>
              Indicazioni per chi cerca lavoro
            </span>
          </li>
          <li className="fw-semibold textNoneLi pt-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              className="mercado-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M9.18 2l-4.3 2.52L6.22 8l-.52.91-3.7.55v5l3.64.54.54.93-1.34 3.53L9.14 22l2.29-2.9h1.09l2.3 2.9 4.32-2.52L17.79 16l.53-.93 3.68-.53v-5L18.32 9l-.51-.9 1.36-3.51L14.86 2l-2.33 3h-1zM12 9a3 3 0 11-3 3 3 3 0 013-3z"></path>
            </svg>
            <span className="ps-2" style={{ fontSize: "14px" }}>
              Impostazioni candidatura
            </span>
          </li>
        </ul>
      </section>
      <div className="d-flex justify-content-center">
        <Button className="buttonJob  mt-2 py-2 align-items-center">
          <i className="bi bi-pencil-square text-primary fs-5"></i>
          <Link to={"#"} className="text-decoration-none fw-semibold">
            <span style={{ fontSize: "14px" }}>
              Pubblica offerta <br /> gratuita
            </span>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default SideBarRightJob;
