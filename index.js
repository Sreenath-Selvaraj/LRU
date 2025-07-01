const cacheFactory = require('./src/cache/factories/cacheFactory');

const cache = new cacheFactory().createCache('LRU', 'HashMap', 2);

cache.add(1, 1);
cache.add(2, 2);
cache.add(3, 3);
console.log(cache.get(1));

