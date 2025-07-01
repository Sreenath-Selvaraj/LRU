class CacheFullError extends Error {
  constructor(message = 'Cache is full') {
    super(message);
    this.name = 'CacheFullError';
    this.code = 'CACHE_FULL';
  }
}

module.exports = CacheFullError;