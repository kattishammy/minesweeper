export const getSurroundingNeighbours = (
  array,
  i,
  j,
  visitedObject,
  numbersObject
) => {
  if (i < 0 || i >= array.length || j < 0 || j >= array[i].length) {
    return;
  }
  if (array[i][j] === 0) {
    if (!visitedObject[i]) {
      visitedObject[i] = { j: "visited" };
    } else {
      visitedObject[i][j] = "visited";
    }
    getSurroundingNeighbours(array, i - 1, j - 1, visitedObject, numbersObject);
    getSurroundingNeighbours(array, i - 1, j + 1, visitedObject, numbersObject);
    getSurroundingNeighbours(array, i + 1, j - 1, visitedObject, numbersObject);
    getSurroundingNeighbours(array, i + 1, j + 1, visitedObject, numbersObject);
    getSurroundingNeighbours(array, i - 1, j, visitedObject, numbersObject);
    getSurroundingNeighbours(array, i + 1, j, visitedObject, numbersObject);
    getSurroundingNeighbours(array, i, j - 1, visitedObject, numbersObject);
    getSurroundingNeighbours(array, i, j + 1, visitedObject, numbersObject);
  } else {
    if (numbersObject[i]) {
      numbersObject[i][j] = "number";
    } else {
      numbersObject[i] = { j: "number" };
    }
  }
};

export const uniqueTrees = (array) => {
  listOfTrees = [];
  for (let i = 0; i < array.length; i++) {
    let visitedObject = {};
    let numbersObject = {};
    for (let j = 0; j < array[i].length; j++) {
      getSurroundingNeighbours(array, i, j, visitedObject, numbersObject);
    }
    listOfTrees.push([visitedObject, numbersObject]);
  }
  console.log(listOfTrees);
};
