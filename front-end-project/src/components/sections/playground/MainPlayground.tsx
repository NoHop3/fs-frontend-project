import Collection from "./Collection";
import FilterCards from "./FilterCards";
import "../../../styles/Playground.css";
import "../../../styles/FilterCost.css";
import FilterCost from "./FilterCost";

export default function MainPlayground() {
  return (
    <main>
      <FilterCards />
      <Collection />
      <FilterCost/>
    </main>
  );
}
