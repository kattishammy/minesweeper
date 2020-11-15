import React, { useState } from "react";
import { GameCell } from "../gamecell/GameCell";
import "./gameboard.css";
import { defRows, defCols, defMines } from "../../configs/config";
import { GameStatusNavbar } from "../gamestatus/GameStatus";

export const GameBoard = () => {
  const [rows, setRows] = useState(defRows);
  const [cols, setCols] = useState(defCols);
  const [mines, setMines] = useState(defMines);
  const [explode, setExplode] = useState(false);
  const [tabelAccess, setTableAccess] = useState(false);
  const [gameLogic, setGameLogic] = useState([]);
  console.log("gameLogic", gameLogic);
  const tableRows = [];
  let tableCols = [];

  for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
    for (let colIndex = 0; colIndex < cols; colIndex++) {
      tableCols.push(
        <td>
          <GameCell
            value={gameLogic.length ? gameLogic[rowIndex][colIndex] : 0}
            explodeAllMines={setExplode}
            explodeCurrentMine={explode}
            className={"gamecell-" + rowIndex + "-" + colIndex}
          />
        </td>
      );
    }

    tableRows.push(<tr>{tableCols}</tr>);
    tableCols = [];
  }

  return (
    <React.Fragment>
      <GameStatusNavbar
        rowsOnChangeHandler={setRows}
        colsOnChangeHandler={setCols}
        minesOnChangeHandler={setMines}
        startGameHandler={setGameLogic}
        currentRows={rows}
        currentCols={cols}
        currentMines={mines}
      />
      <div className="pt-3 bg-dark" id="game-board">
        <table className="table-borderless" id="game-table">
          <tbody>{tableRows}</tbody>
        </table>
      </div>
    </React.Fragment>
  );
};
