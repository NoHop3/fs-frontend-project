import React from "react";

export type card = {
  id: string;
  name: string;
  rarity: string;
  text: string;
  type: string;
  cost: number;
};

export type evtKeyboardType = React.KeyboardEvent;
export type evtChangeType = React.ChangeEvent<HTMLInputElement>;
export type evtClickType = React.MouseEvent<Element, MouseEvent>;
export type evtButtonType = React.MouseEventHandler<HTMLButtonElement>;
