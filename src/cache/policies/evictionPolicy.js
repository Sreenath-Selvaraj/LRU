class EvictionPolicy {
    constructor() {
    }

    keyAccessed(key) {
        throw new Error("Method 'keyAccessed' not implemented");
    }

    evictKey() {
        throw new Error("Method 'evictKey' not implemented");
    }
}

module.exports = EvictionPolicy;
