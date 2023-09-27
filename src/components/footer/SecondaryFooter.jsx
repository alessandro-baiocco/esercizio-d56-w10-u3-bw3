import { Dropdown, DropdownButton } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

const SecondaryFooter = () => {
  return (
    <div>
      <ul className="miniFooter">
        <li className="marginMiniFooter">
          <span>Informazioni</span>
        </li>
        <li className="marginMiniFooter">
          <span>Accessibilità</span>
        </li>
        <li className="marginMiniFooter">
          <span>Centro assistenza</span>
        </li>
        <li className="marginMiniFooter">
          <DropdownButton
            variant="light"
            id="dropdown-item-button"
            title="Privacy e condizioni"
            className="text-secondary"
          >
            <Dropdown.Item id="dropItem" as="button">
              <Link to="#" className="text-decoration-none text-secondary">
                Informativa sulla privacy
              </Link>
            </Dropdown.Item>
            <Dropdown.Item id="dropItem" as="button">
              <Link to="#" className="text-decoration-none text-secondary">
                Contratto di licenza
              </Link>
            </Dropdown.Item>
            <Dropdown.Item id="dropItem" as="button">
              <Link to="#" className="text-decoration-none text-secondary">
                Termini e condizioni delle pagine
              </Link>
            </Dropdown.Item>
            <Dropdown.Item id="dropItem" as="button">
              <Link to="#" className="text-decoration-none text-secondary">
                Informativa sui cookie
              </Link>
            </Dropdown.Item>
            <Dropdown.Item id="dropItem" as="button">
              <Link to="#" className="text-decoration-none text-secondary">
                Informativa sul copyright
              </Link>
            </Dropdown.Item>
          </DropdownButton>
        </li>
        <li className="marginMiniFooter">
          <span>Opzioni per gli annunci pubblicitari</span>
        </li>
        <li className="marginMiniFooter">
          <span>Pubblicità</span>
        </li>
        <li className="marginMiniFooter">
          <DropdownButton
            variant="light"
            id="dropdown-item-button"
            title="Servizi alle aziende"
            className="text-secondary"
          >
            <Dropdown.Item id="dropItem" as="button">
              <Link to="#" className="text-decoration-none text-secondary">
                <strong>Assumi su LinkedIn </strong> <br />
                Trova, attrai, assumi
              </Link>
            </Dropdown.Item>
            <Dropdown.Item id="dropItem" as="button">
              <Link to="#" className="text-decoration-none text-secondary">
                <strong>Vendi con LinkedIn </strong> <br />
                Costruisci relazioni con i buyer
              </Link>
            </Dropdown.Item>
            <Dropdown.Item id="dropItem" as="button">
              <Link to="#" className="text-decoration-none text-secondary">
                <strong>Offerta di lavoro gratuita </strong> <br />
                Trova candidati di qualità
              </Link>
            </Dropdown.Item>
            <Dropdown.Item id="dropItem" as="button">
              <Link to="#" className="text-decoration-none text-secondary">
                <strong>Fai pubblicità su LinkedIn </strong> <br />
                Acquisisci clienti e fai crescere la tua azienda
              </Link>
            </Dropdown.Item>
            <Dropdown.Item id="dropItem" as="button">
              <Link to="#" className="text-decoration-none text-secondary">
                <strong>Impara con LinkedIn </strong> <br />
                Corsi per formare i tuoi dipendenti
              </Link>
            </Dropdown.Item>
            <Dropdown.Item id="dropItem" as="button">
              <Link to="#" className="text-decoration-none text-secondary">
                <strong>Centro amministrazione </strong> <br />
                Gestisci i dettagli di fatturazione e account
              </Link>
            </Dropdown.Item>
          </DropdownButton>
        </li>
        <li className="marginMiniFooter">
          <span>Scarica l'app Linkedin</span>
        </li>
        <li className="marginMiniFooter">
          <span>Altro</span>
        </li>
      </ul>
      <div className="text-center" id="logoMiniFooter">
        <Image src={"https://static.licdn.com/sc/h/47josflhxdz9o3v227aa72l1p"}></Image>
        LinkedIn Corporation © 2023
      </div>
    </div>
  );
};
export default SecondaryFooter;
