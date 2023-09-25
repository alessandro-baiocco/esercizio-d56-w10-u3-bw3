import { Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";

const CardAside = ({ card }) => {
  return (
    <li key={card._id}>
      <div className="d-flex">
        <div>
          <Image src={card.image} roundedCircle width={"50px"} />
        </div>
        <div className="d-flex flex-column">
          <div>
            {card.name}
            <span>3+</span>
          </div>
          <div>{card.title}</div>
          <Button>Collegati</Button>
        </div>
      </div>
    </li>
  );
};

export default CardAside;
