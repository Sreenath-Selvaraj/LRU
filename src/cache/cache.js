class Cache {
  constructor(evictionPolicy, storage) {
    this.evictionPolicy = evictionPolicy
    this.storage = storage;
  }

  get(key) {
    try {
      const value = this.storage.get(key);
      if(!value) {
        throw new Error(`Key ${key} not found in cache`);
      }
      this.evictionPolicy.keyAccessed(key);
      return value;
    } catch (error) {
      throw error;
    }

  }

  add(key, value) {
    try {
      this.storage.add(key, value);
      this.evictionPolicy.keyAccessed(key);
    } catch (error) {
      if (error.code === 'CACHE_FULL') {
        console.log(`Cache is full. Evicting key...`);
        const evictedKey = this.evictionPolicy.evictKey();
         if(!evictedKey) {
          throw new Error("Cannot evict the key. But Storage is full");
        }
        this.storage.remove(evictedKey);
        this.add(key, value);
      } else {
        throw error;
      }
    }
  }
}

module.exports = Cache;
