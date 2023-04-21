const { catchAndLog } = require("../utils");
const { DoublyLinkedList } = require("./doubly_linked_list");

let dll = new DoublyLinkedList();

dll.insertAtHead("xxx");
dll.insertAtHead("yyy");

dll = new DoublyLinkedList();
dll.insertAtTail("zzz");
dll.insertAtTail("ooo");

dll = new DoublyLinkedList();
dll.insertAtTail("1");
dll.insertAtTail("2");
dll.insertAtTail("3");
dll.insertAtTail("4");
dll.insertAtIndex("yyy", 6);

let current = dll.head;

while (current) {
    console.log({
        prev: current.prev?.data,
        data: current.data,
        next: current.next?.data,
    });
    current = current.next;
}

dll = new DoublyLinkedList();
dll.insertAtTail("xxx");
dll.deleteAtTail();
console.log(dll);

dll.insertAtTail("xxx");
dll.insertAtTail("yyy");
dll.deleteAtTail();

console.log(dll);

dll = new DoublyLinkedList();
dll.insertAtTail("aaa");
dll.insertAtTail("bbb");
dll.insertAtTail("ccc");
dll.deleteAtIndex(0);

console.log(dll);

dll = new DoublyLinkedList();
dll.insertAtTail("aaa");
dll.insertAtTail("bbb");
dll.insertAtTail("ccc");

dll.deleteFirstInstance("bbb");
catchAndLog(() => dll.deleteFirstInstance("ddd"));

console.log(dll);

dll = new DoublyLinkedList();
dll.insertAtTail("aaa");
dll.insertAtTail("bbb");
dll.insertAtTail("ccc");

dll.reverse();
console.log(dll);

dll.forEach((data, index) => console.log(`${index}: ${data}`));
