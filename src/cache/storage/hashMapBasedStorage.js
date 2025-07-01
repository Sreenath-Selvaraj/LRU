const Storage = require('./storage');
const CacheFullError = require('../errors/CacheFullError');

class HashMapBasedStorage extends Storage {
  constructor(capacity) {
    super()
    this.capacity = capacity;
    this.storage = new Map();
  }

  get(key) {
    return this.storage.get(key);
  }

  add(key, value) {
    if(this.#isStorageFull()) {
      throw new CacheFullError();
    }
    this.storage.set(key, value);
  }

  remove(key) {
    return this.storage.delete(key);
  }

  #isStorageFull() {
    console.log(`Storage size: ${this.storage.size}, Capacity: ${this.capacity}`);
    return this.storage.size === this.capacity;
  }
}

module.exports = HashMapBasedStorage;
