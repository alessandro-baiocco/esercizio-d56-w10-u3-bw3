import { Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { myProfilePage } from "../../redux/action";
// onClick={dispatch(myProfilePage(urlParam.userId))

const CardAside = ({ card }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const urlParam = useParams();
  return (
    <div className="borderAside pb-4 pt-4">
      <li key={card._id} className="textNoneLi">
        <div className="d-flex ">
          <div>
            <Image src={card.image} roundedCircle width={"50px"} />
          </div>
          <div className="d-flex flex-column ms-3">
            <div className="fw-bold">
              <Link to={`/profile/${card._id}`} onClick={() => dispatch(myProfilePage(card._id))}>
                {card.name}
              </Link>
            </div>
            <div>{card.title}</div>
            <Button className="buttonAside rounded-pill border-secondary py-1 mt-1 text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                data-supported-dps="16x16"
                fill="currentColor"
                className="mercado-match mb-1"
                width="16"
                height="16"
                focusable="false"
              >
                <path d="M9 4a3 3 0 11-3-3 3 3 0 013 3zM6.75 8h-1.5A2.25 2.25 0 003 10.25V15h6v-4.75A2.25 2.25 0 006.75 8zM13 8V6h-1v2h-2v1h2v2h1V9h2V8z"></path>
              </svg>
              Collegati
            </Button>
          </div>
        </div>
      </li>
    </div>
  );
};

export default CardAside;
