// data structures
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
    }

    insertAtHead(data) {
        const node = new Node(data);
        node.next = this.head;
        this.head = node;
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
        return this;
    }

    insertAtIndex(data, index) {
        if (index === 0) {
            return this.insertAtHead(data);
        }

        let current_pos = 1;
        let prev = this.head;
        let current = this.head.next;

        const node = new Node(data);

        while (current) {
            if (current_pos === index) {
                node.next = current;
                prev.next = node;
                return this;
            }

            prev = current;
            current = current.next;
            current_pos += 1;
        }
        prev.next = node;
        return this;
    }

    deleteAtHead() {
        if (!this.head) {
            throw new Error(
                "Cannot perform delete as list does not contain any values"
            );
        }

        this.head = this.head.next;
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

        let current_pos = 1;

        let prev = this.head;
        let current = this.head.next;

        while (current.next) {
            if (index === current_pos) {
                prev.next = current.next;
                return this;
            }
            prev = current;
            current = current.next;
            current_pos += 1;
        }

        throw new Error(
            `Cannot delete index out of bounds, max index is ${current_pos}`
        );
    }

    deleteFirstInstance(value) {
        if (!this.head) {
            throw new Error(
                "Cannot perform delete as list does not contain any values"
            );
        }

        if (this.head.data === value) {
            return this.deleteAtHead();
        }

        let prev = this.head;
        let current = this.head.next;

        while (current) {
            if (current.data === value) {
                prev.next = current.next;
                return this;
            }
            prev = current;
            current = current.next;
        }

        throw new Error(`Could not find node with value "${value}"`);
    }
}

module.exports = {
    SinglyLinkedList,
};
