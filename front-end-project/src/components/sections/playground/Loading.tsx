import { memo } from "react";
import "../../../styles/Loading.css";

function Loading() {
  return (
    <div className='d-flex justify-content-center' style={{ fontSize: "3rem" }}>
      Fetching...
      <div
        className='spinner-border'
        role='status'
        style={{ width: "4rem", height: "4rem" }}>
        <span className='sr-only'>Loading...</span>
      </div>
    </div>
  );
}
export default memo(Loading);
