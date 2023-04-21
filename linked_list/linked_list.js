class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    insertAtHead(data) {
        const node = new Node(data);
        node.next = this.head;
        this.head = node;
        this.#increaseSize();
        return this;
    }

    insertAtTail(data) {
        const node = new Node(data);

        if (!this.head) {
            this.head = node;
            return this;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = node;
        this.#increaseSize();
        return this;
    }

    insertAtIndex(data, index) {
        if (index === 0) {
            return this.insertAtHead(data);
        }

        let currentPos = 1;
        let prev = this.head;
        let current = this.head.next;

        const node = new Node(data);

        while (current) {
            if (currentPos === index) {
                node.next = current;
                prev.next = node;
                this.#increaseSize();
                return this;
            }

            prev = current;
            current = current.next;
            currentPos += 1;
        }
        prev.next = node;
        this.#increaseSize();
        return this;
    }

    deleteAtHead() {
        if (!this.head) {
            throw new Error(
                "Cannot perform delete as list does not contain any values"
            );
        }

        this.head = this.head.next;
        this.#decreaseSize();
        return this;
    }

    deleteAtTail() {
        if (!this.head) {
            throw new Error(
                "Cannot perform delete as list does not contain any values"
            );
        }

        let current = this.head;
        let prev = this.head;
        while (current.next) {
            prev = current;
            current = current.next;
        }

        prev.next = null;
        this.#decreaseSize();
        return this;
    }

    deleteAtIndex(index) {
        if (!this.head) {
            throw new Error(
                "Cannot perform delete as list does not contain any values"
            );
        }

        if (index === 0) {
            return this.deleteAtHead();
        }

        let currentPos = 1;

        let prev = this.head;
        let current = this.head.next;

        while (current.next) {
            if (index === currentPos) {
                prev.next = current.next;
                this.#decreaseSize();
                return this;
            }
            prev = current;
            current = current.next;
            currentPos += 1;
        }

        throw new Error(
            `Cannot delete index out of bounds, max index is ${currentPos}`
        );
    }

    deleteFirstInstance(value) {
        if (!this.head) {
            throw new Error(
                "Cannot perform delete as list does not contain any values"
            );
        }

        if (this.head.data === value) {
            this.#decreaseSize();
            return this.deleteAtHead();
        }

        let prev = this.head;
        let current = this.head.next;

        while (current) {
            if (current.data === value) {
                prev.next = current.next;
                this.#decreaseSize();
                return this;
            }
            prev = current;
            current = current.next;
        }

        throw new Error(`Could not find node with value "${value}"`);
    }

    searchByValue(val) {
        let currentPos = 0;
        let current = this.head;

        while (current) {
            if (current.data === val) {
                return currentPos;
            }

            current = current.next;
            currentPos += 1;
        }

        return -1;
    }

    getValueByIndex(index) {
        let currentPos = 0;
        let current = this.head;

        while (current) {
            if (currentPos === index) {
                return current.data;
            }
            current = current.next;
            currentPos += 1;
        }

        throw new Error(
            `Cannot find item at index due to out of bounds, max index is ${currentPos}`
        );
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

    getSize() {
        return this.size;
    }

    #increaseSize() {
        this.size += 1;
    }

    #decreaseSize() {
        this.size -= 1;
    }
}

module.exports = {
    SinglyLinkedList,
};
