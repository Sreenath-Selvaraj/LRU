const EvictionPolicy = require("./evictionPolicy");
const DoublyLinkedList = require("../../algorithms/DoublyLinkedList");

class LRU extends EvictionPolicy {
  constructor() {
    super();
    this.dll = new DoublyLinkedList();
    this.map = new Map();
  }

  keyAccessed(key) {
    if (this.map.has(key)) {
      const node = this.map.get(key);
      this.dll.detachNode(node);
      this.dll.addNodeAtLast(node);
    } else {
      const newNode = this.dll.addElementAtLast(key);
      this.map.set(key, newNode);
    }
  }

  evictKey() {
    const nodeToEvict = this.dll.getFirstNode();
    if(!nodeToEvict) {
      throw new Error("No keys to evict");
    }
    this.dll.detachNode(nodeToEvict);
    this.map.delete(nodeToEvict.element);
    return nodeToEvict.element;
  }

}

module.exports = LRU;
