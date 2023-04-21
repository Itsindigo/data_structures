const { catchAndLog } = require("../utils");
const { SinglyLinkedList } = require("./linked_list");

/* Initialise the list */
const linkedList = new SinglyLinkedList();

linkedList.insertAtHead("From");
linkedList.insertAtTail("The");
linkedList.insertAtTail("Side");
linkedList.insertAtHead("Hello");
linkedList.insertAtIndex("Other", 3);

/* Inserting beyond the list size will just append */
linkedList.insertAtIndex("- Adele", 99);

/* Delete that last message with the Artist */
linkedList.deleteAtTail();

/* Make a mistake, and then delete at the index */
linkedList.insertAtIndex("whoops", 2);
linkedList.deleteAtIndex(2);

/* Let's delete by value */
linkedList.insertAtTail("ABC");
linkedList.deleteFirstInstance("ABC");
catchAndLog(() => linkedList.deleteFirstInstance("zzzzzz"));

/* inserting at invalid index should error */
catchAndLog(() => linkedList.deleteAtIndex(999));

/* Always gotta set the current to a starting point, not the list itself */
let current = linkedList.head;
let index = 0;

/* In order to process final element, remember to loop from current, not current.next  */
while (current) {
    console.log(`${index}: ${current.data}`);
    current = current.next;
    index += 1;
}
