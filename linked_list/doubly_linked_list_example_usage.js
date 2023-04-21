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
