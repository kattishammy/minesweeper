/*
 * This file isintended to hold maximum possible hasrdcodings in project.
 */
import { useState } from "react";

export const explosionImg = "/media/explosion.png";
export const greenImg = "/media/green.jpg";
export const mineImg = "/media/mine.png";
export const redImg = "/media/red.jpg";
export const vanillaImg = "/media/vanilla.jpg";
export const oneImg = "/media/one.jpg";
export const twoImg = "/media/two.jpg";
export const threeImg = "/media/three.jpg";
export const fourImg = "/media/four.jpg";
export const fiveImg = "/media/five.jpg";
export const sixImg = "/media/six.jpg";
export const sevenImg = "/media/seven.jpg";
export const eightImg = "/media/eight.jpg";

export const defRows = 10;
export const defCols = 10;
export const defMines = 10;

let globalGameStatus = false;
export const getGlobalGameStatus = () => {
  return globalGameStatus;
};
export const setGlobalGameStatus = (newGlobalGameStatus) => {
  globalGameStatus = newGlobalGameStatus;
};
