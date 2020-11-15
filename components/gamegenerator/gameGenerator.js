/*
 * The sole purpose of this file is to hold logic for generating random game based on inputs provided and interact with other representational components.
 * This is a purely logical component and holds no representational components.
 */

import React from "react";

export const findNeighboursin2DArrayPosition = (props, incrementVal = 1) => {
  const gameLogic = props.gameLogic;
  const rowPosition = props.rowPosition;
  const colPosition = props.colPosition;
  const rowNeighbours = [];
  const colNeighbours = [];
  //   console.log(props);
  //   console.log(gameLogic[rowPosition][colPosition]);

  const verifyPosition = (gameLogic, rowPosition, colPosition) => {
    if (
      !(
        rowPosition >= 0 &&
        rowPosition < gameLogic.length &&
        colPosition >= 0 &&
        colPosition < gameLogic[rowPosition].length &&
        gameLogic[rowPosition][colPosition] !== "M"
      )
    ) {
      //   console.log("invalid");
      //   console.log(rowPosition);
      //   console.log(colPosition);
      //   console.log("incvalid");
      return false;
    }
    return true;
  };

  //   if (!verifyPosition(gameLogic, rowPosition, colPosition)) {
  //     return;
  //   }

  if (verifyPosition(gameLogic, rowPosition - 1, colPosition - 1)) {
    // console.log(gameLogic[rowPosition - 1][colPosition - 1]);
    // console.log("-->" + (rowPosition - 1));
    // console.log("-->" + (colPosition - 1));
    gameLogic[rowPosition - 1][colPosition - 1] =
      gameLogic[rowPosition - 1][colPosition - 1] + incrementVal;
    rowNeighbours.push(rowPosition - 1);
    colNeighbours.push(colPosition - 1);
  }

  if (verifyPosition(gameLogic, rowPosition + 1, colPosition + 1)) {
    // console.log(gameLogic[rowPosition + 1][colPosition + 1]);
    // console.log("++>" + (rowPosition + 1));
    // console.log("++>" + (colPosition + 1));
    gameLogic[rowPosition + 1][colPosition + 1] =
      gameLogic[rowPosition + 1][colPosition + 1] + incrementVal;
    rowNeighbours.push(rowPosition + 1);
    colNeighbours.push(colPosition + 1);
  }

  if (verifyPosition(gameLogic, rowPosition - 1, colPosition + 1)) {
    // console.log(gameLogic[rowPosition - 1][colPosition + 1]);
    // console.log("-+>" + (rowPosition - 1));
    // console.log("-+>" + (colPosition + 1));
    gameLogic[rowPosition - 1][colPosition + 1] =
      gameLogic[rowPosition - 1][colPosition + 1] + incrementVal;
    rowNeighbours.push(rowPosition - 1);
    colNeighbours.push(colPosition + 1);
  }

  if (verifyPosition(gameLogic, rowPosition + 1, colPosition - 1)) {
    // console.log(gameLogic[rowPosition + 1][colPosition - 1]);
    // console.log("+->" + (rowPosition + 1));
    // console.log("+->" + (colPosition - 1));
    gameLogic[rowPosition + 1][colPosition - 1] =
      gameLogic[rowPosition + 1][colPosition - 1] + incrementVal;
    rowNeighbours.push(rowPosition + 1);
    colNeighbours.push(colPosition - 1);
  }

  if (verifyPosition(gameLogic, rowPosition, colPosition + 1)) {
    // console.log(gameLogic[rowPosition][colPosition + 1]);
    // console.log(".+>" + rowPosition);
    // console.log(".+>" + (colPosition + 1));
    gameLogic[rowPosition][colPosition + 1] =
      gameLogic[rowPosition][colPosition + 1] + incrementVal;
    rowNeighbours.push(rowPosition);
    colNeighbours.push(colPosition + 1);
  }

  if (verifyPosition(gameLogic, rowPosition, colPosition - 1)) {
    // console.log(gameLogic[rowPosition][colPosition - 1]);
    // console.log(".->" + rowPosition);
    // console.log(".->" + (colPosition - 1));
    gameLogic[rowPosition][colPosition - 1] =
      gameLogic[rowPosition][colPosition - 1] + incrementVal;
    rowNeighbours.push(rowPosition);
    colNeighbours.push(colPosition - 1);
  }

  if (verifyPosition(gameLogic, rowPosition + 1, colPosition)) {
    // console.log(gameLogic[rowPosition + 1][colPosition]);
    // console.log("+.>" + (rowPosition + 1));
    // console.log("+.>" + colPosition);
    gameLogic[rowPosition + 1][colPosition] =
      gameLogic[rowPosition + 1][colPosition] + incrementVal;
    rowNeighbours.push(rowPosition + 1);
    colNeighbours.push(colPosition);
  }

  if (verifyPosition(gameLogic, rowPosition - 1, colPosition)) {
    // console.log(gameLogic[rowPosition - 1][colPosition]);
    // console.log("-.>" + (rowPosition - 1));
    // console.log("-.>" + colPosition);
    gameLogic[rowPosition - 1][colPosition] =
      gameLogic[rowPosition - 1][colPosition] + incrementVal;
    rowNeighbours.push(rowPosition - 1);
    colNeighbours.push(colPosition);
  }

  return rowNeighbours, colNeighbours;
};

export const gameGenerator = (props) => {
  const rows = parseInt(props.rows);
  const cols = parseInt(props.cols);
  const mines = parseInt(props.mines);

  const gameLogic = [];

  let linearArray = [];
  for (let mineIndex = 0; mineIndex < mines; mineIndex++) {
    linearArray.push("M");
  }
  for (let cellIndex = 0; cellIndex < rows * cols - mines; cellIndex++) {
    linearArray.push(0);
  }

  const randomizeArray = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  };

  randomizeArray(linearArray);

  for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
    gameLogic.push([]);
    for (let colIndex = 0; colIndex < cols; colIndex++) {
      gameLogic[rowIndex].push(linearArray.pop());
    }
  }

  for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
    for (let colIndex = 0; colIndex < cols; colIndex++) {
      if (gameLogic[rowIndex][colIndex] === "M") {
        let gameSpecs = {
          gameLogic: gameLogic,
          rowPosition: rowIndex,
          colPosition: colIndex,
        };
        findNeighboursin2DArrayPosition(gameSpecs);
      }
    }
  }

  return gameLogic;
};
