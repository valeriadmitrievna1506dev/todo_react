class RequestError extends Error {
  constructor(message) {
    super(message);
    this.name = 'RequestError';
  }
}
class FoundError extends Error {
  constructor(message) {
    super(message);
    this.name = 'FoundError';
  }
}

module.exports = {
  requestError: RequestError,
  foundError: FoundError,
};
