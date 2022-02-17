import { InitialCardState } from "../../../typescript/redux/reducers/reducer_types";
import { RootState } from "../../../typescript/redux/store";
import Footer from "../../footer/Footer";
import Header from "../../header/Header";
import importTemplate from "../../../hooks/useImports";
import { card } from "../../../typescript/types";
import "../../../styles/SingleCard.css";

export default function SingleCard() {
  const {
    useSelector,
    pageBody,
    isMobile,
    isTablet,
    deck,
    favouritedCards,
    handleClick,
  } = importTemplate();
  const card: InitialCardState = useSelector(
    (state: RootState) => state.cardState
  );

  return (
    <div className={pageBody}>
      <Header />
      <main>
        <section className='singleCard'>
          <div className='singleCard__img'>
            <img
              src={
                isMobile || isTablet
                  ? `https://art.hearthstonejson.com/v1/render/latest/enUS/256x/${card.id}.png`
                  : `https://art.hearthstonejson.com/v1/render/latest/enUS/512x/${card.id}.png`
              }
              alt='Splash art of selected card'
            />
          </div>
          <div className='grid_container'>
            {deck.find((cardToFind: card) => cardToFind === card) ===
            undefined ? (
              <button className='btn addToDeckBtn' onClick={handleClick}>
                Add to deck
              </button>
            ) : (
              <button className='btn removeFromDeckBtn' onClick={handleClick}>
                Remove from deck
              </button>
            )}
            {favouritedCards.find((cardToFind: card) => cardToFind === card) ===
            undefined ? (
              <button className='btn addToFavsBtn' onClick={handleClick}>
                Add to favs
              </button>
            ) : (
              <button className='btn removeFromFavsBtn' onClick={handleClick}>
                Remove from favs
              </button>
            )}
            <button className='btn typeBtn'>Type: {card.type}</button>
            <button className='btn rarityBtn'>Rarity: {card.rarity}</button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
