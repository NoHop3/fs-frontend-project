import { memo } from "react";
import * as ReactBootStrap from "react-bootstrap";

function Loading() {
  return (
    <div>
      <ReactBootStrap.Spinner animation='border' />
    </div>
  );
}
export default memo(Loading);
