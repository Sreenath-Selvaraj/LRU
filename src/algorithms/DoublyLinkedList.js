const DoublyLinkedNode = require('./DoublyLinkedNode');

class DoublyLinkedList {
  constructor() {
    this.head = new DoublyLinkedNode(null);
    this.tail = new DoublyLinkedNode(null);

    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  detachNode(node) {
        if (node != null) {
            node.prev.next = node.next;
            node.next.prev = node.prev;
        }
    }

    addNodeAtLast(node) {
        const tailPrev = this.tail.prev;
        tailPrev.next = node;
        node.next = this.tail;
        this.tail.prev = node;
        node.prev = tailPrev;
    }

    addElementAtLast(element) {
        if (!element) {
            throw new Error("Element cannot be null");
        }
        const newNode = new DoublyLinkedNode(element);
        this.addNodeAtLast(newNode);
        return newNode;
    }

    isItemPresent() {
        return this.head != this.tail;
    }

    getFirstNode() {
        if (!this.isItemPresent()) {
            return null;
        }
        return this.head.next;
    }

    getLastNode() {
        if (!this.isItemPresent()) {
            return null;
        }
        return this.tail.prev;
    }



}

module.exports = DoublyLinkedList;
