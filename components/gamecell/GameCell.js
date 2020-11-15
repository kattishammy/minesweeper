/*
 * This component hold the behviour and representation of Game Cell. One Block representing mine or green farm land depending on the game state.
 */
import React, { useState } from "react";
import {
  explosionImg,
  greenImg,
  mineImg,
  redImg,
  vanillaImg,
  oneImg,
  twoImg,
  threeImg,
  fourImg,
  fiveImg,
  sixImg,
  sevenImg,
  eightImg,
} from "../../configs/config";

export const GameCell = (props) => {
  //console.log(props);
  const [imgSource, setImgSource] = useState(greenImg);

  const explodeAllMines = () => {
    props.explodeAllMines(true);
  };

  const exposeAllNearestNumbers = () => {};

  const cellOnClickHandler = (event) => {
    console.log(event.target.getAttribute("data-value"));
    if (event.target.getAttribute("data-value") === "M") {
      cellClicked(true);
    } else {
      let hiddeVal = parseInt(event.target.getAttribute("data-value"));
      cellClicked(false, hiddeVal);
    }
  };

  const cellClicked = (mine, hiddeVal) => {
    if (mine) {
      setImgSource(explosionImg);
      explodeAllMines();
    } else {
      let img = getSrcImg(hiddeVal);
      setImgSource(img);
      exposeAllNearestNumbers();
    }
  };

  const getSrcImg = (hiddeVal) => {
    if (hiddeVal === 0) {
      return vanillaImg;
    } else if (hiddeVal === 1) {
      return oneImg;
    } else if (hiddeVal === 2) {
      return twoImg;
    } else if (hiddeVal === 3) {
      return threeImg;
    } else if (hiddeVal === 4) {
      return fourImg;
    } else if (hiddeVal === 5) {
      return fiveImg;
    } else if (hiddeVal === 6) {
      return sixImg;
    } else if (hiddeVal === 7) {
      return sevenImg;
    } else if (hiddeVal === 8) {
      return eightImg;
    }
  };

  const setSrcImg = () => {
    if (props.explodeCurrentMine && props.value === "M") {
      return explosionImg;
    }
    return imgSource;
  };

  const getImgClassNames = () => {
    let currClassName;
    if (props.value === "M") {
      currClassName = "minecell";
    } else if (props.value === 0) {
      currClassName = "emptycell";
    } else {
      currClassName = "numbercell";
    }
    currClassName = props.className + " " + currClassName;
    return currClassName;
  };

  return (
    <img
      src={setSrcImg()}
      width="50"
      height="50"
      data-value={props.value}
      onClick={cellOnClickHandler}
      className={getImgClassNames()}
    />
  );
};
