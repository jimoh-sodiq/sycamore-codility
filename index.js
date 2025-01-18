// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(T) {
  let maxChanges = 0;

  function traverseTree(node, direction, changes) {
    if (!node) return;

    // Update the maximum number of changes
    maxChanges = Math.max(maxChanges, changes);

    if (direction === "l") {
      traverseTree(node.l, "l", changes); // Same direction, no change
      traverseTree(node.r, "r", changes + 1); // Change direction, increment
    } else if (direction === "r") {
      traverseTree(node.l, "l", changes + 1); // Change direction, increment
      traverseTree(node.r, "r", changes); // Same direction, no change
    } else {
      // Initial state: Explore both directions from the root
      traverseTree(node.l, "l", 0);
      traverseTree(node.r, "r", 0);
    }
  }

  // Start traverseTree from the root
  traverseTree(T, null, 0);

  return maxChanges;
