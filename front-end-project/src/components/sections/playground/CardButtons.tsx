import useTemplate from "../../../hooks/useImports";
import {
  AddCardToDeck,
  AddCardToFavs,
  RemoveCardFromDeck,
  RemoveCardFromFavs,
  setSelectedCard,
} from "../../../redux/actions/actions";
import { card, evtClickType } from "../../../typescript/types";
import "../../../styles/CardHover.css";

export default function CardButtons({
  index,
  card,
}: {
  index: number;
  card: card;
}) {
  const { favouritedCards, deck, Link, isHovering, indexArray, dispatch } =
    useTemplate();
  const handleClickDetails = (card: card) => {
    dispatch(setSelectedCard(card));
  };
  const handleClick = (evt: evtClickType) => {
    //!!! Helpful
    const element = evt.target as HTMLElement;
    console.log(element.className);
    switch (element.className) {
      case "btnCard addToDeck":
        dispatch(AddCardToDeck(card));
        break;
      case "btnCard addToFavs":
        dispatch(AddCardToFavs(card));
        break;
      case "btnCard removeFromDeck":
        dispatch(RemoveCardFromDeck(card.id));
        break;
      case "btnCard removeFromFavs":
        dispatch(RemoveCardFromFavs(card.id));
        break;
      default:
        break;
    }
  };
  return (
    <div
      className={
        isHovering && indexArray === index ? "card_buttons" : "invisible"
      }>
      {deck.find((cardToFind: card) => cardToFind === card) === undefined ? (
        <button className='btnCard addToDeck' onClick={handleClick}>
          Add to deck
        </button>
      ) : (
        <button className='btnCard removeFromDeck' onClick={handleClick}>
          Remove from deck
        </button>
      )}
      {favouritedCards.find((cardToFind: card) => cardToFind === card) ===
      undefined ? (
        <button className='btnCard addToFavs' onClick={handleClick}>
          Add to favs
        </button>
      ) : (
        <button className='btnCard removeFromFavs' onClick={handleClick}>
          Remove from favs
        </button>
      )}
      <Link to={`/details?${card.id}`}>
        <button className='btnCard' onClick={() => handleClickDetails(card)}>
          Details
        </button>
      </Link>
    </div>
  );
}
