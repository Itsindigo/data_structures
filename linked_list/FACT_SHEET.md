# Linked List

## Variants

-   Singly Linked List - Each Node has a reference to the next Node.
-   Doubly Linked List - Each Node has a reference to the previous Node and the next Node.
-   Circularly Linked List - The final node in the list has a reference to the first node in the list. Creating a circular reference.

## Basic Operations

-   Insertion: Adding a new node to the list (at the head, tail, or a specific position).
-   Deletion: Removing a node from the list (by value or position).
-   Traversal: Visiting each node in the list and processing the data as needed. This can be implemented as a forEach or a map.
-   Searching: Finding a specific node in the list based on its data value.
-   Length/Size: Determining the number of nodes in the list.

## Time Complexity

-   Access: O(n) - You may need to traverse the entire list to access a specific node.
-   Search: O(n) - You may need to traverse the entire list to find a specific node.
-   Insertion: O(1) at the head, O(n) at a specific position, or O(n) at the tail (O(1) if a tail pointer is used).
-   Deletion: O(1) at the head, O(n) at a specific position, or O(n) at the tail (O(1) if a tail pointer is used).

## Advantages

-   Dynamic size: Linked lists can grow or shrink during runtime, unlike arrays.
-   Efficient insertions and deletions: Linked lists provide constant-time complexity for insertions and deletions at the head (and tail if a tail pointer is used).
-   Lower memory overhead: Linked lists don't require contiguous memory allocation or resizing.

## Disadvantages

-   No random access: Unlike arrays, linked lists don't support constant-time random access to elements.
-   Memory overhead: Each node requires extra memory for storing the reference (or pointer) to the next (and previous) node.
-   Slower traversals: Accessing elements in a linked list can be slower than in an array due to non-contiguous memory allocation.
