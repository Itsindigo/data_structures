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
            this.#increaseSize();
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

    deleteAtHead() {
        if (!this.head) {
            throw new Error(
                "Cannot delete the head from a list which does not have any nodes"
            );
        }

        this.head = this.head.next;
        if (this.head) {
            this.head.prev = null;
        } else {
            this.tail = null; // If there was only one node we update the tail too.
        }
        this.#decreaseSize();
        return this;
    }

    deleteAtTail() {
        if (!this.head) {
            throw new Error(
                "Cannot delete the head from a list which does not have any nodes"
            );
        }

        let penultimate = this.tail.prev;

        if (penultimate) {
            this.tail = penultimate;
            this.tail.next = null;
        } else {
            this.head = null;
            this.tail = null;
        }

        this.#decreaseSize();

        return this;
    }

    deleteAtIndex(index) {
        if (!this.head || index === 0) {
            return this.deleteAtHead();
        }

        if (index >= this.getSize()) {
            throw new Error(
                `Cannot delete index out of bounds, max index is ${this.getSize()}`
            );
        }

        let currentPos = 1;
        let prev = this.head;
        let current = this.head.next;

        while (current) {
            if (currentPos === index) {
                if (current.next) {
                    prev.next = current.next;
                    current.next.prev = prev;
                } else {
                    this.tail = prev;
                    prev.next = null;
                }

                this.#decreaseSize();
                return this;
            }

            prev = current;
            current = current.next;
            currentPos += 1;
        }

        return this;
    }

    deleteFirstInstance(val) {
        if (!this.head) {
            throw new Error(
                "Cannot perform delete as list does not contain any values"
            );
        }

        if (this.head.data === val) {
            return this.deleteAtHead();
        }

        let prev = this.head;
        let current = this.head.next;

        while (current) {
            if (current.data === val) {
                prev.next = current.next;

                if (!prev.next) {
                    this.tail = prev;
                } else {
                    current.next.prev = prev;
                }

                this.#decreaseSize();
                return this;
            }

            prev = current;
            current = current.next;
        }

        throw new Error(`Could not find node with value "${val}"`);
    }

    searchByValue(val) {
        // same as linked list
    }

    getValueByIndex(index) {
        // we could make an optimisation here by checking the index vs the size.
        // if the index is > size / 2, we can traverse from tail to head rather than head to tail.
        // not going to implement as very similar to linked list.
    }

    forEach(cb) {
        let currentPos = 0;
        let current = this.head;

        while (current) {
            cb(current.data, currentPos);
            current = current.next;
            currentPos += 1;
        }

        return this;
    }

    reverse() {
        let current = this.head;
        let temp = null;

        // for each element we move the next element to the previous position, then update the current state
        // to target the next element (which has now been switched to current.prev)
        while (current) {
            temp = current.prev;
            current.prev = current.next;
            current.next = temp;

            current = current.prev;
        }

        // temp will only be populated if list size > 1,
        // in which case you can reverse head and tail at the end of the sequence
        if (temp) {
            this.head = this.tail;
            this.tail = temp;
        }

        return this;
    }
}

module.exports = {
    DoublyLinkedList,
};
