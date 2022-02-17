import React from "react";

export type card = {
  artist: string;
  attack?: number;
  cardClass: string;
  collectible: boolean;
  cost: number;
  dbfId: number;
  flavor: string;
  health?: number;
  id: string;
  name: string;
  race: string;
  rarity: string;
  set: string;
  spellschool: string;
  cardSet: string;
  text: string;
  type: string;
  mechanics?: [];
  referencedTags?: [];
};

export type evtKeyboardType = React.KeyboardEvent;
export type evtChangeType = React.ChangeEvent<HTMLInputElement>;
export type evtClickType = React.MouseEvent<Element, MouseEvent>;
export type evtButtonType = React.MouseEventHandler<HTMLButtonElement>;
