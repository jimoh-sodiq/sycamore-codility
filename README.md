# sycamore-codility
Time Complexity: O(N), where N is the number of nodes in the tree (we visit each node once)
Space Complexity: O(H), where H is the height of the tree (recursion stack)

## Parameters:
node: The current node being visited.
direction: The direction from the parent to the current node ("l" for left, "r" for right, or null for the root).
changes: The number of direction changes encountered so far in this path.

## Logic
Base Case: If the node is null, stop recursion (return)

Update maxChanges with the larger value between maxChanges and the current changes

If the direction is "l" (coming from the left child): Continue left without incrementing changes (same direction). Go right and increment changes (direction change).
If the direction is "r" (coming from the right child):  Continue right without incrementing changes (same direction).  Go left and increment changes (direction change).
If it's the root (direction is null), explore both left and right with changes starting at 0.

call the traverseNode with the root node, no direction (null), and 0 changes.
Once all paths have been explored, maxChanges holds the maximum number of direction changes encountered.
