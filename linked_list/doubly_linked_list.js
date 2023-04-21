class Node {
    constructor(data) {
        this.prev = null;
        this.next = null;
        this.data = data;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    getSize() {
        return this.size;
    }

    #increaseSize() {
        this.size += 1;
    }

    #decreaseSize() {
        this.size -= 1;
    }

    insertAtHead(data) {
        let node = new Node(data);

        if (!this.head) {
            this.head = node;
            this.tail = node;
            return this;
        }

        this.head.prev = node;
        node.next = this.head;
        this.head = node;
        this.#increaseSize();
        return this;
    }

    insertAtTail(data) {
        if (!this.head) {
            return this.insertAtHead(data);
        }

        let node = new Node(data);

        node.prev = this.tail;

        this.tail.next = node;
        this.tail = node;
        this.#increaseSize();
        return this;
    }

    insertAtIndex(data, index) {
        if (!this.head || index === 0) {
            return this.insertAtHead(data);
        }

        let size = this.getSize();

        console.log({ index, size });

        if (index > size) {
            return this.insertAtTail(data);
        }

        let node = new Node(data);

        let prev = this.head;
        let current = this.head.next;
        let currentPos = 1;

        while (current) {
            if (currentPos === index) {
                node.prev = prev;
                node.next = current;

                prev.next = node;
                current.prev = node;

                this.#increaseSize();
                return this;
            }

            prev = current;
            current = current.next;
            currentPos += 1;
        }
    }
}

module.exports = {
    DoublyLinkedList,
};
