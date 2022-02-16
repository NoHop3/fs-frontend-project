import { InitialCardState } from "../../../typescript/redux/reducers/reducer_types";
import { RootState } from "../../../typescript/redux/store";
import Footer from "../../footer/Footer";
import Header from "../../header/Header";
import importTemplate from "../../../hooks/useImports";
import "../../../styles/SingleCard.css";

export default function SingleCard() {
  const { useSelector, pageBody, isLaptop, isMobile, isTablet } =
    importTemplate();
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
            <button className='btn addToDeckBtn'>Add to deck</button>
            <button className='btn addToFavsBtn'>Add to favs</button>
            <button className='btn typeBtn'>Type: {card.type}</button>
            <button className='btn rarityBtn'>Rarity: {card.rarity}</button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
