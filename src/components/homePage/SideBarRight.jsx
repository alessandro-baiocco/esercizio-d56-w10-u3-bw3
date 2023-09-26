import { Button } from "react-bootstrap";
import SecondaryFooter from "../footer/SecondaryFooter";

const SideBarRight = () => {
  return (
    <div>
      <section>
        <div>
          <div className="d-flex justify-content-between">
            LinkedIn Notizie{" "}
            <span>
              <i class="bi bi-info-square-fill"></i>
            </span>
          </div>
          <ul>
            <li>
              <div>Notizia</div>
              <p>1 giorno fa</p>
            </li>
          </ul>
          <Button>Show more</Button>
        </div>
      </section>
      <SecondaryFooter />
    </div>
  );
};
export default SideBarRight;
