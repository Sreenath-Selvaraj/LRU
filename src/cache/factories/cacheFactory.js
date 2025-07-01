const Cache = require('../cache');
const LRU = require('../policies/LruEvictionPolicy');
const HashMapBasedStorage = require('../storage/hashMapBasedStorage');

class CacheFactory {
    static createCache(evictionPolicy, storage, capacity) { // Fix: static method
        if (!evictionPolicy || !storage || !capacity) {
            throw new Error("Eviction policy and storage must be provided");
        }
        let Storage;
        let EvictionPolicy;
        if(storage === 'HashMap') {
          Storage = new HashMapBasedStorage(capacity);  
        } else {
          throw new Error("Unsupported storage type");
        }
        if(evictionPolicy === 'LRU') {
          EvictionPolicy = new LRU();
        } else {
          throw new Error("Unsupported eviction policy");
        }
        return new Cache(EvictionPolicy, Storage);
    }
}

module.exports = CacheFactory;
