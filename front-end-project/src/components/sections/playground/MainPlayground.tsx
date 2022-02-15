import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFunc } from "../../../redux/actions/actions";
import { RootState } from "../../../typescript/redux/store";

export default function MainPlayground() {
  const dispatch = useDispatch();
  const { ...data } = useSelector((state: RootState) => state.dataState);
  useEffect(() => {
    dispatch(fetchFunc());
  }, [dispatch]);
  console.log(data);
  return <div>MainPlayground</div>;
}
