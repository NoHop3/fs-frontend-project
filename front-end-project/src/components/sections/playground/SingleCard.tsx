import Footer from "../../footer/Footer";
import Header from "../../header/Header";
import importTemplate from "../../../hooks/useImports";
import "../../../styles/SingleCard.css";

export default function SingleCard() {
  const { pageBody, isMobile, isTablet, data, handleClick, deckData } =
    importTemplate();

  return (
    <div className={pageBody}>
      <Header />
      <main>
        <section className='singleCard'>
          <div className='singleCard__img'>
            <img
              src={
                isMobile || isTablet
                  ? `https://art.hearthstonejson.com/v1/render/latest/enUS/256x/${data.selectedCard.id}.png`
                  : `https://art.hearthstonejson.com/v1/render/latest/enUS/512x/${data.selectedCard.id}.png`
              }
              alt='Splash art of selected card'
            />
          </div>
          <div className='grid_container'>
            {deckData.deck.find((card) => card === data.selectedCard) ===
            undefined ? (
              <button className='btn addToDeckBtn' onClick={handleClick}>
                Add to deck
              </button>
            ) : (
              <button className='btn removeFromDeckBtn' onClick={handleClick}>
                Remove from deck
              </button>
            )}
            {data.favouritedCards.find((card) => card === data.selectedCard) ===
            undefined ? (
              <button className='btn addToFavsBtn' onClick={handleClick}>
                Add to favs
              </button>
            ) : (
              <button className='btn removeFromFavsBtn' onClick={handleClick}>
                Remove from favs
              </button>
            )}
            <button className='btn typeBtn'>
              Type: {data.selectedCard.type}
            </button>
            <button className='btn rarityBtn'>
              Rarity: {data.selectedCard.rarity}
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
