import Image from "react-bootstrap/Image";

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
          <span>Privacy e condizioni</span>
        </li>
        <li className="marginMiniFooter">
          <span>Opzioni per gli annunci pubblicitari</span>
        </li>
        <li className="marginMiniFooter">
          <span>Pubblicità</span>
        </li>
        <li className="marginMiniFooter">
          <span>Servizi alle aziende</span>
        </li>
        <li className="marginMiniFooter">
          <span>Scarica l'app Linkedin</span>
        </li>
        <li className="marginMiniFooter">
          <span>Altro</span>
        </li>
      </ul>
      <div className="text-center">
        <Image src={"https://static.licdn.com/sc/h/47josflhxdz9o3v227aa72l1p"}></Image>
        LinkedIn Corporation © 2023
      </div>
    </div>
  );
};
export default SecondaryFooter;
