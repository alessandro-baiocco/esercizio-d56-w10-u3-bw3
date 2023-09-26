import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";

const SideBarLeft = () => {
  return (
    <div>
      <div>
        <div>
          <Image
            src={
              "https://images.unsplash.com/photo-1683009427619-a1a11b799e05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            }
            width={"200px"}
          />
        </div>
        <div className="border-bottom mtNegative">
          <Link to={""} className="">
            <div>
              <Image
                src={"https://cdn.icon-icons.com/icons2/2468/PNG/512/user_icon_149329.png"}
                roundedCircle
                width={"50px"}
                className="borderUser"
              />
            </div>
            <h3>Fabio</h3>
          </Link>
          <p>Developer</p>
        </div>
        <div className="d-flex border-bottom">
          <div>
            <div>Collegamenti</div>
            <div>Espandi la tua rete</div>
          </div>
          <div>
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
              <path d="M9 4a3 3 0 11-3-3 3 3 0 013 3zM6.75 8h-1.5A2.25 2.25 0 003 10.25V15h6v-4.75A2.25 2.25 0 006.75 8zM13 8V6h-1v2h-2v1h2v2h1V9h2V8z"></path>
            </svg>
          </div>
        </div>
        <div>
          <i class="bi bi-bookmark-fill"></i>
          <span className="ms-3">I miei elementi</span>
        </div>
      </div>
      <div>
        <div>Gruppi</div>
        <div className="d-flex justify-content-between">
          <div>Eventi</div>
          <div>+</div>
        </div>
        <div>Hastag seguiti</div>
      </div>
    </div>
  );
};
export default SideBarLeft;
