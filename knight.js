class Knight {
  constructor(position) {
    this.position = position;
    this.moves = this.allMoves(position);
  }

  allMoves([a, b]) {
    let moves = [];
    let directions = [
      [2, 1],
      [2, -1],
      [-2, 1],
      [-2, -1],
      [1, 2],
      [1, -2],
      [-1, 2],
      [-1, -2],
    ];
    directions.forEach((direction) => {
      let x = a + direction[0];
      let y = b + direction[1];
      if (x >= 0 && x <= 7 && y >= 0 && y <= 7) {
        moves.push([x, y]);
      }
    });
    return moves;
  }

  static bfs(start, target) {
    let queue = [[start, []]]; // Queue holds [position, path]
    let visited = new Set();
    visited.add(start.toString());

    while (queue.length) {
      let [currentPosition, path] = queue.shift();
      let currentKnight = new Knight(currentPosition);

      // Check if we reached the target
      if (currentPosition[0] === target[0] && currentPosition[1] === target[1]) {
        return [...path, currentPosition];
      }

      // Add valid moves to the queue
      for (let move of currentKnight.moves) {
        if (!visited.has(move.toString())) {
          visited.add(move.toString());
          queue.push([move, [...path, currentPosition]]);
        }
      }
    }

    return null; // If no path is found
  }
}

/* let ss = new KnightMoves();
console.log(ss.paths([0, 0], [3, 3])); */
let newSet = new Set();
newSet.add([1,2].toString());
newSet.add([1,2].toString());
console.log(newSet);
let start = [0, 0];
let target = [3, 3];
let path = Knight.bfs(start, target);  // Directly using the class to call bfs
console.log(path);

