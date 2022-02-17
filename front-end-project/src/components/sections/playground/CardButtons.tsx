import useTemplate from "../../../hooks/useImports";
import {
  AddCardToDeck,
  AddCardToFavs,
  GetCardById,
  RemoveCardFromDeck,
  RemoveCardFromFavs,
} from "../../../redux/actions/actions";
import { evtClickType } from "../../../typescript/types";
import "../../../styles/CardHover.css";

export default function CardButtons({
  classProperties,
  cardId,
}: {
  classProperties: string;
  cardId: string;
}) {
  const { Link, dispatch, data, deckData } = useTemplate();
  const handleClickDetails = () => {
    dispatch(GetCardById(cardId));
  };
  const handleClick = (evt: evtClickType) => {
    const element = evt.target as HTMLElement;
    switch (element.className) {
      case "btnCard addToDeck":
        dispatch(
          AddCardToDeck(data.filteredCards.find((card) => card.id === cardId)!)
        );
        break;
      case "btnCard addToFavs":
        dispatch(AddCardToFavs(cardId));
        break;
      case "btnCard removeFromDeck":
        dispatch(RemoveCardFromDeck(cardId));
        break;
      case "btnCard removeFromFavs":
        dispatch(RemoveCardFromFavs(cardId));
        break;
      default:
        break;
    }
  };
  return (
    <div className={classProperties}>
      {deckData.deck.find((card) => card.id === cardId) === undefined ? (
        <button className='btnCard addToDeck' onClick={handleClick}>
          Add to deck
        </button>
      ) : (
        <button className='btnCard removeFromDeck' onClick={handleClick}>
          Remove from deck
        </button>
      )}
      {data.favouritedCards.find((card) => card.id === cardId) === undefined ? (
        <button className='btnCard addToFavs' onClick={handleClick}>
          Add to favs
        </button>
      ) : (
        <button className='btnCard removeFromFavs' onClick={handleClick}>
          Remove from favs
        </button>
      )}
      <Link to={`/details?${cardId}`}>
        <button className='btnCard' onClick={handleClickDetails}>
          Details
        </button>
      </Link>
    </div>
  );
}
