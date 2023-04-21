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

/* Finding node indexes by value */
console.log(
    `An element that exists, like "Other" should return the index. "Other" returned: ${linkedList.searchByValue(
        "Other"
    )};`
);
/* not found returns -1 */
console.log(
    `An element that does not exist should return -1. "xoxoxoxo" returned: ${linkedList.searchByValue(
        "xoxoxoxo"
    )};`
);

/* Finding node data by index */
console.log(`Get value at index 2: ${linkedList.getValueByIndex(2)}`);
catchAndLog(() => linkedList.getValueByIndex(99));

/* inserting at invalid index should error */
catchAndLog(() => linkedList.deleteAtIndex(999));

linkedList.forEach((data, index) => console.log(`${index}: ${data}`));

console.log(`Size: ${linkedList.getSize()}`);
