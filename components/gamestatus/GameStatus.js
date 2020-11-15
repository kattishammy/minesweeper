/*
 * This component holds the representational components of topNav bar for user inputs provided. Holds the logical info about starting the game.
 */
import React, { useState } from "react";
import { defRows, defCols, defMines } from "../../configs/config";
import { gameGenerator } from "../gamegenerator/gameGenerator";

export const GameStatusNavbar = (props) => {
  const [gameStatus, setGameStatus] = useState(false);

  let currentCols = parseInt(props.currentCols);
  let currentRows = parseInt(props.currentRows);
  let currentMines = parseInt(props.currentMines);

  const rowsOnChangeHandler = (event) => {
    if (gameStatus) return;
    let numberOfRows = parseInt(event.target.value);
    if (!numberOfRows) numberOfRows = defRows;
    console.log(numberOfRows);
    props.rowsOnChangeHandler(numberOfRows);
  };

  const colsOnChangeHandler = (event) => {
    if (gameStatus) return;
    let numberOfCols = parseInt(event.target.value);
    if (!numberOfCols) numberOfCols = defCols;
    console.log(numberOfCols);
    props.colsOnChangeHandler(numberOfCols);
  };

  const minesOnChangeHandler = (event) => {
    if (gameStatus) return;
    let numberOfMines = parseInt(event.target.value);
    if (!numberOfMines) numberOfMines = defMines;
    if (numberOfMines > currentCols * currentRows)
      numberOfMines = currentCols * currentRows;
    console.log(numberOfMines);
    props.minesOnChangeHandler(numberOfMines);
  };

  const startGameHandler = (event) => {
    event.preventDefault();
    setGameStatus(true);
    document.getElementById("game-board").click(false);
    if (currentMines > currentCols * currentRows) {
      currentMines = currentCols * currentMines;
    }
    let gameProps = {
      rows: currentRows,
      cols: currentCols,
      mines: currentMines,
    };
    const gameLogic = gameGenerator(gameProps);
    console.log(gameLogic);
    props.startGameHandler((prev) => {
      for (let rowIndex = 0; rowIndex < currentRows; rowIndex++) {
        prev[rowIndex] = [...gameLogic[rowIndex]];
      }
      prev = [...gameLogic];
      return prev;
    });
  };

  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="number"
            min="0"
            placeholder={"Rows=" + defRows}
            onChange={rowsOnChangeHandler}
            disabled={gameStatus}
          ></input>
          <input
            className="form-control mr-sm-2"
            type="number"
            min="0"
            placeholder={"Columns=" + defCols}
            onChange={colsOnChangeHandler}
            disabled={gameStatus}
          ></input>
          <input
            className="form-control mr-sm-4"
            type="number"
            min="0"
            placeholder={
              "Mines=" + defMines + ", max=" + currentCols * currentRows
            }
            onChange={minesOnChangeHandler}
            disabled={gameStatus}
          ></input>
          <div className="btn-group">
            <button
              className="btn btn-success"
              onClick={startGameHandler}
              disabled={gameStatus}
            >
              Start
            </button>
            <button className="btn btn-danger">Restart</button>
          </div>
        </form>
      </nav>
    </div>
  );
};
